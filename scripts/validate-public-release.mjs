#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { constants } from 'node:fs';
import { lstat, open, realpath } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const excludedDirectories = new Set([
  '.git', '.worktrees', 'worktrees', 'node_modules', 'dist', '.superpowers',
  '.playwright', '.playwright-cli', '.playwright-mcp', '.cache', 'ms-playwright',
  'browser-cache', 'browsercache', 'browser_cache', '.browser-cache',
]);
const sensitiveDirectories = new Set(['.ssh', '.aws', '.azure', '.config', '.claude', '.codex', '.gnupg']);
const fakeUsers = new Set(['demo-user', 'example-user', 'your-user', 'username', 'user', '사용자명', '실제사용자명']);
const uuid = '[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}';
const rules = [
  ['openai-token', /\bsk-(?!ant-)(?:(?:proj|svcacct)-)?[A-Za-z0-9_-]{20,}/g],
  ['anthropic-token', /\bsk-ant-(?:api\d+-)?[A-Za-z0-9_-]{20,}/g],
  ['github-token', /\b(?:gh[pousr]_[A-Za-z0-9]{36,}|github_pat_[A-Za-z0-9_]{50,})/g],
  ['private-key', /-----BEGIN (?:[A-Z0-9]+ )?PRIVATE KEY-----/g],
  ['password-assignment', /\b(?:[a-z][a-z0-9]*_)*(?:password|passwd|pwd)\b["'`]?\s*[:=]\s*["'`]?([^\s"'`;,)]+)/gi, 1],
  ['connection-password', /\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?|redis|rediss|mssql|amqp|amqps):\/\/[^\s/:@]+:([^\s/@]+)@/gi, 1],
  ['personal-home-path', /\/(?:Users|home)\/([^/\s"'`<>|]+)(?:\/|$)/g, 1],
  ['execution-session-id', new RegExp('(?:session[ _-]?id|세션\\s*ID)["\'`]?\\s*[:=]\\s*["\'`]?(' + uuid + ')', 'gi'), 1],
  ['execution-cost', /(?:total[_ -]?cost[_ -]?usd["'`]?\s*[:=]\s*["'`]?\d+(?:\.\d+)?|(?:총\s*비용(?:\s*표시)?|total\s+cost|cost)\s*[:=]\s*(?:USD\s*|\$)\d+(?:\.\d+)?)/gi],
  ['account-email', /(?:account[_ -]?email|계정\s*이메일|emailAddress|Claude(?:\s+Code)?\s+email)["'`]?\s*[:=]\s*["'`]?([A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/gi, 1],
  ['organization-id', new RegExp('(?:organi[sz]ation[ _-]?(?:id|uuid)|org[ _-]?(?:id|uuid)|조직\\s*ID)["\'`]?\\s*[:=]\\s*["\'`]?(' + uuid + '|org[-_][A-Za-z0-9]{16,})', 'gi'), 1],
];

function isPlaceholder(value) {
  return /^(?:fake|demo|example|your)[-_][A-Za-z0-9_-]+$/i.test(value)
    || /^(?:<[^>]+>|\$\{[^}]+\}|\*{3,}|x{8,})$/i.test(value);
}

function isAllowed(rule, value) {
  if (rule === 'personal-home-path') return fakeUsers.has(value);
  if (rule === 'account-email') return /@(?:[a-z0-9-]+\.)*example\.(?:com|org|net)$/i.test(value);
  if (rule.endsWith('-token')) return isPlaceholder(value.replace(/^(?:sk-ant-(?:api\d+-)?|sk-(?:(?:proj|svcacct)-)?|gh[pousr]_|github_pat_)/, ''));
  return isPlaceholder(value);
}

function displayFile(filePath) {
  if (path.isAbsolute(filePath)) return '[redacted-path]';
  let display = filePath;
  for (const [, pattern] of rules) display = display.replace(pattern, '[redacted]');
  return display.replace(/[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, '[redacted]');
}

// A deliberately narrow heuristic: no raw match, source snippet, or account value leaves this API.
export function scanPublicReleaseText(source, filePath) {
  const findings = [];
  const file = displayFile(filePath);
  const lines = source.split(/\r\n|\n|\r/);
  for (let index = 0; index < lines.length; index += 1) {
    for (const [rule, pattern, valueIndex = 0] of rules) {
      for (const match of lines[index].matchAll(pattern)) {
        if (rule === 'personal-home-path' && /https?:\/\/[^\s"'`<>]*$/i.test(lines[index].slice(0, match.index))) continue;
        if (isAllowed(rule, match[valueIndex])) continue;
        findings.push({ file, rule, line: index + 1 });
        break;
      }
    }
  }
  return findings;
}

function excluded(file) {
  return file.split('/').some((part) => excludedDirectories.has(part.toLowerCase()));
}

function sensitive(file) {
  const parts = file.toLowerCase().split('/');
  const name = parts.at(-1);
  return parts.some((part) => sensitiveDirectories.has(part))
    || (name.startsWith('.env') && !/^\.env\.(?:example|sample|template)$/.test(name))
    || /(?:^|[.-])keychain(?:-db)?$/.test(name)
    || /^(?:credentials(?:\.json)?|auth\.json|id_(?:rsa|ed25519|ecdsa|dsa))$/.test(name)
    || /\.(?:pem|key|p12|pfx)$/.test(name);
}

async function gitOutput(projectRoot, args) {
  const result = await execute('git', ['-C', projectRoot, '-c', 'core.fsmonitor=false', ...args], {
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
    env: {
      PATH: process.env.PATH,
      GIT_CONFIG_NOSYSTEM: '1',
      GIT_CONFIG_GLOBAL: '/dev/null',
      GIT_OPTIONAL_LOCKS: '0',
    },
  });
  return result.stdout;
}

export async function collectTrackedFiles(projectRoot) {
  try {
    const root = await realpath(projectRoot);
    const reportedRoot = (await gitOutput(root, ['rev-parse', '--show-toplevel'])).trimEnd();
    if (await realpath(reportedRoot) !== root) throw new Error('not-repository-root');
    const output = await gitOutput(root, ['ls-files', '-z']);
    return [...new Set(output.split('\0').filter(Boolean))].sort();
  } catch {
    // Git errors can include local paths or account data; never forward their messages.
    throw new Error('tracked-files-unavailable');
  }
}

async function openTrackedFile(root, file) {
  const parts = file.split('/');
  if (path.isAbsolute(file) || parts.some((part) => !part || part === '.' || part === '..')) {
    return { rule: 'unsafe-file' };
  }
  if (sensitive(file)) return { rule: 'sensitive-file' };
  let current = root;
  for (let index = 0; index < parts.length; index += 1) {
    current = path.join(current, parts[index]);
    const status = await lstat(current);
    if (status.isSymbolicLink() || (index < parts.length - 1 ? !status.isDirectory() : !status.isFile())) {
      return { rule: 'unsafe-file' };
    }
  }
  // Do not follow final-component symlinks, including a replacement after the lstat check.
  const handle = await open(current, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
  if (!(await handle.stat()).isFile()) {
    await handle.close();
    return { rule: 'unsafe-file' };
  }
  return { handle };
}

function textOrBinary(buffer) {
  if (buffer.includes(0)) return null;
  try {
    const source = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
    return /[\x01-\x08\x0b\x0c\x0e-\x1f]/.test(source) ? null : source;
  } catch {
    return null;
  }
}

export async function validatePublicRelease(projectRoot) {
  const files = await collectTrackedFiles(projectRoot);
  const root = await realpath(projectRoot);
  const findings = [];
  const skippedBinaryFiles = [];
  let scannedFiles = 0;
  let forbiddenTrackedFiles = 0;
  for (const file of files) {
    let handle;
    try {
      if (excluded(file)) {
        forbiddenTrackedFiles += 1;
        findings.push({ file: displayFile(file), rule: 'forbidden-tracked-path', line: 0 });
        continue;
      }
      const opened = await openTrackedFile(root, file);
      handle = opened.handle;
      if (opened.rule) {
        findings.push({ file: displayFile(file), rule: opened.rule, line: 0 });
        continue;
      }
      const source = textOrBinary(await handle.readFile());
      if (source === null) {
        skippedBinaryFiles.push(displayFile(file));
        continue;
      }
      scannedFiles += 1;
      findings.push(...scanPublicReleaseText(source, file));
    } catch {
      findings.push({ file: displayFile(file), rule: 'unreadable-file', line: 0 });
    } finally {
      await handle?.close();
    }
  }
  const counts = {};
  for (const { rule } of findings) counts[rule] = (counts[rule] || 0) + 1;
  return { findings, counts, trackedFiles: files.length, scannedFiles, forbiddenTrackedFiles, skippedBinaryFiles };
}

async function main() {
  const projectRoot = process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  try {
    const result = await validatePublicRelease(projectRoot);
    for (const finding of result.findings) console.log(JSON.stringify(finding));
    for (const file of result.skippedBinaryFiles) console.log(JSON.stringify({ file, rule: 'binary-skipped', line: 0 }));
    console.log(JSON.stringify({
      trackedFiles: result.trackedFiles,
      scannedFiles: result.scannedFiles,
      forbiddenTrackedFiles: result.forbiddenTrackedFiles,
      skippedBinaryCount: result.skippedBinaryFiles.length,
      findingCount: result.findings.length,
      counts: result.counts,
    }));
    process.exitCode = result.findings.length ? 1 : 0;
  } catch {
    console.error(JSON.stringify({ file: '.', rule: 'tracked-files-unavailable', line: 0 }));
    process.exitCode = 2;
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

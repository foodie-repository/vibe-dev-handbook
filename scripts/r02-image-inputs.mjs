import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, sep } from 'node:path';

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

export function sliceR02FrozenText(prompt) {
  const start = prompt.indexOf('INPUT METADATA');
  if (start < 0) throw new Error('R02 frozen text marker missing');
  return prompt.slice(start);
}

export function assertR02DeliveryUnchanged(before, after) {
  if (JSON.stringify(before) !== JSON.stringify(after)) throw new Error('R02 post-delivery input drift');
  return true;
}

// Builds actual image inputs; neither payload construction nor receipt proves visual review.
export function buildR02ImageInputs(root, manifest, { smoke = false, read = readFileSync, expectedManifestSha256 = 'cf4b14324e3b76e1955721878b255bf43ae0d1f2c8184f6f474704eb32486f76' } = {}) {
  if (sha256(Buffer.from(JSON.stringify(manifest))) !== expectedManifestSha256) throw new Error('R02 fixed manifest mismatch');
  const entries = manifest.entries.filter(entry => entry.path.endsWith('.png'));
  if (entries.length !== 18 || new Set(entries.map(entry => entry.path)).size !== 18) throw new Error('R02 requires 18 unique PNG paths');
  const selected = smoke ? entries.slice(0, 1) : entries;
  const inputs = [], mapping = [];
  for (const [index, entry] of selected.entries()) {
    const path = resolve(root, entry.path);
    if (!path.startsWith(resolve(root) + sep)) throw new Error('R02 image outside root');
    const bytes = read(path);
    if (sha256(bytes) !== entry.sha256) throw new Error('R02 image hash mismatch');
    if (bytes.length < 24 || !bytes.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10])) || bytes.toString('ascii', 12, 16) !== 'IHDR') throw new Error('R02 invalid PNG');
    const width = bytes.readUInt32BE(16), height = bytes.readUInt32BE(20);
    if (!width || !height) throw new Error('R02 invalid PNG dimensions');
    const record = { id: `R02-PNG-${String(index + 1).padStart(2, '0')}`, order: index + 1, path: entry.path, sha256: entry.sha256, width, height, detail: 'original' };
    mapping.push(record);
    inputs.push({ type: 'text', text: JSON.stringify(record) }, { type: 'localImage', path, detail: 'original' });
  }
  return { inputs, mapping, mappingSha256: sha256(Buffer.from(JSON.stringify(mapping))) };
}

import {r15PreCloseoutBytes} from './r15-closeout.mjs';
import {createHash} from 'node:crypto';
const sha=b=>createHash('sha256').update(b).digest('hex');
export const r15FixTransitions=[
  {
    "path": "CONTENT_MAP.md",
    "before": "50fd0cf9c1147db138445e7e94704faaa39dcf33919492604ef097ff7aaefb43",
    "after": "8f6c856d5842b2a892d278fac9d4ce6db427d2e4391799deabfdc17880bc626a",
    "replacements": [
      [
        "| [의존성·패키지 관리자·환경](src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `draft` | 9,271 | `/02-work-environment/dependencies-package-managers-environments/` |\n| [파일·폴더·경로](src/content/docs/02-work-environment/files-folders-paths.md) | `draft` | 20,543 | `/02-work-environment/files-folders-paths/` |",
        "| [의존성·패키지 관리자·환경](src/content/docs/02-work-environment/dependencies-package-managers-environments.md) | `draft` | 9,538 | `/02-work-environment/dependencies-package-managers-environments/` |\n| [파일·폴더·경로](src/content/docs/02-work-environment/files-folders-paths.md) | `draft` | 20,820 | `/02-work-environment/files-folders-paths/` |"
      ],
      [
        "| [터미널·프로세스·포트](src/content/docs/02-work-environment/terminal-processes-ports.md) | `draft` | 12,666 | `/02-work-environment/terminal-processes-ports/` |",
        "| [터미널·프로세스·포트](src/content/docs/02-work-environment/terminal-processes-ports.md) | `draft` | 13,409 | `/02-work-environment/terminal-processes-ports/` |"
      ]
    ]
  },
  {
    "path": "research/source-map.md",
    "before": "860ab0ca893cba157736045650e6a7978b72a08a0431232017235393ef8e2fa2",
    "after": "1874292b365fe5df3bf79cb20e93037f57242cefa30f8b8b136a72b1dcab7e3f",
    "replacements": [
      [
        "",
        "2026-11-15 R15 현재 적용 보충: [작업 환경 직접 근거](public-beta-review-source-excerpts/r15-work-environment-2026-11-15.md)에 기록한 Node·npm·Python·POSIX·Windows·Apple·Git·RFC6335·IANA·PowerShell의 관련 본문을 적용하고 같은 실행의 R08 Git 근거는 재사용합니다. `git check-ignore -v`의 부정 패턴 예외, 상위 경로 권한과 최종 파일 존재의 구분, 프로세스 종료와 애플리케이션의 정상 저장·종료 절차를 구분합니다. Python `/3.14/` 현재 표제3.14.10과 과거3.14.7, Apple 과거 짧은 주소의 목차 반환과 실제 명령 본문 링크를 별도로 기록합니다. npm 현재 패치 버전·IANA 현재 갱신일·Microsoft 문서 전체 접근은 not-confirmed이며 반환된 관련 절 밖으로 확대하지 않습니다. 아래 과거 확인일과 실패 기록은 보존합니다. R15 최초 NEEDS CHANGES와 수정 후 검토 대기를 구분하며 실제 설치·종료 실험·상태 승격·공개 승인을 주장하지 않습니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/02-work-environment/dependencies-package-managers-environments.md",
    "before": "b92260cfe6b9ac455314689644600f6c4bb8f5efc7bfe89560c8cec9a9e569a1",
    "after": "37fee9dd01ec240e3031675608cad065ec84c4ec51b52f2c33a40189eae02698",
    "replacements": [
      [
        "| 잠금 파일(lockfile) | 해결된 버전과 의존 관계 등 설치 조합을 기록해 재현 가능성을 높인다 | 예: `package-lock.json`; 매니페스트와 함께 검토한 diff | 운영체제·CPU·런타임·외부 저장소까지 같은 환경 |",
        "| 잠금 파일(lockfile) | 해결된 버전과 의존 관계 등 설치 조합을 기록해 재현 가능성을 높인다 | 예: `package-lock.json`; 매니페스트와 함께 검토한 변경 전후 차이(diff) | 운영체제·CPU·런타임·외부 저장소까지 같은 환경 |"
      ],
      [
        "7. CI나 다른 깨끗한 환경에서 같은 입력으로 다시 설치해 재현성을 확인합니다.",
        "7. 변경을 통합할 때 자동으로 검사하는 지속적 통합(Continuous Integration, CI)이나 다른 깨끗한 환경에서 같은 입력으로 다시 설치해 재현성을 확인합니다."
      ],
      [
        "- Python 환경 격리: [Python 3.14.7 `venv`](https://docs.python.org/3.14/library/venv.html)",
        "- Python 환경 격리: [Python 3.14 `venv`](https://docs.python.org/3.14/library/venv.html)"
      ],
      [
        "",
        "2026-11-15에 관련 공식 설명을 다시 확인했으며, Python `/3.14/` 링크의 현재 표제는 3.14.10이었습니다. 이 주소는 마이너 버전의 문서이므로 당시 확인한 3.14.7 본문을 영구 고정하지 않습니다. npm v11 문서의 현재 패치 버전은 확인하지 못했으므로 추정해 갱신하지 않습니다. 과거 확인일·버전과 이번 확인 범위는 별도로 보존합니다.\n\n"
      ]
    ]
  },
  {
    "path": "src/content/docs/02-work-environment/files-folders-paths.md",
    "before": "dbe74fe4bced9d603629051081882627d8082bc225585323f4723cbf482b1227",
    "after": "079ef0db8f988358f5963215466bddf5aba4789c4132c608b7c42b41cf90c44a",
    "replacements": [
      [
        "3. `git status`, 실제 diff, 빌드된 페이지 중 무엇으로 변경을 확인했나요?",
        "3. `git status`, 실제 변경 전후 차이(diff), 빌드된 페이지 중 무엇으로 변경을 확인했나요?"
      ],
      [
        "| `\\\\server\\share\\guide.md` | 네트워크의 서버·공유 위치부터 시작하는 UNC 경로 | 로컬 드라이브 경로가 아님 |",
        "| `\\\\server\\share\\guide.md` | 네트워크의 서버·공유 위치를 나타내는 UNC(Universal Naming Convention) 경로 | 로컬 드라이브 경로가 아님 |"
      ],
      [
        "각 명령은 현재 브랜치와 상태, 스테이징되지 않은 tracked 변경, staged 변경, 추적 여부와 ignore 규칙의 출처라는 서로 다른 범위를 보여 줍니다. 기본 `git status`는 ignored 파일을 보여 주지 않습니다. `git check-ignore -v`에 규칙·출처·경로가 나오면 어떤 규칙이 제외했는지 알 수 있습니다. 출력이 없다면 대상이 tracked인지 `git ls-files` 결과와 먼저 대조한 뒤, untracked 대상이라면 일치한 ignore 규칙이 없다고 판정합니다. 한 출력이 비었다고 다른 상태까지 비었다고 결론 내리지 않습니다.",
        "각 명령은 현재 브랜치와 상태, 스테이징되지 않은 tracked 변경, staged 변경, 추적 여부와 ignore 규칙의 출처라는 서로 다른 범위를 보여 줍니다. 기본 `git status`는 ignored 파일을 보여 주지 않습니다. `git check-ignore -v`의 출력은 일치한 규칙·출처·경로를 보여 주며, 출력이 있다는 사실만으로 제외 여부를 판정하지 않습니다. 패턴이 `!`로 시작하는 부정 패턴이면 제외의 예외로 다시 포함되는 경우입니다. 예를 들어 이 저장소의 `.env.*`와 `!.env.example`은 일반 제외와 예외를 구분합니다. 출력이 없다면 먼저 오류 없이 조회했는지 확인하고, 대상이 기본 검사에서 빠지는 tracked 파일인지 `git ls-files` 결과와 대조합니다. 정상 조회한 untracked 대상이라면 일치한 규칙이 없다는 뜻입니다. 한 출력이 비었다고 다른 상태까지 비었다고 결론 내리지 않습니다."
      ],
      [
        "| `Permission denied` | 파일은 있지만 읽기·실행·쓰기 권한이 없음 | 권한이 필요한 이유와 최소 범위를 확인하고 우회 복사보다 승인 경계 검토 |",
        "| `Permission denied` | 대상 또는 상위 경로의 접근 권한이 거절됨. 최종 파일의 존재는 아직 확인하지 못했을 수 있음 | 권한이 필요한 이유와 최소 범위를 확인하고 우회 복사보다 승인 경계 검토 |"
      ],
      [
        "6. **경로 오류와 권한 오류를 구분합니다.** 존재하지 않는 파일을 찾는 문제와 존재하지만 접근이 거절된 문제는 해결 방법이 다릅니다.",
        "6. **경로 오류와 권한 오류를 구분합니다.** 존재하지 않는 파일을 찾는 문제와 대상 또는 상위 경로의 접근이 거절된 문제는 해결 방법이 다릅니다. 상위 경로에 접근하지 못했다면 최종 파일의 존재도 아직 확인되지 않았을 수 있습니다."
      ]
    ]
  },
  {
    "path": "src/content/docs/02-work-environment/terminal-processes-ports.md",
    "before": "f7d31d8190f962b886f21eb9854cb9d042520fc37fdef71d14dfb6f6550b125f",
    "after": "c34ec8f9634faa8156b8766d4c815dfab3958a775acba61e94de97c6204af444",
    "replacements": [
      [
        "| 포트(port) | TCP·UDP 같은 전송 프로토콜에서 통신 끝점의 서비스 접근 대상을 구분하는 16비트 번호 | 프로토콜, 로컬 주소·포트, 상태, owning PID | 통신 세션 전체, 애플리케이션 자체, 안전성·정상 동작 증거 |",
        "| 포트(port) | TCP·UDP 같은 전송 프로토콜에서 통신 끝점의 서비스 접근 대상을 구분하는 16비트 번호 | 프로토콜, 로컬 주소·포트, 상태, 소켓을 소유한 프로세스의 ID(owning PID) | 통신 세션 전체, 애플리케이션 자체, 안전성·정상 동작 증거 |"
      ],
      [
        "POSIX 셸 문맥의 **전경 작업(foreground job)**: 셸이 끝나거나 멈출 때까지 기다린 뒤 다음 프롬프트를 내는 작업입니다. **배경 작업(background job)**: 셸이 기다리지 않고 다음 입력을 받을 수 있게 실행한 작업입니다. 대화형 셸의 job control은 작업 번호와 프로세스 그룹을 관리할 수 있지만, 지원 범위와 명령은 셸·운영체제·설정마다 다릅니다.",
        "POSIX 셸 문맥의 **전경 작업(foreground job)**: 셸이 끝나거나 멈출 때까지 기다린 뒤 다음 프롬프트를 내는 작업입니다. **배경 작업(background job)**: 셸이 기다리지 않고 다음 입력을 받을 수 있게 실행한 작업입니다. 대화형 셸의 작업 제어(job control)는 작업 번호와 프로세스 그룹을 관리할 수 있지만, 지원 범위와 명령은 셸·운영체제·설정마다 다릅니다."
      ],
      [
        "마지막 상태를 판정할 때 **`PPID=1`만 보고 버려진 프로세스라고 판단하거나 종료해서는 안 됩니다.** POSIX.1-2024도 부모 프로세스 수명이 끝난 뒤 PPID가 구현이 정한 시스템 프로세스의 ID로 바뀔 수 있다고 정의합니다. 숫자 1은 운영체제와 관리 방식에 따라 의미가 다르며, 서비스 관리·세션·소유자·실행 명령·작업 문맥을 확인하지 않은 종료 근거가 될 수 없습니다.",
        "마지막 상태를 판정할 때 **부모 프로세스의 ID(PPID)가 1이라는 사실만 보고 버려진 프로세스라고 판단하거나 종료해서는 안 됩니다.** POSIX.1-2024도 부모 프로세스 수명이 끝난 뒤 PPID가 구현이 정한 시스템 프로세스의 ID로 바뀔 수 있다고 정의합니다. 숫자 1은 운영체제와 관리 방식에 따라 의미가 다르며, 서비스 관리·세션·소유자·실행 명령·작업 문맥을 확인하지 않은 종료 근거가 될 수 없습니다."
      ],
      [
        "`<조회된-PID>`는 설명용 자리표시자이므로 그대로 실행하지 않습니다. macOS·Linux에서도 먼저 현재 포트의 listener와 PID를 조회하고, 그 PID의 세부 정보를 별도 명령으로 확인하는 두 단계를 유지합니다.",
        "첫 명령의 결과에서 로컬 주소와 `State`를 확인하고, 진단할 수신 대기 소켓(listener)의 `Listen` 행에 있는 `OwningProcess`를 선택한 뒤 두 번째 명령으로 세부 정보를 조회합니다. 연결 행이 여러 개라면 첫 PID를 무조건 선택하지 않습니다. `<조회된-PID>`는 설명용 자리표시자이므로 그대로 실행하지 않습니다. macOS·Linux에서도 먼저 현재 포트의 listener와 PID를 조회하고, 그 PID의 세부 정보를 별도 명령으로 확인하는 두 단계를 유지합니다. 이 조회는 종료 승인이 아닙니다."
      ],
      [
        "별도 PID에 신호나 종료 명령을 보낼 때도 먼저 정상 종료를 요청하고 기다립니다. POSIX 계열에서는 프로세스나 프로세스 그룹에 신호를 보내는 방식이 쓰이고, Windows PowerShell의 `Stop-Process`는 이름·PID·프로세스 객체로 로컬 프로세스를 멈춥니다. 명령 구문·기본 신호·확인·권한·자식 프로세스 영향은 운영체제와 도구마다 다릅니다.",
        "별도 PID를 대상으로 조치할 때도 먼저 애플리케이션이나 관리 서비스가 제공하는 정상 종료 절차를 확인하고 기다립니다. 운영체제 수준에서 프로세스를 종료하는 것은 이 절차와 별개입니다. POSIX 계열에서는 프로세스나 프로세스 그룹에 신호를 보내는 방식이 쓰이고, Windows PowerShell의 `Stop-Process`는 이름·PID·프로세스 객체로 로컬 프로세스를 멈춥니다. `Stop-Process`를 애플리케이션의 저장·정리 절차를 거치는 정상 종료 요청으로 간주하지 마세요. 확인 프롬프트나 `-Force` 사용 여부도 정상 저장을 보장하지 않습니다. 정상 종료 방법과 보존할 상태를 먼저 확인하고, 운영체제 수준의 종료가 필요하면 정확한 대상·영향·복구 방법과 권한을 확인한 뒤 진행합니다. 명령 구문·신호·확인·권한·자식 프로세스 영향은 운영체제와 도구마다 다릅니다."
      ],
      [
        "교육용 주가 fixture 대시보드의 로컬 정적 미리보기라면 상태를 쓰지 않는 서버를 종료하는 대신 다른 비충돌 포트로 새 미리보기를 띄우고 정확한 URL을 기록하는 선택이 비교적 쉬울 수 있습니다. 그래도 빌드 입력·fixture 버전·브라우저 탭이 어느 서버를 보는지는 확인해야 합니다.",
        "재현용으로 고정한 교육용 가상 데이터(fixture)를 쓰는 주가 대시보드의 로컬 정적 미리보기라면 상태를 쓰지 않는 서버를 종료하는 대신 다른 비충돌 포트로 새 미리보기를 띄우고 정확한 URL을 기록하는 선택이 비교적 쉬울 수 있습니다. 그래도 빌드 입력·fixture 버전·브라우저 탭이 어느 서버를 보는지는 확인해야 합니다."
      ],
      [
        "- macOS 터미널 명령과 종료: [Apple Terminal User Guide](https://support.apple.com/guide/terminal/execute-commands-and-run-tools-apdb66b5242/mac)",
        "- macOS 터미널 명령과 종료: [Apple Terminal의 명령 실행·종료 안내](https://support.apple.com/en-by/guide/terminal/apdb66b5242-0d18-49fc-9c47-a2498b7c91d5/mac)"
      ],
      [
        "",
        "위 확인일과 버전은 당시 기록입니다. 2026-11-15에는 POSIX·포트·Windows 도구의 관련 설명과 Apple 명령 실행·종료 본문을 다시 확인했습니다. Apple의 과거 짧은 주소가 현재 목차를 반환하므로 위 링크는 실제 명령 본문으로 연결했습니다. 현재 IANA 갱신일과 Microsoft 문서 전체의 접근 가능 여부는 확인하지 못했으며, 반환된 관련 절의 범위만 근거로 삼습니다. 과거 주소·버전과 이번 확인의 상세 범위는 출처 지도에 별도로 보존합니다.\n\n"
      ]
    ]
  }
];
export function r15PreFixBytes(path,bytes){
 bytes=r15PreCloseoutBytes(path,bytes);
 const e=r15FixTransitions.find(x=>x.path===path);if(!e||sha(bytes)!==e.after)return bytes;
 let text=bytes.toString();for(const[before,after]of[...e.replacements].reverse()){if(text.split(after).length!==2)throw Error('R15 reversal not unique');text=text.replace(after,before);}
 if(sha(text)!==e.before)throw Error('R15 historical bytes mismatch');return Buffer.from(text);
}
export function validateR15Current(read){const errors=[];for(const e of r15FixTransitions){try{if(sha(r15PreCloseoutBytes(e.path,read(e.path)))!==e.after)errors.push('R15 current patch mismatch: '+e.path)}catch{errors.push('R15 current patch missing: '+e.path)}}return errors;}

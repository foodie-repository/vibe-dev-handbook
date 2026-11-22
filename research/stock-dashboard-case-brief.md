# 주가 대시보드 사례 fixture와 안전 계약

## 목적과 범위

이 문서는 주가 데이터 분석 대시보드 캡스톤을 원고·다이어그램·테스트 오라클로 확장하기 전에 공유할 교육용 가상 데이터 계약입니다. 이 계약은 화면의 숫자를 투자 판단으로 바꾸지 않고, 데이터 정의·품질 상태·재현성·갱신 실패의 책임을 학습하기 위한 최소 기준입니다.

이 단계의 목표는 IDX-X·STK-A·STK-B fixture와 그 해석 규칙을 고정하는 것이며, 실제 데이터 원천 조사, 원천 채택, 공개 원고 수정, 화면 구현, 배포는 비목표입니다. `research/source-map.md`에 실제 원천을 추가하거나 그 이용 조건·재배포 범위·조정 방식·거래일·시간대를 주장하려면 별도의 네트워크 접근 및 조사 승인이 필요합니다.

## 안전 경계와 fixture

아래 CSV의 모든 식별자, 시장명, 날짜, 가격, 거래량, 버전 및 상태는 교육용 가상 데이터입니다. IDX-X·STK-A·STK-B는 실제 지수나 종목을 가리키지 않고, `EDU-FIXTURE`는 실제 데이터 제공자나 원천을 뜻하지 않습니다. 이 표는 원천 사실, 현재 가격, 투자 판단 또는 데이터 권리의 증거가 아닙니다.

```csv
instrument_id,instrument_type,market,trading_date,value_type,value,unit,volume,price_basis,source_id,source_version,transform_version,value_status,missing_reason
IDX-X,index,MARKET-X,2026-01-05,close,2500,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,
STK-A,stock,MARKET-X,2026-01-05,close,10000,KRW,1000000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,
STK-B,stock,MARKET-X,2026-01-05,close,20000,KRW,700000,unadjusted,EDU-FIXTURE,v1,tf-v1,warning,late_source
IDX-X,index,MARKET-X,2026-01-06,close,2510,point,,not_applicable,EDU-FIXTURE,v1,tf-v1,valid,
STK-A,stock,MARKET-X,2026-01-06,close,10100,KRW,1100000,unadjusted,EDU-FIXTURE,v1,tf-v1,valid,
STK-B,stock,MARKET-X,2026-01-06,close,,KRW,,unadjusted,EDU-FIXTURE,v1,tf-v1,blocked,source_missing
```

위 fixture의 모든 값과 식별자는 교육용 가상 데이터이며, 실제 데이터처럼 표시하거나 실제 원천·시세·권리·성과에 대한 주장으로 사용하지 않습니다. 실제 원천을 쓰는 후속 작업은 공식 정의, 조정 방식, 거래일·시간대, 이용 조건, 재배포 허용 범위를 확인하고 확인일·적용 범위·한계를 출처 지도에 남기는 별도 승인 작업입니다.

## 행 계약

- `instrument_id`, `instrument_type`, `market`: 분석 대상의 가상 식별자·종류·시장입니다. 표와 차트의 선택 조건은 복합 키 `(instrument_id, instrument_type, market)`의 세 필드를 같은 값으로 적용하며 `instrument_id`만으로 합치지 않습니다.
- `trading_date`, `value_type`, `value`, `unit`, `volume`: 값의 거래일, 값 종류, 수치, 단위, 거래량입니다. 날짜는 fixture에서 같은 가상 시장의 거래일로 설정한 값이며 실제 시장 달력·발표 시각·시간대를 뜻하지 않습니다. 통화와 단위가 다른 값을 같은 척도라고 가정하지 않습니다.
- `price_basis`: 가격이 어떤 기준으로 표현됐는지 나타냅니다. `unadjusted`와 다른 가격 기준은 서로 바꿔 쓰거나 혼합 비교하지 않으며, 지수 행에는 `not_applicable`을 명시합니다.
- `source_id`, `source_version`, `transform_version`: 값이 이 교육용 fixture에서 왔고 어떤 원천·변환 버전으로 재현되는지 추적하는 식별자입니다. 현재 값은 모두 `EDU-FIXTURE`, `v1`, `tf-v1`이지만 실제 원천의 존재를 뜻하지 않습니다.
- `value_status`, `missing_reason`: 값 자체의 표시 가능성과 경고·차단·검토 대기 사유를 분리합니다. `valid`는 계약 검사를 통과한 값, `warning`은 이유를 함께 보여 주어야 하는 값, `blocked`는 정상 값으로 게시하지 않는 값, `review_required`는 사람 확인 전 게시하지 않는 값을 뜻합니다.

`value = 0`은 관측된 수치로서 빈 값과 다릅니다. 빈 `value`는 값이 없다는 뜻이며 `missing_reason`으로 이유를 표시합니다. 예를 들어 STK-B의 2026-01-06 행은 `blocked`와 `source_missing`이므로 표·차트·요약의 정상 수치로 사용하지 않습니다. 지수 행의 빈 `volume`은 거래량이 0이라는 뜻이 아니라 해당 계약에서 비적용임을 `instrument_type: index`와 `price_basis: not_applicable`로 함께 해석합니다.

### 이 fixture에서 검사할 타입과 조합

아래 규칙은 기본 14필드·6행을 해석하는 교육용 계약입니다. 실제 시장의 가격·거래량·거래일 규칙으로 일반화하지 않습니다. CSV의 빈 필드는 파싱 뒤 null로 다루며 문자열 "null"이나 숫자 0으로 바꾸지 않습니다.

| 대상 | 타입·허용값·조합 |
|---|---|
| 식별자 | 비어 있지 않은 문자열입니다. 기본 묶음은 IDX-X/index, STK-A/stock, STK-B/stock과 MARKET-X만 사용합니다. |
| 거래일·값 종류 | 날짜는 유효한 YYYY-MM-DD 형식이며 기본 묶음은 2026-01-05·2026-01-06, 값 종류는 close만 사용합니다. 실제 거래 달력 검증이 아닙니다. |
| 값·거래량 | value는 null 또는 0 이상인 유한 수입니다. stock의 volume은 null 또는 0 이상인 정수이고 단위는 교육용 가상 주 수입니다. 가격 단위 KRW와 거래량 단위를 구분합니다. |
| 지수·주식 조합 | index는 unit=point, price_basis=not_applicable, volume=null입니다. stock은 unit=KRW, price_basis=unadjusted입니다. 서로 다른 단위나 가격 기준을 한 계열로 합치지 않습니다. |
| 버전 | source_id=EDU-FIXTURE, source_version=v1, transform_version=tf-v1입니다. 기본 묶음의 내용이 바뀌면 같은 버전으로 덮어쓰지 않습니다. |
| 값이 있는 상태 | valid는 value가 있고 missing_reason은 비어 있습니다. warning은 value가 있고 missing_reason=late_source입니다. 두 상태의 stock 행은 volume도 있어야 합니다. |
| 수치를 제외할 상태 | blocked/source_missing과 review_required/review_pending은 value=null이며 stock의 volume도 null입니다. 이유는 표·대체 텍스트에 남기고 정상 수치·차트 점·계산에서 제외합니다. 기본 묶음에는 review_required 행이 없으며 별도 파생 시험으로만 사용합니다. |
| 고유성 | 현재 close·가격 기준 고정 범위에서 (instrument_id, instrument_type, market, trading_date)는 중복되지 않습니다. 값 종류·가격 기준을 늘리려면 먼저 키와 비교 계약을 별도로 바꿔야 합니다. |

missing_reason이라는 기존 헤더는 이 사례에서 결측뿐 아니라 경고·차단·검토 대기 사유도 담습니다. 값이 있는 warning/late_source는 허용되며, late_source만으로 현재 공개 데이터셋을 stale로 판정하지 않습니다. 다른 상태·사유·단위 조합은 이 좁은 계약에서 거절합니다. 값 0, 잘못된 타입·단위, 중복 키, 사유 없는 결측은 기본 6행을 고치지 않고 별도 파생 시험 입력으로 만들고, 바꾼 필드와 기대 판정을 기록합니다.

## 전달·배포 메타데이터 계약

고정 CSV의 행 계약은 값의 의미를, 별도 전달·배포 메타데이터는 어떤 데이터셋을 화면에 제공하는지 설명합니다. 이 메타데이터도 fixture용 가상 계약이며 실제 원천의 발표·수집 시점이나 시장 일정을 뜻하지 않습니다.

- `dataset_version`: 동일한 fixture와 변환 결과 묶음을 식별하는 불변 버전입니다. 표·차트·요약은 하나의 `dataset_version`을 함께 사용합니다.
- `current_published_dataset_version`: 지금 사용자에게 전달하는 데이터셋의 버전입니다. 화면의 표·차트·요약·상태 설명은 모두 이 버전을 가리켜야 합니다.
- `last_normal_dataset_version`: 마지막으로 정상 전달을 승인한 데이터셋의 버전입니다. 갱신 후보가 `blocked` 또는 `review_required`이면 `current_published_dataset_version`을 새 후보로 바꾸지 않고 이 버전을 유지해 표시합니다.
- `refresh_candidate_status`: 다음 갱신 후보의 처리 상태입니다. `valid`, `warning`, `blocked`, `review_required`, `unknown` 중 하나를 기록하며, 후보가 아직 없거나 상태를 판단할 수 없으면 `unknown`으로 표시합니다.
- `refresh_delay_reason`: 현재 공개 버전이 새 후보로 바뀌지 않은 이유입니다. 후보 상태가 `blocked`, `review_required`, `unknown`이거나 갱신이 지연될 때 비어 있지 않아야 하며, 확인할 수 없으면 `unknown`으로 표시합니다.

후보 상태는 `valid` 또는 전달이 허용된 `warning`일 때만 검증을 통과한 후보의 `dataset_version`을 `current_published_dataset_version`으로 바꿀 수 있습니다. `blocked`와 `review_required` 후보는 정상 값처럼 전달하지 않고, 마지막 정상 버전·후보 상태·지연 사유를 함께 보여 줍니다. `current_published_dataset_version`과 `last_normal_dataset_version`의 같은 값은 정상 전달 중임을 뜻할 수 있지만, 최신성 자체를 증명하지는 않습니다.

### 행 상태와 후보 게시 판정을 분리합니다

value_status는 한 행의 수치를 어떻게 표시할지 정합니다. refresh_candidate_status는 데이터셋 묶음 전체를 다음 공개 버전으로 승인할지 정합니다. 한 행의 상태를 묶음 상태로 그대로 복사하지 않습니다. 마지막 정상 버전은 모든 행이 valid라는 뜻이 아니라, 아래 계약에 맞게 전달을 승인한 버전입니다.

기본 6행은 정상 수치4개·경고 수치1개와, STK-B/2026-01-06의 의도적으로 차단된 행1개를 포함합니다. 이 정확한 fixture의 경고·결측은 교육 시나리오가 허용한 예외이므로 묶음은 warning 후보이며, 이 계약과 품질 검사를 확인한 뒤 전달을 승인합니다. 차단 행 자체와 source_missing 사유는 표·동등한 텍스트에 보존하고 그 수치만 차트 점·계산에서 제외합니다. 행을 삭제해 결측 이유까지 숨기지 않습니다.

후보 판정은 먼저 파일·스키마·타입·키·단위 위반, 권리 미확인 실제 입력, 기본 fixture와 다른 미승인 결측·내용 변경이 있으면 묶음 전체를 blocked로 처리합니다. 그 문제가 없더라도 행이나 후보 판단에 미완료 검토가 있으면 review_required입니다. 그 밖에는 승인 가능한 경고·지정 결측이 있으면 warning, 모두 valid이면 valid입니다. 후보가 없거나 판정 자체를 할 수 없으면 unknown으로 남깁니다. 기본 예외를 임의의 누락 행에 확대하지 않습니다.

전체가 blocked·review_required·unknown인 새 후보는 현재 공개 버전과 마지막 정상 버전의 바이트를 바꾸지 않고 후보 상태·이유만 별도 표시합니다. 기본 묶음을 승인해 차단 행의 이유를 표시하는 시험과, 예컨대 중복 키를 넣은 새 후보 전체를 막는 시험은 서로 다른 오라클입니다.

## 신선도 상태 계약

신선도는 값 품질이 아니라 화면에 전달한 fixture 데이터셋이 갱신 예상에 맞게 제공됐는지를 나타내는 별도 차원입니다. 이 계약은 실제 원천의 시각·거래일·시장 일정에 관한 사실을 정하지 않고, fixture 시나리오의 메타데이터와 테스트 오라클만 정의합니다.

- `fixture_refreshed_at`: 이 fixture 묶음을 갱신한 것으로 설정한 시점입니다.
- `published_at`: 해당 `current_published_dataset_version`을 화면 전달 대상으로 만든 것으로 설정한 시점입니다.
- `expected_refresh_at`: 이 fixture 시나리오에서 다음 갱신을 기대하는 것으로 설정한 시점입니다.
- `freshness_status`: `current`, `stale`, `unknown` 중 하나입니다. `expected_refresh_at` 전이거나 갱신 기대를 판단할 정보가 없으면 `current` 또는 `unknown`을 명시하고, 갱신이 기대된 뒤에도 새 정상 후보가 전달되지 않은 시나리오는 `stale`로 표시합니다.
- `freshness_reason`: `freshness_status`의 근거를 사람이 읽을 수 있는 짧은 설명으로 기록합니다. `stale`와 `unknown`에서는 비어 있지 않아야 합니다.

`warning`은 개별 값 또는 후보의 품질 상태이고, `stale`은 현재 공개 데이터셋의 갱신 적시성 상태이므로 서로 바꾸어 쓰지 않습니다. 예를 들어 `warning` 값을 포함한 새 데이터셋이 `current`일 수 있고, 마지막 정상 버전이 `valid`여도 갱신 지연으로 `stale`일 수 있습니다. 화면은 두 상태가 동시에 적용되면 각각의 이름과 사유를 표시해야 하며, 하나로 합쳐 숨기지 않습니다.

판정할 기준 시점과 expected_refresh_at을 같은 시간 기준으로 고정합니다. 이 가상 시험에서는 기준 시점이 기대 시점 이전이면 current, 기대 시점 이상인데 갱신을 승인하지 못했으면 stale, 필요한 시각·기준이 없으면 unknown입니다. 예를 들어 같은 차단 후보를 두고 기대 시각을 2026-01-07T12:00:00Z로 고정하면 11:59Z에는 current, 12:01Z에는 stale이고, 기대 시각이 없으면 unknown입니다. 세 경우 모두 현재 공개 버전 digest는 그대로이며 후보 차단 이유와 신선도 이유를 따로 기록합니다. 이 시각은 실제 시장 일정이 아닙니다.

## 검토 대기 전환 계약

이 절의 `review_required`는 자동 검사만으로 게시 여부를 확정할 수 없는 데이터셋 후보 전체의 품질 상태입니다. 후보는 최소 검토 증거가 완전하고 최종 상태가 기록되기 전까지 `review_required`를 벗어나지 않으며, 정상 값이나 정상 데이터셋으로 전달할 수 없습니다.

검토 증거는 후보와 함께 다음 필드를 남깁니다.

- `final_value_status`: 기존 필드명은 유지하지만 이 절에서는 데이터셋 후보 전체의 최종 품질 판정이며 `valid`, `warning`, `blocked` 중 하나입니다. 개별 행의 value_status를 일괄 변경하지 않습니다.
- `reviewer_role`: 검토자의 개인 식별정보가 아닌 검토 역할입니다.
- `review_basis`: 검토자가 확인한 계약 검사 결과·예외 사유·판단 근거입니다.
- `reviewed_at`: fixture 시나리오에서 검토가 완료된 것으로 설정한 시점입니다.
- `recheck_condition`: 다시 검토해야 하는 조건 또는 증거 만료 조건입니다.

테스트 오라클은 다섯 필드 중 하나라도 없거나 `final_value_status`가 허용값이 아니면 후보를 `review_required`로 유지해야 합니다. 다섯 필드가 모두 있고 검토 근거가 해당 후보의 `dataset_version`·`transform_version`과 연결되면 후보는 기록된 `final_value_status`로 전환할 수 있습니다. `recheck_condition`이 발생하거나 증거가 만료되면 이전 최종 상태를 계속 신뢰하지 않고 다시 `review_required`로 되돌려 재검토하며, 새 최종 상태와 증거가 갖춰질 때까지 게시하지 않습니다. 행의 review_required나 타입·단위 위반이 남아 있으면 후보의 최종 판정만 valid로 적어 통과시킬 수 없습니다. 행을 해결한 변경 버전과 후보 검사·검토 근거를 함께 다시 확인합니다.

## 접근성 전달 계약

후속 표·차트·테스트는 선택 결과, 값, 단위, 거래일, 가격 기준, 값 상태, 신선도 상태와 각 사유를 색상만으로 전달하지 않습니다. 각 상태는 화면에서 읽을 수 있는 텍스트로 나타내고, 색상은 보조 신호로만 사용합니다.

표와 차트는 같은 선택 결과를 사용하며, 한쪽만 보아도 대상·값·단위·거래일·가격 기준·값 상태·신선도 상태라는 핵심 정보를 확인할 수 있어야 합니다. 차트가 모든 행을 텍스트로 반복할 필요는 없지만, 차트의 핵심 값·상태·사유는 동등한 표 또는 텍스트 요약으로 접근할 수 있어야 합니다.

선택 변경, 갱신 후보 차단, 검토 대기, 지연 또는 오래됨처럼 사용자의 판단을 바꾸는 상태 변화는 보조 기술이 읽을 수 있도록 프로그램적으로 전달해야 합니다. 기간·상품 선택과 표·차트의 동등한 정보 접근은 키보드만으로도 가능해야 하며, 키보드 초점의 현재 위치와 다음 동작을 확인할 수 있어야 합니다.

## 사용자 요구와 비목표

- D-01: 사용자는 IDX-X·STK-A·STK-B가 실제 종목이 아닌 교육용 fixture임을 첫 화면에서 확인합니다.
- D-02: 사용자는 기간과 상품을 선택하고 가격 기준·단위·거래일·값 상태를 함께 확인합니다.
- D-03: 같은 fixture와 transform_version으로 같은 표·차트·요약을 재현합니다.
- D-04: 표와 차트는 같은 선택 결과를 사용하며 값 0·결측·경고·차단·오래됨을 구분합니다.
- D-05: 갱신 실패 시 차단된 후보를 게시하지 않고 마지막 정상 dataset_version과 지연 이유를 표시합니다.
- 비목표: 실제 투자 결론, 추천, 수익률 우열, 실시간 시세, 주문, 개인 포트폴리오를 다루지 않습니다.

## D-01~D-05 추적 지원 원장

| 요구 | 사용자 행동 | 상태 전이·변환 | 인터페이스 | 인증·인가·권리 | 위험 | 오라클 | Git 단위 | 배포·운영 증거 | 복구 |
|---|---|---|---|---|---|---|---|---|---|
| D-01 | 첫 화면에서 fixture임을 확인 | `EDU-FIXTURE`를 가상 데이터 상태·출처 미채택 설명으로 변환 | 제목·상태·출처 패널 | 공개 읽기만 허용, 실제 원천·재배포·투자 판단 권리 없음 | 실제 종목·시세·권리 데이터처럼 오인 | 첫 viewport fixture 문구와 실제 종목·현재 시세·추천 0건 | fixture 표시·출처·부정 문구 테스트 | commit·artifact·URL 배지 smoke, 외부 시장 요청 0건 | 오표시 배포 중지/이전 artifact 뒤 표시 재검증 |
| D-02 | 상품·기간과 거래일·단위·가격 기준 확인 | 복합 키 세 필드+기간으로 한 표시 모델 생성 | 선택·표·차트·요약 | 쓰기·계정 없음, 정적 전달은 재배포 허가가 아님 | 다른 시장/종류·point/KRW·시간대·가격 기준 혼합 | 키 충돌 fixture 분리와 모든 표현의 행·단위·상태 일치 | 선택 책임·표시 모델·필터·충돌 테스트 | manifest와 desktop/mobile 선택 smoke | last-known-good 조합 뒤 충돌 fixture 재실행 |
| D-03 | 버전·lineage로 같은 결과 재확인 | 입력→변환→판정→산출물을 버전·checksum·시점에 연결 | 출처 패널·manifest·전달 파일 | 비밀·권리 미확인 원문을 저장·산출물에 넣지 않음 | checksum을 의미·정확성·권리 증거로 오판 | 같은 입력/환경/명령의 지정 산출물 바이트·행·정렬 일치 | schema·변환·manifest·재현 명령/테스트 | source/lock/env/command/digest/smoke 연결 | 불일치 격리 후 정상 manifest 재구성·재검증 |
| D-04 | 0·결측·경고·차단·오래됨을 색상 없이 구분 | 상태를 공유 모델의 점·셀·요약·알림으로 변환 | 동등한 표+차트·상태/오류 UI | 공개 fixture만 전달, 검토 역할은 자동 게시 권한 아님 | 표/차트 불일치·색상 의존·상태 혼합 | 데이터/상태 동등성, 키보드 문구, 차트 실패 때 표 유지 | 공유 모델·표/차트·상태·접근성 테스트 | 1440/390 light/dark smoke·오류·내부 스크롤 | 표/텍스트 fallback 유지 뒤 상태별 재실행 |
| D-05 | 차단 후보와 마지막 정상·지연 이유 확인 | 허용 후보만 공개 전환, 나머지는 last-known-good 보존 | 상태/버전 패널·게시 게이트·runbook | 최소 게시/복원 권한, 실제 후보는 권리 승인 전 미게시 | 차단·권리 불명 후보 게시, 데이터/사이트 복구 불일치 | 실패 후보에서 공개 digest 불변, 허용 후보만 manifest+smoke 통과 | 상태 머신·게이트·LKG manifest·runbook | 후보/현재/LKG·판정·URL·격리 복원 연결 | 게시 중지 후 호환 데이터+사이트 복원·전체 smoke |

## 전달·재현성·갱신 규칙

같은 fixture와 `transform_version`은 같은 선택 조건에서 같은 표·차트·요약을 만들어야 합니다. 표와 차트는 각각 계산한 결과를 맞춰 보는 관계가 아니라 동일한 선택 결과를 공유해야 하며, `value_status`와 `missing_reason`도 각 결과에 같은 의미로 전달해야 합니다.

`warning`은 이유를 숨긴 정상 결과가 아니므로 경고 사유를 함께 표시합니다. `blocked`와 `review_required`는 후보 값으로 보관할 수 있지만 일반 사용자에게 정상 수치로 게시하지 않습니다. 갱신이 실패하면 별도 전달·배포 메타데이터의 `last_normal_dataset_version`을 유지하고, `current_published_dataset_version`, 새 후보 상태, 지연 사유와 신선도 상태를 함께 표시합니다. 이 규칙은 마지막 정상 결과가 새 실패 결과로 덮어써지는 일을 막지만, 이전 결과가 최신이라는 뜻은 아닙니다.

## 공식 원천 조사 금지선

이 브리프는 fixture 계약만 정의하며 실제 원천, 제공자, 거래소, 라이선스, 재배포 허용, 가격 조정, 거래일 또는 시간대의 사실을 확인하거나 암시하지 않습니다. 네트워크 접근, 새 의존성, 비밀정보, 개인 데이터, 계좌 또는 주문 데이터는 이 계약의 범위 밖입니다.

후속 조사 작업은 명시적 승인 뒤 공식 1차 자료만 사용해 사실과 적용 범위를 검증하고, 조사 근거를 `research/source-map.md`에 기록해야 합니다. 그 전까지 원고·다이어그램·테스트는 이 파일의 가상 fixture를 사용하며, 실제 시장이나 투자 성과에 관한 결론을 만들어서는 안 됩니다.

## 수용 기준과 확인 방법

- CSV는 이 문서에 있는 6개 행과 헤더를 변경 없이 사용합니다.
- 모든 fixture 식별자와 값이 교육용 가상 데이터임을 CSV 위와 아래에서 확인할 수 있습니다.
- `value = 0`과 빈 값, `valid`·`warning`·`blocked`·`review_required`, `price_basis`, 지수 거래량 비적용, 날짜·시장·통화·단위, 원천·변환 버전의 의미를 구분합니다.
- `dataset_version`, 현재 공개 버전, 마지막 정상 버전, 갱신 후보 상태, 지연 사유, 신선도 상태와 그 화면 전달 규칙을 확인할 수 있습니다.
- `warning`과 `stale`이 서로 다른 차원임을 확인하고, `review_required`에서 최종 상태로 전환하는 데 필요한 검토 증거와 재검토 조건을 확인할 수 있습니다.
- 상태 텍스트, 색상 단독 금지, 표·차트의 동등한 핵심 정보, 프로그램적 상태 전달, 키보드 접근이라는 최소 접근성 계약을 확인할 수 있습니다.
- D-01~D-05와 비목표를 문서에서 그대로 확인할 수 있습니다.
- 실제 원천 조사와 실제 투자·실시간 시세·주문·개인 포트폴리오가 이 작업 범위 밖임을 확인할 수 있습니다.

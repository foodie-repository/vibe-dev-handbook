# R10-I01 키 복구의 직접 근거

2026-11-15 공식 [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)의 Key Lifetimes and Rotation, Key Storage 관련 본문을 읽었습니다. 짧은 직접 발췌는 “in case old backups of copies of the data need to be decrypted.”입니다. 회전 뒤 과거 데이터·백업을 해독할 필요 때문에 이전 키를 일정 기간 보존할 수 있음을 설명하며, 키 관리·데이터와 키의 분리·안전한 보관을 함께 다룹니다.

현재 원고에는 일반 Git·문서·무차별 백업에 비밀을 복사하지 않는 경계를 유지하면서, 재발급 가능한 접근 자격과 기존 암호문에 필요한 키·버전·복구 재료를 구분합니다. 새 키 발급이 과거 암호문 해독을 대신하지 않으며 승인된 전용 체계와 격리 해독 시험을 요구하는 범위입니다. 특정 제품의 키 export·escrow·복구 기능이나 보존 기간을 확정하지 않았고 실제 키·계정·암호문에는 접근하지 않았습니다. 기존 R10 고정 근거와 최초 결과는 덮어쓰지 않습니다.

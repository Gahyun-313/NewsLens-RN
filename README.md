## Git 규칙

### 브랜치 전략
#### 브랜치 구성
- `main`: 항상 실행/데모 가능한 안정 버전
- `develop`: 작업 통합 브랜치(개발 기본 브랜치)

#### 브랜치 네이밍 규칙
`<type>/<scope>-<target>`

- **type**: `feat | fix | chore | refactor | docs`
- **scope**: `ui | nav | api | auth | store | build`
- **target**: 작업 대상/기능 요약

예시:
- `feat/nav-bottom-tabs`
- `feat/ui-domestic-list`
- `feat/ui-mypage-profile`
- `feat/api-news-fetch`
- `fix/ui-safearea-padding`
- `chore/build-android-sdk`


### 커밋 메시지 규칙
`<type>: [<scope>] <subject>`

- **type**: `feat | fix | chore | refactor | docs | test`
- **scope**: `ui | nav | api | auth | store | build | config | readme`
- **subject**: 작업 내용 한 줄 요약

예시:
- `feat: [ui] 국내 리스트 화면 구현`
- `feat: [nav] 하단 탭 네비게이션 추가`
- `feat: [api] 뉴스 목록 조회 연동`
- `fix: [ui] SafeArea 패딩 겹침 수정`
- `chore: [build] 안드로이드 빌드 설정 정리`
- `docs: [readme] 브랜치/커밋 규칙 추가`


### PR 규칙
- 기본 PR 대상: `feature/fix/...` → `develop`
- 릴리즈 PR: `develop` → `main`
- 머지 방식: **Squash merge** 권장
- 최소 체크리스트:
  - [ ] Android 실행 확인 (`npx react-native run-android`)
  - [ ] 주요 플로우 스모크 테스트
  - [ ] 스크린샷 1장(가능하면)

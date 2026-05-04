# COSMIC SUGAR Site

정적 React(Babel) 기반 프로토타입입니다.

## 로컬에서 보는 방법

### 1) Python 서버로 실행
```bash
cd /workspace/cosmic-sugar-site
python3 -m http.server 4173
```
브라우저에서 `http://localhost:4173` 접속.

### 2) Node가 있으면 serve 사용
```bash
npx serve . -l 4173
```
브라우저에서 `http://localhost:4173` 접속.

> `index.html`이 진입점이며 `app.jsx`, `styles.css`를 불러옵니다.

---

## Cloudflare Pages 연동

이 프로젝트는 빌드가 필요 없는 정적 사이트라서 Cloudflare Pages에 바로 올릴 수 있습니다.

### 방법 A) Git 연동(권장)
1. GitHub/GitLab에 이 저장소를 푸시
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 저장소 선택
4. 빌드 설정:
   - **Framework preset**: `None`
   - **Build command**: (비움)
   - **Build output directory**: `/` 또는 `.`
5. Deploy 클릭

배포 후 `<project>.pages.dev` 도메인에서 확인 가능.

### 방법 B) Direct Upload
1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. 프로젝트 루트 파일(`index.html`, `app.jsx`, `styles.css`) 업로드
3. 배포 완료 후 URL 접속

---

## Cloudflare 설정 추천

### 1) 캐시
- 정적 파일 캐시 활성화
- 수정 빈도가 높은 프로토타입 단계에서는 캐시 TTL을 짧게 유지

### 2) 커스텀 도메인
- Pages 프로젝트에서 **Custom domains** 추가
- 예: `cosmic-sugar.yourdomain.com`

### 3) 미리보기 브랜치
- `main`은 프로덕션
- `dev`/`staging` 브랜치에 Preview Deploy 연결해서 카피/연출 실험

---

## 문제 해결

- `권한 없음`/404 발생 시: 업로드 루트에 `index.html`이 있는지 확인
- 배포는 됐는데 JSX가 안 보일 때: 브라우저 콘솔에서 외부 CDN(React/Babel) 차단 여부 확인
- 캐시 때문에 옛 화면이 보이면: Cloudflare cache purge 또는 하드 리로드


## Wrangler로 배포할 때 에러 해결

로그의 `Could not detect a directory containing static files` 에러는 Wrangler가 **정적 파일 디렉토리**를 못 찾을 때 발생합니다.
이 저장소는 루트(`.`)에 `index.html`, `app.jsx`, `styles.css`가 있으므로 `wrangler.toml`에서 assets 디렉토리를 명시해야 합니다.

```toml
[assets]
directory = "."
```

### 배포 명령
```bash
npx wrangler deploy
```

Cloudflare Pages에서 굳이 `npx wrangler deploy`를 쓸 필요는 없고, Pages의 Git 연동 빌드를 쓰는 경우에는 빌드 커맨드를 비워도 됩니다.
다만 Workers/Assets 방식으로 배포하려면 현재처럼 `wrangler.toml`이 필요합니다.

---

## 진짜 초보용 3분 가이드 (코딩 몰라도 됨)

### 이 프로젝트를 한 줄로 말하면?
- `index.html`: 화면 뼈대(웹페이지 본체)
- `styles.css`: 색/폰트/배치(디자인)
- `app.jsx`: 화면에 들어갈 내용(문구/카드/버튼)
- `wrangler.toml`: Cloudflare에 "이 폴더를 배포해"라고 알려주는 설정

### 1) 화면 미리보기 (로컬)
1. 터미널 열기
2. 아래 2줄 복붙

```bash
cd /workspace/cosmic-sugar-site
python3 -m http.server 4173
```

3. 브라우저에서 `http://localhost:4173` 열기
4. 사이트가 뜨면 성공

### 2) 글자 바꾸는 방법
- `app.jsx` 파일 열기
- 예를 들어 `당신의 내일을 지키는 가장 달콤한 방벽` 같은 문장을 원하는 문장으로 수정
- 저장 후 브라우저 새로고침

### 3) 색 바꾸는 방법
- `styles.css` 맨 위 `:root` 안의 색 코드(예: `--pink`, `--cyan`) 수정
- 저장 후 새로고침

### 4) Cloudflare 배포(가장 쉬운 루트)
> 초보에게는 **Pages Git 연동**이 가장 쉽습니다.

1. GitHub에 코드 올리기
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git
3. 내 저장소 선택
4. 설정:
   - Framework preset: `None`
   - Build command: 비워두기
   - Build output directory: `.`
5. Deploy 클릭

끝. 그러면 `xxxxx.pages.dev` 주소가 생깁니다.

### 5) 에러가 나면 이렇게 체크
- 에러: `Could not detect a directory containing static files`
  - 해결: `wrangler.toml`에 아래가 있는지 확인

```toml
[assets]
directory = "."
```

### 6) 진짜 핵심만 기억
- **화면 내용**은 `app.jsx`
- **화면 스타일**은 `styles.css`
- **배포 설정**은 `wrangler.toml`
- 초보는 **Cloudflare Pages Git 연동**이 제일 덜 헷갈림

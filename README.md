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

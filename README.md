# COSMIC SUGAR Site

Sugar High Industries 공식 입문 안내 페이지 형태의 정적 사이트입니다.

## Pages

- `index.html`: COSMIC SUGAR 세계관 입문용 메인 포털
- `characters.html`: 마법소녀 직원 등록부 / 신분증 팝업형 인물 소개
- `test.html`: 마법소녀 적성 심리 테스트

## Assets

- `shi-logo-color-transparent.png`
- `shi-logo-pink-transparent.png`
- `증명사진/*.png`

## Local Preview

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173`로 확인합니다.

## Deploy

Cloudflare Pages 또는 Wrangler static assets로 바로 배포할 수 있습니다.

`wrangler.toml`은 저장소 루트 전체를 정적 assets 디렉터리로 사용합니다.

# SAN / ATEEZ — Pirate King

ATEEZ의 해적 콘셉트·해적왕을 바탕으로 만든 SAN 비공식 팬 아트.

**사이트:** https://oon-jung.github.io/san-northern-duke/

## 구현

- 로컬 Three.js r180 / WebGL. 외부 CDN 런타임 의존성 없음.
- 약 13.6만 개의 XYZ 점으로 표현한 인물. 마우스·터치에 따른 제한된 회전 및 국소 표면 파동.
- 사진에서 추정한 상대 얼굴 깊이의 **입체 부조**. 정확한 360도 두상 스캔·완성 GLB 모델은 아님.
- 얼굴 형상을 지우는 페이드나 전체 입자 폭발 없음. 모션 토글, 정면 복귀, 반응형 카메라 프레이밍, WebGL 실패 시 원본 사진 폴백.
- 일반 산세리프. Polar Chart Ink `#193B49`, Paper `#E9E3CF`, Signal Red `#DB7156`.

## 실행·테스트

```sh
python3 -m http.server 4173
node --test interaction.test.mjs
```

http://localhost:4173 에서 확인.

## 출처·분석

[SOURCES.md](SOURCES.md): 원작 공개 영상 식별, ATEEZ 공식 자료, 이전 구현 실패 원인, 이번 구현의 한계.

[PROMPT.md](PROMPT.md): 더 정확한 레퍼런스 재현을 위한 구체적인 요청 예시.

사진: [Dolce&Gabbana 공식 SAN 앰버서더 자료](https://world.dolcegabbana.com/news/dolce-gabbana-new-global-ambassador-san). 사진 권리는 원저작자에게 있습니다. 공식 캠페인이 아닙니다.

Three.js: MIT. 로컬 폰트 파일 및 라이선스는 첫 버전의 자료로 남아 있으나 현 버전은 시스템 산세리프를 사용합니다. `assets/licenses/` 참조.

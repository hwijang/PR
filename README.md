# 장휘덕 - AI 협업 컨설팅 랜딩 페이지

개인 브랜딩을 위한 모바일 최적화 랜딩 페이지입니다. AI 활용 컨설팅 서비스를 소개하고 커피챗 신청을 받을 수 있도록 제작되었습니다.

## 📋 프로젝트 개요

**목적**: AI 협업 컨설팅 서비스를 효과적으로 소개하고 잠재 고객과의 접점 마련

**타겟**: AI 활용이 막막한 직장인

**주요 가치**: 실무에 바로 적용 가능한 AI 협업 방법을 통한 업무 생산성 극대화

## ✨ 주요 기능

### 섹션 구성
- **히어로 섹션**: 이름, 직함, 핵심 가치 제안
- **전문 분야 소개**: 3가지 주요 서비스 영역
  - AI 워크 스마트 (실전 AI 활용법 & 성공 사례)
  - AI 동료 만들기 (No-code/Low-code 업무 자동화)
  - AI로 데이터 인사이트 발견 (데이터 분석 & 시각화)
- **CTA 섹션**: 커피챗 신청 버튼
- **푸터**: 저작권 정보

### 디자인 특징
- 밝은 블루 계열 색상 테마 (프로페셔널 & 신뢰감)
- 모바일 우선 반응형 디자인
- 부드러운 스크롤 애니메이션
- 카드 호버 효과

### 인터랙티브 요소
- Intersection Observer를 활용한 스크롤 애니메이션
- 카드 호버 시 부드러운 상승 효과
- 모바일 터치 이벤트 지원
- CTA 버튼 pulse 애니메이션

## 🚀 빠른 시작

### 1. 파일 다운로드
프로젝트의 모든 파일을 다운로드합니다:
- `index.html`
- `style.css`
- `script.js`

### 2. 브라우저에서 열기
`index.html` 파일을 더블클릭하거나 브라우저로 드래그하여 실행합니다.

### 3. 웹 서버에 배포 (선택사항)
- GitHub Pages
- Netlify
- Vercel
- 기타 정적 호스팅 서비스

## 📁 파일 구조

```
Pr/
├── index.html      # 메인 HTML 파일 (2.3KB)
├── style.css       # 스타일시트 (6.8KB)
├── script.js       # JavaScript 파일 (7.5KB)
├── content.js      # 콘텐츠 데이터 파일 (1.6KB) ⭐
└── README.md       # 프로젝트 문서
```

## 🎨 디자인 시스템

### 색상 팔레트
```css
Primary Color:     #4A90E2  /* 밝은 블루 */
Secondary Color:   #7BB5F5  /* 라이트 블루 */
Background Color:  #F8FBFF  /* 매우 밝은 블루 화이트 */
Accent Color:      #2C5AA0  /* 다크 블루 */
Text Dark:         #1a2332  /* 진한 텍스트 */
Text Gray:         #5a6c7d  /* 회색 텍스트 */
```

### 반응형 브레이크포인트
- **모바일**: 320px ~ 768px (1열 레이아웃)
- **태블릿**: 768px ~ 1024px (2열 레이아웃)
- **데스크톱**: 1024px 이상 (3열 레이아웃)

## 🛠️ 커스터마이징

### 콘텐츠 수정 (가장 쉬운 방법!)

**모든 텍스트 콘텐츠는 `content.js` 파일에서 관리됩니다!**

로컬 서버 없이도 바로 작동하며, 파일을 수정하고 브라우저를 새로고침하면 즉시 반영됩니다.

```javascript
// content.js
const content = {
  "hero": {
    "description": "여기에 메인 소개 문구를 작성하세요",
    "name": "이름",
    "title": "직함"
  },
  "topics": {
    "sectionTitle": "섹션 제목",
    "cards": [
      {
        "title": "주제 제목",
        "description": "간단한 설명",
        "detail": "상세 설명"
      }
    ]
  },
  "cta": {
    "title": "CTA 제목",
    "description": "CTA 설명",
    "buttonText": "버튼 텍스트",
    "buttonLink": "링크 URL"
  },
  "footer": {
    "text": "푸터 텍스트"
  }
};
```

**수정 방법:**
1. `content.js` 파일을 텍스트 에디터로 엽니다
2. 원하는 텍스트를 수정합니다
3. 파일을 저장하고 브라우저를 새로고침합니다
4. 끝! 🎉 (로컬 서버 불필요!)

### 색상 테마 변경
`style.css` 파일의 CSS 변수를 수정하세요:

```css
:root {
    --primary-color: #4A90E2;      /* 원하는 색상으로 변경 */
    --secondary-color: #7BB5F5;    /* 원하는 색상으로 변경 */
    --accent-color: #2C5AA0;       /* 원하는 색상으로 변경 */
}
```

### 주제 카드 추가/제거

`content.js`의 `topics.cards` 배열에 카드를 추가하거나 제거하세요:

```javascript
"cards": [
  {
    "title": "새로운 주제",
    "description": "간단한 설명",
    "detail": "상세 설명"
  }
]
```

**참고:** 현재 아이콘은 3개까지만 지원됩니다. 더 많은 카드를 추가하면 첫 번째 아이콘이 재사용됩니다.

## 📱 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 🔧 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, CSS Variables, Animations
- **JavaScript (ES6+)**: Intersection Observer API, DOM 조작

### 외부 라이브러리
- 없음 (순수 HTML, CSS, JavaScript로 구현)

### 주요 기능
- **JavaScript 모듈 패턴**: content.js에서 전역 변수로 콘텐츠 관리
- **동적 DOM 생성**: 주제 카드를 JavaScript로 생성
- **데이터 기반 렌더링**: 콘텐츠와 코드 분리
- **로컬 실행 가능**: 서버 없이 바로 실행 가능 (CORS 문제 해결)

## 📈 성능 최적화

- 외부 라이브러리 의존성 없음
- 최소한의 파일 크기 (총 16.3KB)
- CSS 애니메이션 사용으로 GPU 가속 활용
- Intersection Observer로 효율적인 스크롤 감지

## 🌐 배포 방법

### GitHub Pages
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings > Pages > Source를 `main` 브랜치로 설정
4. 자동 생성된 URL로 접속

### Netlify
1. [netlify.com](https://netlify.com) 계정 생성
2. "New site from Git" 클릭
3. 저장소 연결 또는 파일 드래그 앤 드롭
4. 자동 배포 완료

### Vercel
1. [vercel.com](https://vercel.com) 계정 생성
2. "New Project" 클릭
3. 저장소 연결 또는 파일 업로드
4. 자동 배포 완료

## 📝 수정 이력

- **2026-02-17**: 초기 버전 생성
  - 히어로, 주제, CTA 섹션 구현
  - 밝은 블루 톤 디자인 적용
  - 반응형 레이아웃 구현
  - 스크롤 애니메이션 추가
  - 구글 폼 커피챗 링크 연결
  - **콘텐츠 관리 시스템 추가** (content.js)
  - 히어로 섹션 레이아웃 변경 (소개 문구 강조)
  - **CORS 문제 해결**: JSON에서 JavaScript 파일로 변경

## 📞 문의

커피챗 신청: [구글 폼](https://forms.gle/uZWDRZFFsDwv5m9A8)

## 📄 라이선스

© 2026 장휘덕. All rights reserved.

---

**제작**: HTML, CSS, JavaScript로 구현된 순수 웹 페이지  
**최적화**: 모바일 우선, 반응형 디자인  
**목적**: 개인 브랜딩 및 AI 협업 컨설팅 서비스 소개

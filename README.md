# 🔥 고등학생 취준용 바이브 포트폴리오 웹사이트

> **창의적인 아이디어로 세상을 바꾸는 개발자가 되고 싶습니다**

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [디자인 특징](#-디자인-특징)
- [설치 및 실행](#-설치-및-실행)
- [프로젝트 구조](#-프로젝트-구조)
- [커스터마이징](#-커스터마이징)
- [성능 최적화](#-성능-최적화)
- [브라우저 지원](#-브라우저-지원)
- [라이선스](#-라이선스)

## 🎯 프로젝트 소개

고등학생의 취업 준비를 위한 **임팩트 있는 포트폴리오 웹사이트**입니다. 최신 웹 트렌드를 반영한 "바이브" 코딩 스타일로 제작되어, 채용 담당자나 선생님들이 보면 "와, 이 학생 정말 잘하네!"라고 감탄할 수 있도록 설계되었습니다.

### ✨ 핵심 가치
- **개성과 열정**이 드러나는 디자인
- **기억에 남는** 사용자 경험
- **모던하고 전문적인** 인터페이스
- **완벽한 반응형** 디자인

## 🚀 주요 기능

### 🎨 시각적 효과
- **다크 모드** 기반의 모던한 디자인
- **네온/글로우 효과**와 그라데이션 활용
- **부드러운 애니메이션**과 호버 효과
- **글라스모피즘** (유리 질감) 요소
- **패럴랙스 스크롤** 효과

### 🎭 인터랙티브 요소
- **타이핑 효과**로 이름/직업 표시
- **커스텀 마우스 커서** 효과
- **스크롤 트리거** 애니메이션
- **마우스 팔로우** 파티클 효과
- **글리치 효과** (랜덤)

### 📱 사용자 경험
- **완벽한 반응형** 디자인
- **스무스 스크롤** 네비게이션
- **로딩 애니메이션**
- **키보드 네비게이션** 지원
- **터치 디바이스** 최적화

## 🛠 기술 스택

### Frontend
- **HTML5** - 시맨틱 마크업
- **CSS3** - 모던 스타일링
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - CSS Animations & Transitions
  - Backdrop Filter (글라스모피즘)
- **Vanilla JavaScript** - 인터랙티브 기능
  - ES6+ 문법
  - Intersection Observer API
  - Web Animations API
  - Event Handling

### 외부 라이브러리
- **Font Awesome** - 아이콘
- **Google Fonts** - 타이포그래피
  - Orbitron (제목용)
  - Inter (본문용)

### 개발 도구
- **Visual Studio Code** - 코드 에디터
- **Live Server** - 로컬 개발 서버
- **Git** - 버전 관리

## 🎨 디자인 특징

### 색상 팔레트
```css
/* 다크 베이스 */
--bg-primary: #0a0a0a;
--bg-secondary: #1a1a1a;
--bg-accent: #2a2a2a;

/* 네온 컬러 */
--neon-blue: #00f3ff;
--neon-purple: #9d4edd;
--neon-pink: #ff006e;
--neon-green: #39ff14;
--neon-yellow: #ffd700;
```

### 타이포그래피
- **Orbitron** - 제목, 로고 (미래지향적 느낌)
- **Inter** - 본문, 버튼 (가독성 최적화)

### 레이아웃
- **CSS Grid** - 메인 레이아웃
- **Flexbox** - 컴포넌트 배치
- **반응형 브레이크포인트** - 모바일 우선 설계

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/student-portfolio.git
cd student-portfolio
```

### 2. 로컬 서버 실행
```bash
# Live Server 사용 (VS Code 확장)
# 또는 Python 내장 서버
python -m http.server 8000

# 또는 Node.js http-server
npx http-server
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## 📁 프로젝트 구조

```
student-portfolio/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
├── README.md           # 프로젝트 문서
└── assets/             # 이미지 및 리소스 (선택사항)
    ├── images/
    └── icons/
```

## 🎛 커스터마이징

### 개인 정보 수정
`index.html` 파일에서 다음 부분을 수정하세요:

```html
<!-- 이름 변경 -->
<h1 class="hero-title">
    안녕하세요, 저는
    <span class="typing-text"></span>
</h1>

<!-- 자기소개 수정 -->
<div class="about-description">
    <p>안녕하세요! 저는 <strong>김개발</strong>입니다...</p>
</div>

<!-- 연락처 정보 -->
<div class="contact-details">
    <p>kim.developer@email.com</p>
</div>
```

### 타이핑 효과 텍스트 변경
`script.js` 파일에서:

```javascript
const texts = ['김개발', '고등학생 개발자', '예비 개발자'];
```

### 색상 테마 변경
`styles.css` 파일의 CSS 변수를 수정:

```css
:root {
    --neon-blue: #00f3ff;    /* 원하는 색상으로 변경 */
    --neon-purple: #9d4edd;
    --neon-pink: #ff006e;
    --neon-green: #39ff14;
    --neon-yellow: #ffd700;
}
```

### 자격증 정보 수정
```html
<div class="certificate-card">
    <div class="certificate-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <div class="certificate-content">
        <h3>자격증명</h3>
        <p class="certificate-org">발급기관</p>
        <p class="certificate-date">취득일</p>
        <div class="certificate-badge">
            <span class="badge-text">카테고리</span>
        </div>
    </div>
</div>
```

## ⚡ 성능 최적화

### 이미지 최적화
- **WebP** 형식 사용 권장
- **적절한 크기**로 리사이징
- **Lazy Loading** 적용

### CSS 최적화
- **CSS Variables** 활용으로 일관성 유지
- **미디어 쿼리** 최적화
- **애니메이션 성능** 고려

### JavaScript 최적화
- **이벤트 디바운싱** 적용
- **Intersection Observer** 사용
- **메모리 누수** 방지

## 🌐 브라우저 지원

| 브라우저 | 버전 | 지원 상태 |
|---------|------|----------|
| Chrome | 60+ | ✅ 완전 지원 |
| Firefox | 55+ | ✅ 완전 지원 |
| Safari | 12+ | ✅ 완전 지원 |
| Edge | 79+ | ✅ 완전 지원 |
| IE | 11 | ⚠️ 부분 지원 |

### 지원 기능
- ✅ CSS Grid & Flexbox
- ✅ CSS Variables
- ✅ Backdrop Filter
- ✅ Intersection Observer
- ✅ Web Animations API

## 📄 라이선스

이 프로젝트는 **MIT 라이선스** 하에 배포됩니다.

```
MIT License

Copyright (c) 2024 김개발

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🤝 기여하기

1. 이 저장소를 **Fork**하세요
2. 새로운 **Feature Branch**를 생성하세요 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 **Commit**하세요 (`git commit -m 'Add some AmazingFeature'`)
4. **Branch**에 Push하세요 (`git push origin feature/AmazingFeature`)
5. **Pull Request**를 생성하세요

## 📞 연락처

- **이메일**: kim.developer@email.com
- **GitHub**: [@your-username](https://github.com/your-username)
- **포트폴리오**: [포트폴리오 링크]

## 🙏 감사의 말

이 프로젝트는 다음과 같은 오픈소스 프로젝트들의 도움을 받았습니다:

- [Font Awesome](https://fontawesome.com/) - 아이콘
- [Google Fonts](https://fonts.google.com/) - 타이포그래피
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - 레이아웃
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - 스크롤 애니메이션

---

⭐ **이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

**Made with ❤️ and lots of ☕ by 김개발** 
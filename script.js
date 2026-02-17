// 콘텐츠 데이터 로드 및 렌더링
function loadContent() {
    try {
        // content.js에서 전역 변수로 로드된 content 객체 사용
        
        // 히어로 섹션
        document.querySelector('[data-content="hero.description"]').textContent = content.hero.description;
        document.querySelector('[data-content="hero.name"]').textContent = content.hero.name;
        document.querySelector('[data-content="hero.title"]').textContent = content.hero.title;
        
        // 주제 섹션 제목
        document.querySelector('[data-content="topics.sectionTitle"]').textContent = content.topics.sectionTitle;
        
        // 주제 카드 생성
        const topicsGrid = document.getElementById('topicsGrid');
        const iconSvgs = [
            `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
            </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>`,
            `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>`
        ];
        
        content.topics.cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'topic-card fade-up';
            cardElement.innerHTML = `
                <div class="topic-icon">${iconSvgs[index] || iconSvgs[0]}</div>
                <h3 class="topic-title">${card.title}</h3>
                <p class="topic-description">${card.description}</p>
                <p class="topic-detail">${card.detail}</p>
            `;
            topicsGrid.appendChild(cardElement);
        });
        
        // CTA 섹션
        document.querySelector('[data-content="cta.title"]').textContent = content.cta.title;
        document.querySelector('[data-content="cta.description"]').textContent = content.cta.description;
        const ctaButton = document.querySelector('[data-content="cta.buttonText"]');
        ctaButton.textContent = content.cta.buttonText;
        ctaButton.href = content.cta.buttonLink;
        
        // 푸터
        document.querySelector('[data-content="footer.text"]').textContent = content.footer.text;
        
        // 콘텐츠 로드 후 애니메이션 재설정
        initAnimations();
        
        console.log('✅ 콘텐츠가 성공적으로 로드되었습니다!');
    } catch (error) {
        console.error('❌ 콘텐츠 로드 중 오류 발생:', error);
    }
}

// 애니메이션 초기화 함수
function initAnimations() {
    // Intersection Observer 설정
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소 관찰
    const fadeUpElements = document.querySelectorAll('.fade-up');
    fadeUpElements.forEach(element => {
        observer.observe(element);
    });

    // 카드 호버 효과 강화 (모바일 터치 이벤트)
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Scroll Animation - 스크롤 시 요소 페이드인
document.addEventListener('DOMContentLoaded', function() {
    
    // 콘텐츠 로드
    loadContent();
    
    // 스무스 스크롤 (anchor 링크가 추가될 경우를 대비)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 페이지 로드 시 히어로 섹션 애니메이션
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // 스크롤 진행률에 따른 부드러운 배경 변화 (선택적)
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 스크롤 다운 감지
        if (scrollTop > lastScrollTop) {
            // 스크롤 다운
        } else {
            // 스크롤 업
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

    // CTA 섹션 가시성 감지하여 버튼 강조
    const ctaSection = document.querySelector('.cta');
    if (ctaSection) {
        const ctaObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const button = entry.target.querySelector('.cta-button');
                    if (button) {
                        button.style.animation = 'pulse 2s infinite';
                    }
                }
            });
        }, { threshold: 0.5 });
        
        ctaObserver.observe(ctaSection);
    }

    // Pulse 애니메이션 CSS 동적 추가
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 랜딩 페이지가 성공적으로 로드되었습니다!');
});

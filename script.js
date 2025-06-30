// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 커스텀 커서
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // 호버 효과
    const hoverElements = document.querySelectorAll('a, button, .project-card, .tool-item, .contact-item, .social-link');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'var(--neon-pink)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'var(--neon-blue)';
        });
    });

    // 타이핑 효과
    const typingText = document.querySelector('.typing-text');
    const texts = ['장병준', '고등학생 개발자', '예비 개발자'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // 잠시 멈춤
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // 타이핑 효과 시작
    setTimeout(typeWriter, 1000);

    // 네비게이션 토글
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 햄버거 메뉴 애니메이션
        const spans = navToggle.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) span.style.opacity = '0';
                if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });

    // 스무스 스크롤
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // 모바일에서 메뉴 닫기
            navMenu.classList.remove('active');
        });
    });

    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 애니메이션 대상 요소들
    const animateElements = document.querySelectorAll('.about-content, .skills-category, .project-card, .contact-item, .social-link, .certificate-card, .stat-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // 스킬 바 애니메이션
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                progressBar.style.setProperty('--progress-width', width + '%');
                progressBar.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // 네비게이션 스크롤 효과
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 아래로 스크롤
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 위로 스크롤
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 패럴랙스 효과
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // 글리치 효과 (랜덤)
    function createGlitchEffect() {
        const glitchTexts = document.querySelectorAll('.hero-title, .section-title');
        
        glitchTexts.forEach(text => {
            text.addEventListener('mouseenter', () => {
                if (Math.random() > 0.7) { // 30% 확률로 글리치 발생
                    text.style.textShadow = `
                        2px 0 var(--neon-pink),
                        -2px 0 var(--neon-blue),
                        0 2px var(--neon-green)
                    `;
                    
                    setTimeout(() => {
                        text.style.textShadow = '';
                    }, 200);
                }
            });
        });
    }

    createGlitchEffect();

    // 마우스 팔로우 파티클 효과
    let particles = [];
    
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9997';
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translate(0, 0)', opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    }

    // 마우스 클릭 시 파티클 생성
    document.addEventListener('click', (e) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createParticle(e.clientX, e.clientY);
            }, i * 100);
        }
    });

    // 스킬 카테고리 호버 효과
    const skillCategories = document.querySelectorAll('.skills-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            const title = category.querySelector('h3');
            title.style.textShadow = `0 0 10px var(--neon-purple)`;
        });
        
        category.addEventListener('mouseleave', () => {
            const title = category.querySelector('h3');
            title.style.textShadow = '';
        });
    });

    // 프로젝트 카드 호버 효과
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 243, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });

    // 연락처 아이템 호버 효과
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            icon.style.boxShadow = '0 0 20px var(--neon-green)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '';
        });
    });

    // 소셜 링크 호버 효과
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // 자격증 카드 호버 효과
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.certificate-icon');
            const levelBadge = card.querySelector('.level-badge');
            const skillTags = card.querySelectorAll('.skill-tag');
            
            icon.style.transform = 'scale(1.15) rotate(8deg)';
            levelBadge.style.transform = 'scale(1.1)';
            levelBadge.style.boxShadow = '0 0 10px var(--neon-yellow)';
            
            skillTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.05) translateY(-2px)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.certificate-icon');
            const levelBadge = card.querySelector('.level-badge');
            const skillTags = card.querySelectorAll('.skill-tag');
            
            icon.style.transform = 'scale(1) rotate(0deg)';
            levelBadge.style.transform = 'scale(1)';
            levelBadge.style.boxShadow = '';
            
            skillTags.forEach(tag => {
                tag.style.transform = 'scale(1) translateY(0)';
            });
        });
    });

    // 통계 아이템 호버 효과
    const statItems = document.querySelectorAll('.stat-item');
    
    statItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const number = item.querySelector('.stat-number');
            const icon = item.querySelector('.stat-icon');
            
            number.style.transform = 'scale(1.1)';
            number.style.textShadow = '0 0 20px var(--neon-purple)';
            icon.style.transform = 'scale(1.1) rotate(10deg)';
            icon.style.boxShadow = '0 0 20px var(--neon-purple)';
        });
        
        item.addEventListener('mouseleave', () => {
            const number = item.querySelector('.stat-number');
            const icon = item.querySelector('.stat-icon');
            
            number.style.transform = 'scale(1)';
            number.style.textShadow = '0 0 10px var(--neon-purple)';
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '';
        });
    });

    // 자격증 카드 클릭 효과
    certificateCards.forEach(card => {
        card.addEventListener('click', () => {
            // 카드 클릭 시 글로우 효과 강화
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(255, 215, 0, 0.4)';
            
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)';
            }, 200);
        });
    });

    // 자격증 섹션 스크롤 애니메이션
    const certificateSection = document.querySelector('.certificates');
    const certificateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.certificate-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    if (certificateSection) {
        certificateObserver.observe(certificateSection);
    }

    // 스크롤 진행률 표시
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // 스크롤 진행률을 네비게이션에 표시
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = '0';
        progressBar.style.left = '0';
        progressBar.style.width = scrollPercent + '%';
        progressBar.style.height = '3px';
        progressBar.style.background = 'var(--gradient-neon)';
        progressBar.style.zIndex = '1001';
        progressBar.style.transition = 'width 0.1s ease';
        
        // 기존 진행률 바 제거
        const existingBar = document.querySelector('.scroll-progress-bar');
        if (existingBar) {
            existingBar.remove();
        }
        
        progressBar.classList.add('scroll-progress-bar');
        document.body.appendChild(progressBar);
    }

    window.addEventListener('scroll', updateScrollProgress);

    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                window.scrollBy(0, 100);
                break;
            case 'ArrowUp':
                e.preventDefault();
                window.scrollBy(0, -100);
                break;
            case 'Home':
                e.preventDefault();
                window.scrollTo(0, 0);
                break;
            case 'End':
                e.preventDefault();
                window.scrollTo(0, document.body.scrollHeight);
                break;
        }
    });

    // 터치 디바이스 지원
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 위로 스와이프
                window.scrollBy(0, -100);
            } else {
                // 아래로 스와이프
                window.scrollBy(0, 100);
            }
        }
    }

    // 성능 최적화: 디바운스 스크롤 이벤트
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const debouncedScrollHandler = debounce(() => {
        updateScrollProgress();
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    // 초기화 완료 메시지
    console.log('🚀 바이브 포트폴리오 웹사이트가 성공적으로 로드되었습니다!');
    console.log('✨ 모든 인터랙티브 기능이 활성화되었습니다.');

    // 스킬 아이템 호버 효과
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.skill-icon');
            const progressBar = item.querySelector('.skill-progress');
            
            icon.style.transform = 'scale(1.15) rotate(8deg)';
            icon.style.boxShadow = '0 0 20px var(--neon-blue)';
            
            // 진행률 바 애니메이션 강화
            progressBar.style.boxShadow = '0 0 10px var(--neon-blue)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.skill-icon');
            const progressBar = item.querySelector('.skill-progress');
            
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '';
            progressBar.style.boxShadow = '';
        });
    });

    // 도구 아이템 호버 효과
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.tool-icon');
            const levelDots = item.querySelectorAll('.level-dot.active');
            
            icon.style.transform = 'scale(1.15) rotate(10deg)';
            icon.style.boxShadow = '0 0 20px var(--neon-green)';
            
            // 레벨 점들 애니메이션
            levelDots.forEach((dot, index) => {
                setTimeout(() => {
                    dot.style.transform = 'scale(1.2)';
                    dot.style.boxShadow = '0 0 8px var(--neon-green)';
                }, index * 100);
            });
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.tool-icon');
            const levelDots = item.querySelectorAll('.level-dot.active');
            
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '';
            
            levelDots.forEach(dot => {
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = '0 0 5px var(--neon-green)';
            });
        });
    });

    // 소프트 스킬 호버 효과
    const softSkills = document.querySelectorAll('.soft-skill');
    
    softSkills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const icon = skill.querySelector('.skill-icon');
            const exampleTags = skill.querySelectorAll('.example-tag');
            
            icon.style.transform = 'scale(1.15) rotate(8deg)';
            icon.style.boxShadow = '0 0 20px var(--neon-pink)';
            
            // 예시 태그들 순차 애니메이션
            exampleTags.forEach((tag, index) => {
                setTimeout(() => {
                    tag.style.transform = 'scale(1.1) translateY(-3px)';
                }, index * 150);
            });
        });
        
        skill.addEventListener('mouseleave', () => {
            const icon = skill.querySelector('.skill-icon');
            const exampleTags = skill.querySelectorAll('.example-tag');
            
            icon.style.transform = 'scale(1) rotate(0deg)';
            icon.style.boxShadow = '';
            
            exampleTags.forEach(tag => {
                tag.style.transform = 'scale(1) translateY(0)';
            });
        });
    });

    // 학습 진행도 호버 효과
    const learningItems = document.querySelectorAll('.learning-item');
    
    learningItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const progressCircle = item.querySelector('.progress-circle');
            const statusBadge = item.querySelector('.status-badge');
            
            progressCircle.style.transform = 'scale(1.1)';
            progressCircle.style.boxShadow = '0 0 20px var(--neon-yellow)';
            
            statusBadge.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            const progressCircle = item.querySelector('.progress-circle');
            const statusBadge = item.querySelector('.status-badge');
            
            progressCircle.style.transform = 'scale(1)';
            progressCircle.style.boxShadow = '';
            
            statusBadge.style.transform = 'scale(1)';
        });
    });

    // 프로그레스 서클 애니메이션
    function animateProgressCircles() {
        const progressCircles = document.querySelectorAll('.progress-circle');
        
        progressCircles.forEach(circle => {
            const progress = circle.getAttribute('data-progress');
            const degrees = (progress / 100) * 360;
            
            circle.style.background = `conic-gradient(var(--neon-yellow) 0deg, var(--neon-yellow) ${degrees}deg, var(--bg-accent) ${degrees}deg)`;
        });
    }

    // 스킬 섹션 스크롤 애니메이션
    const skillsSection = document.querySelector('.skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 프로그레스 서클 애니메이션 시작
                setTimeout(animateProgressCircles, 500);
                
                // 스킬 아이템들 순차 애니메이션
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}); 
// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 타이핑 효과
    const typingText = document.querySelector('.typing-text');
    const texts = ['장병준', '고등학생 개발자', '웹 개발자'];
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
    const animateElements = document.querySelectorAll('.about-content, .skills-category, .project-card, .contact-item, .social-link, .certificate-card');
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

    // 스킬 아이템 호버 효과
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.skill-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.skill-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // 도구 아이템 호버 효과
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.tool-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.tool-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // 소프트 스킬 호버 효과
    const softSkills = document.querySelectorAll('.soft-skill');
    
    softSkills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const icon = skill.querySelector('.skill-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        skill.addEventListener('mouseleave', () => {
            const icon = skill.querySelector('.skill-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // 프로젝트 카드 호버 효과
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // 연락처 아이템 호버 효과
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // 소셜 링크 호버 효과
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1.1)';
        });
        
        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });

    // 자격증 카드 호버 효과
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.certificate-icon');
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.certificate-icon');
            icon.style.transform = 'scale(1)';
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

    // 스킬 섹션 스크롤 애니메이션
    const skillsSection = document.querySelector('.skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
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

    // 초기화 완료 메시지
    console.log('🚀 심플한 포트폴리오 웹사이트가 성공적으로 로드되었습니다!');
}); 
/* ===================================
   Barış Portfolio - JavaScript
   With Language Switcher (TR/EN)
   =================================== */

// Translations
const translations = {
    en: {
        // Navigation
        navHome: 'Home',
        navProjects: 'Projects',
        navStory: 'My Story',
        navContact: 'Contact',

        // Home Page
        heroTitle: 'Hello, I\'m',
        heroName: 'Barış',
        heroRole: 'MIS Student & Software Developer',
        heroDescription: 'I solve complex problems using Genetic Algorithms, Python, and modern web technologies. Experienced in ERP (Odoo) development, data analysis, and data processing.',
        btnDownloadCV: 'Download CV',
        btnViewWork: 'View My Work',
        aboutTitle: 'About Me',
        aboutText1: 'Management Information Systems student with hands-on experience in software development. I specialize in building complex Genetic Algorithm-based scheduling systems (FastAPI, DEAP, PostgreSQL) to solve NP-Hard optimization problems. Proven ability in customizing and developing Odoo ERP modules.',
        aboutText2: 'Highly proficient in data analysis, visualization, and database querying using MySQL, R, and Tableau to drive process optimization and support digital transformation. Always eager to learn new technologies.',
        skillsTitle: 'Core Skills',

        // Projects Page
        projectsTitle: 'My Projects',
        projectsSubtitle: 'A collection of work that showcases my skills, creativity, and passion for building amazing digital experiences.',
        viewCode: 'View Code',
        liveDemo: 'Live Demo',

        // Project Cards
        project1Title: 'Automated Scheduling System',
        project1Desc: 'A comprehensive Full-Stack application using Python and Genetic Algorithms to solve automated timetabling challenges. Utilizes custom genetic algorithms to intelligently optimize schedules while adhering to complex resource constraints.',
        project2Title: 'Mail Agent',
        project2Desc: 'An intelligent email management and analysis application. Automates email processing workflows with smart categorization and response suggestions using Python and NLP.',
        project3Title: 'Passport Power Analysis',
        project3Desc: 'Global socio-economic analysis using R programming, implementing K-Means clustering algorithms for data segmentation. Visualizes distinct data patterns through heat maps to interpret complex socio-economic trends.',

        // Story Page
        storyTitle: 'My Journey',

        // Timeline
        timeline1Date: '2021 - Present',
        timeline1Title: 'University',
        timeline1Subtitle: 'Bachelor of Management of Information Systems (EN)',
        timeline1Desc: 'Studying at İzmir Bakırçay University, focusing on software development, data analysis, and business processes. Working on various projects including genetic algorithm-based scheduling systems and data visualization applications.',

        timeline2Date: '10/2025 - Present',
        timeline2Title: 'Intern',
        timeline2Subtitle: 'Ivynet Information Technology Electronics Inc.',
        timeline2Desc: 'Developing and customizing Odoo ERP modules based on business process analysis using Python. Managing and executing data migration from legacy systems to Odoo ERP, ensuring data integrity. Providing technical support and creating user documentation.',

        timeline3Date: '07/2025 - 10/2025',
        timeline3Title: 'Intern',
        timeline3Subtitle: 'Değer Steel Metal Industry and Trade Inc.',
        timeline3Desc: 'Utilized Odoo ERP system to streamline sales operations and improve data management. Successfully generated sales by managing the entire sales cycle, from lead engagement to closing deals.',

        timeline4Date: '02/2024 - 04/2024',
        timeline4Title: 'Business Development Assistant',
        timeline4Subtitle: 'Corecode Technology',
        timeline4Desc: 'Performed in-depth market research and business analysis to guide operational strategies. Optimized customer relationship management (CRM) processes to improve data accuracy and follow-up efficiency.',

        // Contact Page
        contactTitle: 'Get In Touch',
        contactSubtitle: 'Have a project in mind or just want to say hello? I\'d love to hear from you!',
        formName: 'Your Name',
        formEmail: 'Email Address',
        formMessage: 'Your Message',
        formNamePlaceholder: 'John Doe',
        formEmailPlaceholder: 'john@example.com',
        formMessagePlaceholder: 'Tell me about your project or just say hi...',
        formSubmit: 'Send Message',
        formErrorRequired: 'This field is required',
        formErrorEmail: 'Please enter a valid email',
        socialTitle: 'Let\'s Connect',
        socialText: 'Feel free to reach out through any of these platforms. I\'m always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.',
        locationTitle: '📍 Based in İzmir, Turkey',
        locationText: 'Available for remote work worldwide',

        // Footer
        footerText: 'All rights reserved.'
    },
    tr: {
        // Navigation
        navHome: 'Ana Sayfa',
        navProjects: 'Projeler',
        navStory: 'Hikayem',
        navContact: 'İletişim',

        // Home Page

        heroTitle: 'Merhaba, ben',
        heroName: 'Barış Mert',
        heroRole: 'YBS Öğrencisi & Yazılım Geliştirici',
        heroDescription: 'Genetik Algoritmalar, Python ve modern web teknolojileri kullanarak karmaşık problemlere çözüyorum. ERP(Odoo) geliştirme, veri analizi ve veri işleme konularında deneyimliyim.',
        btnDownloadCV: 'CV İndir',
        btnViewWork: 'Çalışmalarımı Gör',
        aboutTitle: 'Hakkımda',
        aboutText1: 'Yazılım geliştirme konusunda uygulamalı deneyime sahip Yönetim Bilişim Sistemleri öğrencisiyim. NP-Hard optimizasyon problemlerini çözmek için karmaşık Genetik Algoritma tabanlı zamanlama sistemleri (FastAPI, DEAP, PostgreSQL) geliştirme konusunda uzmanlaştım.',
        aboutText2: 'MySQL, R ve Tableau kullanarak veri analizi, görselleştirme ve veritabanı sorgulama konularında yüksek yetkinliğe sahibim. Sürekli yeni teknolojiler öğrenmeye hevesliyim.',
        skillsTitle: 'Temel Yetenekler',

        // Projects Page
        projectsTitle: 'Projelerim',
        projectsSubtitle: 'Becerilerimi, yaratıcılığımı ve harika dijital deneyimler oluşturma tutkumu sergileyen bir çalışma koleksiyonu.',
        viewCode: 'Kodu Gör',
        liveDemo: 'Canlı Demo',

        // Project Cards
        project1Title: 'Otomatik Ders Planlama Sistemi',
        project1Desc: 'Otomatik ders çizelgeleme problemlerini çözmek için Python ve Genetik Algoritmalar kullanan kapsamlı bir Full-Stack uygulama. Karmaşık kaynak kısıtlamalarına uyarak programları akıllıca optimize eder.',
        project2Title: 'Mail Agent',
        project2Desc: 'Akıllı e-posta yönetimi ve analiz uygulaması. Python ve NLP kullanarak akıllı kategorizasyon ve yanıt önerileri ile e-posta işleme iş akışlarını otomatikleştirir.',
        project3Title: 'Pasaport Gücü Analizi',
        project3Desc: 'R programlama kullanarak küresel sosyo-ekonomik analiz. Veri segmentasyonu için K-Means kümeleme algoritmaları uygular ve ısı haritaları ile veri kalıplarını görselleştirir.',

        // Story Page
        storyTitle: 'Yolculuğum',

        // Timeline
        timeline1Date: '2021 - Devam Ediyor',
        timeline1Title: 'Üniversite',
        timeline1Subtitle: 'YBS Lisans (İngilizce)',
        timeline1Desc: 'İzmir Bakırçay Üniversitesi\'nde yazılım geliştirme, veri analizi ve iş süreçlerine odaklanan eğitim alıyorum. Genetik algoritma tabanlı zamanlama sistemleri ve veri görselleştirme uygulamaları dahil çeşitli projeler üzerinde çalışıyorum.',

        timeline2Date: '10/2025 - Devam Ediyor',
        timeline2Title: 'Stajyer',
        timeline2Subtitle: 'Ivynet Bilgi Teknolojileri Elektronik A.Ş.',
        timeline2Desc: 'Python kullanarak iş süreç analizine dayalı Odoo ERP modülleri geliştirip özelleştirdim. Veri bütünlüğünü sağlayarak eski sistemlerden Odoo ERP\'ye veri göçünü yönettim.',

        timeline3Date: '07/2025 - 10/2025',
        timeline3Title: 'Stajyer',
        timeline3Subtitle: 'Değer Çelik Metal Sanayi ve Ticaret A.Ş.',
        timeline3Desc: 'Satış operasyonlarını düzene sokmak ve veri yönetimini iyileştirmek için Odoo ERP sistemini kullandım. Tüm satış döngüsünü yöneterek başarılı satışlar gerçekleştirdim.',

        timeline4Date: '02/2024 - 04/2024',
        timeline4Title: 'İş Geliştirme Asistanı',
        timeline4Subtitle: 'Corecode Technology',
        timeline4Desc: 'Operasyonel stratejileri yönlendirmek için derinlemesine pazar araştırması ve iş analizi yaptım. Müşteri ilişkileri yönetimi (CRM) süreçlerini optimize ettim.',

        // Contact Page
        contactTitle: 'İletişim',
        contactSubtitle: 'Aklınızda bir proje mi var yoksa sadece merhaba mı demek istiyorsunuz? Sizden haber almak isterim!',
        formName: 'Adınız',
        formEmail: 'E-posta Adresi',
        formMessage: 'Mesajınız',
        formNamePlaceholder: 'Ahmet Yılmaz',
        formEmailPlaceholder: 'ahmet@ornek.com',
        formMessagePlaceholder: 'Projeniz hakkında bilgi verin veya sadece merhaba deyin...',
        formSubmit: 'Mesaj Gönder',
        formErrorRequired: 'Bu alan zorunludur',
        formErrorEmail: 'Geçerli bir e-posta girin',
        socialTitle: 'İletişim Adresleri',
        socialText: 'Bu platformlardan herhangi biri aracılığıyla bana ulaşmaktan çekinmeyin. Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını tartışmak için her zaman heyecanlıyım.',
        locationTitle: '📍 Türkiye\'de',
        locationText: 'Dünya çapında uzaktan çalışmaya uygun',

        // Footer
        footerText: 'Tüm hakları saklıdır.'
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initContactForm();
    initLanguageSwitcher();

    // Apply saved language
    applyLanguage(currentLang);
});

/* ===== Language Switcher ===== */
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(btn => {
        // Set active state based on current language
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang === currentLang) return;

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save and apply language
            currentLang = lang;
            localStorage.setItem('lang', lang);
            applyLanguage(lang);
        });
    });
}

function applyLanguage(lang) {
    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key in t) {
            el.textContent = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/* ===== Mobile Navigation ===== */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a:not(.lang-btn)');

    if (hamburger && navLinks) {
        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinksItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');

    if (fadeElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

/* ===== Contact Form Validation ===== */
function initContactForm() {
    const form = document.querySelector('.contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const formGroups = form.querySelectorAll('.form-group');
        const t = translations[currentLang];

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const errorSpan = group.querySelector('.form-error');

            if (input && input.hasAttribute('required')) {
                if (input.value.trim() === '') {
                    group.classList.add('error');
                    if (errorSpan) errorSpan.textContent = t.formErrorRequired;
                    isValid = false;
                } else if (input.type === 'email' && !isValidEmail(input.value)) {
                    group.classList.add('error');
                    if (errorSpan) errorSpan.textContent = t.formErrorEmail;
                    isValid = false;
                } else {
                    group.classList.remove('error');
                }
            }
        });

        if (isValid) {
            // Show success message
            showFormSuccess(form);
        }
    });

    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.closest('.form-group').classList.remove('error');
        });
    });
}

/* ===== Email Validation ===== */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ===== Form Success Message ===== */
function showFormSuccess(form) {
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    const successText = currentLang === 'tr' ? '✓ Mesaj Gönderildi!' : '✓ Message Sent!';

    button.textContent = successText;
    button.style.background = '#22c55e';
    button.disabled = true;

    // Reset form
    form.reset();

    // Restore button after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 3000);
}

/* ===== Smooth Scroll for Anchor Links ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ===== Navbar Background on Scroll ===== */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        }
    }
});

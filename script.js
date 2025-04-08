document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng scroll cho navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 180,
                behavior: 'smooth'
            });
        });
    });

    // Hiệu ứng khi scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log('Form data:', data);
            alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
            this.reset();
        });
    }

    // Hiệu ứng hiển thị khi scroll (Intersection Observer)
    const sections = document.querySelectorAll('section');
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Hiệu ứng skill levels (Chỉ thay đổi chiều rộng một lần khi xuất hiện)
    const skillLevels = document.querySelectorAll('.skill-level');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const width = entry.target.dataset.width;
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.1 });

    skillLevels.forEach(skill => {
        skillObserver.observe(skill);
    });
});

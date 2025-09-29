// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const service = this.querySelector('select').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`${name} teşekkürler! Randevu talebiniz alınmıştır. En kısa sürede ${phone} numaranıza dönüş yapacağız.`);
        
        // Reset form
        this.reset();
    });
}

// Simple animation for elements when they come into view
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animation classes to CSS
const style = document.createElement('style');
style.innerHTML = `
    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    section.animated {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item img');
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // In a real implementation, this would open a lightbox
        // For now, we'll just show an alert
        alert('Galeri görüntüsü detayları için lütfen kliniğimizi ziyaret edin.');
    });
});
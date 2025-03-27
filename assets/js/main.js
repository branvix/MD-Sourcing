// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initScrollEffects();
    initQuickQuote();
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize accordions
    const accordionItems = document.querySelectorAll('.accordion-item');
    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all items
                accordionItems.forEach(accordionItem => {
                    accordionItem.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Skip if it's a modal trigger
            if (this.classList.contains('modal-trigger')) {
                return;
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Initialize scroll reveal effects
function initScrollEffects() {
    // Get all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    if (revealElements.length === 0) return;
    
    const revealCallback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const revealObserver = new IntersectionObserver(revealCallback, {
        root: null,
        threshold: 0.1,
        rootMargin: '-50px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Quick Quote form toggle
function initQuickQuote() {
    const quickQuoteBtn = document.querySelector('.quick-quote-btn');
    const quickQuoteForm = document.querySelector('.quick-quote-form');
    
    if (!quickQuoteBtn || !quickQuoteForm) return;
    
    quickQuoteBtn.addEventListener('click', function() {
        if (quickQuoteForm.style.display === 'block') {
            quickQuoteForm.style.display = 'none';
        } else {
            quickQuoteForm.style.display = 'block';
        }
    });
    
    // Close quick quote form when clicking outside
    document.addEventListener('click', function(e) {
        if (!quickQuoteBtn.contains(e.target) && !quickQuoteForm.contains(e.target) && quickQuoteForm.style.display === 'block') {
            quickQuoteForm.style.display = 'none';
        }
    });
}
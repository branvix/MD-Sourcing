// Counter Animation JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Get all counter elements
    const counterElements = document.querySelectorAll('.stat-number[data-count]');
    
    if (counterElements.length === 0) return;
    
    // Set up intersection observer to start counter when visible
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    });
    
    // Observe each counter element
    counterElements.forEach(element => {
        counterObserver.observe(element);
    });
    
    // Function to animate counter
    function startCounter(element) {
        const targetCount = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const frameRate = 60; // 60 fps
        const totalFrames = duration * frameRate / 1000;
        let frame = 0;
        
        // Start value at 0
        element.textContent = '0';
        
        // Counter animation function
        const counter = setInterval(() => {
            frame++;
            
            // Calculate current count using easing function
            const progress = frame / totalFrames;
            const easedProgress = easeOutCubic(progress);
            const currentCount = Math.floor(targetCount * easedProgress);
            
            // Update element text
            element.textContent = currentCount;
            
            // Stop counter when reached target count
            if (frame === totalFrames) {
                clearInterval(counter);
                element.textContent = targetCount;
            }
        }, 1000 / frameRate);
    }
    
    // Easing function for smoother animation
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }
});
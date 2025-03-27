// Modal JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize modals
    initModals();
});

function initModals() {
    // Get all modal triggers
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    
    if (modalTriggers.length === 0) return;
    
    // Add click event to each trigger
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target modal ID from href attribute
            const modalId = this.getAttribute('href');
            const modal = document.querySelector(modalId);
            
            if (modal) {
                // Open modal
                openModal(modal);
            }
        });
    });
    
    // Add close button event listeners
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find parent modal
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close modal when clicking outside content
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal(this);
            }
        });
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });
}

// Open modal function
function openModal(modal) {
    // Prevent scrolling on body
    document.body.style.overflow = 'hidden';
    
    // Show modal
    modal.style.display = 'block';
    
    // Add visible class for animation
    setTimeout(() => {
        modal.classList.add('visible');
    }, 10);
}

// Close modal function
function closeModal(modal) {
    // Remove visible class for animation
    modal.classList.remove('visible');
    
    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = 'none';
        
        // Restore scrolling on body
        document.body.style.overflow = '';
    }, 300);
}
// Filter JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize category filters
    initCategoryFilter();
});

function initCategoryFilter() {
    // Get filter buttons and category cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryCards = document.querySelectorAll('.category-card');
    
    if (filterButtons.length === 0 || categoryCards.length === 0) return;
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter category cards
            filterCategories(categoryCards, filterValue);
        });
    });
}

// Filter categories function
function filterCategories(cards, filter) {
    // Show all cards if filter is 'all'
    if (filter === 'all') {
        cards.forEach(card => {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        });
        return;
    }
    
    // Filter cards based on category
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (cardCategory === filter || cardCategory.includes(filter)) {
            // Show card with animation
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            // Hide card with animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}
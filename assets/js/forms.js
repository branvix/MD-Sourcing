// Forms JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject').value;
            const message = contactForm.querySelector('#message').value;
            
            // Validate form fields
            if (!name || !email || !subject || !message) {
                showFormMessage(contactForm, 'Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage(contactForm, 'Sending your message...', 'sending');
            
            // Here you would normally send an AJAX request to your backend
            // For demo purposes, we'll simulate a successful submission after a delay
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                
                // Show success message
                showFormMessage(contactForm, 'Your message has been sent successfully! We\'ll get back to you soon.', 'success');
            }, 1500);
        });
    }
    
    // Quick Quote Form Submission
    const quickQuoteForm = document.querySelector('.quick-quote-form form');
    if (quickQuoteForm) {
        quickQuoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = quickQuoteForm.querySelector('input[placeholder="Your Name"]').value;
            const email = quickQuoteForm.querySelector('input[placeholder="Your Email"]').value;
            const product = quickQuoteForm.querySelector('input[placeholder="Product Details"]').value;
            
            // Validate form fields
            if (!name || !email || !product) {
                showFormMessage(quickQuoteForm, 'Please fill in all required fields.', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage(quickQuoteForm, 'Sending your request...', 'sending');
            
            // Here you would normally send an AJAX request to your backend
            // For demo purposes, we'll simulate a successful submission after a delay
            setTimeout(function() {
                // Reset form
                quickQuoteForm.reset();
                
                // Show success message
                showFormMessage(quickQuoteForm, 'Your quote request has been sent successfully! We\'ll get back to you soon.', 'success');
                
                // Hide the quick quote form after a delay
                setTimeout(function() {
                    document.querySelector('.quick-quote-form').style.display = 'none';
                    removeFormMessage(quickQuoteForm);
                }, 3000);
            }, 1500);
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const email = newsletterForm.querySelector('.newsletter-input').value;
            
            // Validate form fields
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Simulate form submission
            newsletterForm.querySelector('.newsletter-btn').disabled = true;
            
            // Here you would normally send an AJAX request to your backend
            // For demo purposes, we'll simulate a successful submission after a delay
            setTimeout(function() {
                // Reset form
                newsletterForm.reset();
                
                // Show success message
                alert('You have successfully subscribed to our newsletter!');
                
                // Re-enable the submit button
                newsletterForm.querySelector('.newsletter-btn').disabled = false;
            }, 1500);
        });
    }
});

// Helper function to show form messages
function showFormMessage(form, message, type) {
    // Remove any existing message
    removeFormMessage(form);
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'form-message ' + type;
    messageElement.innerHTML = message;
    
    // Add message to form
    form.appendChild(messageElement);
    
    // If it's a success message, remove it after 5 seconds
    if (type === 'success') {
        setTimeout(function() {
            removeFormMessage(form);
        }, 5000);
    }
}

// Helper function to remove form messages
function removeFormMessage(form) {
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
}
// Cragun Legal - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Active Navigation Highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-link');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // Web3Forms Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Get form data
            const formData = new FormData(contactForm);

            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Show success message
                    if (formResult) {
                        formResult.style.display = 'block';
                        formResult.style.color = '#2d5a7b';
                        formResult.style.padding = '1rem';
                        formResult.style.backgroundColor = '#e6f3f0';
                        formResult.style.borderRadius = '5px';
                        formResult.textContent = 'Thank you for contacting Cragun Legal! We will respond to your inquiry within 24 hours.';
                    } else {
                        alert('Thank you for contacting Cragun Legal! We will respond to your inquiry within 24 hours.\n\nFor immediate assistance, please call (801) 610-9669.');
                    }

                    // Reset form
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // Show error message
                if (formResult) {
                    formResult.style.display = 'block';
                    formResult.style.color = '#c53030';
                    formResult.style.padding = '1rem';
                    formResult.style.backgroundColor = '#fff5f5';
                    formResult.style.borderRadius = '5px';
                    formResult.textContent = 'There was an error sending your message. Please call us at (801) 610-9669.';
                } else {
                    alert('There was an error sending your message. Please call us at (801) 610-9669.');
                }
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }

            return false;
        });
    }

    // Email validation helper
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements with animation
    const animateElements = document.querySelectorAll('.practice-card, .feature, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Rating Popup Functionality
    const ratingPopup = document.getElementById('rating-popup');
    const ratingStep1 = document.getElementById('rating-step-1');
    const ratingStep2 = document.getElementById('rating-step-2');
    const ratingMessage = document.getElementById('rating-message');
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackText = document.getElementById('feedback-text');
    const stars = document.querySelectorAll('.star');
    const closePopup = document.querySelector('.rating-popup-close');

    // Configuration
    const GOOGLE_REVIEW_URL = 'https://g.page/r/Cfi6hbdKoBrfEAI/review'; // Google Business Profile review link
    const FEEDBACK_EMAIL = 'jake@cragunlegal.com'; // Email for feedback

    let selectedRating = 0;

    // Show rating popup after 30 seconds (adjustable)
    function showRatingPopup() {
        // Check if user has already seen the popup this session
        if (!sessionStorage.getItem('ratingPopupShown')) {
            setTimeout(() => {
                ratingPopup.classList.add('active');
                sessionStorage.setItem('ratingPopupShown', 'true');
            }, 30000); // 30 seconds - adjust as needed
        }
    }

    // Initialize popup timer
    showRatingPopup();

    // Close popup
    closePopup.addEventListener('click', () => {
        ratingPopup.classList.remove('active');
        resetPopup();
    });

    // Close popup when clicking outside
    ratingPopup.addEventListener('click', (e) => {
        if (e.target === ratingPopup) {
            ratingPopup.classList.remove('active');
            resetPopup();
        }
    });

    // Star hover effect
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('hovered');
                } else {
                    s.classList.remove('hovered');
                }
            });
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hovered'));
        });

        // Star click handler
        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-rating'));

            // Update star display
            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            // Handle rating
            handleRating(selectedRating);
        });
    });

    function handleRating(rating) {
        // Hide step 1, show step 2
        ratingStep1.classList.remove('active');
        ratingStep2.classList.add('active');

        if (rating === 5) {
            // 5 stars - redirect to Google Reviews
            ratingMessage.textContent = "We're thrilled you had a great experience! We'd love if you could share your review on Google.";

            setTimeout(() => {
                if (GOOGLE_REVIEW_URL !== 'YOUR_GOOGLE_REVIEW_URL_HERE') {
                    window.open(GOOGLE_REVIEW_URL, '_blank');
                } else {
                    alert('Please configure your Google Review URL in the JavaScript file.');
                }
                ratingPopup.classList.remove('active');
                resetPopup();
            }, 2000);
        } else {
            // Less than 5 stars - show feedback form
            ratingMessage.textContent = "Thank you for your feedback. We'd love to hear how we can improve.";
            feedbackForm.style.display = 'block';
        }
    }

    // Submit feedback
    document.getElementById('submit-feedback').addEventListener('click', async () => {
        const feedback = feedbackText.value.trim();

        if (feedback === '') {
            alert('Please enter your feedback before submitting.');
            return;
        }

        const submitBtn = document.getElementById('submit-feedback');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Prepare form data for Web3Forms
            const formData = new FormData();
            formData.append('access_key', 'b240f14c-1f9e-4216-a0e4-a78f65f93600');
            formData.append('subject', `Feedback - ${selectedRating} Star Rating`);
            formData.append('message', `Rating: ${selectedRating} stars\n\nFeedback:\n${feedback}`);
            formData.append('from_name', 'Cragun Legal Rating System');

            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Show thank you message
                ratingMessage.textContent = "Thank you for your valuable feedback!";
                feedbackForm.style.display = 'none';

                // Close popup after 2 seconds
                setTimeout(() => {
                    ratingPopup.classList.remove('active');
                    resetPopup();
                }, 2000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('There was an error submitting your feedback. Please try again or contact us at (801) 610-9669.');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    function resetPopup() {
        selectedRating = 0;
        stars.forEach(s => s.classList.remove('active', 'hovered'));
        ratingStep1.classList.add('active');
        ratingStep2.classList.remove('active');
        feedbackForm.style.display = 'none';
        feedbackText.value = '';
    }
});

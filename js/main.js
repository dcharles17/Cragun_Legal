// Cragun Legal - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ======= Mobile Menu Toggle =======
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });

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

    // ======= Active Navigation Highlight ======
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-link');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            item.classList.add('active');
        }
    });

    // ======= Header Scroll Effect =======
    const header = document.querySelector('.header');
    let lastScroll = 0;

    function handleNavScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // ======= Subtle Hero Parallax =======
    const hero = document.querySelector('.hero');
    if (hero) {
        let ticking = false;
        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    const scrollY = window.scrollY;
                    const heroHeight = hero.offsetHeight;
                    if (scrollY <= heroHeight) {
                        hero.style.setProperty('--parallax-offset', (scrollY * 0.3) + 'px');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ======= Scroll Reveal with Stagger =======
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ======= Animated Stat Counters =======
    const counters = document.querySelectorAll('[data-count]');

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animateCounter(el) {
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            const currentValue = Math.round(easedProgress * target);

            el.textContent = currentValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(el => {
            counterObserver.observe(el);
        });
    }

    // ======= Smooth Scrolling for Anchor Links =======
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

    // ======= FAQ Accordion =======
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(other => other.classList.remove('active'));

                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ======= Web3Forms Contact Form Handler =======
    const contactForm = document.getElementById('contact-form');
    const formResult = document.getElementById('form-result');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Also submit to Netlify for Dillon's tracking
                    var netlifyData = new URLSearchParams();
                    netlifyData.append('form-name', 'contact-tracking');
                    netlifyData.append('name', formData.get('name') || '');
                    netlifyData.append('email', formData.get('email') || '');
                    netlifyData.append('phone', formData.get('phone') || '');
                    netlifyData.append('subject', formData.get('subject') || '');
                    netlifyData.append('message', formData.get('message') || '');
                    netlifyData.append('timestamp', new Date().toLocaleString());
                    fetch('/', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: netlifyData.toString()
                    }).catch(function() {});

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

                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
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
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }

            return false;
        });
    }

    // ======= Call Button Click Tracking =======
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
        link.addEventListener('click', function() {
            var formData = new URLSearchParams();
            formData.append('form-name', 'call-tracking');
            formData.append('page', window.location.pathname);
            formData.append('timestamp', new Date().toLocaleString());

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formData.toString()
            }).catch(function() {});
        });
    });

    // ======= Email Validation Helper =======
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ======= Rating Popup Functionality =======
    const ratingPopup = document.getElementById('rating-popup');
    const ratingStep1 = document.getElementById('rating-step-1');
    const ratingStep2 = document.getElementById('rating-step-2');
    const ratingMessage = document.getElementById('rating-message');
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackText = document.getElementById('feedback-text');
    const stars = document.querySelectorAll('.star');
    const closePopup = document.querySelector('.rating-popup-close');

    // Configuration
    const GOOGLE_REVIEW_URL = 'https://g.page/r/Cfi6hbdKoBrfEAI/review';
    const FEEDBACK_EMAIL = 'jake@cragunlegal.com';

    let selectedRating = 0;

    // Show rating popup after 30 seconds
    function showRatingPopup() {
        if (!sessionStorage.getItem('ratingPopupShown')) {
            setTimeout(() => {
                if (ratingPopup) {
                    ratingPopup.classList.add('active');
                    sessionStorage.setItem('ratingPopupShown', 'true');
                }
            }, 30000);
        }
    }

    showRatingPopup();

    // Close the popup
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            ratingPopup.classList.remove('active');
            resetPopup();
        });
    }

    // Close popup when clicking outside
    if (ratingPopup) {
        ratingPopup.addEventListener('click', (e) => {
            if (e.target === ratingPopup) {
                ratingPopup.classList.remove('active');
                resetPopup();
            }
        });
    }

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

        star.addEventListener('click', () => {
            selectedRating = parseInt(star.getAttribute('data-rating'));

            stars.forEach((s, i) => {
                if (i < selectedRating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            handleRating(selectedRating);
        });
    });

    function handleRating(rating) {
        if (!ratingStep1 || !ratingStep2) return;

        ratingStep1.classList.remove('active');
        ratingStep2.classList.add('active');

        if (rating === 5) {
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
            ratingMessage.textContent = "Thank you for your feedback. We'd love to hear how we can improve.";
            feedbackForm.style.display = 'block';
        }
    }

    // Submit feedback via Web3Forms
    const submitFeedbackBtn = document.getElementById('submit-feedback');
    if (submitFeedbackBtn) {
        submitFeedbackBtn.addEventListener('click', async () => {
            const feedback = feedbackText.value.trim();

            if (feedback === '') {
                alert('Please enter your feedback before submitting.');
                return;
            }

            const submitBtn = submitFeedbackBtn;
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                const formData = new FormData();
                formData.append('access_key', 'b240f14c-1f9e-4216-a0e4-a78f65f93600');
                formData.append('subject', `Feedback - ${selectedRating} Star Rating`);
                formData.append('message', `Rating: ${selectedRating} stars\n\nFeedback:\n${feedback}`);
                formData.append('from_name', 'Cragun Legal Rating System');

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    ratingMessage.textContent = "Thank you for your valuable feedback!";
                    feedbackForm.style.display = 'none';

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
    }

    function resetPopup() {
        selectedRating = 0;
        stars.forEach(s => s.classList.remove('active', 'hovered'));
        if (ratingStep1) ratingStep1.classList.add('active');
        if (ratingStep2) ratingStep2.classList.remove('active');
        if (feedbackForm) feedbackForm.style.display = 'none';
        if (feedbackText) feedbackText.value = '';
    }
});

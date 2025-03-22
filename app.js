import { countdownDate, toggleButtonSets } from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Audience Toggle Functionality
    toggleButtonSets.forEach(set => {
        const toggleBtns = document.querySelectorAll(set.buttonsQuery);
        
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state on buttons
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Show corresponding content
                const target = btn.getAttribute('data-target');
                const contents = document.querySelectorAll(set.contentsQuery);
                
                contents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === target) {
                        content.classList.add('active');
                    }
                });
            });
        });
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            item.classList.toggle('active');
        });
    });
    
    // Countdown Timer
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update all countdown displays
        document.querySelectorAll('#days, #cta-days').forEach(el => {
            el.textContent = days.toString().padStart(2, '0');
        });
        
        document.querySelectorAll('#hours, #cta-hours').forEach(el => {
            el.textContent = hours.toString().padStart(2, '0');
        });
        
        document.querySelectorAll('#minutes, #cta-minutes').forEach(el => {
            el.textContent = minutes.toString().padStart(2, '0');
        });
        
        document.querySelectorAll('#seconds, #cta-seconds').forEach(el => {
            el.textContent = seconds.toString().padStart(2, '0');
        });
    }
    
    // Initial call
    updateCountdown();
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    
    // Set timeline dates based on countdownDate
    const setTimelineDates = () => {
        const baseDate = new Date(countdownDate);
        
        // Calculate all dates relative to the event date
        const dates = {
            registrationOpens: new Date(baseDate),
            workshopsBegin: new Date(baseDate),
            teamFormation: new Date(baseDate),
            kickoff: new Date(baseDate),
            submissionDeadline: new Date(baseDate),
            judgingPeriod: new Date(baseDate),
            finalistsPresentations: new Date(baseDate),
            awardsCeremony: new Date(baseDate)
        };
        
        // Set dates relative to the hackathon end date
        dates.registrationOpens.setDate(baseDate.getDate() - 60); // 60 days before
        dates.workshopsBegin.setDate(baseDate.getDate() - 45); // 45 days before
        dates.teamFormation.setDate(baseDate.getDate() - 15); // 15 days before
        dates.kickoff.setDate(baseDate.getDate() - 7); // 7 days before
        dates.submissionDeadline.setDate(baseDate.getDate() - 1); // 1 day before
        dates.judgingPeriod.setDate(baseDate.getDate() + 1); // 1 day after
        dates.finalistsPresentations.setDate(baseDate.getDate() + 3); // 3 days after
        dates.awardsCeremony.setDate(baseDate.getDate() + 5); // 5 days after
        
        // Update timeline date displays
        const timelineDates = document.querySelectorAll('.timeline-date');
        const formatOptions = { month: 'short', day: 'numeric' };
        
        if (timelineDates.length >= 8) {
            timelineDates[0].textContent = dates.registrationOpens.toLocaleDateString('en-US', formatOptions);
            timelineDates[1].textContent = dates.workshopsBegin.toLocaleDateString('en-US', formatOptions);
            timelineDates[2].textContent = dates.teamFormation.toLocaleDateString('en-US', formatOptions);
            timelineDates[3].textContent = dates.kickoff.toLocaleDateString('en-US', formatOptions);
            timelineDates[4].textContent = dates.submissionDeadline.toLocaleDateString('en-US', formatOptions);
            timelineDates[5].textContent = dates.judgingPeriod.toLocaleDateString('en-US', formatOptions);
            timelineDates[6].textContent = dates.finalistsPresentations.toLocaleDateString('en-US', formatOptions);
            timelineDates[7].textContent = dates.awardsCeremony.toLocaleDateString('en-US', formatOptions);
        }
    };
    
    // Call the function to set timeline dates
    setTimelineDates();
    
    // Project showcase filtering
    const showcaseFilters = document.querySelectorAll('.showcase-filter');
    const showcaseItems = document.querySelectorAll('.showcase-item');
    
    if (showcaseFilters.length > 0) {
        showcaseFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Remove active class from all filters
                showcaseFilters.forEach(f => f.classList.remove('active'));
                // Add active class to clicked filter
                filter.classList.add('active');
                
                const category = filter.getAttribute('data-category');
                
                // Show all items if 'all' is selected, otherwise filter
                showcaseItems.forEach(item => {
                    if (category === 'all') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = item.classList.contains(category) ? 'block' : 'none';
                    }
                });
                
                // Trigger animation for visible items
                setTimeout(() => {
                    showcaseItems.forEach(item => {
                        if (item.style.display === 'block') {
                            item.classList.add('show');
                        } else {
                            item.classList.remove('show');
                        }
                    });
                }, 50);
            });
        });
    }
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide === 0 ? testimonialSlides.length - 1 : currentSlide - 1;
            showSlide(currentSlide);
        });
        
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Auto advance slides every 5 seconds
        setInterval(() => {
            currentSlide = currentSlide === testimonialSlides.length - 1 ? 0 : currentSlide + 1;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // Registration buttons event listeners
    const registerProBtn = document.getElementById('register-pro-btn');
    const registerBeginnerBtn = document.getElementById('register-beginner-btn');
    
    if (registerProBtn) {
        registerProBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
            // Optionally show a specific registration form for pros
        });
    }
    
    if (registerBeginnerBtn) {
        registerBeginnerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
            // Optionally show a specific registration form for beginners
        });
    }
    
    // About Video Placeholder Click Handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const aboutVideo = document.getElementById('aboutVideo');
    
    if (videoPlaceholder && aboutVideo) {
        videoPlaceholder.addEventListener('click', () => {
            videoPlaceholder.style.display = 'none';
            aboutVideo.style.display = 'block';
            aboutVideo.play();
        });
    }
    
    // Workshop Tabs
    const workshopTabs = document.querySelectorAll('.workshop-tab');
    const workshopContents = document.querySelectorAll('.workshop-content');
    
    workshopTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            workshopTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const target = tab.getAttribute('data-target');
            workshopContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.prize-card, .tier-card, .judge-card, .faq-item, .sponsor-logo');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('tier-card') && element.classList.contains('popular') 
                    ? 'scale(1.05)' 
                    : 'translateY(0)';
            }
        });
    };
    
    // Set initial state for scroll animations
    const initScrollAnimations = () => {
        const elements = document.querySelectorAll('.prize-card, .tier-card:not(.popular), .judge-card, .faq-item, .sponsor-logo');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Special handling for popular tier card
        const popularTier = document.querySelector('.tier-card.popular');
        if (popularTier) {
            popularTier.style.opacity = '0';
            popularTier.style.transform = 'scale(1) translateY(20px)';
            popularTier.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }
        
        // Trigger initial check
        animateOnScroll();
    };
    
    // Initialize animations
    initScrollAnimations();
    
    // Toggle functionality for Resources section
    const resourceToggleBtns = document.querySelectorAll('.resources .toggle-btn');
    const resourceContents = document.querySelectorAll('.resources .audience-content');
    
    resourceToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            resourceToggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const target = btn.getAttribute('data-target');
            resourceContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Challenge Cards Animation
    const challengeCards = document.querySelectorAll('.challenge-card');
    challengeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const animateChallengeCards = () => {
        challengeCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize challenge cards animation
    animateChallengeCards();
    
    // Initialize animations for new sections
    const animateNewSections = () => {
        const elements = document.querySelectorAll('.mentor-card, .resource-card.tech, .workshop-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = element.classList.contains('mentor-card') 
                    ? 'translateY(0)' 
                    : element.classList.contains('resource-card') 
                        ? 'translateY(0)' 
                        : 'translateX(0)';
            }
        });
    };
    
    // Set initial state for new section animations
    const initNewSectionAnimations = () => {
        const elements = document.querySelectorAll('.mentor-card, .resource-card.tech, .workshop-item');
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = element.classList.contains('mentor-card') 
                ? 'translateY(20px)' 
                : element.classList.contains('resource-card') 
                    ? 'translateY(20px)' 
                    : 'translateX(-20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Trigger initial check
        animateNewSections();
    };
    
    // Initialize new section animations
    initNewSectionAnimations();
    
    // Add challenge cards to scroll animation elements
    const animateAllOnScroll = () => {
        animateOnScroll(); // Call the existing function
        animateChallengeCards(); // Call the new function
    };
    
    // Add new sections to scroll animation
    const animateAllSections = () => {
        animateOnScroll(); // Call existing function for original sections
        animateChallengeCards(); // Call existing function for challenge cards
        animateNewSections(); // Call new function for new sections
    };
    
    // Update scroll event listener
    window.removeEventListener('scroll', animateOnScroll);
    window.removeEventListener('scroll', animateAllOnScroll);
    window.addEventListener('scroll', animateAllSections);
    
    // World Record Participant Counter Animation
    const animateParticipantCounter = () => {
        const counter = document.getElementById('current-participants');
        if (counter) {
            const target = 12547; // Current registration number
            let count = 10000;
            const interval = setInterval(() => {
                count += Math.ceil((target - count) / 20);
                counter.innerText = count.toLocaleString();
                if (count >= target) {
                    clearInterval(interval);
                }
            }, 50);
        }
    };

    // Initialize participant counter animation
    animateParticipantCounter();

    // Add copy functionality for share buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            let textToCopy;
            if (button.previousElementSibling && button.previousElementSibling.tagName === 'INPUT') {
                textToCopy = button.previousElementSibling.value;
            } else if (button.parentElement.classList.contains('share-card')) {
                textToCopy = button.parentElement.querySelector('.share-message').textContent;
            }
            
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
        });
    });
    
    // Share button functionality (simplified - would be replaced with actual sharing API)
    const shareBtns = document.querySelectorAll('.share-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.classList.contains('twitter') ? 'Twitter' : 
                             btn.classList.contains('facebook') ? 'Facebook' : 'LinkedIn';
            alert(`This would share to ${platform} in a real implementation`);
            // In a real implementation, we would use the respective social media sharing APIs
        });
    });
});
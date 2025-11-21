// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initTypewriter();
  initCounterAnimation();
  initScrollEffects();
  initEmailCopy();
  initSmoothScrolling();
});

// Typewriter effect for the subtitle
function initTypewriter() {
  const subtitle = document.getElementById('subtitle');
  if (!subtitle) return;
  
  // Reset animation for browsers that might cache it
  subtitle.style.animation = 'none';
  setTimeout(() => {
    subtitle.style.animation = '';
  }, 10);
}

// Counter animation for stats
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat h3');
  const speed = 200; // The lower the slower
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;
    
    if (count < target) {
      const updateCount = () => {
        const currentCount = +counter.innerText;
        if (currentCount < target) {
          counter.innerText = Math.ceil(currentCount + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    }
  });
}

// Scroll effects for navbar and elements
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.backgroundColor = 'white';
      navbar.style.backdropFilter = 'none';
    }
    
    // Active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const elementsToAnimate = document.querySelectorAll(
    '.profile-card, .about-highlights, .skill-category, .project-card, .contact-method'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-element');
    observer.observe(el);
  });
}

// Email copy functionality
function initEmailCopy() {
  const copyButton = document.getElementById('copy-email');
  const emailDisplay = document.getElementById('email-display');
  
  if (!copyButton || !emailDisplay) return;
  
  copyButton.addEventListener('click', function() {
    const email = emailDisplay.textContent;
    
    // Use the Clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(() => {
        showCopyFeedback(copyButton, 'Copied!');
      }).catch(err => {
        fallbackCopyText(email, copyButton);
      });
    } else {
      fallbackCopyText(email, copyButton);
    }
  });
}

// Fallback for older browsers
function fallbackCopyText(text, button) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    const successful = document.execCommand('copy');
    if (successful) {
      showCopyFeedback(button, 'Copied!');
    } else {
      showCopyFeedback(button, 'Failed to copy');
    }
  } catch (err) {
    showCopyFeedback(button, 'Failed to copy');
  }
  
  document.body.removeChild(textArea);
}

// Show feedback when email is copied
function showCopyFeedback(button, message) {
  const originalText = button.innerHTML;
  button.innerHTML = `<i class="fas fa-check"></i> ${message}`;
  
  setTimeout(() => {
    button.innerHTML = originalText;
  }, 2000);
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  .fade-element {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .nav-links a.active {
    background-color: var(--primary);
    color: white;
  }
`;
document.head.appendChild(style);
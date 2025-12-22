// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Fetch GitHub avatar dynamically
  fetch('https://api.github.com/users/aanchalshres')
    .then(res => res.json())
    .then(data => {
      const img = document.getElementById('profile-img');
      if (img && data.avatar_url) img.src = data.avatar_url;
    })
    .catch(() => {/* fallback: keep existing src */});

  // Initialize all functionality
  initSparkles();
  initTypewriter();
  initCounterAnimation();
  initScrollEffects();
  initEmailCopy();
  initSmoothScrolling();
});

// Create sparkle effect in header
function initSparkles() {
  const sparklesContainer = document.querySelector('.sparkles-container');
  if (!sparklesContainer) return;

  function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px white;
      pointer-events: none;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: sparkle-animation ${2 + Math.random() * 3}s ease-in-out infinite;
      opacity: 0;
    `;
    sparklesContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 5000);
  }

  // Create sparkles periodically
  setInterval(createSparkle, 300);

  // Add sparkle animation keyframes
  if (!document.querySelector('#sparkle-styles')) {
    const style = document.createElement('style');
    style.id = 'sparkle-styles';
    style.textContent = `
      @keyframes sparkle-animation {
        0% {
          opacity: 0;
          transform: scale(0) rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: scale(1) rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: scale(0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

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
  let animated = false;
  
  const animateCounters = () => {
    if (animated) return;
    
    const statsSection = document.querySelector('.stats');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      animated = true;
      
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = 50;
        const increment = target / speed;
        let count = 0;
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  };
  
  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Check on load
}

// Scroll effects for navbar and elements
function initScrollEffects() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Navbar style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.9)';
      navbar.style.backdropFilter = 'blur(20px)';
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
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
    '.profile-card, .highlight, .skill-category, .project-card, .contact-method'
  );
  
  elementsToAnimate.forEach(el => {
    el.classList.add('fade-element');
    observer.observe(el);
  });
  
  // Add parallax effect to floating shapes
  window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.05;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .fade-element {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .nav-links a.active {
    background: linear-gradient(135deg, var(--primary), var(--purple));
    color: white;
    box-shadow: var(--shadow);
  }
`;
document.head.appendChild(style);

// Add interactive icon reactions on hover
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.stat-icon');
      if (icon) {
        icon.style.transform = 'scale(1.3) rotate(20deg)';
        setTimeout(() => {
          icon.style.transform = '';
        }, 300);
      }
    });
  });
});

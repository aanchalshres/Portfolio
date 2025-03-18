// Particle.js Background
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded!');
  });
  
  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
  });
  
  // Typing Animation
  const typingText = "awesome websites.";
  const typingElement = document.querySelector('.typing');
  let index = 0;
  
  function typeWriter() {
    if (index < typingText.length) {
      typingElement.textContent += typingText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  
  typeWriter();
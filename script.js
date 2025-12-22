// Confine particles to hero, respect reduced motion
document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const hero = document.querySelector('.hero');
  const particles = document.getElementById('particles-js');
  if (hero && particles) hero.appendChild(particles);

  if (!prefersReduced && window.particlesJS) {
    const particleColor = isDark ? '#dcd6ff' : '#9e8cf3';
    particlesJS('particles-js', {
      particles: {
        number: { value: 45, density: { enable: true, value_area: 900 } },
        color: { value: particleColor },
        shape: { type: 'circle' },
        opacity: { value: 0.4 },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 140, color: particleColor, opacity: 0.28, width: 1 },
        move: { enable: true, speed: 1.1, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false }, resize: true },
        modes: { repulse: { distance: 120, duration: 0.2 } }
      },
      retina_detect: true
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetSel = this.getAttribute('href');
      if (!targetSel || targetSel === '#') return;
      const target = document.querySelector(targetSel);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Reveal on scroll (sections and cards)
  const revealables = document.querySelectorAll('section, .skill-card, .project-card');
  revealables.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('revealed');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
  revealables.forEach(el => observer.observe(el));
});

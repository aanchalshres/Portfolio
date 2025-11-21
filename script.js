// script.js
// Assumption: GitHub username is the repo owner 'aanchalshres'.
const GITHUB_USERNAME = 'aanchalshres';

async function loadGitHubProfile(username = GITHUB_USERNAME) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('GitHub user not found');
    const data = await res.json();

    // Update image (use higher size if available)
    const img = document.getElementById('profile-img');
    if (img && data.avatar_url) img.src = data.avatar_url + (data.avatar_url.includes("s=") ? '' : '&s=400');

    // Update text fields
    const nameEl = document.getElementById('profile-name');
    const mainNameEl = document.getElementById('main-name');
    if (nameEl) nameEl.textContent = data.name || data.login || nameEl.textContent;
    if (mainNameEl) mainNameEl.textContent = data.name || data.login || mainNameEl.textContent;

    const locEl = document.getElementById('profile-location');
    if (locEl) {
      const locationText = data.location ? data.location + ' | ' : '';
      const experienceText = '1+ years experience';
      locEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${locationText}${experienceText}`;
    }

    const bioEl = document.getElementById('profile-bio');
    if (bioEl) bioEl.textContent = data.bio || bioEl.textContent;

    // Animate project count using public_repos
    const projectsEl = document.getElementById('stat-projects');
    if (projectsEl) animateNumber(projectsEl, data.public_repos || parseInt(projectsEl.dataset.target || '0'));

    // Other stats - keep existing targets but animate
    const techEl = document.getElementById('stat-tech');
    const expEl = document.getElementById('stat-exp');
    const hackEl = document.getElementById('stat-hack');
    if (techEl) animateNumber(techEl, parseInt(techEl.dataset.target || '8'));
    if (expEl) animateNumber(expEl, parseInt(expEl.dataset.target || '1'));
    if (hackEl) animateNumber(hackEl, parseInt(hackEl.dataset.target || '3'));

  } catch (err) {
    // On error, leave local profile.jpg as fallback and still animate default stats
    console.warn('Could not load GitHub profile:', err.message);
    const techEl = document.getElementById('stat-tech');
    const expEl = document.getElementById('stat-exp');
    const hackEl = document.getElementById('stat-hack');
    const projectsEl = document.getElementById('stat-projects');
    if (projectsEl) animateNumber(projectsEl, parseInt(projectsEl.dataset.target || '10'));
    if (techEl) animateNumber(techEl, parseInt(techEl.dataset.target || '8'));
    if (expEl) animateNumber(expEl, parseInt(expEl.dataset.target || '1'));
    if (hackEl) animateNumber(hackEl, parseInt(hackEl.dataset.target || '3'));
  }
}

function animateNumber(el, target) {
  target = Number(target) || 0;
  const start = 0;
  const duration = 800; // ms
  const frameRate = 30;
  const totalFrames = Math.round(duration / (1000 / frameRate));
  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const value = Math.round(start + (target - start) * easeOutCubic(progress));
    el.textContent = value;
    if (frame >= totalFrames) {
      clearInterval(counter);
      el.textContent = target + (el.dataset.suffix || '');
    }
  }, 1000 / frameRate);
}

function easeOutCubic(t) {
  return (--t) * t * t + 1;
}

// Typewriter effect for the subtitle
function startTypewriter(elId, phrases, delayBetween = 1800) {
  const el = document.getElementById(elId);
  if (!el || !phrases || !phrases.length) return;
  let idx = 0;
  let pos = 0;
  let forward = true;

  function step() {
    const current = phrases[idx];
    if (forward) {
      pos++;
      el.textContent = current.slice(0, pos);
      if (pos === current.length) {
        forward = false;
        setTimeout(step, delayBetween);
        return;
      }
    } else {
      pos--;
      el.textContent = current.slice(0, pos);
      if (pos === 0) {
        forward = true;
        idx = (idx + 1) % phrases.length;
      }
    }
    setTimeout(step, forward ? 80 : 40);
  }
  step();
}

// Copy email to clipboard
function setupEmailCopy() {
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const email = 'aachal.shres@gmail.com';
      // Try clipboard API first
      try {
        await navigator.clipboard.writeText(email);
        const original = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => copyBtn.innerHTML = original, 1400);
      } catch (err) {
        // Fallback method
        const ta = document.createElement('textarea');
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(() => copyBtn.innerHTML = original, 1400);
        } catch (e) {
          alert('Could not copy email. Here it is: ' + email);
        }
        ta.remove();
      }
    });
  }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Start typewriter with a few variants
  startTypewriter('subtitle', [
    'Full Stack Developer',
    'Freelancer • Translator',
    'Laravel • JS • C/C++'
  ], 1600);

  // Load GitHub profile and animate stats
  loadGitHubProfile();

  // Setup email copy functionality
  setupEmailCopy();

  // Setup smooth scrolling
  setupSmoothScrolling();

  // Add scroll effect to navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(30, 41, 59, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    } else {
      navbar.style.background = 'var(--dark-light)';
      navbar.style.backdropFilter = 'none';
    }
  });
});
/* ──────────────────────────────────────────────────
   ANIMATIONS & SCROLL REVEAL
   ────────────────────────────────────────────────── */

function initReveal() {
  const els = document.querySelectorAll('[data-reveal], .reveal-line');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, stop watching (one-shot)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,        // 12% visible triggers it
    rootMargin: '0px 0px -40px 0px'  // slight offset from bottom
  });

  els.forEach(el => observer.observe(el));
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  
  if (window.scrollY > 30) nav.classList.add('navbar-scrolled');
  else nav.classList.remove('navbar-scrolled');

  // Parallax orbs
  const orb1 = document.getElementById('orb1');
  const orb2 = document.getElementById('orb2');
  if (orb1) orb1.style.transform = `translateY(${window.scrollY * 0.18}px)`;
  if (orb2) orb2.style.transform = `translateY(${-window.scrollY * 0.12}px)`;
}, { passive: true });

// Run on page load
document.addEventListener('DOMContentLoaded', initReveal);

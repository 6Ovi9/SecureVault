/* ──────────────────────────────────────────────────
   MAIN APPLICATION LOGIC
   ────────────────────────────────────────────────── */

function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page, .page-flex').forEach(p => {
    p.classList.remove('active');
  });
  const el = document.getElementById('page-' + id);
  if (el) el.classList.add('active');

  if (id === 'dashboard') renderFileTable();
  window.scrollTo(0, 0);
}

// Dashboard section switching
function switchSection(sectionId, navEl) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  navEl.classList.add('active');

  // Update content
  document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + sectionId).classList.add('active');

  // Update header
  const titles = { boveda: 'Mi Bóveda', rgpd: 'Cumplimiento RGPD', servidor: 'Estado del Servidor' };
  const breadcrumbs = { boveda: 'sv-empresa-01 / documentos', rgpd: 'sv-empresa-01 / seguridad / rgpd', servidor: 'sv-empresa-01 / sistema / estado' };
  document.getElementById('section-title').textContent = titles[sectionId];
  document.getElementById('section-breadcrumb').textContent = breadcrumbs[sectionId];
}

// Patch showPage to re-init reveal when landing becomes visible again
const _origShowPage = showPage;
window.showPage = function(id) {
  _origShowPage(id);
  if (id === 'landing') {
    // Small delay so the page is visible before observing
    setTimeout(() => {
      // Reset all reveal elements so they can animate again on return
      document.querySelectorAll('[data-reveal].revealed, .reveal-line.revealed').forEach(el => {
        el.classList.remove('revealed');
      });
      setTimeout(initReveal, 50);
    }, 50);
  }
};

// Update pricing based on zone selection
function updatePricing() {
  const name = document.getElementById('pricing-name').value;
  const email = document.getElementById('pricing-email').value;
  const address = document.getElementById('pricing-address').value;
  const zone = document.getElementById('pricing-zone').value;

  // If all fields are filled, show pricing cards and calculate prices
  if (name && email && address && zone) {
    const shippingCosts = {
      'local': 75,
      'metro': 150,
      'madrid': 300,
      'nacional': 500
    };

    const shipping = shippingCosts[zone] || 75;

    // Base prices
    const basePrices = {
      'solo': 2500,
      'startup': 5000,
      'pro': 10000
    };

    // Update prices with shipping
    document.getElementById('solo-price').textContent = '€' + (basePrices.solo + shipping).toLocaleString('es-ES');
    document.getElementById('solo-shipping').textContent = '€' + shipping;

    document.getElementById('startup-price').textContent = '€' + (basePrices.startup + shipping).toLocaleString('es-ES');
    document.getElementById('startup-shipping').textContent = '€' + shipping;

    document.getElementById('pro-price').textContent = '€' + (basePrices.pro + shipping).toLocaleString('es-ES');
    document.getElementById('pro-shipping').textContent = '€' + shipping;

    // Show pricing cards
    document.getElementById('pricing-cards').style.display = 'block';

    // Trigger animation for cards
    setTimeout(() => {
      initReveal();
    }, 50);
  } else {
    // Hide cards if form is incomplete
    document.getElementById('pricing-cards').style.display = 'none';
  }
}

// Handle custom enterprise inquiry
function handleCustomInquiry(event) {
  event.preventDefault();
  
  const form = event.target;
  const company = form.querySelector('input[type="text"]').value;
  const needs = form.querySelector('textarea').value;
  const email = form.querySelector('input[type="email"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  
  // Simulate sending (in a real app, this would send to a server)
  const originalBtn = form.querySelector('button[type="submit"]');
  const originalText = originalBtn.textContent;
  originalBtn.disabled = true;
  originalBtn.textContent = 'Enviando...';
  
  setTimeout(() => {
    originalBtn.textContent = '¡Solicitud enviada!';
    originalBtn.classList.add('bg-vault-green', 'text-slate-900');
    originalBtn.classList.remove('bg-vault-green/20', 'hover:bg-vault-green/40', 'border', 'border-vault-green/50', 'text-white');
    
    // Reset after 3 seconds
    setTimeout(() => {
      form.reset();
      originalBtn.disabled = false;
      originalBtn.textContent = originalText;
      originalBtn.classList.add('bg-vault-green/20', 'hover:bg-vault-green/40', 'border', 'border-vault-green/50', 'text-white');
      originalBtn.classList.remove('bg-vault-green', 'text-slate-900');
    }, 3000);
    
    // Log the inquiry (for demonstration)
    console.log('Solicitud de consultoría personalizada:', {
      empresa: company,
      necesidades: needs,
      email: email,
      telefono: phone
    });
  }, 1000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
});

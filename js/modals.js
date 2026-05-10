/* ──────────────────────────────────────────────────
   MODALS & UI INTERACTIONS
   ────────────────────────────────────────────────── */

function openUploadModal() {
  document.getElementById('upload-modal').classList.add('open');
  document.getElementById('upload-progress').classList.add('hidden');
  document.getElementById('progress-bar').style.width = '0%';
  document.getElementById('progress-pct').textContent = '0%';
}

function closeUploadModal(e) {
  if (!e || e.target === document.getElementById('upload-modal')) {
    document.getElementById('upload-modal').classList.remove('open');
  }
}

let uploadRunning = false;
function simulateUpload() {
  if (uploadRunning) return;
  uploadRunning = true;
  const prog = document.getElementById('upload-progress');
  const bar  = document.getElementById('progress-bar');
  const pct  = document.getElementById('progress-pct');
  prog.classList.remove('hidden');
  
  let v = 0;
  const interval = setInterval(() => {
    v += Math.random() * 12 + 3;
    if (v >= 100) {
      v = 100;
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById('upload-modal').classList.remove('open');
        uploadRunning = false;
      }, 800);
    }
    bar.style.width = v + '%';
    pct.textContent = Math.floor(v) + '%';
  }, 180);
}

function showContactSuccess() {
  document.getElementById('contact-modal').classList.add('open');
}

function openContactModal() {
  document.getElementById('contact-modal').classList.add('open');
}

function closeContactModal(e) {
  if (!e || e.target === document.getElementById('contact-modal')) {
    document.getElementById('contact-modal').classList.remove('open');
  }
}

function togglePwd() {
  const inp = document.getElementById('pwd-input');
  if (inp) {
    inp.type = inp.type === 'password' ? 'text' : 'password';
  }
}

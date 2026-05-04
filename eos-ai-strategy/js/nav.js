// ═══════════════════════════════════════
// EOS × AI STRATEGY — NAVIGATION
// ═══════════════════════════════════════

const TOTAL_SLIDES = 7;
let currentSlide = 1;

document.addEventListener('DOMContentLoaded', () => {
  buildDots();
  updateNav();
});

function buildDots() {
  const container = document.getElementById('navDots');
  if (!container) return;
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const dot = document.createElement('button');
    dot.className = 'nav-dot' + (i === 1 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dot.setAttribute('aria-label', `Slide ${i}`);
    container.appendChild(dot);
  }
}

function goTo(n) {
  if (n < 1 || n > TOTAL_SLIDES) return;
  const prev = document.getElementById('s' + currentSlide);
  if (prev) prev.classList.remove('active');
  currentSlide = n;
  const next = document.getElementById('s' + currentSlide);
  if (next) next.classList.add('active');
  updateNav();
}

function nextSlide() { goTo(currentSlide + 1); }
function prevSlide() { goTo(currentSlide - 1); }

function updateNav() {
  // Dots
  document.querySelectorAll('.nav-dot').forEach((d, i) => {
    d.classList.toggle('active', i + 1 === currentSlide);
  });

  // Count
  const count = document.getElementById('slideCount');
  if (count) {
    count.textContent = String(currentSlide).padStart(2, '0') + ' / 0' + TOTAL_SLIDES;
  }

  // Buttons
  const prev = document.getElementById('prevBtn');
  const next = document.getElementById('nextBtn');
  if (prev) prev.disabled = currentSlide === 1;
  if (next) next.disabled = currentSlide === TOTAL_SLIDES;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
});

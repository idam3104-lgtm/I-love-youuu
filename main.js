/* ═══════════════════════════════════════════
   LOVE LETTER — main.js
   ═══════════════════════════════════════════ */

/* ── Stars ── */
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.cssText = `
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    width:${Math.random()*2.5+0.5}px;
    height:${Math.random()*2.5+0.5}px;
    animation-delay:${Math.random()*5}s;
    animation-duration:${Math.random()*3+2}s;
  `;
  starsEl.appendChild(s);
}

/* ── Petals ── */
const petalsEl = document.getElementById('petals');
const petalSymbols = ['❤', '♡', '✿', '✦'];

function spawnPetal() {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = petalSymbols[Math.floor(Math.random()*petalSymbols.length)];
  const size = Math.random()*14+8;
  p.style.cssText = `
    left:${Math.random()*110-5}%;
    font-size:${size}px;
    opacity:${Math.random()*0.5+0.15};
    animation-duration:${Math.random()*8+6}s;
    animation-delay:${Math.random()*4}s;
  `;
  petalsEl.appendChild(p);
  p.addEventListener('animationend', () => p.remove());
}

for (let i = 0; i < 18; i++) setTimeout(spawnPetal, i * 600);
setInterval(spawnPetal, 1800);

/* ── Scroll reveal ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Button: หนีเมาส์ ── */
let noCount = 0;
function escapeBtn(btn) {
  noCount++;
  const maxX = window.innerWidth  - btn.offsetWidth  - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;
  btn.style.position = 'fixed';
  btn.style.left = Math.random() * maxX + 'px';
  btn.style.top  = Math.random() * maxY + 'px';
  if (noCount >= 4) {
    btn.style.opacity = '0';
    btn.style.pointerEvents = 'none';
  }
}

/* ── Button: ตอบรับ ── */
function handleYes() {
  const sec   = document.getElementById('responseSection');
  const inner = document.getElementById('responseInner');
  inner.innerHTML = `
    <div class="response-emoji">🌹</div>
    <h2 class="response-title">ขอบคุณที่รับฉันไว้ข้างๆ</h2>
    <p class="response-body">
      ฉันจะดูแลเธอให้ดีที่สุด ด้วยใจที่รักเธออย่างแท้จริง<br/>
      <em>ตั้งแต่วันนี้ไปจนถึงวันที่ไม่มีวันนับ</em>
    </p>
    <div class="response-hearts">♥ ♥ ♥</div>
  `;
  sec.classList.add('active');
  sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
  for (let i = 0; i < 30; i++) setTimeout(spawnPetal, i * 100);
}

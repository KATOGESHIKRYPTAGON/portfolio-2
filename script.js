/* ==================== GSAP + SCROLLTRIGGER ==================== */
gsap.registerPlugin(ScrollTrigger);

// ==================== LOADER ANIMATION ====================
window.addEventListener('load', () => {
  const tl = gsap.timeline();

  tl.to('.loader-name', {
    opacity: 1, y: 0, duration: 0.8,
    ease: 'power3.out'
  })
  .to('.loader-line', {
    width: '120px', duration: 0.6,
    ease: 'power2.inOut'
  }, '-=0.3')
  .to('.loader-tag', {
    opacity: 1, y: 0, duration: 0.5,
    ease: 'power3.out'
  }, '-=0.2')
  .to('#loader', {
    opacity: 0, visibility: 'hidden', duration: 0.6,
    ease: 'power2.inOut', delay: 0.5
  })
  .add(() => {
    document.getElementById('loader').classList.add('hidden');
    animateHero();
  });
});

// ==================== HERO ANIMATION ====================
function animateHero() {
  const heroTl = gsap.timeline();

  // Animate each word in the hero title
  heroTl.to('.hero-word', {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: 'power3.out'
  })
  .to('.hero-desc', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-buttons', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-stats', {
    opacity: 1, y: 0, duration: 0.7, ease: 'power3.out'
  }, '-=0.4')
  .to('.hero-image-wrapper', {
    opacity: 1, scale: 1, duration: 1, ease: 'power3.out'
  }, '-=0.8');

  // Hero image wrapper initial state
  gsap.set('.hero-image-wrapper', { opacity: 0, scale: 0.9 });

  // Start counters
  startCounters();

  // Floating badges
  gsap.to('.badge-top', {
    y: -15, duration: 3, ease: 'sine.inOut',
    yoyo: true, repeat: -1
  });
  gsap.to('.badge-bottom', {
    y: 15, duration: 4, ease: 'sine.inOut',
    yoyo: true, repeat: -1, delay: 1
  });
}

// ==================== SCROLL ANIMATIONS ====================

// --- About Section ---
gsap.from('.about-image-wrapper', {
  scrollTrigger: {
    trigger: '#about',
    start: 'top 80%',
  },
  x: -80, opacity: 0, duration: 1, ease: 'power3.out'
});

// Animate title words
gsap.utils.toArray('.section-title').forEach(title => {
  gsap.to(title.querySelectorAll('.title-word'), {
    scrollTrigger: {
      trigger: title,
      start: 'top 85%',
    },
    opacity: 1, y: 0, duration: 0.7,
    stagger: 0.06, ease: 'power3.out'
  });
});

// About body text
gsap.from('.about-p1', {
  scrollTrigger: { trigger: '.about-p1', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
});
gsap.from('.about-p2', {
  scrollTrigger: { trigger: '.about-p2', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15
});

// About cards stagger
gsap.from('.about-card', {
  scrollTrigger: { trigger: '.about-grid', start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.6,
  stagger: 0.1, ease: 'power3.out'
});

// --- Projects Section ---
gsap.to('.project-card-large', {
  scrollTrigger: { trigger: '.project-card-large', start: 'top 85%' },
  opacity: 1, scale: 1, duration: 1, ease: 'power3.out'
});
gsap.set('.project-card-large', { opacity: 0, scale: 0.95 });

gsap.utils.toArray('.project-card-small').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: { trigger: card, start: 'top 85%' },
    opacity: 1, y: 0, duration: 0.8,
    delay: i * 0.15, ease: 'power3.out'
  });
});

// --- Skills Section ---
gsap.utils.toArray('.skill-item').forEach((item, i) => {
  gsap.to(item, {
    scrollTrigger: { trigger: item, start: 'top 90%' },
    opacity: 1, x: 0, duration: 0.7,
    delay: i * 0.1, ease: 'power3.out',
    onComplete: () => {
      const fill = item.querySelector('.skill-fill');
      if (fill) {
        gsap.to(fill, { width: fill.dataset.width, duration: 1.2, ease: 'power3.out' });
      }
    }
  });
});

gsap.utils.toArray('.tech-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: { trigger: card, start: 'top 90%' },
    opacity: 1, scale: 1, duration: 0.5,
    delay: i * 0.08, ease: 'back.out(1.5)'
  });
});

// --- Testimonials ---
gsap.utils.toArray('.testimonial-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: { trigger: card, start: 'top 85%' },
    opacity: 1, y: 0, duration: 0.7,
    delay: i * 0.12, ease: 'power3.out'
  });
});

// --- Contact Section ---
gsap.utils.toArray('.contact-card').forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: { trigger: card, start: 'top 85%' },
    opacity: 1, x: 0, duration: 0.7,
    delay: i * 0.12, ease: 'power3.out'
  });
});

gsap.to('.contact-form', {
  scrollTrigger: { trigger: '.contact-form', start: 'top 85%' },
  opacity: 1, x: 0, duration: 0.8, ease: 'power3.out'
});

// --- Parallax on hero image ---
gsap.to('.hero-image-container', {
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  },
  y: 80, ease: 'none'
});

// ==================== COUNTERS ====================
function startCounters() {
  document.querySelectorAll('.counter-value').forEach(counter => {
    const target = parseInt(counter.dataset.target);
    gsap.to({ val: 0 }, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      onUpdate: function () {
        counter.textContent = Math.round(this.targets()[0].val);
      }
    });
  });
}

// ==================== CUSTOM CURSOR ====================
const cursorDot = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  gsap.to(cursorDot, { left: mouseX - 4, top: mouseY - 4, duration: 0.1, ease: 'power2.out' });
});

function animateCursorRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = ringX - 20 + 'px';
  cursorRing.style.top = ringY - 20 + 'px';
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

document.querySelectorAll('a, button, .tilt-card, input, textarea, select, .tech-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
});

// ==================== 3D TILT ====================
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / (rect.height / 2) * -5;
    const rotateY = (x - rect.width / 2) / (rect.width / 2) * 5;
    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
  });
});

// ==================== MAGNETIC BUTTONS ====================
document.querySelectorAll('.magnetic-btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.3, ease: 'power2.out' });
  });
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
  });
});

// ==================== NAVBAR ====================
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    gsap.to(navbar, {
      y: currentScroll > lastScroll ? -100 : 0,
      duration: 0.3, ease: 'power2.out'
    });
  } else {
    gsap.to(navbar, { y: 0, duration: 0.3 });
  }
  lastScroll = currentScroll;

  // Active link
  document.querySelectorAll('section[id]').forEach(section => {
    const top = section.offsetTop - 200;
    if (currentScroll >= top && currentScroll < top + section.offsetHeight) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      document.querySelectorAll(`.nav-link[href="#${section.id}"]`).forEach(l => l.classList.add('active'));
    }
  });
});

// ==================== MOBILE MENU ====================
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
});

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = "Message sent! I'll get back to you soon ✨";
  toast.classList.add('show');
  e.target.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ==================== PARTICLES ====================
for (let i = 0; i < 15; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.cssText = `
    width: ${Math.random() * 4 + 1}px;
    height: ${Math.random() * 4 + 1}px;
    background: rgba(244, 63, 94, ${Math.random() * 0.25 + 0.05});
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    animation-delay: ${Math.random() * 5}s;
    animation-duration: ${Math.random() * 8 + 5}s;
  `;
  document.body.appendChild(p);
}
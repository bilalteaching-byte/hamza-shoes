// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => io.observe(el));

  // Mobile nav
  const openBtn = document.getElementById('nav-open');
  const closeBtn = document.getElementById('nav-close');
  const mobileNav = document.getElementById('mobile-nav');
  if (openBtn && closeBtn && mobileNav) {
    openBtn.addEventListener('click', () => mobileNav.classList.remove('hidden'));
    closeBtn.addEventListener('click', () => mobileNav.classList.add('hidden'));
  }

  // Sticky nav shadow on scroll
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 12) nav.classList.add('shadow-lg'); else nav.classList.remove('shadow-lg');
    });
  }
});

// ---- Cart (uses sessionStorage; plain static site)
const HAMZA_WA_NUMBER = '923132933803';

function chamraGetCart() {
  try { return JSON.parse(sessionStorage.getItem('chamra_cart') || '[]'); }
  catch (e) { return []; }
}
function chamraSaveCart(cart) {
  sessionStorage.setItem('chamra_cart', JSON.stringify(cart));
  chamraUpdateCartBadge();
}
function chamraAddToCart(name, price, size) {
  const cart = chamraGetCart();
  cart.push({ name, price, size: size || 'Standard', qty: 1 });
  chamraSaveCart(cart);
  chamraToast(`${name} added to your bag`);
}
function chamraRemoveFromCart(index) {
  const cart = chamraGetCart();
  cart.splice(index, 1);
  chamraSaveCart(cart);
  if (typeof chamraRenderCheckout === 'function') chamraRenderCheckout();
}
function chamraUpdateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = chamraGetCart().length;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}
function chamraToast(msg) {
  let t = document.createElement('div');
  t.textContent = msg;
  t.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-espresso text-cream font-body text-sm px-5 py-3 rounded-full shadow-xl z-[100] transition-opacity duration-500';
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; }, 1800);
  setTimeout(() => t.remove(), 2300);
}
document.addEventListener('DOMContentLoaded', chamraUpdateCartBadge);

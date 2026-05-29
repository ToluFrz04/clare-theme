/* ============================================
   CLARÉ — Theme JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Sticky Header ----
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- Product Gallery Thumbnails ----
  const thumbs = document.querySelectorAll('.product-gallery-thumb');
  const mainImg = document.querySelector('.product-gallery-main img');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg) mainImg.src = thumb.querySelector('img').src;
    });
  });

  // ---- Product Option Selection ----
  const optionBtns = document.querySelectorAll('.product-option-btn');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.product-option-values');
      group.querySelectorAll('.product-option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // ---- Cart Quantity ----
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('.qty-input');
      let val = parseInt(input.value) || 1;
      if (btn.dataset.action === 'inc') val++;
      if (btn.dataset.action === 'dec' && val > 1) val--;
      input.value = val;
    });
  });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ---- Mobile Menu Toggle ----
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });
  }

});

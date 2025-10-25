// Simple layout helper script replaced the previous React layout component.
// This file provides two small behaviors used by the static pages:
// 1) Toggle the mobile menu
// 2) Mark the active navigation link based on the current page

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        // change icon to X
        mobileMenuButton.innerHTML = '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<svg id="menuIcon" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
      }
    });
  }

  // Highlight active nav link for desktop nav
  const navLinks = document.querySelectorAll('nav a, header nav a');
  if (navLinks && navLinks.length) {
    const path = location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach((a) => {
      try {
        const href = a.getAttribute('href');
        if (!href) return;
        const linkName = href.split('/').pop();
        if (linkName === path) {
          a.classList.remove('text-gray-600');
          a.classList.add('text-[var(--dark-purple)]');
        }
      } catch (e) {
        // ignore
      }
    });
  }
});
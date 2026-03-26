// Highlight the active nav link based on the current page
function setActiveNavLink(): void {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const linkPage = href.split('/').slice(-2, -1)[0];
      if (currentPath.includes(linkPage)) {
        link.classList.add('active');
      }
    }
  });
}

// Mobile menu toggle
function setupMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const navLinks = document.querySelector<HTMLUListElement>('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }
}

// Scroll-based fade-in animations
function setupScrollAnimations(): void {
  const elements = document.querySelectorAll<HTMLElement>('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  setupMobileMenu();
  setupScrollAnimations();
});

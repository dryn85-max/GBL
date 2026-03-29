document.addEventListener('DOMContentLoaded', () => {

  // --- Intersection Observer for scroll animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  // --- Navigation: scroll-based solid background ---
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');

  if (navbar && hero) {
    const navScrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        navbar.classList.toggle('scrolled', !entry.isIntersecting);
      });
    }, { threshold: 0.85 });
    navScrollObserver.observe(hero);
  }


  // --- Navigation: hamburger toggle ---
  const burger = document.getElementById('nav-burger');
  const overlay = document.getElementById('nav-overlay');

  if (burger && overlay) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    overlay.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        overlay.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }


  // --- Navigation: active section highlighting ---
  const sections = document.querySelectorAll('section[id], footer[id]');
  const allNavLinks = document.querySelectorAll('.nav-link');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        allNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(section => sectionObserver.observe(section));


  // --- Floating CTA — show after scrolling past hero ---
  const floatingCta = document.getElementById('floating-cta');
  const sendParcelSection = document.getElementById('send-parcel');

  if (hero && floatingCta) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        floatingCta.classList.toggle('visible', !entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    heroObserver.observe(hero);

    if (sendParcelSection) {
      const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            floatingCta.style.opacity = '0';
            floatingCta.style.pointerEvents = 'none';
          } else if (floatingCta.classList.contains('visible')) {
            floatingCta.style.opacity = '';
            floatingCta.style.pointerEvents = '';
          }
        });
      }, { threshold: 0.2 });
      formObserver.observe(sendParcelSection);
    }
  }


  // Delivery type switcher — no field hiding, both types use the same address fields

});

// Form submission handler
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Show confirmation
  const btn = form.querySelector('.form-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Request Submitted!';
  btn.style.background = 'var(--green-400)';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.disabled = false;
    form.reset();
  }, 3000);

  return false;
}

// Contact form → mailto handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.contactName.value.trim();
  const subject = this.contactSubject.value.trim();
  const message = this.contactMessage.value.trim();

  const body = 'Hi,\n\n' + message + '\n\nBest regards,\n' + name;
  const mailto = 'mailto:info@golf-bridge-logistics.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);

  window.location.href = mailto;

  // Visual feedback
  const btn = this.querySelector('.form-submit');
  const original = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Opening Email App...';
  btn.style.background = 'var(--green-400)';
  setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; }, 3000);
});

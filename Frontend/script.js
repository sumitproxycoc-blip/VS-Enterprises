// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.08 });
revealEls.forEach(el => io.observe(el));

// Contact form (client-only)
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email) {
    alert('Please provide name and email.');
    return;
  }
  const subject = encodeURIComponent('Contact from website — ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  const mailto = 'mailto:info@vs-enterprises.example?subject=' + subject + '&body=' + body;
  window.location.href = mailto;
  alert('Opening your mail client. If nothing opens, email us at info@vs-enterprises.example');
}

function copyContact() {
  const txt = 'VS Enterprises\ninfo@vs-enterprises.example\nHarbanshpur azamgharh 4A triple D society';
  navigator.clipboard?.writeText(txt).then(() =>
    alert('Contact details copied to clipboard.')
  );
}

document.querySelectorAll('nav a, a[href^="#"]').forEach(a => {
  a.addEventListener('click', (ev) => {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const el = document.querySelector(href);
    if (el) {
      ev.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

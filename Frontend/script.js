// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  }, {threshold: 0.08});
  revealEls.forEach(el=>io.observe(el));
} else {
  revealEls.forEach(el=>el.classList.add('visible'));
}

// Contact form (client-only)
function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email){ alert('Please provide name and email.'); return; }
  const subject = encodeURIComponent('Contact from website — ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  const mailto = 'mailto:info@vs-enterprises.example?subject=' + subject + '&body=' + body;
  window.location.href = mailto;
  alert('Opening your mail client. If nothing opens, email us at info@vs-enterprises.example');
}

function copyContact(){
  const txt = 'VS Enterprises\ninfo@vs-enterprises.example\nHarbanshpur, Azamgarh — 4A Triple D Society';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(()=> alert('Contact details copied to clipboard.'));
  } else {
    const ta = document.createElement('textarea');
    ta.value = txt; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); alert('Contact details copied to clipboard.'); } finally { document.body.removeChild(ta); }
  }
}

// Smooth scroll for internal links
Array.from(document.querySelectorAll('a[href^="#"]')).forEach(a=>{
  a.addEventListener('click', (ev)=>{
    const href = a.getAttribute('href');
    const el = document.querySelector(href);
    if(el){ ev.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
  });
});

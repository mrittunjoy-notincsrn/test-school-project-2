// Hamburger
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileNav').classList.toggle('open');
});

// Fake form submission
document.getElementById('sendBtn').addEventListener('click', () => {
  document.getElementById('successMsg').classList.add('show');
  setTimeout(() => document.getElementById('successMsg').classList.remove('show'), 5000);
});
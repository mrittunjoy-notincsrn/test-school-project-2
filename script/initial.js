
// ── SLIDER ──
let cur = 0;
const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const total = 3;
let auto;

function goTo(n) {
    cur = (n + total) % total;
    slides.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
}
document.getElementById('prev').onclick = () => { goTo(cur - 1); resetAuto(); };
document.getElementById('next').onclick = () => { goTo(cur + 1); resetAuto(); };
dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.i); resetAuto(); }));
function resetAuto() { clearInterval(auto); auto = setInterval(() => goTo(cur + 1), 5000); }
auto = setInterval(() => goTo(cur + 1), 5000);

// ── TABS ──
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// ── HAMBURGER ──
const ham = document.getElementById('hamburger');
const mNav = document.getElementById('mobileNav');
ham.addEventListener('click', () => mNav.classList.toggle('open'));
ham.addEventListener('click', () => ham.classList.toggle('open'));
const mDropdown = document.querySelectorAll('.menu-link');

mDropdown.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // This targets the very next element after the clicked link
        const dropdown = this.nextElementSibling;

        document.querySelectorAll('.mobiledropdown').forEach(d => {
            if (d !== dropdown) d.classList.remove('active');
        });

        if (dropdown && dropdown.classList.contains('mobiledropdown')) {
            dropdown.classList.toggle('active');
        }
        const arrow = this.querySelector('.linkarrow');
        if (arrow) {
            arrow.classList.toggle('active');
        }
    });
});
const navbar = document.getElementById('navbar');
const menuIconBtn = document.getElementById('menu-icon-btn');
const menuBtn   = document.getElementById('menu-btn');
const closeBtn  = document.getElementById('close-btn');
const mobileNav = document.getElementById('mobile-menu');
const iconPath  = document.getElementById('menu-icon');

function toggleDrawer() {
    mobileNav.classList.toggle('-translate-x-full');
    const isClosed = mobileNav.classList.contains('-translate-x-full');
    iconPath.setAttribute(
        'd',
        isClosed ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'
    );
}
menuBtn.addEventListener('click', toggleDrawer);
closeBtn.addEventListener('click', toggleDrawer);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'text-black', 'shadow-md');
        navbar.classList.remove('text-white');

        // Change menu icon color to black
        menuIconBtn.classList.remove('text-white');
        menuIconBtn.classList.add('text-black');

        document.querySelector('#navbar .desktop-menu').classList.add('text-black');
        document.querySelector('#navbar .desktop-menu').classList.remove('text-white');
    } else {
        navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
        navbar.classList.add('text-white');

        // Revert menu icon color to white
        menuIconBtn.classList.remove('text-black');
        menuIconBtn.classList.add('text-white');

        document.querySelector('#navbar .desktop-menu').classList.add('text-white');
        document.querySelector('#navbar .desktop-menu').classList.remove('text-black');
    }
});


new Swiper('.review-swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    spaceBetween: 24,
    slidesPerView: 1,
    breakpoints: {
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: false
});

document.getElementById('year').textContent = new Date().getFullYear();
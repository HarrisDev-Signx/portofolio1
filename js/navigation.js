// [UI-FIX] Membuka dan menutup menu navigasi pada layar kecil.
const menuButton = document.querySelector('.hamburger-button');
const menu = document.querySelector('#navMenu');
const openIcon = document.querySelector('.icon-open');
const closeIcon = document.querySelector('.icon-close');

if (menuButton && menu && openIcon && closeIcon) {
    menuButton.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        openIcon.style.display = isOpen ? 'none' : 'inline-block';
        closeIcon.style.display = isOpen ? 'inline-block' : 'none';
    });
}

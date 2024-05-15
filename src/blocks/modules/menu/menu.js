window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      menuLink = document.querySelectorAll('.menu__link');
      
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});
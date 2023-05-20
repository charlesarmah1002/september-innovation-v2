let menuBtn = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    // window.alert('this is an alert');
    menu.classList.toggle('menu-active');
    menuBtn.classList.toggle('toggle-active');
})
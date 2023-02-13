var topCircle = document.getElementById('dropdown-mobile-circle1');
var bottomCircle = document.getElementById('dropdown-mobile-circle2');
var mainBackground = document.querySelector('#dropdown-mobile');
var btnDropdown = document.getElementById('dropdown-icon');
var tmpHeight = 100;
var tmpWidth = 100;

const maxWidthHeight = 1500;
const minWidthHeight = 0;
const speed = 1 / 1000;


btnDropdown.addEventListener('click', () => {

    var menu = document.querySelector('.menu');

    if ($(menu).hasClass('collapse')) {
        menu.classList.remove('collapse');
    }

})

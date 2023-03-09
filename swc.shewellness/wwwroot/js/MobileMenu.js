var lines = document.querySelectorAll('.lines');
var t = document.getElementById("lines-1");
var b = document.getElementById("lines-2");

var dropdown = document.getElementById("dropdown-button");
var menu = document.getElementById('dropdown-mobile');
var nav = document.getElementById('navigation-header');


dropdown.addEventListener('click', () => {    
    if ($(menu).hasClass('collapse')) {
        nav.style.backgroundColor = '#8F6152';
        menu.classList.remove('collapse');
        menu.classList.add('fade-in')
        menu.classList.add('d-flex');
    }
    else {
        menu.classList.add('collapse');
        menu.classList.remove('d-flex');
    }
})

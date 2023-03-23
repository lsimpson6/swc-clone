var lines = document.querySelectorAll('.lines');
var t = document.getElementById("line-1");
var b = document.getElementById("line-2");

var dropdown = document.getElementById("dropdown-button");
var menu = document.getElementById('dropdown-mobile');
var nav = document.getElementById('navigation-header');


dropdown.addEventListener('click', () => {    
    if ($(menu).hasClass('collapse')) {
        menu.classList.remove('collapse');
        menu.classList.add('fade-in')
        menu.classList.add('d-flex');
    }
    else {
        menu.classList.add('collapse');
        menu.classList.remove('d-flex');
    }
})

$(document).ready(function () {
    $(dropdown).click(function () {
        $(t).toggleClass('rotated');
        $(b).toggleClass('rotated-inverse');
    });
});
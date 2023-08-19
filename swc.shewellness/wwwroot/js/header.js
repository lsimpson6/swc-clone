var lines = document.querySelectorAll('.lines');
var t = document.getElementById("line-1");
var b = document.getElementById("line-2");
var dropdown = document.querySelector("#dropdown-button");
var menu = document.getElementById('dropdown-mobile');
var nav = document.querySelector('#navigation-header');


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

    $(t).toggleClass('rotated');
    $(b).toggleClass('rotated-inverse');
})


$(function () {

    function addHeaderColor() {
        var tmpLoc = window.location.pathname;
        //if ((tmpLoc == " " || tmpLoc == "/" || tmpLoc == "Home")) {
        if (window.scrollY > 30) {
            if ($(nav).hasClass('color-scheme-none')) {
                nav.classList.add('color-scheme-white');
                nav.classList.remove('color-scheme-none');
            }
        }
        else {
            if ($(nav).hasClass('color-scheme-white')) {
                nav.classList.remove('color-scheme-white');
                nav.classList.add('color-scheme-none');
            }
        }
        //}
    }

    window.addEventListener('scroll', addHeaderColor);


})();
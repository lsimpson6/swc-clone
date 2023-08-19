(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.animate');

        if (window.innerWidth < 768) {
            windowHeight = window.innerHeight;
        }
        else {
            windowHeight = window.innerHeight / 1.5;
        }
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if ((positionFromTop - windowHeight)*2 <= 0) {
                element.classList.add('fade-up');
                element.classList.remove('animate');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();

var screenHeight = (window.innerHeight)/3;

(function () {

    let dwbs = document.getElementById('down-arrow');
    var mainHead = $('#welcome-image').outerHeight();
    let header = $('#navigation-header').outerHeight();

    dwbs.addEventListener('click', () => {
        $('html, body').animate({ scrollTop: mainHead - header }, "ease");
    })

})();

(function () {

    var nav = document.querySelector('#navigation-header');

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
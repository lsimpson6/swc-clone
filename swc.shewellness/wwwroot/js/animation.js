(function() {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.animate');

        if (window.innerWidth < 768) {
            windowHeight = window.innerHeight;
        }
        else {
            windowHeight = window.innerHeight / 2;
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

    var nav = document.querySelector('#navigation-header');
    var cta = document.querySelector('#head-cta');

    function addHeaderColor() {
        var tmpLoc = window.location.pathname;
        if ((tmpLoc == " " || tmpLoc == "/" || tmpLoc == "Home")) {
            if (window.scrollY > 30) {
                nav.classList.add('color-scheme-tan');
                nav.classList.remove('color-scheme-none');
                cta.classList.add('cta-button');
                cta.classList.remove('cta-button-w');
            }
            else {
                nav.classList.remove('color-scheme-tan');
                nav.classList.add('color-scheme-none');
                cta.classList.remove('cta-button');
                cta.classList.add('cta-button-w');
            }
        }
    }

    window.addEventListener('scroll', addHeaderColor);


})();
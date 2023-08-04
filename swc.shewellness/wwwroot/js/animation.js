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

    var nav = document.querySelector('#navigation-header');
    var cta = document.querySelector('#head-cta');

    function addHeaderColor() {
        var tmpLoc = window.location.pathname;
        //if ((tmpLoc == " " || tmpLoc == "/" || tmpLoc == "Home")) {
        if (window.scrollY > 30) {
            if ($(nav).hasClass('color-scheme-none')) {
                nav.classList.add('color-scheme-tan');
                nav.classList.remove('color-scheme-none');
                cta.classList.add('cta-button');
                cta.classList.remove('cta-button-w');
            }
        }
        else {
            if ($(nav).hasClass('color-scheme-tan')) {
                nav.classList.remove('color-scheme-tan');
                nav.classList.add('color-scheme-none');
                cta.classList.remove('cta-button');
                cta.classList.add('cta-button-w');
            }
        }
        //}
    }

    window.addEventListener('scroll', addHeaderColor);


})();

(function () {

    let dwbs = document.getElementById('down-arrow');
    var mainHead = $('#main-head').outerHeight();

    dwbs.addEventListener('click', () => {
        $('html, body').animate({ scrollTop: mainHead - 0 }, "ease");
    })


})();

(function () {

    var mouseGrid = document.querySelectorAll('.invisible-mouse-grid');
    var text = document.getElementById('overlay-text');

    mouseGrid.forEach(mg => mg.addEventListener('mouseover', () => {
        let data = mg.getAttribute('data-mouse-location');


        switch (data) {
            case "1":
                text.style.left = '53%';
                text.style.top = '46%';
                break;
            case "2":
                text.style.left = '55%';
                text.style.top = '46%';
                break;
            case "3":
                text.style.left = '57%';
                text.style.top = '46%';
                break;
            case "4":
                text.style.left = '53%';
                text.style.top = '48%';
                break;
            case "5":
                text.style.left = '55%';
                text.style.top = '48%';
                break;
            case "6":
                text.style.left = '57%';
                text.style.top = '48%';
                break;
            case "7":
                text.style.left = '53%';
                text.style.top = '50%';
                break;
            case "8":
                text.style.left = '55%';
                text.style.top = '50%';
                break;
            case "9":
                text.style.left = '57%';
                text.style.top = '50%';
                break;
        }

    }))

})();

(function () {
    //let text = document.getElementById('scroll-text');

    //window.addEventListener('scroll', () => {
    //    let s = scrollY
    //    text.style.left = `-${s / 10}%`;
    //})


})();
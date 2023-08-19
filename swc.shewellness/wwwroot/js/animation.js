(function() {
    var elements;
    var windowHeight;
    var images;

    function init() {
        elements = document.querySelectorAll('.animate');
        images = document.querySelectorAll('.animate-img');

        if (window.innerWidth < 768) {
            windowHeight = window.innerHeight;
        }
        else {
            windowHeight = window.innerHeight / 1.5;
        }
    }

    function checkPosition() {

        for (let x = 0; x < images.length; x++) {
            var image = images[x];
            let top = images[x].getBoundingClientRect().top;

            if ((top - windowHeight) * 2 <= 0) {
                image.classList.add('image-animate');
                image.classList.remove('animate-img');
            }
        }

        for (let i = 0; i < elements.length; i++) {
            var element = elements[i];
            let top = elements[i].getBoundingClientRect().top;

            if ((top - windowHeight)*2 <= 0) {
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
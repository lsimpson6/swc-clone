(function() {
  var elements;
  var windowHeight;

  function init() {
      elements = document.querySelectorAll('.animate');
    windowHeight = window.innerHeight/2;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

        if ((positionFromTop - windowHeight) <= 0) {
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

    var navColor = document.querySelector('#navigation-color');
    var navCTA = document.querySelector('#nav-cta-btn');


    function addHeaderColor() {
        var tmpLoc = window.location.pathname;
        if ((tmpLoc == " " || tmpLoc == "/" || tmpLoc == "Home")) {
            if (window.scrollY > 30) {
                navColor.classList.add('bg-red');
                navCTA.classList.remove('cta-button');
                navCTA.classList.add('cta-button-white');
            }
            else {
                navColor.classList.remove('bg-red');
                navCTA.classList.add('cta-button');
                navCTA.classList.remove('cta-button-white');
            }
        }
    }

    window.addEventListener('scroll', addHeaderColor);


})();
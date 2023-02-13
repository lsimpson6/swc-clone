(function() {
  var elements;
  var windowHeight;

  function init() {
      elements = document.querySelectorAll('.animate');
      loaction = document.querySelectorAll('.locations');
    windowHeight = window.innerHeight + 100;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in');
          element.classList.remove('opacity-0');
        }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

var screenHeight = (window.innerHeight)/3;

var welcomeHeight = $('#welcome').offset().top, $window = $(window);
var chk1 = document.getElementById('location-1');

var factFiction = $('#fact-vs-fiction').offset().top, $window = $(window);
var chk2 = document.getElementById('location-2');

var uniquePhys = $('#unique-physiology').offset().top, $window = $(window);
var chk3 = document.getElementById('location-3');

var process = $('#the-process').offset().top, $window = $(window);
var chk4 = document.getElementById('location-4');

var about = $('#about').offset().top, $window = $(window);
var chk5 = document.getElementById('location-5');

$window.scroll(function () {

    var navColor = document.querySelector('#navigation-color');
    var minusWelcome = document.getElementById('welcome').clientHeight;
    var navHeight = document.getElementById('navigation-header').clientHeight;

        if ($window.scrollTop() > ((welcomeHeight + minusWelcome) - navHeight)) {
            navColor.classList.add('bg-navy');
        }
        else {
            navColor.classList.remove('bg-navy');
        }

})

document.addEventListener('load', () => {

    var bodyPadding = document.getElementById('body-padding-top');
    var headerHeight = document.querySelector('#navigation-header').getBoundingClientRect();

    bodyPadding = headerHeight + 'px';
    alert(bodyPadding)
})

//    // welcome
//    if ($window.scrollTop() >= (welcomeHeight - screenHeight)) {
//        chk1.style.backgroundColor = '#8F6152';

//    }
//    else {
//        chk1.style.backgroundColor = 'transparent';
//    }

//    // why she wellness
//    if ($window.scrollTop() >= (factFiction - navHeight)) {
//        chk2.style.backgroundColor = '#8F6152';
//    }
//    else {
//        chk2.style.backgroundColor = 'transparent';
//    }

//    // about me - my story
//    if ($window.scrollTop() >= (uniquePhys - navHeight)) {
//        chk3.style.backgroundColor = '#8F6152';
//    }
//    else {
//        chk3.style.backgroundColor = 'transparent';
//    }

//    // end
//    if ($window.scrollTop() >= (process - navHeight)) {
//        chk4.style.backgroundColor = '#8F6152';
//    }
//    else {
//        chk4.style.backgroundColor = 'transparent';
//    }

//    // end
//    if ($window.scrollTop() >= (about - navHeight - (minusWelcome/2))) {
//        chk5.style.backgroundColor = '#8F6152';
//    }
//    else {
//        chk5.style.backgroundColor = 'transparent';
//    }

    
//})
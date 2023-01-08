// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var topLine = document.getElementById('top-line');
var bottomLine = document.getElementById('bottom-line');
var middleLine = document.getElementById('middle-line');

var t = 0;
var b = 0;

window.addEventListener('load', () => {
    var bodyPaddingTop = document.getElementById('body-padding-top');
    var headerHeight = document.getElementById('navigation-header').clientHeight;

    bodyPaddingTop.style.paddingTop = headerHeight + 'px';

    topLine.style.translate = t + 'deg';
    bottomLine.style.translate = b + 'deg';
})

document.querySelector('#dropdown-icon').addEventListener('click', () => {
    if ($('#dropdown-icon').hasClass('drp-close')){
        setInterval(() => {
            if (t < 46 && b > -46) {
                topLine.style.transform = 'rotate(' + t + 'deg)';
                bottomLine.style.transform = 'rotate(' + b + 'deg)';
                middleLine.classList.add('hidden');
            }
            t++;
            b--;
        }, 10)
        document.querySelector('#dropdown-icon').classList.remove('drp-close');
    }
    else {
        setInterval(() => {

            if (t > 20 && b < -20) {
                topLine.style.transform = 'rotate(' + t + 'deg)';
                bottomLine.style.transform = 'rotate(' + b + 'deg)';
                middleLine.classList.add('visible');
            }

            t--;
            b++;

        }, 10)
        document.querySelector('#dropdown-icon').classList.add('drp-close');
    }

})
var header = document.querySelector('.nav-header');
var firstElement = document.querySelector('.row-full'); 
var links = document.querySelectorAll('.nav-color-selectors');

var dropdownClick = document.getElementById('dropdown-button');

dropdownClick.addEventListener('click', () => {
    //if open
    if (!($('#dropdown-mobile').hasClass('collapse'))) {
        setNavTextColor(true);
    }
    else {
        setNavTextColor(false);
    }
});

window.addEventListener('load', () => {
    setNavTextColor();
})
window.addEventListener('scroll', ()=> {
    if (!($('#dropdown-mobile').hasClass('collapse'))) {
        setNavTextColor(true);
    }
    else {
        setNavTextColor(false);
    }
})

function setNavTextColor(navIsOpen) {

    if (navIsOpen) {
        if ($(header).hasClass('color-scheme-tan')) {
            linksColor(links, "text-black", "text-white", "#000000");
        }
        else {
            linksColor(links, "text-white", "text-black", "#ffffff");
        }
    }
    else {
        if ($(header).hasClass('color-scheme-none') && $(firstElement).hasClass('bg-image')) {
            linksColor(links, "text-white", "text-black", "#ffffff");
        }
        else if ($(header).hasClass('color-scheme-none') && !($(firstElement).hasClass('bg-image')) || $(header).hasClass('color-scheme-tan')) {
            linksColor(links, "text-black", "text-white", "#000000");
        }
    }
}
function linksColor(link, setColor, removeColor, navMenuColor) {
    for (let i = 0; i < link.length; i++) {
        link[i].classList.add(setColor);
        if ($(links[i]).hasClass(removeColor)) {
            links[i].classList.remove(removeColor);
        }
    }
    document.getElementById('line-1').style.backgroundColor = navMenuColor;
    document.getElementById('line-2').style.backgroundColor = navMenuColor;
}


(function () {

    var nav = document.querySelector('#navigation-header');

    function addHeaderColor() {
        var tmpLoc = window.location.pathname;
        //if ((tmpLoc == " " || tmpLoc == "/" || tmpLoc == "Home")) {
        if (window.scrollY > 30) {
            if ($(nav).hasClass('color-scheme-none')) {
                nav.classList.add('color-scheme-tan');
                nav.classList.remove('color-scheme-none');
            }
        }
        else {
            if ($(nav).hasClass('color-scheme-tan')) {
                nav.classList.remove('color-scheme-tan');
                nav.classList.add('color-scheme-none');
            }
        }
        //}
    }

    window.addEventListener('scroll', addHeaderColor);


})();
(function () {

    function addPadding() {
        var tmpLoc = window.location.pathname;
        var x;

        if (window.innerWidth <= 768) {
            x = 5
        }
        else {
            x = 40; 
        }

        if ((tmpLoc != " " || tmpLoc != "/" || tmpLoc != "Home")) {
            let p = document.getElementById('body-padding-top');
            let header = document.getElementById('navigation-header').clientHeight;

            p.style.paddingTop = header + x + 'px';
        }
    }
    window.addEventListener('load', addPadding);
    window.addEventListener('resize', addPadding);
})();
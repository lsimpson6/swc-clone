(function () {

    function addPadding() {
        var tmpLoc = window.location.pathname;
        var x;

        if ((tmpLoc != " " || tmpLoc != "/" || tmpLoc != "Home")) {
            let p = document.getElementById('body-padding-top');
            var header = document.getElementById('navigation-header').clientHeight;
            if (window.innerWidth < 768) {
                x = header;
            }
            else {
                x = header/2;
            }
            p.style.paddingTop = x + 'px';
        }
    }
    window.addEventListener('load', addPadding);
    window.addEventListener('resize', addPadding);
})();
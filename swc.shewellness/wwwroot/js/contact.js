window.addEventListener('load', () => {

    const formTitles = [];
    const placeHolders = [];
    const inputTitles = [];
    const errorMessage = [];
    const aspForMethods = [];

    document.getElementById('slider-contact').innerHtml += '<div class="width-50 text-center"><label class="" id="lbl-fn">First Name</label><input class="width-90" type="text" placeholder="Amber" /><warning class="width-90"><span class="br bg-red text-white px-3 mx-2">!</span>You must input a valid first name</warning></div ><div class="width-50 text-center"><label class="" id="lbl-ln">Last Name</label><input class="width-90" type="text" placeholder="Adkins" /><warning class="width-90"><span class="br bg-red text-white px-3 mx-2">!</span>You must input a valid last name</warning></div>'

})

document.querySelector('#txt-fn').addEventListener('input', () => {

    var inputText = document.querySelector('input').value;

    var firstName = document.getElementById('txt-fn').value;
    var warning = document.querySelector('.warning');
    var contianerLast = document.getElementById('cnt-ln');


    if (inputText.length <= 0) {
        warning.classList.remove('d-none');
    }
    else if (inputText.lengh > 0) {
        warning.classList.add('d-none');
        contianerLast.classList.remove('hidden');
    }

})
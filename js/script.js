var responsive = document.getElementsByClassName('responsive');
var responsiveNav = document.getElementsByClassName('responsive-nav'); // Access the first element with class 'responsive-nav'

function changeNav() {
    var responsiveNav = document.querySelector('.responsive-nav');
    if (responsiveNav) {
        var currentDisplay = window.getComputedStyle(responsiveNav).display;
        responsiveNav.style.display = (currentDisplay === 'none' || !currentDisplay) ? 'flex' : 'none';
    } else {
        console.error("Element with class 'responsive-nav' not found.");
    }
}

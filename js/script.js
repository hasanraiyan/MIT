// Access the first element with class 'responsive' and 'responsive-nav'
const responsive = document.querySelector('.responsive');
const responsiveNav = document.querySelector('.responsive-nav');

function changeNav() {
    if (responsiveNav) {
        // Use toggle to switch between flex and none display
        responsiveNav.style.display = responsiveNav.style.display === 'none' ? 'flex' : 'none';
    } else {
        console.error("Element with class 'responsive-nav' not found.");
    }
}

// Call the function on page load
changeNav();

// Add event listener to toggle display on window resize
window.addEventListener('resize', changeNav);

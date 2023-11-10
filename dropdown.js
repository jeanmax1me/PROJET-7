// Get references to the elements
const dropdown1 = document.querySelector('.dropdown1');
const visiblePart = document.querySelector('.dd1-visiblepart');
const dropdownArrow = document.getElementById('dropdownArrow');

// Add an event listener to the visible part
visiblePart.addEventListener('click', function () {
    dropdownArrow.classList.toggle('rotate180');
    dropdown1.classList.toggle('open');
});

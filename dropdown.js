// Get references to the elements
const dropdown1 = document.querySelector('.dropdown1');
const dropdown2 = document.querySelector('.dropdown2');
const dropdown3 = document.querySelector('.dropdown3');
const visiblePart1 = document.querySelector('.dd1-visiblepart');
const visiblePart2 = document.querySelector('.dd2-visiblepart');
const visiblePart3 = document.querySelector('.dd3-visiblepart');
const dropdownArrow1 = document.getElementById('dropdownArrow1');
const dropdownArrow2 = document.getElementById('dropdownArrow2');
const dropdownArrow3 = document.getElementById('dropdownArrow3');

// Add an event listener to the visible part
visiblePart1.addEventListener('click', function () {
    dropdownArrow1.classList.toggle('rotate180');
    dropdown1.classList.toggle('open');
});

visiblePart2.addEventListener('click', function () {
    dropdownArrow2.classList.toggle('rotate180');
    dropdown2.classList.toggle('open');
});

visiblePart3.addEventListener('click', function () {
    dropdownArrow3.classList.toggle('rotate180');
    dropdown3.classList.toggle('open');
});


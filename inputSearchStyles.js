const searchInput = document.getElementById("search-input");
const searchClose = document.getElementById("search-close");

searchInput.addEventListener("input", function () {
    // Double the width when the user starts typing
    searchInput.style.width = "800px";
    if (searchInput.value) {
        searchClose.style.display = "block";
    } else {
        searchClose.style.display = "none";
    }
});

// Add an event listener to the close button to reset the input
searchClose.addEventListener("click", function () {
    // Clear the input and hide the close button
    searchInput.value = "";
    searchClose.style.display = "none";
});

const searchInput = document.getElementById("search-input");
const searchClose = document.getElementById("search-close");

searchInput.addEventListener("input", function () {
    searchInput.style.width = "800px";
    if (searchInput.value) {
        searchClose.style.display = "block";
    } else {
        searchClose.style.display = "none";
    }
});

searchClose.addEventListener("click", function () {
    searchInput.value = "";
    searchClose.style.display = "none";
});

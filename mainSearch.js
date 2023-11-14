searchInput.addEventListener('input', function () {
    handleSearch();
});

function handleSearch() {
    const userInput = searchInput.value.toLowerCase();

    // Check if the user has entered at least 3 characters
    if (userInput.length >= 3) {
        // Filter recipes based on title, ingredients, and description
        const searchResults = recipes.filter(recipe => {
            const titleMatch = recipe.name.toLowerCase().includes(userInput);
            const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(userInput));
            const descriptionMatch = recipe.description.toLowerCase().includes(userInput);
            // Return true if there is a match in title, ingredients, or description
            return titleMatch || ingredientsMatch || descriptionMatch;
        });

        updateSearchResults(searchResults);
        populateCards(searchResults);
    } else {
        // If less than 3 characters, clear previous results
        clearPreviousResults();
    }
}

function updateSearchResults(results) {
    console.log('Updating Search Results:', results);
    clearPreviousResults();
    renderSearchResults(results);
}

function clearPreviousResults() {
    console.log('Clearing Previous Results');
    // Implement logic to clear previous search results from the UI
}

function renderSearchResults(results) {
    console.log('Rendering Search Results:', results);
    // Implement logic to render the updated search results on the UI
    // For example, create and display new recipe cards based on the filtered results
}

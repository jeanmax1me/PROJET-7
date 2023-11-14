

searchInput.addEventListener('input', function () {
    handleSearch();
});

function handleSearch() {
    const userInput = searchInput.value.toLowerCase();

    // Check if the user has entered at least 3 characters
    if (userInput.length >= 3) {
        // Filter recipes based on title, ingredients, and description
        results = recipes.filter(recipe => {
            const titleMatch = recipe.name.toLowerCase().includes(userInput);
            const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(userInput));
            const descriptionMatch = recipe.description.toLowerCase().includes(userInput);
            // Return true if there is a match in title, ingredients, or description
            return titleMatch || ingredientsMatch || descriptionMatch;
        });
        updateSearchResults(results);  
        populateCards(results);
    } else {
        // If less than 3 characters, clear previous results
        resetRecipes();
    }
}

function updateSearchResults(results) {
    updateDropdownOptions(1, getUniqueIngredients(results), 'ingredient');
    updateDropdownOptions(2, getUniqueAppliances(results), 'appliance');
    updateDropdownOptions(3, getUniqueUstensils(results), 'ustensil');
}

function resetRecipes() {
    // Implement logic to clear previous search results from the UI
    populateCards(recipes);
    updateRecipeCount(); 
}

function updateDropdownOptions(dropdownNumber, options, property) {
    const dropdownId = `dd${dropdownNumber}-list`;
    const dropdown = document.getElementById(dropdownId);

    if (!dropdown) {
        console.error(`Dropdown with ID ${dropdownId} not found.`);
        return;
    }

    dropdown.innerHTML = '';

    options.forEach(option => {
        const optionElement = document.createElement('p');
        
        if (typeof option === 'string') {
            optionElement.textContent = option;
        } else if (typeof option === 'object' && property in option) {
            optionElement.textContent = option[property];
        } else {
            console.error(`Invalid option format: ${option}`);
            return;
        }

        optionElement.onclick = function () {
            selectItem(this);
        };

        dropdown.appendChild(optionElement);
    });
}
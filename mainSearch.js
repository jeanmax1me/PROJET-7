

searchInput.addEventListener('input', function () {
    handleSearch();
});

function handleSearch() {
    const userInput = searchInput.value.toLowerCase();

    // Check if the user has entered at least 3 characters
    if (userInput.length >= 3) {
        selectedFilters = [];
        // Filter recipes based on title, ingredients, and description
        results = recipes.filter(recipe => {
            const titleMatch = recipe.name.toLowerCase().includes(userInput);
            const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(userInput));
            const descriptionMatch = recipe.description.toLowerCase().includes(userInput);
            // Check for matches based on selected filters
            return titleMatch || ingredientsMatch || descriptionMatch;
        });
        // Log the filtered results
        updateSearchResults(results);
        populateCards(results);
    } else {
        // If less than 3 characters, clear previous results
        resetRecipes();
    }
}

function searchByFilters(selectedFilters) {
    results = recipes.filter(recipe => {
        const ingredientMatch = selectedFilters.every(filter => {
            return recipe.ingredients.some(ingredient => {
                const lowerCaseIngredient = ingredient.ingredient.toLowerCase();
                const lowerCaseFilter = filter.toLowerCase();
                const includesFilter = lowerCaseIngredient.includes(lowerCaseFilter);
                return includesFilter;
            });
        });
        const applianceMatch = selectedFilters.some(filter =>
            recipe.appliance.toLowerCase().includes(filter.toLowerCase())
        );
        const ustensilMatch = recipe.ustensils.some(ustensil =>
            selectedFilters.some(filter =>
                ustensil.toLowerCase().includes(filter.toLowerCase())
            )
        );
        return ingredientMatch || applianceMatch || ustensilMatch;
    });
    updateSearchResults(results);
    populateCards(results);
    updateSelectedVisuals();
    console.log("Hello visuals");
}



function updateSearchResults(results) {
    const uniqueIngredients = getUniqueIngredients(results);
    const uniqueAppliances = getUniqueAppliances(results);
    const uniqueUstensils = getUniqueUstensils(results);

    updateDropdownOptions(1, uniqueIngredients, 'ingredient');
    updateDropdownOptions(2, uniqueAppliances, 'appliance');
    updateDropdownOptions(3, uniqueUstensils, 'ustensil');
    // Usage in updateSearchResults function
    const containers = [dd1ListContainer, dd2ListContainer, dd3ListContainer];

    selectedFilters.forEach(filter => {
        const isInIngredients = uniqueIngredients.includes(filter);
        const isInAppliances = uniqueAppliances.includes(filter);
        const isInUstensils = uniqueUstensils.includes(filter);
        if (isInIngredients || isInAppliances || isInUstensils) {
            const dropdownElement = findDropdownElementByText(filter, containers);
            if (dropdownElement) {
                updateSelectedItemLayout(dropdownElement);
            }
        }
    });
}

function findDropdownElementByText(text, containers) {
    for (const container of containers) {
        const allDropdownElements = container.querySelectorAll('p');

        for (const element of allDropdownElements) {
            if (element.textContent.trim().toLowerCase() === text.trim().toLowerCase()) {
                return element;
            }
        }
    }
    return null;
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
            optionElement.textContent = option.toLowerCase(); // Convert to lowercase
        } else if (typeof option === 'object' && property in option) {
            optionElement.textContent = option[property].toLowerCase(); // Convert to lowercase
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



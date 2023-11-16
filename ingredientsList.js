
// Collect all ingredients from all recipes
const allIngredients = recipes.reduce((ingredients, recipe) => {
  recipe.ingredients.forEach(ingredient => {
      // Check if the ingredient is not already in the array
      if (!ingredients.some(i => i.ingredient === ingredient.ingredient)) {
          ingredients.push(ingredient);
      }
  });
  return ingredients;
}, []);

function getUniqueIngredients(results) {
    const uniqueIngredients = results.reduce((ingredients, recipe) => {
        recipe.ingredients.forEach(ingredient => {
            const existingIngredient = ingredients.find(i => i.toLowerCase() === ingredient.ingredient.toLowerCase());
            if (!existingIngredient) {
                ingredients.push(ingredient.ingredient);
            }
        });
        return ingredients;
    }, []);

    console.log("Unique Ingredients:", uniqueIngredients);

    return uniqueIngredients;
}

  

// Get a reference to the container div
const dd1ListContainer = document.querySelector('.dd1-list');
const selectedContainer = document.getElementById('selectedContainer');

// Clear existing content
dd1ListContainer.innerHTML = '';

// Check if there are selected items or if results are empty
if (selectedContainer.children.length === 0 && results.length === 0) {
  // If no selected items and no results, display all ingredients
  allIngredients.forEach(ingredient => {
      const pElement = document.createElement('p');
      pElement.textContent = ingredient.ingredient;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd1ListContainer.appendChild(pElement);
  });
} else {
  // Get unique ingredients based on the filtered recipes
  const uniqueIngredients = getUniqueIngredients(results);

  // Iterate over the unique ingredients array
  uniqueIngredients.forEach(ingredient => {
      const pElement = document.createElement('p');
      pElement.textContent = ingredient.ingredient;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd1ListContainer.appendChild(pElement);
  });
}

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



// Get a reference to the container div
const dd1ListContainer = document.querySelector('.dd1-list');

// Iterate over the ingredients array
allIngredients.forEach(ingredient => {
  // Create a <p> element
  const pElement = document.createElement('p');

  // Set the text content of the <p> to the ingredient name
  pElement.textContent = ingredient.ingredient;
  // Assign the selectItem function to the onclick property
  pElement.onclick = function () {
    selectItem(this);
  };
  // Append the <p> to the container div
  dd1ListContainer.appendChild(pElement);
});
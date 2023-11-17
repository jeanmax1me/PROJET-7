// Collect all appliances from all recipes
const allAppliances = recipes.reduce((appliances, recipe) => {
  if (!appliances.includes(recipe.appliance.toLowerCase())) {
      appliances.push(recipe.appliance.toLowerCase());
  }
  return appliances;
}, []);

// Get unique appliances based on the filtered recipes
function getUniqueAppliances(results) {
  const uniqueAppliances = results.reduce((appliances, recipe) => {
    if (!appliances.includes(recipe.appliance.toLowerCase())) {
      appliances.push(recipe.appliance.toLowerCase());
    }
    return appliances;
  }, []);
  return uniqueAppliances;
}

// Get a reference to the container div
const dd2ListContainer = document.querySelector('.dd2-list'); // Update the selector
// Clear existing content
dd2ListContainer.innerHTML = '';

// Check if there are selected items or if results are empty
if (selectedContainer.children.length === 0 && results.length === 0) {
  // If no selected items and no results, display all appliances
  allAppliances.forEach(appliance => {
      const pElement = document.createElement('p');
      pElement.textContent = appliance;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd2ListContainer.appendChild(pElement);
  });
} else {
  // Get unique appliances based on the filtered recipes
  const uniqueAppliances = getUniqueAppliances(results);
  // Iterate over the unique appliances array
  uniqueAppliances.forEach(appliance => {
      const pElement = document.createElement('p');
      pElement.textContent = appliance;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd2ListContainer.appendChild(pElement);
  });
}

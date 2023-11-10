const allAppliances = recipes.reduce((appliances, recipe) => {
    if (!appliances.includes(recipe.appliance)) {
        appliances.push(recipe.appliance);
    }
    return appliances;
}, []);

console.log(allAppliances);


// Get a reference to the container div
const dd2ListContainer = document.querySelector('.dd2-list');

// Iterate over the ingredients array
allAppliances.forEach(appliance => {
  // Create a <p> element
  const pElement = document.createElement('p');

  // Set the text content of the <p> to the ingredient name
  pElement.textContent = appliance;

  // Append the <p> to the container div
  dd2ListContainer.appendChild(pElement);
});
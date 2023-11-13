const allUstensils = recipes.reduce((ustensils, recipe) => {
    recipe.ustensils.forEach(ustensil => {
        if (!ustensils.includes(ustensil)) {
            ustensils.push(ustensil);
        }
    });
    return ustensils;
}, []);



// Get a reference to the container div
const dd3ListContainer = document.querySelector('.dd3-list');

// Iterate over the ingredients array
allUstensils.forEach(ustensil => {
  // Create a <p> element
  const pElement = document.createElement('p');

  // Set the text content of the <p> to the ingredient name
  pElement.textContent = ustensil;
  // Assign the selectItem function to the onclick property
  pElement.onclick = function () {
    selectItem(this);
  };
  // Append the <p> to the container div
  dd3ListContainer.appendChild(pElement);
});
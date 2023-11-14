
// Collect all utensils from all recipes
const allUstensils = recipes.reduce((ustensils, recipe) => {
  recipe.ustensils.forEach(ustensil => {
      if (!ustensils.includes(ustensil)) {
          ustensils.push(ustensil);
      }
  });
  return ustensils;
}, []);

function getUniqueUstensils(results) {
  const uniqueUstensils = results.reduce((ustensils, recipe) => {
      recipe.ustensils.forEach(ustensil => {
          if (!ustensils.includes(ustensil)) {
              ustensils.push(ustensil);
          }
      });
      return ustensils;
  }, []);
 // console.log(uniqueUstensils);
  return uniqueUstensils;

}


// Get a reference to the container div
const dd3ListContainer = document.querySelector('.dd3-list'); // Update the selector

// Clear existing content
dd3ListContainer.innerHTML = '';

// Check if there are selected items or if results are empty
if (selectedContainer.children.length === 0 && results.length === 0) {
  // If no selected items and no results, display all ustensils
  allUstensils.forEach(ustensil => {
      const pElement = document.createElement('p');
      pElement.textContent = ustensil;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd3ListContainer.appendChild(pElement);
  });
} else {
  // Get unique ustensils based on the filtered recipes
  const uniqueUstensils = getUniqueUstensils(results);

  // Iterate over the unique ustensils array
  uniqueUstensils.forEach(ustensil => {
      const pElement = document.createElement('p');
      pElement.textContent = ustensil;
      pElement.onclick = function () {
          selectItem(this);
      };
      dd3ListContainer.appendChild(pElement);
  });
}

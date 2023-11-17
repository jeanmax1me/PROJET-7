// populateCards.js
document.addEventListener('DOMContentLoaded', function () {
    populateCards(recipes);
    updateRecipeCount(); 
});

function populateCards(results) {
    const recipesContainer = document.getElementById('cards-container');
    recipesContainer.innerHTML = ''; 
    if (results.length === 0) {
        const message = document.createElement('p');
        message.textContent = `Oups ! Aucune recette ne correspond à votre recherche "${searchInput.value}"`;
        recipesContainer.appendChild(message);
        updateRecipeCount();
    } else {
        results.forEach((recipe, index) => {
            const card = createRecipeCard(recipe, index);
            recipesContainer.appendChild(card);
        });
        updateRecipeCount();
    }
}

function createRecipeCard(recipe, index) {
    const card = document.createElement('div');
    card.classList.add('recipe-container');
    card.id = `recipe-container-${index + 1}`;

    card.innerHTML = `
        <article class="recipes-card">
            <img src="./images/Recettes/${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-time">${recipe.time}min</div>
            <div class="container-card-text">
                <h1>${recipe.name}</h1>
                <h2>Recette</h2>
                <div class="description-container">
                <div class="recipe-description">${recipe.description}</div>
                </div>
                <h2>Ingrédients</h2>
                <div class="recipe-ingredients">
                    ${recipe.ingredients.map((ingredient, i) => `
                        <div class="ingredient${i + 1}">
                            <p class="ingredient-name">${ingredient.ingredient}</p>
                            <p class="ingredient-quantity">${ingredient.quantity !== undefined ? ingredient.quantity : '-'} ${ingredient.unit !== undefined ? ingredient.unit : ''}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', function () {
    const recipeDescriptions = document.querySelectorAll('.recipe-description');
    const containerCardTexts = document.querySelectorAll('.container-card-text');

    recipeDescriptions.forEach((recipeDescription, index) => {
        recipeDescription.addEventListener('mouseover', () => {
            containerCardTexts[index].style.height = `100%`;
        });

        recipeDescription.addEventListener('mouseout', () => {
            containerCardTexts[index].style.height = '478px';
        });
    });
});

function updateRecipeCount() {
    const recipeCountElement = document.getElementById('number-recipes');
    const visibleRecipeCards = document.querySelectorAll('.recipe-container');
    const numberOfRecipes = visibleRecipeCards.length;
    let recipeText;

    if (numberOfRecipes === 0) {
        recipeText = 'Aucune recette';
    } else {
        recipeText = numberOfRecipes === 1 ? 'recette' : 'recettes';
    }
    recipeCountElement.textContent = numberOfRecipes === 0 ? recipeText : `${numberOfRecipes} ${recipeText}`;
}

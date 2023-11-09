// populateCards.js
document.addEventListener('DOMContentLoaded', function () {
    populateCards();
});

function populateCards() {
    const recipesContainer = document.getElementById('cards-container');

    recipes.forEach((recipe, index) => {
        // Create card elements and populate them with recipe data
        const card = createRecipeCard(recipe, index);

        // Append the card to the container
        recipesContainer.appendChild(card);
    });
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
                <div class="recipe-description">${recipe.description}</div>
                <h2>Ingrédients</h2>
                <div class="recipe-ingredients">
                    ${recipe.ingredients.map((ingredient, i) => `
                        <div class="ingredient${i + 1}">
                            <p class="ingredient-name">${ingredient.ingredient}</p>
                            <p class="ingredient-quantity">${ingredient.quantity} ${ingredient.unit || ''}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;

    return card;
}

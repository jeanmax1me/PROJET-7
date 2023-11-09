// Create a card element
const card = document.createElement('div');

// Set max width and height
card.style.maxWidth = '380px';
card.style.maxHeight = '731px';
card.style.Width = '100%';
card.style.Height = '100%';
card.style.backgroundColor = 'pink';
// Add some content or styling to the card
// For example:
card.innerHTML = '<p>This is a recipe card!</p>';
card.style.backgroundColor = '#F8F8F8';
card.style.border = '1px solid #DDD';

// Find the cards-container by its class
const cardsContainer = document.querySelector('.cards-container');

// Append the card to the cards-container
cardsContainer.appendChild(card);

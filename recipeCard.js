
const card = document.createElement('div');

// Set max width and height
card.style.width = '380px';
card.style.height = '731px';
card.style.backgroundColor = 'pink';
card.innerText = 'Test JS 123 456';
card.style.border = '2px solid red';

// Find the cards-container by its class
const cardsContainer = document.querySelector('.cards-container');

// Append the card to the cards-container
cardsContainer.appendChild(card);



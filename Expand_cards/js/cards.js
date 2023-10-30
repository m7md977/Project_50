import { cards } from './cardsdata.js';

const panelContainer = document.getElementById('panel');

cards.forEach((card, index) => {
    const panelDiv = document.createElement('div');
    panelDiv.classList.add('panel');
    panelDiv.style.backgroundImage = `url(${card.image})`;
    
    const title = document.createElement('h3');
    title.textContent = card.title;
    panelDiv.appendChild(title);

    // If it's the first card, add the active class to the panel div
    if (index === 0) {
        panelDiv.classList.add('active');
    }

    panelDiv.addEventListener('click', () => {
        removeActiveClasses();
        panelDiv.classList.add('active');
    });

    panelContainer.appendChild(panelDiv);
});

function removeActiveClasses() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}

import '../pages/index.css';
import { Card } from './components/Card';
import { Popup } from './components/Popup';
import { CONTENT } from './constants/mocks';
import * as CONFIG from './constants/configs.js';

const popup = new Popup(CONFIG.FOR_POPUP);

function createCard(cardData, config, openPopupCallback) {
  const cardNode = new Card(cardData, config, openPopupCallback);
  const cardWithData = cardNode.generateCard();
  return cardWithData;
}

const renderCards = ({ container, cards }) => {
  cards.forEach((card) => {
    const cardToRender = createCard(card, CONFIG.FOR_CARD, () => {
      popup.open();
    });
    container.append(cardToRender);
  });
};

CONTENT.forEach((sectionData) => {
  renderCards(sectionData);
});

popup.render();

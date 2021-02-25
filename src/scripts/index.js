import '../pages/index.css';
import { changeAttributesByPrivateLinks, setEventListeners } from '../utils/utils';
import { Card } from './components/Card';
import { CONTENT } from './constants/mocks';
import { CONFIG as config } from './constants/constants.js';

function createCard(cardData) {
  const cardNode = new Card(cardData, config);
  const cardWithData = cardNode.generateCard();
  return cardWithData;
}

const renderCards = ({ container, cards }) => {
  cards.forEach((card) => {
    const cardToRender = createCard(card);
    container.append(cardToRender);
  });
};

CONTENT.forEach((sectionData) => {
  renderCards(sectionData);
});

changeAttributesByPrivateLinks();
setEventListeners();

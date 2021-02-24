import '../pages/index.css';
import { changeAttributesByPrivateLinks, setEventListeners } from '../utils/utils';
import { Card } from './components/Card';
import { beginnerContainer, practicumContainer, testWorksContainer } from './constants/constants';
import { beginnerDataArr, practicumDataArr, testWorksDataArr } from './constants/mocks';
import { CONFIG as config } from './constants/constants.js';

function createCard(cardData) {
  const cardNode = new Card(cardData, config);
  const cardWithData = cardNode.generateCard();
  return cardWithData;
}

const renderCards = (container, cards) => {
  cards.forEach((card) => {
    const cardToRender = createCard(card);
    container.append(cardToRender);
  });
};
renderCards(beginnerContainer, beginnerDataArr);
renderCards(practicumContainer, practicumDataArr);
renderCards(testWorksContainer, testWorksDataArr);

changeAttributesByPrivateLinks();
setEventListeners();

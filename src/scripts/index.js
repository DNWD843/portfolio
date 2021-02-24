import '../pages/index.css';
import { changeAttributesByPrivateLinks, setEventListeners } from '../utils/utils';
import { Card } from './components/Card';
import { testWorksContainer } from './constants/constants';
import { cardDataArr as cards } from './constants/mocks';

function createCard(cardDataArr, container) {
  cardDataArr.forEach((cardData) => {
    const cardNode = new Card(cardData);
    const cardWithData = cardNode.generateCard();
    container.append(cardWithData);
  });
}

createCard(cards, testWorksContainer);

changeAttributesByPrivateLinks();
setEventListeners();

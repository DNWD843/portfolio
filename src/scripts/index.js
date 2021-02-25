/**
 * @module index
 * @description Модуль Index.<br/>Корневой компонент приложения.
 *   Отвечает за формирование и отрисовку контента, за управление функционалом приложения.
 * @since v.2.0.0
 */

import '../pages/index.css';
import { Card } from './components/Card';
import { Popup } from './components/Popup';
import { CONTENT } from './constants/mocks';
import * as CONFIG from './constants/configs.js';

const popup = new Popup(CONFIG.FOR_POPUP);

/**
 * @method createCard
 * @description Метод создает карточку, наполняет ее контентом, устанавливает
 *  слушатели событий на ее элементы.
 * @param {object} cardData - объект с контентом для заполнения карточки,
 * @param {object} config - объект с селекторами, необходимыми для поиска дом-элементов,
 * @param {function} openPopupCallback - коллбэк, открывает попап.
 * @public
 * @instance
 * @returns {Node}
 * @since v.2.0.0
 */
const createCard = (cardData, config, openPopupCallback) => {
  const cardNode = new Card(cardData, config, openPopupCallback);
  const cardWithData = cardNode.generateCard();
  return cardWithData;
};

/**
 * @method renderCards
 * @description Метод создает карточки и добавляет их на страницу.
 * @param {object} sectionData - объект с данными для создания и рендера карточек отдельной секции.
 * @instance
 * @public
 * @returns {void}
 * @since v.2.0.0
 */
const renderCards = ({ container, cards }) => {
  cards.forEach((card) => {
    const cardToRender = createCard(card, CONFIG.FOR_CARD, () => {
      popup.open();
    });
    container.append(cardToRender);
  });
};

/**
 * @method addContentToThePage
 * @description Метод формирует и добавляет весь контент на страницу.
 * @param {object} pageContent - объект с данными для создания и добавления на страницу контента
 *  всех секции страницы.
 * @instance
 * @public
 * @returns {void}
 * @since v.2.0.0
 */
const addContentToThePage = (pageContent) => {
  pageContent.forEach((sectionData) => {
    renderCards(sectionData);
  });
};

popup.render();
addContentToThePage(CONTENT);

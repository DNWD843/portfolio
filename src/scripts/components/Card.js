/**
 * @class Card
 * @description Класс карточки.<br/>Отвечает за наполнение шаблона карточки конентом,
 *   установку слушателей событий на ее элементы. Принимает в конструктор три аргумента:
 * @param {object} cardData - объект с контентом для заполнения карточки,
 * @param {object} config - объект с селекторами, необходимыми для поиска дом-элементов,
 * @param {Function} openPopupCallback - коллбэк, открывает попап с информацией для пользователя.
 * @returns {Node} возвращает ноду карточки, наполненную контентом
 * @since v.2.0.0
 */
export class Card {
  constructor(
    { title, subtitle, image, pathToProject, pathToCode, cardLinkId, overlayText },
    { cardTemplateSelector, cardSelector, ...cardSelectorsList },
    openPopupCallback,
  ) {
    this._title = title;
    this._subtitle = subtitle;
    this._image = image;
    this._pathToProject = pathToProject;
    this._overlayText = overlayText;
    this._pathToCode = pathToCode;
    this._cardLinkId = cardLinkId;
    this._titleSelector = cardSelectorsList.titleSelector;
    this._subtitleSelector = cardSelectorsList.subtitleSelector;
    this._imageSelector = cardSelectorsList.imageSelector;
    this._overlaySelector = cardSelectorsList.overlaySelector;
    this._linkSelector = cardSelectorsList.linkSelector;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardSelector = cardSelector;
    this._openPopupCallback = openPopupCallback;
  }
  /**
   * @method _getTemplate
   * @description находит и возвращает дом-ноду шаблона карточки.
   * @returns {Node}
   * @private
   * @since v.2.0.0
   */
  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);
    console.log(cardElement);
    return cardElement;
  };

  /**
   * @method _detectPrivateLink
   * @description обнаруживает приватную ссылку (id="private") и сохраняет в поле конструктора.
   * @private
   * @returns {void}
   * @since v.2.0.0
   */
  _detectPrivateLink = () => {
    if (this._cardLinkId === 'private') {
      this._privateLink = this._cardLink;
    } else this._privateLink = null;
  };

  /**
   * @method _setLinkAttributes
   * @description устанавливает аттрибуты ссылке на код проекта в зависимости от ее типа: публичная или приватная.
   * @private
   * @returns {void}
   * @since v.2.0.0
   */
  _setLinkAttributes = () => {
    if (this._privateLink) {
      this._privateLink.setAttribute('href', '#practicum');
      this._privateLink.removeAttribute('target');
    } else {
      this._cardLink.setAttribute('href', this._pathToCode);
    }
    this._cardLink.setAttribute('id', this._cardLinkId);
  };

  /**
   * @method _setEventListeners
   * @description устанавливает слушатели на элементы карточки
   * @private
   * @returns {void}
   * @since v.2.0.0
   */
  _setEventListeners = () => {
    this._privateLink &&
      this._privateLink.addEventListener('click', () => {
        this._openPopupCallback();
      });
  };

  /**
   * @method generateCard
   * @description Публичный метод. Получает шаблон карточки, наполняет его контентом и возвращает
   *  готовую для добавления на страницу ноду карточки.
   * @returns {Node}
   * @public
   * @memberOf Card
   * @instance
   * @since v.2.0.0
   */
  generateCard = () => {
    this._cardElement = this._getTemplate();
    this._cardTitle = this._cardElement.querySelector(this._titleSelector);
    this._cardSubtitle = this._cardElement.querySelector(this._subtitleSelector);
    this._cardImage = this._cardElement.querySelector(this._imageSelector);
    this._overlay = this._cardElement.querySelector(this._overlaySelector);
    this._cardLink = this._cardElement.querySelector(this._linkSelector);
    this._cardTitle.textContent = this._title;
    this._cardSubtitle.textContent = this._subtitle;
    this._cardImage.style.backgroundImage = `url(${this._image}`;
    this._overlay.setAttribute('href', this._pathToProject);
    this._overlay.textContent = this._overlayText;
    this._detectPrivateLink();
    this._setLinkAttributes();
    this._setEventListeners();
    return this._cardElement;
  };
}

/**
 * @class Popup
 * @description Класс попапа.<br/>
 * Отвечает за наполнение дом-ноды попапа контентом
 *  и управление его отображением.
 * @param {object} config - объект с селекторами и текстами
 * @since v.2.0.0
 */
export class Popup {
  constructor({
    closeButtonSelector,
    popupSelector,
    popupOpenedSelector,
    popupAppearingSelector,
    popupTitleSelector,
    popupTextSelector,
    popupGratitudeSelector,
    popupTitleText,
    popupText,
    popupGratitudeText,
  }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(closeButtonSelector);
    this._titleElement = this._popupElement.querySelector(popupTitleSelector);
    this._textElement = this._popupElement.querySelector(popupTextSelector);
    this._gratitudeTextElement = this._popupElement.querySelector(popupGratitudeSelector);
    this._popupOpenedSelector = popupOpenedSelector;
    this._popupAppearingSelector = popupAppearingSelector;
    this._gratitudeText = popupGratitudeText;
    this._titleText = popupTitleText;
    this._popupText = popupText;
  }

  /**
   * @method open
   * @description Публичный метод. Открывает попап.
   * @returns {void}
   * @public
   * @memberOf Popup
   * @instance
   * @since v.2.0.0
   */
  open = () => {
    this._popupElement.classList.add(this._popupOpenedSelector);
    setTimeout(() => {
      this._popupElement.classList.add(this._popupAppearingSelector);
    }, 10);
  };

  /**
   * @method close
   * @description Публичный метод. Закрывает попап.
   * @returns {void}
   * @public
   * @memberOf Popup
   * @instance
   * @since v.2.0.0
   */
  close = () => {
    this._popupElement.classList.remove(this._popupAppearingSelector);
    setTimeout(() => {
      this._popupElement.classList.remove(this._popupOpenedSelector);
    }, 360);
  };

  /**
   * @method _handleClickOnOverlay
   * @description Приватный метод. Закрывает попап при клике по оверлею.
   * @returns {void}
   * @private
   * @since v.2.0.0
   */
  _handleClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  /**
   * @method _setContent
   * @description Приватный метод. Вставляет текст в текстовые элементы попапа.
   * @returns {void}
   * @private
   * @since v.2.0.0
   */
  _setContent = () => {
    this._titleElement.textContent = this._titleText;
    this._textElement.textContent = this._popupText;
    this._gratitudeTextElement.textContent = this._gratitudeText;
  };

  /**
   * @method _setEventListeners
   * @description Приватный метод. Устанавливает слушатели событий на элементы попапа.
   * @returns {void}
   * @private
   * @since v.2.0.0
   */
  _setEventListeners = () => {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popupElement.addEventListener('click', (evt) => {
      this._handleClickOnOverlay(evt);
    });
  };

  /**
   * @method render
   * @description Публичный метод. Наполняет дом-ноду попапа текстовым контентом,
   *  устанавливает слушатели событий на элементы попапа.
   * @returns {void}
   * @public
   * @memberOf Popup
   * @instance
   * @since v.2.0.0
   */
  render = () => {
    this._setContent();
    this._setEventListeners();
  };
}

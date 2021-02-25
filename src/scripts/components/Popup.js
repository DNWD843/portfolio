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

  open = () => {
    this._popupElement.classList.add(this._popupOpenedSelector);
    setTimeout(() => {
      this._popupElement.classList.add(this._popupAppearingSelector);
    }, 10);
  };

  close = () => {
    this._popupElement.classList.remove(this._popupAppearingSelector);
    setTimeout(() => {
      this._popupElement.classList.remove(this._popupOpenedSelector);
    }, 360);
  };

  _handleClickOnOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  _setContent = () => {
    this._titleElement.textContent = this._titleText;
    this._textElement.textContent = this._popupText;
    this._gratitudeTextElement.textContent = this._gratitudeText;
  };

  _setEventListeners = () => {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popupElement.addEventListener('click', (evt) => {
      this._handleClickOnOverlay(evt);
    });
  };

  render = () => {
    this._setContent();
    this._setEventListeners();
  };
}

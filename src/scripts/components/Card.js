export class Card {
  constructor(
    { title, subtitle, image, pathToProject, pathToCode, cardLinkId, overlayText },
    { cardTemplateSelector, cardSelector, ...cardSelectorsList },
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
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(this._cardSelector)
      .cloneNode(true);
    console.log(cardElement);
    return cardElement;
  }

  generateCard() {
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
    this._cardLink.setAttribute('id', this._cardLinkId);
    this._cardLink.setAttribute('href', this._pathToCode);

    return this._cardElement;
  }
}

import { privateLinksList, popupElement, popupCloseButton } from '../constants/constants';

const openPopup = () => {
  popupElement.classList.add('popup_opened');
  setTimeout(() => {
    popupElement.classList.add('popup_appearing');
  }, 10);
};

const closePopup = () => {
  popupElement.classList.remove('popup_appearing');
  setTimeout(() => {
    popupElement.classList.remove('popup_opened');
  }, 360);
};

const handleClickOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
};

export const changeAttributesByPrivateLinks = () => {
  privateLinksList.forEach((privateLink) => {
    privateLink.setAttribute('href', '#practicum');
    privateLink.removeAttribute('target');
  });
};

export const setEventListeners = () => {
  privateLinksList.forEach((privateLink) => {
    privateLink.addEventListener('click', openPopup);
  });
  popupCloseButton.addEventListener('click', closePopup);
  popupElement.addEventListener('click', handleClickOnOverlay);
};

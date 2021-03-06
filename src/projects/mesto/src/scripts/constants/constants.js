/**
 * @namespace constants
 * @description Модуль Constants содержит все DOM-элементы, классы, селекторы, которые используются повторно,<br>
 * объекты конфигурации для классов, пакеты селекторов для классов.
 */

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editForm
 * @instance
 * @description форма редактирования профиля */
export const editForm = document.forms['edit-profile-form'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name nameInput
 * @instance
 * @description инпут для ввода имени пользователя в форме редактирования профиля*/
export const nameInput = editForm.elements['user-name-input'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name jobInput
 * @instance
 * @description инпут для ввода информации "О пользователе" в форме редактирования профиля*/
export const jobInput = editForm.elements['user-job-input'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editFormSubmitButton
 * @instance
 * @description кнопка submit формы редактирования профиля*/
export const editFormSubmitButton = editForm.querySelector('.button_type_submit');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name addForm
 * @instance
 * @description форма добавления карточки*/
export const addForm = document.forms['add-photo-form'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name placeTitleInput
 * @instance
 * @description инпут для ввода названия карточки в форме добавления карточки*/
export const placeTitleInput = addForm.elements['place-title-input'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name imageLinkInput
 * @instance
 * @description инпут для ввода ссылки на изображение в форме добавления карточки*/
export const imageLinkInput = addForm.elements['image-link-input'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name addFormSubmitButton
 * @instance
 * @description кнопка submit формы добавления карточки*/
export const addFormSubmitButton = addForm.querySelector('.button_type_submit');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name userProfile
 * @instance
 * @description блок отображения и редактирования профиля пользователя*/
export const userProfile = document.querySelector('.user-profile');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editButton
 * @instance
 * @description кнопка, открывающая попап редактирования профиля пользователя*/
export const editButton = userProfile.querySelector('.user-profile__edit-button');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name addButton
 * @instance
 * @description кнопка, открывающая попап добавления новой карточки*/
export const addButton = userProfile.querySelector('.user-profile__add-button');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editAvatarButton
 * @instance
 * @description кнопка, открывающая попап редактирования аватара*/
export const editAvatarButton = userProfile.querySelector('.user-profile__avatar-button');

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editAvatarForm
 * @instance
 * @description форма редактирования аватара пользователя*/
export const editAvatarForm = document.forms['edit-avatar-form'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name avatarInput
 * @instance
 * @description инпут для ввода новой ссылки на аватар пользователя в форме редактирования аватара пользователя*/
export const avatarInput = editAvatarForm.elements['avatar-link-input'];

/**
 * @memberof constants
 * @type {HTMLElement}
 * @constant
 * @name editAvatarFormSubmitButton
 * @instance
 * @description кнопка submit формы редактирования аватара пользователя
 */
export const editAvatarFormSubmitButton = editAvatarForm.querySelector('.button_type_submit');

/**
 * @memberof constants
 * @type {Object}
 * @constant
 * @name validationConfig
 * @instance
 * @description объект, содержащий данные для запуска валидации форм
 * @property {Object} config
 * @property {String} config.inputSelector - селектор инпута формы, общий для всех инпутов
 * @property {String} config.submitButtonSelector - селектор кнопки отправки формы (submit)
 * @property {String} config.inactiveButtonClass - css класс, устанавливающй неактивное состояние кнопки submit
 * @property {String} config.inputErrorClass - css класс, устанавливающй невалидное состояние инпута
 * @property {String} config.errorClass - css класс, устанавливающй активное состояние элемента, содержащего текст ошибки
 */
export const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'button_type_submit-inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name editPopupSelector
 * @instance
 * @description селектор попапа редактирования профиля пользователя*/
export const editPopupSelector = '.popup_type_edit-profile';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name addPopupSelector
 * @instance
 * @description селектор попапа добавления карточки*/
export const addPopupSelector = '.popup_type_add-photo';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name editAvatarPopupSelector
 * @instance
 * @description селектор попапа редактирования аватара пользователя*/
export const editAvatarPopupSelector = '.popup_type_edit-avatar';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name viewPopupSelector
 * @instance
 * @description селектор попапа открытия полноразмерного изображения*/
export const viewPopupSelector = '.popup_type_view-photo';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name confirmPopupSelector
 * @instance
 * @description селектор попапа подтверждения действия*/
export const confirmPopupSelector = '.popup_type_confirm';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name cardTemplateSelector
 * @instance
 * @description селектор шаблона элемента карточки*/
export const cardTemplateSelector = '#card-template';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name containerSelector
 * @instance
 * @description селектор контейнера, в который добавляются карточки*/
export const containerSelector = '.photo__cards';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name placeImageSelector
 * @instance
 * @description селектор элемента изображения в попапе открытия полноразмерного изображения*/
export const placeImageSelector = '.popup__place-image';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name placeNameSelector
 * @instance
 * @description селектор элемента названия изображения в попапе открытия полноразмерного изображения */
export const placeNameSelector = '.popup__place-name';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name userNameSelector
 * @instance
 * @description селектор элемента, содержащего имя пользователя в блоке профиля пользователя*/
export const userNameSelector = '.user-profile__user-name';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name userJobSelector
 * @instance
 * @description селектор элемента, содержащего информацию о пользователе в блоке профиля пользователя*/
export const userJobSelector = '.user-profile__user-job';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name userAvatarSelector
 * @instance
 * @description селектор аватара пользователя в блоке профиля пользователя*/
export const userAvatarSelector = '.user-profile__avatar-button';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name closeIconSelector
 * @instance
 * @description селектор иконки закрытия попапов*/
export const closeIconSelector = '.button_type_close';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name isOpenedModifier
 * @instance
 * @description модификатор, добавляемый в список css-классов попапа при его открытии.
 * Включает отображение попапа на экране*/
export const isOpenedModifier = 'popup_opened';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name confirmFormSelector
 * @instance
 * @description селектор формы в попапе подтверждения действия*/
export const confirmFormSelector = 'confirm-form';

/**
 * @memberof constants
 * @type {String}
 * @constant
 * @name formInputSelector
 * @instance
 * @description селектор инпутов формы, общий для всех инпутов всех форм*/
export const formInputSelector = '.form__input';

/**
 * @memberof constants
 * @type {Object}
 * @constant
 * @name myIdentifier
 * @instance
 * @description пустой объект, в который будут сохраняться персональные данные пользователя, вошедшего в свой аккаунт*/
export const myIdentifier = {};

/**
 * @memberof constants
 * @property {Object} cardElementsSelectors
 * @constant
 * @name cardElementsSelectors
 * @instance
 * @description объект<br>пакет селекторов, необходимых для создания карточки и работы с ней
 * @property {String} cardElementsSelectors.cardSelector селектор карточки
 * @property {String} cardElementsSelectors.deleteIconSelector селектор иконки удаления
 * @property {String} cardElementsSelectors.cardImageSelector селектор изображения карточки
 * @property {String} cardElementsSelectors.likeIconSelector - селектор иконки "лайк"
 * @property {String} cardElementsSelectors.cardTitleSelector - селектор элемента названия карточки
 * @property {String} cardElementsSelectors.isLikedModifier - модификатор, окрашивающий "лайк" в черный цвет, если "лайк" в активном состоянии
 * @property {String} cardElementsSelectors.likeCounterSelector - селектор счетчика "лайков"
 * @property {String} cardElementsSelectors.delButtonEnabledSelector - селектор активного состояния иконки удаления
 */

export const cardElementsSelectors = {
  cardSelector: '.card',
  deleteIconSelector: '.button_type_delete',
  cardImageSelector: '.card__image',
  likeIconSelector: '.button_type_like',
  cardTitleSelector: '.card__title',
  isLikedModifier: 'button_like-status_checked',
  likeCounterSelector: '.card__like-counter',
  delButtonEnabledSelector: 'card__delete-button_enabled',
};

export const headerLogo = document.querySelector('#headerLogo');

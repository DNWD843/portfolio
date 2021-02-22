/**@namespace index
 * @description Входной файл проекта<br>
 * Здесь собран весь императивный код проекта.
 */
import './../pages/index.css';
import {
  editForm,
  nameInput,
  jobInput,
  placeTitleInput,
  imageLinkInput,
  avatarInput,
  addForm,
  userProfile,
  editButton,
  addButton,
  editAvatarForm,
  editAvatarButton,
  validationConfig,
  editPopupSelector,
  addPopupSelector,
  editAvatarPopupSelector,
  viewPopupSelector,
  confirmPopupSelector,
  cardTemplateSelector,
  containerSelector,
  placeImageSelector,
  placeNameSelector,
  userNameSelector,
  userJobSelector,
  userAvatarSelector,
  closeIconSelector,
  isOpenedModifier,
  confirmFormSelector,
  cardElementsSelectors,
  formInputSelector,
  myIdentifier,
  editFormSubmitButton,
  editAvatarFormSubmitButton,
  addFormSubmitButton,
  headerLogo,
} from './constants/constants.js';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Section from './components/Section.js';
import Api from './components/Api.js';
import PopupConfirm from './components/PopupConfirm.js';
import headerLogoImage from '../images/headerLogo.svg';

headerLogo.setAttribute('src', headerLogoImage);

/**
 * @description Функция Preloader<br>
 * Показывает пользователю, что его запрос выполняется<br>
 * Изменяет надпись на кнопке сабмит на "Выполняется..."
 * @memberof index
 * @instance
 * @function
 * @name preloader
 * @param {HTMLElement} submitButton - кнопка submit в формы
 * @param {Boolean} isLoading - маркер состояния загрузки: true- загрузка происходит, false- загрузка не происходит
 */
function preloader(submitButton, isLoading) {
  if (isLoading) {
    submitButton.textContent = 'Сохранение...';
  } else {
    submitButton.textContent = submitButton.value;
  }
}

/**
 * @description Экземпляр класса Api<br>
 * API для обмена информацией с сервером
 * @constant
 * @name api
 * @memberof index
 * @instance
 * @see {@link Api}
 */
const api = new Api({
  URLs: {
    baseURL: 'https://mesto.nomoreparties.co/v1/cohort-14/',
    cardsURL: 'https://mesto.nomoreparties.co/v1/cohort-14/cards/',
    userURL: 'https://mesto.nomoreparties.co/v1/cohort-14/users/me',
    likesURL: 'https://mesto.nomoreparties.co/v1/cohort-14/cards/likes/',
    avatarURL: 'https://mesto.nomoreparties.co/v1/cohort-14/users/me/avatar',
  },
  headers: {
    authorization: '85abb6e6-ccb0-45c7-b6e8-4ffe1f5da546',
  },
  token: '85abb6e6-ccb0-45c7-b6e8-4ffe1f5da546',
});

/**
 * @description Экземпляр класса PopupConfirm<br>
 * Попап подтверждения действия
 * @constant
 * @name confirmPopup
 * @memberof index
 * @instance
 * @see {@link PopupConfirm}
 */
const confirmPopup = new PopupConfirm(
  confirmPopupSelector,
  closeIconSelector,
  isOpenedModifier,
  confirmFormSelector,
);

/**
 * @description Экземпляр класса UserInfo<br>
 * Даные о пользователе
 * @constant
 * @name userData
 * @memberof index
 * @instance
 * @see {@link UserInfo}
 */
const userData = new UserInfo(userProfile, userNameSelector, userJobSelector, userAvatarSelector);

/**
 * @description Экземпляр класса FormValidator<br>
 * Валидатор формы редактирования профиля
 * @constant
 * @name formEditValidator
 * @memberof index
 * @instance
 * @see {@link FormValidator}
 */
const formEditValidator = new FormValidator(validationConfig, editForm);

/**
 * @description Экземпляр класса FormValidator<br>
 * Валидатор формы добавления карточки
 * @constant
 * @name formAddValidator
 * @memberof index
 * @instance
 * @see {@link FormValidator}
 */
const formAddValidator = new FormValidator(validationConfig, addForm);

/**
 * @description Экземпляр класса FormValidator<br>
 * Валидатор формы редактирования аватара пользователя
 * @constant
 * @name formEditAvatarValidator
 * @memberof index
 * @instance
 * @see {@link FormValidator}
 */
const formEditAvatarValidator = new FormValidator(validationConfig, editAvatarForm);

/**
 * @description Экземпляр класса PopupWithImage<br>
 * Попап полноразмерного изображения карточки
 * @constant
 * @name viewPopup
 * @memberof index
 * @instance
 * @see {@link PopupWithImage}
 */
const viewPopup = new PopupWithImage(
  viewPopupSelector,
  closeIconSelector,
  isOpenedModifier,
  placeImageSelector,
  placeNameSelector,
);

/**
 * @description Экземпляр класса PopupWithForm<br>
 * Попап редактирования профиля пользователя
 * @constant
 * @name editPopup
 * @memberof index
 * @instance
 * @see {@link PopupWithForm}
 *
 */
const editPopup = new PopupWithForm(
  {
    formSubmitCallback:
      // Коллбэк сабмита формы.
      //Принимает на вход объект с данными, введеными пользователем в форме редактирования профиля
      (newData) => {
        //Вызываем Preloader
        preloader(editFormSubmitButton, true);
        //Отправляем запрос на редактирование профиля пользователя на сервер
        api
          .editProfile({ name: newData[nameInput.name], job: newData[jobInput.name] })
          //Запрос выполнен успешно
          .then((resData) => {
            //Деструктурируем полученные от сервера данные
            const { name, about: job } = resData;
            //Устанавливаем на страницу новые данные пользователя
            userData.setUserInfo({ name, job });
            //Закрываем попап
            editPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            //Останавливаем Preloader
            preloader(editFormSubmitButton, false);
          });
      },
    formElement: editForm,
    formInputSelector: formInputSelector,
  },
  editPopupSelector,
  closeIconSelector,
  isOpenedModifier,
);

/**
 * @description Экземпляр класса PopupWithForm<br>
 * Попап редактирования аватара пользователя
 * @constant
 * @name editAvatarPopup
 * @memberof index
 * @instance
 * @see {@link PopupWithForm}
 */
const editAvatarPopup = new PopupWithForm(
  {
    formSubmitCallback:
      //Коллбэк сабмита формы
      //Принимает аргументом новую ссылку на аватар пользователя, введеную в форме редактирования аватара
      (newAvatar) => {
        //Вызываем Preloader
        preloader(editAvatarFormSubmitButton, true);
        //Отправляем запрос на редактирование аватара на сервер
        api
          .editAvatar(newAvatar[avatarInput.name])
          //Запрос выполнен успешно
          .then((res) => {
            //Деструктурируем полученные от сервера данные
            const { name, about: job, avatar } = res;
            //Устанавливаем на страницу новые данные пользователя
            userData.setUserInfo({ name, job, avatar });
            //Закрываем попап
            editAvatarPopup.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            //Останавливаем Preloader
            preloader(editAvatarFormSubmitButton, false);
          });
      },
    formElement: editAvatarForm,
    formInputSelector: formInputSelector,
  },
  editAvatarPopupSelector,
  closeIconSelector,
  isOpenedModifier,
);

/**
 * @function createCard
 * @description Функция createCard<br>
 * Создает карточку, наполняет ее контентом, устанавливает слушатели на элементы карточки.<br>
 * Возвращает готовую для размещения на странице карточку
 * @memberof index
 * @instance
 * @name createCard
 * @param {Object} item - объект, содержащий данные карточки, полученные от сервера
 * @param {Object} item.owner - объект, содержащий данные о собственнике карточки
 * @param {Array} item.likes - массив, элементы массива - id пользователей, поставивших "лайк" карточке
 * @param {String} item.id - id карточки
 * @param {String} item.name - название карточки
 * @param {String} item.link - ссылка на изображение карточки
 * @returns {HTMLElement} - карточка, полностью готовая к размещению на странице
 */
function createCard(item) {
  /**
   * @description Переменная isOwner<br>
   * Введена для сортировки карточек<br>
   * По умолчанию имеет значение false<br>
   * Принимает значение true, если пользователь является владельцем карточки
   * @type {Boolean}
   * @name isOwner
   * @private
   */
  let isOwner = false;
  /**
   * @description Переменная likesQuantity<br>
   * Показывает количество "лайков" у карточки<br>
   * Принимает значение равное длине массива с "лайками"
   * @type {Number}
   * @name likesQuantity
   * @private
   */
  let likesQuantity = item.likesArray.length;
  /**
   * @description Определяем - является ли пользователь владельцем карточки<br>
   * Если id пользователя = id собственника карточки, переменной isOwner присваивается значение true
   * @private
   */
  if (myIdentifier.id === item.owner._id) {
    isOwner = true;
  }
  /**
   * @description Переменная isLiked<br>
   * Введена для определения была ли карточка "лайкнута" пользователем<br>
   * Если в массиве лайков карточки присутствует id пользователя, переменная принимает значение true
   * @name isLiked
   * @type {Boolean}
   * @private
   */
  let isLiked = item.likesArray.some((owner) => owner._id === myIdentifier.id);
  /**
   * @description Экземпляр класса Card<br>
   * DOM-нода карточки
   * @constant
   * @name cardNode
   * @type {HTMLElement}
   * @see {@link Card}
   * @memberof index
   * @instance
   *
   */
  const cardNode = new Card(
    {
      //Объект item, содержит информацию о карточке
      data: item,
      handleCardClick:
        // Коллбэк клика по изображению карточки. Открывает попап полноразмерного изображения карточки
        (CardData) => viewPopup.open(CardData),
      handleClickDeleteIcon:
        // Коллбэк клика по иконке удаления карточки. Открывает попап подтверждения действия (удаления)
        () => confirmPopup.open(),
      setSubmitAction:
        // Коллбэк, определяющий действие при сабмите формы подтверждения действия (удаления)
        (id, card) =>
          confirmPopup.setSubmitAction(() => {
            //Отправляем запрос на удаление карточки на сервер
            api
              .deleteCard(id)
              .then((res) => {
                // Удаляем карточку
                card.remove();
                //Зануляем ссылку на карточку
                card = null;
                //Закрываем попап подтверждения действия
                confirmPopup.close();
              })
              .catch((err) => {
                console.log(err);
              });
          }),
      handleClickLikeIcon:
        //Коллбэк клика по иконке "лайк"
        //Принимает аргументы:
        ////id - id карточки,
        ////likeIcon - элемент иконки "лайк",
        //// likeCounter - элемент счетчик "лайков",
        //// isLikedModifier - модификатор активного "лайка",
        //// likeChecked - маркер, показывающий, что пользователь поставил "лайк" карточке
        (id, likeIcon, likeCounter, isLikedModifier, likeChecked) => {
          //Если лайк был поставлен пользователем, и пользователь повторно нажал на "лайк" -> значит пользователь снял "лайк"
          if (likeChecked) {
            //Отправляем запрос на удаление "лайка" на сервер
            api
              .deleteLike(id)
              //Запрос выполнен успешно
              .then((res) => {
                //Удаляем модификатор активного "лайка" из списка css-классов "лайка"
                likeIcon.classList.remove(isLikedModifier);
                //Счетчику лайков присваиваем актуальное значение количетсва "лайков"
                likeCounter.textContent = res.likes.length;
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            //Отпрвляем запрос на добавление "лайка" на сервер
            api
              .loadLike(id)
              //Запрос выполнен успешно
              .then((res) => {
                //Добавляем модификатор активного "лайка" в список css-классов "лайка"
                likeIcon.classList.add(isLikedModifier);
                //Счетчику лайков присваиваем актуальное значение количетсва "лайков"
                likeCounter.textContent = res.likes.length;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        },
    },
    cardTemplateSelector,
    cardElementsSelectors,
    isOwner,
    isLiked,
    likesQuantity,
  );
  //Генерируем карточку и сохраняем ее в переменную cardElement
  const cardElement = cardNode.generateCard();
  //Возвращаем готовую карточку
  return cardElement;
}
//Отправляем на сервер запросы на загрузку данных пользователя и карточек
Promise.all([api.loadUserData(), api.loadCards()])
  //Обрабатываем полученные данные после успешного выполнения всех запросов
  .then(([currentUserData, cardData]) => {
    //Фиксируем id пользователя
    myIdentifier.id = currentUserData._id;
    //Деструктурируем полученные данные пользователя
    const { name, about: job, avatar } = currentUserData;
    //Размещаем полученные данные пользователя на странице
    userData.setUserInfo({ name, job, avatar });

    /**
     * @description Экземпляр класса Section<br>
     * DOM-нода контейнера с карточками
     * @constant
     * @name cardsContainer
     * @memberof index
     * @instance
     * @see {@link Section}
     */
    const cardsContainer = new Section(
      {
        //объект cardData - объект с данными карточек, полученный от сервера
        items: cardData,
        //коллбэк; создает карточку и размещает ее на странице. Принимает аргументом объект с данными карточки
        renderer: (cardDataItem) => {
          //Деструктурируем объект с данными карточки
          const {
            name: title,
            link: link,
            owner: owner,
            _id: id,
            likes: likesArray,
          } = cardDataItem;
          //Создаем карточку
          const card = createCard({ title, link, owner, id, likesArray });
          //Размещаем карточку на сраницу
          cardsContainer.addItem(card);
        },
      },
      containerSelector,
    );

    /**
     * @description Экземпляр класса PopupWithForm<br>
     * Попап добавления новой карточки
     * @constant
     * @name addPopup
     * @memberof index
     * @instance
     * @see {@link PopupWithForm}
     *
     */
    const addPopup = new PopupWithForm(
      {
        formSubmitCallback:
          //Коллбэк сабмита формы. Принимает аргументом объект newCardData с новыми данными карточки,
          //введеными пользователем в форме добавления карточки
          (newCardData) => {
            //Вызываем preloader
            preloader(addFormSubmitButton, true);
            //Отправляем запрос на сервер на добавление новой карточки
            api
              .addNewCard({
                name: newCardData[placeTitleInput.name],
                link: newCardData[imageLinkInput.name],
              })
              //Запрос выполнен успешно
              .then((obtainedNewCardData) => {
                //Деструктурируем полученные от сервера данные
                const {
                  name: title,
                  link: link,
                  owner: owner,
                  _id: id,
                  likes: likesArray,
                } = obtainedNewCardData;
                //Создаем новую карточку
                const card = createCard({ title, link, owner, id, likesArray });
                //Публикуем новую карточку на странице
                cardsContainer.addItem(card);
                //Закрываем попап
                addPopup.close();
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                //Останавливаем preloader
                preloader(addFormSubmitButton, false);
              });
          },
        formElement: addForm,
        formInputSelector: formInputSelector,
      },
      addPopupSelector,
      closeIconSelector,
      isOpenedModifier,
    );
    //Устанавливаем слушатели событий
    addPopup.setEventListeners();
    //Клик по кнопке добавления карточки - открывает попап добавления новой карточки
    addButton.addEventListener('click', () => addPopup.open());
    //Отрисовываем контейнер с карточками
    cardsContainer.render();
  })
  .catch((err) => {
    console.log(err);
  });

// СЛУШАТЕЛИ НА КНОПКИ
//Клик по кнопке редактирования профиля пользователя
editButton.addEventListener('click', () => {
  //Получаем текущие данные пользователя со страницы
  const { name, job } = userData.getUserInfo();
  //Подставляем их в инпуты формы редактирования профиля
  nameInput.value = name;
  jobInput.value = job;
  //Открываем попап
  editPopup.open();
});

//Клик по аватару
editAvatarButton.addEventListener('click', () => {
  //Открываем попап редактирования аватара
  editAvatarPopup.open();
});

//запускаем валидацию форм
formEditValidator.enableValidation();
formAddValidator.enableValidation();
formEditAvatarValidator.enableValidation();

//Устанавливаем слушатели событий на попапы
viewPopup.setEventListeners();
editPopup.setEventListeners();
confirmPopup.setEventListeners();
editAvatarPopup.setEventListeners();

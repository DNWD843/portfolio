import hangman from '../../images/hangman.png';
import treasure from '../../images/treasure.png';
import painter from '../../images/painter.png';
import snake from '../../images/snake.png';
import ballAndBlocks from '../../images/ball_blocks.png';
import releaseCard from '../../images/release-card.png';
import fourRules from '../../images/four-rules.png';
import howToLearn from '../../images/how-to-learn.png';
import russianTravel from '../../images/russian-travel.png';
import mestoJS from '../../images/mesto-js.png';
import mestoReact from '../../images/mesto-react-full.png';
import newsExplorer from '../../images/news-explorer.png';
import soccerStat from '../../images/soccer-stat.png';
import registerForm from '../../images/register-form.png';

export const beginnerDataArr = [
  {
    title: 'HANGMAN',
    subtitle: 'Javascript',
    image: hangman,
    pathToProject: './hangman.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/blob/main/hangman.html',
    cardLinkId: 'public',
    overlayText:
      'Игра, цель которой угадать слово за отведенное количество попыток. Технологии: Javascript',
  },
  {
    title: 'TREASURE',
    subtitle: 'Javascript, JQuery',
    image: treasure,
    pathToProject: './treasure.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/tree/main/treasure',
    cardLinkId: 'public',
    overlayText: `Игра, цель которой найти "клад" за отведенное количество попыток, ориентируясь по подсказкам "горячо" - "холодно".
     Технологии: Javascript, JQuery`,
  },
  {
    title: 'PAINTER',
    subtitle: 'Javascript, JQuery, Canvas',
    image: painter,
    pathToProject: './painter.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/blob/main/painter.html',
    cardLinkId: 'public',
    overlayText: 'Простая рисовалка. Технологии: Javascript, JQuery, Canvas',
  },
  {
    title: 'SNAKE',
    subtitle: 'Javascript, JQuery, Canvas',
    image: snake,
    pathToProject: './snake.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/blob/main/snake.html',
    cardLinkId: 'public',
    overlayText: `Игра "Змейка". Цель игры - "съесть" как можно больше яблок. Постепенно
                    увеличивается длина змейки и скорость ее передвижения. Если змейка укусит саму
                    себя или врежется в стену - конец игры.
                    Технологии: Javascript, JQuery, Canvas`,
  },
  {
    title: 'BALL & BLOCKS',
    subtitle: 'Javascript, JQuery, Canvas',
    image: ballAndBlocks,
    pathToProject: './ballAndBlocks.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/blob/main/BALL_BLOCKS.html',
    cardLinkId: 'public',
    overlayText: `Игра BALL&BLOCKS. Цель - разбить все блоки шариком, отбивая шарик битой. Синие
                    блоки изменяют длину биты в большую или меньшую сторону. Всего в игре два
                    раунда. Количество попыток ограничено. Технологии: Javascript, JQuery,
                    Canvas`,
  },
  {
    title: 'RELEASE CARD',
    subtitle: 'HTML, CSS',
    image: releaseCard,
    pathToProject: './releaseCard.html',
    pathToCode: 'https://github.com/DNWD843/release-card',
    cardLinkId: 'public',
    overlayText: `Форма заказа карты. Особенности проекта: всплывающие плейсхолдеры,
                    валидация инпутов регулярными выражениями, стилизация выбора
                    карточек(чекбоксы). Технологии: HTML, CSS, БЭМ`,
  },
];

export const practicumDataArr = [
  {
    title: 'FOUR RULES',
    subtitle: 'landing: HTML, CSS',
    image: fourRules,
    pathToProject: './fourRules.html',
    pathToCode: 'https://github.com/DNWD843/my-first-projects/tree/main/FOUR_RULES',
    cardLinkId: 'public',
    overlayText: `Небольшой лендинг, рассказывающий про основные правила верстки. Технологии: HTML, CSS`,
  },
  {
    title: 'HOW TO LEARN',
    subtitle: 'landing: HTML, CSS, CSS-animations, flexbox',
    image: howToLearn,
    pathToProject: './howToLearn.html',
    pathToCode: 'https://github.com/DNWD843/how-to-learn',
    cardLinkId: 'private',
    overlayText: `Flexbox-верстка, CSS-анимации, вставлены два фрейма. Технологии: HTML,
                    CSS, flexbox, table, БЭМ.`,
  },
  {
    title: 'RUSSIAN TRAVEL',
    subtitle: 'landing: HTML, CSS, flexbox, grid-layout',
    image: russianTravel,
    pathToProject: './russianTravel.html',
    pathToCode: 'https://github.com/DNWD843/russian-travel',
    cardLinkId: 'private',
    overlayText: `В этом проекте применяются две технологии верстки: flexbox и grid-layout.
                    Технологии: HTML, CSS, flexbox, grid-layout, БЭМ`,
  },
  {
    title: 'MESTO JS',
    subtitle: 'frontend',
    image: mestoJS,
    pathToProject: './mesto.html',
    pathToCode: 'https://github.com/DNWD843/mesto',
    cardLinkId: 'private',
    overlayText: `Фронтенд проекта MESTO, выполненный на нативном JS. Особенности проекта:
                    всплывающие окна, валидация форм нативным JS, возможность добавлять, удалять,
                    лайкать карточки, сборка проекта - webpack, AJAX, адаптив. Технологии:
                    HTML, CSS, Javascript, webpack, БЭМ`,
  },
  {
    title: 'MESTO REACT',
    subtitle: 'SPA: frontend + backend',
    image: mestoReact,
    pathToProject: 'https://linuxoid.students.nomoreparties.xyz',
    pathToCode: 'https://github.com/DNWD843/react-mesto-api-full',
    cardLinkId: 'private',
    overlayText: `Особенности проекта: авторизация пользователя, JWT token, хранение токена в LocalStorage, AJAX, адаптив.
                    Технологии:
                   фронтенд: ReactJS, валидация форм пользовательским хуком, БЭМ, CRA
                    бэкенд: NodeJS, Express, MongoDB, Joi/celebrate`,
  },
  {
    title: 'NEWS-EXPLORER',
    subtitle: 'SPA: frontend + backend',
    image: newsExplorer,
    pathToProject: 'https://truthseeker.students.nomoreparties.xyz',
    pathToCode: 'https://github.com/DNWD843/news-explorer-full/',
    cardLinkId: 'private',
    overlayText: `Поисковик. Особенности проекта: авторизация пользователя, JWT token, работа с
                    LocalStorage, сохранение статей, просмотр сохраненных статей, внешний API, AJAX,
                    адаптив. Технологии: фронтенд: ReactJS, валидация форм пользовательским
                    хуком, БЭМ, CRA. бэкенд: NodeJS, Express, MongoDB, Joi/celebrate`,
  },
];

export const testWorksDataArr = [
  {
    title: 'SOCCER STAT',
    subtitle: 'SPA: frontend',
    image: soccerStat,
    pathToProject: 'https://dnwd843.github.io/soccer-stat/',
    pathToCode: 'https://github.com/dnwd843/soccer-stat/',
    cardLinkId: 'public',
    overlayText: `Приложение просмотра футбольной статистики по европейским турнирам и
                    командам. Особенности: выбор/поиск турнира/команды, просмотр по
                    сезонам/месяцам/периодам, параметры запросов в роутах, внешний API, адаптив
                    Технологии: ReactJS, CRA, AJAX`,
  },
  {
    title: 'REGISTER FORM',
    subtitle: 'modal window',
    image: registerForm,
    pathToProject: 'https://dnwd843.github.io/register-form/',
    pathToCode: 'https://github.com/dnwd843/register-form/',
    cardLinkId: 'public',
    overlayText: `Форма регистрации пользователя. Особенности:
                    стилизация чекбокса и выпадающего списка, валидация инпутов пользовательским
                    хуком, резиновая верстка.
                    Технологии: ReactJS, CRA`,
  },
];

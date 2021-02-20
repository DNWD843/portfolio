import treasuremap from './treasuremap.png';
var mapImage = document.querySelector('#map');

mapImage.setAttribute('src', treasuremap);
//Объявляем функцию получения случайного числа от 0 до size-1
function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}
//Объявляем функцию вычисления расстояния от клика(event) до клада(target)
function getDistance(event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}
//Объявляем функция получения подсказки в зависимости от расстояния до клада(target)
//Подсказка будет выводиться в созданном параграфе ("id=distance")
function getDistanceHint(distance) {
  if (distance < 50) {
    return 'Обожжешься!';
  } else if (distance < 120) {
    return 'Очень горячо';
  } else if (distance < 200) {
    return 'Горячо';
  } else if (distance < 280) {
    return 'Тепло';
  } else if (distance < 360) {
    return 'Холодно';
  } else if (distance < 420) {
    return 'Очень холодно';
  } else {
    return 'Замерзнешь!';
  }
}
// создаем переменные
var width = 500;
var height = 500;
var clicks = 0;

// задаем случайную позицию клада
//ЭТО ОБЪЕКТ!!!
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height),
};

// Добавляем к элементу img обработчик клика
$('#map').click(function (event) {
  clicks++;
  $('#clicksCounter').text('Сделано кликов: ' + clicks + '  из 25 возможных!');
  //Определяем расстояние от места клика до клада и сохраняем его в переменной
  var distance = getDistance(event, target);

  // Преобразуем полученное расстояние в подсказку (через переменную)
  var distanceHint = getDistanceHint(distance);

  // Записываем в элемент #distance новую полученную подсказку
  $('#distance').text(distanceHint);

  // Проверяем условие на победу (близость к цели на 6 пикселей) и поздравляем
  // в случае победы
  if (distance <= 15) {
    alert('Поздравляем! Клад найден! Сделано кликов: ' + clicks);
  }
  //проверяем условие на проигрыш по количеству кликов
  if (clicks >= 25) {
    alert('Конец игры! Попробуйте еще раз!!');
  }
});

//Кроссбраузерность

/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}



// Подгружает 3 карточки 
const btnCard = document.querySelector('.btn-more');
const hiddenCard = document.querySelectorAll('.card-link__hidden');

btnCard.addEventListener('click', function () {
  hiddenCard.forEach(function (card) {
    card.classList.remove('card-link__hidden');
  })
})


//Показать/Скрыть параметров виджета
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
  widget.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title-active');
      e.target.nextElementSibling.classList.toggle('widget__body-hidden');
    }
  });
});


// Checkbox метро
const checkboxAny = document.querySelector('#metro-05');
const topCheckbox = document.querySelectorAll('[data-location-parametr]');
//Приоритетное включение кнопки "ЛЮБАЯ" и отколючение других checkbox
checkboxAny.addEventListener('change', function (e) {
  e.preventDefault();
  if (checkboxAny.checked) {
    topCheckbox.forEach(function (item) {
      item.checked = false;
    });
  }
})

//Отколючение кнопки "Любая" при нажатии на другой checkbox
topCheckbox.forEach(function (item) {
  item.addEventListener('change', function () {
    checkboxAny.checked = false;
  })
})

//Подгружаем 3 опции виджета
const btnOption = document.querySelector('.widget__option');
const elementHidden = document.querySelectorAll('.checkbox__element-hidden');

btnOption.addEventListener('click', function () {
  elementHidden.forEach(function (item) {
    item.classList.remove('checkbox__element-hidden');
  })
  btnOption.remove();
})

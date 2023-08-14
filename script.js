// ==UserScript==
// @name         Русификатор для веб-игры
// @namespace    your-namespace
// @version      1.0
// @description  Русифицирует веб-игру на основе JSON-файла с переводами
// @match        https://voxiom.io/*  // Замени на URL-адрес игры
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function updateTranslations(translations) {
    var elements = document.querySelectorAll('[class]');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var className = element.getAttribute('class');

      var translation = translations.find(t => t.class === className);

      if (!translation) {
        continue;
      }

      if (element.getElementsByTagName('img').length > 0) {
        continue;
      }

      for (var j = 0; j < translation.values.length; j++) {
        var value = translation.values[j];

        if (element.innerText === value.original) {
          element.innerText = value.translation;
        }
      }
    }
  }

  function loadTranslations() {
    fetch('https://raw.githubusercontent.com/username/repository/master/translations.json')
      .then(response => response.json())
      .then(data => {
        updateTranslations(data.translations);
      })
      .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
      });
  }

  // Обновляем переводы при загрузке страницы и каждые 5 секунд
  window.addEventListener('load', loadTranslations);
  setInterval(loadTranslations, 5000);
})();

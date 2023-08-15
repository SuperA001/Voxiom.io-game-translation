// ==UserScript==
// @name         Voxiom translator
// @namespace    SuperA001
// @version      0.1
// @description  Русификатор игры voxiom.io
// @match        https://voxiom.io/*
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @run-at       document-start
// ==/UserScript==


//Настройки
let time = 500; //Время обновления перевода в мс
translator_url = "https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/translate.json" //Ссылка на json файл с переводом. (Не рекомандуется трогать если у вас нету своего перевода)

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

        if (element.textContent.trim() === value.original) {
          element.textContent = value.translation;
        }
      }
    }
  }

  function loadTranslations() {
    fetch('https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/translate.json')
      .then(response => response.json())
      .then(data => {
        updateTranslations(data.translations);
      })
      .catch(error => {
        console.error('Ошибка загрузки JSON:', error);
      });
  }

  window.addEventListener('load', loadTranslations);
  setInterval(loadTranslations, 500);
})();
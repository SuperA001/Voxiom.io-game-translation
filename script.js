// ==UserScript==
// @name         Русификатор для веб-игры
// @namespace    your-namespace
// @version      1.0
// @description  Русифицирует веб-игру на основе JSON-файла с переводами
// @match        https://voxiom.io/*
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';

   function updateTranslations(translations) {
     var elements = document.querySelectorAll('[class]');

     for (var i = 0; i < elements.length; i++) {
       var element = elements[i];
       var classNames = element.getAttribute('class').split(' ');

       for (var k = 0; k < classNames.length; k++) {
         var className = classNames[k];
         var translation = translations.find(t => t.classes && t.classes.includes(className)); // Исправлено здесь

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

  // Обновляем переводы при загрузке страницы и каждые 5 секунд
  window.addEventListener('load', loadTranslations);
  setInterval(loadTranslations, 5000);
})();
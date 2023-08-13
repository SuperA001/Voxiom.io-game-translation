// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://voxiom.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_listValues

// @run-at       document-start
// @require      https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/9f7f46fc63bc4f25dc99.js
// @downloadURL  https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/script.js
// @updateURL    https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/script.js
// ==/UserScript==


// ==UserScript==
// @name         Translate Game Menu and UI
// @namespace    http://your-namespace-here
// @version      0.1
// @description  Translate the game menu and UI using JSON data from GitHub.
// @author       Your Name
// @match        http://your-game-url.com/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {

    // Replace with the raw GitHub URL of your JSON file
    const jsonUrl = 'https://raw.githubusercontent.com/your-username/your-repo/master/translations.json';

    // Fetch the JSON data from GitHub
    GM_xmlhttpRequest({
        method: 'GET',
        url: jsonUrl,
        onload: function(response) {
            try {
                const translations = JSON.parse(response.responseText);
                updatePage(translations);
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
        },
        onerror: function(error) {
            console.error('Error fetching JSON data:', error);
        }
    });

    function updatePage(translations) {
        // Define the menu and game elements on the page
        const menuItems = document.querySelectorAll('.menu-item');
        const gameElements = document.querySelectorAll('.game-element');

        // Iterate through menu items and game elements
        menuItems.forEach(function(item) {
            const translation = translations.menu.items[item.getAttribute('data-path')];
            if (translation) {
                item.textContent = translation.text;
                if (translation.imgSrc) {
                    const img = item.querySelector('img');
                    if (img) {
                        img.src = translation.imgSrc;
                    }
                }
            }
        });

        gameElements.forEach(function(element) {
            const translation = translations.game.elements[element.getAttribute('data-id')];
            if (translation) {
                element.textContent = translation.text;
            }
        });
    }
})();

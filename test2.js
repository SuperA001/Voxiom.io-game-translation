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

(function() {
    'use strict';

    window.addEventListener('DOMContentLoaded', function() {
        var scriptElements = document.getElementsByTagName('script');
        for (var i = 0; i < scriptElements.length; i++) {
            var script = scriptElements[i];
            if (script.src === 'https://voxiom.io/package/8e8bb6471203b5ba21d6.js') {
                script.src = 'https://github.com/SuperA001/Voxiom.io-game-translation/blob/main/source-2.js';
                break;
            }
        }
    });
})();


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
// @updateURL    https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/script.js
// ==/UserScript==

// URL вашего файла JavaScript
var newScriptUrl = "https://raw.githubusercontent.com/SuperA001/Voxiom.io-game-translation/main/9f7f46fc63bc4f25dc99.js";

// Функция для замены файла JavaScript
function require (resource_url) {
  var script = document.createElement("script");
  script.src = resource_url;
  document.head.appendChild(script);}

// Вызов функции для замены файла JavaScript
require(newScriptUrl);
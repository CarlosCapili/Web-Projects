/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNav\": () => (/* binding */ createNav),\n/* harmony export */   \"createTitleBar\": () => (/* binding */ createTitleBar),\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nfunction createNav() {\n    const divBar = document.createElement('div');\n    divBar.classList.add('bar');\n\n    const navDiv = document.createElement('div');\n    navDiv.setAttribute('id', 'nav-bar');\n    const navTag = document.createElement('nav');\n    \n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'HOME';\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'MENU';\n    const careersBtn = document.createElement('button');\n    careersBtn.textContent = 'CAREERS';\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = 'CONTACT';\n\n    navTag.appendChild(homeBtn);\n    navTag.appendChild(menuBtn);\n    navTag.appendChild(careersBtn);\n    navTag.appendChild(contactBtn);\n    navDiv.appendChild(navTag);\n    divBar.appendChild(navDiv)\n\n    return divBar;\n}\n\nfunction createTitleBar() {\n    const mainDiv = document.createElement('div');\n    mainDiv.setAttribute('id', 'about');\n\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'name');\n    title.textContent = 'Moonlit Seasons';\n\n    const slogan = document.createElement('h3');\n    slogan.textContent = 'High Price, Expensive Taste';\n\n    const reserveBtn = document.createElement('button');\n    reserveBtn.setAttribute('id', 'reserve');\n    reserveBtn.textContent = 'Reserve Now';\n\n    mainDiv.appendChild(title);\n    mainDiv.appendChild(slogan);\n    mainDiv.appendChild(reserveBtn);\n\n    return mainDiv;\n}\n\nfunction createFooter() {\n    const footerTag = document.createElement('footer');\n    footerTag.classList.add('bar');\n\n    const pTag = document.createElement('p');\n    pTag.textContent = 'Founded 1957 in Toronto';\n\n    footerTag.appendChild(pTag);\n\n    return footerTag;\n}\n\n//# sourceURL=webpack://RestaurantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nconst content = document.querySelector('#content');\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createNav)());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createTitleBar)());\ncontent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\n\n//# sourceURL=webpack://RestaurantPage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
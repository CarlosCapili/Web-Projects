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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomepage)\n/* harmony export */ });\nfunction createHomepage() {\n    const mainDiv = document.createElement('div');\n    mainDiv.setAttribute('id', 'about');\n\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'name');\n    title.textContent = 'Moonlit Seasons';\n\n    const slogan = document.createElement('h3');\n    slogan.textContent = 'High Price, Expensive Taste';\n\n    const reserveBtn = document.createElement('button');\n    reserveBtn.setAttribute('id', 'reserve');\n    reserveBtn.textContent = 'Reserve Now';\n\n    mainDiv.appendChild(title);\n    mainDiv.appendChild(slogan);\n    mainDiv.appendChild(reserveBtn);\n\n    return mainDiv;\n}\n\nfunction loadHomepage() {\n    const main = document.querySelector(\"#content\");\n    main.appendChild(createHomepage());\n}\n\n\n//# sourceURL=webpack://RestaurantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n(0,_main__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)(); //default load\n\nconst tabBtn = document.querySelectorAll(\".tabs\");\ntabBtn.forEach(e => {\n    e.addEventListener(\"click\", tabClicked);\n});\n\nfunction tabClicked(e) {\n    let tab = e.target.id;\n    switch(tab) {\n        case \"menu\":\n            console.log(tab);\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n            break;\n        case \"contact\":\n            console.log(tab);\n            break;\n        case \"careers\":\n            console.log(tab);\n            break;\n        default:\n            console.log(tab);\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n            break;\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://RestaurantPage/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMainpage)\n/* harmony export */ });\nfunction createNav() {\n    const divBar = document.createElement('div');\n    divBar.classList.add('bar');\n\n    const navDiv = document.createElement('div');\n    navDiv.setAttribute('id', 'nav-bar');\n    const navTag = document.createElement('nav');\n    \n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const careersBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n  \n    homeBtn.textContent = 'HOME';\n    menuBtn.textContent = 'MENU';\n    careersBtn.textContent = 'CAREERS';\n    contactBtn.textContent = 'CONTACT';\n\n    homeBtn.setAttribute(\"id\", \"home\");\n    menuBtn.setAttribute(\"id\", \"menu\");\n    careersBtn.setAttribute(\"id\", \"careers\");\n    contactBtn.setAttribute(\"id\", \"contact\");\n    homeBtn.setAttribute(\"class\", \"tabs\");\n    menuBtn.setAttribute(\"class\", \"tabs\");\n    careersBtn.setAttribute(\"class\", \"tabs\");\n    contactBtn.setAttribute(\"class\", \"tabs\");\n\n    navTag.appendChild(homeBtn);\n    navTag.appendChild(menuBtn);\n    navTag.appendChild(careersBtn);\n    navTag.appendChild(contactBtn);\n    navDiv.appendChild(navTag);\n    divBar.appendChild(navDiv)\n\n    return divBar;\n}\n\nfunction createFooter() {\n    const footerTag = document.createElement('footer');\n    footerTag.classList.add('bar');\n\n    const pTag = document.createElement('p');\n    pTag.textContent = 'Founded 1957 in Toronto';\n\n    footerTag.appendChild(pTag);\n\n    return footerTag;\n}\n\nfunction loadMainpage() {\n    const main = document.querySelector(\"#content\");\n    main.appendChild(createNav());\n    main.appendChild(createFooter());\n}\n\n\n//# sourceURL=webpack://RestaurantPage/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenupage)\n/* harmony export */ });\nfunction createMenu() {\n    const ptag = document.createElement('p');\n    ptag.textContent=\"PLEASE WORK!\";\n\n    return ptag;\n}\n\nfunction loadMenupage() {\n    const main = document.querySelector(\"#content\");\n    main.appendChild(createMenu());\n}\n\n//# sourceURL=webpack://RestaurantPage/./src/menu.js?");

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
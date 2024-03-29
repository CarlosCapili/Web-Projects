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

/***/ "./src/careers.js":
/*!************************!*\
  !*** ./src/careers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadCareerspage)\n/* harmony export */ });\nfunction createCareerspage() {\n    const mainDiv = document.createElement(\"div\");\n    mainDiv.classList.add(\"about\");\n\n    const nowHiring = document.createElement(\"h2\");\n    nowHiring.textContent = \"Now Hiring\";\n    nowHiring.classList.add(\"menuTitle\");\n    nowHiring.setAttribute(\"id\", \"hiring\");\n\n    //Roles\n    const headChef = document.createElement(\"h4\");\n    headChef.textContent = \"Head Chef\";\n    headChef.classList.add(\"role\");\n    const depChef = document.createElement(\"h4\");\n    depChef.textContent = \"Deputy Chef\";\n    depChef.classList.add(\"role\");\n    const waiter = document.createElement(\"h4\");\n    waiter.textContent = \"Waiter\";\n    waiter.classList.add(\"role\");\n\n    //Message\n    const msg = document.createElement(\"p\");\n    msg.textContent = \"Please send us your resume and we might just respond\";\n\n    mainDiv.appendChild(nowHiring);\n    mainDiv.appendChild(headChef);\n    mainDiv.appendChild(depChef);\n    mainDiv.appendChild(waiter);\n    mainDiv.appendChild(msg);\n\n    return mainDiv;\n}\n\nfunction loadCareerspage() {\n    const main = document.querySelector(\"#tabSpace\");\n    main.textContent = \"\";\n    main.append(createCareerspage());\n}\n\n//# sourceURL=webpack://RestaurantPage/./src/careers.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactpage)\n/* harmony export */ });\nfunction createContactpage() {\n    const mainDiv = document.createElement(\"div\");\n    mainDiv.classList.add(\"about\");\n\n    const contact = document.createElement(\"h2\");\n    contact.textContent = \"Contact Us\";\n    contact.setAttribute(\"id\", \"contactUs\");\n    contact.classList.add(\"menuTitle\");\n\n    const number = document.createElement(\"p\");\n    number.textContent = \"123-456-7890\";\n    number.classList.add(\"role\");\n    const email = document.createElement(\"p\");\n    email.textContent = \"moonlitseasons@gmail.com\";\n    email.classList.add(\"role\");\n\n    mainDiv.appendChild(contact);\n    mainDiv.appendChild(number);\n    mainDiv.appendChild(email);\n\n    return mainDiv;\n}\n\nfunction loadContactpage() {\n    const main = document.querySelector(\"#tabSpace\");\n    main.textContent = \"\";\n    main.appendChild(createContactpage());\n}\n\n//# sourceURL=webpack://RestaurantPage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomepage)\n/* harmony export */ });\nfunction createHomepage() {\n    const mainDiv = document.createElement('div');\n    mainDiv.setAttribute('class', 'about');\n\n    const title = document.createElement('h1');\n    title.setAttribute('id', 'name');\n    title.textContent = 'Moonlit Seasons';\n\n    const slogan = document.createElement('h3');\n    slogan.textContent = 'High Price, Expensive Taste';\n\n    const reserveBtn = document.createElement('button');\n    reserveBtn.setAttribute('id', 'reserve');\n    reserveBtn.textContent = 'Reserve Now';\n\n    mainDiv.appendChild(title);\n    mainDiv.appendChild(slogan);\n    mainDiv.appendChild(reserveBtn);\n\n    return mainDiv;\n}\n\nfunction loadHomepage() {\n    const main = document.querySelector(\"#tabSpace\");\n    main.textContent = \"\";\n    main.appendChild(createHomepage());\n}\n\n\n//# sourceURL=webpack://RestaurantPage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _careers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./careers */ \"./src/careers.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_main__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_home__WEBPACK_IMPORTED_MODULE_1__.default)(); //default load\n\nconst tabBtn = document.querySelectorAll(\".tabs\");\ntabBtn.forEach(e => {\n    e.addEventListener(\"click\", tabClicked);\n});\n\nfunction tabClicked(e) {\n    let tab = e.target.id;\n    switch(tab) {\n        case \"menu\":\n            console.log(tab);\n            (0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)();\n            break;\n        case \"contact\":\n            (0,_contact__WEBPACK_IMPORTED_MODULE_4__.default)();\n            console.log(tab);\n            break;\n        case \"careers\":\n            (0,_careers__WEBPACK_IMPORTED_MODULE_3__.default)();\n            console.log(tab);\n            break;\n        default:\n            console.log(tab);\n            (0,_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n            break;\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://RestaurantPage/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMainpage)\n/* harmony export */ });\nfunction createNav() {\n    const divBar = document.createElement('div');\n    divBar.classList.add('bar');\n\n    const navDiv = document.createElement('div');\n    navDiv.setAttribute('id', 'nav-bar');\n    const navTag = document.createElement('nav');\n    \n    const homeBtn = document.createElement('button');\n    const menuBtn = document.createElement('button');\n    const careersBtn = document.createElement('button');\n    const contactBtn = document.createElement('button');\n  \n    homeBtn.textContent = 'HOME';\n    menuBtn.textContent = 'MENU';\n    careersBtn.textContent = 'CAREERS';\n    contactBtn.textContent = 'CONTACT';\n\n    homeBtn.setAttribute(\"id\", \"home\");\n    menuBtn.setAttribute(\"id\", \"menu\");\n    careersBtn.setAttribute(\"id\", \"careers\");\n    contactBtn.setAttribute(\"id\", \"contact\");\n    homeBtn.setAttribute(\"class\", \"tabs\");\n    menuBtn.setAttribute(\"class\", \"tabs\");\n    careersBtn.setAttribute(\"class\", \"tabs\");\n    contactBtn.setAttribute(\"class\", \"tabs\");\n\n    navTag.appendChild(homeBtn);\n    navTag.appendChild(menuBtn);\n    navTag.appendChild(careersBtn);\n    navTag.appendChild(contactBtn);\n    navDiv.appendChild(navTag);\n    divBar.appendChild(navDiv)\n\n    return divBar;\n}\n\nfunction createFooter() {\n    const footerTag = document.createElement('footer');\n    footerTag.classList.add('bar');\n\n    const pTag = document.createElement('p');\n    pTag.textContent = 'Founded 1957 in Toronto';\n\n    footerTag.appendChild(pTag);\n\n    return footerTag;\n}\n\nfunction createTabSpace() {\n    const tagDiv = document.createElement(\"div\");\n    tagDiv.setAttribute(\"id\", \"tabSpace\");\n\n    return tagDiv;\n}\n\nfunction loadMainpage() {\n    const main = document.querySelector(\"#content\");\n    main.appendChild(createNav());\n    main.appendChild(createTabSpace());\n    main.appendChild(createFooter());\n}\n\n\n//# sourceURL=webpack://RestaurantPage/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenupage)\n/* harmony export */ });\nfunction createMenu() {\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.setAttribute(\"class\", \"about\");\n    menuDiv.setAttribute(\"id\", \"menuStyles\");\n\n    const menuTitle = document.createElement(\"h2\");\n    menuTitle.textContent = \"Moonlit Seasons\";\n    menuTitle.setAttribute(\"class\", \"menuTitle\");\n\n    // Food choices\n    const menuChoice = document.createElement(\"div\");\n    menuChoice.setAttribute(\"class\", \"two-columns\");\n\n    //Starters menu\n    const starterDiv = document.createElement(\"div\");\n    starterDiv.classList.add(\"columns\");\n    const starters = document.createElement(\"h4\");\n    starters.textContent = \"STARTERS\";\n\n    starterDiv.appendChild(starters);\n    starterDiv.appendChild(\n        createMenuItem(\n            \"STEAMED MAINE MUSSELS\",\n            \"sausage, fennel, preserved lemon\"\n        )\n    );\n    starterDiv.appendChild(\n        createMenuItem(\n            \"MARINATED LAMD SKEWER\",\n            \"grilled cucumber tzatziki, whole wheat pita\"\n        )\n    );\n\n    starterDiv.appendChild(\n        createMenuItem(\n            \"LEMON CHICKEN SOUP\",\n            \"volo olive, oregano, francese croutons\"\n        )\n    );\n\n    //Main course menu\n    const mainCourseDiv = document.createElement(\"div\");\n    mainCourseDiv.classList.add(\"columns\");\n    const mainCourse = document.createElement(\"h4\");\n    mainCourse.textContent = \"PLATES\";\n\n    mainCourseDiv.appendChild(mainCourse);\n    mainCourseDiv.appendChild(\n        createMenuItem(\n            \"SEARED SALMON\",\n            \"sunchokes, eggplant relish, rotisserie drippings\"\n        )\n    );\n    mainCourseDiv.appendChild(\n        createMenuItem(\n            \"PORK SAUSAGE\",\n            \"grilled apple, basil, house beer mustard\"\n        )\n    );\n    mainCourseDiv.appendChild(\n        createMenuItem(\n            \"BUTCHER'S STEAK\",\n            \"whole roasted garlic, anchovy butter\"\n        )\n    );\n\n    menuChoice.appendChild(starterDiv);\n    menuChoice.appendChild(mainCourseDiv);\n\n    menuDiv.appendChild(menuTitle);\n    menuDiv.appendChild(menuChoice);\n\n    return menuDiv;\n}\n\nfunction createMenuItem(name, desc) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menuItem\");\n\n    const itemName = document.createElement(\"h5\");\n    itemName.classList.add(\"itemName\");\n    itemName.textContent = name;\n\n    const itemDesc = document.createElement(\"p\");\n    itemDesc.classList.add(\"itemDesc\");\n    itemDesc.textContent = desc;\n\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(itemDesc);\n\n    return menuItem;\n}\n\nfunction loadMenupage() {\n    const main = document.querySelector(\"#tabSpace\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\n//# sourceURL=webpack://RestaurantPage/./src/menu.js?");

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
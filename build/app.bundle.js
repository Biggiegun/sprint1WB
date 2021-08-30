/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/dataUsuario.js":
/*!********************************!*\
  !*** ./src/app/dataUsuario.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Code here!!\r\n\r\nlet usuario = document.querySelector(\"#confirmarDatosUsuario\");\r\n\r\nconst getData = async (url) => {\r\n  \r\n    const resp = await fetch(url);\r\n    const data = await resp.json();\r\n    data.forEach((usuario) => {\r\n      const { nombre, correo, id } = usuario;\r\n      document.querySelector(\"#nombreUsuario\").value = nombre;\r\n      document.querySelector(\"#correoUsuario\").value = correo;\r\n      document.querySelector(\"#id\").value = id;\r\n    });\r\n  };\r\n\r\n\r\n////////////////////////////////////////////////////////////\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    getData(\"http://localhost:4000/usuario\")  \r\n});\r\n\r\n\r\nusuario.addEventListener(\"click\",  async() =>{\r\n        let nombreMod = document.querySelector(\"#nombreUsuario\").value\r\n        let correoMod = document.querySelector(\"#correoUsuario\").value\r\n        let idModificar = document.querySelector(\"#id\").value;\r\n        let resp = await fetch(`http://localhost:4000/usuario/${idModificar}`, {\r\n            method: 'PUT',\r\n            body: JSON.stringify({\r\n                id: idModificar,\r\n                nombre: nombreMod,\r\n                correo: correoMod\r\n            }),\r\n            headers: {\r\n                \"Content-Type\": \"application/json; charset=UTF-8\"\r\n            }\r\n        })\r\n        location.href = \"categorias.html\";  \r\n    }\r\n);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataUsuario);\n\n//# sourceURL=webpack://SpringDailyBits/./src/app/dataUsuario.js?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dataUsuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataUsuario */ \"./src/app/dataUsuario.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/app/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconsole.log(\"Daily - Bits\");\r\n\n\n//# sourceURL=webpack://SpringDailyBits/./src/app/index.js?");

/***/ }),

/***/ "./src/app/style.css":
/*!***************************!*\
  !*** ./src/app/style.css ***!
  \***************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://SpringDailyBits/./src/app/style.css?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;
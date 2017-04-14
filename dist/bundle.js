/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var clockContainer = document.querySelector('.clock');

var _ref = [function () {
  return new Date();
}, function () {
  return getFullDate().getSeconds();
}, function () {
  return getFullDate().getMinutes();
}, function () {
  return getFullDate().getHours();
}, function () {
  var cSeconds = document.getElementById('seconds');
  var cMinutes = document.getElementById('minutes');
  var cHours = document.getElementById('hours');

  setInterval(function () {
    refreshMinutes() == 0 ? cHours.innerHTML = refreshHours() : void 0;
    refreshSeconds() == 0 ? cMinutes.innerHTML = refreshMinutes() : void 0;
    cSeconds.innerHTML = refreshSeconds();
  }, 1000);
}, function (clc, hours, minutes, seconds) {

  var x = function x(hours, minutes, seconds) {
    clc.innerHTML = hours + ':' + minutes + ':' + seconds;
    return refreshAll();
  };

  return x;
}],
    getFullDate = _ref[0],
    refreshSeconds = _ref[1],
    refreshMinutes = _ref[2],
    refreshHours = _ref[3],
    refreshAll = _ref[4],
    initClock = _ref[5];
var hours = '<span id="hours">' + getFullDate().getHours() + '</span>',
    minutes = '<span id="minutes">' + getFullDate().getMinutes() + '</span>',
    seconds = '<span id="seconds">' + refreshSeconds() + '</span>';


initClock(clockContainer)(hours, minutes, seconds);

/***/ })
/******/ ]);
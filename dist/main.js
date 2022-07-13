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

/***/ "./src/styles/calend.css":
/*!*******************************!*\
  !*** ./src/styles/calend.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://date-picker-1/./src/styles/calend.css?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://date-picker-1/./src/styles/index.css?");

/***/ }),

/***/ "./src/styles/null.css":
/*!*****************************!*\
  !*** ./src/styles/null.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://date-picker-1/./src/styles/null.css?");

/***/ }),

/***/ "./src/styles/popup.css":
/*!******************************!*\
  !*** ./src/styles/popup.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://date-picker-1/./src/styles/popup.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/popup.css */ \"./src/styles/popup.css\");\n/* harmony import */ var _styles_null_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/null.css */ \"./src/styles/null.css\");\n/* harmony import */ var _styles_calend_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/calend.css */ \"./src/styles/calend.css\");\n/* harmony import */ var _js_datePickerConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/datePickerConfig.js */ \"./src/js/datePickerConfig.js\");\n/* harmony import */ var _js_init_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/init.js */ \"./src/js/init.js\");\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://date-picker-1/./src/index.js?");

/***/ }),

/***/ "./src/js/datePickerConfig.js":
/*!************************************!*\
  !*** ./src/js/datePickerConfig.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DatePickerConfig\": () => (/* binding */ DatePickerConfig)\n/* harmony export */ });\nclass DatePickerConfig {\n  constructor(props) {\n    // initialization - DOM\n    this.config = {\n      popup: props.popup || 'date-picker__popup',\n      format: props.format || 'DD.MM.YYYY',\n      weekDays: props.weekDays || ['M', 'T', 'W', 'T', 'F', 'S', 'S'],\n      months: props.months || ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    };\n    this.datePicker = props.datePicker;\n    this.popup = this.datePicker?.getElementsByClassName(props.popup);\n\n    // datePickerInput\n    this.datePickerInput = document.createElement('div');\n    this.datePickerFormat = document.createElement('div');\n    this.datePickerImg = document.createElement('div');\n    this.spanDay = document.createElement('span');\n    this.spanMonth = document.createElement('span');\n    this.spanYear = document.createElement('span');\n    this.imgPicker = document.createElement('img');\n\n    // datePickerPopup\n    this.datePickerPopup = document.createElement('div');\n\n    this.datePickerHeader = document.createElement('div');\n    this.h6Header = document.createElement('h6');\n\n    this.datePickerChangeDate = document.createElement('div');\n    this.datePickerCurrentDate = document.createElement('div');\n    this.currentWeekDay = document.createElement('span');\n    this.dateMonth = document.createElement('span');\n    this.currentDay = document.createElement('span');\n\n    this.datePickerEditDate = document.createElement('div');\n    this.imgEdit = document.createElement('img');\n\n    // datePickerCalendar\n    this.datePickerCalendar = document.createElement('div');\n\n    // datePickerSwitcher \n    this.datePickerSwitcher = document.createElement('div');\n    this.datePickerDate = document.createElement('div');\n\n    // datePickerSwitch(Month, Years)\n    this.datePickerDateYears = document.createElement('div');\n    this.spanMonth = document.createElement('span');\n    this.spanYear = document.createElement('span');\n\n    this.datePickerMoreYears = document.createElement('div');\n    this.imgShowMore = document.createElement('img');\n\n    // datePickerSwitchMonth\n    this.datePickerArrows = document.createElement('div');\n    this.imgLeft = document.createElement('img');\n    this.imgRight = document.createElement('img');\n\n    // datePickerGrid + WeekDays\n    this.datePickerMain = document.createElement('div');\n    this.datePickerWeekdays = document.createElement('div');\n    //todo ?\n    this.weekDay = document.createElement('div');\n\n    // datePickerMonthDays\n    this.datePickerDays = document.createElement('div');\n    // this.monthDays = document.createElement('div');\n\n    // datePickerBtns\n    this.datePickerBtns = document.createElement('div');\n    this.btnOk = document.createElement('button');\n    this.btnCancel = document.createElement('button');\n  }\n\n\n  handlerToggle() {\n    this.popup[0]?.classList.toggle('popup__active');\n  };\n\n\n  render() {\n    new DatePickerInput({}).render(this.datePicker);\n    new DatePickerPopup({}).render(this.datePicker);\n  };\n};\n\n\nclass DatePickerInput extends DatePickerConfig {\n  constructor(props) {\n    super(props);\n  }\n\n  render(datePicker) {\n    // render INPUT\n    this.datePickerInput.setAttribute('class', 'date-picker__input');\n    this.datePickerFormat.setAttribute('class', 'date-picker__format');\n    this.datePickerImg.setAttribute('class', 'date-picker__img');\n    this.imgPicker.setAttribute('src', '/calendar.svg');\n    this.imgPicker.setAttribute('alt', 'calendar');\n\n    this.datePickerFormat.append(this.spanDay, this.spanMonth, this.spanYear);\n    this.datePickerImg.append(this.imgPicker);\n    this.datePickerInput.append(this.datePickerFormat, this.datePickerImg);\n    datePicker.append(this.datePickerInput);\n  }\n};\n\n\nclass DatePickerPopup extends DatePickerConfig {\n  constructor(props) {\n    super(props);\n  }\n\n  render(datePicker) {\n    this.datePickerPopup.setAttribute('class', 'date-picker__popup');\n    this.datePickerHeader.setAttribute('class', 'date-picker__header');\n    this.datePickerCalendar.setAttribute('class', 'date-picker__calendar');\n\n    this.h6Header.innerText = \"SELECT DATE\";\n\n    this.datePickerHeader.append(this.h6Header);\n    this.datePickerPopup.append(this.datePickerHeader, this.datePickerCalendar);\n    datePicker.append(this.datePickerPopup);\n\n    new DatePickerFormat({}).render(this.datePickerHeader);\n    new Calendar({}).render(this.datePickerCalendar);\n  }\n};\n\n\nclass DatePickerFormat extends DatePickerPopup {\n  constructor(props) {\n    super(props);\n  }\n\n\n  render(datePickerHeader) {\n    this.datePickerChangeDate.setAttribute('class', 'date-picker__date-change');\n    this.datePickerCurrentDate.setAttribute('class', 'date-picker__current-date');\n    this.currentWeekDay.setAttribute('date-weekDay', '-');\n    this.dateMonth.setAttribute('date-month', '-');\n    this.currentDay.setAttribute('date-day', '-');\n    this.datePickerEditDate.setAttribute('class', 'date-picker__edit-date');\n    this.imgEdit.setAttribute('src', '/edit.svg');\n    this.imgEdit.setAttribute('alt', 'edit');\n\n    this.currentWeekDay.innerText = 'Wen, ';\n    this.dateMonth.innerText = 'Jul ';\n    this.currentDay.innerText = '13';\n\n    this.datePickerCurrentDate.append(this.currentWeekDay, this.dateMonth, this.currentDay);\n    this.datePickerEditDate.append(this.imgEdit);\n    this.datePickerChangeDate.append(this.datePickerCurrentDate, this.datePickerEditDate);\n\n    datePickerHeader.append(this.datePickerChangeDate);\n\n    // Events\n    this.datePickerEditDate.addEventListener('click', () => console.log('edit'));\n  }\n};\n\n\nclass Calendar extends DatePickerConfig {\n  constructor(props) {\n    super(props);\n    this.date = new Date();\n  }\n\n\n  render(datePickerCalendar, days) {\n    // input values\n    const currentYear = parseInt(this.spanYear.innerText);\n    const currentMonth = parseInt(this.spanMonth.innerText);\n    const currentDay = parseInt(this.spanDay.innerText);\n\n    this.datePickerSwitcher.setAttribute('class', 'date-picker__switcher');\n    this.datePickerMain.setAttribute('class', 'date-picker__main');\n    this.datePickerBtns.setAttribute('class', 'date-picker__btns');\n    this.datePickerWeekdays.setAttribute('class', 'date-picker__weekdays');\n    this.config.weekDays.forEach(el => {\n      this.datePickerWeekdays.innerHTML += `<div>${el}</div>`;\n    });\n\n    this.btnOk.innerText = 'OK';\n    this.btnCancel.innerText = 'CANCEL';\n\n    this.datePickerMain.append(this.datePickerWeekdays);\n    this.datePickerBtns.append(this.btnCancel, this.btnOk);\n    datePickerCalendar.append(this.datePickerSwitcher, this.datePickerMain, this.datePickerBtns);\n\n    // Events\n    this.btnOk.addEventListener('click', () => console.log('click ok'));\n    this.btnCancel.addEventListener('click', () => console.log('click cancel'));\n\n    new DatePickerSwitcher({}).render(this.datePickerSwitcher);\n    new Year({}, this.datePickerMain).render(currentYear, currentMonth, currentDay);\n  }\n};\n\n\nclass Year extends DatePickerPopup {\n  constructor(props, datePickerMain) {\n    super(props);\n    this.date = new Date();\n    this.datePickerMain = datePickerMain;\n    this.dateMonthDay = this.date.getDate();\n    this.dateMonth = this.date.getMonth();\n    this.dateYear = this.date.getFullYear();\n    this.currentDate = new Date(this.dateYear, this.dateMonth, this.dateMonthDay);\n  }\n\n\n  handlerYearChanged(month) {\n    console.log('change month' + month)\n  }\n\n\n  render(year, month, day) {\n    if (year && month && day) {\n      this.selectedDate = new Date(year, month, day);\n    } else {\n      this.selectedDate = new Date();\n    }\n    new DatePickerSwitcher({}, this.selectedDate, this.datePickerMain, this.handlerYearChanged).render();\n  }\n\n};\n\n\nclass DatePickerSwitcher extends Year {\n  constructor(props, selectedDate, datePickerMain, handlerYearChanged) {\n    super(props);\n    this.selectedDate = selectedDate;\n    this.datePickerMain = datePickerMain;\n    this.handler = handlerYearChanged;\n    this.currentMonth = selectedDate.getMonth();\n    this.currentYear = selectedDate.getFullYear();\n    this.firstMonthDay = new Date(this.currentYear, this.currentMonth, 1);\n    this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();\n    this.firstWeekDay = this.firstMonthDay.getDay() - 1;\n  }\n\n  handlerMonthChanged(day) {\n    console.log('change day' + day)\n  }\n\n\n  render(datePickerSwitcher) {\n    this.datePickerDate.setAttribute('class', 'date-picker__date');\n    this.datePickerDateYears.setAttribute('class', 'date-picker__date-years');\n    this.datePickerMoreYears.setAttribute('class', 'date-picker__more-years');\n    this.imgShowMore.setAttribute('src', '/more.svg');\n    this.imgShowMore.setAttribute('alt', 'more..');\n    this.datePickerArrows.setAttribute('class', 'date-picker__arrows');\n    this.imgLeft.setAttribute('src', '/left.svg');\n    this.imgLeft.setAttribute('alt', 'left arrow');\n    this.imgRight.setAttribute('src', '/right.svg');\n    this.imgRight.setAttribute('alt', 'right arrow');\n\n    this.spanMonth.innerText = 'July';\n    this.spanYear.innerText = '2022';\n\n    this.datePickerDateYears.append(this.spanMonth, this.spanYear);\n    this.datePickerMoreYears.append(this.imgShowMore);\n    this.datePickerArrows.append(this.imgLeft, this.imgRight);\n    this.datePickerDate.append(this.datePickerDateYears, this.datePickerMoreYears);\n    datePickerSwitcher.append(this.datePickerDate, this.datePickerArrows);\n\n    // Events\n    this.imgLeft.addEventListener('click', () => console.log('click left'));\n    this.imgRight.addEventListener('click', () => console.log('click right'));\n    this.spanYear.addEventListener('click', () => console.log('show more'));\n    this.imgShowMore.addEventListener('click', () => console.log('show more'));\n\n    // CLASS MONTH\n    this.datePickerDays.setAttribute('class', 'date-picker__days');\n\n    for (let i = 0; i < this.firstWeekDay; i++) {\n      this.datePickerDays.append(new Day({}, null).render());\n    }\n\n    for (let i = 0; i < this.daysInMonth; i++) {\n      this.datePickerDays.append(new Day({}, i + 1, this.handlerMonthChanged).render());\n    }\n\n    this.datePickerMain.append(this.datePickerDays);\n\n    console.log(this.firstWeekDay)\n  }\n};\n\n\nclass Month extends Year {\n  constructor(props, selectedDate, datePickerMain, handlerYearChanged) {\n    super(props);\n    this.selectedDate = selectedDate;\n    this.datePickerMain = datePickerMain;\n    this.handler = handlerYearChanged;\n    this.currentMonth = selectedDate.getMonth();\n    this.currentYear = selectedDate.getFullYear();\n    this.firstMonthDay = new Date(this.currentYear, this.currentMonth, 1);\n    this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();\n    this.firstWeekDay = this.firstMonthDay.getDay() - 1;\n  }\n\n\n  handlerMonthChanged(day) {\n    console.log('change day' + day)\n  }\n\n\n  render() {\n    this.datePickerDays.setAttribute('class', 'date-picker__days');\n\n    for (let i = 0; i < this.firstWeekDay; i++) {\n      this.datePickerDays.append(new Day({}, null).render());\n    }\n\n    for (let i = 0; i < this.daysInMonth; i++) {\n      this.datePickerDays.append(new Day({}, i + 1, this.handlerMonthChanged).render());\n    }\n\n    this.datePickerMain.append(this.datePickerDays);\n\n    console.log(this.firstWeekDay)\n  }\n};\n\n\nclass Day extends Year {\n  constructor(props, day, handlerMonthChanged) {\n    super(props);\n    this.day = day;\n    this.handler = handlerMonthChanged;\n\n    console.log(this.dateMonthDay)\n  }\n\n\n  handlerDayChanged() {\n    console.log('click day')\n  }\n\n\n  render() {\n    this.monthDays = document.createElement('div');\n    this.monthDays.innerText = this.day;\n    this.monthDays.innerText === '' ? this.monthDays.style.cursor = 'default' : null;\n    this.dateMonthDay === this.day ? this.monthDays.classList.add('day__active') : null;\n\n    // Events\n    this.day ? this.monthDays.addEventListener('click', () => this.handler(this.day)) : null;\n\n    return this.monthDays;\n  }\n};\n\n//# sourceURL=webpack://date-picker-1/./src/js/datePickerConfig.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datePickerConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datePickerConfig */ \"./src/js/datePickerConfig.js\");\n\n\n\nwindow.addEventListener('load', () => {\n  const datePickers = document.querySelectorAll('.date-picker').forEach(elem => {\n    let input = elem;\n\n    elem.addEventListener('click', (e) => { e.target.className === 'date-picker__input' || e.target.innerText === 'CANCEL' ? input.handlerToggle() : null });\n    input = new _datePickerConfig__WEBPACK_IMPORTED_MODULE_0__.DatePickerConfig({\n      datePicker: elem,\n      popup: 'date-picker__popup',\n      format: 'DD.YYYY.MM',\n      weekDays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],\n      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n    });\n    input.render();\n  });\n});\n\n\n\n\n//? скрывать календраь при нажатии мимо него\n//? при нажатии на ДЕНЬ, МЕСЯЦ, ГОД - будут передваться параметры с (ГОД, МЕСЯЦ, ДЕНЬ)\n\n// создаем класс DatePickerConfig+\n// находим все инпуты+\n// добавляем события на инпуты+\n\n// отображаем пустые инпуты+\n// принажатии рендерим попап+\n// вешаем событие+\n// рендерим в попапе классы Year, Month, WeekDay, MonthDay, также рендерим Switchers\n\n// добавляем события на Year, Month, MonthDay \n// при смене года - менять дату и чтобы инпут знал\n// при смене месяца - менять дату и чтобы инпут знал\n// при нажатии на день - записывать выбранную дату в инпут\n// при измененении даты в инпуте - менять данные календаря (Year, Month, Day)\n\n\n// сделать дефолтные значения для класса, чтобы не прописывать каждый раз+\n// сделать смену формата (мб drag&drop или писать mm.dd.yyyy, yyyy.mm.dd - задать формат через точку и потом искать совпадения)\n\n\n\n\n\nclass Year {\n  constructor(currentYear) {\n    this.currentYear = currentYear;\n  }\n\n  handlerYearChanged(currentYear) {\n    return currentYear;\n  }\n\n  render() {\n    const year = document.createElement('div')\n    year.innerText = year\n  }\n}\n\n\nclass Month {\n  constructor(monthDays) {\n    this.monthDays = monthDays;\n  }\n\n\n  handlerMonthChanged(currentMonth) {\n    return currentMonth;\n  }\n\n  render() {\n    for (let i = 0; i < this.monthDays; i++) {\n      return new Day(i + 1, this.handlerMonthChanged).render();\n    }\n  }\n}\n\n\nclass Day {\n  constructor(day, hand) {\n    this.day = day;\n    this.hand = hand;\n  }\n\n  handlerDayChanged(currentDay) {\n    return currentDay;\n  }\n\n  render() {\n    const day = document.createElement('div')\n    day.onclick(() => this.hand(this.day))\n    return day.innerText = this.day\n  }\n}\n\n//# sourceURL=webpack://date-picker-1/./src/js/init.js?");

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
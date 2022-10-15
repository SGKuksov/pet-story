/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/models/AppModule.interface.ts":
/*!**************************************************!*\
  !*** ./src/assets/models/AppModule.interface.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
class AppModule {
    constructor() {
        this._name = '';
        this.setName();
    }
    setName() {
        this._name = this.constructor.name;
    }
    init() {
    }
}
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/assets/models/index.ts":
/*!************************************!*\
  !*** ./src/assets/models/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
var AppModule_interface_1 = __webpack_require__(/*! ./AppModule.interface */ "./src/assets/models/AppModule.interface.ts");
Object.defineProperty(exports, "AppModule", ({ enumerable: true, get: function () { return AppModule_interface_1.AppModule; } }));


/***/ }),

/***/ "./src/assets/scripts/App.ts":
/*!***********************************!*\
  !*** ./src/assets/scripts/App.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const config_1 = __webpack_require__(/*! ./utils/config */ "./src/assets/scripts/utils/config.ts");
class App {
    constructor(modules) {
        this.isLoaded = false;
        this.modules = modules.map(Module => {
            return new Module(null, this);
        });
        this.onLoadingHandler = this.onLoadingHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onMatchMediaHandler = this.onMatchMediaHandler.bind(this);
        this.onCreate();
    }
    onCreate() {
        document.addEventListener('DOMContentLoaded', this.onLoadingHandler);
        document.addEventListener('click', this.onClickHandler);
        window.matchMedia(config_1.breakpoints.desktop).addEventListener('change', this.onMatchMediaHandler);
    }
    onInit() {
        this.modules.forEach(module => module.init());
    }
    onDestroy() {
        document.removeEventListener('DOMContentLoaded', this.onLoadingHandler);
        document.removeEventListener('click', this.onClickHandler);
        window.matchMedia(config_1.breakpoints.desktop).removeEventListener('change', this.onMatchMediaHandler);
    }
    getModule(name) {
        return this.modules.find(module => module._name === name);
    }
    onLoadingHandler() {
        this.isLoaded = true;
        this.onInit();
    }
    onClickHandler() {
        /*
          Nothing
         */
    }
    onMatchMediaHandler() {
        /*
          Nothing
        */
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/assets/scripts/main.ts":
/*!************************************!*\
  !*** ./src/assets/scripts/main.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const web_vitals_1 = __webpack_require__(/*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js");
const App_1 = __importDefault(__webpack_require__(/*! ./App */ "./src/assets/scripts/App.ts"));
const Dropdown_1 = __webpack_require__(/*! @/components/dropdown/Dropdown */ "./src/components/dropdown/Dropdown.ts");
const Form_1 = __webpack_require__(/*! @/components/form/Form */ "./src/components/form/Form.ts");
const Modal_1 = __webpack_require__(/*! @/components/modal/Modal */ "./src/components/modal/Modal.ts");
const isDev = "development" === 'development';
if (isDev) {
    (0, web_vitals_1.getCLS)(console.log);
    (0, web_vitals_1.getFID)(console.log);
    (0, web_vitals_1.getLCP)(console.log);
}
/*
  Передать аргумент в конструктор можно через bind()
  Пример:
  `Ticker.bind(null, options)`
 */
new App_1.default([
    Dropdown_1.Dropdown,
    Form_1.Form,
    Modal_1.Modal,
]);


/***/ }),

/***/ "./src/assets/scripts/utils/config.ts":
/*!********************************************!*\
  !*** ./src/assets/scripts/utils/config.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.breakpoints = void 0;
const breakpoints = {
    mobile: '(min-width: 0)',
    tablet: '(min-width: 768px)',
    'tablet-landscape': '(min-width: 1024px)',
    desktop: '(min-width: 1280px)',
    'desktop-wide': '(min-width: 1440px)',
    fullhd: '(min-width: 1920px)',
    ultra: '(min-width: 2560px)',
};
exports.breakpoints = breakpoints;


/***/ }),

/***/ "./src/components/dropdown/Dropdown.ts":
/*!*********************************************!*\
  !*** ./src/components/dropdown/Dropdown.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dropdown = void 0;
const models_1 = __webpack_require__(/*! @/assets/models */ "./src/assets/models/index.ts");
function createDropdown(selector, content, type = 'left') {
    let className = '';
    let button = null;
    if (type === 'left') {
        className = 'dropdown_left';
    }
    if (type === 'right') {
        className = 'dropdown_right';
    }
    if (typeof selector === 'string') {
        button = document.querySelector(`[data-dropdown-open="${selector}"]`);
    }
    if (selector instanceof Element) {
        button = selector;
    }
    if (!button)
        return;
    const id = button.dataset.dropdownOpen;
    if (!id)
        return;
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown', className);
    dropdown.dataset.dropdown = id;
    dropdown.innerHTML = `
    <div class="dropdown__content" data-dropdown-content>
        ${content}
        
        <button data-dropdown-close>Х</button>
    </div>   
  `;
    // @ts-ignore
    button.parentNode.insertBefore(dropdown, button.nextSibling);
    dropdown.prepend(button);
}
// TODO Fix me
// function Dropdown() {
//   let _isOpen = false;
//
//   function open(id: string) {
//     const selector = `[data-dropdown="${id}"]`;
//     const dropdown = document.querySelector(selector);
//
//     if (!dropdown) return;
//     dropdown.classList.add('dropdown_open');
//
//     setTimeout(() => {
//       dropdown.classList.add('dropdown_visible');
//     }, 300);
//   }
//
//   function close(dropdown: HTMLElement) {
//     dropdown.classList.remove('dropdown_visible');
//
//     setTimeout(() => {
//       dropdown.classList.remove('dropdown_open');
//     }, 200);
//   }
//
//   function closeAll() {
//     const selector = `[data-dropdown]`;
//     const dropdowns = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
//
//     dropdowns.forEach(item => {
//       close(item);
//       // enablePageScroll(item);
//     });
//
//     // clearQueueScrollLocks();
//   }
//
//   function documentClickHandler(e: MouseEvent) {
//     const target = e.target as HTMLElement;
//
//     if (_isOpen) {
//       // Close all
//       const currentDropdown = target.closest('[data-dropdown]');
//       const closeBtn = target.closest('[data-dropdown-close]');
//       const openBtn = target.closest('[data-dropdown-open]');
//
//       if (!currentDropdown || closeBtn || openBtn) {
//         closeAll();
//         _isOpen = false;
//       }
//
//       // clearQueueScrollLocks();
//       // enablePageScroll(currentDropdown);
//     } else {
//       const dropdownTrigger = target.closest('[data-dropdown-open]') as HTMLElement;
//
//       if (!dropdownTrigger) return;
//
//       // Open
//       const id = dropdownTrigger.dataset.dropdownOpen;
//       if (id) {
//         open(id);
//
//         // disablePageScroll();
//         _isOpen = true;
//       }
//     }
//   }
//
//   function documentKeyupHandler(e: KeyboardEvent) {
//     if (e.key === 'Escape') {
//       closeAll();
//       _isOpen = false;
//     }
//   }
//
//   function init() {
//     document.addEventListener('click', documentClickHandler);
//     document.addEventListener('keyup', documentKeyupHandler);
//   }
//
//   function destroy() {
//     document.removeEventListener('click', documentClickHandler);
//     document.removeEventListener('keyup', documentKeyupHandler);
//   }
//
//   return {
//     init,
//     destroy,
//     open,
//     close,
//     createDropdown
//   };
// }
class Dropdown extends models_1.AppModule {
    constructor() {
        super();
    }
    init() {
        super.init();
    }
}
exports.Dropdown = Dropdown;


/***/ }),

/***/ "./src/components/form/Form.ts":
/*!*************************************!*\
  !*** ./src/components/form/Form.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
const models_1 = __webpack_require__(/*! @/assets/models */ "./src/assets/models/index.ts");
// FIXME
// function Form() {
//   let _isFormValid: boolean | null = null;
//
//   function reset(form: { querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {
//     const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLInputElement[];
//     hideAllError(inputs);
//   }
//
//   function validate(form: HTMLElement) {
//     if (!form) return;
//     reset(form);
//
//     const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLInputElement[];
//     _isFormValid = checkInputs(inputs);
//   }
//
//   function documentFocusHandler(e: FocusEvent) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentBlurHandler(e: FocusEvent) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentInputHandler(e: Event) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentChangeHandler(e: Event) {
//     const target = e.target as HTMLElement;
//
//     if (!target) return;
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//   }
//
//   function documentSubmitHandler(e: Event) {
//     const target = e.target as HTMLElement;
//     e.preventDefault();
//
//     const form = target.closest('[data-form]') as HTMLElement;
//     validate(form);
//
//     if (_isFormValid) {
//       console.log('Submit');
//       // form.submit();
//     }
//   }
//
//   function init() {
//     const forms = Array.from(document.forms);
//     forms.forEach(form => {
//       const inputs = Array.from(form.querySelectorAll('[required]')) as HTMLInputElement[];
//
//       inputs.forEach(input => {
//         input.dataset.required = '';
//         input.required = false;
//
//         // TODO Менять атрибут type у полей по словарю
//         // email -> text
//         // datetime -> text
//
//         if (input.type === 'email') {
//           input.type = 'text';
//         }
//       });
//     });
//
//     document.addEventListener('focus', documentFocusHandler);
//     document.addEventListener('blur', documentBlurHandler);
//     document.addEventListener('input', documentInputHandler);
//     document.addEventListener('change', documentChangeHandler);
//     document.addEventListener('submit', documentSubmitHandler);
//   }
//
//   function destroy() {
//     const forms = Array.from(document.forms);
//     forms.forEach(form => {
//       const inputs = Array.from(form.querySelectorAll('[data-required]')) as HTMLInputElement[];
//
//       inputs.forEach(input => {
//         input.required = true;
//       });
//     });
//
//     document.addEventListener('focus', documentFocusHandler);
//     document.addEventListener('blur', documentBlurHandler);
//     document.addEventListener('input', documentInputHandler);
//     document.addEventListener('change', documentChangeHandler);
//     document.addEventListener('submit', documentSubmitHandler);
//   }
//
//   return {
//     init,
//     destroy,
//     isFormValid: _isFormValid,
//     validate,
//     reset,
//     getFormData,
//     createError
//   };
// }
class Form extends models_1.AppModule {
    constructor() {
        super();
    }
    init() {
        super.init();
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/components/modal/Modal.ts":
/*!***************************************!*\
  !*** ./src/components/modal/Modal.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Modal = void 0;
const models_1 = __webpack_require__(/*! @/assets/models */ "./src/assets/models/index.ts");
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');
    document.body.append(overlay);
    return overlay;
}
function createModal(content, id) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.dataset.modal = id;
    modal.innerHTML = `
      <div class="modal__content" data-modal-content>
          <div class="modal__close" data-modal-close>
            <svg viewBox="0 0 20 20" id="burger-close-desktop" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.378 16.957L3 4.32 4.293 3l12.379 12.637z"></path>
              <path d="M3 15.637L15.378 3l1.293 1.32L4.293 16.958z"></path>
            </svg>
          </div>
  
          <div class="modal__content-header"></div>
  
          <div class="modal__content-body" data-modal-content>
              ${content}
          </div>
      </div>
    `;
    document.body.append(modal);
}
function showModal(id) {
    const selector = `[data-modal="${id}"]`;
    const modal = document.querySelector(selector);
    if (!modal)
        return;
    modal.classList.add('modal_open');
    setTimeout(() => {
        modal.classList.add('modal_visible');
    }, 300);
    return modal;
}
function hideModal(modal) {
    modal.classList.remove('modal_visible');
    setTimeout(() => {
        modal.classList.remove('modal_open');
    }, 200);
}
function showOverlay(overlay) {
    overlay.classList.add('modal-overlay_open');
    setTimeout(() => {
        overlay.classList.add('modal-overlay_visible');
    }, 300);
}
function hideOverlay(overlay) {
    overlay.classList.remove('modal-overlay_visible');
    setTimeout(() => {
        overlay.classList.remove('modal-overlay_open');
    }, 500);
}
// const Modal = (type = 'default') => {
//   const _type = type;
//   let _modal = null;
//   let _overlay: HTMLElement | null = null;
//   let _isOpen = false;
//
//   const overlay = document.querySelector('[data-modal-overlay]');
//   if (!overlay) {
//     _overlay = createOverlay();
//   } else {
//     _overlay = overlay as HTMLElement;
//   }
//
//   function open(id: string) {
//     /* TODO
//       Проверить существует ли модалки и попробовать ее получение из ajax, из атрибута
//       data-modal-content // Строка
//       data-modal-content-ajax // Урл запроса для ajax
//       data-modal-content-base64 // Строка base64. Разобрать и вывести в контент
//       Добавить событие открытия
//       Добавить событие закрытия
//      */
//
//     if (_type === 'default') {
//       showOverlay(_overlay!);
//     }
//
//     _modal = showModal(id);
//     _isOpen = true;
//   }
//
//   function close(item: HTMLElement) {
//     hideModal(item);
//
//     setTimeout(() => {
//       if (_type === 'default') {
//         hideOverlay(_overlay!);
//       }
//
//       _isOpen = false;
//     }, 200);
//   }
//
//   function closeAll() {
//     const selector = `[data-modal]`;
//     const modals = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
//
//     modals.forEach(item => {
//       close(item);
//       enablePageScroll(item);
//     });
//
//     clearQueueScrollLocks();
//   }
//
//   function documentClickHandler(e: MouseEvent) {
//     const target = e.target as HTMLElement;
//
//     if (_isOpen) {
//       // Close all modals
//       const currentModal = target.closest('[data-modal-content]') as HTMLElement;
//       const closeBtn = target.closest('[data-modal-close]') as HTMLElement;
//
//       if (!currentModal || closeBtn) {
//         closeAll();
//         _isOpen = false;
//       }
//
//       clearQueueScrollLocks();
//       enablePageScroll(currentModal);
//     } else {
//       const modalTrigger = target.closest('[data-modal-open]') as HTMLElement;
//
//       if (!modalTrigger) return;
//
//       // Open modal
//       const modalId = modalTrigger.dataset.modalOpen;
//       if (modalId) {
//         open(modalId);
//
//         disablePageScroll();
//         _isOpen = true;
//       }
//     }
//   }
//
//   function documentKeyupHandler(e: KeyboardEvent) {
//     if (e.key === 'Escape') {
//       closeAll();
//       _isOpen = false;
//     }
//   }
//
//   function init() {
//     document.addEventListener('click', documentClickHandler);
//     document.addEventListener('keyup', documentKeyupHandler);
//   }
//
//   function destroy() {
//     document.removeEventListener('click', documentClickHandler);
//     document.removeEventListener('keyup', documentKeyupHandler);
//   }
//
//   return {
//     open,
//     close,
//     init,
//     destroy,
//     createModal,
//     modal: _modal,
//     isOpen: _isOpen
//   };
// };
class Modal extends models_1.AppModule {
    constructor() {
        super();
    }
    init() {
        super.init();
    }
}
exports.Modal = Modal;


/***/ }),

/***/ "./node_modules/web-vitals/dist/web-vitals.js":
/*!****************************************************!*\
  !*** ./node_modules/web-vitals/dist/web-vitals.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCLS": function() { return /* binding */ h; },
/* harmony export */   "getFCP": function() { return /* binding */ d; },
/* harmony export */   "getFID": function() { return /* binding */ L; },
/* harmony export */   "getLCP": function() { return /* binding */ F; },
/* harmony export */   "getTTFB": function() { return /* binding */ P; }
/* harmony export */ });
var e,t,n,i,r=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},o=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},u=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},c=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},f=-1,s=function(){return"hidden"===document.visibilityState?0:1/0},m=function(){o((function(e){var t=e.timeStamp;f=t}),!0)},v=function(){return f<0&&(f=s(),m(),u((function(){setTimeout((function(){f=s(),m()}),0)}))),{get firstHiddenTime(){return f}}},d=function(e,t){var n,i=v(),o=r("FCP"),f=function(e){"first-contentful-paint"===e.name&&(m&&m.disconnect(),e.startTime<i.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)))},s=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],m=s?null:a("paint",f);(s||m)&&(n=c(e,o,t),s&&f(s),u((function(i){o=r("FCP"),n=c(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-i.timeStamp,n(!0)}))}))})))},p=!1,l=-1,h=function(e,t){p||(d((function(e){l=e.value})),p=!0);var n,i=function(t){l>-1&&e(t)},f=r("CLS",0),s=0,m=[],v=function(e){if(!e.hadRecentInput){var t=m[0],i=m[m.length-1];s&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(s+=e.value,m.push(e)):(s=e.value,m=[e]),s>f.value&&(f.value=s,f.entries=m,n())}},h=a("layout-shift",v);h&&(n=c(i,f,t),o((function(){h.takeRecords().map(v),n(!0)})),u((function(){s=0,l=-1,f=r("CLS",0),n=c(i,f,t)})))},T={passive:!0,capture:!0},y=new Date,g=function(i,r){e||(e=r,t=i,n=new Date,w(removeEventListener),E())},E=function(){if(t>=0&&t<n-y){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+t};i.forEach((function(e){e(r)})),i=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){g(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,T),removeEventListener("pointercancel",i,T)};addEventListener("pointerup",n,T),addEventListener("pointercancel",i,T)}(t,e):g(t,e)}},w=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,T)}))},L=function(n,f){var s,m=v(),d=r("FID"),p=function(e){e.startTime<m.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),s(!0))},l=a("first-input",p);s=c(n,d,f),l&&o((function(){l.takeRecords().map(p),l.disconnect()}),!0),l&&u((function(){var a;d=r("FID"),s=c(n,d,f),i=[],t=-1,e=null,w(addEventListener),a=p,i.push(a),E()}))},b={},F=function(e,t){var n,i=v(),f=r("LCP"),s=function(e){var t=e.startTime;t<i.firstHiddenTime&&(f.value=t,f.entries.push(e),n())},m=a("largest-contentful-paint",s);if(m){n=c(e,f,t);var d=function(){b[f.id]||(m.takeRecords().map(s),m.disconnect(),b[f.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0})})),o(d,!0),u((function(i){f=r("LCP"),n=c(e,f,t),requestAnimationFrame((function(){requestAnimationFrame((function(){f.value=performance.now()-i.timeStamp,b[f.id]=!0,n(!0)}))}))}))}},P=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))};


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/scripts/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map
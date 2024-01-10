(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_chat_chat_module_ts"],{

/***/ 90714:
/*!***************************************************!*\
  !*** ./src/app/pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPageRoutingModule: () => (/* binding */ ChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page */ 28945);




const routes = [{
  path: '',
  component: _chat_page__WEBPACK_IMPORTED_MODULE_0__.ChatPage
}];
let ChatPageRoutingModule = class ChatPageRoutingModule {};
ChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ChatPageRoutingModule);

/***/ }),

/***/ 34803:
/*!*******************************************!*\
  !*** ./src/app/pages/chat/chat.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPageModule: () => (/* binding */ ChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ 90714);
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page */ 28945);







let ChatPageModule = class ChatPageModule {};
ChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatPageRoutingModule],
  declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_1__.ChatPage]
})], ChatPageModule);

/***/ }),

/***/ 28945:
/*!*****************************************!*\
  !*** ./src/app/pages/chat/chat.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatPage: () => (/* binding */ ChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.page.html?ngResource */ 6948);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.page.scss?ngResource */ 15616);
/* harmony import */ var _chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 58335);






let ChatPage = class ChatPage {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.chat = "https://chat.chatra.io/?isModern=true#hostId=WsCwNXHL8qFQnNjAK&mode=widget&clientId=euM9flGpSq8KsU6Q7HvAf2DrH6o8iBIs0KTYWJDW&lang=es&currentPage=https%3A%2F%2Flideart.com.mx%2F&currentPageTitle=Lideart&prevPage=&referrer=";
  }
  ngOnInit() {
    this.urlsafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.chat);
  }
  chatea() {
    _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
      url: this.chat
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
  }];
};
ChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-chat',
  template: _chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChatPage);

/***/ }),

/***/ 69143:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 58335:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Browser: () => (/* binding */ Browser)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 78626);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 69143);

const Browser = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Browser', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_browser_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 44060)).then(m => new m.BrowserWeb())
});



/***/ }),

/***/ 15616:
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-button {
  --box-shadow: transparent !important;
}

button {
  background-color: transparent !important;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

ion-searchbar {
  --icon-color: #1ca3c9;
  width: 95%;
  margin-left: 10px;
}

.search-container {
  width: 90vw;
  right: 5vw;
  height: auto;
  max-height: 50vh;
  overflow-y: scroll;
  position: absolute;
  z-index: 99;
}

.line-filter {
  text-align: center;
  line-height: 20px;
  background: #70c2d1;
  padding: 0;
  margin: 0;
}

.header-ios ion-toolbar:last-of-type {
  --border-width: 0;
}

.header-translucent-ios ion-toolbar {
  --opacity: 1;
}

ion-card-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

ion-card-content {
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.textito {
  height: 150px;
}

.textis {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1em 0em;
}
.textis img {
  width: 40%;
  height: auto;
}
.textis span {
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 0.2em;
}

.chatbut {
  position: absolute;
  width: 12em;
  height: 2.5em;
  left: calc(50% - 6em);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f707e;
  box-shadow: inset 0px 0px 40px 2px #00d9ff, inset 0px 0px 10px 1px #fff;
  border-radius: 10em;
  color: #89cfdc;
  margin-top: 0.5em;
  font-weight: 600;
  font-size: 1.1em;
  letter-spacing: 1px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/chat/chat.page.scss"],"names":[],"mappings":"AACA;EACI,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE,iBAAA;AAAJ;;AAEE;EACE,YAAA;AACJ;;AAIA;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;AADF;;AAKA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EAEA,uBAAA;AAHF;;AAOA;EACE,aAAA;AAJF;;AAOA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;AAJF;AAME;EACE,UAAA;EACA,YAAA;AAJJ;AAOE;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;AALJ;;AASA;EACE,kBAAA;EACA,WAAA;EACA,aAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;EACA,uEAAA;EAEA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAPF","sourcesContent":["\nion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n    z-index: 99;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n\n\n\nion-card-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  \n}\n\nion-card-content {\n  width: 100%;\n  height:auto;\n  overflow: hidden;\n  \n  text-overflow: ellipsis;\n  \n}\n\n.textito{\n  height: 150px;\n}\n\n.textis{\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 1em 0em;\n\n  img{\n    width: 40%;\n    height: auto;\n  }\n\n  span{\n    font-size: 1.1em;\n    font-weight: 600;\n    margin-top: .2em;\n  }\n}\n\n.chatbut{\n  position: absolute;\n  width: 12em;\n  height: 2.5em;\n  left: calc(50% - 6em);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1f707e;\n  box-shadow: inset 0px 0px 40px 2px #00d9ff,\n              inset 0px 0px 10px 1px #fff;\n  border-radius: 10em;\n  color: #89cfdc;\n  margin-top: .5em;\n  font-weight: 600;\n  font-size: 1.1em;\n  letter-spacing: 1px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6948:
/*!******************************************************!*\
  !*** ./src/app/pages/chat/chat.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Chat\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n\n  </div>\n</ion-header>\n\n<ion-content> \n<!--<input type=\"image\" height=\"auto\" width=\"100%\" src=\"/assets/img/chat.PNG\" (click)=\"chatea()\">-->\n  \n<div class=\"textis\">\n  <img src=\"assets/img/lideart_logo.png\" alt=\"\">\n  <span>¡Chatea con nosotros!</span>\n</div>\n\n<div class=\"chatbut\" (click)=\"chatea()\">\n  Click aquí\n</div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_chat_chat_module_ts.js.map
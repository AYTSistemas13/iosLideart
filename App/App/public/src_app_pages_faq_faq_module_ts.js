(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_faq_faq_module_ts"],{

/***/ 75772:
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageRoutingModule: () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 64193);




const routes = [{
  path: '',
  component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
}];
let FaqPageRoutingModule = class FaqPageRoutingModule {};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], FaqPageRoutingModule);

/***/ }),

/***/ 49257:
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPageModule: () => (/* binding */ FaqPageModule),
/* harmony export */   LazyLoadImageHooks: () => (/* binding */ LazyLoadImageHooks)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 75772);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 64193);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 21935);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 54267);









class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.IntersectionObserverHooks {
  setup(attributes) {
    attributes.defaultImagePath = '../../assets/lideart_icon.png';
    return super.setup(attributes);
  }
}
let FaqPageModule = class FaqPageModule {};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__.SweetAlert2Module],
  declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage],
  providers: [{
    provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LAZYLOAD_IMAGE_HOOKS,
    useClass: LazyLoadImageHooks
  }]
})], FaqPageModule);

/***/ }),

/***/ 64193:
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqPage: () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page.html?ngResource */ 28953);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss?ngResource */ 2925);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let FaqPage = class FaqPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-faq',
  template: _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FaqPage);

/***/ }),

/***/ 2925:
/*!****************************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `img.ng-lazyloaded {
  animation: fadein 1.5s;
}

ion-button {
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
}

.line-filter {
  text-align: center;
  line-height: 20px;
  background: #70c2d1;
  padding: 0;
  margin: 0;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.header-ios ion-toolbar:last-of-type {
  --border-width: 0;
}

.header-translucent-ios ion-toolbar {
  --opacity: 1;
}

ion-img::part(image) {
  width: 100px;
  height: 30px;
}

.redes img {
  height: 30px;
  width: 30px;
}

.redes {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.marcas img {
  height: 150px;
  width: 150px;
  text-align: center;
  margin: 0px;
}

.marcas {
  text-align: center;
}

.bottomBanner img {
  height: auto;
  width: 100%;
}

.imagensita {
  height: auto !important;
  width: auto !important;
}

.catT {
  width: 100%;
  height: auto;
  background-color: rgb(11, 148, 240);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.catT ion-text {
  color: #fff;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.marcasT {
  width: 100%;
  height: auto;
  background-color: rgb(11, 148, 240);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.marcasT ion-text {
  color: #fff;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.foot {
  width: 100%;
  height: auto;
  background-color: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
}
.foot ion-text {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Test Infinite */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-9000px);
  }
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 200px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider::before, .slider::after {
  background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 200px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 100s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18000px;
}
.slider .slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 250px;
  padding: 1rem;
}
.slider .slide img {
  width: 80%;
  height: auto;
}

.texto-azul {
  text-align: center;
  color: #1ca3c9;
  font-size: 24px;
}

.texto-azul2 {
  text-align: center;
  color: #43d0f7;
  font-size: 21px;
}

.regular-text {
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: lighter;
}

.center-rows {
  text-align: center;
  align-items: center;
  align-content: center;
}

.boton {
  color: pink;
  text-align: center;
  align-items: center;
  align-content: center;
}

.bottom-Border {
  border-bottom: 1px solid #333;
  left: 0;
  right: 0;
  width: 350px;
  margin: 0 auto;
  top: 40px;
  box-shadow: 1px 6px 9px #888888;
}

.corners1 {
  border-radius: 12px;
  background: #ffb7be;
  color: #fff;
  margin: auto;
  width: 80%;
  padding: 30px;
}

.corners2 {
  border-radius: 12px;
  background: #ffb193;
  color: #fff;
  margin: auto;
  width: 80%;
  padding: 30px;
}

.header {
  text-align: center;
  color: #43a0f7;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/faq/faq.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;;AAIE;EACE,YAAA;AADJ;;AAIE;EACA,YAAA;EACA,YAAA;AADF;;AAKE;EACC,YAAA;EACA,WAAA;AAFH;;AAKE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAME;EACE,kBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;AAHJ;;AAME;EACE,uBAAA;EACA,sBAAA;AAHJ;;AAME;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHJ;AAKI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAHN;;AAOE;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;AAMI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAJN;;AAQE;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;AALJ;AAOI;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AALN;;AASE,kBAAA;AAQA;EACI;IAAK,wBAAA;EAZT;EAaI;IAAO,8BAAA;EAVX;AACF;AAcE;EACI,iBAAA;EACA,iDAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACF,aAAA;EACA,uBAAA;EACA,mBAAA;AAZJ;AAeM;EA1BA,yFAAA;EA6BI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;AAdV;AAiBM;EACI,QAAA;EACA,MAAA;EACA,0BAAA;AAfV;AAkBM;EACI,OAAA;EACA,MAAA;AAhBV;AAmBM;EACI,sCAAA;EACA,aAAA;EACJ,uBAAA;EACA,mBAAA;EACI,cAAA;AAjBV;AAqBM;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACI,aAAA;EACA,YAAA;EACJ,aAAA;AAnBN;AAqBM;EACE,UAAA;EACA,YAAA;AAnBR;;AAyBE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAtBJ;;AAyBE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAtBJ;;AAyBE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;AAtBJ;;AA0BE;EACE,kBAAA;EACA,mBAAA;EACA,qBAAA;AAvBJ;;AA0BE;EACE,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;AAvBJ;;AA0BE;EACE,6BAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,cAAA;EACA,SAAA;EACA,+BAAA;AAvBJ;;AA2BE;EACE,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;AAxBJ;;AA2BE;EACE,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;AAxBJ;;AA4BE;EACE,kBAAA;EACA,cAAA;AAzBJ","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 30px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n  \n  .imagensita{\n    height: auto!important;\n    width: auto!important;\n  }\n  \n  .catT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .marcasT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .foot{\n    width: 100%;\n    height: auto;\n    background-color: none;\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top: 1px solid #000;\n  \n    ion-text{\n      color: rgb(0, 0, 0);\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  /* Test Infinite */\n  @mixin white-gradient {\n      background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);\n  }\n  \n  $animationSpeed: 100s; //40s\n  \n  // Animation\n  @keyframes scroll {\n      0% { transform: translateX(0); }\n      100% { transform: translateX(calc(-250px * 36))}\n  }\n  \n  \n  // Styling\n  .slider {\n      background: white;\n      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);\n      height: 200px;\n      margin: auto;\n      overflow:hidden;\n      position: relative;\n      width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n      &::before,\n      &::after {\n          @include white-gradient;\n          content: \"\";\n          height: 200px;\n          position: absolute;\n          width: 200px;\n          z-index: 2;\n      }\n      \n      &::after {\n          right: 0;\n          top: 0;\n          transform: rotateZ(180deg);\n      }\n  \n      &::before {\n          left: 0;\n          top: 0;\n      }\n      \n      .slide-track {\n          animation: scroll $animationSpeed linear infinite;\n          display: flex;\n      justify-content: center;\n      align-items: center;\n          width: calc(250px * 72);\n      \n      }\n      \n      .slide {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n          height: 200px;\n          width: 250px;\n      padding: 1rem;\n  \n      img{\n        width: 80%;\n        height: auto;\n      }\n  \n      }\n  }\n\n  .texto-azul{\n    text-align: center;\n    color:  #1ca3c9;\n    font-size: 24px;\n  }\n\n  .texto-azul2{\n    text-align: center;\n    color:  #43d0f7;\n    font-size: 21px;\n  }\n\n  .regular-text{\n    text-align: center;\n    padding-left: 30px;\n    padding-right: 30px;\n    font-weight: lighter;\n    // font-size: 16px\n  }\n\n  .center-rows{\n    text-align: center;\n    align-items: center;\n    align-content: center;\n  }\n  \n  .boton{\n    color: pink;\n    text-align: center;\n    align-items: center;\n    align-content: center;\n  }\n\n  .bottom-Border{\n    border-bottom: 1px solid #333;\n    left: 0;\n    right: 0;\n    width: 350px;\n    margin: 0 auto;\n    top: 40px;\n    box-shadow: 1px 6px 9px #888888;\n\n  }\n\n  .corners1 {\n    border-radius: 12px;\n    background: #ffb7be;\n    color: #fff;\n    margin: auto;\n    width: 80%;\n    padding: 30px;\n        \n  }\n  .corners2 {\n    border-radius: 12px;\n    background: #ffb193;\n    color: #fff;\n    margin: auto;\n    width: 80%;\n    padding: 30px;\n        \n  }\n  \n  .header{\n    text-align: center;\n    color: #43a0f7;\n\n  }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 28953:
/*!****************************************************!*\
  !*** ./src/app/pages/faq/faq.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > FAQ\n    </ion-title>\n  \n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <H1 class=\"header\"> Preguntas Frecuentes</H1>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿En cuanto tiempo me llega mi pedido?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Buen día, los tiempos de entrega son ESTIMADOS de 4 a 5 DÍAS HÁBILES, los envíos se hacen por medio de las paqueterías ESTAFETA y PAQUETEXPRESS.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Hacen envíos a toda la republica mexicana?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Sí!</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo se aplica el código de descuento?(Aplica cuando hay códigos promocionales)</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Al momento de proceder a pagar debes de agregar de forma manual tu código de descuento para que así se te aplique tu descuento</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Facturan?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Si claro, es necesario que te registres con los datos de facturación. Al momento de agregar los datos de envío si la dirección discal es diferente te saldrá la opción para agregarla.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo solicito mi factura?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">La factura se solicita solamente al realizar tu compra, debes de registrarte con los datos de facturación, al momento de realizar tu compra te pedira la dirección de facturación</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo le hago para comprar y pasar a recogerlo?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Es necesario que agregues el artículo a tu carrito, después al proceder a pagar y agregar una dirección con CP de Chihuahua te dará la opción de recoger en sucursal. Una vez realizada la compra debes de esperar un mínimo de 2 horas para recoger el material.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Puedo hacer compras a meses sin intereses?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Buen día, si puedes hacerlo, en nuestra página en compras mayores a $3,000 aplica hasta 3 meses sin intereses con Paypal y tarjeta de crédito.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cuál sería el costo de envío?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Buen día, el costo de envío depende del CP y del artículo a adquirir (peso del paquete), en compras mayores a $2,000 el envío aplica como gratis.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo puedo pagar por paypal?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Seleccionando la opción de pago con paypal en el cobro de sus productos.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong>¿Tienen sucursal?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">No, somos una tienda Online. Nuestro almacén se encuentra en Ciudad Chihuahua. Tenemos envíos a toda la republica méxicana. Es necesario que realices la compra directamente en la página para agregar datos de envío.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong>Ya hice mi transferencia y aun aparece como pago en espera</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Para poder hacer valido el pago es necesario que envies tu comprobante de pago como se te indica en condiciones de pago y en el correo de confirmación de pedido. Una vez enviando el comprobante de pago como se indica, verificamos pago y procedemos a aplicarlo en tu compra</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Hola, Me gustaría saber el costo de envio a ****, ***?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Para saber el precio del envío es necesario que agregues los artículos a tu carrito de compra, al darle click para ver tu carrito de compra te aparecerá precio de envío</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Puedo hacer compras a meses sin intereses?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Buen día, si puedes hacerlo, en nuestra página en compras mayores a $3,000 aplica hasta 3 meses sin intereses con Paypal y tarjeta de crédito, debes de seleccionarlos de forma MANUAL</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Tengo un problema con mi equipo...</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Es necesario que envies tu caso a nuestra sección de soporte para que nuestro técnico pueda apoyarte, te dejo el link donde puedes levantar tu ticket https://soporte.craftroom.mx/hc/es-419</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Hice mi compra elsábado y aun no me llega mi código de rastreo</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Tenemos un horario de lunes a viernes de 8:30 a.m. a 6:00 p.m., tu envío se hace hasta el día lunes y el día martes te proporcionamos tu código de rastreo</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> En la compra de la cameo dan alguna curso para aprender a manejarla?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Si claro, proporcionamos un curso básico online. Es un curso pregrabado en un grupo privado de facebook. Al momento de llegar tu equipos lo solicitas ya sea por whatsapp o por aquí por el chat</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Sabrás cuando estará disponible? (Algun artículo agotado)</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">No tenemos una fecha estimada de llegada pero si fueras tan amable de proporcionarme tu correo y nombre para notificarte por correo cuando nos estaría llegando el artículo</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿En cuanto me sale el envío al siguiente CP?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Para saber precio del envío es necesario que agregues el artículo a tu carrito y al proceder a pagar te aparecerá el precio del envío</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cuáles tarjetas de credito aplican?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Aplican las tarjetas American Express, Master Card y Visa.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Si pago con paypal aplican los meses sin intereses</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">No, es necesario que tu tarjeta sea de crédito</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo sirven los lidepuntos?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Te dejo el link con la la guía para poder usarlos https://lideart.com.mx/content/15-guia-de-lidepuntos</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo aplico mi garantía?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Es necesario que levantes un caso en nuestra sección de soporte técnico, para que así nuestro técnico te pueda apoyar y en caso de una garantía poder aplicarla. Te dejo link donde puedes levantar tu caso: https://soporte.lideart.com.mx/hc/es-419/requests/new</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Me lo pueden enviar en fin de semana?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">No,  Tenemos un horario de lunes a viernes de 8:30 a.m. a 6:00 p.m., tu envío se hace hasta el día lunes y el día martes te proporcionamos tu código de rastreo</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Dónde puedo reportar un problema con mi maquina?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Es necesario que envies tu caso a nuestra sección de soporte para que nuestro técnico pueda apoyarte, te dejo el link donde puedes levantar tu ticket https://soporte.lideart.com.mx/hc/es-419/requests/new</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Ya vencio mi garantía ¿Con quien puedo llevar mi maquina para que la reparen?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Hola por el momento no contamos con algun servicio de reparación. Te recomendamos enviarlo con algun técnico de tu confianza</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Hola ¿Qué horario tienen?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Tenemos un horario de lunes a viernes de 8:30 a.m. a 6:00 p.m.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo puedo ser subdistribuidor?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Serías tan amable de llenar la siguiente información de este  formulario:https://lideart.com.mx/content/13-tiendas-autorizadas</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo funcionan los lidepuntos?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Te dejo el link con la la guía para poder usarlos https://lideart.com.mx/content/15-guia-de-lidepuntos</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿A donde envío mi comprobante de pago?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Para poder hacer valido el pago es necesario que envies tu comprobante de pago como se te indica en condiciones de pago y en el correo de confirmación de pedido. Una vez enviando el comprobante de pago como se indica, verificamos pago y procedemos a aplicarlo en tu compra</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Venden repuestos para mi maquina? // Venden refacciones para los equipos?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! No por el momento no vendemos refacciones para los equipos</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo le hago para buscar el foil? / ¿Venden foil? / ¿Tienes foil?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Si claro, en nuestro buscador puedes poner papel foil y te apareceran los papel foil que manejamos</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Qué viniles manejan?/¿Que viniles tienen?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Tenemos una gran variedad de viniles ya sean de corte o textiles, así los puedes buscar en nuestra página como: Vinil de corte o Vinil textil</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Que diferencia hay entre Silhouette y Cricut?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Depende mucho el trabajo que deseas hacer. La explore air 2, Explore 3 y la Joy te ayudan a cortar y dibujar mientras la Maker y Maker 3 te hacen esos trabajos y adicional tienen mas herramientas y técnicas de trabajar como lo son grabado, repujado, doblado, entre otras funciones. Mientras Que Cameo 4 y Portrait  te ayudan a cortar, dibujar y marcar doblados,  el equipo Curio te hace eso y adicionar hace trabajos de punteado y repujado.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Si hago hoy la compra ¿Cuándo llega?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Si realizas la compra el día de hoy antes de als 2:00 p.m. el envío se hace hoy mismo, si la compra la realizas despues de las 2:00 p.m. el envío se hace hasta el día de mañana.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Tienen envío express?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">No, los tiempos de envío de manejamos son de 4 a 5 días hábiles.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Puedo cambiar el color *Un equipo*?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Puedes agregar en comentarios de tu compra el color que desees, se tomara en cuenta pero no se asegura ya que depende de disponibilidad.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Puedo agregar mas productos?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! SI ya realizaste el pago no es posible. Es necesario que realices otra compra</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Compre el sabado /domingo y no me han mandado el código de rastreo</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Nuestros horarios son de LUNES A VIERNES de 8:30 a.m. a 6:00 p.m. serías tan amable de proporcionarme la referencia de ti pedido para verificar el estatus</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> si quiero recoger en la sucursal debo hacer el pedido primero con ustedes o puedo ir directamente a solo comprarlo</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">La compra se hace directamente en la página, una vez realizada la compra debes de esperar un mínimo de 2 horas para pasar a recogerlo al almacén (si se paga con trasferencia bancaría debes de esperar 2 horas después de haber enviado el comprobante de pago). Cualquier duda quedo a la orden :)</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Solicito una cotización </strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Si deseas la cotización dirigida a un persona o empresa es necesario que nos envíes foto del artículo que deseas cotizar y tus datos fiscales al correo contacto@lideart.com.mx. En caso de que no la requieras así puedes ir agregando los artículos a tu carrito y podrás ir viendo el total a pagar</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿A que hora me llega la guía?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">\"¡Hola!\n        los envíos se hacen por medio de las paqueterías ESTAFETA y PAQUETEXPRESS.\n        La guía de envía de 24 a 48 horas despues de que haces tu compra.\"</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> Quiero regresar lo que compre</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Es necesario que cuando te llegue el kit lo regreses a nuestro almacén (la guía de regreso correo por tu cuenta) y en cuanto nos llegue con gusto hacemos la devolución. Para que sea valida la devolución el artículo debe de estar totalmente nuevo y sin abrir te proporciono la dirección para que puedas hacer el envío  Av. Washington No. 3701 Edificio 48 Parque Industrial de las Américas, 31114 Chihuahua (En avance)</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo selecciono los meses sin intereses?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Debes de procedes a pagar, agregar los datos de tu tarjeta de crédito y despues seleccionar de forma manual los meses sin intereses</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo puedo comprar un curso/licencia?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Para hacer la compra es necesario que agregues los artículos que deseas comprar a tu carrito una vez seleccionado lo que quieras comprar, y el las próximas 24 horas hábiles te estará llegando el código de tu curso/licencia</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Cómo le hago para comprar y pasar a recogerlo?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">Es necesario que agregues el artículo a tu carrito, después al proceder a pagar y agregar una dirección con CP de Chihuahua te dará la opción de recoger en sucursal. Una vez realizada la compra debes de esperar un mínimo de 2 horas para recoger el material. Su tu pago es con transferencia debes de esperar las 2 horas despues de haber enviado tu comproabnte de pago</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n  <ion-accordion-group style=\"padding: 0px 30px 5px 30px;\">\n    <ion-accordion value=\"firstA\" toggleIcon=\"add-outline\" toggleIconSlot=\"end\">\n      <ion-item style=\"border-radius: 10px;\" slot=\"header\" color=\"lightblue\">\n        <p> <strong> ¿Qué tarjetas manejan?</strong> </p>\n      </ion-item>\n      <div class=\"ion-padding\" slot=\"content\">¡Hola! Para realizar un pago a meses sin intereses tu tarjeta debe de ser tarjeta de crédito (Visa, master card y americanexpress), debes de agregar tus datos de la tarjeta y despues se te agregará una opción para agregar las mensualidades y debes seleccionarlo de forma MANUAL para que se puedan aplicar.</div>\n    </ion-accordion>\n  </ion-accordion-group>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faq_faq_module_ts.js.map
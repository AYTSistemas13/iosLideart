(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_lidepuntos_lidepuntos_module_ts"],{

/***/ 85853:
/*!***************************************************************!*\
  !*** ./src/app/pages/lidepuntos/lidepuntos-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LidepuntosPageRoutingModule: () => (/* binding */ LidepuntosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _lidepuntos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lidepuntos.page */ 6828);




const routes = [{
  path: '',
  component: _lidepuntos_page__WEBPACK_IMPORTED_MODULE_0__.LidepuntosPage
}];
let LidepuntosPageRoutingModule = class LidepuntosPageRoutingModule {};
LidepuntosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LidepuntosPageRoutingModule);

/***/ }),

/***/ 43025:
/*!*******************************************************!*\
  !*** ./src/app/pages/lidepuntos/lidepuntos.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoadImageHooks: () => (/* binding */ LazyLoadImageHooks),
/* harmony export */   LidepuntosPageModule: () => (/* binding */ LidepuntosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _lidepuntos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lidepuntos-routing.module */ 85853);
/* harmony import */ var _lidepuntos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lidepuntos.page */ 6828);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ 21935);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 54267);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);










class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.IntersectionObserverHooks {
  setup(attributes) {
    attributes.defaultImagePath = '../../assets/lideart_icon.png';
    return super.setup(attributes);
  }
}
let LidepuntosPageModule = class LidepuntosPageModule {};
LidepuntosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _lidepuntos_routing_module__WEBPACK_IMPORTED_MODULE_0__.LidepuntosPageRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImageModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__.SweetAlert2Module, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_lidepuntos_page__WEBPACK_IMPORTED_MODULE_1__.LidepuntosPage],
  providers: [{
    provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LAZYLOAD_IMAGE_HOOKS,
    useClass: LazyLoadImageHooks
  }]
})], LidepuntosPageModule);

/***/ }),

/***/ 6828:
/*!*****************************************************!*\
  !*** ./src/app/pages/lidepuntos/lidepuntos.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LidepuntosPage: () => (/* binding */ LidepuntosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _lidepuntos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lidepuntos.page.html?ngResource */ 25837);
/* harmony import */ var _lidepuntos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lidepuntos.page.scss?ngResource */ 13817);
/* harmony import */ var _lidepuntos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lidepuntos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let LidepuntosPage = class LidepuntosPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
LidepuntosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-lidepuntos',
  template: _lidepuntos_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lidepuntos_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LidepuntosPage);

/***/ }),

/***/ 13817:
/*!******************************************************************!*\
  !*** ./src/app/pages/lidepuntos/lidepuntos.page.scss?ngResource ***!
  \******************************************************************/
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
  color: #000;
}

.center-rows {
  text-align: center;
  align-items: center;
  align-content: center;
  color: #000;
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

.lidepuntosDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.lidepuntosDesk .conten-cont {
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .lidepuntosDesk {
    display: flex;
  }
  .texto-azul-desk {
    text-align: center;
    color: #1ca3c9;
    font-size: 1.7em;
  }
}
.lidepuntosDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.lidepuntosDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/lidepuntos/lidepuntos.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;;AAIE;EACE,YAAA;AADJ;;AAIE;EACA,YAAA;EACA,YAAA;AADF;;AAKE;EACC,YAAA;EACA,WAAA;AAFH;;AAKE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAME;EACE,kBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;AAHJ;;AAME;EACE,uBAAA;EACA,sBAAA;AAHJ;;AAME;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHJ;AAKI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAHN;;AAOE;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;AAMI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAJN;;AAQE;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;AALJ;AAOI;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AALN;;AASE,kBAAA;AAQA;EACI;IAAK,wBAAA;EAZT;EAaI;IAAO,8BAAA;EAVX;AACF;AAcE;EACI,iBAAA;EACA,iDAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACF,aAAA;EACA,uBAAA;EACA,mBAAA;AAZJ;AAeM;EA1BA,yFAAA;EA6BI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;AAdV;AAiBM;EACI,QAAA;EACA,MAAA;EACA,0BAAA;AAfV;AAkBM;EACI,OAAA;EACA,MAAA;AAhBV;AAmBM;EACI,sCAAA;EACA,aAAA;EACJ,uBAAA;EACA,mBAAA;EACI,cAAA;AAjBV;AAqBM;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACI,aAAA;EACA,YAAA;EACJ,aAAA;AAnBN;AAqBM;EACE,UAAA;EACA,YAAA;AAnBR;;AAyBE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAtBJ;;AAyBE;EACE,kBAAA;EACA,cAAA;EACA,eAAA;AAtBJ;;AAyBE;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EAEA,WAAA;AAvBJ;;AA0BE;EACE,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,WAAA;AAvBJ;;AA0BE;EACE,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;AAvBJ;;AA0BE;EACE,6BAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,cAAA;EACA,SAAA;EACA,+BAAA;AAvBJ;;AA2BE;EACE,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;AAxBJ;;AA4BA;EACE,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;AAzBF;;AA6BA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AA1BF;AA4BE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;AA1BJ;;AA8BA;EACE;IACE,aAAA;EA3BF;EA8BA;IACE,aAAA;EA5BF;EA+BA;IACE,aAAA;EA7BF;EAgCA;IACE,kBAAA;IACA,cAAA;IACA,gBAAA;EA9BF;AACF;AAiCA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AA/BF;;AAkCA;EACE,iDAAA;EAEA,aAAA;AAhCF","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 30px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n  \n  .imagensita{\n    height: auto!important;\n    width: auto!important;\n  }\n  \n  .catT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .marcasT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .foot{\n    width: 100%;\n    height: auto;\n    background-color: none;\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top: 1px solid #000;\n  \n    ion-text{\n      color: rgb(0, 0, 0);\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  /* Test Infinite */\n  @mixin white-gradient {\n      background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);\n  }\n  \n  $animationSpeed: 100s; //40s\n  \n  // Animation\n  @keyframes scroll {\n      0% { transform: translateX(0); }\n      100% { transform: translateX(calc(-250px * 36))}\n  }\n  \n  \n  // Styling\n  .slider {\n      background: white;\n      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);\n      height: 200px;\n      margin: auto;\n      overflow:hidden;\n      position: relative;\n      width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n      &::before,\n      &::after {\n          @include white-gradient;\n          content: \"\";\n          height: 200px;\n          position: absolute;\n          width: 200px;\n          z-index: 2;\n      }\n      \n      &::after {\n          right: 0;\n          top: 0;\n          transform: rotateZ(180deg);\n      }\n  \n      &::before {\n          left: 0;\n          top: 0;\n      }\n      \n      .slide-track {\n          animation: scroll $animationSpeed linear infinite;\n          display: flex;\n      justify-content: center;\n      align-items: center;\n          width: calc(250px * 72);\n      \n      }\n      \n      .slide {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n          height: 200px;\n          width: 250px;\n      padding: 1rem;\n  \n      img{\n        width: 80%;\n        height: auto;\n      }\n  \n      }\n  }\n\n  .texto-azul{\n    text-align: center;\n    color:  #1ca3c9;\n    font-size: 24px;\n  }\n\n  .texto-azul2{\n    text-align: center;\n    color:  #43d0f7;\n    font-size: 21px;\n  }\n\n  .regular-text{\n    text-align: center;\n    padding-left: 30px;\n    padding-right: 30px;\n    font-weight: lighter;\n    // font-size: 16px\n    color: #000;\n  }\n\n  .center-rows{\n    text-align: center;\n    align-items: center;\n    align-content: center;\n    color: #000;\n  }\n  \n  .boton{\n    color: pink;\n    text-align: center;\n    align-items: center;\n    align-content: center;\n  }\n\n  .bottom-Border{\n    border-bottom: 1px solid #333;\n    left: 0;\n    right: 0;\n    width: 350px;\n    margin: 0 auto;\n    top: 40px;\n    box-shadow: 1px 6px 9px #888888;\n\n  }\n\n  .corners1 {\n    border-radius: 12px;\n    background: #ffb7be;\n    color: #fff;\n    margin: auto;\n    width: 80%;\n    padding: 30px;\n        \n  }\n\n.corners2 {\n  border-radius: 12px;\n  background: #ffb193;\n  color: #fff;\n  margin: auto;\n  width: 80%;\n  padding: 30px;\n      \n}\n\n.lidepuntosDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow-y: scroll;\n\n  .conten-cont{\n    width: 50em;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 3em 0em;\n  }\n}\n\n@media(min-width: 992px){\n  ion-header{\n    display: none;\n  }\n\n  ion-content{\n    display: none;\n  }\n\n  .lidepuntosDesk{\n    display: flex;\n  }\n\n  .texto-azul-desk{\n    text-align: center;\n    color: #1ca3c9;\n    font-size: 1.7em;\n  }\n}\n\n.lidepuntosDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.lidepuntosDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25837:
/*!******************************************************************!*\
  !*** ./src/app/pages/lidepuntos/lidepuntos.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Lidepuntos\n    </ion-title>\n  \n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<section class=\"lidepuntosDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"conten-cont\">\n    <p class=\"texto-azul-desk\">¿Qué son los <strong><br> LIDEPUNTOS?</strong></p>\n    <p class=\"regular-text\">Son puntos acumulativos que puedes obtener al hacer tus compras en la tienda Lideart y canjear por descuentos en tus próximas compras. <br> <br> Ademas puedes obtener puntos siguiendonos en nuestras redes sociales, y el día de tu cumpleaños recibe puntos de regalo.</p>\n    <p class=\"texto-azul\">¿Cuáles beneficios obtengo con los <strong> <br> LIDEPUNTOS? </strong></p>\n    <P class=\"regular-text\">Al realizar compras en la tienda Lideart obtienes LIDEPUNTOS de acuerdo al monto comprado, y en tus próximas compras tienes la libertad de hacer uso\n      de tus LIDEPUNTOS para obtener descuentos, entre mas compres, mas LIDEPUNTOS obtienes y mas descuentos obtienes.</P>\n    <p class=\"texto-azul2\"> <img src=\"/assets/img/LidePuntos/MN.png\" alt=\"\"> <br> \n      Cada peso comprado ES UN LIDEPUNTO  </p>\n    <p class=\"texto-azul\"> ¿Qué descuentos obtengo?</p>\n    <p class=\"regular-text\"><strong>10,000 LIDEPUNTOS =</strong> <br> Al 5% de descuento de tu compra</p>\n    <p class=\"regular-text\"><strong>30,000 LIDEPUNTOS =</strong> <br> Al 10% de descuento de tu compra</p>\n    <p class=\"texto-azul\">¿Como obtengo los <strong> <br> LIDEPUNTOS?</strong></p>\n    <p class=\"regular-text\">Es muy fácil obtener LIDEPUNTOS te decimos como a continuacion:</p>\n\n    <div class=\"grida1\" style=\"width: 100%; height: auto; display: flex; flex-direction: column; justify-content: flex-start; align-items: center; gap: 1em;\">\n      <div class=\"line\" style=\"width: 20em; height: auto; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1em;\">\n        <img class=\"center-rows\" src=\"/assets/img/LidePuntos/FB.png\" alt=\"\" style=\"width: 5em; height: auto;\">\n        <span style=\"color: #000;\"><strong> Compártenos en Facebook</strong> <br> y obtén 50 LIDEPUNTOS</span>\n      </div>\n      <div class=\"line\" style=\"width: 20em; height: auto; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1em;\">\n        <img class=\"center-rows\" src=\"/assets/img/LidePuntos/IG.png\" alt=\"\" style=\"width: 5em; height: auto;\">\n        <span style=\"color: #000;\"><strong> Compártenos en Instagram</strong> <br> y obtén 20 LIDEPUNTOS</span>\n      </div>\n      <div class=\"line\" style=\"width: 20em; height: auto; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1em;\">\n        <img class=\"center-rows\" src=\"/assets/img/LidePuntos/Like.png\" alt=\"\" style=\"width: 5em; height: auto;\">\n        <span style=\"color: #000;\"><strong> Danos like en Facebook </strong> <br> y obtén 50 LIDEPUNTOS</span>\n      </div>\n      <div class=\"line\" style=\"width: 20em; height: auto; display: flex; flex-direction: row; justify-content: center; align-items: center; gap: 1em;\">\n        <img class=\"center-rows\" src=\"/assets/img/LidePuntos/BD.png\" alt=\"\" style=\"width: 5em; height: auto;\">\n        <span style=\"color: #000;\"><strong> Si es tu cumpleaños </strong> <br> obtén 20 LIDEPUNTOS</span>\n      </div>\n    </div>\n\n    <p class=\"texto-azul\"> ¿Cómo usar los <br> <strong>LIDEPUNTOS?</strong> </p>\n    <p class=\"regular-text\">Para obtener los beneficios de los Lidepuntos deberás ingresar a tu cuenta en la pagina de <strong>lideart.com.mx</strong></p>\n\n    <div class=\"bottom-Border\"></div>\n\n    <p class=\"regular-text\">Después de ingresar a tu cuenta, podras acceder al menu de Lidepuntos que se encuentra en la parte inferior izquierda, ahi encontraras los siguientes beneficios:</p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/1.png\" alt=\"\"></ion-col>\n        </ion-col>\n        <ion-col>\n          <p class=\"texto-azul\"> Your Lidepuntos </p>\n          <p class=\"regular-text\">Es la cantidad de puntos que tienes disponibles. Si eres cliente nuevo tu registro de puntos estará vacío hasta que realices tu primera compra</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/2.png\" alt=\"\"></ion-col>\n        </ion-col>\n        <ion-col>\n          <p class=\"texto-azul\"> Next reward </p>\n          <p class=\"regular-text\">Son las recompensas que tienes disponibles para usar segun la cantidad de Lidepuntos que poseas. Al hacer click en \"Redeem\" se te otorgará un código que podrás aplicar en tu próxima orden de compra. En caso de no contar con los suficientes puntos, el botón \"Redeem\" no aparecerá.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <p class=\"corners1\"> <strong> Redeem </strong> <br> En Redeem se encuentra el codigo de descuento que podrás aplicar en tu próxima orden de compra, dando clic en \"Apply code\" o copiando directamente el código. </p>\n      <br>\n      <p class=\"corners2\"> <strong> SOLO CLIENTES CON UN MÍNIMO DE 10,000 PUNTOS PODRÁN CANJEAR </strong></p>\n      <br>\n    <div class=\"bottom-Border\"></div>\n\n    <p class=\"texto-azul\">Maneras de obtener <br> <strong> LIDEPUNTOS </strong></p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/3.png\" alt=\"\"></ion-col>\n        </ion-col>\n        <ion-col>\n          <p class=\"texto-azul\"> Ways to earn </p>\n          <p class=\"regular-text\">Esta opción muestra las maneras de obtener puntos en nuestro sistema.</p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <p class=\"texto-azul\">Place an order</p>\n    <p class=\"regular-text\">Por cada $1 de compra se te dara <strong>1 LIDEPUNTO</strong></p>\n    <p class=\"texto-azul\">Celebrate a Birthday</p>\n    <p class=\"regular-text\">En tu cumpleaños obtén <strong>20 LIDEPUNTOS</strong></p>\n    <p class=\"texto-azul\">Follow on Instagram</p>\n    <p class=\"regular-text\">Sigue nuestro Instagram y obtén <strong>20 LIDEPUNTOS</strong></p>\n    <p class=\"texto-azul\">Follow on Facebook</p>\n    <p class=\"regular-text\">Sigue nuestra fanpage y obtén <strong>50 LIDEPUNTOS</strong></p>\n    <p class=\"texto-azul\">Share on Facebook</p>\n    <p class=\"regular-text\">Comparte nuestra fanpage y obtén <strong>50 LIDEPUNTOS</strong></p>\n\n    <div class=\"bottom-Border\"></div>\n\n    <p class=\"texto-azul\"> recompensas con tus <br> <strong> LIDEPUNTOS </strong> </p>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/4.png\" alt=\"\"></ion-col>\n        </ion-col>\n        <ion-col>\n          <p class=\"texto-azul\"> Ways to Redeem </p>\n          <p class=\"regular-text\">Esta opción te muestra las recompensas que puedes obtener con tus puntos.</p>\n        </ion-col>\n      </ion-row>\n      <img style=\"width: 20em; height: auto;\" src=\"/assets/img/LidePuntos/Lidepuntos.png\" alt=\"\">\n      <p class=\"corners2\"> <strong> EN ESTE CASO SÓLO HAY RECOMPENSAS AL CANJEAR 10,000 Y 30,000 LIDEPUNTOS </strong></p>\n    </ion-grid>\n\n    <p class=\"texto-azul\">Aplicación de código <br><strong>DE DESCUENTO</strong></p>\n    <p class=\"texto-azul\"> Apply code</p>\n    <p class=\"regular-text\">Al hacer clic en \"Apply code\" este se aplicará automáticamente en el formato de pago de la orden del cliente.</p>\n\n    <p class=\"corners2\"> Al momento de pagar, podrás ver el código aplicado, la cantidad que se descuenta y el total a pagar con IVA incluido.</p>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n  <p class=\"texto-azul\">¿Qué son los <strong><br> LIDEPUNTOS?</strong></p>\n  <p class=\"regular-text\">Son puntos acumulativos que puedes obtener al hacer tus compras en la tienda Lideart y canjear por descuentos en tus próximas compras. <br> <br> Ademas puedes obtener puntos siguiendonos en nuestras redes sociales, y el día de tu cumpleaños recibe puntos de regalo.</p>\n  <p class=\"texto-azul\">¿Cuáles beneficios obtengo con los <strong> <br> LIDEPUNTOS? </strong></p>\n  <P class=\"regular-text\">Al realizar compras en la tienda Lideart obtienes LIDEPUNTOS de acuerdo al monto comprado, y en tus próximas compras tienes la libertad de hacer uso\n    de tus LIDEPUNTOS para obtener descuentos, entre mas compres, mas LIDEPUNTOS obtienes y mas descuentos obtienes.</P>\n  <p class=\"texto-azul2\"> <img src=\"/assets/img/LidePuntos/MN.png\" alt=\"\"> <br> \n    Cada peso comprado ES UN LIDEPUNTO  </p>\n  <p class=\"texto-azul\"> ¿Qué descuentos obtengo?</p>\n  <p class=\"regular-text\"><strong>10,000 LIDEPUNTOS =</strong> <br> Al 5% de descuento de tu compra</p>\n  <p class=\"regular-text\"><strong>30,000 LIDEPUNTOS =</strong> <br> Al 10% de descuento de tu compra</p>\n  <p class=\"texto-azul\">¿Como obtengo los <strong> <br> LIDEPUNTOS?</strong></p>\n  <p class=\"regular-text\">Es muy fácil obtener LIDEPUNTOS te decimos como a continuacion:</p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col> <img class=\"center-rows\" src=\"/assets/img/LidePuntos/FB.png\" alt=\"\"></ion-col>\n      <ion-col> <p class=\"center-rows\"> <strong> Compártenos en Facebook</strong> <br> y obtén 50 LIDEPUNTOS </p></ion-col>  \n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col> <img class=\"center-rows\" src=\"/assets/img/LidePuntos/IG.png\" alt=\"\"></ion-col>\n      <ion-col> <p class=\"center-rows\"> <strong> Compártenos en Instagram</strong> <br> y obtén 20 LIDEPUNTOS </p></ion-col>  \n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col> <img class=\"center-rows\" src=\"/assets/img/LidePuntos/Like.png\" alt=\"\"></ion-col>\n      <ion-col> <p class=\"center-rows\"> <strong> Danos like en Facebook </strong> <br> y obtén 50 LIDEPUNTOS </p></ion-col>  \n      <ion-col></ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col> <img class=\"center-rows\" src=\"/assets/img/LidePuntos/BD.png\" alt=\"\"></ion-col>\n      <ion-col> <p class=\"center-rows\"> <strong> Si es tu cumpleaños </strong> <br> obtén 20 LIDEPUNTOS </p></ion-col>  \n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p class=\"texto-azul\"> ¿Cómo usar los <br> <strong>LIDEPUNTOS?</strong> </p>\n  <p class=\"regular-text\">Para obtener los beneficios de los Lidepuntos deberás ingresar a tu cuenta en la pagina de <strong>lideart.com.mx</strong></p>\n\n  <div class=\"bottom-Border\"></div>\n\n  <p class=\"regular-text\">Después de ingresar a tu cuenta, podras acceder al menu de Lidepuntos que se encuentra en la parte inferior izquierda, ahi encontraras los siguientes beneficios:</p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/1.png\" alt=\"\"></ion-col>\n      </ion-col>\n      <ion-col>\n        <p class=\"texto-azul\"> Your Lidepuntos </p>\n        <p class=\"regular-text\">Es la cantidad de puntos que tienes disponibles. Si eres cliente nuevo tu registro de puntos estará vacío hasta que realices tu primera compra</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/2.png\" alt=\"\"></ion-col>\n      </ion-col>\n      <ion-col>\n        <p class=\"texto-azul\"> Next reward </p>\n        <p class=\"regular-text\">Son las recompensas que tienes disponibles para usar segun la cantidad de Lidepuntos que poseas. Al hacer click en \"Redeem\" se te otorgará un código que podrás aplicar en tu próxima orden de compra. En caso de no contar con los suficientes puntos, el botón \"Redeem\" no aparecerá.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n     <p class=\"corners1\"> <strong> Redeem </strong> <br> En Redeem se encuentra el codigo de descuento que podrás aplicar en tu próxima orden de compra, dando clic en \"Apply code\" o copiando directamente el código. </p>\n     <br>\n     <p class=\"corners2\"> <strong> SOLO CLIENTES CON UN MÍNIMO DE 10,000 PUNTOS PODRÁN CANJEAR </strong></p>\n     <br>\n  <div class=\"bottom-Border\"></div>\n\n  <p class=\"texto-azul\">Maneras de obtener <br> <strong> LIDEPUNTOS </strong></p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/3.png\" alt=\"\"></ion-col>\n      </ion-col>\n      <ion-col>\n        <p class=\"texto-azul\"> Ways to earn </p>\n        <p class=\"regular-text\">Esta opción muestra las maneras de obtener puntos en nuestro sistema.</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p class=\"texto-azul\">Place an order</p>\n  <p class=\"regular-text\">Por cada $1 de compra se te dara <strong>1 LIDEPUNTO</strong></p>\n  <p class=\"texto-azul\">Celebrate a Birthday</p>\n  <p class=\"regular-text\">En tu cumpleaños obtén <strong>20 LIDEPUNTOS</strong></p>\n  <p class=\"texto-azul\">Follow on Instagram</p>\n  <p class=\"regular-text\">Sigue nuestro Instagram y obtén <strong>20 LIDEPUNTOS</strong></p>\n  <p class=\"texto-azul\">Follow on Facebook</p>\n  <p class=\"regular-text\">Sigue nuestra fanpage y obtén <strong>50 LIDEPUNTOS</strong></p>\n  <p class=\"texto-azul\">Share on Facebook</p>\n  <p class=\"regular-text\">Comparte nuestra fanpage y obtén <strong>50 LIDEPUNTOS</strong></p>\n\n  <div class=\"bottom-Border\"></div>\n\n  <p class=\"texto-azul\"> recompensas con tus <br> <strong> LIDEPUNTOS </strong> </p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-col> <img style=\"padding: 15%; align-items: center;\" src=\"/assets/img/LidePuntos/4.png\" alt=\"\"></ion-col>\n      </ion-col>\n      <ion-col>\n        <p class=\"texto-azul\"> Ways to Redeem </p>\n        <p class=\"regular-text\">Esta opción te muestra las recompensas que puedes obtener con tus puntos.</p>\n      </ion-col>\n    </ion-row>\n    <img style=\"width: 100%; padding: 45px;\" src=\"/assets/img/LidePuntos/Lidepuntos.png\" alt=\"\">\n    <p class=\"corners2\"> <strong> EN ESTE CASO SÓLO HAY RECOMPENSAS AL CANJEAR 10,000 Y 30,000 LIDEPUNTOS </strong></p>\n  </ion-grid>\n\n  <p class=\"texto-azul\">Aplicación de código <br><strong>DE DESCUENTO</strong></p>\n  <p class=\"texto-azul\"> Apply code</p>\n  <p class=\"regular-text\">Al hacer clic en \"Apply code\" este se aplicará automáticamente en el formato de pago de la orden del cliente.</p>\n\n  <p class=\"corners2\"> Al momento de pagar, podrás ver el código aplicado, la cantidad que se descuenta y el total a pagar con IVA incluido.</p>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_lidepuntos_lidepuntos_module_ts.js.map
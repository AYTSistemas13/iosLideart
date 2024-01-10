(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_promociones_promociones_module_ts"],{

/***/ 56886:
/*!*****************************************************************!*\
  !*** ./src/app/pages/promociones/promociones-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromocionesPageRoutingModule: () => (/* binding */ PromocionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _promociones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promociones.page */ 37781);




const routes = [{
  path: '',
  component: _promociones_page__WEBPACK_IMPORTED_MODULE_0__.PromocionesPage
}];
let PromocionesPageRoutingModule = class PromocionesPageRoutingModule {};
PromocionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PromocionesPageRoutingModule);

/***/ }),

/***/ 49447:
/*!*********************************************************!*\
  !*** ./src/app/pages/promociones/promociones.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyLoadImageHooks: () => (/* binding */ LazyLoadImageHooks),
/* harmony export */   PromocionesPageModule: () => (/* binding */ PromocionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _promociones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promociones-routing.module */ 56886);
/* harmony import */ var _promociones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promociones.page */ 37781);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-lazyload-image */ 21935);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 54267);









class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.IntersectionObserverHooks {
  setup(attributes) {
    attributes.defaultImagePath = '../../assets/lideart_icon.png';
    return super.setup(attributes);
  }
}
let PromocionesPageModule = class PromocionesPageModule {};
PromocionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _promociones_routing_module__WEBPACK_IMPORTED_MODULE_0__.PromocionesPageRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LazyLoadImageModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_8__.SweetAlert2Module],
  declarations: [_promociones_page__WEBPACK_IMPORTED_MODULE_1__.PromocionesPage],
  providers: [{
    provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_2__.LAZYLOAD_IMAGE_HOOKS,
    useClass: LazyLoadImageHooks
  }]
})], PromocionesPageModule);

/***/ }),

/***/ 37781:
/*!*******************************************************!*\
  !*** ./src/app/pages/promociones/promociones.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromocionesPage: () => (/* binding */ PromocionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _promociones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promociones.page.html?ngResource */ 38568);
/* harmony import */ var _promociones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promociones.page.scss?ngResource */ 29964);
/* harmony import */ var _promociones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_promociones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let PromocionesPage = class PromocionesPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
PromocionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-promociones',
  template: _promociones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_promociones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PromocionesPage);

/***/ }),

/***/ 29964:
/*!********************************************************************!*\
  !*** ./src/app/pages/promociones/promociones.page.scss?ngResource ***!
  \********************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/promociones/promociones.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;;AAIE;EACE,YAAA;AADJ;;AAIE;EACA,YAAA;EACA,YAAA;AADF;;AAKE;EACC,YAAA;EACA,WAAA;AAFH;;AAKE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAME;EACE,kBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;AAHJ;;AAME;EACE,uBAAA;EACA,sBAAA;AAHJ;;AAME;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAHJ;AAKI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAHN;;AAOE;EACE,WAAA;EACA,YAAA;EACA,mCAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;AAMI;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AAJN;;AAQE;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;AALJ;AAOI;EACE,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;AALN;;AASE,kBAAA;AAQA;EACI;IAAK,wBAAA;EAZT;EAaI;IAAO,8BAAA;EAVX;AACF;AAcE;EACI,iBAAA;EACA,iDAAA;EACA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACF,aAAA;EACA,uBAAA;EACA,mBAAA;AAZJ;AAeM;EA1BA,yFAAA;EA6BI,WAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;AAdV;AAiBM;EACI,QAAA;EACA,MAAA;EACA,0BAAA;AAfV;AAkBM;EACI,OAAA;EACA,MAAA;AAhBV;AAmBM;EACI,sCAAA;EACA,aAAA;EACJ,uBAAA;EACA,mBAAA;EACI,cAAA;AAjBV;AAqBM;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACI,aAAA;EACA,YAAA;EACJ,aAAA;AAnBN;AAqBM;EACE,UAAA;EACA,YAAA;AAnBR","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 30px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n  \n  .imagensita{\n    height: auto!important;\n    width: auto!important;\n  }\n  \n  .catT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .marcasT{\n    width: 100%;\n    height: auto;\n    background-color: rgb(11, 148, 240);\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  \n    ion-text{\n      color: #fff;\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  .foot{\n    width: 100%;\n    height: auto;\n    background-color: none;\n    margin-top: .5rem;\n    margin-bottom: .5rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-top: 1px solid #000;\n  \n    ion-text{\n      color: rgb(0, 0, 0);\n      font-size: 1.2rem;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n  }\n  \n  /* Test Infinite */\n  @mixin white-gradient {\n      background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);\n  }\n  \n  $animationSpeed: 100s; //40s\n  \n  // Animation\n  @keyframes scroll {\n      0% { transform: translateX(0); }\n      100% { transform: translateX(calc(-250px * 36))}\n  }\n  \n  \n  // Styling\n  .slider {\n      background: white;\n      box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);\n      height: 200px;\n      margin: auto;\n      overflow:hidden;\n      position: relative;\n      width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n      &::before,\n      &::after {\n          @include white-gradient;\n          content: \"\";\n          height: 200px;\n          position: absolute;\n          width: 200px;\n          z-index: 2;\n      }\n      \n      &::after {\n          right: 0;\n          top: 0;\n          transform: rotateZ(180deg);\n      }\n  \n      &::before {\n          left: 0;\n          top: 0;\n      }\n      \n      .slide-track {\n          animation: scroll $animationSpeed linear infinite;\n          display: flex;\n      justify-content: center;\n      align-items: center;\n          width: calc(250px * 72);\n      \n      }\n      \n      .slide {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n          height: 200px;\n          width: 250px;\n      padding: 1rem;\n  \n      img{\n        width: 80%;\n        height: auto;\n      }\n  \n      }\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38568:
/*!********************************************************************!*\
  !*** ./src/app/pages/promociones/promociones.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Promociones\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n          <div class=\"cardContainer\">\n            <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/1 Blog.png\" width=\"95%\" height=\"280px\" \n               />\n            </button>\n          </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/blog/1 Blog.png\" width=\"95%\" height=\"280px\"\n             />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/blog/1 Blog.png\" width=\"95%\" height=\"280px\"\n            />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/blog/1 Blog.png\" width=\"95%\" height=\"280px\"\n            />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_promociones_promociones_module_ts.js.map
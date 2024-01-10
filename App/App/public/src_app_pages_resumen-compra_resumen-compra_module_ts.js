(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resumen-compra_resumen-compra_module_ts"],{

/***/ 51166:
/*!***********************************************************************!*\
  !*** ./src/app/pages/resumen-compra/resumen-compra-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenCompraPageRoutingModule: () => (/* binding */ ResumenCompraPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _resumen_compra_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-compra.page */ 78346);




const routes = [{
  path: '',
  component: _resumen_compra_page__WEBPACK_IMPORTED_MODULE_0__.ResumenCompraPage
}];
let ResumenCompraPageRoutingModule = class ResumenCompraPageRoutingModule {};
ResumenCompraPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ResumenCompraPageRoutingModule);

/***/ }),

/***/ 3148:
/*!***************************************************************!*\
  !*** ./src/app/pages/resumen-compra/resumen-compra.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenCompraPageModule: () => (/* binding */ ResumenCompraPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _resumen_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-compra-routing.module */ 51166);
/* harmony import */ var _resumen_compra_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen-compra.page */ 78346);







let ResumenCompraPageModule = class ResumenCompraPageModule {};
ResumenCompraPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _resumen_compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumenCompraPageRoutingModule],
  declarations: [_resumen_compra_page__WEBPACK_IMPORTED_MODULE_1__.ResumenCompraPage]
})], ResumenCompraPageModule);

/***/ }),

/***/ 78346:
/*!*************************************************************!*\
  !*** ./src/app/pages/resumen-compra/resumen-compra.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenCompraPage: () => (/* binding */ ResumenCompraPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _resumen_compra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-compra.page.html?ngResource */ 40565);
/* harmony import */ var _resumen_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen-compra.page.scss?ngResource */ 32938);
/* harmony import */ var _resumen_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resumen_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let ResumenCompraPage = class ResumenCompraPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ResumenCompraPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-resumen-compra',
  template: _resumen_compra_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resumen_compra_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResumenCompraPage);

/***/ }),

/***/ 32938:
/*!**************************************************************************!*\
  !*** ./src/app/pages/resumen-compra/resumen-compra.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

.cont {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

ion-content {
  --ion-background-color: url('tile_background2.png')!important;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-card {
  height: auto;
  background: #14A8CD;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 1rem;
  width: 100%;
  height: auto;
}
ion-card a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #14A8CD;
  text-decoration: none;
  background: #fff;
  width: 50%;
  height: 3rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
}
ion-card a:hover {
  color: #fff;
  background: none;
  border: 2px solid #fff;
}
ion-card h1 {
  color: #fff;
  margin-bottom: 1rem;
}
ion-card p {
  color: #fff;
}
ion-card ion-item {
  --ion-item-background: none !important;
  width: 100%;
  --border-style: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}
ion-card ion-item .contR {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
ion-card ion-item ion-thumbnail {
  width: 5rem;
  height: 5rem;
}
ion-card ion-item img {
  margin-right: 10rem;
  width: 100%;
  height: auto;
}
ion-card ion-item h2 {
  color: #fff;
}
ion-card ion-item h5 {
  color: #fff;
  font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/resumen-compra/resumen-compra.page.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AACJ;;AAEA;EACI,6DAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,YAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uLAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;AACJ;AACI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,qBAAA;EACA,iBAAA;AACR;AAEI;EACI,WAAA;EACA,gBAAA;EACA,sBAAA;AAAR;AAGI;EACI,WAAA;EACA,mBAAA;AADR;AAII;EACI,WAAA;AAFR;AAKI;EACI,sCAAA;EACA,WAAA;EACA,oBAAA;EACA,6BAAA;EACA,sBAAA;EACA,mBAAA;AAHR;AAKQ;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;AAHZ;AAMQ;EACI,WAAA;EACA,YAAA;AAJZ;AAOQ;EACI,mBAAA;EACA,WAAA;EACA,YAAA;AALZ;AAQQ;EACI,WAAA;AANZ;AASQ;EACI,WAAA;EACA,eAAA;AAPZ","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n}\n\n.cont{ \n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\nion-content{\n    --ion-background-color: url('../../../assets/img/tile_background2.png')!important; //rgb(189, 193, 194) !important\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nion-card{\n    height: auto;\n    background: #14A8CD;//     #fdfdfd            #14A8CD\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    padding: 1rem;\n    width: 100%;\n    height: auto;\n\n    a{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #14A8CD;\n        text-decoration: none;\n        background: #fff;\n        width: 50%;\n        height: 3rem;\n        border-radius: .5rem;\n        font-size: 1.2rem;\n    }\n\n    a:hover{\n        color: #fff;\n        background: none;\n        border: 2px solid #fff;\n    }\n\n    h1{\n        color: #fff;\n        margin-bottom: 1rem;\n    }\n\n    p{\n        color: #fff;\n    }\n\n    ion-item{\n        --ion-item-background: none !important;\n        width: 100%;\n        --border-style: none;\n        border-bottom: 1px solid #fff;\n        padding-bottom: .5rem;\n        margin-bottom: 1rem;\n\n        .contR{\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            width: 100%;\n        }\n\n        ion-thumbnail{\n            width: 5rem;\n            height: 5rem;\n        }\n\n        img{\n            margin-right: 10rem;\n            width: 100%;\n            height: auto;\n        }\n\n        h2{\n            color: #fff;\n        }\n\n        h5{\n            color: #fff;\n            font-size: 1rem;\n        }\n    }\n\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40565:
/*!**************************************************************************!*\
  !*** ./src/app/pages/resumen-compra/resumen-compra.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Resumen de Compra\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n\n  </div>\n</ion-header>\n\n<ion-content>\n  \n  <div class=\"cont\">\n    \n    <ion-card>\n\n      <h1>Resumen de compra</h1>\n      \n      <ion-item>\n\n        <div class=\"contR\">\n\n          <ion-thumbnail slot=\"start\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Producto 1</h2>\n            <p>5 items</p>\n          </ion-label>\n          <h5 fill=\"outline\" slot=\"end\">$ 60</h5><!--fill=\"outline\" slot=\"end\"-->\n\n        </div>\n\n      </ion-item>\n\n      <ion-item>\n\n        <div class=\"contR\">\n\n          <ion-thumbnail slot=\"start\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Producto 2</h2>\n            <p>2 items</p>\n          </ion-label>\n          <h5 fill=\"outline\" slot=\"end\">$ 30</h5><!--fill=\"outline\" slot=\"end\"-->\n\n        </div>\n\n      </ion-item>\n\n      <ion-item>\n\n        <div class=\"contR\">\n\n          <ion-thumbnail slot=\"start\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2>Producto 3</h2>\n            <p>5 items</p>\n          </ion-label>\n          <h5 fill=\"outline\" slot=\"end\">$ 100</h5><!--fill=\"outline\" slot=\"end\"-->\n\n        </div>\n\n      </ion-item>\n\n      <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Aceptar</a>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resumen-compra_resumen-compra_module_ts.js.map
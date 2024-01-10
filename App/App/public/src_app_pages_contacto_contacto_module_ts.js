(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_contacto_contacto_module_ts"],{

/***/ 90555:
/*!***********************************************************!*\
  !*** ./src/app/pages/contacto/contacto-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactoPageRoutingModule: () => (/* binding */ ContactoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacto.page */ 77102);




const routes = [{
  path: '',
  component: _contacto_page__WEBPACK_IMPORTED_MODULE_0__.ContactoPage
}];
let ContactoPageRoutingModule = class ContactoPageRoutingModule {};
ContactoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ContactoPageRoutingModule);

/***/ }),

/***/ 94889:
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactoPageModule: () => (/* binding */ ContactoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacto-routing.module */ 90555);
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacto.page */ 77102);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let ContactoPageModule = class ContactoPageModule {};
ContactoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactoPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_1__.ContactoPage]
})], ContactoPageModule);

/***/ }),

/***/ 77102:
/*!*************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactoPage: () => (/* binding */ ContactoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _contacto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacto.page.html?ngResource */ 99976);
/* harmony import */ var _contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacto.page.scss?ngResource */ 91679);
/* harmony import */ var _contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let ContactoPage = class ContactoPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
ContactoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-contacto',
  template: _contacto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContactoPage);

/***/ }),

/***/ 91679:
/*!**************************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.contactoDesk {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.contactoDesk .deskcont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2.5em;
}
.contactoDesk .deskcont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactoDesk .deskcont .taitl-cont .taitl {
  color: #00a3c7;
  font-size: 1.7em;
  font-weight: 100;
}
.contactoDesk .deskcont .desk-info {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.contactoDesk .deskcont .desk-info .info-cont {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6em;
}
.contactoDesk .deskcont .desk-info .info-cont .titulo-contin {
  color: #dd6469;
  font-size: 1.39em;
}
.contactoDesk .deskcont .desk-info .info-cont .partin {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.1em;
}
.contactoDesk .deskcont .desk-info .info-cont .partin .sub-titles {
  color: #e46668;
  font-weight: 600;
  font-size: 0.94em;
}
.contactoDesk .deskcont .desk-info .info-cont .partin .info {
  color: #000;
  font-size: 0.9em;
}
.contactoDesk .deskcont .desk-info form {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2em;
  border-left: 1px solid #e46668;
  padding-left: 1em;
  border-left-style: dashed;
}
.contactoDesk .deskcont .desk-info form .part {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.contactoDesk .deskcont .desk-info form .part .line-txt {
  color: #532d2d;
  font-weight: 600;
  font-size: 0.9em;
  padding-left: 1em;
}
.contactoDesk .deskcont .desk-info form .part .inp {
  width: 100%;
  height: 2.7em;
  padding: 0em 1em;
  background-color: #fff;
  border: 1px solid #e46668;
  border-radius: 2em;
  color: #000;
  font-size: 0.9em;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
.contactoDesk .deskcont .desk-info form .part .inp:focus {
  outline: none;
}
.contactoDesk .deskcont .desk-info form .part .tarea {
  width: 100%;
  padding: 1em;
  background-color: #fff;
  border: 1px solid #e46668;
  border-radius: 1em 0em 0em 1em;
  color: #000;
  font-size: 0.9em;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
.contactoDesk .deskcont .desk-info form .part .tarea:focus {
  outline: none;
}

@media (min-width: 992px) {
  ion-content {
    display: none;
  }
}
.home-desk-cont::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.home-desk-cont::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/contacto/contacto.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACZ;AACY;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AAChB;AAGQ;EACI,UAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;EACA,QAAA;AADZ;AAGY;EACI,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AADhB;AAGgB;EACI,cAAA;EACA,iBAAA;AADpB;AAIgB;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AAFpB;AAIoB;EACI,cAAA;EACA,gBAAA;EACA,iBAAA;AAFxB;AAKoB;EACI,WAAA;EACA,gBAAA;AAHxB;AAQY;EACI,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,QAAA;EACA,8BAAA;EACA,iBAAA;EACA,yBAAA;AANhB;AAQgB;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AANpB;AAQoB;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;AANxB;AASoB;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,wLAAA;AAPxB;AAUoB;EACI,aAAA;AARxB;AAWoB;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,8BAAA;EACA,WAAA;EACA,gBAAA;EACA,wLAAA;AATxB;AAYoB;EACI,aAAA;AAVxB;;AAkBA;EACI;IACI,aAAA;EAfN;AACF;AAkBA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AAhBJ;;AAmBA;EACI,iDAAA;EAEA,aAAA;AAjBJ","sourcesContent":[".contactoDesk{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: scroll;\n\n    .deskcont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 2.5em;\n\n        .taitl-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n    \n            .taitl{\n                color: #00a3c7;\n                font-size: 1.7em;\n                font-weight: 100;\n            }\n        }\n\n        .desk-info{\n            width: 90%;\n            height: auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: 1em;\n\n            .info-cont{\n                width: 50%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: flex-start;\n                gap: .6em;\n\n                .titulo-contin{\n                    color: #dd6469;\n                    font-size: 1.39em;\n                }\n\n                .partin{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: flex-start;\n                    align-items: flex-start;\n                    gap: 0.1em;\n\n                    .sub-titles{\n                        color: #e46668;\n                        font-weight: 600;\n                        font-size: .94em;\n                    }\n    \n                    .info{\n                        color: #000;\n                        font-size: .9em;\n                    }\n                }\n            }\n\n            form{\n                width: 50%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: flex-start;\n                gap: 2em;\n                border-left: 1px solid #e46668;\n                padding-left: 1em;\n                border-left-style: dashed;\n\n                .part{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: flex-start;\n                    align-items: flex-start;\n                    gap: .5em;\n\n                    .line-txt{\n                        color: #532d2d;\n                        font-weight: 600;\n                        font-size: 0.9em;\n                        padding-left: 1em;\n                    }\n\n                    .inp{\n                        width: 100%;\n                        height: 2.7em;\n                        padding: 0em 1em;\n                        background-color: #fff;\n                        border: 1px solid #e46668;\n                        border-radius: 2em;\n                        color: #000;\n                        font-size: .9em;\n                        box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;\n                    }\n\n                    .inp:focus{\n                        outline: none;\n                    }\n\n                    .tarea{\n                        width: 100%;\n                        padding: 1em;\n                        background-color: #fff;\n                        border: 1px solid #e46668;\n                        border-radius: 1em 0em 0em 1em;\n                        color: #000;\n                        font-size: .9em;\n                        box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;\n                    }\n\n                    .tarea:focus{\n                        outline: none;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-content{\n        display: none;\n    }\n}\n\n.home-desk-cont::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n\n.home-desk-cont::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99976:
/*!**************************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"contactoDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"deskcont\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Ponte en contacto con nosotros.</span>\n    </div>\n    <div class=\"desk-info\">\n      <div class=\"info-cont\">\n        <span class=\"titulo-contin\">En Lideart estamos para servirle. <i class=\"fa-solid fa-heart fa-beat\"></i></span>\n        <div class=\"partin\">\n          <span class=\"sub-titles\">Horario de atención</span>\n          <span class=\"sub-titles\">Lunes a Viernes</span>\n          <span class=\"info\">8:00 am - 6:00 pm</span>\n        </div>\n        <div class=\"partin\">\n          <span class=\"sub-titles\">Sábados</span>\n          <span class=\"info\">CERRADO</span>\n          <span class=\"info\">**Horario del estado de Chihuahua Chih. Mx.</span>\n        </div>\n        <div class=\"partin\">\n          <span class=\"sub-titles\">Teléfono</span>\n          <span class=\"info\">(614) 432-61-22</span>\n        </div>\n        <div class=\"partin\">\n          <span class=\"sub-titles\">Whatsapp</span>\n          <span class=\"info\">(614) 605-12-78</span>\n        </div>\n        <div class=\"partin\">\n          <span class=\"sub-titles\">Correo electrónico de contacto</span>\n          <span class=\"info\">contacto@lideart.com.mx</span>\n        </div>\n      </div>\n      <form>\n        <div class=\"part\">\n          <span class=\"line-txt\">Nombre (requerido)</span>\n          <input type=\"text\" class=\"inp\">\n        </div>\n        <div class=\"part\">\n          <span class=\"line-txt\">Correo electrónico (requerido)</span>\n          <input type=\"text\" class=\"inp\">\n        </div>\n        <div class=\"part\">\n          <span class=\"line-txt\">Número telefónico (requerido)</span>\n          <input type=\"text\" class=\"inp\">\n        </div>\n        <div class=\"part\">\n          <span class=\"line-txt\">Mensaje</span>\n          <textarea class=\"tarea\" name=\"\" id=\"\" cols=\"30\" rows=\"3\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_contacto_contacto_module_ts.js.map
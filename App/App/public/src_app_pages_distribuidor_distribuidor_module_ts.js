(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_distribuidor_distribuidor_module_ts"],{

/***/ 11879:
/*!*******************************************************************!*\
  !*** ./src/app/pages/distribuidor/distribuidor-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistribuidorPageRoutingModule: () => (/* binding */ DistribuidorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _distribuidor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distribuidor.page */ 64890);




const routes = [{
  path: '',
  component: _distribuidor_page__WEBPACK_IMPORTED_MODULE_0__.DistribuidorPage
}];
let DistribuidorPageRoutingModule = class DistribuidorPageRoutingModule {};
DistribuidorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DistribuidorPageRoutingModule);

/***/ }),

/***/ 44874:
/*!***********************************************************!*\
  !*** ./src/app/pages/distribuidor/distribuidor.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistribuidorPageModule: () => (/* binding */ DistribuidorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _distribuidor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distribuidor-routing.module */ 11879);
/* harmony import */ var _distribuidor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribuidor.page */ 64890);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let DistribuidorPageModule = class DistribuidorPageModule {};
DistribuidorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _distribuidor_routing_module__WEBPACK_IMPORTED_MODULE_0__.DistribuidorPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_distribuidor_page__WEBPACK_IMPORTED_MODULE_1__.DistribuidorPage]
})], DistribuidorPageModule);

/***/ }),

/***/ 64890:
/*!*********************************************************!*\
  !*** ./src/app/pages/distribuidor/distribuidor.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DistribuidorPage: () => (/* binding */ DistribuidorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _distribuidor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distribuidor.page.html?ngResource */ 88403);
/* harmony import */ var _distribuidor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distribuidor.page.scss?ngResource */ 51747);
/* harmony import */ var _distribuidor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_distribuidor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let DistribuidorPage = class DistribuidorPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
DistribuidorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-distribuidor',
  template: _distribuidor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_distribuidor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DistribuidorPage);

/***/ }),

/***/ 51747:
/*!**********************************************************************!*\
  !*** ./src/app/pages/distribuidor/distribuidor.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.distribuidorDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  gap: 1em;
}
.distribuidorDesk .dist-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
}
.distribuidorDesk .dist-cont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.distribuidorDesk .dist-cont .taitl-cont .taitl {
  color: #00a3c7;
  font-weight: 100;
  font-size: 2em;
}
.distribuidorDesk .dist-cont .info-cont {
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.distribuidorDesk .dist-cont .info-cont img {
  width: 100%;
  height: auto;
}
.distribuidorDesk .dist-cont .info-cont .inf {
  color: #000;
  font-size: 0.95em;
  font-weight: 100;
}
.distribuidorDesk .dist-cont .info-cont .cont-form {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form {
  width: 30em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .form-taitl {
  color: #111;
  font-weight: 600;
  font-size: 1.7em;
  margin: 0.5em 0em;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.4em;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin .qe {
  color: #000;
  font-weight: 100;
  font-size: 0.9em;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin input {
  width: 100%;
  height: 2.5em;
  padding: 0em 1em;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #00a3c7;
  color: #000;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin textarea {
  width: 100%;
  height: auto;
  resize: none;
  padding: 1em;
  background-color: #00a3c7;
  color: #fff;
  border: none;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin input:focus {
  outline: none;
}
.distribuidorDesk .dist-cont .info-cont .cont-form form .partin textarea:focus {
  outline: none;
}
.distribuidorDesk .dist-cont .info-cont .desp {
  width: 100%;
  color: #00a3c7;
  font-weight: 100;
  font-size: 1.8em;
  text-align: center;
  margin-top: 1em;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .distribuidorDesk {
    display: flex;
  }
}
.distribuidorDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.distribuidorDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/distribuidor/distribuidor.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACZ;AACY;EACI,cAAA;EACA,gBAAA;EACA,cAAA;AAChB;AAGQ;EACI,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,QAAA;AADZ;AAGY;EACI,WAAA;EACA,YAAA;AADhB;AAIY;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;AAFhB;AAKY;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAHhB;AAKgB;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AAHpB;AAKoB;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;AAHxB;AAMoB;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AAJxB;AAMwB;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;AAJ5B;AAOwB;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EACA,sBAAA;EACA,YAAA;EACA,gCAAA;EACA,WAAA;AAL5B;AAQwB;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;AAN5B;AASwB;EACI,aAAA;AAP5B;AAUwB;EACI,aAAA;AAR5B;AAcY;EACI,WAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AAZhB;;AAkBA;EACI;IACI,aAAA;EAfN;EAkBE;IACI,aAAA;EAhBN;EAmBE;IACI,aAAA;EAjBN;AACF;AAoBA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AAlBJ;;AAqBA;EACI,iDAAA;EAEA,aAAA;AAnBJ","sourcesContent":[".distribuidorDesk{\n    width: 100%;\n    height: auto;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: scroll;\n    gap: 1em;\n\n    .dist-cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 2em;\n\n        .taitl-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .taitl{\n                color: #00a3c7;\n                font-weight: 100;\n                font-size: 2em;\n            }\n        }\n\n        .info-cont{\n            width: 70%;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: 1em;\n\n            img{\n                width: 100%;\n                height: auto;\n            }\n\n            .inf{\n                color: #000;\n                font-size: .95em;\n                font-weight: 100;\n            }\n\n            .cont-form{\n                width: 100%;\n                height: auto;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                gap: 1em;\n\n                form{\n                    width: 30em;\n                    height: auto;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: flex-start;\n                    align-items: center;\n                    gap: 1em;\n\n                    .form-taitl{\n                        color: #111;\n                        font-weight: 600;\n                        font-size: 1.7em;\n                        margin: 0.5em 0em;\n                    }\n\n                    .partin{\n                        width: 100%;\n                        height: auto;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: flex-start;\n                        align-items: flex-start;\n                        gap: .4em;\n\n                        .qe{\n                            color: #000;\n                            font-weight: 100;\n                            font-size: .9em;\n                        }\n\n                        input{\n                            width: 100%;\n                            height: 2.5em;\n                            padding: 0em 1em;\n                            background-color: #fff;\n                            border: none;\n                            border-bottom: 1px solid #00a3c7;\n                            color: #000;\n                        }\n\n                        textarea{\n                            width: 100%;\n                            height: auto;\n                            resize: none;\n                            padding: 1em;\n                            background-color: #00a3c7;\n                            color: #fff;\n                            border: none;\n                        }\n\n                        input:focus{\n                            outline: none;\n                        }\n\n                        textarea:focus{\n                            outline: none;\n                        }\n                    }\n                }\n            }\n\n            .desp{\n                width: 100%;\n                color: #00a3c7;\n                font-weight: 100;\n                font-size: 1.8em;\n                text-align: center;\n                margin-top: 1em;\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-header{\n        display: none;\n    }\n\n    ion-content{\n        display: none;\n    }\n\n    .distribuidorDesk{\n        display: flex;\n    }\n}\n\n.distribuidorDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.distribuidorDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88403:
/*!**********************************************************************!*\
  !*** ./src/app/pages/distribuidor/distribuidor.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>distribuidor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<section class=\"distribuidorDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"dist-cont\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Distribuidor</span>\n    </div>\n    <div class=\"info-cont\">\n      <img src=\"https://lideart.com.mx/img/cms/tiendas-autorizadas/Banner%20subdistribuidores-01.jpg\" alt=\"\">\n      <span class=\"inf\">\n        ¡Bienvenido al emocionante mundo de las manualidades! Si estás buscando una oportunidad para hacer crecer tu negocio en el sector de las manualidades, \n        te invitamos a convertirte en nuestro subdistribuidor.\n      </span>\n      <span class=\"inf\">\n        Como subdistribuidor, tendrás acceso un gran catálogo de materiales de alta calidad, además, disfrutarás de precios especiales al comercializar nuestros \n        productos, lo que te permitirá obtener atractivas ganancias y beneficios exclusivos para subdistribuidores. También te proporcionaremos capacitación y soporte.\n      </span>\n      <span class=\"inf\">\n        ¡No esperes más para unirte a nuestro equipo de subdistribuidores Lideart!\n      </span>\n<div class=\"cont-form\">\n  <iframe src=\"https://webforms.pipedrive.com/f/1AERpEy5t2p8Ko0OBOEoDdmSbXq57CZvegZQktlfTdPfhSczDIxC0S9zTF7y0Wt7t\" height=\"900px\" width=\"500px\" frameborder=\"0\" ></iframe>\n</div>\n      <!-- <div class=\"pipedriveWebForms\" data-pd-webforms=\"https://webforms.pipedrive.com/f/1AERpEy5t2p8Ko0OBOEoDdmSbXq57CZvegZQktlfTdPfhSczDIxC0S9zTF7y0Wt7t\" style=\"text-align: center;\"></div>\n<div style=\"position: relative; display: inline-block; text-align: center;\"><img src=\"/img/cms/tiendas-autorizadas/Banner subdistribuidores-02.jpg\" style=\"max-width: 100%; width: auto; height: auto;\" /></div> -->\n      <!-- <div class=\"cont-form\">\n        <form>\n          <span class=\"form-taitl\">Ingresa tu información</span>\n          <div class=\"partin\">\n            <span class=\"qe\">Nombre de tu negocio</span>\n            <input type=\"text\">\n          </div>\n          <div class=\"partin\">\n            <span class=\"qe\">Nombre</span>\n            <input type=\"text\">\n          </div>\n          <div class=\"partin\">\n            <span class=\"qe\">Correo eléctronico</span>\n            <input type=\"text\">\n          </div>\n          <div class=\"partin\">\n            <span class=\"qe\">Teléfono (opcional)</span>\n            <input type=\"text\">\n          </div>\n          <div class=\"partin\">\n            <span class=\"qe\">Tu mensaje</span>\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"2\"></textarea>\n          </div>\n        </form>\n      </div> -->\n      <img src=\"https://lideart.com.mx/img/cms/tiendas-autorizadas/Banner%20subdistribuidores-02.jpg\" alt=\"\">\n      <span class=\"desp\">¡Ten tu propio negocio factible y exitoso!</span>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_distribuidor_distribuidor_module_ts.js.map
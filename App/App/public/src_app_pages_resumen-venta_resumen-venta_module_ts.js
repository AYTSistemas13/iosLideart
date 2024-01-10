(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resumen-venta_resumen-venta_module_ts"],{

/***/ 52060:
/*!*********************************************************************!*\
  !*** ./src/app/pages/resumen-venta/resumen-venta-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenVentaPageRoutingModule: () => (/* binding */ ResumenVentaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _resumen_venta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-venta.page */ 79689);




const routes = [{
  path: '',
  component: _resumen_venta_page__WEBPACK_IMPORTED_MODULE_0__.ResumenVentaPage
}];
let ResumenVentaPageRoutingModule = class ResumenVentaPageRoutingModule {};
ResumenVentaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ResumenVentaPageRoutingModule);

/***/ }),

/***/ 95323:
/*!*************************************************************!*\
  !*** ./src/app/pages/resumen-venta/resumen-venta.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenVentaPageModule: () => (/* binding */ ResumenVentaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _resumen_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-venta-routing.module */ 52060);
/* harmony import */ var _resumen_venta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen-venta.page */ 79689);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let ResumenVentaPageModule = class ResumenVentaPageModule {};
ResumenVentaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _resumen_venta_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResumenVentaPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_resumen_venta_page__WEBPACK_IMPORTED_MODULE_1__.ResumenVentaPage]
})], ResumenVentaPageModule);

/***/ }),

/***/ 79689:
/*!***********************************************************!*\
  !*** ./src/app/pages/resumen-venta/resumen-venta.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResumenVentaPage: () => (/* binding */ ResumenVentaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _resumen_venta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-venta.page.html?ngResource */ 86513);
/* harmony import */ var _resumen_venta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen-venta.page.scss?ngResource */ 48574);
/* harmony import */ var _resumen_venta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resumen_venta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 6138);






let ResumenVentaPage = class ResumenVentaPage {
  constructor(loginService, activatedRoute) {
    this.loginService = loginService;
    this.activatedRoute = activatedRoute;
    this.datosVenta = [];
    this.venta = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.OV = params.ov;
      this.loginService.DetalledeVenta(this.OV).subscribe(resumen => {
        this.datosVenta = resumen;
        this.venta = this.datosVenta.data;
      });
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ResumenVentaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-resumen-venta',
  template: _resumen_venta_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resumen_venta_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResumenVentaPage);

/***/ }),

/***/ 48574:
/*!************************************************************************!*\
  !*** ./src/app/pages/resumen-venta/resumen-venta.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.resumenVentaDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.resumenVentaDesk .contenido-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 1em;
}
.resumenVentaDesk .contenido-cont .ov {
  color: #00a3c7;
  font-weight: 100;
  font-size: 2.4em;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.resumenVentaDesk .contenido-cont .txt-r {
  color: #373737;
  font-size: 1.4em;
  font-weight: 100;
}
.resumenVentaDesk .contenido-cont .compra-cont {
  width: 35em;
  height: auto;
  background: #ffffff;
  border-radius: 2em;
  box-shadow: rgba(0, 163, 199, 0.41) 0px 4px 29px 0px;
  border: 1px solid rgba(0, 163, 199, 0.2117647059);
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  padding: 1.5em 2em;
}
.resumenVentaDesk .contenido-cont .compra-cont .line {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.resumenVentaDesk .contenido-cont .compra-cont .line .qe {
  color: #00a3c7;
  font-size: 0.97em;
  font-weight: 100;
  width: 30%;
}
.resumenVentaDesk .contenido-cont .compra-cont .line .result {
  color: #00a3c7;
  font-size: 0.9em;
  font-weight: 100;
  width: 70%;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .resumenVentaDesk {
    display: flex;
  }
}
.resumenVentaDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.resumenVentaDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/resumen-venta/resumen-venta.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;AACR;AACQ;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,qBAAA;AACZ;AAEQ;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AAAZ;AAGQ;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,oDAAA;EACA,iDAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,QAAA;EACA,kBAAA;AADZ;AAGY;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AADhB;AAGgB;EACI,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,UAAA;AADpB;AAIgB;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;AAFpB;;AASA;EACI;IACI,aAAA;EANN;EASE;IACI,aAAA;EAPN;EAUE;IACI,aAAA;EARN;AACF;AAWA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AATJ;;AAYA;EACI,iDAAA;EAEA,aAAA;AAVJ","sourcesContent":[".resumenVentaDesk{\n    width: 100%;\n    height: auto;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: scroll;\n\n    .contenido-cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 1em;\n\n        .ov{\n            color: #00a3c7;\n            font-weight: 100;\n            font-size: 2.4em;\n            margin-top: 0px;\n            margin-bottom: 0px;\n            margin-block-start: 0em;\n            margin-block-end: 0em;        \n        }\n\n        .txt-r{\n            color: #373737;\n            font-size: 1.4em;\n            font-weight: 100;\n        }\n\n        .compra-cont{\n            width: 35em;\n            height: auto;\n            background: #ffffff;\n            border-radius: 2em;\n            box-shadow: rgb(0 163 199 / 41%) 0px 4px 29px 0px;\n            border: 1px solid #00a3c736;\n            margin-top: 1em;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: 1em;\n            padding: 1.5em 2em;\n\n            .line{\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-start;\n                align-items: center;\n                gap: 1em;\n\n                .qe{\n                    color: #00a3c7;\n                    font-size: .97em;\n                    font-weight: 100;\n                    width: 30%;\n                }\n\n                .result{\n                    color: #00a3c7;\n                    font-size: .9em;\n                    font-weight: 100;\n                    width: 70%;\n                }\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-header{\n        display: none;\n    }\n\n    ion-content{\n        display: none;\n    }\n\n    .resumenVentaDesk{\n        display: flex;\n    }\n}\n\n.resumenVentaDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n\n.resumenVentaDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86513:
/*!************************************************************************!*\
  !*** ./src/app/pages/resumen-venta/resumen-venta.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Detalle de Venta\n    </ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<section class=\"resumenVentaDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contenido-cont\">\n    <h1 class=\"ov\">\n      Orden de Venta: {{OV}}\n    </h1>\n    <span class=\"txt-r\">\n      Resumen de Productos:\n    </span>\n    <div class=\"compra-cont\" *ngFor=\"let item of venta; let i = index\">\n      <div class=\"line\">\n        <span class=\"qe\">Nombre:</span>\n        <span class=\"result\">{{item.nombre}}</span>\n      </div>\n      <div class=\"line\">\n        <span class=\"qe\">Código:</span>\n        <span class=\"result\">{{item.id}}</span>\n      </div>\n      <div class=\"line\">\n        <span class=\"qe\">Cantidad:</span>\n        <span class=\"result\">{{item.orderedSalesQuantity}}</span>\n      </div>\n      <div class=\"line\">\n        <span class=\"qe\">Precio:</span>\n        <span class=\"result\">{{item.precioUnitarioIVA}}</span>\n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n  <h1 class=\"ion-text-center\">Orden de Venta: {{OV}} </h1>\n  <hr>\n  <h4 class=\"ion-text-center\">Resumen de Productos: </h4>\n<ion-card *ngFor=\"let item of venta; let i = index\" style=\"height: auto;\">\n  <ion-card-title class=\"ion-text-center\"></ion-card-title>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-label>Nombre: </ion-label></ion-col>\n        <ion-col><ion-label>{{item.nombre}}</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><ion-label>Código: </ion-label></ion-col>\n        <ion-col><ion-label>{{item.id}}</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><ion-label>Cantidad:</ion-label></ion-col>\n        <ion-col> <ion-label> {{item.orderedSalesQuantity}}</ion-label></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col><ion-label>Precio: </ion-label></ion-col>\n        <ion-col> <ion-label>${{item.precioUnitarioIVA }}</ion-label></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n\n</ion-card>\n \n    \n \n \n \n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resumen-venta_resumen-venta_module_ts.js.map
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_resultado-busqueda_resultado-busqueda_module_ts"],{

/***/ 98986:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/resultado-busqueda/resultado-busqueda-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultadoBusquedaPageRoutingModule: () => (/* binding */ ResultadoBusquedaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _resultado_busqueda_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultado-busqueda.page */ 15257);




const routes = [{
  path: '',
  component: _resultado_busqueda_page__WEBPACK_IMPORTED_MODULE_0__.ResultadoBusquedaPage
}];
let ResultadoBusquedaPageRoutingModule = class ResultadoBusquedaPageRoutingModule {};
ResultadoBusquedaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ResultadoBusquedaPageRoutingModule);

/***/ }),

/***/ 64689:
/*!***********************************************************************!*\
  !*** ./src/app/pages/resultado-busqueda/resultado-busqueda.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultadoBusquedaPageModule: () => (/* binding */ ResultadoBusquedaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _resultado_busqueda_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultado-busqueda-routing.module */ 98986);
/* harmony import */ var _resultado_busqueda_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resultado-busqueda.page */ 15257);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 39687);









let ResultadoBusquedaPageModule = class ResultadoBusquedaPageModule {};
ResultadoBusquedaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _resultado_busqueda_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultadoBusquedaPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule],
  declarations: [_resultado_busqueda_page__WEBPACK_IMPORTED_MODULE_1__.ResultadoBusquedaPage]
})], ResultadoBusquedaPageModule);

/***/ }),

/***/ 15257:
/*!*********************************************************************!*\
  !*** ./src/app/pages/resultado-busqueda/resultado-busqueda.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultadoBusquedaPage: () => (/* binding */ ResultadoBusquedaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _resultado_busqueda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resultado-busqueda.page.html?ngResource */ 6912);
/* harmony import */ var _resultado_busqueda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resultado-busqueda.page.scss?ngResource */ 73506);
/* harmony import */ var _resultado_busqueda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resultado_busqueda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 39687);





let ResultadoBusquedaPage = class ResultadoBusquedaPage {
  constructor() {
    this.items = [];
    this.sum = 1;
    this.resultadosBusqueda = [];
    this.resultadosBusqueda2 = [];
    this.currentItemsToShow = [];
    this.page = 1;
    this.perPage = 10;
    this.totalData = 0;
    this.totalPage = 10;
    this.tamanoLista = 0;
  }
  ngOnInit() {
    this.resultadosBusqueda = JSON.parse(localStorage.getItem('productos_buscados'));
    this.resultadosBusqueda2 = this.resultadosBusqueda;
    if (this.resultadosBusqueda != this.resultadosBusqueda2) {
      location.reload();
    } else {
      this.currentItemsToShow = this.resultadosBusqueda.slice(0, 8);
      this.tamanoLista = this.resultadosBusqueda.length;
      this.totalData = this.resultadosBusqueda.length;
    }
  }
  onPageChange($event) {
    /*this.productoService.getDescuento(jsondescuento).subscribe(resdesc =>{
        this.resdesc = resdesc;
               if (this.resdesc === 1) {
        
          this.descuentillo = false;
          this.descuento = 1;
        }else{
        
          this.descuentillo = true;
          this.descuento = this.resdesc;
          this.descuento = 1- this.descuento
        }
    });*/
    this.currentItemsToShow = this.resultadosBusqueda.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
  }
  generateItems() {
    for (let i = 0; i < 4; i++) {
      let imp = this.sum;
      if (this.sum <= this.totalData) {
        this.items.push(this.resultadosBusqueda[imp - 1]);
      }
      this.sum++;
    }
  }
  onIonInfinite(ev) {
    if (this.sum <= this.totalData) {
      this.generateItems();
    }
    setTimeout(() => {
      ev.target.complete();
    }, 500);
  }
  static #_ = this.ctorParameters = () => [];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, {
        static: true
      }]
    }]
  };
};
ResultadoBusquedaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-resultado-busqueda',
  template: _resultado_busqueda_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_resultado_busqueda_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ResultadoBusquedaPage);

/***/ }),

/***/ 73506:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/resultado-busqueda/resultado-busqueda.page.scss?ngResource ***!
  \**********************************************************************************/
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
  height: 100px;
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

ion-searchbar {
  --icon-color: #1ca3c9;
  width: 95%;
  margin-left: 10px;
}

.iconos {
  height: 13px;
  width: 13px;
  margin-left: 4px;
  margin-right: 4px;
}

.fixin {
  width: 100%;
  height: 8.5em;
  margin: 0;
  padding: 0em 0.5em;
  text-align: center;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 0.9em;
  overflow-wrap: break-word;
  overflow: hidden;
}

.catalogoDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
}
.catalogoDesk .contDesk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2em 0em;
  gap: 2em;
}
.catalogoDesk .contDesk .title-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.catalogoDesk .contDesk .title-cont h1 {
  color: #1e7285;
  font-weight: 100;
  font-size: 2.2em;
  text-align: center;
}
.catalogoDesk .contDesk .conten-cats {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}
.catalogoDesk .contDesk .conten-cats .cardin {
  width: 16em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 1em 0em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.4s all ease-in-out;
  gap: 1em;
}
.catalogoDesk .contDesk .conten-cats .cardin .cat-name {
  color: #00a3c7;
  font-weight: 100;
  text-align: center;
  padding: 0em 1em;
}
.catalogoDesk .contDesk .conten-cats .cardin .contImg {
  width: 100%;
  height: 15em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.catalogoDesk .contDesk .conten-cats .cardin .contImg img {
  width: 100%;
  max-height: 100%;
}
.catalogoDesk .contDesk .conten-cats .cardin .pric {
  color: #222;
  font-weight: 100;
  text-align: center;
  padding: 0em 1em;
}
.catalogoDesk .contDesk .conten-cats .cardin:hover {
  box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;
}

@media (min-width: 992px) {
  .display-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  ion-content {
    display: none;
  }
  ion-header {
    display: none;
  }
  .catalogoDesk {
    display: flex;
  }
}
.catalogoDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.catalogoDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/resultado-busqueda/resultado-busqueda.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;;AAIE;EACE,YAAA;AADJ;;AAIE;EACA,YAAA;EACA,aAAA;AADF;;AAKE;EACC,YAAA;EACA,WAAA;AAFH;;AAKE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAME;EACE,kBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;AAHJ;;AAME;EACI,uBAAA;EACA,sBAAA;AAHN;;AAME;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;AAHJ;;AAcA;EACE,WAAA;EACA,aAAA;EACA,SAAA;EAEA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;AAZF;;AAgBA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AAbF;AAeE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;AAbJ;AAeI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbN;AAeM;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AAbR;AAiBI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AAfN;AAiBM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EAEA,qDAAA;EACA,gCAAA;EACA,QAAA;AAhBR;AAkBQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAhBV;AAmBQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAjBV;AAmBU;EACE,WAAA;EACA,gBAAA;AAjBZ;AAqBQ;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAnBV;AAuBM;EACE,gDAAA;AArBR;;AA2BA;EACE;IACE,aAAA;IACA,qCAAA;EAxBF;EA2BA;IACE,aAAA;EAzBF;EA4BA;IACE,aAAA;EA1BF;EA6BA;IACE,aAAA;EA3BF;AACF;AA8BA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AA5BF;;AA+BA;EACE,iDAAA;EAEA,aAAA;AA7BF","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 100px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n\n  .imagensita{\n      height: auto!important;\n      width: auto!important;\n  }\n\n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n\n  .iconos{\n    height: 13px;\n    width: 13px;\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n\n\n//  .imgItem{\n//    border:2px  solid #1ca3c9;\n//    margin-left: 5px;\n//    margin-bottom: 5px;\n//  }\n\n\n.fixin{\n  width: 100%; \n  height: 8.5em;\n  margin: 0; \n  // margin-top: .4em 0; \n  padding: 0em 0.5em; \n  text-align: center;\n  text-transform: uppercase; \n  font-weight: normal; \n  font-size: .9em; \n  overflow-wrap: break-word; \n  overflow: hidden;\n \n}\n\n.catalogoDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow-y: scroll;\n\n  .contDesk{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding: 2em 0em;\n    gap: 2em;\n\n    .title-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  \n      h1{\n        color: #1e7285;\n        font-weight: 100;\n        font-size: 2.2em;\n        text-align: center;\n      }\n    }\n\n    .conten-cats{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n\n      .cardin{\n        width: 16em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n        padding: 1em 0em;\n        //border-bottom: 1px solid #0ba7c7;\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n        transition: .4s all ease-in-out;\n        gap: 1em;\n\n        .cat-name{\n          color: #00a3c7;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n\n        .contImg{\n          width: 100%;\n          height: 15em;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 1em;\n\n          img{\n            width: 100%;\n            max-height: 100%;\n          }\n        }\n\n        .pric{\n          color: #222;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n      }\n\n      .cardin:hover{\n        box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;\n      }\n    }\n  }\n}\n\n@media(min-width:992px){\n  .display-grid{\n    display: grid;\n    grid-template-columns: repeat(1,1fr);   \n  }  \n\n  ion-content{\n    display: none;\n  }\n\n  ion-header{\n    display: none;\n  }\n\n  .catalogoDesk{\n    display: flex;\n  }\n}\n\n.catalogoDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.catalogoDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6912:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/resultado-busqueda/resultado-busqueda.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Catalogo por Producto\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<section class=\"catalogoDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <div class=\"title-cont\">\n      <h1>Resultados de la Busqueda</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" *ngFor=\"let producto of currentItemsToShow\" [routerLink]=\"['/descripcion-producto',producto.id_product]\"> <!-- items -->\n        <div class=\"contImg\">\n          <img src=\"{{producto.image_producto}}\" alt=\"\">\n        </div>\n        <span class=\"cat-name\">{{producto.nombre}}</span> \n        <span class=\"pric\">{{producto.precio*1.16 | currency: '$'}} mxn</span> \n        <!-- <span class=\"pric\" *ngIf=\"producto.descuento>0\">{{(producto.precio*producto.descuento)/100 | currency: '$'}} mxn</span>  -->\n      </div>\n    </div>\n    <!-- Filters -->\n    <label for=\"d\" class=\"paginatorS\">\n      <mat-paginator (page)=\"onPageChange($event)\" [pageSize]=\"8\" [length]=\"tamanoLista\" [pageSizeOptions]=\"[8, 16, 32]\" aria-label=\"d\" showFirstLastButtons></mat-paginator>\n    </label>\n    <!-- end Filters -->\n    <!--<ion-button (click)=\"onIonInfinite($event)\" expand=\"block\">Ver Mas Productos</ion-button>-->\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content >\n<ion-grid class=\"display-grid\" >\n  <ion-row>\n  <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let producto of resultadosBusqueda\" >\n  <div style=\"padding-top: 5px;width: 270px ;margin-top: 20px;border:5px solid #fafafa; border-radius: 10px;height: 27rem; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: 'RobotoCondensed-Light'\" [routerLink]=\"['/descripcion-producto',producto.id_product]\">\n  <!--<p  style=\"width: 5em; background-color: aqua; margin-left:20px;font-size: 15px; margin-block-start: 0em; margin-block-end: 0em; padding: .5em 0em; text-align: center;\"><b></b></p>-->\n    \n    <img class=\"imgItem\" src=\"https://www.lideart.com.mx/{{producto.image_link}}\" width=\"250px\" height=\"250px\">\n    <div class=\"fixin\">{{producto.title}}</div> \n    \n\n    \n    <p class=\"ion-text-center\"><b style=\"color:#5dc0e0!important;font-size: 1.3em; font-family: 'RobotoCondensed-Light';\">${{producto.precio*1.16 | number: '1.2-2'}} mxn</b></p>\n    <!-- <ion-text slot=\"start\">Disponible</ion-text> -->\n    <!-- <ion-row> -->\n    <!-- <ion-col size=\"12\">\n      <p *ngIf=\"producto.availability<10 && producto.availability>0 \"  class=\"ion-text-center\" style=\"background-color:yellow;color:black; font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/272/272340.png\" alt=\"\"><b>Ultimas Piezas</b></p>\n      <p *ngIf=\"producto.availability==0\" class=\"ion-text-center\" style=\"background-color:rgb(255, 0, 0);color:rgb(255, 255, 255); font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-x-icon-18-256.png\" alt=\"\"><b>Agotado</b></p>\n      <p *ngIf=\"producto.availability>9\" style=\"background-color:#00d7e2!important;color:rgb(0, 0, 0); font-size: .9rem; border-radius: 15px; width: 110px;\" class=\"ion-text-center\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/60/60731.png\" alt=\"\"><b>Disponible </b></p>\n    </ion-col> -->\n    <!-- <ion-col size=\"4\">\n      <ion-button  color=\"secondary\" (click)=\"modalDescripcion(producto.id_product)\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-col> -->\n  <!-- </ion-row>  -->\n  </div>\n</ion-col>\n</ion-row>\n</ion-grid>\n  <!-- <ion-infinite-scroll *ngIf=\"page < productosCatalogo.lenght\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Mas Productos...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n  <!-- <pagination-controls (pageChange)=\"cp = $event\"></pagination-controls> -->\n  <!-- <ion-item *ngFor=\"let producto of productosCatalogo\">\n    <ion-img slot=\"start\" src=\"{{producto.image_link}}\"></ion-img>\n    <ion-text slot=\"end\" >{{producto.title}}</ion-text>\n    <ion-item>\n      <ion-label slot=\"start\">\n        $0.00 mxn\n      </ion-label>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n          \n  </ion-item> -->\n\n  <!-- FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRR -->\n\n\n\n\n<!-- Basic  f-->\n\n\n  <!-- <ion-button (click)=\"onIonInfinite($event)\" expand=\"block\">Ver Mas Productos</ion-button> -->\n\n  <ion-list></ion-list>\n\n  <!-- <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"onIonInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n<!-- <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n  <ion-infinite-scroll-content loadingText=\"Cargando Productos...\" loadingSpinner=\"bubbles\"></ion-infinite-scroll-content>\n</ion-infinite-scroll> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_resultado-busqueda_resultado-busqueda_module_ts.js.map
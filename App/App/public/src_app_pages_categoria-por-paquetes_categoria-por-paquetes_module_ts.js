(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categoria-por-paquetes_categoria-por-paquetes_module_ts"],{

/***/ 23113:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/categoria-por-paquetes/categoria-por-paquetes-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriaPorPaquetesPageRoutingModule: () => (/* binding */ CategoriaPorPaquetesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _categoria_por_paquetes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria-por-paquetes.page */ 70827);




const routes = [{
  path: '',
  component: _categoria_por_paquetes_page__WEBPACK_IMPORTED_MODULE_0__.CategoriaPorPaquetesPage
}];
let CategoriaPorPaquetesPageRoutingModule = class CategoriaPorPaquetesPageRoutingModule {};
CategoriaPorPaquetesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CategoriaPorPaquetesPageRoutingModule);

/***/ }),

/***/ 9598:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/categoria-por-paquetes/categoria-por-paquetes.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriaPorPaquetesPageModule: () => (/* binding */ CategoriaPorPaquetesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _categoria_por_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria-por-paquetes-routing.module */ 23113);
/* harmony import */ var _categoria_por_paquetes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoria-por-paquetes.page */ 70827);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let CategoriaPorPaquetesPageModule = class CategoriaPorPaquetesPageModule {};
CategoriaPorPaquetesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _categoria_por_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriaPorPaquetesPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_categoria_por_paquetes_page__WEBPACK_IMPORTED_MODULE_1__.CategoriaPorPaquetesPage]
})], CategoriaPorPaquetesPageModule);

/***/ }),

/***/ 70827:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/categoria-por-paquetes/categoria-por-paquetes.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriaPorPaquetesPage: () => (/* binding */ CategoriaPorPaquetesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _categoria_por_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoria-por-paquetes.page.html?ngResource */ 36181);
/* harmony import */ var _categoria_por_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoria-por-paquetes.page.scss?ngResource */ 11271);
/* harmony import */ var _categoria_por_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_categoria_por_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);






let CategoriaPorPaquetesPage = class CategoriaPorPaquetesPage {
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.totalItems = 0;
    this.url = "https://lideart.com.mx/img/categoria/";
    this.options = {
      // isCaseSensitive: false,
      // includeScore: false,
      shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      minMatchCharLength: 5,
      // location: 0,
      threshold: 0.5,
      distance: 60,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ['nombre']
    };
  }
  ngOnInit() {
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
  }
  openSearchBar() {
    var buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.style.display = "block";
    }
    this.txtBuscador = '';
    this.searchbarVisible = this.searchbarVisible == false ? true : false;
    if (this.searchbarVisible == false) {
      buscador.style.display = "none";
    }
  }
  search(event) {
    if (event.detail.value != '') {
      const filtro = event.target.value.trim();
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_2__.CarritoServiceService
  }];
};
CategoriaPorPaquetesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-categoria-por-paquetes',
  template: _categoria_por_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_categoria_por_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoriaPorPaquetesPage);

/***/ }),

/***/ 11271:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/categoria-por-paquetes/categoria-por-paquetes.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-searchbar {
  --icon-color: #1ca3c9;
  width: 95%;
  margin-left: 10px;
}

.elementSyle {
  margin: 0;
  border-bottom: none;
}

.categoriaDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
}
.categoriaDesk .contDesk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 2em 0em;
  gap: 2em;
}
.categoriaDesk .contDesk .title-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.categoriaDesk .contDesk .title-cont h1 {
  color: #1e7285;
  font-weight: 100;
  font-size: 2.2em;
  text-align: center;
}
.categoriaDesk .contDesk .conten-cats {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}
.categoriaDesk .contDesk .conten-cats .cardin {
  width: 16em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 1em 0em;
  border-bottom: 1px solid #0ba7c7;
  transition: 0.4s all ease-in-out;
  gap: 1em;
}
.categoriaDesk .contDesk .conten-cats .cardin .cat-name {
  color: #00a3c7;
  font-weight: 100;
  text-align: center;
  padding: 0em 1em;
}
.categoriaDesk .contDesk .conten-cats .cardin .contImg {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.categoriaDesk .contDesk .conten-cats .cardin:hover {
  border-bottom: 1px solid rgba(11, 168, 199, 0);
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
  .categoriaDesk {
    display: flex;
  }
}
.cardContainer {
  border-bottom: none; /* Remove any borders */
  outline: none; /* Remove the button's outline when clicked */
  display: flex;
  justify-content: center;
  align-items: center;
}

.categoriaDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.categoriaDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/categoria-por-paquetes/categoria-por-paquetes.page.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,UAAA;EACA,iBAAA;AACJ;;AAOE;EACE,SAAA;EACA,mBAAA;AAJJ;;AAOA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AAJF;AAME;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;AAJJ;AAMI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJN;AAMM;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AAJR;AAQI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AANN;AAQM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,gCAAA;EACA,QAAA;AANR;AAQQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AANV;AASQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAPV;AAWM;EACE,8CAAA;EACA,gDAAA;AATR;;AAeE;EACE;IACE,aAAA;IACA,qCAAA;EAZJ;EAgBE;IACE,aAAA;EAdJ;EAiBE;IACE,aAAA;EAfJ;EAkBE;IACE,aAAA;EAhBJ;AACF;AAkBE;EACE,mBAAA,EAAA,uBAAA;EACA,aAAA,EAAA,6CAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAhBJ;;AAmBA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAhBF;;AAmBA;EACE,iDAAA;EAEA,aAAA;AAjBF","sourcesContent":["ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n\n  \n// ion-button {\n//     --box-shadow: transparent !important;\n//   }\n\n  .elementSyle{\n    margin: 0;\n    border-bottom: none;\n  }\n\n.categoriaDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow-y: scroll;\n\n  .contDesk{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding: 2em 0em;\n    gap: 2em;\n\n    .title-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  \n      h1{\n        color: #1e7285;\n        font-weight: 100;\n        font-size: 2.2em;\n        text-align: center;\n      }\n    }\n\n    .conten-cats{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n\n      .cardin{\n        width: 16em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n        padding: 1em 0em;\n        border-bottom: 1px solid #0ba7c7;\n        transition: .4s all ease-in-out;\n        gap: 1em;\n\n        .cat-name{\n          color: #00a3c7;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n\n        .contImg{\n          width: 100%;\n          height: auto;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 1em;\n        }\n      }\n\n      .cardin:hover{\n        border-bottom: 1px solid #0ba8c700;\n        box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;\n      }\n    }\n  }\n}\n\n  @media(min-width:992px){\n    .display-grid{\n      display: grid;\n      grid-template-columns: repeat(1,1fr); \n      //grid-template-columns: repeat(auto-fit,minmax(300px,1fr));    \n     }    \n    \n    ion-content{\n      display: none;\n    }\n  \n    ion-header{\n      display: none;\n    }\n  \n    .categoriaDesk{\n      display: flex;\n    }\n  }\n  .cardContainer{\n    border-bottom: none; /* Remove any borders */\n    outline: none; /* Remove the button's outline when clicked */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.categoriaDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.categoriaDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36181:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/categoria-por-paquetes/categoria-por-paquetes.page.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" style=\"font-size: 1em;\"> Categorias por Paquete\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<section class=\"categoriaDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <div class=\"title-cont\">\n      <h1>Paquetes por marca:</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','494']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/494/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','493']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/493/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','495']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/495/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','496']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/496/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','497']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/497/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','498']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/498/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','508']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/508/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','499']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/499/1.png\" alt=\"\">\n        </div>     \n      </div>\n    </div>\n    <div class=\"title-cont\">\n      <h1>Paquetes por tipo de producto:</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','500']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/500/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','502']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/502/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','504']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/504/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','505']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/505/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','503']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/503/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','506']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/506/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','501']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/501/1.png\" alt=\"\">\n        </div>     \n      </div>\n      <div class=\"cardin\" [routerLink]=\"['/catalogo-paquetes','507']\">\n        <div class=\"contImg\">\n          <img src=\"{{url}}/507/1.png\" alt=\"\">\n        </div>     \n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content style=\"--padding-top: 4em;\">\n  <ion-title class=\"ion-text-center\">\n    <h1 style=\"color:#5dc0e0!important;font-size: 1.3em; font-family: 'RobotoCondensed-Light';\">Paquetes por marca:</h1>\n  </ion-title>\n  <ion-grid class=\"display-grid\">\n  <ion-row >\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\" >\n      <div class=\"cardContainer\" >\n        <button block [routerLink]=\"['/catalogo-paquetes','494']\">\n          \n          <img src=\"{{url}}/494/1.png\" width=\"250px\" height=\"200px\"  \n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','493']\">\n          <img src=\"{{url}}/493/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','495']\">\n          <img src=\"{{url}}/495/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','496']\">\n          <img src=\"{{url}}/496/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','497']\">\n          <img src=\"{{url}}/497/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','498']\">\n          <img src=\"{{url}}/498/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','508']\">\n          <img src=\"{{url}}/508/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\"  class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','499']\">\n          <img src=\"{{url}}/499/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-title class=\"ion-text-center\">\n  <h1 style=\"color:#5dc0e0!important;font-size: 1.3em; font-family: 'RobotoCondensed-Light';\">Paquetes por tipo de producto:</h1>\n</ion-title>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','500']\">\n          <img src=\"{{url}}/500/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','502']\">\n          <img src=\"{{url}}/502/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','504']\">\n          <img src=\"{{url}}/504/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','505']\">\n          <img src=\"{{url}}/505/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','503']\">\n          <img src=\"{{url}}/503/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','506']\">\n          <img src=\"{{url}}/506/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','501']\">\n          <img src=\"{{url}}/501/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" class=\"elementSyle\">\n      <div class=\"cardContainer\">\n        <button block [routerLink]=\"['/catalogo-paquetes','507']\">\n          <img src=\"{{url}}/507/1.png\" width=\"250px\" height=\"200px\"\n           />\n        </button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categoria-por-paquetes_categoria-por-paquetes_module_ts.js.map
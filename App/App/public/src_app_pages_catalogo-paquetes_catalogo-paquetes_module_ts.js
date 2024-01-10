(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_catalogo-paquetes_catalogo-paquetes_module_ts"],{

/***/ 48191:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/catalogo-paquetes/catalogo-paquetes-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPaquetesPageRoutingModule: () => (/* binding */ CatalogoPaquetesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _catalogo_paquetes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo-paquetes.page */ 68361);




const routes = [{
  path: '',
  component: _catalogo_paquetes_page__WEBPACK_IMPORTED_MODULE_0__.CatalogoPaquetesPage
}];
let CatalogoPaquetesPageRoutingModule = class CatalogoPaquetesPageRoutingModule {};
CatalogoPaquetesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CatalogoPaquetesPageRoutingModule);

/***/ }),

/***/ 86062:
/*!*********************************************************************!*\
  !*** ./src/app/pages/catalogo-paquetes/catalogo-paquetes.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPaquetesPageModule: () => (/* binding */ CatalogoPaquetesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _catalogo_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo-paquetes-routing.module */ 48191);
/* harmony import */ var _catalogo_paquetes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-paquetes.page */ 68361);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let CatalogoPaquetesPageModule = class CatalogoPaquetesPageModule {};
CatalogoPaquetesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _catalogo_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogoPaquetesPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_catalogo_paquetes_page__WEBPACK_IMPORTED_MODULE_1__.CatalogoPaquetesPage]
})], CatalogoPaquetesPageModule);

/***/ }),

/***/ 68361:
/*!*******************************************************************!*\
  !*** ./src/app/pages/catalogo-paquetes/catalogo-paquetes.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPaquetesPage: () => (/* binding */ CatalogoPaquetesPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _catalogo_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo-paquetes.page.html?ngResource */ 10422);
/* harmony import */ var _catalogo_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogo-paquetes.page.scss?ngResource */ 94455);
/* harmony import */ var _catalogo_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_catalogo_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var _modal_descripcion_paquetes_modal_descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-descripcion-paquetes/modal-descripcion-paquetes.page */ 84081);











let CatalogoPaquetesPage = class CatalogoPaquetesPage {
  constructor(productoService, modalCtrl, activatedRoute, shoppingCart) {
    this.productoService = productoService;
    this.modalCtrl = modalCtrl;
    this.activatedRoute = activatedRoute;
    this.shoppingCart = shoppingCart;
    this.page = 1;
    this.perPage = 10;
    this.totalData = 0;
    this.totalPage = 10;
    this.totalItems = 0;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.cp = 1;
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
    this.activatedRoute.params.subscribe(params => {
      this.id_cat = params.id_categoria;
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    this.getArticulos(this.id_cat);
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
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  getArticulos(id_cat) {
    this.productoService.getCategorias(id_cat).subscribe(data => {
      this.productosCatalogo = data;
      this.totalData = this.productosCatalogo.length;
      this.precio = this.productosCatalogo.precio;
      this.id_product = this.productosCatalogo.id_product;
    });
  }
  modalDescripcion(id_product) {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _modal_descripcion_paquetes_modal_descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_5__.ModalDescripcionPaquetesPage,
        componentProps: {
          id_product: id_product
        },
        cssClass: 'modalRegistroCss',
        initialBreakpoint: 1,
        breakpoints: [0, 0.5, 1]
      });
      return yield modal.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__.CarritoServiceService
  }];
};
CatalogoPaquetesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-catalogo-paquetes',
  template: _catalogo_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_catalogo_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CatalogoPaquetesPage);

/***/ }),

/***/ 94455:
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalogo-paquetes/catalogo-paquetes.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.iconos {
  height: 13px;
  width: 13px;
  margin-left: 4px;
  margin-right: 4px;
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
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
.catalogoDesk .contDesk .conten-cats .cardin .contImg img {
  width: 100%;
  max-height: 15em;
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

.catalogoDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.catalogoDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/catalogo-paquetes/catalogo-paquetes.page.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AACF;AACE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACN;AACM;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AACR;AAGI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AADN;AAGM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EAEA,qDAAA;EACA,gCAAA;EACA,QAAA;AAFR;AAIQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAFV;AAKQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAHV;AAKU;EACE,WAAA;EACA,gBAAA;AAHZ;AAOQ;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AALV;AASM;EACE,gDAAA;AAPR;;AAaA;EACE;IACE,aAAA;IACA,qCAAA;EAVF;EAaA;IACE,aAAA;EAXF;EAcA;IACE,aAAA;EAZF;EAeA;IACE,aAAA;EAbF;AACF;AAgBA;EACE,WAAA;EACA,aAAA;EACA,SAAA;EAEA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;AAfF;;AAkBA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAfF;;AAkBA;EACE,iDAAA;EAEA,aAAA;AAhBF","sourcesContent":[".iconos{\n  height: 13px;\n  width: 13px;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.catalogoDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow-y: scroll;\n\n  .contDesk{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding: 2em 0em;\n    gap: 2em;\n\n    .title-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  \n      h1{\n        color: #1e7285;\n        font-weight: 100;\n        font-size: 2.2em;\n        text-align: center;\n      }\n    }\n\n    .conten-cats{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n\n      .cardin{\n        width: 16em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n        padding: 1em 0em;\n        //border-bottom: 1px solid #0ba7c7;\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n        transition: .4s all ease-in-out;\n        gap: 1em;\n\n        .cat-name{\n          color: #00a3c7;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n\n        .contImg{\n          width: 100%;\n          height: auto;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 1em;\n\n          img{\n            width: 100%;\n            max-height: 15em;\n          }\n        }\n\n        .pric{\n          color: #222;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n      }\n\n      .cardin:hover{\n        box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;\n      }\n    }\n  }\n}\n\n@media(min-width:992px){\n  .display-grid{\n    display: grid;\n    grid-template-columns: repeat(1,1fr);   \n  }  \n\n  ion-content{\n    display: none;\n  }\n\n  ion-header{\n    display: none;\n  }\n\n  .catalogoDesk{\n    display: flex;\n  }\n}\n\n.fixin{\n  width: 100%; \n  height: 8.5em;\n  margin: 0; \n  // margin-top: .4em 0; \n  padding: 0em 0.5em; \n  text-align: center;\n  text-transform: uppercase; \n  font-weight: normal; \n  font-size: .9em; \n  overflow-wrap: break-word; \n  overflow: hidden;\n}\n\n.catalogoDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.catalogoDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 10422:
/*!********************************************************************************!*\
  !*** ./src/app/pages/catalogo-paquetes/catalogo-paquetes.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Catalogo por Paquete\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<section class=\"catalogoDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <div class=\"title-cont\">\n      <h1>Catalogo</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" *ngFor=\"let producto of productosCatalogo\" [routerLink]=\"['/descripcion-paquetes',producto.id_product]\">\n        <div class=\"contImg\">\n          <img src=\"{{producto.image_link}}\" alt=\"\">\n        </div>\n        <span class=\"cat-name\">{{producto.title}}</span> \n        <span class=\"pric\">${{producto.precio | number: '1.2-2'}} mxn</span> \n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content style=\"\">\n<ion-grid class=\"display-grid\">\n  <ion-row>\n  <ion-col  size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let producto of productosCatalogo\" >\n<div style=\"padding-top: 5px;width: 250px ;margin: 20px;border:5px solid #fafafa; border-radius: 10px;height: 25rem; display: flex; flex-direction: column; justify-content: space-around; align-items: center; font-family: 'RobotoCondensed-Light'\" [routerLink]=\"['/descripcion-paquetes',producto.id_product]\">\n     \n  \n    <img class=\"imgItem\" src=\"{{producto.image_link}}\" width=\"250px\" height=\"250px\">\n    <p class=\"fixin\" style=\"margin-left:20px;font-size: 15px;\">{{producto.title}}</p> \n    <p class=\"ion-text-center\" ><b style=\"color:#5dc0e0!important;font-size: 1.3em; font-family: 'RobotoCondensed-Light';\">${{producto.precio | number: '1.2-2'}} mxn</b></p>\n    <!-- <ion-text slot=\"start\">Disponible</ion-text> -->\n    <ion-row>\n    <!-- <ion-col size=\"12\">\n      <p *ngIf=\"producto.availability<10 && producto.availability>0 \"  class=\"ion-text-center\" style=\"background-color:yellow;color:black; font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/272/272340.png\" alt=\"\"><b>Ultimas Piezas</b></p>\n        <p *ngIf=\"producto.availability==0\" class=\"ion-text-center\" style=\"background-color:rgb(255, 0, 0);color:rgb(255, 255, 255); font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-x-icon-18-256.png\" alt=\"\"><b>Agotado</b></p>\n        <p *ngIf=\"producto.availability>9\" style=\"background-color:#70c2d1;color:rgb(0, 0, 0); font-size: .9rem; border-radius: 15px; width: 110px;\" class=\"ion-text-center\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/60/60731.png\" alt=\"\"><b>Disponible </b></p>\n    </ion-col> -->\n    <!-- <ion-col size=\"4\">\n      <ion-button  color=\"secondary\" (click)=\"modalDescripcion(producto.id_product)\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-col> -->\n  </ion-row> \n  </div>\n</ion-col>\n</ion-row>\n</ion-grid>\n  <!-- <ion-infinite-scroll *ngIf=\"page < productosCatalogo.lenght\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Mas Productos...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n  <!-- <pagination-controls (pageChange)=\"cp = $event\"></pagination-controls> -->\n  <!-- <ion-item *ngFor=\"let producto of productosCatalogo\">\n    <ion-img slot=\"start\" src=\"{{producto.image_link}}\"></ion-img>\n    <ion-text slot=\"end\" >{{producto.title}}</ion-text>\n    <ion-item>\n      <ion-label slot=\"start\">\n        $0.00 mxn\n      </ion-label>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n          \n  </ion-item> -->\n\n  <!-- FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRR -->\n\n\n\n\n<!-- Basic -->\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogo-paquetes_catalogo-paquetes_module_ts.js.map
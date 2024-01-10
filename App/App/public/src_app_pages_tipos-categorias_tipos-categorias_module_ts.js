(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tipos-categorias_tipos-categorias_module_ts"],{

/***/ 99103:
/*!***************************************************************************!*\
  !*** ./src/app/pages/tipos-categorias/tipos-categorias-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposCategoriasPageRoutingModule: () => (/* binding */ TiposCategoriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _tipos_categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipos-categorias.page */ 29213);




const routes = [{
  path: '',
  component: _tipos_categorias_page__WEBPACK_IMPORTED_MODULE_0__.TiposCategoriasPage
}];
let TiposCategoriasPageRoutingModule = class TiposCategoriasPageRoutingModule {};
TiposCategoriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], TiposCategoriasPageRoutingModule);

/***/ }),

/***/ 40711:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tipos-categorias/tipos-categorias.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposCategoriasPageModule: () => (/* binding */ TiposCategoriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _tipos_categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipos-categorias-routing.module */ 99103);
/* harmony import */ var _tipos_categorias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipos-categorias.page */ 29213);







let TiposCategoriasPageModule = class TiposCategoriasPageModule {};
TiposCategoriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _tipos_categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__.TiposCategoriasPageRoutingModule],
  declarations: [_tipos_categorias_page__WEBPACK_IMPORTED_MODULE_1__.TiposCategoriasPage]
})], TiposCategoriasPageModule);

/***/ }),

/***/ 29213:
/*!*****************************************************************!*\
  !*** ./src/app/pages/tipos-categorias/tipos-categorias.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TiposCategoriasPage: () => (/* binding */ TiposCategoriasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _tipos_categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipos-categorias.page.html?ngResource */ 22813);
/* harmony import */ var _tipos_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipos-categorias.page.scss?ngResource */ 19099);
/* harmony import */ var _tipos_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tipos_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);






let TiposCategoriasPage = class TiposCategoriasPage {
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.totalItems = 0;
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
      keys: ['nombre', 'refi', 'tags']
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
TiposCategoriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-tipos-categorias',
  template: _tipos_categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tipos_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TiposCategoriasPage);

/***/ }),

/***/ 19099:
/*!******************************************************************************!*\
  !*** ./src/app/pages/tipos-categorias/tipos-categorias.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.conttipscat {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  padding: 2em 0em;
}
.conttipscat .enlacbtn {
  width: 70%;
  height: 5em;
  border-radius: 2em 0em 2em 0em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1.5em;
  position: relative;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  z-index: 1;
}
.conttipscat .enlacbtn span {
  position: relative;
  z-index: 1;
  color: rgb(240, 240, 240);
  font-size: 1.1em;
  font-weight: 600;
}
.conttipscat .enlacbtn .topcontad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 63%;
  border-radius: 2em 0em 0em 0em;
  background-color: #4ed4e0;
  z-index: 0;
}
.conttipscat .enlacbtn .botcontad {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 37%;
  border-radius: 0em 0em 2em 0em;
  background-color: #81e0e8;
  z-index: 0;
}
.conttipscat .enlacbtn:nth-child(1) span {
  color: #fff;
}
.conttipscat .enlacbtn:nth-child(1) .topcontad {
  background-color: #4ed4e0;
}
.conttipscat .enlacbtn:nth-child(1) .botcontad {
  background-color: #81e0e8;
}
.conttipscat .enlacbtn:nth-child(2) span {
  color: #04b1d0;
}
.conttipscat .enlacbtn:nth-child(2) .topcontad {
  background-color: #78e0da;
}
.conttipscat .enlacbtn:nth-child(2) .botcontad {
  background-color: #8fe5e0;
}
.conttipscat .enlacbtn:nth-child(3) span {
  color: #2bb9d1;
}
.conttipscat .enlacbtn:nth-child(3) .topcontad {
  background-color: #c6ecdc;
}
.conttipscat .enlacbtn:nth-child(3) .botcontad {
  background-color: #ceefe1;
}
.conttipscat .enlacbtn:nth-child(4) span {
  color: #fff;
}
.conttipscat .enlacbtn:nth-child(4) .topcontad {
  background-color: #ffb6ba;
}
.conttipscat .enlacbtn:nth-child(4) .botcontad {
  background-color: #ffc3c6;
}
.conttipscat .enlacbtn:nth-child(5) span {
  color: #fff;
}
.conttipscat .enlacbtn:nth-child(5) .topcontad {
  background-color: #ffaf95;
}
.conttipscat .enlacbtn:nth-child(5) .botcontad {
  background-color: #ffb9a1;
}
.conttipscat .enlacbtn:nth-child(6) span {
  color: #fff;
}
.conttipscat .enlacbtn:nth-child(6) .topcontad {
  background-color: #78e0da;
}
.conttipscat .enlacbtn:nth-child(6) .botcontad {
  background-color: #8fe5e0;
}

ion-content {
  --ion-background-color: url('fondo.png');
  /*--ion-background-color: rgb(4,215,218); //rgb(189, 193, 194) !important
  --ion-background-color: radial-gradient(circle, rgba(4,215,218,1) 23%, rgba(45,166,253,1) 82%);*/
}

ion-button {
  --box-shadow: transparent !important;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/tipos-categorias/tipos-categorias.page.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EACA,gBAAA;AACF;AACE;EACE,UAAA;EACA,WAAA;EACA,8BAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,yFAAA;EACA,UAAA;AACJ;AACI;EACE,kBAAA;EACA,UAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AACN;AAEI;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,8BAAA;EACA,yBAAA;EACA,UAAA;AAAN;AAGI;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,8BAAA;EACA,yBAAA;EACA,UAAA;AADN;AAMI;EACE,WAAA;AAJN;AAOI;EACE,yBAAA;AALN;AAQI;EACE,yBAAA;AANN;AAWI;EACE,cAAA;AATN;AAYI;EACE,yBAAA;AAVN;AAaI;EACE,yBAAA;AAXN;AAgBI;EACE,cAAA;AAdN;AAiBI;EACE,yBAAA;AAfN;AAkBI;EACE,yBAAA;AAhBN;AAqBI;EACE,WAAA;AAnBN;AAsBI;EACE,yBAAA;AApBN;AAuBI;EACE,yBAAA;AArBN;AA0BI;EACE,WAAA;AAxBN;AA2BI;EACE,yBAAA;AAzBN;AA4BI;EACE,yBAAA;AA1BN;AA+BI;EACE,WAAA;AA7BN;AAgCI;EACE,yBAAA;AA9BN;AAiCI;EACE,yBAAA;AA/BN;;AAqCA;EACI,wCAAA;EAEA;kGAAA;AAlCJ;;AAuCI;EACI,oCAAA;AApCR","sourcesContent":[".conttipscat{\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2em;\n  padding: 2em 0em;\n\n  .enlacbtn{\n    width: 70%;\n    height: 5em;\n    border-radius: 2em 0em 2em 0em;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 1.5em;\n    position: relative;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\n    z-index: 1;\n\n    span{\n      position: relative;\n      z-index: 1;\n      color: rgb(240, 240, 240);\n      font-size: 1.1em;\n      font-weight: 600;\n    }\n\n    .topcontad{\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 63%;\n      border-radius: 2em 0em 0em 0em;\n      background-color: #4ed4e0;\n      z-index: 0;\n    }\n\n    .botcontad{\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 37%;\n      border-radius: 0em 0em 2em 0em;\n      background-color: #81e0e8;\n      z-index: 0;\n    }\n  }\n\n  .enlacbtn:nth-child(1){\n    span{\n      color: #fff;\n    }\n\n    .topcontad{\n      background-color: #4ed4e0;\n    }\n\n    .botcontad{\n      background-color: #81e0e8;\n    }\n  }\n\n  .enlacbtn:nth-child(2){\n    span{\n      color: #04b1d0;\n    }\n\n    .topcontad{\n      background-color: #78e0da;\n    }\n\n    .botcontad{\n      background-color: #8fe5e0;\n    }\n  }\n\n  .enlacbtn:nth-child(3){\n    span{\n      color: #2bb9d1;\n    }\n\n    .topcontad{\n      background-color: #c6ecdc;\n    }\n\n    .botcontad{\n      background-color: #ceefe1;\n    }\n  }\n\n  .enlacbtn:nth-child(4){\n    span{\n      color: #fff;\n    }\n\n    .topcontad{\n      background-color: #ffb6ba;\n    }\n\n    .botcontad{\n      background-color: #ffc3c6;\n    }\n  }\n\n  .enlacbtn:nth-child(5){\n    span{\n      color: #fff;\n    }\n\n    .topcontad{\n      background-color: #ffaf95;\n    }\n\n    .botcontad{\n      background-color: #ffb9a1;\n    }\n  }\n\n  .enlacbtn:nth-child(6){\n    span{\n      color: #fff;\n    }\n\n    .topcontad{\n      background-color: #78e0da;\n    }\n\n    .botcontad{\n      background-color: #8fe5e0;\n    }\n  }\n}\n\n\nion-content{\n    --ion-background-color: url('../../../assets/img/iconosCategorias/fondo.png'); //rgb(189, 193, 194) !important\n\n    /*--ion-background-color: rgb(4,215,218); //rgb(189, 193, 194) !important\n    --ion-background-color: radial-gradient(circle, rgba(4,215,218,1) 23%, rgba(45,166,253,1) 82%);*/\n\n    }\n\n    ion-button {\n        --box-shadow: transparent !important;\n      }\n\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22813:
/*!******************************************************************************!*\
  !*** ./src/app/pages/tipos-categorias/tipos-categorias.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Categorias\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button>\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<ion-content>\n  \n     <!--<ion-button size=\"full\" >\n      <ion-label>Categorias Por Producto</ion-label>\n     </ion-button>\n     <ion-button size=\"full\" [routerLink]=\"['/categoria','11']\">\n      <ion-label>Categorias Por Marca</ion-label>\n     </ion-button>\n     <ion-button size=\"full\" [routerLink]=\"['/categoria','12']\">\n      <ion-label>Categorias Por Técnica</ion-label>\n     </ion-button>\n     <ion-button size=\"full\" routerLink=\"'/paquetes\">\n      <ion-label>Paquetes</ion-label>\n     </ion-button>\n     <ion-button size=\"full\" [routerLink]=\"['/catalogo','123']\">\n      <ion-label>Outlet</ion-label> \n     </ion-button>-->\n  <div class=\"conttipscat\">\n\n    <div class=\"enlacbtn\" [routerLink]=\"['/categoria','10']\">       <!-- Este es el div boton -->\n      <span>Por Producto</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n    <div class=\"enlacbtn\" [routerLink]=\"['/categoria','11']\">       <!-- Este es el div boton -->\n      <span>Por Marca</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n    <div class=\"enlacbtn\" [routerLink]=\"['/categoria','12']\">       <!-- Este es el div boton -->\n      <span>Por Técnica</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n    <div class=\"enlacbtn\" routerLink=\"/paquetes\">       <!-- Este es el div boton -->\n      <span>Por Paquetes</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n    <div class=\"enlacbtn\" [routerLink]=\"['/catalogo','123']\">       <!-- Este es el div boton -->\n      <span>Outlet</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n    <div class=\"enlacbtn\" [routerLink]=\"['/catalogo','61']\">       <!-- Este es el div boton -->\n      <span>Promo Cricut</span>\n      <div class=\"topcontad\"></div>\n      <div class=\"botcontad\"></div>\n    </div>\n\n  </div>\n\n  <!--<div class=\"ion-text-center\" >\n    <div [routerLink]=\"['/categoria','10']\" style=\"padding-top:15px\">\n          <img src=\"assets/img/iconosCategorias/Botón-Producto.png\"  width=\"70%\">\n    </div>\n    <div  [routerLink]=\"['/categoria','11']\">\n      <img src=\"assets/img/iconosCategorias/Botón-Marca.png\"  width=\"70%\">\n    </div>\n    <div  [routerLink]=\"['/categoria','12']\">\n      <img src=\"assets/img/iconosCategorias/Botón-técnica.png\"  width=\"70%\">\n    </div>  \n    <div >\n      <div class=\"paq\" routerLink=\"/paquetes\">\n        <img src=\"assets/img/iconosCategorias/Botón-Paquetes.png\"  width=\"70%\">\n      </div>\n      <div  [routerLink]=\"['/catalogo','123']\">\n        <img src=\"assets/img/iconosCategorias/Botón-Outlet.png\"  width=\"70%\">\n      </div>\n    </div>\n  </div>-->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tipos-categorias_tipos-categorias_module_ts.js.map
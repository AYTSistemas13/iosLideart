(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_categorias_categorias_module_ts"],{

/***/ 18401:
/*!***************************************************************!*\
  !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasPageRoutingModule: () => (/* binding */ CategoriasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page */ 94798);




const routes = [{
  path: '',
  component: _categorias_page__WEBPACK_IMPORTED_MODULE_0__.CategoriasPage
}];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {};
CategoriasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CategoriasPageRoutingModule);

/***/ }),

/***/ 79894:
/*!*******************************************************!*\
  !*** ./src/app/pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasPageModule: () => (/* binding */ CategoriasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias-routing.module */ 18401);
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page */ 94798);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let CategoriasPageModule = class CategoriasPageModule {};
CategoriasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _categorias_routing_module__WEBPACK_IMPORTED_MODULE_0__.CategoriasPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_1__.CategoriasPage]
})], CategoriasPageModule);

/***/ }),

/***/ 94798:
/*!*****************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriasPage: () => (/* binding */ CategoriasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorias.page.html?ngResource */ 30659);
/* harmony import */ var _categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categorias.page.scss?ngResource */ 69468);
/* harmony import */ var _categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);








let CategoriasPage = class CategoriasPage {
  constructor(activatedRoute, ProductoService, shoppingCart) {
    this.activatedRoute = activatedRoute;
    this.ProductoService = ProductoService;
    this.shoppingCart = shoppingCart;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.totalItems = 0;
    this.numeroResultados = 0;
    this.url = "https://lideart.com.mx/img/categoria/";
    this.cargando = false;
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
    this.taitlpage = "No se seleccionó categoría";
  }
  ngOnInit() {
    this.cargando = true;
    this.activatedRoute.params.subscribe(params => {
      this.id_parent = params.id_parent;
      this.cargando = false;
    });
    if (this.id_parent == 10) {
      this.taitlpage = "Productos";
    } else if (this.id_parent == 11) {
      this.taitlpage = "Marcas";
    } else if (this.id_parent == 12) {
      this.taitlpage = "Técnicas";
    }
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    this.getSubCategorias(this.id_parent);
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
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  getSubCategorias(id_parent) {
    this.cargando = true;
    this.ProductoService.getSubcategoriaPorProducto(id_parent).subscribe(data => {
      this.categorias = data;
      this.subcats = this.categorias[0].arreglo;
      this.desc = this.subcats.description;
      this.cargando = false;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_2__.ApiProductosService
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_3__.CarritoServiceService
  }];
};
CategoriasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-categorias',
  template: _categorias_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_categorias_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CategoriasPage);

/***/ }),

/***/ 69468:
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.scss?ngResource ***!
  \******************************************************************/
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

ion-button {
  --box-shadow: transparent !important;
}

.cont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
}

ion-content {
  background-color: white;
  /*--ion-background-color: rgb(4,215,218); //rgb(189, 193, 194) !important
  --ion-background-color: radial-gradient(circle, rgba(4,215,218,1) 23%, rgba(45,166,253,1) 82%);*/
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
ion-content ion-card {
  /*background: rgb(28,138,242);
  background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border: none !important;
  box-shadow: none;
  width: 100%;
  height: 100%;
  padding-bottom: 5px;
  /* From https://css.glass */
}
ion-content ion-card .contImg {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
ion-content ion-card .contImg img {
  width: 80%;
  height: auto;
}
ion-content ion-card .text {
  width: 100%;
  height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ion-content ion-card .text ion-text {
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  color: rgb(150, 140, 140);
  text-transform: uppercase;
  font-weight: normal;
}

ion-card::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background-color: #89daf3;
  position: absolute;
  bottom: 0;
  left: 0;
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
  width: 22em;
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
.pp {
  width: 100%;
  height: 100%;
  padding: 0.25rem;
}

.categoriaDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.categoriaDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}

.loader {
  display: flex;
  width: 100%;
  height: 100%;
  background-position: center;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: rgb(255, 255, 255);
  opacity: 0.9;
}
.loader img {
  width: 200px;
  height: auto;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/categorias/categorias.page.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,SAAA;AACF;;AAIA;EACE,oCAAA;AADF;;AAMA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EAEA,WAAA;EACA,gBAAA;AAJF;;AAQA;EAEA,uBAAA;EACE;kGAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AANF;AASE;EAGE;uHAAA;EAEA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,sBAAA;EACA,oCAAA;EACA,uBAAA;EACA,gBAAA;EAGA,WAAA;EACA,YAAA;EAGA,mBAAA;EAEA,2BAAA;AAdJ;AAsBI;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AApBN;AAsBM;EACE,UAAA;EACA,YAAA;AApBR;AA0BI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAxBN;AA0BM;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAAA;EACA,mBAAA;AAxBR;;AAkCA;EACE,WAAA;EACA,cAAA;EACA,WAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;AA/BF;;AAkCA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AA/BF;AAiCE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;AA/BJ;AAiCI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA/BN;AAiCM;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AA/BR;AAmCI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AAjCN;AAmCM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,gCAAA;EACA,gCAAA;EACA,QAAA;AAjCR;AAmCQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAjCV;AAoCQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAlCV;AAsCM;EACE,8CAAA;EACA,gDAAA;AApCR;;AA0CA;EACE;IACE,aAAA;IACA,qCAAA;EAvCF;EA2CA;IACE,aAAA;EAzCF;EA4CA;IACE,aAAA;EA1CF;EA6CA;IACE,aAAA;EA3CF;AACF;AA+CA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AA7CF;;AAiDA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AA9CF;;AAiDA;EACE,iDAAA;EAEA,aAAA;AA/CF;;AAkDA;EACE,aAAA;EACA,WAAA;EACA,YAAA;EACA,2BAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,oCAAA;EACA,YAAA;AA/CF;AAiDE;EACE,YAAA;EACA,YAAA;AA/CJ","sourcesContent":["*{\n  padding: 0;\n  margin: 0;\n  \n}\n\n\nion-button {\n  --box-shadow: transparent !important;\n}\n\n\n\n.cont{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  //padding: .5rem;\n  width: 100%;\n  min-height: 100%;\n  //background: #000;\n}\n\nion-content{\n  //--ion-background-color: url('../../../assets/img/categ.png'); //rgb(189, 193, 194) !important \nbackground-color: white;\n  /*--ion-background-color: rgb(4,215,218); //rgb(189, 193, 194) !important\n  --ion-background-color: radial-gradient(circle, rgba(4,215,218,1) 23%, rgba(45,166,253,1) 82%);*/\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  \n  \n  ion-card{\n    //background: rgba(255, 255, 255, 0.164); //     #fdfdfd            #14A8CD*\n    //backdrop-filter: blur(2px);\n    /*background: rgb(28,138,242);\n    background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/\n    display: flex;\n    justify-content:space-between;\n    align-items: center;\n    flex-direction: column;\n    background-color: rgb(255, 255, 255);\n    border: none !important;\n    box-shadow: none;\n    //box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    //box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n    width: 100%;\n    height: 100%;\n    //border-radius: .25rem;\n    //  padding: 1rem;\n    padding-bottom: 5px;\n\n    /* From https://css.glass */\n    //background: rgba(255, 255, 255, 0.150);\n    //border-radius: 10px;\n    //box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    //backdrop-filter: blur(3px);\n    //-webkit-backdrop-filter: blur(3px);\n    //border: .5px solid rgba(0, 0, 0, 0.082);\n\n    .contImg{\n      width: 100%;\n      height: 60%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 1rem;\n\n      img{\n        width: 80%;\n        height: auto;\n      }\n    }\n\n\n\n    .text{\n      width: 100%;\n      height: 120%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      flex-direction: column;\n\n      ion-text{\n        width: 100%;\n        font-size: 1.2em;\n        text-align: center;\n        color:rgb(150, 140, 140);\n        text-transform: uppercase;\n        font-weight: normal;\n       \n      }\n\n    }\n\n  }\n  \n\n}\nion-card::after{\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 1px; \n  background-color: #89daf3;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.categoriaDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow-y: scroll;\n\n  .contDesk{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding: 2em 0em;\n    gap: 2em;\n\n    .title-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  \n      h1{\n        color: #1e7285;\n        font-weight: 100;\n        font-size: 2.2em;\n        text-align: center;\n      }\n    }\n\n    .conten-cats{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n\n      .cardin{\n        width: 22em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n        padding: 1em 0em;\n        border-bottom: 1px solid #0ba7c7;\n        transition: .4s all ease-in-out;\n        gap: 1em;\n\n        .cat-name{\n          color: #00a3c7;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n\n        .contImg{\n          width: 100%;\n          height: auto;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 1em;\n        }\n      }\n\n      .cardin:hover{\n        border-bottom: 1px solid #0ba8c700;\n        box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;\n      }\n    }\n  }\n}\n\n@media(min-width:992px){\n  .display-grid{\n    display: grid;\n    grid-template-columns: repeat(1,1fr);   \n   \n  }  \n\n  ion-content{\n    display: none;\n  }\n\n  ion-header{\n    display: none;\n  }\n\n  .categoriaDesk{\n    display: flex;\n  }\n}\n\n\n.pp{\n  width: 100%;\n  height: 100%;\n  padding: .25rem;\n \n}\n\n.categoriaDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.categoriaDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}\n\n.loader {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  position: fixed;\n  top: calc(0%);\n  left: calc(0%);\n  background-color: rgb(255, 255, 255);\n  opacity: 0.9;\n\n  img{\n    width: 200px;\n    height: auto;\n\n  }\n\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 30659:
/*!******************************************************************!*\
  !*** ./src/app/pages/categorias/categorias.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Catalogo\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <!--<ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>-->\n\n<section class=\"categoriaDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <div class=\"title-cont\">\n      <h1>{{taitlpage}}</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" *ngFor=\"let subCat of subcats\" [routerLink]=\"['/catalogo',subCat.id_category]\">\n        <span class=\"cat-name\">{{subCat.name}}</span>\n        <div class=\"contImg\">\n          <img src=\"{{url+subCat.id_category+'/'+subCat.img}}\" alt=\"\">\n        </div>     \n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content style=\"--padding-top: 4em;\">\n  <div class=\"cont\">\n    <!-- <div style=\"position:fixed; width:1px;height:100%;background-color: black;\" ></div> -->\n    \n    <ion-grid class=\"ion-card\" style=\"width: 85%;\">\n      <ion-row style=\"width: 100%; height: 23rem;\">\n        <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\" *ngFor=\"let subCat of subcats\" style=\"width: 100%; height: 100%;\">\n          <div class=\"pp\" [routerLink]=\"['/catalogo',subCat.id_category]\">\n            <!-- <ion-card style=\" border: solid 1px #89daf3;\"> -->\n            <ion-card>\n            \n              <div class=\"contImg\">\n                <img src=\"{{url+subCat.id_category+'/'+subCat.img}}\" alt=\"\">\n              </div>\n  \n              <div class=\"text\">\n                <ion-text class=\"ion-text-center textito ion-text-wrap\">{{subCat.name}}</ion-text>\n              </div>\n              <!-- <hr style=\"border: black 1px; width: 80%;\" > -->\n            </ion-card>         \n            \n          </div>          \n        </ion-col>\n        \n      </ion-row>\n    </ion-grid>\n    \n  </div>\n</ion-content>\n\n\n<div class=\"loader\" *ngIf=\"cargando\">\n  <img src=\"/assets/img/loadersillo.gif\">\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_categorias_categorias_module_ts.js.map
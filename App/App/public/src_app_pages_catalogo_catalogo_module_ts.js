(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_catalogo_catalogo_module_ts"],{

/***/ 73872:
/*!***********************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPageRoutingModule: () => (/* binding */ CatalogoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _catalogo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo.page */ 20492);




const routes = [{
  path: '',
  component: _catalogo_page__WEBPACK_IMPORTED_MODULE_0__.CatalogoPage
}];
let CatalogoPageRoutingModule = class CatalogoPageRoutingModule {};
CatalogoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CatalogoPageRoutingModule);

/***/ }),

/***/ 28159:
/*!***************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPageModule: () => (/* binding */ CatalogoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogo-routing.module */ 73872);
/* harmony import */ var _catalogo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo.page */ 20492);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 39687);









let CatalogoPageModule = class CatalogoPageModule {};
CatalogoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _catalogo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogoPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule],
  declarations: [_catalogo_page__WEBPACK_IMPORTED_MODULE_1__.CatalogoPage]
})], CatalogoPageModule);

/***/ }),

/***/ 20492:
/*!*************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatalogoPage: () => (/* binding */ CatalogoPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _catalogo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogo.page.html?ngResource */ 79596);
/* harmony import */ var _catalogo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalogo.page.scss?ngResource */ 61049);
/* harmony import */ var _catalogo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_catalogo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _modal_descripcion_producto_modal_descripcion_producto_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-descripcion-producto/modal-descripcion-producto.page */ 20340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 39687);












let CatalogoPage = class CatalogoPage {
  constructor(productoService, modalCtrl, activatedRoute, shoppingCart) {
    this.productoService = productoService;
    this.modalCtrl = modalCtrl;
    this.activatedRoute = activatedRoute;
    this.shoppingCart = shoppingCart;
    this.items = [];
    this.sum = 1;
    this.page = 1;
    this.perPage = 10;
    this.totalData = 0;
    this.totalPage = 10;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.totalItems = 0;
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
    this.catalogo_cat = "No hay categoría seleccionada";
    this.currentItemsToShow = [];
    this.tamanoLista = 0;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id_cat = params.id_categoria;
    });
    if (this.id_cat == 91) {
      this.catalogo_cat = "Accesorios para planchas";
    } else if (this.id_cat == 92) {
      this.catalogo_cat = "Accesorios para plotters";
    } else if (this.id_cat == 41) {
      this.catalogo_cat = "Adhesivos";
    } else if (this.id_cat == 25) {
      this.catalogo_cat = "Bisutería";
    } else if (this.id_cat == 23) {
      this.catalogo_cat = "Costura";
    } else if (this.id_cat == 31) {
      this.catalogo_cat = "Cubiertas, totes";
    } else if (this.id_cat == 54) {
      this.catalogo_cat = "Cursos";
    } else if (this.id_cat == 22) {
      this.catalogo_cat = "Embossing";
    } else if (this.id_cat == 58) {
      this.catalogo_cat = "Engargolado";
    } else if (this.id_cat == 46) {
      this.catalogo_cat = "Foil Quill";
    } else if (this.id_cat == 93) {
      this.catalogo_cat = "Foil reactivo Impresión láser";
    } else if (this.id_cat == 48) {
      this.catalogo_cat = "Fotobotones";
    } else if (this.id_cat == 124) {
      this.catalogo_cat = "Fotografía y Video";
    } else if (this.id_cat == 94) {
      this.catalogo_cat = "Glitter";
    } else if (this.id_cat == 26) {
      this.catalogo_cat = "Grabado cristal";
    } else if (this.id_cat == 28) {
      this.catalogo_cat = "Herramientas de corte manual";
    } else if (this.id_cat == 57) {
      this.catalogo_cat = "Herramientas de troquelado";
    } else if (this.id_cat == 52) {
      this.catalogo_cat = "Herramientas para acrílico";
    } else if (this.id_cat == 95) {
      this.catalogo_cat = "Herramientas para depilación y aplicación de vinil";
    } else if (this.id_cat == 33) {
      this.catalogo_cat = "Hoja transportadora - Tapetes";
    } else if (this.id_cat == 40) {
      this.catalogo_cat = "Hojas para laminar";
    } else if (this.id_cat == 96) {
      this.catalogo_cat = "Impresión 3D Equipos y Accesorios";
    } else if (this.id_cat == 99) {
      this.catalogo_cat = "Impresión 3D Filamentos";
    } else if (this.id_cat == 51) {
      this.catalogo_cat = "Impresión de tarjetas";
    } else if (this.id_cat == 37) {
      this.catalogo_cat = "Laminadoras";
    } else if (this.id_cat == 42) {
      this.catalogo_cat = "Listones";
    } else if (this.id_cat == 101) {
      this.catalogo_cat = "Mochilas, morrales y gorras";
    } else if (this.id_cat == 102) {
      this.catalogo_cat = "Moldes de plástico";
    } else if (this.id_cat == 103) {
      this.catalogo_cat = "Navajas y Accesorios para Plotter de corte";
    } else if (this.id_cat == 104) {
      this.catalogo_cat = "Ojillos";
    } else if (this.id_cat == 27) {
      this.catalogo_cat = "Papeles de transferencia";
    } else if (this.id_cat == 105) {
      this.catalogo_cat = "Papeles, cartulinas y más";
    } else if (this.id_cat == 19) {
      this.catalogo_cat = "Paquetes";
    } else if (this.id_cat == 32) {
      this.catalogo_cat = "Perforadoras";
    } else if (this.id_cat == 107) {
      this.catalogo_cat = "Pintura y pinceles";
    } else if (this.id_cat == 35) {
      this.catalogo_cat = "Planchas de calor";
    } else if (this.id_cat == 20) {
      this.catalogo_cat = "Plotters de corte";
    } else if (this.id_cat == 108) {
      this.catalogo_cat = "Plumas Quill";
    } else if (this.id_cat == 53) {
      this.catalogo_cat = "Plumas y marcadores";
    } else if (this.id_cat == 109) {
      this.catalogo_cat = "Productos aplicación foil reactivo láser";
    } else if (this.id_cat == 45) {
      this.catalogo_cat = "Pulseras para eventos";
    } else if (this.id_cat == 44) {
      this.catalogo_cat = "Resina";
    } else if (this.id_cat == 21) {
      this.catalogo_cat = "Sellos";
    } else if (this.id_cat == 24) {
      this.catalogo_cat = "Serigrafía casera";
    } else if (this.id_cat == 36) {
      this.catalogo_cat = "Software y digital";
    } else if (this.id_cat == 111) {
      this.catalogo_cat = "Sublimación";
    } else if (this.id_cat == 112) {
      this.catalogo_cat = "Sublimación blancos";
    } else if (this.id_cat == 113) {
      this.catalogo_cat = "Sublimación equipos";
    } else if (this.id_cat == 13) {
      this.catalogo_cat = "Sublimación impresora";
    } else if (this.id_cat == 16) {
      this.catalogo_cat = "Sublimación papel";
    } else if (this.id_cat == 15) {
      this.catalogo_cat = "Sublimación tintas";
    } else if (this.id_cat == 114) {
      this.catalogo_cat = "Tabletas para trazado y depilado";
    } else if (this.id_cat == 115) {
      this.catalogo_cat = "Tape decorativo";
    } else if (this.id_cat == 56) {
      this.catalogo_cat = "Troqueladoras";
    } else if (this.id_cat == 55) {
      this.catalogo_cat = "Troqueles";
    } else if (this.id_cat == 17) {
      this.catalogo_cat = "Vinil textil";
    } else if (this.id_cat == 18) {
      this.catalogo_cat = "Vinil y papel para Rotulación";
    } else if (this.id_cat == 123) {
      this.catalogo_cat = "Outlet";
    } else if (this.id_cat == 67) {
      this.catalogo_cat = "3M";
    } else if (this.id_cat == 71) {
      this.catalogo_cat = "Acribend";
    } else if (this.id_cat == 125) {
      this.catalogo_cat = "Arkon Mounts";
    } else if (this.id_cat == 70) {
      this.catalogo_cat = "Armour Etch";
    } else if (this.id_cat == 840) {
      this.catalogo_cat = "Brother";
    } else if (this.id_cat == 134) {
      this.catalogo_cat = "Color Pour";
    } else if (this.id_cat == 137) {
      this.catalogo_cat = "Colortex";
    } else if (this.id_cat == 61) {
      this.catalogo_cat = "Cricut";
    } else if (this.id_cat == 136) {
      this.catalogo_cat = "Decofoil";
    } else if (this.id_cat == 224) {
      this.catalogo_cat = "Doodlebug";
    } else if (this.id_cat == 65) {
      this.catalogo_cat = "Eclectic";
    } else if (this.id_cat == 183) {
      this.catalogo_cat = "Ektools";
    } else if (this.id_cat == 78) {
      this.catalogo_cat = "Forever";
    } else if (this.id_cat == 66) {
      this.catalogo_cat = "Glue Dots";
    } else if (this.id_cat == 69) {
      this.catalogo_cat = "Gütermann";
    } else if (this.id_cat == 68) {
      this.catalogo_cat = "Janome";
    } else if (this.id_cat == 79) {
      this.catalogo_cat = "Metalix";
    } else if (this.id_cat == 135) {
      this.catalogo_cat = "Minc";
    } else if (this.id_cat == 74) {
      this.catalogo_cat = "Moxy";
    } else if (this.id_cat == 63) {
      this.catalogo_cat = "Oracal";
    } else if (this.id_cat == 62) {
      this.catalogo_cat = "Sawgrass";
    } else if (this.id_cat == 59) {
      this.catalogo_cat = "Silhouette";
    } else if (this.id_cat == 64) {
      this.catalogo_cat = "Siser";
    } else if (this.id_cat == 81) {
      this.catalogo_cat = "Sizzix";
    } else if (this.id_cat == 75) {
      this.catalogo_cat = "Sublimarts";
    } else if (this.id_cat == 127) {
      this.catalogo_cat = "Surebonder";
    } else if (this.id_cat == 60) {
      this.catalogo_cat = "WeR Memory Keepers";
    } else if (this.id_cat == 77) {
      this.catalogo_cat = "Zebra";
    } else if (this.id_cat == 84) {
      this.catalogo_cat = "Arte en papel";
    } else if (this.id_cat == 117) {
      this.catalogo_cat = "Costura";
    } else if (this.id_cat == 356) {
      this.catalogo_cat = "Decoración";
    } else if (this.id_cat == 141) {
      this.catalogo_cat = "Decoración de acrílico";
    } else if (this.id_cat == 86) {
      this.catalogo_cat = "Decoración de rígidos";
    } else if (this.id_cat == 85) {
      this.catalogo_cat = "Decoración textil";
    } else if (this.id_cat == 90) {
      this.catalogo_cat = "Engargolado";
    } else if (this.id_cat == 133) {
      this.catalogo_cat = "Fotografía y Video";
    } else if (this.id_cat == 118) {
      this.catalogo_cat = "Grabado";
    } else if (this.id_cat == 88) {
      this.catalogo_cat = "Impresión 3D";
    } else if (this.id_cat == 121) {
      this.catalogo_cat = "Impresión de tarjetas";
    } else if (this.id_cat == 120) {
      this.catalogo_cat = "Moldes de plástico";
    } else if (this.id_cat == 126) {
      this.catalogo_cat = "Promocionales";
    } else if (this.id_cat == 119) {
      this.catalogo_cat = "Repujado";
    } else if (this.id_cat == 82) {
      this.catalogo_cat = "Rotulación de paredes";
    } else if (this.id_cat == 128) {
      this.catalogo_cat = "Scrapbook";
    } else if (this.id_cat == 83) {
      this.catalogo_cat = "Sublimación";
    } else if (this.id_cat == 89) {
      this.catalogo_cat = "Troquelado";
    } else if (this.id_cat == 59) {
      this.catalogo_cat = "Luster";
    } else if (this.id_cat == 1738) {
      this.catalogo_cat = "Pa'Quete Mandes Solo";
    }
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    this.getArticulos(this.id_cat);
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
    this.currentItemsToShow = this.productosCatalogo.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
  }
  generateItems() {
    for (let i = 0; i < 4; i++) {
      let imp = this.sum;
      if (this.sum <= this.totalData) {
        this.items.push(this.productosCatalogo[imp - 1]);
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
      console.log(this.productosCatalogo);
      this.tamanoLista = this.productosCatalogo.length;
      this.currentItemsToShow = this.productosCatalogo.slice(0, 8);
      this.totalData = this.productosCatalogo.length;
      this.precio = this.productosCatalogo.precio;
      this.id_product = this.productosCatalogo.id_product;
      this.generateItems();
    });
    //this.generateItems();
  }

  modalDescripcion(id_product) {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _modal_descripcion_producto_modal_descripcion_producto_page__WEBPACK_IMPORTED_MODULE_4__.ModalDescripcionProductoPage,
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
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_5__.CarritoServiceService
  }];
  static #_2 = this.propDecorators = {
    paginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator, {
        static: true
      }]
    }]
  };
};
CatalogoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-catalogo',
  template: _catalogo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_catalogo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CatalogoPage);

/***/ }),

/***/ 61049:
/*!**************************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo.page.scss?ngResource ***!
  \**************************************************************/
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
}`, "",{"version":3,"sources":["webpack://./src/app/pages/catalogo/catalogo.page.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;AACJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;;AAIE;EACE,YAAA;AADJ;;AAIE;EACA,YAAA;EACA,aAAA;AADF;;AAKE;EACC,YAAA;EACA,WAAA;AAFH;;AAKE;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;AAFJ;;AAME;EACE,kBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;AAHJ;;AAME;EACI,uBAAA;EACA,sBAAA;AAHN;;AAME;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAHJ;;AAME;EACE,YAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;AAHJ;;AAcA;EACE,WAAA;EACA,aAAA;EACA,SAAA;EAEA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,gBAAA;AAZF;;AAgBA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AAbF;AAeE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,QAAA;AAbJ;AAeI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbN;AAeM;EACE,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AAbR;AAiBI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AAfN;AAiBM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EAEA,qDAAA;EACA,gCAAA;EACA,QAAA;AAhBR;AAkBQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAhBV;AAmBQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AAjBV;AAmBU;EACE,WAAA;EACA,gBAAA;AAjBZ;AAqBQ;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AAnBV;AAuBM;EACE,gDAAA;AArBR;;AA2BA;EACE;IACE,aAAA;IACA,qCAAA;EAxBF;EA2BA;IACE,aAAA;EAzBF;EA4BA;IACE,aAAA;EA1BF;EA6BA;IACE,aAAA;EA3BF;AACF;AA8BA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AA5BF;;AA+BA;EACE,iDAAA;EAEA,aAAA;AA7BF","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 100px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n\n  .imagensita{\n      height: auto!important;\n      width: auto!important;\n  }\n\n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n\n  .iconos{\n    height: 13px;\n    width: 13px;\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n\n\n//  .imgItem{\n//    border:2px  solid #1ca3c9;\n//    margin-left: 5px;\n//    margin-bottom: 5px;\n//  }\n\n\n.fixin{\n  width: 100%; \n  height: 8.5em;\n  margin: 0; \n  // margin-top: .4em 0; \n  padding: 0em 0.5em; \n  text-align: center;\n  text-transform: uppercase; \n  font-weight: normal; \n  font-size: .9em; \n  overflow-wrap: break-word; \n  overflow: hidden;\n \n}\n\n.catalogoDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  overflow-y: scroll;\n\n  .contDesk{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: auto;\n    padding: 2em 0em;\n    gap: 2em;\n\n    .title-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  \n      h1{\n        color: #1e7285;\n        font-weight: 100;\n        font-size: 2.2em;\n        text-align: center;\n      }\n    }\n\n    .conten-cats{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n\n      .cardin{\n        width: 16em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        cursor: pointer;\n        padding: 1em 0em;\n        //border-bottom: 1px solid #0ba7c7;\n        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n        transition: .4s all ease-in-out;\n        gap: 1em;\n\n        .cat-name{\n          color: #00a3c7;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n\n        .contImg{\n          width: 100%;\n          height: 15em;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          padding: 1em;\n\n          img{\n            width: 100%;\n            max-height: 100%;\n          }\n        }\n\n        .pric{\n          color: #222;\n          font-weight: 100;\n          text-align: center;\n          padding: 0em 1em;\n        }\n      }\n\n      .cardin:hover{\n        box-shadow: rgba(23, 171, 202, 0.5) 0px 6px 24px;\n      }\n    }\n  }\n}\n\n@media(min-width:992px){\n  .display-grid{\n    display: grid;\n    grid-template-columns: repeat(1,1fr);   \n  }  \n\n  ion-content{\n    display: none;\n  }\n\n  ion-header{\n    display: none;\n  }\n\n  .catalogoDesk{\n    display: flex;\n  }\n}\n\n.catalogoDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.catalogoDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 79596:
/*!**************************************************************!*\
  !*** ./src/app/pages/catalogo/catalogo.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Catalogo por Producto\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n\n      <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar>\n      </ion-toolbar>\n  </div>\n</ion-header>\n\n<section class=\"catalogoDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <div class=\"title-cont\">\n      <h1>{{catalogo_cat}}</h1>\n    </div>\n    <div class=\"conten-cats\">\n      <div class=\"cardin\" *ngFor=\"let producto of currentItemsToShow\" [routerLink]=\"['/descripcion-producto',producto.id_product]\"> <!-- items -->\n        <div class=\"contImg\">\n          <img src=\"{{producto.image_link}}\" alt=\"\">\n        </div>\n        <span class=\"cat-name\">{{producto.title}}</span> \n        <span class=\"pric\">{{producto.precio | currency: '$'}} mxn</span> \n        <!-- <span class=\"pric\" *ngIf=\"producto.descuento>0\">{{(producto.precio*producto.descuento)/100 | currency: '$'}} mxn</span>  -->\n      </div>\n    </div>\n    <!-- Filters -->\n    <label for=\"d\" class=\"paginatorS\">\n      <mat-paginator (page)=\"onPageChange($event)\" [pageSize]=\"8\" [length]=\"tamanoLista\" [pageSizeOptions]=\"[8, 16, 32]\" aria-label=\"d\" showFirstLastButtons></mat-paginator>\n    </label>\n    <!-- end Filters -->\n    <!--<ion-button (click)=\"onIonInfinite($event)\" expand=\"block\">Ver Mas Productos</ion-button>-->\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content >\n<ion-grid class=\"display-grid\" >\n  <ion-row>\n  <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" size-xl=\"3\"  style=\"display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\">\n  <div *ngFor=\"let producto of items\" style=\"padding-top: 5px;width: 270px ;margin-top: 20px; border-radius: 10px;height: 25em; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\" [routerLink]=\"['/descripcion-producto',producto.id_product]\">\n  <!--<p  style=\"width: 5em; background-color: aqua; margin-left:20px;font-size: 15px; margin-block-start: 0em; margin-block-end: 0em; padding: .5em 0em; text-align: center;\"><b></b></p>-->\n    \n    <img class=\"imgItem\" src=\"{{producto.image_link}}\" width=\"250px\" height=\"250px\">\n    <div class=\"fixin\">{{producto.title}}</div> \n    \n\n    \n    <p class=\"ion-text-center\"><b style=\"color:#5dc0e0!important;font-size: 1.3em; font-weight: 400;\">${{producto.precio | number: '1.2-2'}} mxn</b></p>\n    <!-- <ion-text slot=\"start\">Disponible</ion-text> -->\n    <!-- <ion-row> -->\n    <!-- <ion-col size=\"12\">\n      <p *ngIf=\"producto.availability<10 && producto.availability>0 \"  class=\"ion-text-center\" style=\"background-color:yellow;color:black; font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/272/272340.png\" alt=\"\"><b>Ultimas Piezas</b></p>\n      <p *ngIf=\"producto.availability==0\" class=\"ion-text-center\" style=\"background-color:rgb(255, 0, 0);color:rgb(255, 255, 255); font-size: .9rem; border-radius: 15px; width: 110px;\"> <img class=\"iconos\" src=\"https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/letter-x-icon-18-256.png\" alt=\"\"><b>Agotado</b></p>\n      <p *ngIf=\"producto.availability>9\" style=\"background-color:#00d7e2!important;color:rgb(0, 0, 0); font-size: .9rem; border-radius: 15px; width: 110px;\" class=\"ion-text-center\"> <img class=\"iconos\" src=\"https://cdn-icons-png.flaticon.com/512/60/60731.png\" alt=\"\"><b>Disponible </b></p>\n    </ion-col> -->\n    <!-- <ion-col size=\"4\">\n      <ion-button  color=\"secondary\" (click)=\"modalDescripcion(producto.id_product)\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-col> -->\n  <!-- </ion-row>  -->\n  </div>\n</ion-col>\n</ion-row>\n</ion-grid>\n  <!-- <ion-infinite-scroll *ngIf=\"page < productosCatalogo.lenght\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando Mas Productos...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n  <!-- <pagination-controls (pageChange)=\"cp = $event\"></pagination-controls> -->\n  <!-- <ion-item *ngFor=\"let producto of productosCatalogo\">\n    <ion-img slot=\"start\" src=\"{{producto.image_link}}\"></ion-img>\n    <ion-text slot=\"end\" >{{producto.title}}</ion-text>\n    <ion-item>\n      <ion-label slot=\"start\">\n        $0.00 mxn\n      </ion-label>\n      <ion-button slot=\"end\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n          \n  </ion-item> -->\n\n  <!-- FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRR -->\n\n\n\n\n<!-- Basic  f-->\n\n\n  <ion-button (click)=\"onIonInfinite($event)\" expand=\"block\">Ver Mas Productos</ion-button>\n\n  <ion-list></ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"onIonInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n<!-- <ion-infinite-scroll (ionInfinite)=\"onIonInfinite($event)\">\n  <ion-infinite-scroll-content loadingText=\"Cargando Productos...\" loadingSpinner=\"bubbles\"></ion-infinite-scroll-content>\n</ion-infinite-scroll> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_catalogo_catalogo_module_ts.js.map
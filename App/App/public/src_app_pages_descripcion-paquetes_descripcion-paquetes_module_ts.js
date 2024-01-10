(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_descripcion-paquetes_descripcion-paquetes_module_ts"],{

/***/ 39932:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/descripcion-paquetes/descripcion-paquetes-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionPaquetesPageRoutingModule: () => (/* binding */ DescripcionPaquetesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descripcion-paquetes.page */ 81486);




const routes = [{
  path: '',
  component: _descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_0__.DescripcionPaquetesPage
}];
let DescripcionPaquetesPageRoutingModule = class DescripcionPaquetesPageRoutingModule {};
DescripcionPaquetesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DescripcionPaquetesPageRoutingModule);

/***/ }),

/***/ 11021:
/*!***************************************************************************!*\
  !*** ./src/app/pages/descripcion-paquetes/descripcion-paquetes.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionPaquetesPageModule: () => (/* binding */ DescripcionPaquetesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _descripcion_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descripcion-paquetes-routing.module */ 39932);
/* harmony import */ var _descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descripcion-paquetes.page */ 81486);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 29909);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);









let DescripcionPaquetesPageModule = class DescripcionPaquetesPageModule {};
DescripcionPaquetesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule, _descripcion_paquetes_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescripcionPaquetesPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_descripcion_paquetes_page__WEBPACK_IMPORTED_MODULE_1__.DescripcionPaquetesPage]
})], DescripcionPaquetesPageModule);

/***/ }),

/***/ 81486:
/*!*************************************************************************!*\
  !*** ./src/app/pages/descripcion-paquetes/descripcion-paquetes.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionPaquetesPage: () => (/* binding */ DescripcionPaquetesPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _descripcion_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descripcion-paquetes.page.html?ngResource */ 4233);
/* harmony import */ var _descripcion_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descripcion-paquetes.page.scss?ngResource */ 91170);
/* harmony import */ var _descripcion_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_descripcion_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper */ 58595);











swiper__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_6__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_6__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_6__.Virtual, swiper__WEBPACK_IMPORTED_MODULE_6__.EffectCoverflow, swiper__WEBPACK_IMPORTED_MODULE_6__.Thumbs]);
let DescripcionPaquetesPage = class DescripcionPaquetesPage {
  constructor(productoService, toastController, shoppingCart, activatedRoute, servicioWishlist) {
    this.productoService = productoService;
    this.toastController = toastController;
    this.shoppingCart = shoppingCart;
    this.activatedRoute = activatedRoute;
    this.servicioWishlist = servicioWishlist;
    this.swiperConfig = {
      slidesPerView: 1,
      pagination: true
    };
    this.config = {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: true,
      virtual: true,
      effect: 'coverflow'
    };
    this.colorSeleccionado = '';
    this.color = 'blanco';
    this.items = [];
    this.totalItems = 0;
    this.crr_sel = 0;
    this.crr_indx = 0;
    this.cantidad = 1;
    this.slider = [];
    this.paquetaxos = [];
    this.cargando = false;
    this.resdesc = [];
    this.descuentillo = false;
  }
  ngOnInit() {
    this.cargando = true;
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.activatedRoute.params.subscribe(params => {
      this.id_product = params.id_product;
      this.getDescripcionProducto();
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
  }
  presentToast() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Articulo Agregado a Carrito',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  getDescripcionProducto() {
    this.cargando = true;
    this.productoService.getDescripcionPaquete(this.id_product).subscribe(data => {
      this.productoData = data;
      console.log(this.productoData);
      this.atributos = this.productoData[0].detalles.atributos;
      this.precioDyn = this.productoData[0].precio;
      this.descripcionsita = this.productoData[0].description;
      this.descripcionsilla = this.productoData[0].description_short;
      this.productoSKU = this.productoData[0].sku;
      this.colorDefault();
      var jsondescuento = {
        "descuento": this.id_product
      };
      this.productoService.getDescuento(jsondescuento).subscribe(resdesc => {
        this.resdesc = resdesc;
        if (this.resdesc === 1) {
          this.descuentillo = false;
          this.descuento = 1;
        } else {
          this.descuentillo = true;
          this.descuento = this.resdesc;
          this.descuento = 1 - this.descuento;
        }
        this.productoService.getSliderImgs(this.id_product).subscribe(datazos => {
          this.slider = datazos;
          this.productoService.getInfoPaquetes(this.productoSKU).subscribe(paquetaxo => {
            this.paquetaxos = paquetaxo;
            let array = [];
            for (let index = 0; index < this.paquetaxos.length; index++) {
              const element = this.paquetaxos[index].inventario;
              array.push(element);
            }
            const min = Math.min(...array);
            this.existencias = min;
            this.cargando = false;
          });
        });
      });
    });
  }
  colorDefault() {
    setTimeout(() => {
      try {
        let span = document.getElementsByClassName('id_group_2 selector-color')[0].children[0];
        if (span) {
          span.click();
        }
      } catch (error) {}
      try {
        let span2 = document.getElementsByClassName('id_group_7 selector-color')[0].children[0];
        if (span2) {
          span2.click();
        }
      } catch (error) {}
    }, 1000);
  }
  agregarAlCarrito(producto) {
    // producto.precio = this.productoData.precio;
    producto.existencia = this.existencias;
    producto.color = this.color;
    if (producto.color == "") {
      this.ShowError2();
    } else {
      producto.quantity = this.cantidad;
      if (this.existencias < this.cantidad) {
        this.ShowError();
      } else {
        let pasa = true;
        this.shoppingCart.cartItems.subscribe(d => {
          this.items = d;
          this.totalItems = d.length;
        });
        if (this.totalItems > 0) {
          for (let index = 0; index < this.items.length; index++) {
            const element = this.items[index];
            if (producto.sku == element.sku) {
              if (this.existencias < element.quantity + producto.quantity) {
                this.ShowError3();
                pasa = false;
              }
            }
          }
        }
        if (pasa) {
          this.showSuccess();
          producto.paquete = 1;
          producto.precio = this.productoData[0].precio;
          this.shoppingCart.addItem(producto);
        }
      }
    }
  }
  seleccionacolor(nombreColor, id_attribute, id_group) {
    this.colorSeleccionado = nombreColor;
    if (document.getElementsByClassName('selected selector-color').length > 0) {
      document.getElementsByClassName('selected selector-color')[0].className = document.getElementsByClassName('selected selector-color')[0].className.replace('selected', '');
    }
    var cuadro = document.getElementById('' + id_attribute);
    if (cuadro) cuadro.className = 'selected ' + cuadro.className;
    this.cambiaSku();
    this.color = document.getElementsByClassName('selected selector-color')[0].className;
    let colorsito = document.getElementsByClassName('selected');
    if (colorsito.length > 0) {
      this.color = '' + colorsito[0].children[0].getAttribute('title');
    }
  }
  cambiaSku() {
    var ladata = this.productoData[0];
    var variables = ladata.detalles.variables;
    if (document.getElementsByClassName('selected selector-color').length > 0) {
      var selecciones = [];
      selecciones.push({
        id_group: document.getElementsByClassName('selected selector-color')[0].className.split('id_group_')[1].split(' ')[0],
        id_attribute: document.getElementsByClassName('selected selector-color')[0].id
      });
      if (document.getElementsByName('atributos').length > 0) {
        var selectores = document.getElementsByName('atributos');
        for (var i = 0; i < selectores.length; i++) {
          var sl = selectores[i];
          selecciones.push({
            id_group: sl.classList[0],
            id_attribute: sl.value
          });
        }
      }
      var pasa = true;
      for (var i = 0; i < variables.length; i++) {
        pasa = false;
        var nkeys = Object.keys(variables[i].atributos);
        var aciertos = 0;
        var nvalor = 0;
        for (var j = 0; j < nkeys.length; j++) {
          for (var k = 0; k < selecciones.length; k++) {
            if (selecciones[k].id_group == nkeys[j]) {
              if (variables[i].atributos[selecciones[k].id_group] == selecciones[k].id_attribute) {
                aciertos++;
              }
            }
          }
        }
        if (aciertos == nkeys.length) {
          pasa = true;
          nvalor = i;
          i = variables.length + 10;
        }
        if (pasa) {
          ladata.sku = variables[nvalor].reference;
          var lrf = document.getElementById('referencia');
          var uv = document.getElementById('unidadVenta');
          if (lrf) {
            lrf.innerText = variables[nvalor].reference.replace(/-R$/, '');
            var referenciaLimpia = lrf.outerHTML.replace(/-R$/, '');
            referenciaLimpia = referenciaLimpia.split(/>/)[1].split(/</)[0];
            this.referenciaChida = referenciaLimpia;
            // this.getExistencias(referenciaLimpia,sitio);
            if (uv) {
              uv.innerText = variables[nvalor].unidadVenta.replace(/-R$/, '');
              var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
              unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
              // this.getPrecioUnitario(referenciaLimpia,unidadventLimpia);
            }
          }

          i = variables.length + 100;
          this.crr_sel = 0;
          this.crr_indx = 0;
        }
      }
      if (!pasa) {
        if (this.crr_sel <= document.getElementsByName('atributos').length - 1) {
          var elselect = document.getElementsByName('atributos')[this.crr_sel];
          if (elselect.options.length > this.crr_indx + 1) {
            elselect.selectedIndex = this.crr_indx;
            this.crr_indx++;
          } else {
            this.crr_sel++;
            this.crr_indx = 0;
          }
          this.cambiaSku();
          var lrf = document.getElementById('referencia');
          var uv = document.getElementById('unidadVenta');
          if (lrf) {
            lrf.innerText = variables[i].reference.replace(/-R$/, '');
            var referenciaLimpia = lrf.outerHTML.replace(/-R$/, '');
            referenciaLimpia = referenciaLimpia.split(/>/)[1].split(/</)[0];
            this.referenciaChida = referenciaLimpia;
            // this.getExistencias(referenciaLimpia,sitio);
            if (uv) {
              uv.innerText = variables[i].unidadVenta.replace(/-R$/, '');
              var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
              unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
              // this.getPrecioUnitario(referenciaLimpia,unidadventLimpia);
            }
          }
        } else {
          this.crr_sel = 0;
          this.crr_indx = 0;
        }
      }
    }
  }
  ShowError() {
    var _this2 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Inventario Insuficiente',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  ShowError3() {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'No puedes llevar al Carrito mas de la Cantidad en Existencias',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  showSuccess() {
    var _this4 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastController.create({
        message: 'Producto agregado al carrito',
        color: "success",
        position: "top",
        duration: 1000
      });
      toast.present();
    })();
  }
  ShowError2() {
    var _this5 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: 'Necesitas Seleccionar Color',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  yaexiste() {
    var _this6 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this6.toastController.create({
        message: 'Este Producto ya se encuentra en tu Wishlist.',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  agregado() {
    var _this7 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this7.toastController.create({
        message: 'Este Producto se agrego a tu Wishlist.',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  agregarWishlist() {
    var jsonWishlist = {
      "usuario": this.usuario.usuario,
      "id_product": this.productoData[0].id_product,
      "title": this.productoData[0].title,
      "sku": this.productoData[0].sku,
      "quantiity": this.cantidad,
      "imagen": this.productoData[0].image_link,
      "sku_imagen": this.referenciaChida,
      "color": this.colorSeleccionado,
      "medida": this.productoData[0].unitId
    };
    this.servicioWishlist.sendWishlist(jsonWishlist).subscribe(data => {
      if (data == 0) {
        this.yaexiste();
      } else {
        this.agregado();
      }
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__.CarritoServiceService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
  }, {
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_5__.ServiciowishlistService
  }];
};
DescripcionPaquetesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-descripcion-paquetes',
  template: _descripcion_paquetes_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
  styles: [(_descripcion_paquetes_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DescripcionPaquetesPage);

/***/ }),

/***/ 91170:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/descripcion-paquetes/descripcion-paquetes.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */
@font-face {
  font-family: swiper-icons;
  src: url("data:application/font-woff;charset=utf-8;base64, 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");
  font-weight: 400;
  font-style: normal;
}
:root {
  --swiper-theme-color:#007aff;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.swiper-android .swiper-slide, .swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-pointer-events {
  touch-action: pan-y;
}

.swiper-pointer-events.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

.swiper-autoheight, .swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-cube-shadow, .swiper-3d .swiper-slide, .swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top, .swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d .swiper-slide-shadow, .swiper-3d .swiper-slide-shadow-bottom, .swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right, .swiper-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-horizontal.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-vertical.swiper-css-mode > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-centered > .swiper-wrapper::before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}

.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}

.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}

.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

:root {
  --swiper-navigation-size:44px;
}

.swiper-button-next, .swiper-button-prev {
  position: absolute;
  top: 50%;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - var(--swiper-navigation-size) / 2);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}

.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

.swiper-button-next.swiper-button-hidden, .swiper-button-prev.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}

.swiper-navigation-disabled .swiper-button-next, .swiper-navigation-disabled .swiper-button-prev {
  display: none !important;
}

.swiper-button-next:after, .swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev, .swiper-rtl .swiper-button-next {
  left: 10px;
  right: auto;
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
  content: "prev";
}

.swiper-button-next, .swiper-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
}

.swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
  content: "next";
}

.swiper-button-lock {
  display: none;
}

ion-content {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.deskheader {
  display: none;
}

.deskfooter {
  display: none;
}

ion-button {
  --box-shadow: transparent !important;
}

ion-card {
  background: rgba(255, 255, 255, 0.164);
  -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
  /*background: rgb(28,138,242);
  background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 0.5px solid rgba(0, 0, 0, 0.082);
}
ion-card .contImg {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
ion-card .contImg img {
  width: 80%;
  height: auto;
}
ion-card .text {
  width: 100%;
  height: 40%;
  color: black;
  font-size: 15px;
  font-weight: bold;
}
ion-card .text ion-text {
  width: 100%;
  font-size: 20vw;
  text-align: center;
  color: rgb(0, 0, 0);
}

.textillo {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
}

.form-group {
  margin-left: 100px;
}

.swiper-pagination {
  margin-top: 10px;
}

.selector-color {
  display: inline-block;
  margin: 0px 2px;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
  transform: rotate(0deg);
  transition: 1s;
}

.texto-descripcion {
  color: white;
  font-size: 1.3em;
}

.selected.selector-color {
  transform: rotate(360deg);
}

.selector-color input {
  width: 30px;
  background-size: cover;
  position: absolute;
  height: 30px;
  top: 5px;
  left: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.2) 0px 0px 12px;
  transition: 1s;
  border-radius: 50%;
  border: none;
}

.selected.selector-color input {
  width: 40px;
  height: 40px;
  top: 0px;
  left: 0px;
}

.contiene-descripcion > table > tbody > tr > td > div > img {
  max-width: 100%;
  height: auto;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-container-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.swiper-container {
  padding-top: 0em;
  width: 25em;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tituloDescripcion {
  color: rgb(27, 172, 209);
  font-family: "RobotoCondensed-Light";
  font-size: 18px;
  font-style: italic;
  text-align: center;
}

.titulillo {
  font-size: 20px;
  margin-bottom: 0em;
  color: black;
  font-weight: 100;
  text-transform: uppercase;
  text-align: center;
  font-size: 26px;
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
}

@media screen and (max-width: 992px) {
  .swiper-container-wrapper {
    display: none;
  }
  #swiperEscritorio {
    display: none;
  }
  .dnPd {
    display: none;
  }
  .columnas {
    height: min-content;
  }
  .swiper-container {
    height: auto;
  }
  .columnas ion-col {
    width: 25%;
  }
  .columnas ion-col:nth-of-type(1) {
    order: 1;
  }
  .columnas ion-col:nth-of-type(1) .columnas ion-col:nth-of-type(2) {
    order: 2;
  }
  .columnas ion-col:nth-of-type(1) .columnas ion-col:nth-of-type(3) {
    order: 3;
  }
  #CodigoYColor {
    margin-right: 10em;
  }
}
.precio {
  color: rgb(29, 171, 209);
  font-family: "RobotoCondensed-Light";
  font-size: 35px;
  letter-spacing: normal;
  line-height: 38.5px;
  -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
  text-transform: uppercase;
}

@media screen and (min-width: 993px) {
  .deskheader {
    display: block;
  }
  .deskfooter {
    display: block;
  }
  #swiper-mobile {
    display: none;
  }
  #caracteristicas {
    box-sizing: border-box;
    margin: auto;
    width: 100%;
    height: -moz-fit-content;
    height: fit-content;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  #irCarrito {
    display: none;
  }
  #existencia {
    display: none;
  }
  #colorSeleccionado {
    display: none;
  }
  ion-header {
    display: none;
  }
}
#existenciaDesk {
  display: none;
}
#existenciaDesk .conten-exist {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 0.5em 0em;
}
#existenciaDesk .conten-exist .lefti {
  color: #000;
  font-size: 1.2em;
}
#existenciaDesk .conten-exist .rigti {
  color: #00a3c7;
  font-size: 1.1em;
}

.nohay-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 0.7em 0em;
  border-bottom: 1px solid #f00;
  margin-bottom: 1em;
}
.nohay-cont .textin {
  color: #f00;
  font-weight: 600;
  font-size: 1.2em;
}
.nohay-cont i {
  color: #f00;
  font-size: 2.2em;
}

.cont-car {
  width: 70%;
  height: auto;
}
.cont-car table {
  width: 100%;
  height: auto;
  text-align: center;
}
.cont-car ul {
  width: 100%;
  padding: 0em 25%;
}
.cont-car td {
  border: 1px solid #cdcdcd;
}
.cont-car tbody {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.cont-car h5 span {
  font-size: 1.7em;
}
.cont-car p span {
  font-size: 1.4em;
  color: #00a3c7;
}
.cont-car hr {
  background-color: #000;
  margin: 2em 0em;
}

@media (min-width: 992px) {
  #existenciaDesk {
    display: block;
  }
  .cont-car {
    height: 50em;
    overflow-y: scroll;
    box-shadow: rgba(3, 165, 198, 0.43) 0px 2px 8px 0px;
    padding: 1em;
  }
}
@media (max-width: 992px) {
  .cont-car {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper.min.css","webpack://./src/app/pages/descripcion-paquetes/descripcion-paquetes.page.scss","webpack://./node_modules/swiper/modules/navigation/navigation.min.css"],"names":[],"mappings":"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","sourcesContent":["/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}","@import \"swiper/css\";\n@import \"swiper/css/navigation\";\n\nion-content{\n    background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n}\n\n.deskheader{\n  display: none;\n}\n\n.deskfooter{\n  display: none;\n}\n\n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  ion-card{\n      background: rgba(255, 255, 255, 0.164); //     #fdfdfd            #14A8CD*\n      backdrop-filter: blur(2px);\n      /*background: rgb(28,138,242);\n      background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/\n      display: flex;\n      justify-content:space-between;\n     \n      flex-direction: column;\n      //box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n      //box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n      width: 100%;\n      height: 100%;\n      border-radius: .25rem;\n  \n      /* From https://css.glass */\n      background: rgba(255, 255, 255, 0.150);\n      border-radius: 10px;\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n      backdrop-filter: blur(3px);\n      -webkit-backdrop-filter: blur(3px);\n      border: .5px solid rgba(0, 0, 0, 0.082);\n  \n      .contImg{\n        width: 100%;\n        height: 60%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n  \n        img{\n          width: 80%;\n          height: auto;\n        }\n      }\n  \n      .text{\n        width: 100%;\n        height: 40%;\n        color: black;\n        font-size: 15px;\n        font-weight: bold;\n        ion-text{\n          width: 100%;\n          font-size: 20vw;\n          text-align: center;\n          color: rgb(0, 0, 0);\n          // text-shadow: 4px 3px 4px rgb(65, 64, 64); \n        }\n  \n      }\n  \n  \n  \n    }\n  \n    .textillo{\n        font-size: 20px;\n        margin-bottom: 10px;\n        color: black;\n        font-weight: bold;\n    }\n  \n    .form-group{\n  \n   margin-left: 100px;\n    }\n\n    .swiper-pagination{\n      margin-top: 10px;\n    }\n  \n    .selector-color {\n      display: inline-block;\n      margin: 0px 2px;\n      width: 40px;\n      height: 40px;\n      position: relative;\n      border-radius: 3px;\n      cursor: pointer;\n      overflow: hidden;\n      transform: rotate(0deg);\n      transition: 1s;\n    }\n    .texto-descripcion {\n      color: white;\n      font-size: 1.3em;\n    }\n    \n    .selected.selector-color {\n      transform: rotate(360deg);\n    }\n    \n    .selector-color input {\n      width: 30px;\n      background-size: cover;\n      position: absolute;\n      height: 30px;\n      top: 5px;\n      left: 5px;\n      box-shadow: inset rgb(0 0 0 / 20%) 0px 0px 12px;\n      transition: 1s;\n      border-radius: 50%;\n      border: none;\n    }\n    \n    .selected.selector-color input {\n      width: 40px;\n      height: 40px;\n      top: 0px;\n      left: 0px;\n    }\n    \n    .contiene-descripcion > table > tbody > tr > td > div > img {\n      max-width: 100%;\n      height: auto;\n    }\n\n    .swiper {\n      width: 100%;\n      height: 100%;\n    }\n    \n    .swiper-container-wrapper{\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n    .swiper-container{\n      padding-top: 0em;\n      width: 25em;\n      height: auto;\n     \n      margin: 0 auto;\n      display: flex;\n      justify-content: center;\n      //align-items: center;\n    }\n\n\n    .swiper-slide {\n      text-align: center;\n      font-size: 18px;\n      background: #fff;\n    \n      /* Center slide text vertically */\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n    }\n    \n    .swiper-slide img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper-slide video {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper {\n      width: 100%;\n      height: 300px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    \n    .swiper-slide {\n      background-size: cover;\n      background-position: center;\n    }\n    \n    .mySwiper2 {\n      height: 80%;\n      width: 100%;\n    }\n    \n    .mySwiper {\n      height: 100%;\n      box-sizing: border-box;\n      padding: 10px 0;\n    }\n    \n    .mySwiper .swiper-slide {\n      width: 25%;\n      height: 100%;\n      opacity: 0.4;\n    }\n    \n    .mySwiper .swiper-slide-thumb-active {\n      opacity: 1;\n    }\n    \n    .swiper-slide img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper-slide video {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .tituloDescripcion{\n      color: rgb(27,172,209);\n      font-family: 'RobotoCondensed-Light';\n      font-size: 18px;\n      font-style: italic;\n      text-align: center;\n    }\n\n    .titulillo{\n      font-size: 20px;\n      margin-bottom: 0em;\n      color: black;\n      font-weight: 100;\n      text-transform: uppercase;\n      text-align: center;\n      font-size: 26px;\n    }\n   \n\n    .loader {\n      display: flex;\n      width: 100%;\n      height: 100%;\n      background-position: center;\n      justify-content: center;\n      align-items: center;\n      background-size: cover;\n      position: fixed;\n      top: calc(0%);\n      left: calc(0%);\n      background-color: rgb(255, 255, 255);\n      opacity: 0.9;\n    \n      img{\n        width: 200px;\n        height: auto;\n   \n      }\n  \n    }\n\n    @media screen and (max-width:992px){\n      .swiper-container-wrapper{\n        display: none;\n      }\n      #swiperEscritorio{\n        display: none;\n      }\n\n      .dnPd{\n        display: none;\n      }   \n\n      // .descripcionProducto{\n      //   display: none;\n      // }\n\n      .columnas{\n        height: min-content;\n      }\n      .swiper-container{\n        height: auto;\n      }\n    \n      .columnas ion-col{\n      \n         width: 25%;\n      }\n      .columnas ion-col:nth-of-type(1){\n        order: 1;\n      .columnas ion-col:nth-of-type(2){\n        order: 2;\n      }\n      .columnas ion-col:nth-of-type(3){\n        order: 3;\n      }\n    }\n    #CodigoYColor{\n      margin-right: 10em;\n    }\n    }  \n    \n    // @media screen and (min-width:993px){\n    //     .columnas {\n    //       height: min-content;\n    //     }\n    \n    //     .columnas ion-col{\n    //       width: 25%;\n    //     }\n    //     .columnas ion-col:nth-of-type(2){\n    //       order: 1;\n    //     }\n    //     .columnas ion-col:nth-of-type(1){\n    //       order: 2;\n    //     }\n    //     .columnas ion-col:nth-of-type(3){\n    //       order: 3;\n    //     }\n    \n    // }\n    .precio{\n      color: rgb(29,171,209);\n      font-family: 'RobotoCondensed-Light';\n      font-size: 35px;\n      letter-spacing: normal;\n      line-height: 38.5px;\n      text-size-adjust: 100%;\n      text-transform: uppercase;\n    }\n    \n    @media screen  and (min-width:993px){\n      .deskheader{\n        display: block;\n      }\n\n      .deskfooter{\n        display: block;\n      }\n\n      #swiper-mobile{\n        display: none;\n      }\n      \n      // #descripcionProducto{\n      //   display: none;\n      // }\n      #caracteristicas{\n        //padding-left: 20%;\n        //padding-left: 15em;\n        //padding-right: 15em;\n        box-sizing: border-box;\n        margin: auto;\n        width: 100%;\n        height: fit-content;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n      }\n      #irCarrito{\n        display: none;\n      }\n      \n      #existencia{\n        display: none;\n      }\n      #colorSeleccionado{\n        display: none;\n      }\n\n      ion-header{\n        display: none;\n      }\n}\n\n#existenciaDesk{\n  display: none;\n\n  .conten-exist{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    padding: .5em 0em;\n\n    .lefti{\n      color: #000;\n      font-size: 1.2em;  \n    }\n\n    .rigti{\n      color: #00a3c7;\n      font-size: 1.1em;\n    }\n  }\n}\n\n.nohay-cont{\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1em;\n  padding: 0.7em 0em;\n  border-bottom: 1px solid #f00;\n  margin-bottom: 1em;\n\n  .textin{\n    color: #f00;\n    font-weight: 600;\n    font-size: 1.2em;\n  }\n\n  i{\n    color: #f00;\n    font-size: 2.2em;\n  }\n}\n\n.cont-car{\n  width: 70%;\n  height: auto;\n\n  table{\n    width: 100%;\n    height: auto;\n    text-align: center;\n  }\n  \n  ul{\n    width: 100%;\n    padding: 0em 25%;\n  }\n  \n  td{\n    border: 1px solid #cdcdcd;\n  }\n  \n  \n  tbody{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n  }\n  \n  h5{\n    span{\n      font-size: 1.7em;\n    }\n  }\n  \n  p{\n    span{\n      font-size: 1.4em;\n      color: #00a3c7;\n    }\n  }\n  \n  hr{\n    background-color: #000;\n    margin: 2em 0em;\n  }\n}\n\n@media(min-width: 992px){\n  #existenciaDesk{\n    display: block;\n  }\n\n  .cont-car{\n    height: 50em;\n    overflow-y: scroll;\n    box-shadow: rgb(3 165 198 / 43%) 0px 2px 8px 0px;\n    padding: 1em;\n  }\n}\n\n@media(max-width: 992px){\n  .cont-car{\n    width: 100%;\n  }\n}",":root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4233:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/descripcion-paquetes/descripcion-paquetes.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Descripción Producto\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n\n\n      <!-- <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar> -->\n      <!-- </ion-toolbar> -->\n  \n</ion-header>\n\n\n\n\n<ion-content>\n  <app-desk-header class=\"deskheader\" style=\"width: 100%;\"></app-desk-header>\n  <div class=\"columnas\">\n    <ion-row style=\"width: 100%;\">\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"height: min-content;\" id=\"descripcionProducto\">    \n        <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none;border: none; height: min-content; margin-inline: 0px;\"> \n          <ion-text class=\"tituloDescripcion\"><u>{{producto.title}} </u></ion-text>          \n               \n                <ion-card-content id=\"\">\n                  <ion-card-title class=\"ion-text-center\">Descripción del Producto</ion-card-title>\n                 <br>\n                  <div [innerHTML]=\"descripcionsilla\"></div>\n                </ion-card-content>\n        </ion-card>        \n     </ion-col>\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\">\n        <ion-card style=\"box-shadow: none;margin: 0; border: none;\" *ngFor=\"let producto of productoData\">\n          <ion-text class=\"titulillo\">{{producto.title}}</ion-text>\n          <!-- <img src=\"{{producto.image_link}}\"> -->\n    \n          <div class=\"swiper-container-wrapper\">\n            <div style=\"padding-top: 0em;\" class=\"swiper-container\" style=\"align-items: baseline;\" id=\"zoom\">\n              <swiper style=\"--swiper-navigation-color: #fff;--swiper-pagination-color: #fff;\" [spaceBetween] = \"0\" [pagination] = \"true\" [navigation] =\"false\" [thumbs]=\"{swiper:thumbsSwiper2}\" class=\"mySwiper2\" >                \n                  <ng-template ngFor let-item [ngForOf]=\"slider\" let-i=\"index\">\n                    <ng-template swiperSlide>                  \n                      <img [src]=\"item.slider\" alt=\"wrapmaster slider product\"/>\n                    </ng-template>\n                  </ng-template>             \n              </swiper>\n            </div>\n\n            <div class=\"swiper-container\">\n              <swiper (swiper)=\"thumbsSwiper2 = $event\"[spaceBetween]=\"10\" [navigation]=\"false\" [slidesPerView]=\"3\" [freeMode]=\"true\" [watchSlidesProgress]=\"true\" class=\"mySwiper\">\n                <ng-container *ngFor=\"let item of slider; index as i\">\n                  <ng-template swiperSlide>\n                    <img src=\"{{item.slider}}\" alt=\"wrapmaster slider product\"/>\n                  </ng-template>\n                </ng-container>\n              </swiper>\n\n            </div>\n\n          </div>\n    \n          \n          <swiper id=\"swiper-mobile\" [navigation]=\"true\" [pagination]=\"false\" class=\"mySwiper2\">\n            <ng-template *ngFor=\"let item of slider\" swiperSlide><img  src=\"{{item.slider}}\"></ng-template>\n        </swiper>\n        </ion-card>\n      </ion-col>\n        <!-- <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\"style=\"height: min-content;\">\n          <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none; border:none\">\n            <ion-card-content>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <ion-text class=\"text\" >Precio:</ion-text>\n                  </ion-col>\n                  <ion-col>\n                    <ion-text class=\"text\" >${{producto.precio | number: '1.2-2'}} mxn </ion-text>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                  <ion-text class=\"text\" >SKU:</ion-text>\n                  </ion-col>\n                  <ion-col>\n                  <ion-text class=\"text\">{{producto.sku}}</ion-text> \n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-text class=\"text\">Existencia:</ion-text>\n                  </ion-col>\n                  <ion-col>\n                  <ion-text class=\"text\">{{existencias}}</ion-text> \n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                      <div *ngFor=\"let atributo of atributos\">\n                        <ion-col >\n                        <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                      </ion-col>\n                      <ion-col >\n                        <div *ngIf=\"atributo.is_color_group != '1'\">\n                          <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                            class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n                            <input type=\"button\" *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                              style=\"background-color: {{valor.color}}\">\n                            <input type=\"button\" *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                              style=\"background-image: url({{valor.image}});\">\n              \n                          </div>\n                        </div>\n                      \n                      \n                        <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                          class=\"form-group {{atributo.id_attribute_group}}\" >\n                          <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                        </select>\n                      </ion-col>\n                      </div>\n                </ion-row>\n                <ion-row>\n                  <ion-col>\n                    <ion-text class=\"text\">Cantidad:</ion-text>   \n                  </ion-col>\n                  <ion-col>\n                    <ion-input class=\"text\" type=\"number\" min=\"1\" value=\"1\" max=\"{{producto.existencia}}\"></ion-input>\n                  </ion-col>\n                </ion-row>\n                <ion-button (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n                <ion-button routerLink=\"/cart\" >Ir a Carrito</ion-button>\n                <ion-button (click)=\"agregarWishlist()\">Agregar a Wishlist</ion-button>\n              </ion-grid>\n            </ion-card-content>    \n          </ion-card>\n        </ion-col> -->\n\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\">\n        <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none; border:none\">\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                 <ion-col *ngIf=\"!descuentillo\">\n                  <ion-text class=\"precio\" >${{precioDyn | number: '1.2-2'}}</ion-text>\n                  <span style=\"font-size: 14px;color: rgb(29, 171, 209);font-family: 'RobotoCondensed-Light';text-transform: uppercase;\"> mxn </span>\n                  </ion-col>            \n                                      \n                <ion-col *ngIf=\"descuentillo\">\n                 \n                  <ion-text class=\"text\" >${{precioDyn*descuento | number: '1.2-2'}} <del>${{precioDyn | number: '1.2-2'}}  mxn </del></ion-text>                 \n\n                  \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text style=\"font-size: 12px; font-family: 'RobotoCondensed-Light';color: rgb(51,51,51);\">IVA incluido</ion-text>\n                </ion-col>\n              </ion-row>\n\n              <div style=\"border-top: 1px solid #eaeaea;border-bottom: 1px solid #eaeaea; color: #333333; padding-top: 12px;padding-bottom: 12px;font-size: 18px;\">\n                <div>\n                  <dl id=\"CodigoYColor\" style=\"color: rgb(29, 171, 209);\">\n                    <dt style=\"background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.3em 0.5em;\">Código</dt>\n                    <dt id=\"referencia\" style=\"text-align: left; background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.3em 0.5em; color: #111; font-size: .9em;\">{{ producto.sku  }}</dt>\n                  </dl>\n                  <dl id=\"CodigoYColor\" style=\"color: rgb(29, 171, 209);\">\n                    <dt style=\"background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.3em 0.5em;\">\n                      Color\n                    </dt>\n                    <dt style=\"text-align: left; background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.3em 0.5em; color: #111; font-size: .9em;\">\n                      {{colorSeleccionado}}\n                    </dt> \n                  </dl>\n                </div>             \n                \n                \n               \n              </div>\n\n              <ion-row>\n                <!-- <ion-col>\n                 <ion-text class=\"text\" >SKU:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\">\n                    \n                      <span id=\"referencia\">{{ producto.sku  }}\n                      </span>\n                  </p>\n                </ion-col> -->\n              </ion-row>\n              <ion-row id=\"existencia\">\n                <ion-col>\n                  <ion-text  class=\"text\">Existencia:</ion-text>\n                </ion-col>\n                <ion-col>\n                <ion-text class=\"text\">{{existencias}}</ion-text> \n                </ion-col>\n              </ion-row>\n              <ion-row id=\"existenciaDesk\">\n                <div class=\"conten-exist\">\n                  <span class=\"lefti\">Existencia:</span>\n                  <span class=\"rigti\">{{existencias}}</span>\n                </div>\n              </ion-row>\n              <!-- <ion-row>\n                <ion-col>\n                  <ion-text class=\"text\" style=\"color:rgb(27, 172, 209);\">Unidad de Venta:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\"><span id=\"unidadVenta\">{{producto.unitId}}</span></p>\n                </ion-col>\n              </ion-row> -->\n              <ion-row id=\"colorSeleccionado\">\n                <ion-col>\n                  <ion-text class=\"text\">Color Seleccionado:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\"><span >{{colorSeleccionado}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n    \n                    <div *ngFor=\"let atributo of atributos\">\n                      <ion-col >\n                      <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                    </ion-col>\n                    <ion-col >\n                      <div *ngIf=\"atributo.is_color_group != '1'\">\n                        <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                          class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n                          <!-- <ion-button *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                          (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-color: {{valor.color}}\">{{valor.name}}</ion-button>\n                          <ion-button *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                          (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-image: url({{valor.image}});\">{{valor.name}}</ion-button> -->\n                            <input type=\"button\" *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-color: {{valor.color}}\" >\n                            <input type=\"button\" *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-image: url({{valor.image}});\" >\n            \n                        </div>\n                      </div>\n                    \n                    \n                      <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                        class=\"form-group {{atributo.id_attribute_group}}\" >\n                        <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                      </select>\n                    </ion-col>\n                    </div>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <!-- <ion-text class=\"text\">Cantidad:</ion-text>    -->\n                  <div>\n                    <!-- <ion-row >\n                      <ion-col>\n                        <ion-label style=\"font-family: 'RobotoCondensed-Light'; font-weight: bold;\">\n                          CANTIDAD\n                        </ion-label>\n                      </ion-col>\n                    </ion-row>                  \n                    <ion-row>\n                      <ion-col>\n                        <ion-label>\n                          <ion-item>\n                            <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                          </ion-item>\n                        </ion-label>\n                      </ion-col>\n                    </ion-row> -->\n                  </div>\n                </ion-col>\n\n                <!-- <div>\n                  <ion-row>\n                    <ion-col>\n                      <ion-label style=\"font-family: 'RobotoCondensed-Light';\">\n                        CANTIDAD\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>                  \n                  <ion-row>\n                    <ion-col>\n                      <ion-label>\n                        <ion-item>\n                          <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                        </ion-item>\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </div> -->\n                <ion-col>\n                  <!-- <ion-item>\n                    <ion-label style=\"font-family: 'RobotoCondensed-Light';\">CANTIDAD</ion-label>\n                  </ion-item>\n                  <ion-item>\n                    <ion-input type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                  </ion-item> -->\n                  \n\n\n                  <!-- <ion-item>\n                    <ion-label>\n                      <p>Cantidad: <input style=\"width: 30%;\" type=\"number\"  [value]=\"quantity\"  (change)=\"validateInput($event,i)\"> </p> -->\n\n                      <!-- <ion-input label=\"cantidadInput\" type=\"number\" placeholder=\"1\"></ion-input> -->\n                      <!-- <input type=\"number\" placeholder=\"1\"></input> -->\n                    <!-- </ion-label>\n                  </ion-item> -->\n                </ion-col>\n                \n                <!-- <ion-col style=\"display: flex;align-items: center; justify-content:start ;\">\n                  <ion-icon name=\"remove-circle\" style=\"width: 25px;height: 30px;color: #6cdff9;padding-right: 10px;\" (click)=\"decrement()\"></ion-icon>\n                    <ion-label style=\"font-size:15px;color: black;font-weight: bold;\">{{cantidad}}</ion-label> \n                     <ion-icon name=\"add-circle\" style=\"width: 25px;height: 30px;color:#6cdff9;padding-left: 10px;\" (click)=\"increment()\"></ion-icon> \n                  <ion-input class=\"text\" type=\"number\" min=\"1\" onkeyup=\"if(this.value<0){this.value= this.value * -1}\" [(ngModel)]=\"cantidad\" max=\"{{producto.existencia}}\"></ion-input>\n                </ion-col> -->\n              </ion-row>\n              <ion-row >\n                <ion-col>\n                  <ion-label style=\"font-family: 'RobotoCondensed-Light'; font-weight: bold;\">\n                    CANTIDAD\n                  </ion-label>\n                </ion-col>\n              </ion-row>                  \n              <ion-row>\n                <ion-col>\n                  <ion-label>\n                    <ion-item>\n                      <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                    </ion-item>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-button  (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button> -->\n              <ion-button *ngIf=\"existencias>0\" id=\"addCarrito\" (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n              <div *ngIf=\"existencias==0\" class=\"nohay-cont\">\n                <span class=\"textin\">Producto Agotado</span>\n                <i class=\"fa-solid fa-face-sad-tear\"></i>\n              </div>\n              <ion-button id=\"irCarrito\" routerLink=\"/cart\"  >Ir a Carrito</ion-button>\n              <ion-button *ngIf=\"usuario\" id=\"wishlist\" (click)=\"agregarWishlist()\" >Agregar a Wishlist</ion-button>\n              <!-- <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  routerLink=\"/cart\"  >Ir a Carrito</ion-button>\n              <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarWishlist()\" >Agregar a Wishlist</ion-button> -->\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n\n      <!-- <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"height: min-content;\" id=\"descripcionProducto\">    \n        <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none;border: none; height: min-content;\"> \n          <ion-text class=\"tituloDescripcion\"><u>{{producto.title}} </u></ion-text>          \n               \n                <ion-card-content id=\"\">\n                  <ion-card-title class=\"ion-text-center\">Descripción del Producto</ion-card-title>\n                 <br>\n                  <div [innerHTML]=\"descripcionsilla\"></div>\n                </ion-card-content>\n        </ion-card>        \n     </ion-col> -->\n\n    </ion-row>\n\n    <ion-card *ngFor=\"let producto of productoData\" style=\"\"> \n    <!-- <ion-text class=\"textillo\">{{producto.title}}</ion-text> -->\n     \n      \n      \n      <!-- <swiper id=\"swiper-mobile\" [navigation]=\"true\" [pagination]=\"false\" class=\"mySwiper2\">\n        <ng-template *ngFor=\"let item of slider\" swiperSlide><img  src=\"{{item.slider}}\"></ng-template>\n    </swiper>\n\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\" >Precio:</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text class=\"text\" >${{producto.precio | number: '1.2-2'}} mxn </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n             <ion-text class=\"text\" >SKU:</ion-text>\n            </ion-col>\n            <ion-col>\n             <ion-text class=\"text\">{{producto.sku}}</ion-text> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Existencia:</ion-text>\n            </ion-col>\n            <ion-col>\n            <ion-text class=\"text\">{{existencias}}</ion-text> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n                <div *ngFor=\"let atributo of atributos\">\n                  <ion-col >\n                  <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                </ion-col>\n                <ion-col >\n                  <div *ngIf=\"atributo.is_color_group != '1'\">\n                    <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                      class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n                      <input type=\"button\" *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-color: {{valor.color}}\">\n                      <input type=\"button\" *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-image: url({{valor.image}});\">\n        \n                    </div>\n                  </div>\n                \n                \n                  <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                    class=\"form-group {{atributo.id_attribute_group}}\" >\n                    <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                  </select>\n                </ion-col>\n                </div>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Cantidad:</ion-text>   \n            </ion-col>\n            <ion-col>\n              <ion-input class=\"text\" type=\"number\" min=\"1\" value=\"1\" max=\"{{producto.existencia}}\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n          <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  routerLink=\"/cart\" >Ir a Carrito</ion-button>\n          <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  >Agregar a Wishlist</ion-button>\n        </ion-grid>\n      </ion-card-content> -->\n\n      <ion-card-content id=\"caracteristicas\">\n        <ion-card-title class=\"font-weight:bolder;text-align:center\">Caracteristicas de Producto</ion-card-title>\n       <br>\n        <div [innerHTML]=\"descripcionsita\" class=\"cont-car\"></div>\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n\n  <div class=\"loader\" *ngIf=\"cargando\">\n    <img src=\"/assets/img/loadersillo.gif\">\n  </div>\n  <app-desk-footer class=\"deskfooter\"></app-desk-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_descripcion-paquetes_descripcion-paquetes_module_ts.js.map
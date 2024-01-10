(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 47449:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageRoutingModule: () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 31269);




const routes = [{
  path: '',
  component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
}];
let HomePageRoutingModule = class HomePageRoutingModule {};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], HomePageRoutingModule);

/***/ }),

/***/ 49142:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePageModule: () => (/* binding */ HomePageModule),
/* harmony export */   LazyLoadImageHooks: () => (/* binding */ LazyLoadImageHooks)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 47449);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 31269);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-lazyload-image */ 21935);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 54267);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swiper/angular */ 29909);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);











class LazyLoadImageHooks extends ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.IntersectionObserverHooks {
  setup(attributes) {
    attributes.defaultImagePath = '../../assets/lideart_icon.png';
    return super.setup(attributes);
  }
}
let HomePageModule = class HomePageModule {};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LazyLoadImageModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__.SweetAlert2Module, swiper_angular__WEBPACK_IMPORTED_MODULE_10__.SwiperModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
  providers: [{
    provide: ng_lazyload_image__WEBPACK_IMPORTED_MODULE_3__.LAZYLOAD_IMAGE_HOOKS,
    useClass: LazyLoadImageHooks
  }]
})], HomePageModule);

/***/ }),

/***/ 31269:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomePage: () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 62019);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var _modal_descripcion_producto_modal_descripcion_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-descripcion-producto/modal-descripcion-producto.page */ 20340);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper */ 58595);













swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_7__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_7__.Virtual, swiper__WEBPACK_IMPORTED_MODULE_7__.EffectCoverflow]);
let HomePage = class HomePage {
  constructor(usuarioService, apiProductos, modalCtrl, activatedRoute, shoppingCart, renderer, router, loginService) {
    this.usuarioService = usuarioService;
    this.apiProductos = apiProductos;
    this.modalCtrl = modalCtrl;
    this.activatedRoute = activatedRoute;
    this.shoppingCart = shoppingCart;
    this.renderer = renderer;
    this.router = router;
    this.loginService = loginService;
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
    this.slider = [];
    this.urlIMG = 'https://lideart.com.mx/modules/ps_imageslider/images/';
    this.datosUsuario = [];
    this.totalItems = 0;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.reviews = [];
    this.reviews2 = [];
    this.url = 'https://lideart.com.mx/';
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
    this.nav_contIs = false;
    this.cargando = false;
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
      if (this.usuario) {
        this.checalo();
      }
    });
  }
  ngOnInit() {
    this.loginService.getReviews().subscribe(res => {
      this.reviews = res;
      for (let index = 0; index < this.reviews.length; index++) {
        this.reviews2.push(this.reviews[index]);
      }
      //this.loaded = true;
      this.URLestrellas = "https://lideart.com.mx/modules/lgcomments/views/img/stars/plain/bluelight/" + this.reviews.stars + "stars.png";
      this.reviews2 = this.reviews2.reverse();
      console.log(this.reviews2);
    });
    this.traeImagenesBanner();
    this.apiProductos.getProductos().subscribe(response => {
      this.productos = response;
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    if (window.screen.width <= 992) {
      if (this.usuario) {
        this.checalo();
      }
    }
  }
  handleNav() {
    if (this.nav_contIs == false) {
      this.renderer.setStyle(this.nav_cont.nativeElement, 'top', '5.3em');
      this.renderer.setStyle(this.nav_cont.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.nav_cont.nativeElement, 'visibility', 'visible');
      this.nav_contIs = true;
    } else if (this.nav_contIs == true) {
      this.renderer.setStyle(this.nav_cont.nativeElement, 'top', '-25em');
      this.renderer.setStyle(this.nav_cont.nativeElement, 'opacity', '0');
      this.renderer.setStyle(this.nav_cont.nativeElement, 'visibility', 'hidden');
      this.nav_contIs = false;
    }
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
  traeImagenesBanner() {
    this.apiProductos.getSlaidaHome().subscribe(imagenes => {
      this.slider = imagenes;
    });
  }
  search(event) {
    if (event.detail.value != '') {
      const filtro = event.target.value.trim();
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
      console.log(this.txtBuscador);
    }
  }
  openSearchBar2(item, sku) {
    var buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.style.display = "block";
      this.cargando = true;
      this.apiProductos.esPaquete(sku).subscribe(paquetillo => {
        this.respaq = paquetillo;
        if (this.respaq == 1) {
          this.cargando = false;
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            this.router.navigate(['/descripcion-paquetes/' + item]);
          });
        }
        if (this.respaq == 0) {
          this.cargando = false;
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            this.router.navigate(['/descripcion-producto/' + item]);
          });
        }
      });
    }
    this.txtBuscador = '';
    this.searchbarVisible = this.searchbarVisible == false ? true : false;
    if (this.searchbarVisible == false) {
      this.cargando = true;
      buscador.style.display = "none";
      this.apiProductos.getInfoPaquetes(sku).subscribe(paquetillo => {
        this.respaq = paquetillo;
        if (this.respaq == 1) {
          this.cargando = false;
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            this.router.navigate(['/descripcion-paquetes/' + item]);
          });
        }
        if (this.respaq == 0) {
          this.cargando = false;
          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            this.router.navigate(['/descripcion-producto/' + item]);
          });
        }
      });
    }
  }
  // async openModal(id: number) {
  //   this.txtBuscador = '';
  //   this.apiProductos.getSpecificProduct(id).subscribe(async (response) => {
  //     if (response[0]) {
  //       this.product = response[0];
  //       console.log(this.product);
  //       const modal = await this.modalCtrl.create({
  //         component: ModalDescripcionProductoPage,
  //         cssClass: 'my-custom-class',
  //         initialBreakpoint: 0.6,
  //         breakpoints: [0, 0.6, 0.8, 1],
  //         componentProps: {
  //           product: this.product,
  //         },
  //       });
  //       return await modal.present();
  //     }
  //   });
  // }
  modalDescripcion(id_product) {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _modal_descripcion_producto_modal_descripcion_producto_page__WEBPACK_IMPORTED_MODULE_6__.ModalDescripcionProductoPage,
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
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
    ;
  }
  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }
  checkisBeginning(object, slideView) {
    slideView.isBeginning().then(istrue => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then(istrue => {
      object.isEndSlide = istrue;
    });
  }
  checalo() {
    this.usuarioService.checaUsuario(this.usuario.usuario).subscribe(data => {
      this.datosUsuario = data;
      this.nombre = this.datosUsuario.nombre;
      this.apellido = this.datosUsuario.apellido;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__.CarritoServiceService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }];
  static #_2 = this.propDecorators = {
    nav_cont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
      args: ['nav_cont']
    }]
  };
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewEncapsulation.None,
  styles: [(_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HomePage);

/***/ }),

/***/ 62019:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
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

.scroll-y {
  display: none;
  overflow-y: var(--overflow);
  overscroll-behavior-y: contain;
}

img.ng-lazyloaded {
  animation: fadein 1.5s;
}

@media (min-width: 992px) {
  .display-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 992px) {
  .custom-col-header {
    width: max-content;
  }
}
.sdsds {
  color: #fff;
  width: 170px;
  font-size: 1em;
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
  height: 30px;
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

.catT {
  width: 100%;
  height: auto;
  background-color: rgb(11, 148, 240);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.catT ion-text {
  color: #fff;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.marcasT {
  width: 100%;
  height: auto;
  background-color: rgb(11, 148, 240);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.marcasT ion-text {
  color: #fff;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.foot {
  width: 100%;
  height: auto;
  background-color: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
}
.foot ion-text {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

/* Test Infinite */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-9000px);
  }
}
.cel-home {
  display: none;
}

.home-desk-cont {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.home-desk-cont #swiperDesk {
  width: 100%;
  height: auto;
}
.home-desk-cont #swiperDesk .noExisto {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.home-desk-cont #swiperDesk .noExisto2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.home-desk-cont #swiperDesk .swiper {
  width: 100%;
  height: 100%;
}
.home-desk-cont #swiperDesk .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-desk-cont #swiperDesk .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.home-desk-cont .cats-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5em 2em;
  gap: 1em;
}
.home-desk-cont .cats-cont .lain {
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
}
.home-desk-cont .cats-cont .lain .cat-cont {
  position: relative;
  width: 33%;
  height: auto;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6em 0em 2em 0em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  overflow: hidden;
  cursor: pointer;
}
.home-desk-cont .cats-cont .lain .cat-cont .cont-img {
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-position: center;
  background-size: cover;
  border-radius: 1.6em 0em 1.9em 0em;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.home-desk-cont .cats-cont .lain .cat-cont .cont-img img {
  width: 100%;
  height: 100%;
}
.home-desk-cont .cats-cont .lain .cat-cont .rondin {
  position: absolute;
  width: 5em;
  height: 250%;
  background-color: #00b8ff;
  z-index: 0;
  animation: giron 1.8s linear infinite;
  opacity: 0;
}
@keyframes giron {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.home-desk-cont .cats-cont .lain .cat-cont:hover .rondin {
  opacity: 1;
}
.home-desk-cont .imgs-cont-opcs {
  width: 100%;
  height: auto;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.home-desk-cont .imgs-cont-opcs .upi {
  width: 95%;
  height: auto;
  cursor: pointer;
}
.home-desk-cont .imgs-cont-opcs .upi img {
  width: 100%;
  height: auto;
}
.home-desk-cont .imgs-cont-opcs .dowi {
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.home-desk-cont .imgs-cont-opcs .dowi .imag {
  width: 50%;
  height: auto;
  cursor: pointer;
}
.home-desk-cont .marcas-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 2em;
}
.home-desk-cont .marcas-cont .title-marca {
  position: relative;
  width: 95%;
  height: 1.6em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7em;
  font-weight: 400;
  color: #fff;
  background-color: #1da5cb;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-top: 0;
  margin-bottom: 0;
}
.home-desk-cont .marcas-cont .title-marca .lain {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #fff;
  bottom: 0.3em;
}
.home-desk-cont .marcas-cont #swiperMarcas {
  width: 95%;
  height: 10em;
}
.home-desk-cont .marcas-cont #swiperMarcas .swiper {
  width: 100%;
  height: 100%;
}
.home-desk-cont .marcas-cont #swiperMarcas .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 100%;
}
.home-desk-cont .marcas-cont #swiperMarcas .swiper-slide img {
  display: block;
  width: 7em;
  height: auto;
  opacity: 0.8;
  transition: 0.2s all ease-in-out;
}
.home-desk-cont .marcas-cont #swiperMarcas .swiper-slide img:hover {
  opacity: 1;
}
.home-desk-cont .reviews-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 1em 2em;
  margin-top: 1em;
}
.home-desk-cont .reviews-cont .taitl-cont {
  width: 95%;
  height: 1.8em;
  font-size: 1.5em;
  font-weight: 400;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #17d9fd;
}
.home-desk-cont .reviews-cont .more {
  color: #555;
  text-decoration: none;
  font-size: 1em;
  transition: 0.3s all ease-in-out;
}
.home-desk-cont .reviews-cont .more:hover {
  color: #13aecb;
}
.home-desk-cont .reviews-cont #swiperReview {
  width: 95%;
  height: auto;
}
.home-desk-cont .reviews-cont #swiperReview .swiper {
  width: 100%;
  height: 100%;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-wrapper {
  padding: 1em;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment {
  padding: 1em;
  border-radius: 1em;
  width: 20em;
  height: auto;
  box-shadow: rgba(23, 217, 253, 0.2) 0px 10px 25px 0px, rgba(23, 217, 253, 0.1) 0px 0px 0px 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding-bottom: 3em;
  position: relative;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .taitl-cont2 {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .taitl-cont2 .titl {
  color: #333;
  font-size: 1em;
  font-weight: 100;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .stars-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .stars-cont .votes {
  width: 5em;
  height: auto;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .coment-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .coment-cont .coment {
  color: #666;
  font-size: 0.8em;
  font-weight: 100;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .who-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .who-cont .who {
  color: #666;
  font-size: 0.7em;
  font-weight: 100;
}
.home-desk-cont .reviews-cont #swiperReview .swiper-slide .card-coment .date {
  position: absolute;
  right: 1.5em;
  bottom: 1.5em;
  color: #15a7bf;
  font-size: 0.6em;
  font-weight: 100;
}
.home-desk-cont .parallax-cont {
  width: 100%;
  height: 22em;
  background: url('fondo2_final.webp');
  background-clip: initial;
  background-origin: initial;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}
.home-desk-cont .parallax-cont .txtin {
  color: #FFFFFF;
  font-size: 20px;
  background-color: rgba(243, 172, 177, 0.3882352941);
  padding: 0.5em 1em;
  border-radius: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
}
.home-desk-cont .parallax-cont::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3803921569);
}

.home-desk-cont::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.home-desk-cont::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}

@media (max-width: 992px) {
  .cel-home {
    display: block;
  }
  .home-desk-cont {
    display: none;
  }
}
.noExisto {
  width: 100%;
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper.min.css","webpack://./src/app/pages/home/home.page.scss","webpack://./node_modules/swiper/modules/navigation/navigation.min.css"],"names":[],"mappings":"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","sourcesContent":["/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}","@import \"swiper/css\";\n@import \"swiper/css/navigation\";\n\n.scroll-y {\n  display: none;  \n  overflow-y: var(--overflow);\n  overscroll-behavior-y: contain;\n}\n\nimg.ng-lazyloaded {\n  animation: fadein 1.5s;\n}\n\n// @media(min-width:992px){\n//     .display-grid{\n//     display: grid;\n//     grid-template-columns: repeat(3,1fr);\n//     }   \n  \n// }\n\n// @media(min-width:992px){\n//   .display-grid{\n//     display: grid;\n//     grid-template-columns: repeat(auto-fit,minmax(300px,1fr));\n//   }  \n// }\n// @media (min-width: 992px) and (max-width: 1226px) {\n//   .display-grid {\n//     display: grid;\n//     grid-template-columns: repeat(2, 1fr);\n//   }\n// }\n\n\n@media(min-width: 992px){    \n    .display-grid{\n      display: grid;\n      grid-template-columns: repeat(4,1fr);\n    }\n}\n\n@media(min-width:992px){\n  .custom-col-header{\n    width: max-content;\n  }\n}\n\n\n.sdsds{\n  color: #fff;\n  width: 170px;\n  font-size: 1em;\n}\n\nion-button {\n  --box-shadow: transparent !important;\n}\n\nbutton {\n  background-color: transparent !important;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n}\n\nion-searchbar {\n  --icon-color: #1ca3c9;\n  width: 95%;\n  margin-left: 10px;\n}\n\n.search-container {\n  width: 90vw;\n  right: 5vw;\n  height: auto;\n  max-height: 50vh;\n  overflow-y: scroll;\n  position: absolute;\n}\n\n.line-filter {\n  text-align: center;\n  line-height: 20px;\n  background: #70c2d1;\n  padding: 0;\n  margin: 0;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n.header-translucent-ios ion-toolbar {\n  --opacity: 1;\n}\n\nion-img::part(image) {\nwidth: 100px;\nheight: 30px;\n}\n\n\n.redes img{\n height: 30px;\n width: 30px;\n}\n\n.redes{\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n\n.marcas img{\n  height: 150px;\n  width: 150px;\n  text-align: center;\n  margin: 0px;\n  \n}\n\n.marcas{\n  text-align: center;\n}\n\n.bottomBanner img{\n  height: auto;\n  width: 100%;\n}\n\n.imagensita{\n  height: auto!important;\n  width: auto!important;\n}\n\n.catT{\n  width: 100%;\n  height: auto;\n  background-color: rgb(11, 148, 240);\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ion-text{\n    color: #fff;\n    font-size: 1.2rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n.marcasT{\n  width: 100%;\n  height: auto;\n  background-color: rgb(11, 148, 240);\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ion-text{\n    color: #fff;\n    font-size: 1.2rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n.foot{\n  width: 100%;\n  height: auto;\n  background-color: none;\n  margin-top: .5rem;\n  margin-bottom: .5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #000;\n\n  ion-text{\n    color: rgb(0, 0, 0);\n    font-size: 1.2rem;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n/* Test Infinite */\n@mixin white-gradient {\n\tbackground: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);\n}\n\n$animationSpeed: 100s; //40s\n\n// Animation\n@keyframes scroll {\n\t0% { transform: translateX(0); }\n\t100% { transform: translateX(calc(-250px * 36))}\n}\n\n.cel-home{\n  display: none;\n}\n\n.home-desk-cont{\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n\n  #swiperDesk{\n    width: 100%;\n    height: auto;\n\n    .noExisto{\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n     }\n\n     .noExisto2{\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n     }\n\n    .swiper-button-next, .swiper-button-prev {\n\n    }\n\n    .swiper {\n      width: 100%;\n      height: 100%;\n    }\n    \n    .swiper-slide {\n      text-align: center;\n      font-size: 18px;\n      background: #fff;\n    \n      /* Center slide text vertically */\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n    }\n    \n    .swiper-slide img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .cats-cont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1.5em 2em;\n    gap: 1em;\n\n    .lain{\n      width: 95%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      gap: 2em;\n\n      .cat-cont{\n        position: relative;\n        width: 33%;\n        height: auto;\n        //border: 1px solid red;\n        padding: 2px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 1.6em 0em 2em 0em;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n        overflow: hidden;\n        cursor: pointer;\n\n        .cont-img{\n          width: 100%;\n          height: 100%;\n          background-color: #fff;\n          background-position: center;\n          background-size: cover;\n          border-radius: 1.6em 0em 1.9em 0em;\n          //padding: .3em;\n          position: relative;\n          z-index: 1;\n          overflow: hidden;\n\n          img{\n            width: 100%;\n            height: 100%;\n          }\n        }\n\n        .rondin{\n          position: absolute;\n          width: 5em;\n          height: 250%;\n          background-color: #00b8ff;\n          z-index: 0;\n          animation: giron 1.8s linear infinite;\n          opacity: 0;\n        }\n\n        @keyframes giron{\n          from{\n            transform: rotate(0deg);\n          }\n          to{\n            transform: rotate(360deg);\n          }\n        }\n      }\n\n      .cat-cont:hover{\n        .rondin{\n          opacity: 1;\n        }\n      }\n    }\n  }\n\n  .imgs-cont-opcs{\n    width: 100%;\n    height: auto;\n    padding: 1em 2em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    .upi{\n      width: 95%;\n      height: auto;\n      cursor: pointer;\n\n      img{\n        width: 100%;\n        height: auto;\n      }\n    }\n\n    .dowi{\n      width: 95%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-start;\n\n      .imag{\n        width: 50%;\n        height: auto;\n        cursor: pointer;\n      }\n    }\n  }\n\n  .marcas-cont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 1em 2em;\n\n    .title-marca{\n      position: relative;\n      width: 95%;\n      height: 1.6em;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 1.7em;\n      font-weight: 400;\n      color: #fff;\n      background-color: #1da5cb;\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      margin-top: 0;\n      margin-bottom: 0;\n\n      .lain{\n        position: absolute;\n        width: 100%;\n        height: 2px;\n        background-color: #fff;\n        bottom: .3em;\n      }\n    }\n\n    #swiperMarcas{\n      width: 95%;\n      height: 10em;\n  \n      .swiper {\n        width: 100%;\n        height: 100%;\n      }\n      \n      .swiper-slide {\n        text-align: center;\n        font-size: 18px;\n        background: #fff;\n      \n        /* Center slide text vertically */\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        width: 124px;\n        height: 100%;\n      }\n      \n      .swiper-slide img {\n        display: block;\n        width: 7em;\n        height: auto;\n        opacity: .8;\n        transition: .2s all ease-in-out;\n      }\n\n      .swiper-slide img:hover {\n        opacity: 1;       \n      }\n    }\n  }\n\n  .reviews-cont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    padding: 1em 2em;\n    margin-top: 1em;\n\n    .taitl-cont{\n      width: 95%;\n      height: 1.8em;\n      font-size: 1.5em;\n      font-weight: 400;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: #17d9fd;\n    }\n\n    .more{\n      color: #555;\n      text-decoration: none;\n      font-size: 1em;\n      transition: .3s all ease-in-out;\n    }\n\n    .more:hover{\n      color: #13aecb;\n    }\n\n    #swiperReview{\n      width: 95%;\n      height: auto;\n  \n      .swiper {\n        width: 100%;\n        height: 100%;\n      }\n      \n      .swiper-wrapper{\n        padding: 1em;\n      }\n\n      .swiper-slide {\n        text-align: center;\n        font-size: 18px;\n        background: #fff;\n      \n        /* Center slide text vertically */\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n\n        .card-coment{\n          padding: 1em;\n          border-radius: 1em;\n          width: 20em;\n          height: auto;\n          //box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n          box-shadow: rgba(23, 217, 253, 0.2) 0px 10px 25px 0px, rgba(23, 217, 253, 0.1) 0px 0px 0px 1px;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: center;\n          gap: 1em;\n          padding-bottom: 3em;\n          position: relative;\n\n          .taitl-cont2{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .titl{\n              color: #333;\n              font-size: 1em;\n              font-weight: 100;\n            }\n          }\n\n          .stars-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .votes{\n              width: 5em;\n              height: auto;\n            }\n          }\n\n          .coment-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .coment{\n              color: #666;\n              font-size: .8em;\n              font-weight: 100;\n            }\n          }\n\n          .who-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n\n            .who{\n              color: #666;\n              font-size: .7em;\n              font-weight: 100;\n            }\n          }\n\n          .date{\n            position: absolute;\n            right: 1.5em;\n            bottom: 1.5em;\n            color: #15a7bf;\n            font-size: .6em;\n            font-weight: 100;\n          }\n        }\n      }\n    }\n  }\n\n  .parallax-cont{\n    width: 100%;\n    height: 22em;\n    background: url('../../../assets/img/fondo2_final.webp');\n    background-clip: initial;\n    background-origin: initial;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 0;\n\n    .txtin{\n      color: #FFFFFF;\n      font-size: 20px;\n      background-color: #f3acb163;\n      padding: .5em 1em;\n      border-radius: 45px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n      position: relative;\n    z-index: 2;\n    }\n  }\n\n  .parallax-cont::before{\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background-color: #00000061;\n  }\n}\n\n.home-desk-cont::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.home-desk-cont::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}\n\n@media(max-width: 992px){\n  .cel-home{\n    display: block;\n  }\n\n  .home-desk-cont{\n    display: none;\n  }\n}\n\n\n.noExisto{\n  width: 100%;\n  height: 100%;\n }",":root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"home-desk-cont\">\n \n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"tampocoExisto\">\n  <swiper [spaceBetween]=\"1\" [virtual]=\"true\" [navigation]=\"true\" [thumbs]=\"{ swiper: thumbsSwiper }\" id=\"swiperDesk\">\n    <ng-container *ngFor=\"let item of slider; index as i\" style=\"width: 100%;height:100%\">\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"{{urlIMG+'/'+item.image}}\">\n        <div class=\"noExisto\" *ngIf=\"item.app_url !=''\" [routerLink]=\"['/'+item.tipo_cat,item.app_url]\"></div>\n        <a class=\"noExisto2\" target=\"_blank\" *ngIf=\"item.app_url ==''\" href=\"{{item.url}}\"></a>\n      </ng-template>\n    </ng-container>\n  </swiper>\n</div>\n  <div class=\"cats-cont\">\n    <div class=\"lain\">\n      <div class=\"cat-cont\" [routerLink]=\"['/paquetes']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannerone/imgj/paquetes.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/20']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannertwo/imgd/plotters.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/37']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannerthree/imgt/laminadoras.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n    </div>\n    <div class=\"lain\">\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/35']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannerfour/imgj/planchas-de-calor.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/56']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannerfive/imgj/troqueladoras.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/18']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/modules/bannersix/imgj/vinil-papel-rotulacion.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n    </div>\n    <div class=\"lain\">\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/17']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1vinil-textil2.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/128']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1scrapbook2.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/44']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1resina2.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n    </div>\n    <div class=\"lain\">\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/23']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1costura.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/58']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1engargoladora.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n      <div class=\"cat-cont\" [routerLink]=\"['/catalogo/487']\" routerLinkActive=\"router-link-active\" >\n        <div class=\"cont-img\">\n          <img src=\"https://lideart.com.mx/1laser.webp\" alt=\"\">\n        </div>\n        <div class=\"rondin\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"imgs-cont-opcs\">\n    <div class=\"upi\" [routerLink]=\"['/blog']\" routerLinkActive=\"router-link-active\" >\n      <img src=\"assets/img/1inspiracion.webp\" alt=\"\">\n    </div>\n    <div class=\"dowi\">\n      <img [routerLink]=\"['/blog']\" routerLinkActive=\"router-link-active\"  src=\"assets/img/1experiencias.webp\" alt=\"\" class=\"imag\">\n      <img [routerLink]=\"['/catalogo/482']\" routerLinkActive=\"router-link-active\"  src=\"assets/img/1promos.webp\" alt=\"\" class=\"imag\">\n    </div>\n  </div>\n\n  \n\n  <div class=\"marcas-cont\">\n    <h1 class=\"title-marca\">\n      MARCAS\n      <span class=\"lain\"></span>\n    </h1>\n    <swiper [spaceBetween]=\"1\" [virtual]=\"true\" [breakpoints]=\"{'992':{slidesPerView: 6, spaceBetween: 10}}\" id=\"swiperMarcas\">\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/3.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/4.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/5.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/6.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/7.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/8.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/9.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/10.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/11.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/12.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/13.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/15.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/16.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/19.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/20.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/21.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/22.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/23.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/24.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/26.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/29.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/30.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/31.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/33.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/35.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/36.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/37.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/39.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/40.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/41.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/44.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/45.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/47.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/49.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/50.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/51.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/52.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/54.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/55.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/56.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/57.webp\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/60.jpg\">\n      </ng-template>\n      <ng-template swiperSlide >\n        <img class=\"imgSlider\" src=\"assets/img/marcas/61.jpg\">\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"reviews-cont\">\n    <div class=\"taitl-cont\">\n      ÚLTIMAS OPINIONES\n    </div>\n    <a [routerLink]=\"['/reviews']\" routerLinkActive=\"router-link-active\"  class=\"more\">Ver Más >></a>\n    <swiper [spaceBetween]=\"1\" [virtual]=\"true\" [breakpoints]=\"{'992':{slidesPerView: 3, spaceBetween: 10},'1200':{slidesPerView: 4, spaceBetween: 10},'1500':{slidesPerView: 5, spaceBetween: 10}}\" id=\"swiperReview\">\n      <ng-template swiperSlide *ngFor=\"let producto of reviews2\">\n        <div class=\"card-coment\">\n          <div class=\"taitl-cont2\">\n            <span class=\"titl\">{{producto.title}}</span>\n          </div>\n          <div class=\"stars-cont\">\n            <img class=\"votes\" src=\"{{'https://lideart.com.mx/modules/lgcomments/views/img/stars/plain/bluelight/'+producto.stars+'stars.png'}}\">\n          </div>\n          <div class=\"coment-cont\">\n            <span class=\"coment\">{{producto.comment}}</span>\n          </div>\n          <div class=\"who-cont\">\n            <span class=\"who\">- {{producto.nick}}</span>\n          </div>\n          <span class=\"date\">{{producto.date}}</span>\n        </div>\n      </ng-template>\n    </swiper>\n  </div>\n \n  <div class=\"parallax-cont\">\n    <p class=\"txtin\">En nuestra tienda encontrarás un amplio catálogo de consumibles y equipos para crear manualidades únicas. ¡Visítanos en todas nuestras redes sociales!</p>\n  </div>\n  <app-desk-footer></app-desk-footer>\n</section>\n\n<ion-content style=\"--padding-top: 4em;\" class=\"cel-home\">\n  <!--<div *ngIf=\"txtBuscador != ''\"  style=\"z-index: 99; position:fixed; width: 100%;\">\n    <p class=\"line-filter\">{{numeroResultados}} productos encontrados</p>-->\n    <!--contenedor resultados busqueda-->\n    <!--<div class=\"search-container\">\n      <ion-item\n        button\n        [routerLink]=\"['/descripcion-producto',producto.item.id_product]\"\n        *ngFor=\"let producto of resultadoBusqueda\"\n      >\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://lideart.com.mx/{{producto.item.image_link}}\" />\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{producto.item.nombre}}</h3>\n          <p>\n            <span style=\"font-weight: lighter\">\n              SKU: {{producto.item.sku[0]}}\n            </span>\n          </p>\n          <b>${{producto.item.precio | number}}</b>\n        </ion-label>\n        <ion-icon name=\"eye\" style=\"color: #70c2d1\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>-->\n\n\n\n\n        <!-- <ion-slides pager=\"true\" [options]=\"slideOptsOne\" #slideWithNav\n          (ionSlideDidChange)=\"SlideDidChange(sliderOne,slideWithNav)\">\n          <ion-slide *ngFor=\"let s of sliderOne.slidesItems\">\n            <img src=\"/assets/img/slider/Banner{{s.id}}.png\">\n           \n          </ion-slide>\n        </ion-slides> -->\n\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"tampocoExisto\">\n          <div class=\"cardContainer\">\n            <swiper [spaceBetween]=\"1\" [virtual]=\"true\" [navigation]=\"true\" [thumbs]=\"{ swiper: thumbsSwiper }\" class=\"mySwiper\">\n              <ng-container *ngFor=\"let item of slider; index as i\" style=\"width: 100%;height:100%\">\n                <ng-template swiperSlide >\n                  <img class=\"imgSlider\" src=\"{{urlIMG+'/'+item.image}}\">\n                  <div class=\"noExisto\" *ngIf=\"item.app_url !=''\" [routerLink]=\"['/'+item.tipo_cat,item.app_url]\"></div>\n                </ng-template>\n              </ng-container>\n          </swiper>\n          </div>\n        </div>\n        </ion-col>\n      </ion-row>\n\n\n  <!-- <div class=\"catT\">\n    <ion-text>\n      Categorias de Productos\n    </ion-text>\n  </div> -->\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" class=\"custom-col-header\">\n        <div class=\"cardContainer\">\n          <button block routerLink=\"/paquetes\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-01.png\" style=\"width: 100%;\"/>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"display-grid\" >\n    <!-- <ion-row>\n      <ion-col size=\"12\" class=\"custom-col-header\">\n        <div class=\"cardContainer\">\n          <button block routerLink=\"/paquetes\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-01.png\" style=\"width: 100%;\" />             \n          </button>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>      \n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-02.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button [routerLink]=\"['/catalogo','37']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-03.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','35']\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-04.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button [routerLink]=\"['/catalogo','56']\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-05.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','18']\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-06.png\"  width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button [routerLink]=\"['/catalogo','17']\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-07.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button block [routerLink]=\"['/catalogo','128']\" style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-08.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"custom-col\">\n        <div class=\"cardContainer\">\n          <button [routerLink]=\"['/catalogo','44']\"  style=\"width: 100%;\">\n            <img src=\"/assets/img/MenuPrincipal/Boton-09.png\" width=\"100%\"\n             />\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>    \n  </ion-grid>\n\n\n\n  <!-- <div class=\"marcasT\">\n    <ion-text>\n      Marcas\n    </ion-text>\n  </div> -->\n  <div class=\"marcas\">\n    <!--<ion-grid>\n      <ion-row>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-prev\" (click)=\"slidePrev(sliderTwo,slideWithNav2)\">\n            <div class=\"prev-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isBeginningSlide\"></div>\n          </span>\n        </ion-col>\n        <ion-col size=\"10\">\n        \n          <ion-slides pager=\"false\" [options]=\"slideOptsTwo\" #slideWithNav2\n            (ionSlideDidChange)=\"SlideDidChange(sliderTwo,slideWithNav2)\">\n            <ion-slide *ngFor=\"let s of sliderTwo.slidesItems\">\n              <img src=\"/assets/img/sliderMarcas/marca{{s.id}}.webp\">\n            </ion-slide>\n          </ion-slides>\n\n        </ion-col>\n        <ion-col size=\"1\">\n          <span class=\"slider-nav arrow-next\" (click)=\"slideNext(sliderTwo,slideWithNav2)\">\n            <div class=\"next-icon-custom custon-nav\" [class.disabled]=\"sliderTwo.isEndSlide\"></div>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>-->\n\n    <!-- <div class=\"slider\">\n\n      <div class=\"slide-track\">\n    \n        <div class=\"slide\" *ngFor=\"let s of sliderTwo.slidesItems\">\n          <img src=\"/assets/img/sliderMarcas/marca{{s.id}}.webp\" height=\"100\" width=\"250\" alt=\"\" />\n        </div>\n        <div class=\"slide\" *ngFor=\"let s of sliderTwo.slidesItems\">\n          <img src=\"/assets/img/sliderMarcas/marca{{s.id}}.webp\" height=\"100\" width=\"250\" alt=\"\" />\n        </div>\n    \n      </div>\n    \n    </div> -->\n\n  </div>\n<!-- <div class=\"bottomBanner\">\n  <img src=\"/assets/img/bottomBanner.PNG\"/>\n</div> -->\n\n\n<!-- FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERRRR -->\n\n\n<!-- <div class=\"redes\">\n  <ion-grid >\n<ion-col size=\"1\" >\n  <button>\n    <img src=\"/assets/img/redes/redes-01.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-02.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-03.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-04.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-05.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-06.webp\">\n  </button>\n</ion-col>\n<ion-col  size=\"1\">\n  <button>\n    <img src=\"/assets/img/redes/redes-07.webp\">\n  </button>\n</ion-col>\n  </ion-grid>\n</div> -->\n<!-- Basic -->\n<!-- <ion-accordion-group>\n  <ion-accordion value=\"colors\">\n    <ion-item slot=\"header\">\n      <ion-label>PRODUCTOS</ion-label>\n    </ion-item>\n\n    <ion-list slot=\"content\">\n      <ion-item>\n        <ion-label>Productos en Oferta</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nuevos Productos</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Lo Mas Vendido</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-accordion>\n  <ion-accordion value=\"shapes\">\n    <ion-item slot=\"header\">\n      <ion-label>NUESTRA EMPRESA</ion-label>\n    </ion-item>\n\n    <ion-list slot=\"content\">\n      <ion-item>\n        <ion-label>Terminos de servicio</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de reembolso</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de privacidad</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Nosotros</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Sé Subdistribuidor</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de Envíos</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de Garantía</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mapa del sitio</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contacto</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-accordion>\n  <ion-accordion value=\"numbers\">\n    <ion-item slot=\"header\">\n      <ion-label>INFORMACIÓN</ion-label>\n    </ion-item>\n\n    <ion-list slot=\"content\">\n      <ion-item>\n        <ion-label>Terminos de servicio</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de privacidad</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Politica de reembolso</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-accordion>\n</ion-accordion-group> -->\n<!-- <div class=\"foot\">\n  <ion-text>\n    © 2022 - Lideart\n  </ion-text>\n</div> -->\n</ion-content>\n\n\n\n\n\n  \n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_descripcion-producto_descripcion-producto_module_ts"],{

/***/ 70711:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/descripcion-producto/descripcion-producto-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionProductoPageRoutingModule: () => (/* binding */ DescripcionProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _descripcion_producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descripcion-producto.page */ 88028);




const routes = [{
  path: '',
  component: _descripcion_producto_page__WEBPACK_IMPORTED_MODULE_0__.DescripcionProductoPage
}];
let DescripcionProductoPageRoutingModule = class DescripcionProductoPageRoutingModule {};
DescripcionProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], DescripcionProductoPageRoutingModule);

/***/ }),

/***/ 56508:
/*!***************************************************************************!*\
  !*** ./src/app/pages/descripcion-producto/descripcion-producto.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionProductoPageModule: () => (/* binding */ DescripcionProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _descripcion_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descripcion-producto-routing.module */ 70711);
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ 54267);
/* harmony import */ var _descripcion_producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descripcion-producto.page */ 88028);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 29909);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);










/*import { PayPal } from '@ionic-native/paypal/ngx';
import { NgxPayPalModule } from 'ngx-paypal';*/
let DescripcionProductoPageModule = class DescripcionProductoPageModule {};
DescripcionProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule, _descripcion_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.DescripcionProductoPageRoutingModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__.SweetAlert2Module, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_descripcion_producto_page__WEBPACK_IMPORTED_MODULE_1__.DescripcionProductoPage]
})], DescripcionProductoPageModule);

/***/ }),

/***/ 88028:
/*!*************************************************************************!*\
  !*** ./src/app/pages/descripcion-producto/descripcion-producto.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescripcionProductoPage: () => (/* binding */ DescripcionProductoPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _descripcion_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descripcion-producto.page.html?ngResource */ 33786);
/* harmony import */ var _descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descripcion-producto.page.scss?ngResource */ 17162);
/* harmony import */ var _descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper */ 58595);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 36480);















swiper__WEBPACK_IMPORTED_MODULE_8__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_8__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_8__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_8__.Virtual, swiper__WEBPACK_IMPORTED_MODULE_8__.EffectCoverflow, swiper__WEBPACK_IMPORTED_MODULE_8__.Thumbs]);
let DescripcionProductoPage = class DescripcionProductoPage {
  // sus : Subscription;
  // urlsafe! : SafeResourceUrl;
  // videoURL = "https://www.you.tube.com/rKOQgNd8_rQ";
  constructor(activatedRoute, productoService, toastController, shoppingCart, servicioWishlist, usuarioService, datePipe, router, location, platform, satanizador) {
    this.activatedRoute = activatedRoute;
    this.productoService = productoService;
    this.toastController = toastController;
    this.shoppingCart = shoppingCart;
    this.servicioWishlist = servicioWishlist;
    this.usuarioService = usuarioService;
    this.datePipe = datePipe;
    this.router = router;
    this.location = location;
    this.platform = platform;
    this.satanizador = satanizador;
    this.swiperConfig = {
      slidesPerView: 1,
      pagination: true
    };
    this.swiperConfig2 = {
      slidesPerView: 5,
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
    this.config2 = {
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
    this.slider = [];
    this.slidervideos = [];
    this.relacionados = [];
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true
    };
    this.totalItems = 0;
    this.crr_sel = 0;
    this.crr_indx = 0;
    this.cantidad = 1;
    this.fechita = new Date();
    this.resdesc = [];
    this.descuentillo = false;
    this.carritoclick = 0;
    this.cargando = false;
    this.cargoprecio = false;
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
    });
    this.sliderOne = {
      isBeginningSlide: true,
      isEndSlide: false
    };
  }
  ngOnInit() {
    this.cargando = true;
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.cargando = true;
    this.nuevaFecha = this.datePipe.transform(this.fechita, "MM-dd-yyyy");
    this.activatedRoute.params.subscribe(params => {
      this.id_product = params.id_product;
      this.getDescripcionProducto();
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    // this.sus = this.platform.backButton.subscribe(() =>{
    //   this.location.back();
    // });
  }
  //   ngOnDestroy()
  // {
  //     this.sus.unsubscribe();
  // }
  // backButton(){
  //   this.location.back();
  // }
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
  increment() {
    if (this.cantidad > this.existencias) {
      this.ShowError2;
    } else {
      this.cantidad++;
    }
  }
  decrement() {
    if (this.cantidad <= 1) {
      this.ShowError7();
    } else {
      this.cantidad--;
    }
  }
  getDescripcionProducto() {
    this.productoService.getDescripcionProducto(this.id_product).subscribe(data => {
      this.productoData = data;
      //  this.existencias = this.productoData[0].existencia;
      this.atributos = this.productoData[0].detalles.atributos;
      //  this.precioDyn = this.productoData[0].precio;
      this.unidadVenta = this.productoData[0].unitId;
      this.descripcionsita = this.productoData[0].description;
      this.descripcionsilla = this.productoData[0].description_short;
      let id_cat = this.productoData[0].id_category;
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
        this.colorDefault();
        this.productoService.getSliderImgs(this.id_product).subscribe(datazos => {
          this.slider = datazos;
          this.productoService.getVideos(this.id_product).subscribe(videostruncos => {
            this.slidervideos = videostruncos;
            this.productoService.getRelacionados(id_cat).subscribe(productillos => {
              this.relacionados = productillos;
            });
          });
        });
      });
    });
  }
  getSafeYoutubeUrl(url) {
    return this.satanizador.bypassSecurityTrustResourceUrl(url);
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
  changeSelectedImage(newImageURL) {
    console.log('Image clicked:', newImageURL, 'Selected image: ', this.selectedImageURL);
    this.selectedImageURL = newImageURL;
    console.log('Selected image: ', this.selectedImageURL);
  }
  // changeSelectedImage(index: number) {
  //   if (this.slidprincipal && this.slidprincipal.swiper) {
  //     this.slidprincipal.swiper.slideTo(index); // Slide to the selected image
  //   }
  // }
  agregarAlCarrito(producto) {
    if (this.carritoclick == 1) {
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
            if (this.descuento == 0) {
              producto.precio = this.precioDyn;
              this.shoppingCart.addItem(producto);
            }
            if (this.descuento > 0) {
              producto.precio = this.precioDyn * this.descuento;
              this.shoppingCart.addItem(producto);
            }
          }
        }
      }
    } else {
      this.ShowError2();
    }
  }
  seleccionacolor(nombreColor, id_attribute, id_group) {
    this.colorSeleccionado = nombreColor;
    this.carritoclick = 1;
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
            this.getExistencias(referenciaLimpia, 'CHIH');
            this.getPrecioUnitario(referenciaLimpia, this.unidadVenta);
            // if(uv)
            // {
            //   uv.innerText = variables[nvalor].unidadVenta.replace(/-R$/, '');
            //   var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
            //   unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
            // }
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
            this.getExistencias(referenciaLimpia, 'CHIH');
            this.getPrecioUnitario(referenciaLimpia, this.unidadVenta);
            // if(uv)
            // {
            //   uv.innerText = variables[i].unidadVenta.replace(/-R$/, '');
            //   var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
            //   unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
            // this.getPrecioUnitario(referenciaLimpia,unidadventLimpia);
            // }
          }
        } else {
          this.crr_sel = 0;
          this.crr_indx = 0;
        }
      }
    }
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
    }, 1500);
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
  ShowError7() {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'No puedes agregar menos de 1 en carrito',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  ShowError3() {
    var _this4 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastController.create({
        message: 'No puedes llevar al Carrito mas de la Cantidad en Existencias',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  showSuccess() {
    var _this5 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: 'Producto agregado al carrito',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  ShowError2() {
    var _this6 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this6.toastController.create({
        message: 'Necesitas Seleccionar Color',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  yaexiste() {
    var _this7 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this7.toastController.create({
        message: 'Este Producto ya se encuentra en tu Wishlist.',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  agregado() {
    var _this8 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this8.toastController.create({
        message: 'Este Producto se agrego a tu Wishlist.',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  noagregado() {
    var _this9 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this9.toastController.create({
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
      "medida": this.productoData[0].unitId,
      "link": this.productoData[0].link
    };
    this.servicioWishlist.sendWishlist(jsonWishlist).subscribe(data => {
      if (data == 0) {
        this.yaexiste();
      } else {
        this.agregado();
      }
    });
  }
  getPrecioUnitario(reference, medida) {
    this.cargando = true;
    let objetoPost = {
      // CustAccount: "C000041928",
      // InventLocationId: "CHIHCONS",
      // InventSiteId: "CHIH",
      // ItemId: reference,
      // PercentCharges: 0,
      // UnitId: medida,
      // amountQty: 1,
      // company: "ATP",
      // currencyCode: "MXN",
      // transDate: this.nuevaFecha
      "custAccount": "CL0001348",
      "itemId": reference,
      "amountQty": 1,
      "transDate": this.nuevaFecha,
      "currencyCode": "MXN",
      "inventSiteId": "CHIH",
      "inventLocationId": "CHIHCONS",
      "company": "LIN",
      "unitId": medida,
      "percentCharges": 0
    };
    this.cargando = true;
    this.productoService.getPrecioUnitario(objetoPost).subscribe(response => {
      this.precioDyn = response.data;
      this.precioDyn = this.precioDyn * 1.16;
      this.cargando = false;
      this.cargoprecio = true;
    });
  }
  getExistencias(reference, sitio) {
    this.cargando = true;
    this.existencias = [];
    this.productoService.getExistencias(reference, sitio).subscribe(response => {
      let existenciasTem;
      existenciasTem = response;
      if (response.data != null) {
        this.existencias = response.data.availableOnHandQuantity;
        this.cargando = false;
      } else {
        this.existencias = 0;
        this.cargando = false;
      }
    });
  }
  hola(img) {
    console.log("Si llego");
    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
      title: 'Si funciono'
    });
    console.log("Si salgo");
    //   Swal.fire({    
    //     title:'Holis',
    //     imageUrl: img,
    //     imageWidth: 200,
    //     imageHeight: 200,
    //     confirmButtonText:
    // 'Cerrar',  
    //   })
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__.CarritoServiceService
  }, {
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_6__.ServiciowishlistService
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
  }];
};
DescripcionProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-descripcion-producto',
  template: _descripcion_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewEncapsulation.None,
  styles: [(_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DescripcionProductoPage);

/***/ }),

/***/ 17162:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/descripcion-producto/descripcion-producto.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poiret+One&display=swap);"]);
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

ion-button {
  --background: #0089c5;
  --color:white;
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
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
}

.textillo {
  font-size: 18px;
  margin-bottom: 10px;
  color: black;
  font-weight: normal;
  text-align: center;
  font-family: "RobotoCondensed-Light";
}

.form-group {
  margin-left: 100px;
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
  width: 45%;
  border: 5px;
}

.swiper-container-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.swiper-container-gallery {
  width: 80%;
  margin: 0 auto;
}

.swiper-slide {
  text-align: center;
}

.swiper-image {
  max-width: 5em;
  max-height: 5em;
}

.swiper-pagination {
  margin-top: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  color: #0089c5;
}

.swiper-pagination-bullet {
  background: #1c81a0;
  width: 8px;
  height: 8px;
  margin: 0 3px;
}

.swiper-container {
  padding-top: 0em;
  width: 25em;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.mySwiper3 {
  cursor: default;
  inline-size: 100%;
  block-size: auto;
  inset-inline-start: 0;
  inset-block-start: 0px;
}

.mySwiper {
  height: 20%;
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

/* Styles for the selected image container */
.selected-image-container {
  margin-bottom: 20px; /* Adjust the spacing as needed */
}

.selected-image-swiper {
  width: 100%;
  max-height: 400px; /* Adjust the height of the selected image */
  margin: 0 auto;
}

/* Styles for the gallery container */
.gallery-container {
  margin-top: 20px; /* Adjust the spacing as needed */
}

.gallery-swiper {
  width: 100%;
  max-height: 100px; /* Adjust the height of the gallery */
  margin: 0 auto;
}

.gallery-image {
  max-width: 100px; /* Adjust the size of gallery images */
  max-height: 80px; /* Adjust the size of gallery images */
}

@media screen and (max-width: 992px) {
  .columnas {
    height: min-content;
  }
  .swiper-container {
    height: auto;
  }
  .columnas ion-col {
    width: 25%;
  }
  .columnas ion-col:nth-of-type(2) {
    order: 1;
  }
  .columnas ion-col:nth-of-type(2) .columnas ion-col:nth-of-type(1) {
    order: 2;
  }
  #CodigoYColor {
    margin-right: 10em;
  }
}
@media screen and (min-width: 993px) {
  .columnas {
    height: min-content;
  }
  .columnas ion-col {
    width: 25%;
  }
  .columnas ion-col:nth-of-type(2) {
    order: 1;
  }
  .columnas ion-col:nth-of-type(1) {
    order: 2;
  }
  .columnas ion-col:nth-of-type(3) {
    order: 3;
  }
  ion-header {
    display: none;
  }
}
.swal-wide {
  width: 20%;
  height: 20%;
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

@media screen and (min-width: 993px) {
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
}
.deskheader {
  display: none;
}

.deskfooter {
  display: none;
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

.prods-related-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  background-color: #fff;
}
.prods-related-cont .taitl {
  color: #222;
  font-size: 1.8em;
  font-weight: 100;
}
.prods-related-cont #related {
  width: 100%;
  height: auto;
}
.prods-related-cont #related .swiper-button-next {
  background-color: #fff;
  border: 1px solid rgb(194, 194, 194);
  color: rgb(194, 194, 194);
  width: 3em;
  height: 3em;
  transition: 0.5s all ease-in-out;
  --swiper-navigation-size: 1em;
  top: calc(50% - 1.5em);
  opacity: 1;
}
.prods-related-cont #related .swiper-button-prev {
  background-color: #fff;
  border: 1px solid rgb(194, 194, 194);
  color: rgb(194, 194, 194);
  width: 3em;
  height: 3em;
  transition: 0.5s all ease-in-out;
  --swiper-navigation-size: 1em;
  top: calc(50% - 1.5em);
  opacity: 1;
}
.prods-related-cont #related .swiper-button-next:hover, .prods-related-cont #related .swiper-button-prev:hover {
  background-color: rgb(23, 66, 131);
  border: 1px solid rgb(23, 66, 131);
}
.prods-related-cont #related .swiper-button-next {
  right: 0;
}
.prods-related-cont #related .swiper-button-prev {
  left: 0;
}
.prods-related-cont #related .swiper-pagination-bullet {
  width: 1em;
  height: 1em;
  background-color: #000;
  opacity: 0.8;
}
.prods-related-cont #related .swiper-pagination-bullet-active {
  background-color: rgb(11, 68, 143);
}
.prods-related-cont #related .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  position: relative;
}
.prods-related-cont #related .swiper-slide .all-cont {
  width: 100%;
  height: auto;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 1em;
  gap: 1em;
  border: 1px solid #eee;
  padding-bottom: 1.5em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .offer {
  position: absolute;
  top: 1em;
  left: 1em;
  color: #fff;
  background-color: #e67e22;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 0.6em;
  padding: 0.3em 1em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .new {
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  background-color: #00ABF0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-size: 0.6em;
  padding: 0.3em 1em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .foto-cont {
  width: 167px;
  height: 167px;
  background-position: center;
  background-size: cover;
  position: relative;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .foto-cont img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s all ease-in-out;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .foto-cont #uno {
  opacity: 1;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .foto-cont #dos {
  opacity: 0;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .time-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.1em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .time-cont .quad-time {
  width: 25%;
  height: 2.2em;
  background-color: #999999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.4em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .time-cont .quad-time .up {
  color: #fff;
  font-weight: 900;
  font-size: 0.8em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .time-cont .quad-time .down {
  color: #fff;
  font-weight: 400;
  font-size: 0.5em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .rate-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .rate-cont i {
  font-size: 0.62em;
  color: #f1a43e;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .prod-name {
  font-size: 15px;
  color: #444;
  font-weight: normal;
  text-transform: uppercase;
  text-decoration: none;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .price-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .price-cont .now {
  color: #e74c3c;
  font-size: 18px;
  font-weight: 600;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont .price-cont .bef {
  line-height: 20px;
  padding: 0 5px;
  display: inline-block;
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
  font-weight: normal;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont:hover .foto-cont #uno {
  opacity: 0;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont:hover .foto-cont #dos {
  opacity: 1;
}
.prods-related-cont #related .swiper-slide .all-cont .prod-cont:hover .time-cont .quad-time {
  background-color: #2e4980;
}
.prods-related-cont #swiperSupercategory:hover {
  /*.swiper-button-prev{
      opacity: 1;
  }*/
}
.prods-related-cont #swiperSupercategory:hover .swiper-button-prev:hover {
  color: #fff;
}
.prods-related-cont #swiperSupercategory:hover .swiper-button-next {
  opacity: 1;
}
.prods-related-cont #swiperSupercategory:hover .swiper-button-next:hover {
  color: #fff;
}

@media (min-width: 992px) {
  .deskheader {
    display: block;
  }
  .deskfooter {
    display: block;
  }
  .titulillo {
    letter-spacing: 0px;
    font-size: 1.8em;
  }
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
}
.supercategory-cont {
  width: 100%;
  height: auto;
  display: block;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 2em;
}
.supercategory-cont .top-con {
  position: relative;
  width: 100%;
  height: 4em;
  border-top: 1px solid rgb(218, 218, 218);
  border-right: 1px solid rgb(218, 218, 218);
}
.supercategory-cont .top-con .line {
  width: 100%;
  height: 0.2em;
  position: absolute;
  bottom: 0;
  left: 0;
}
.supercategory-cont .top-con .title-cont {
  height: 115%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0em 3em;
}
.supercategory-cont .top-con .title-cont i {
  color: #fff;
  font-size: 1.5em;
}
.supercategory-cont .top-con .title-cont span {
  color: #fff;
  font-size: 1.2em;
}
.supercategory-cont .topin {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.supercategory-cont .topin .pops-cont {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 1em;
}
.supercategory-cont .topin .pops-cont .title-cont {
  width: 100%;
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
.supercategory-cont .topin .pops-cont .title-cont span {
  font-weight: 600;
  color: #000;
}
.supercategory-cont .topin .pops-cont .opcs-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 0.75em;
  padding-top: 1em;
  gap: 0.5em;
}
.supercategory-cont .topin .pops-cont .opcs-cont button {
  border: none;
  background-color: transparent;
  color: #000;
  transition: 0.3s all ease-in-out;
  font-size: 1.2em;
  text-align: start;
}
.supercategory-cont .topin .pops-cont .opcs-cont button:hover {
  color: rgb(15, 86, 133);
  padding-left: 0.5em;
}
.supercategory-cont .topin img {
  width: 75%;
  height: auto;
}
@media (min-width: 992px) {
  .supercategory-cont .topin .pops-cont {
    width: 25%;
  }
}
@media (max-width: 768px) {
  .supercategory-cont .topin .pops-cont {
    width: 100%;
  }
  .supercategory-cont .topin img {
    display: none;
  }
}

.supercategory-cont:nth-child(1) .top-con .line {
  background-color: #009589;
}
.supercategory-cont:nth-child(1) .top-con .title-cont {
  background-color: #009589;
}

.supercategory-cont:nth-child(3) .top-con .line {
  background-color: #ff5924;
}
.supercategory-cont:nth-child(3) .top-con .title-cont {
  background-color: #ff5924;
}

.supercategory-cont:nth-child(5) .top-con .line {
  background-color: #32ad59;
}
.supercategory-cont:nth-child(5) .top-con .title-cont {
  background-color: #32ad59;
}

.first-cont .firsty-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.first-cont .mercados-cont {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2em;
}
.first-cont .mercados-cont .opc-cont {
  width: 100%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.first-cont .mercados-cont .opc-cont .shopinkref {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.first-cont .mercados-cont .opc-cont .shopinkref span {
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 2.8em;
  transition: 0.6s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .shopinkref .sh1 {
  color: rgba(245, 38, 97, 0.4941176471);
}
.first-cont .mercados-cont .opc-cont .shopinkref .sh2 {
  color: rgba(0, 169, 191, 0.4392156863);
}
.first-cont .mercados-cont .opc-cont .shopinkref .sh3 {
  color: rgba(255, 194, 51, 0.431372549);
}
.first-cont .mercados-cont .opc-cont .shopinkref .got1 {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.398);
  border-radius: 48% 52% 24% 76%/70% 41% 59% 30%;
  width: 1.8em;
  height: 1.8em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  left: calc(50% - 6em);
  top: 2em;
  transition: 0.3s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .shopinkref .got2 {
  position: absolute;
  background-color: rgba(255, 194, 51, 0.431372549);
  border-radius: 71% 29% 53% 47%/39% 50% 50% 61%;
  width: 1.5em;
  height: 1.5em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  left: calc(50% - 4.25em);
  top: 6em;
  transition: 0.3s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .shopinkref .got3 {
  position: absolute;
  background-color: rgba(245, 38, 97, 0.4941176471);
  border-radius: 57% 43% 44% 56%/59% 29% 71% 41%;
  width: 2.3em;
  height: 2.3em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  left: calc(50% + 0.5em);
  top: 1.8em;
  transition: 0.3s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .shopinkref .got4 {
  position: absolute;
  background-color: rgba(0, 169, 191, 0.4392156863);
  border-radius: 61% 39% 67% 33%/49% 81% 19% 51%;
  width: 2em;
  height: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  left: calc(50% + 3.6em);
  top: 5.5em;
  transition: 0.3s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover span {
  font-weight: 900;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .sh1 {
  color: #f52661;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .sh2 {
  color: #00a9bf;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .sh3 {
  color: #ffc233;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .got1 {
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  top: 1.8em;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .got2 {
  background-color: #ffc233;
  border-radius: 50%;
  top: 6.2em;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .got3 {
  background-color: #f52661;
  border-radius: 50%;
  top: 1.6em;
}
.first-cont .mercados-cont .opc-cont .shopinkref:hover .got4 {
  background-color: #00a9bf;
  border-radius: 50%;
  top: 5.7em;
}
.first-cont .mercados-cont .opc-cont .signotrafref {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.first-cont .mercados-cont .opc-cont .signotrafref span {
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 2.8em;
  transition: 0.6s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .signotrafref .sh1 {
  color: rgba(255, 169, 41, 0.4549019608);
}
.first-cont .mercados-cont .opc-cont .signotrafref .sh2 {
  color: rgba(22, 25, 42, 0.4549019608);
}
.first-cont .mercados-cont .opc-cont .signotrafref .warnr {
  width: 3em;
  height: 3em;
  background-color: rgba(199, 12, 21, 0.4745098039);
  position: absolute;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1.1em;
  left: calc(50% - 9.5em);
  transition: 0.6s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .signotrafref .warnr1 {
  position: absolute;
  width: 2.7em;
  height: 2.7em;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  background-color: rgba(255, 255, 255, 0);
  transition: 0.5s all ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0);
}
.first-cont .mercados-cont .opc-cont .signotrafref .warnr2 {
  width: 3.3em;
  height: 3.3em;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  background-color: rgba(199, 12, 21, 0);
  position: absolute;
  transition: 0.5s all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75em;
  color: rgba(255, 255, 255, 0);
}
.first-cont .mercados-cont .opc-cont .signotrafref .warny {
  width: 3.5em;
  height: 3.5em;
  background-color: rgba(250, 150, 0, 0.5098039216);
  position: absolute;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5.1em;
  right: calc(50% - 10em);
  transition: 0.6s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .signotrafref .warny1 {
  position: absolute;
  width: 3em;
  height: 3em;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: rgba(255, 255, 255, 0);
  transition: 0.5s all ease-in-out;
  box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0);
}
.first-cont .mercados-cont .opc-cont .signotrafref .warny2 {
  width: 3.4em;
  height: 3.4em;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background-color: rgba(199, 12, 21, 0);
  position: absolute;
  transition: 0.5s all ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0);
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .sh1 {
  color: #ffa929;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .sh2 {
  color: #16192a;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warnr {
  background-color: #c70c15;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warnr1 {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 2px #fff;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warnr2 {
  background-color: #c70c15;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 2px #fff;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warny {
  background-color: #fa9600;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warny1 {
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 10px 2px #fff;
}
.first-cont .mercados-cont .opc-cont .signotrafref:hover .warny2 {
  background-color: #fa9600;
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 2px #fff;
}
.first-cont .mercados-cont .opc-cont .wrapref {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.first-cont .mercados-cont .opc-cont .wrapref span {
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 2.8em;
  transition: 0.6s all ease-in-out;
  position: relative;
  z-index: 10;
}
.first-cont .mercados-cont .opc-cont .wrapref .sh1 {
  color: rgba(255, 56, 73, 0.4862745098);
}
.first-cont .mercados-cont .opc-cont .wrapref .sh2 {
  color: rgba(0, 0, 0, 0.4941176471);
}
.first-cont .mercados-cont .opc-cont .wrapref .cari {
  position: absolute;
  width: 10em;
  height: auto;
  top: 2.1em;
  opacity: 0;
  transition: 0.6s all ease-in-out;
}
.first-cont .mercados-cont .opc-cont .wrapref:hover .sh1 {
  color: #ff3849;
  margin-bottom: 1.7em;
}
.first-cont .mercados-cont .opc-cont .wrapref:hover .sh2 {
  color: #000000;
  margin-bottom: 1.7em;
}
.first-cont .mercados-cont .opc-cont .wrapref:hover .cari {
  opacity: 1;
  top: 3.7em;
}
.first-cont .mercados-cont .opc-cont .signoledref {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.first-cont .mercados-cont .opc-cont .signoledref span {
  font-family: "Poiret One", cursive;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 2.8em;
  transition: 0.6s all ease-in-out;
  position: relative;
  z-index: 1;
}
.first-cont .mercados-cont .opc-cont .signoledref .sh1 {
  color: rgba(0, 0, 0, 0.501);
}
.first-cont .mercados-cont .opc-cont .signoledref .sh2 {
  color: rgba(255, 42, 92, 0.4862745098);
}
.first-cont .mercados-cont .opc-cont .signoledref .sh3 {
  color: rgba(178, 229, 91, 0.4862745098);
}
.first-cont .mercados-cont .opc-cont .signoledref .sh4 {
  color: rgba(0, 172, 220, 0.4745098039);
}
.first-cont .mercados-cont .opc-cont .signoledref .ad1 {
  position: absolute;
  width: 4.5em;
  height: 4.5em;
  border: 2px solid rgba(255, 42, 92, 0.4862745098);
  border-radius: 50%;
  animation: ap1 10s linear infinite;
}
@keyframes ap1 {
  0% {
    border: 3px solid rgba(255, 255, 255, 0.4862745098);
  }
  25% {
    border: 3px solid rgba(255, 42, 92, 0.4862745098);
  }
  50% {
    border: 3px solid rgba(178, 229, 91, 0.4862745098);
  }
  75% {
    border: 3px solid rgba(0, 172, 220, 0.4745098039);
  }
  100% {
    border: 3px solid rgba(255, 255, 255, 0.4862745098);
  }
}
.first-cont .mercados-cont .opc-cont .signoledref:hover .sh1 {
  color: rgb(0, 0, 0);
  text-shadow: 0px 0px 8px #fff;
}
.first-cont .mercados-cont .opc-cont .signoledref:hover .sh2 {
  color: #ff2a5c;
  text-shadow: 0px 0px 8px #ff2a5c;
}
.first-cont .mercados-cont .opc-cont .signoledref:hover .sh3 {
  color: #b2e55b;
  text-shadow: 0px 0px 8px #b2e55b;
}
.first-cont .mercados-cont .opc-cont .signoledref:hover .sh4 {
  color: #00acdc;
  text-shadow: 0px 0px 8px #00acdc;
}
.first-cont .mercados-cont .opc-cont .signoledref:hover .ad1 {
  animation: ap2 10s linear infinite;
}
@keyframes ap2 {
  0% {
    border: 3px solid #ffffff;
    box-shadow: 0px 0px 15px 2px #ffffff;
  }
  25% {
    border: 3px solid #ff2a5c;
    box-shadow: 0px 0px 15px 2px #ff2a5c;
  }
  50% {
    border: 3px solid #b2e55b;
    box-shadow: 0px 0px 15px 2px #b2e55b;
  }
  75% {
    border: 3px solid #00acdc;
    box-shadow: 0px 0px 15px 2px #00acdc;
  }
  100% {
    border: 3px solid #ffffff;
    box-shadow: 0px 0px 15px 2px #ffffff;
  }
}

@media (max-width: 992px) {
  .first-cont .mercados-cont {
    grid-template-columns: repeat(2, 1fr);
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .sh1 {
    color: rgb(245, 38, 97);
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .sh2 {
    color: rgb(0, 169, 191);
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .sh3 {
    color: rgb(255, 194, 51);
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .got1 {
    background-color: rgb(0, 0, 0);
    top: 1.8em;
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .got2 {
    background-color: rgb(255, 194, 51);
    top: 6.2em;
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .got3 {
    background-color: rgb(245, 38, 97);
    top: 1.6em;
  }
  .first-cont .mercados-cont .opc-cont .shopinkref .got4 {
    background-color: rgb(0, 169, 191);
    top: 5.7em;
  }
  .first-cont .mercados-cont .opc-cont .wrapref .sh1 {
    color: rgb(255, 56, 73);
    margin-bottom: 1.7em;
  }
  .first-cont .mercados-cont .opc-cont .wrapref .sh2 {
    color: rgb(0, 0, 0);
    margin-bottom: 1.7em;
  }
  .first-cont .mercados-cont .opc-cont .wrapref .cari {
    opacity: 1;
    top: 3.7em;
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .sh1 {
    color: rgb(255, 169, 41);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .sh2 {
    color: rgb(22, 25, 42);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warnr {
    background-color: rgb(199, 12, 21);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warnr .warnr1 {
    background-color: rgb(255, 255, 255);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warnr .warnr2 {
    background-color: rgb(199, 12, 21);
    color: rgb(255, 255, 255);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warny {
    background-color: rgb(250, 150, 0);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warny .warny1 {
    background-color: rgb(255, 255, 255);
  }
  .first-cont .mercados-cont .opc-cont .signotrafref .warny .warny2 {
    background-color: rgb(250, 150, 0);
    color: rgb(255, 255, 255);
  }
  .first-cont .mercados-cont .opc-cont .signoledref .sh1 {
    color: rgb(0, 0, 0);
  }
  .first-cont .mercados-cont .opc-cont .signoledref .sh2 {
    color: rgb(255, 42, 92);
  }
  .first-cont .mercados-cont .opc-cont .signoledref .sh3 {
    color: rgb(178, 229, 91);
  }
  .first-cont .mercados-cont .opc-cont .signoledref .sh4 {
    color: rgb(0, 172, 220);
  }
  .first-cont .mercados-cont .opc-cont .signoledref .ad1 {
    animation: ap2 10s linear infinite;
  }
}
@media (max-width: 610px) {
  .first-cont .mercados-cont {
    grid-template-columns: repeat(1, 1fr);
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper.min.css","webpack://./src/app/pages/descripcion-producto/descripcion-producto.page.scss","webpack://./node_modules/swiper/modules/navigation/navigation.min.css"],"names":[],"mappings":"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","sourcesContent":["/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, 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');font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-android .swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-pointer-events{touch-action:pan-y}.swiper-pointer-events.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d,.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-horizontal.swiper-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-vertical.swiper-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}","@import \"swiper/css\";\n@import \"swiper/css/navigation\";\n\nion-content{\n    background-color: white;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  }\n\n    ion-button {\n      --background: #0089c5;     \n      --color:white;\n      \n    \n  }\n  \n  ion-card{\n      background: rgba(255, 255, 255, 0.164); //     #fdfdfd            #14A8CD*\n      backdrop-filter: blur(2px);\n      /*background: rgb(28,138,242);\n      background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/\n      display: flex;\n      justify-content:space-between;\n     \n      flex-direction: column;\n      //box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n      //box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n      width: 100%;\n      height: 100%;\n      border-radius: .25rem;\n      //padding: 1rem;\n  \n      /* From https://css.glass */\n      background: rgba(255, 255, 255, 0.150);\n      border-radius: 10px;\n      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n      backdrop-filter: blur(3px);\n      -webkit-backdrop-filter: blur(3px);\n      border: .5px solid rgba(0, 0, 0, 0.082);\n  \n      .contImg{\n        width: 100%;\n        height: 60%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n  \n        img{\n          width: 80%;\n          height: auto;\n        }\n      }\n  \n      .text{\n        width: 100%;\n        height: 40%;\n        color: black;\n        font-size: 15px;\n        font-weight: bold;\n        ion-text{\n          width: 100%;\n          font-size: 20vw;\n          text-align: center;\n          color: rgb(0, 0, 0);\n          // text-shadow: 4px 3px 4px rgb(65, 64, 64); \n        }\n  \n      }\n  \n  \n  \n    }\n\n    .tituloDescripcion{\n      color: rgb(27,172,209);\n      font-family: 'RobotoCondensed-Light';\n      font-size: 18px;\n      font-style: italic;\n      text-align: center;\n    }\n\n    .titulillo{\n      font-size: 20px;\n      margin-bottom: 0em;\n      color: black;\n      font-weight: normal;\n      text-transform: uppercase;\n      text-align: center;\n      font-size: 20px;\n      letter-spacing: 2px;\n    }\n  \n    .textillo{\n        font-size: 18px;\n        margin-bottom: 10px;\n        color: black;\n        font-weight: normal;\n        //text-transform: uppercase;\n        text-align: center;\n        font-family: 'RobotoCondensed-Light';\n    }\n  \n    .form-group{\n  \n   margin-left: 100px;\n    }\n  \n    .selector-color {\n      display: inline-block;\n      margin: 0px 2px;\n      width: 40px;\n      height: 40px;\n      position: relative;\n      border-radius: 3px;\n      cursor: pointer;\n      overflow: hidden;\n      transform: rotate(0deg);\n      transition: 1s;\n    }\n    .texto-descripcion {\n      color: white;\n      font-size: 1.3em;\n    }\n    \n    .selected.selector-color {\n      transform: rotate(360deg);\n    }\n    \n    .selector-color input {\n      width: 30px;\n      background-size: cover;\n      position: absolute;\n      height: 30px;\n      top: 5px;\n      left: 5px;\n      box-shadow: inset rgb(0 0 0 / 20%) 0px 0px 12px;\n      transition: 1s;\n      border-radius: 50%;\n      border: none;\n    }\n    \n    .selected.selector-color input {\n      width: 40px;\n      height: 40px;\n      top: 0px;\n      left: 0px;\n    }\n    \n    .contiene-descripcion > table > tbody > tr > td > div > img {\n      max-width: 100%;\n      height: auto;\n    }\n\n    .swiper {\n      width: 100%;\n      height: 100%;\n    }\n    \n    .swiper-slide {\n      text-align: center;\n      font-size: 18px;\n      background: #fff;\n    \n      /* Center slide text vertically */\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      -webkit-justify-content: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      -webkit-align-items: center;\n      align-items: center;\n    }\n    \n    .swiper-slide img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper-slide video {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper {\n      width: 100%;\n      height: 300px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    \n    .swiper-slide {\n      background-size: cover;\n      background-position: center;\n    }\n    \n    .mySwiper2 {\n      height: 80%;\n      width: 45%;\n      border: 5px;\n    }\n\n    .swiper-container-wrapper{\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .swiper-container-gallery{\n      width: 80%;\n      margin: 0 auto;\n    }\n\n    .swiper-slide{\n      text-align: center;\n    }\n    \n    .swiper-image{\n      max-width: 5em;\n      max-height: 5em;\n    }\n\n    .swiper-pagination{\n      margin-top: 10px;\n    }\n\n    .swiper-button-next,\n    .swiper-button-prev{\n      color:#0089c5\n    }\n\n    .swiper-pagination-bullet{\n      background: #1c81a0;\n      width: 8px;\n      height: 8px;\n      margin: 0 3px;      \n    }\n\n    .swiper-container{\n      padding-top: 0em;\n      width: 25em;\n      height: auto;\n     \n      margin: 0 auto;\n      display: flex;\n      justify-content: center;\n      //align-items: center;\n    }\n\n    .mySwiper3{\n         \n      cursor: default;\n      inline-size: 100%;\n      block-size: auto;\n      inset-inline-start: 0;\n      inset-block-start: 0px ;\n     \n    }\n    \n    .mySwiper {\n      height: 20%;\n      box-sizing: border-box;\n      padding: 10px 0;\n    }\n    \n    .mySwiper .swiper-slide {\n      width: 25%;\n      height: 100%;\n      opacity: 0.4;\n    }\n    \n    .mySwiper .swiper-slide-thumb-active {\n      opacity: 1;\n    }\n\n    .precio{\n      color: rgb(29,171,209);\n      font-family: 'RobotoCondensed-Light';\n      font-size: 35px;\n      letter-spacing: normal;\n      line-height: 38.5px;\n      text-size-adjust: 100%;\n      text-transform: uppercase;\n    }\n    \n    .swiper-slide img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n    \n    .swiper-slide video {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n   \n\n    .loader {\n      display: flex;\n      width: 100%;\n      height: 100%;\n      background-position: center;\n      justify-content: center;\n      align-items: center;\n      background-size: cover;\n      position: fixed;\n      top: calc(0%);\n      left: calc(0%);\n      background-color: rgb(255, 255, 255);\n      opacity: 0.9;\n    \n      img{\n        width: 200px;\n        height: auto;\n   \n      }\n  \n    }\n\n    /* Styles for the selected image container */\n.selected-image-container {\n  margin-bottom: 20px; /* Adjust the spacing as needed */\n}\n\n.selected-image-swiper {\n  width: 100%;\n  max-height: 400px; /* Adjust the height of the selected image */\n  margin: 0 auto;\n}\n\n/* Styles for the gallery container */\n.gallery-container {\n  margin-top: 20px; /* Adjust the spacing as needed */\n}\n\n.gallery-swiper {\n  width: 100%;\n  max-height: 100px; /* Adjust the height of the gallery */\n  margin: 0 auto;\n}\n\n.gallery-image {\n  max-width: 100px; /* Adjust the size of gallery images */\n  max-height: 80px; /* Adjust the size of gallery images */\n}\n\n@media screen and (max-width:992px){\n  \n\n  .columnas{\n    height: min-content;\n  }\n  .swiper-container{\n    height: auto;\n  }\n\n  .columnas ion-col{\n  \n     width: 25%;\n  }\n  .columnas ion-col:nth-of-type(2){\n    order: 1;\n  .columnas ion-col:nth-of-type(1){\n    order: 2;\n  }\n}\n#CodigoYColor{\n  margin-right: 10em;\n}\n}\n\n@media screen and (min-width:993px){\n    .columnas {\n      height: min-content;\n    }\n\n    .columnas ion-col{\n      width: 25%;\n    }\n    .columnas ion-col:nth-of-type(2){\n      order: 1;\n    }\n    .columnas ion-col:nth-of-type(1){\n      order: 2;\n    }\n    .columnas ion-col:nth-of-type(3){\n      order: 3;\n    }\n\n    ion-header{\n      display: none;\n    }\n}\n\n.swal-wide{\n  width:20%;\n  height: 20%;\n}\n\n#existenciaDesk{\n  display: none;\n\n  .conten-exist{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    padding: .5em 0em;\n\n    .lefti{\n      color: #000;\n      font-size: 1.2em;  \n    }\n\n    .rigti{\n      color: #00a3c7;\n      font-size: 1.1em;\n    }\n  }\n}\n\n@media screen  and (min-width:993px){\n  #caracteristicas{\n    //padding-left: 20%;\n    //padding-left: 15em;\n    //padding-right: 15em;\n    box-sizing: border-box;\n    margin: auto;\n    width: 100%;\n    height: fit-content;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  #irCarrito{\n    display: none;\n  }\n  #existencia{\n    display: none;\n  }\n  #colorSeleccionado{\n    display: none;\n  }\n}\n\n.deskheader{\n  display: none;\n}\n\n.deskfooter{\n  display: none;\n}\n\n.nohay-cont{\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1em;\n  padding: 0.7em 0em;\n  border-bottom: 1px solid #f00;\n  margin-bottom: 1em;\n\n  .textin{\n    color: #f00;\n    font-weight: 600;\n    font-size: 1.2em;\n  }\n\n  i{\n    color: #f00;\n    font-size: 2.2em;\n  }\n}\n\n.cont-car{\n  width: 70%;\n  height: auto;\n\n  table{\n    width: 100%;\n    height: auto;\n  }\n  \n  ul{\n    width: 100%;\n    padding: 0em 25%;\n  }\n  \n  td{\n    border: 1px solid #cdcdcd;\n  }\n  \n  \n  tbody{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    display: table-row-group;\n    vertical-align: middle;\n    border-color: inherit;\n  }\n  \n  h5{\n    span{\n      font-size: 1.7em;\n    }\n  }\n  \n  p{\n    span{\n      font-size: 1.4em;\n      color: #00a3c7;\n    }\n  }\n  \n  hr{\n    background-color: #000;\n    margin: 2em 0em;\n  }\n}\n\n.prods-related-cont{\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 2em;\n  background-color: #fff;\n\n  .taitl{\n    color: #222;\n    font-size: 1.8em;\n    font-weight: 100;\n  }\n\n  #related{\n    width: 100%;\n    height: auto;\n    //margin-top: 2em;\n\n    .swiper-button-next{\n        background-color: #fff;\n        border: 1px solid rgb(194, 194, 194);\n        color: rgb(194, 194, 194);\n        width: 3em;\n        height: 3em;\n        transition: .5s all ease-in-out;\n        --swiper-navigation-size: 1em;\n        top: calc(50% - 1.5em);\n        opacity: 1;\n    }\n\n    .swiper-button-prev{\n        background-color: #fff;\n        border: 1px solid rgb(194, 194, 194);\n        color: rgb(194, 194, 194);\n        width: 3em;\n        height: 3em;\n        transition: .5s all ease-in-out;\n        --swiper-navigation-size: 1em;\n        top: calc(50% - 1.5em);\n        opacity: 1;\n    }\n    \n    .swiper-button-next:hover, .swiper-button-prev:hover{\n        background-color: rgb(23, 66, 131);\n        border: 1px solid rgb(23, 66, 131);\n    }\n    \n    .swiper-button-next{\n        right: 0;\n    }\n    \n    .swiper-button-prev{\n        left: 0;\n    }\n    \n    .swiper-pagination-bullet{\n        width: 1em;\n        height: 1em;\n        background-color: #000;\n        opacity: .8;\n    }\n    \n    .swiper-pagination-bullet-active{\n        background-color: rgb(11, 68, 143);\n    }\n\n    .swiper-slide{\n        text-align: center;\n        font-size: 18px;\n        background: transparent;\n          \n        /* Center slide text vertically */\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        color: #000;\n        position: relative;\n\n        .all-cont{\n            width: 100%;\n            height: auto;\n\n            .prod-cont{\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: center;\n                position: relative;\n                padding: 1em;\n                gap: 1em;\n                border: 1px solid #eee;\n                padding-bottom: 1.5em;\n\n                .offer{\n                    position: absolute;\n                    top: 1em;\n                    left: 1em;\n                    color: #fff;\n                    background-color: #e67e22;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 10;\n                    font-size: .6em;\n                    padding: .3em 1em;\n                }\n\n                .new{\n                    position: absolute;\n                    top: 1em;\n                    right: 1em;\n                    color: #fff;\n                    background-color: #00ABF0;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    z-index: 10;\n                    font-size: .6em;\n                    padding: .3em 1em;\n                }\n\n                .foto-cont{\n                    width: 167px;\n                    height: 167px;\n                    background-position: center;\n                    background-size: cover;\n                    position: relative;\n\n                    img{\n                        width: 100%;\n                        height: 100%;\n                        object-fit: cover;\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        transition: .4s all ease-in-out;\n                    }\n\n                    #uno{\n                        opacity: 1;\n                    }\n\n                    #dos{\n                        opacity: 0;\n                    }\n                }\n\n                .time-cont{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: flex-start;\n                    align-items: flex-start;\n                    gap: .1em;\n\n                    .quad-time{\n                        width: 25%;\n                        height: 2.2em;\n                        background-color: #999999;\n                        display: flex;\n                        flex-direction: column;\n                        justify-content: center;\n                        align-items: center;\n                        padding: .4em;\n\n                        .up{\n                            color: #fff;\n                            font-weight: 900;\n                            font-size: .8em;\n                        }\n\n                        .down{\n                            color: #fff;\n                            font-weight: 400;\n                            font-size: .5em;\n                        }\n                    }\n                }\n\n                .rate-cont{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                    gap: .4em;\n\n                    i{\n                        font-size: .62em;\n                        color: #f1a43e;\n                    }\n                }\n\n                .prod-name{\n                    font-size: 15px;\n                    color: #444;\n                    font-weight: normal;\n                    text-transform: uppercase;\n                    text-decoration: none;\n                }\n\n                .price-cont{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-wrap: wrap;\n                    justify-content: flex-start;\n\n                    .now{\n                        color: #e74c3c;\n                        font-size: 18px;\n                        font-weight: 600;\n                    }\n\n                    .bef{\n                        line-height: 20px;\n                        padding: 0 5px;\n                        display: inline-block;\n                        text-decoration: line-through;\n                        color: #999;\n                        font-size: 12px;\n                        font-weight: normal;\n                    }\n                }\n            }\n\n            .prod-cont:hover{\n                //border: 1px solid #aaa;\n\n                .foto-cont{\n\n                    #uno{\n                        opacity: 0;\n                    }\n\n                    #dos{\n                        opacity: 1;\n                    }\n                }\n\n                .time-cont{\n\n                    .quad-time{\n\n                        background-color: #2e4980;\n                    }\n                }\n            }\n        }\n    }\n  }\n\n  #swiperSupercategory:hover{\n\n      /*.swiper-button-prev{\n          opacity: 1;\n      }*/\n\n      .swiper-button-prev:hover{\n          color: #fff;\n      }\n\n      .swiper-button-next{\n          opacity: 1;\n      }\n\n      .swiper-button-next:hover{\n          color: #fff;\n      }\n  }\n}\n\n@media(min-width: 992px){\n  .deskheader{\n    display: block;\n  }\n\n  .deskfooter{\n    display: block;\n  }\n\n  .titulillo{\n    letter-spacing: 0px;\n    font-size: 1.8em;\n  }\n\n  #existenciaDesk{\n    display: block;\n  }\n\n  .cont-car{\n    height: 50em;\n    overflow-y: scroll;\n    box-shadow: rgb(3 165 198 / 43%) 0px 2px 8px 0px;\n    padding: 1em;\n  }\n}\n\n@media(max-width: 992px){\n  .cont-car{\n    width: 100%;\n  }\n}\n\n\n@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');\n\n.supercategory-cont{\n    //border: 1px solid red;\n    width: 100%;\n    height: auto;\n    display: block;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding-top: 2em;\n\n\n    .top-con{\n        position: relative;\n        width: 100%;\n        height: 4em;\n        border-top: 1px solid rgb(218, 218, 218);\n        border-right: 1px solid rgb(218, 218, 218);\n\n        .line{\n            width: 100%;\n            height: .2em;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n        }\n\n        .title-cont{\n            height: 115%;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            gap: 1em;\n            padding: 0em 3em;\n\n            i{\n                color: #fff;\n                font-size: 1.5em;\n            }\n\n            span{\n                color: #fff;\n                font-size: 1.2em;\n            }\n        }\n    }\n\n    .topin{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n\n        .pops-cont{\n            width: 40%;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            padding-bottom: 1em;\n\n            .title-cont{\n                width: 100%;\n                height: 2.5em;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background-color: #eee;\n\n                span{\n                    font-weight: 600;\n                    color: #000;\n                }\n            }\n\n            .opcs-cont{\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: flex-start;\n                padding-left: .75em;\n                padding-top: 1em;\n                gap: .5em;\n\n                button{\n                    border: none;\n                    background-color: transparent;\n                    color: #000;\n                    transition: .3s all ease-in-out;\n                    font-size: 1.2em;\n                    text-align: start;\n                }\n\n                button:hover{\n                    color: rgb(15, 86, 133);\n                    padding-left: .5em;\n                }\n            }\n        }\n\n        img{\n            width: 75%;\n            height: auto;\n        }\n\n        @media(min-width: 992px){\n            .pops-cont{\n                width: 25%;\n            }\n        }\n\n        @media(max-width: 768px){\n            .pops-cont{\n                width: 100%;\n\n                .title-cont{\n\n                }\n            }\n\n            img{\n                display: none;\n            }\n        }\n    }\n}\n\n.supercategory-cont:nth-child(1){\n    .top-con{\n        .line{\n            background-color: #009589;\n        }\n\n        .title-cont{\n            background-color: #009589;\n        }\n    }\n}\n\n.supercategory-cont:nth-child(3){\n    .top-con{\n        .line{\n            background-color: #ff5924;\n        }\n\n        .title-cont{\n            background-color: #ff5924;\n        }\n    }\n}\n\n.supercategory-cont:nth-child(5){\n    .top-con{\n        .line{\n            background-color: #32ad59;\n        }\n\n        .title-cont{\n            background-color: #32ad59;\n        }\n    }\n}\n\n\n\n.first-cont{\n\n    .firsty-cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: flex-start;\n    }\n\n    .mercados-cont{\n        width: 100%;\n        height: auto;\n        display: grid;\n        grid-template-columns: repeat(4, 1fr);\n        margin-top: 2em;\n\n        .opc-cont{\n            width: 100%;\n            height: 10em;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            position: relative;\n\n            .shopinkref{\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                height: 100%;\n                position: relative;\n\n                span{\n                    font-family: 'Poiret One', cursive;\n                    letter-spacing: 1px;\n                    font-weight: 600;\n                    font-size: 2.8em;\n                    transition: .6s all ease-in-out;\n                }\n\n                .sh1{\n                    color: #f526617e;\n                }\n\n                .sh2{\n                    color: #00a9bf70;\n                }\n\n                .sh3{\n                    color: #ffc2336e;\n                }\n\n                .got1{\n                    position: absolute;\n                    background-color: rgba(0, 0, 0, 0.398);\n                    border-radius: 48% 52% 24% 76% / 70% 41% 59% 30% ;\n                    width: 1.8em;\n                    height: 1.8em;\n                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n                    left: calc(50% - 6em);\n                    top: 2em;\n                    transition: .3s all ease-in-out;\n                }\n\n                .got2{\n                    position: absolute;\n                    background-color: #ffc2336e;\n                    border-radius: 71% 29% 53% 47% / 39% 50% 50% 61%  ;\n                    width: 1.5em;\n                    height: 1.5em;\n                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n                    left: calc(50% - 4.25em);\n                    top: 6em;\n                    transition: .3s all ease-in-out;\n                }\n\n                .got3{\n                    position: absolute;\n                    background-color: #f526617e;\n                    border-radius: 57% 43% 44% 56% / 59% 29% 71% 41%  ;\n                    width: 2.3em;\n                    height: 2.3em;\n                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n                    left: calc(50% + .5em);\n                    top: 1.8em;\n                    transition: .3s all ease-in-out;\n                }\n\n                .got4{\n                    position: absolute;\n                    background-color: #00a9bf70;\n                    border-radius: 61% 39% 67% 33% / 49% 81% 19% 51%   ;\n                    width: 2em;\n                    height: 2em;\n                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n                    left: calc(50% + 3.6em);\n                    top: 5.5em;\n                    transition: .3s all ease-in-out;\n                }\n            }\n\n            .shopinkref:hover{\n\n                span{\n                    font-weight: 900;\n                }\n\n                .sh1{\n                    color: #f52661;\n                }\n\n                .sh2{\n                    color: #00a9bf;\n                }\n\n                .sh3{\n                    color: #ffc233;\n                }\n\n                .got1{\n                    background-color: rgb(0, 0, 0);\n                    border-radius: 50%;\n                    top: 1.8em;\n                }\n\n                .got2{\n                    background-color: #ffc233;\n                    border-radius: 50%;\n                    top: 6.2em;\n                }\n\n                .got3{\n                    background-color: #f52661;\n                    border-radius: 50%;\n                    top: 1.6em;\n                }\n\n                .got4{\n                    background-color: #00a9bf;\n                    border-radius: 50%;\n                    top: 5.7em;\n                }\n            }\n\n            .signotrafref{\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                height: 100%;\n                position: relative;\n\n                span{\n                    font-family: 'Poiret One', cursive;\n                    letter-spacing: 1px;\n                    font-weight: 600;\n                    font-size: 2.8em;\n                    transition: .6s all ease-in-out;\n                }\n\n                .sh1{\n                    color: #ffa92974;\n                }\n\n                .sh2{\n                    color: #16192a74;\n                }\n\n                .warnr{\n                    width: 3em;\n                    height: 3em;\n                    background-color: #c70c1579;\n                    position: absolute;\n                    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    top: 1.1em;\n                    left: calc(50% - 9.5em);\n                    transition: .6s all ease-in-out;\n                }\n\n                .warnr1{\n                    position: absolute;\n                    width: 2.7em;\n                    height: 2.7em;\n                    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n                    background-color: rgba(255, 255, 255, 0);\n                    transition: .5s all ease-in-out;\n                    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0);\n                }\n\n                .warnr2{\n                    width: 3.3em;\n                    height: 3.3em;\n                    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);\n                    //border: 1px solid #fff;\n                    background-color: #c70c1500;\n                    position: absolute;\n                    transition: .5s all ease-in-out;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    font-size: .75em;\n                    color: rgba(255, 255, 255, 0);\n                }\n\n                .warny{\n                    width: 3.5em;\n                    height: 3.5em;\n                    background-color: #fa960082;\n                    position: absolute;\n                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    top: 5.1em;\n                    right: calc(50% - 10em);\n                    transition: .6s all ease-in-out;\n                }\n\n                .warny1{\n                    position: absolute;\n                    width: 3em;\n                    height: 3em;\n                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n                    background-color: rgba(255, 255, 255, 0);\n                    transition: .5s all ease-in-out;\n                    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0);\n                }\n\n                .warny2{\n                    width: 3.4em;\n                    height: 3.4em;\n                    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);\n                    //border: 1px solid #fff;\n                    background-color: #c70c1500;\n                    position: absolute;\n                    transition: .5s all ease-in-out;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    font-size: .8em;\n                    color: rgba(255, 255, 255, 0);\n                }\n            }\n\n            .signotrafref:hover{\n\n                .sh1{\n                    color: #ffa929;\n                }\n\n                .sh2{\n                    color: #16192a;\n                }\n\n                .warnr{\n                    background-color: #c70c15;\n                }\n\n                .warnr1{\n                    background-color: rgba(255, 255, 255, 1);\n                    box-shadow: 0px 0px 10px 2px #fff;\n                }\n\n                .warnr2{\n                    background-color: #c70c15;\n                    color: rgba(255, 255, 255, 1);\n                    text-shadow: 0px 0px 2px #fff;\n                }\n\n                .warny{\n                    background-color: #fa9600;\n                }\n\n                .warny1{\n                    background-color: rgba(255, 255, 255, 1);\n                    box-shadow: 0px 0px 10px 2px #fff;\n                }\n\n                .warny2{\n                    background-color: #fa9600;\n                    color: rgba(255, 255, 255, 1);\n                    text-shadow: 0px 0px 2px #fff;\n                }\n            }\n\n            .wrapref{\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                height: 100%;\n                position: relative;\n\n                span{\n                    font-family: 'Poiret One', cursive;\n                    letter-spacing: 1px;\n                    font-weight: 600;\n                    font-size: 2.8em;\n                    transition: .6s all ease-in-out;\n                    position: relative;\n                    z-index: 10;\n                }\n\n                .sh1{\n                    color: #ff38497c;\n                }\n\n                .sh2{\n                    color: #0000007e;\n                }\n\n                .cari{\n                    position: absolute;\n                    width: 10em;\n                    height: auto;\n                    top: calc(2.1em);\n                    opacity: 0;\n                    transition: .6s all ease-in-out;\n                }\n            }\n\n            .wrapref:hover{\n\n                .sh1{\n                    color: #ff3849;\n                    margin-bottom: 1.7em;\n                }\n\n                .sh2{\n                    color: #000000;\n                    margin-bottom: 1.7em;\n                }\n\n                .cari{\n                    opacity: 1;\n                    top: calc(3.7em);\n                }\n            }\n\n            .signoledref{\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n                width: 100%;\n                height: 100%;\n                position: relative;\n\n                span{\n                    font-family: 'Poiret One', cursive;\n                    letter-spacing: 1px;\n                    font-weight: 600;\n                    font-size: 2.8em;\n                    transition: .6s all ease-in-out;\n                    position: relative;\n                    z-index: 1;\n                }\n\n                .sh1{\n                    color: rgba(0, 0, 0, 0.501);\n                }\n\n                .sh2{\n                    color: #ff2a5c7c;\n                }\n\n                .sh3{\n                    color: #b2e55b7c;\n                }\n\n                .sh4{\n                    color: #00acdc79;\n                }\n\n                .ad1{\n                    position: absolute;\n                    width: 4.5em;\n                    height: 4.5em;\n                    border: 2px solid #ff2a5c7c;\n                    border-radius: 50%;\n                    animation: ap1 10s linear infinite;\n                }\n\n                @keyframes ap1{\n                    0%{\n                        border: 3px solid #ffffff7c;\n                    }\n\n                    25%{\n                        border: 3px solid #ff2a5c7c;\n                    }\n\n                    50%{\n                        border: 3px solid #b2e55b7c;\n                    }\n\n                    75%{\n                        border: 3px solid #00acdc79;\n                    }\n\n                    100%{\n                        border: 3px solid #ffffff7c;\n                    }\n                }\n            }\n\n            .signoledref:hover{\n\n                .sh1{\n                    color: rgb(0, 0, 0);\n                    text-shadow: 0px 0px 8px #fff;\n                }\n\n                .sh2{\n                    color: #ff2a5c;\n                    text-shadow: 0px 0px 8px #ff2a5c;\n                }\n\n                .sh3{\n                    color: #b2e55b;\n                    text-shadow: 0px 0px 8px #b2e55b;\n                }\n\n                .sh4{\n                    color: #00acdc;\n                    text-shadow: 0px 0px 8px #00acdc;\n                }\n\n                .ad1{\n                    animation: ap2 10s linear infinite;\n                }\n\n                @keyframes ap2{\n                    0%{\n                        border: 3px solid #ffffff;\n                        box-shadow: 0px 0px 15px 2px #ffffff;\n                    }\n\n                    25%{\n                        border: 3px solid #ff2a5c;\n                        box-shadow: 0px 0px 15px 2px #ff2a5c;\n                    }\n\n                    50%{\n                        border: 3px solid #b2e55b;\n                        box-shadow: 0px 0px 15px 2px #b2e55b;\n                    }\n\n                    75%{\n                        border: 3px solid #00acdc;\n                        box-shadow: 0px 0px 15px 2px #00acdc;\n                    }\n\n                    100%{\n                        border: 3px solid #ffffff;\n                        box-shadow: 0px 0px 15px 2px #ffffff;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@media(max-width: 992px){\n    .first-cont{\n        .mercados-cont{\n            grid-template-columns: repeat(2, 1fr);\n\n            .opc-cont{\n\n                .shopinkref{\n\n                    .sh1{\n                        color: rgb(245, 38, 97);\n                    }\n\n                    .sh2{\n                        color: rgb(0, 169, 191);\n                    }\n\n                    .sh3{\n                        color: rgb(255, 194, 51);\n                    }\n\n                    .got1{\n                        background-color: rgb(0, 0, 0);\n                        top: 1.8em;\n                    }\n\n                    .got2{\n                        background-color: rgb(255, 194, 51);\n                        top: 6.2em;\n                    }\n\n                    .got3{\n                        background-color: rgb(245, 38, 97);\n                        top: 1.6em;\n                    }\n\n                    .got4{\n                        background-color: rgb(0, 169, 191);\n                        top: 5.7em;\n                    }\n                }\n\n                .wrapref{\n\n                    .sh1{\n                        color: rgb(255, 56, 73);\n                        margin-bottom: 1.7em;\n                    }\n\n                    .sh2{\n                        color: rgb(0, 0, 0);\n                        margin-bottom: 1.7em;\n                    }\n\n                    .cari{\n                        opacity: 1;\n                        top: calc(3.7em);\n                    }\n                }\n\n                .signotrafref{\n\n                    .sh1{\n                        color: rgb(255, 169, 41);\n                    }\n\n                    .sh2{\n                        color: rgb(22, 25, 42);\n                    }\n\n                    .warnr{\n                        background-color: rgb(199, 12, 21);\n\n                        .warnr1{\n                            background-color: rgb(255, 255, 255);\n                        }\n\n                        .warnr2{\n                            background-color: rgb(199, 12, 21);\n                            color: rgb(255, 255, 255);\n                        }\n                    }\n\n                    .warny{\n                        background-color: rgb(250, 150, 0);\n\n                        .warny1{\n                            background-color: rgb(255, 255, 255);\n                        }\n\n                        .warny2{\n                            background-color: rgb(250, 150, 0);\n                            color: rgb(255, 255, 255);\n                        }\n                    }\n                }\n\n                .signoledref{\n                    \n                    .sh1{\n                        color: rgb(0, 0, 0);\n                    }\n\n                    .sh2{\n                        color: rgb(255, 42, 92);\n                    }\n\n                    .sh3{\n                        color: rgb(178, 229, 91);\n                    }\n\n                    .sh4{\n                        color: rgb(0, 172, 220);\n                    }\n\n                    .ad1{\n                        animation: ap2 10s linear infinite;\n                    }\n                }\n            }\n        }\n    }\n}\n\n@media(max-width: 610px){\n    .first-cont{\n        .mercados-cont{\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n}",":root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:'prev'}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33786:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/descripcion-producto/descripcion-producto.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\" > Descripción Producto\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n\n  </ion-toolbar>\n\n\n      <!-- <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar> -->\n      <!-- </ion-toolbar> -->\n  \n</ion-header>\n\n\n<ion-content>\n  <app-desk-header class=\"deskheader\"></app-desk-header>\n  <div class=\"columnas\" >\n   <ion-row >\n      <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" style=\"height: min-content;\" > \n      <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none;border: none;\">\n       <ion-text class=\"titulillo\">{{producto.title}}</ion-text> \n    \n           <div class=\"swiper-container-wrapper\">\n            \n             <div style=\"padding-top: 0em;\" class=\"swiper-container\" style=\"align-items: baseline;\" id=\"zoom\">                \n                        \n                  \n                  <swiper style=\"--swiper-navigation-color: #fff;--swiper-pagination-color: #fff;\"   [thumbs]=\"{ swiper: thumbsSwiper2 }\" class=\"mySwiper3\">\n                    <ng-container *ngFor=\"let item of slider; index as i\">\n                      <ng-template swiperSlide >\n                          <img src=\"{{item.slider}}\"   alt=\"wrapmaster slider product\"/>\n                      </ng-template>\n                    </ng-container>\n                    <ng-container *ngFor=\"let item of slidervideos; index as i\">\n                      <ng-template swiperSlide >\n                        <iframe width=\"560\" height=\"315\" frameborder=\"0\" allowfullscreen [src]=\"getSafeYoutubeUrl('https://youtube.com/embed/'+item.uid)\" ></iframe>\n                         </ng-template>\n                    </ng-container>\n                  </swiper>                  \n                  \n                                 \n             </div> \n\n             <div class=\"swiper-container\" id=\"swiperEscritorio\">\n                         \n\n               <swiper  (swiper)=\"thumbsSwiper2 = $event\"[spaceBetween]=\"10\" [pagination]=\"true\" [navigation]=\"true\" [slidesPerView]=\"5\" [freeMode]=\"true\" [watchSlidesProgress]=\"true\" class=\"mySwiper\" >\n                <ng-container *ngFor=\"let item of slider; index as i\">\n                  <ng-template swiperSlide>\n                    <img src=\"{{ item.slider }}\"  alt=\"wrapmaster slider product\" />\n                  </ng-template>\n                </ng-container>\n                <ng-container *ngFor=\"let item of slidervideos; index as i\">\n                  <ng-template swiperSlide >\n                    <img src=\"/assets/img/videito.jpg\"   alt=\"wrapmaster slider product\"/>\n                     </ng-template>\n                </ng-container>\n              </swiper>         \n\n\n             </div>\n         \n            </div>     \n            \n \n      </ion-card>   \n    </ion-col>\n    <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\" >    \n      <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none;border: none; height: min-content;\"> \n        <ion-text class=\"tituloDescripcion\"><u>{{producto.title}}</u></ion-text>          \n              <!-- <swiper [navigation]=\"true\" [virtual]=\"true\" class=\"mySwiper2\">\n                  <ng-template style=\" border: .5px solid rgb(255, 0, 0,1)\" *ngFor=\"let item of slider\" swiperSlide><img  src=\"{{item.slider}}\"></ng-template>\n              </swiper> -->\n              <ion-card-content>\n                <ion-card-title class=\"ion-text-center\">Descripción del Producto</ion-card-title>\n                <br>\n                <div [innerHTML]=\"descripcionsilla\"></div>\n              </ion-card-content>\n      </ion-card>        \n    </ion-col>\n     <ion-col size=\"12\" size-md=\"6\" size-lg=\"4\"style=\"height: min-content;\">\n        <ion-card *ngFor=\"let producto of productoData\" style=\"box-shadow: none; border:none\">\n          <ion-card-content>\n            <ion-grid>\n              <ion-row>\n                 <ion-col *ngIf=\"!descuentillo\">\n                  <ion-text class=\"precio\" >${{precioDyn | number: '1.2-2'}}</ion-text>\n                  <span style=\"font-size: 14px;color: rgb(29, 171, 209);font-family: 'RobotoCondensed-Light';text-transform: uppercase;\"> mxn </span>\n                  </ion-col>            \n                                      \n                <ion-col *ngIf=\"descuentillo\">\n                 \n                  <ion-text class=\"text\" >${{precioDyn*descuento | number: '1.2-2'}} <del>${{precioDyn | number: '1.2-2'}}mxn </del>  -  {{resdesc*100 | number: '1.2-2'}}% de descuento</ion-text>                 \n\n                  \n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text style=\"font-size: 12px; font-family: 'RobotoCondensed-Light';color: rgb(51,51,51);\">IVA incluido</ion-text>\n                </ion-col>\n              </ion-row>\n\n              <div style=\"border-top: 1px solid #eaeaea;border-bottom: 1px solid #eaeaea; color: #333333; padding-top: 12px;padding-bottom: 12px;font-size: 18px;\">\n                <div>\n                  <dl id=\"CodigoYColor\" style=\"color: rgb(29, 171, 209);\">\n                    <dt style=\"background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.2em 0.5em;\">Código</dt>\n                    <dt id=\"referencia\" style=\"text-align: left; background:#F7F7F7;border:1px solid #E0E0E0; color: #111; font-size: .9em; padding: 0.2em 0.5em;\">{{ producto.sku  }}</dt>\n                  </dl>\n                  <dl id=\"CodigoYColor\" style=\"color: rgb(29, 171, 209);\">\n                    <dt style=\"background:#F7F7F7;border:1px solid #E0E0E0; padding: 0.2em 0.5em;\">\n                      Color\n                    </dt>\n                    <dt style=\"text-align: left; background:#F7F7F7;border:1px solid #E0E0E0; color: #111; font-size: .9em; padding: 0.2em 0.5em;\">\n                      {{colorSeleccionado}}\n                    </dt> \n                  </dl>\n                </div>             \n                \n                \n               \n              </div>\n\n              <ion-row>\n                <!-- <ion-col>\n                 <ion-text class=\"text\" >SKU:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\">\n                    \n                      <span id=\"referencia\">{{ producto.sku  }}\n                      </span>\n                  </p>\n                </ion-col> -->\n              </ion-row>\n              <ion-row id=\"existencia\">\n                <ion-col>\n                  <ion-text  class=\"text\">Existencia:</ion-text>\n                </ion-col>\n                <ion-col>\n                <ion-text class=\"text\">{{existencias}}</ion-text> \n                </ion-col>\n              </ion-row>\n              <ion-row id=\"existenciaDesk\">\n                <div class=\"conten-exist\">\n                  <span class=\"lefti\">Existencia:</span>\n                  <span class=\"rigti\">{{existencias}}</span>\n                </div>\n              </ion-row>\n              <!-- <ion-row>\n                <ion-col>\n                  <ion-text class=\"text\" style=\"color:rgb(27, 172, 209);\">Unidad de Venta:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\"><span id=\"unidadVenta\">{{producto.unitId}}</span></p>\n                </ion-col>\n              </ion-row> -->\n              <ion-row id=\"colorSeleccionado\">\n                <ion-col>\n                  <ion-text class=\"text\">Color Seleccionado:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <p class=\"text\"><span >{{colorSeleccionado}}</span></p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n    \n                    <div *ngFor=\"let atributo of atributos\">\n                      <ion-col >\n                      <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                    </ion-col>\n                    <ion-col >\n                      <div *ngIf=\"atributo.is_color_group != '1'\">\n                        <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                          class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n                          <!-- <ion-button *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                          (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-color: {{valor.color}}\">{{valor.name}}</ion-button>\n                          <ion-button *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                          (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-image: url({{valor.image}});\">{{valor.name}}</ion-button> -->\n                            <input type=\"button\" *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-color: {{valor.color}}\" >\n                            <input type=\"button\" *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                            (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                            style=\"background-image: url({{valor.image}});\" >\n            \n                        </div>\n                      </div>\n                    \n                    \n                      <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                        class=\"form-group {{atributo.id_attribute_group}}\" >\n                        <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                      </select>\n                    </ion-col>\n                    </div>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <!-- <ion-text class=\"text\">Cantidad:</ion-text>    -->\n                  <div>\n                    <!-- <ion-row >\n                      <ion-col>\n                        <ion-label style=\"font-family: 'RobotoCondensed-Light'; font-weight: bold;\">\n                          CANTIDAD\n                        </ion-label>\n                      </ion-col>\n                    </ion-row>                  \n                    <ion-row>\n                      <ion-col>\n                        <ion-label>\n                          <ion-item>\n                            <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                          </ion-item>\n                        </ion-label>\n                      </ion-col>\n                    </ion-row> -->\n                  </div>\n                </ion-col>\n\n                <!-- <div>\n                  <ion-row>\n                    <ion-col>\n                      <ion-label style=\"font-family: 'RobotoCondensed-Light';\">\n                        CANTIDAD\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>                  \n                  <ion-row>\n                    <ion-col>\n                      <ion-label>\n                        <ion-item>\n                          <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                        </ion-item>\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </div> -->\n                <ion-col>\n                  <!-- <ion-item>\n                    <ion-label style=\"font-family: 'RobotoCondensed-Light';\">CANTIDAD</ion-label>\n                  </ion-item>\n                  <ion-item>\n                    <ion-input type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                  </ion-item> -->\n                  \n\n\n                  <!-- <ion-item>\n                    <ion-label>\n                      <p>Cantidad: <input style=\"width: 30%;\" type=\"number\"  [value]=\"quantity\"  (change)=\"validateInput($event,i)\"> </p> -->\n\n                      <!-- <ion-input label=\"cantidadInput\" type=\"number\" placeholder=\"1\"></ion-input> -->\n                      <!-- <input type=\"number\" placeholder=\"1\"></input> -->\n                    <!-- </ion-label>\n                  </ion-item> -->\n                </ion-col>\n                \n                <!-- <ion-col style=\"display: flex;align-items: center; justify-content:start ;\">\n                  <ion-icon name=\"remove-circle\" style=\"width: 25px;height: 30px;color: #6cdff9;padding-right: 10px;\" (click)=\"decrement()\"></ion-icon>\n                    <ion-label style=\"font-size:15px;color: black;font-weight: bold;\">{{cantidad}}</ion-label> \n                     <ion-icon name=\"add-circle\" style=\"width: 25px;height: 30px;color:#6cdff9;padding-left: 10px;\" (click)=\"increment()\"></ion-icon> \n                  <ion-input class=\"text\" type=\"number\" min=\"1\" onkeyup=\"if(this.value<0){this.value= this.value * -1}\" [(ngModel)]=\"cantidad\" max=\"{{producto.existencia}}\"></ion-input>\n                </ion-col> -->\n              </ion-row>\n              <ion-row >\n                <ion-col>\n                  <ion-label style=\"font-family: 'RobotoCondensed-Light'; font-weight: bold;\">\n                    CANTIDAD\n                  </ion-label>\n                </ion-col>\n              </ion-row>                  \n              <ion-row>\n                <ion-col>\n                  <ion-label>\n                    <ion-item>\n                      <ion-input style=\"float: left;\" type=\"number\" [(ngModel)]=\"cantidad\" name=\"cantidad\"></ion-input>\n                    </ion-item>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n              <!-- <ion-button  (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button> -->\n              <ion-button *ngIf=\"existencias>0 && cargoprecio == true\" id=\"addCarrito\" (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n              <div *ngIf=\"existencias==0\" class=\"nohay-cont\">\n                <span class=\"textin\">Producto Agotado</span>\n                <i class=\"fa-solid fa-face-sad-tear\"></i>\n              </div>\n              <ion-button id=\"irCarrito\" routerLink=\"/cart\"  >Ir a Carrito</ion-button>\n              <ion-button *ngIf=\"usuario\" id=\"wishlist\" (click)=\"agregarWishlist()\" >Agregar a Wishlist</ion-button>\n              <!-- <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  routerLink=\"/cart\"  >Ir a Carrito</ion-button>\n              <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarWishlist()\" >Agregar a Wishlist</ion-button> -->\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n     </ion-col>\n   </ion-row>\n    \n   \n\n    <ion-card *ngFor=\"let producto of productoData\"> \n    <!-- <ion-text class=\"\">{{producto.title}}</ion-text> -->\n\n\n\n      <!-- <img src=\"{{producto.image_link}}\"> -->\n      <!-- <ion-slides pager=\"true\">\n      <ion-slide *ngFor=\"let s of slider;let i = index;\">\n        <img style=\"width:100% ; max-height:500px;\" src=\"{{s.slider}}\">\n       \n      </ion-slide>\n    </ion-slides> -->\n\n\n    \n          <!-- <swiper [navigation]=\"true\" [virtual]=\"true\" class=\"mySwiper2\">\n              <ng-template style=\" border: .5px solid rgb(255, 0, 0,1)\" *ngFor=\"let item of slider\" swiperSlide><img  src=\"{{item.slider}}\"></ng-template>\n          </swiper>\n           -->\n\n      <ion-card-content>\n        <ion-grid>\n          <!-- <ion-row>\n            <ion-col>\n              <ion-text class=\"text\" >Precio:</ion-text>\n            </ion-col>\n            <ion-col *ngIf=\"!descuentillo\">\n              <ion-text class=\"text\" >${{precioDyn | number: '1.2-2'}} mxn </ion-text>\n              </ion-col>\n            <ion-col *ngIf=\"descuentillo\">\n             \n              <ion-text class=\"text\" >${{precioDyn*descuento | number: '1.2-2'}} <del>${{precioDyn | number: '1.2-2'}}  mxn </del></ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n             <ion-text class=\"text\" >SKU:</ion-text>\n            </ion-col>\n            <ion-col>\n              <p class=\"text\">\n                \n                  <span id=\"referencia\">{{ producto.sku  }}\n                  </span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Existencia:</ion-text>\n            </ion-col>\n            <ion-col>\n            <ion-text class=\"text\">{{existencias}}</ion-text> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\" style=\"color:rgb(27, 172, 209);\">Unidad de Venta:</ion-text>\n            </ion-col>\n            <ion-col>\n              <p class=\"text\"><span id=\"unidadVenta\">{{producto.unitId}}</span></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Color Seleccionado:</ion-text>\n            </ion-col>\n            <ion-col>\n              <p class=\"text\"><span >{{colorSeleccionado}}</span></p>\n            </ion-col>\n          </ion-row> -->\n          <ion-row>\n\n                <div *ngFor=\"let atributo of atributos\">\n                  <ion-col >\n                  <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                </ion-col>\n                <ion-col >\n                  <div *ngIf=\"atributo.is_color_group != '1'\">\n                    <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                      class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n\n\n\n                      <!-- <ion-button *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-color: {{valor.color}}\">{{valor.name}}</ion-button>\n                      <ion-button *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-image: url({{valor.image}});\">{{valor.name}}</ion-button> -->\n\n\n\n                        <input type=\"button\" *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                        (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-color: {{valor.color}}\" >\n                        <input type=\"button\" *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                        (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-image: url({{valor.image}});\" >\n        \n                    </div>\n                  </div>\n                \n                \n                  <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                    class=\"form-group {{atributo.id_attribute_group}}\" >\n                    <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                  </select>\n                </ion-col>\n                </div>\n          </ion-row>\n          <ion-row>\n            <!-- <ion-col>\n              <ion-text class=\"text\">Cantidad:</ion-text>   \n            </ion-col> -->\n            <ion-col style=\"display: flex;align-items: center; justify-content:start ;\">\n\n\n\n               <!-- <ion-icon name=\"remove-circle\" style=\"width: 25px;height: 30px;color: #6cdff9;padding-right: 10px;\" (click)=\"decrement()\"></ion-icon> -->\n                <!-- <ion-label style=\"font-size:15px;color: black;font-weight: bold;\">{{cantidad}}</ion-label> -->\n                <!-- <ion-icon name=\"add-circle\" style=\"width: 25px;height: 30px;color:#6cdff9;padding-left: 10px;\" (click)=\"increment()\"></ion-icon> -->\n              <!-- <ion-input class=\"text\" type=\"number\" min=\"1\" onkeyup=\"if(this.value<0){this.value= this.value * -1}\" [(ngModel)]=\"cantidad\" max=\"{{producto.existencia}}\"></ion-input> -->\n           \n            \n            \n            </ion-col>\n          </ion-row>\n          <!-- <ion-button id=\"addCarrito\" expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n          <ion-button id=\"irCarrito\" expand=\"full\" shape=\"round\" color=\"secondary\"  routerLink=\"/cart\"  >Ir a Carrito</ion-button>\n          <ion-button id=\"wishlist\" expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarWishlist()\" >Agregar a Wishlist</ion-button> -->\n        </ion-grid>\n      </ion-card-content>\n\n      <!-- <ion-card-content>\n        <ion-card-title class=\"ion-text-center\">Descripción del Producto</ion-card-title>\n       <br>\n        <div [innerHTML]=\"descripcionsilla\"></div>\n      </ion-card-content> -->\n\n      <ion-card-content id=\"caracteristicas\">\n        <ion-card-title style=\"font-weight: bolder;text-align: center;\">Caracteristicas de Producto</ion-card-title>\n       <br>\n        <div [innerHTML]=\"descripcionsita\" class=\"cont-car\"></div>\n      </ion-card-content>\n\n\n\n\n\n    </ion-card>\n\n    \n    \n    \n  </div>\n\n  <div class=\"prods-related-cont\">\n    <h1 class=\"taitl\">Productos Relacionados</h1>\n\n    <swiper [navigation]=\"true\" [autoHeight]=\"true\" id=\"related\" [breakpoints]=\"{'1500':{slidesPerView: 6, spaceBetween: 0},'1200':{slidesPerView: 5, spaceBetween: 0},'992':{slidesPerView: 5, spaceBetween: 0},'768':{slidesPerView: 3, spaceBetween: 0},'480':{slidesPerView: 2, spaceBetween: 0}}\">\n      <ng-template *ngFor=\"let item of relacionados\" swiperSlide>\n        <div class=\"all-cont\">\n          <div class=\"prod-cont\">\n            <!--<span class=\"offer\" style=\"background-color: red;\">OFERTA</span>-->\n            <a href=\"\" class=\"foto-cont\" [routerLink]=\"['/descripcion-producto',item.id_product]\">\n              <img src=\"{{item.image_link}}\" alt=\"\" id=\"uno\">\n              <img src=\"{{item.image_link}}\" alt=\"\" id=\"dos\">\n            </a>\n            <div class=\"rate-cont\">\n              <i class=\"fa-solid fa-star\"></i>\n              <i class=\"fa-solid fa-star\"></i>\n              <i class=\"fa-solid fa-star\"></i>\n              <i class=\"fa-solid fa-star\"></i>\n              <i class=\"fa-solid fa-star\"></i>\n            </div>\n            <a class=\"prod-name\" [routerLink]=\"['/descripcion-producto',item.id_product]\" style=\"text-transform: capitalize; max-height: 38px; overflow: hidden;\">\n              {{item.title}}\n            </a>\n            <div class=\"price-cont\" style=\"display: none;\">\n              <span class=\"now\">$5,639.39</span>\n              <span class=\"bef\">$8,288.31</span>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </swiper>\n  </div>\n\n  <div class=\"loader\" *ngIf=\"cargando\">\n    <img src=\"/assets/img/loadersillo.gif\">\n  </div>\n\n  <app-desk-footer class=\"deskfooter\"></app-desk-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_descripcion-producto_descripcion-producto_module_ts.js.map
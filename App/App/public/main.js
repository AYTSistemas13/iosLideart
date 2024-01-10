(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 1391);




const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_ngx-sweetalert2_fesm2022_sweetalert2-ngx-sweetalert2_mjs"), __webpack_require__.e("default-src_app_pages_modal-descripcion-producto_modal-descripcion-producto_page_ts"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 49142)).then(m => m.HomePageModule)
}, {
  path: 'perfil/:rec',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_perfil_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/perfil/perfil.module */ 73731)).then(m => m.PerfilPageModule),
  canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'modal-product',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_modal-product_modal-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-product/modal-product.module */ 31384)).then(m => m.ModalProductPageModule)
}, {
  path: 'login',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 8364)).then(m => m.LoginPageModule)
}, {
  path: 'cart',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cart/cart.module */ 91697)).then(m => m.CartPageModule)
}, {
  path: 'catalogo/:id_categoria',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_modal-descripcion-producto_modal-descripcion-producto_page_ts"), __webpack_require__.e("src_app_pages_catalogo_catalogo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogo/catalogo.module */ 28159)).then(m => m.CatalogoPageModule)
}, {
  path: 'resetPassword',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reseteo-password_reseteo-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reseteo-password/reseteo-password.module */ 8702)).then(m => m.ReseteoPasswordPageModule)
}, {
  path: 'resultados-busqueda',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_resultado-busqueda_resultado-busqueda_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resultado-busqueda/resultado-busqueda.module */ 64689)).then(m => m.ResultadoBusquedaPageModule)
}, {
  path: 'modal-recuperar',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-recuperar/modal-recuperar.module */ 87746)).then(m => m.ModalRecuperarPageModule)
}, {
  path: 'modal-registro',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-registro/modal-registro.module */ 36887)).then(m => m.ModalRegistroPageModule)
}, {
  path: 'modal-descripcion-producto',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_modal-descripcion-producto_modal-descripcion-producto_page_ts"), __webpack_require__.e("src_app_pages_modal-descripcion-producto_modal-descripcion-producto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-descripcion-producto/modal-descripcion-producto.module */ 95280)).then(m => m.ModalDescripcionProductoPageModule)
}, {
  path: 'checkout',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_checkout_checkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/checkout/checkout.module */ 27747)).then(m => m.CheckoutPageModule),
  canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'resumen-compra',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_resumen-compra_resumen-compra_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resumen-compra/resumen-compra.module */ 3148)).then(m => m.ResumenCompraPageModule),
  canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'categoria/:id_parent',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categorias_categorias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/categorias/categorias.module */ 79894)).then(m => m.CategoriasPageModule)
}, {
  path: 'categorias',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tipos-categorias_tipos-categorias_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tipos-categorias/tipos-categorias.module */ 40711)).then(m => m.TiposCategoriasPageModule)
}, {
  path: 'paquetes',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_categoria-por-paquetes_categoria-por-paquetes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/categoria-por-paquetes/categoria-por-paquetes.module */ 9598)).then(m => m.CategoriaPorPaquetesPageModule)
}, {
  path: 'modal-descripcion-paquetes',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_modal-descripcion-paquetes_modal-descripcion-paquetes_page_ts"), __webpack_require__.e("src_app_pages_modal-descripcion-paquetes_modal-descripcion-paquetes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modal-descripcion-paquetes/modal-descripcion-paquetes.module */ 68666)).then(m => m.ModalDescripcionPaquetesPageModule)
}, {
  path: 'catalogo-paquetes/:id_categoria',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_modal-descripcion-paquetes_modal-descripcion-paquetes_page_ts"), __webpack_require__.e("src_app_pages_catalogo-paquetes_catalogo-paquetes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/catalogo-paquetes/catalogo-paquetes.module */ 86062)).then(m => m.CatalogoPaquetesPageModule)
}, {
  path: 'wishlist',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_wishlist_wishlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/wishlist/wishlist.module */ 8776)).then(m => m.WishlistPageModule),
  canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'descripcion-producto/:id_product',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_ngx-sweetalert2_fesm2022_sweetalert2-ngx-sweetalert2_mjs"), __webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_pages_descripcion-producto_descripcion-producto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/descripcion-producto/descripcion-producto.module */ 56508)).then(m => m.DescripcionProductoPageModule)
}, {
  path: 'descripcion-paquetes/:id_product',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_descripcion-paquetes_descripcion-paquetes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/descripcion-paquetes/descripcion-paquetes.module */ 11021)).then(m => m.DescripcionPaquetesPageModule)
}, {
  path: 'blog',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_blogsito_blogsito_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/blogsito/blogsito.module */ 72297)).then(m => m.BlogsitoPageModule)
}, {
  path: 'promociones',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_ngx-sweetalert2_fesm2022_sweetalert2-ngx-sweetalert2_mjs"), __webpack_require__.e("src_app_pages_promociones_promociones_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/promociones/promociones.module */ 49447)).then(m => m.PromocionesPageModule)
}, {
  path: 'articulo-blog/:id_blog',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_articulo-blog_articulo-blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/articulo-blog/articulo-blog.module */ 14912)).then(m => m.ArticuloBlogPageModule)
}, {
  path: 'lidepuntos',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_ngx-sweetalert2_fesm2022_sweetalert2-ngx-sweetalert2_mjs"), __webpack_require__.e("src_app_pages_lidepuntos_lidepuntos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/lidepuntos/lidepuntos.module */ 43025)).then(m => m.LidepuntosPageModule)
}, {
  path: 'faq',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_ngx-sweetalert2_fesm2022_sweetalert2-ngx-sweetalert2_mjs"), __webpack_require__.e("src_app_pages_faq_faq_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faq/faq.module */ 49257)).then(m => m.FaqPageModule)
}, {
  path: 'venta/:ov',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_resumen-venta_resumen-venta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/resumen-venta/resumen-venta.module */ 95323)).then(m => m.ResumenVentaPageModule)
}, {
  path: 'reviews',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_reviews_reviews_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/reviews/reviews.module */ 54696)).then(m => m.ReviewsPageModule)
}, {
  path: 'chat',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/chat/chat.module */ 34803)).then(m => m.ChatPageModule)
}, {
  path: 'contacto',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_contacto_contacto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/contacto/contacto.module */ 94889)).then(m => m.ContactoPageModule)
}, {
  path: 'nosotros',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_nosotros_nosotros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/nosotros/nosotros.module */ 97541)).then(m => m.NosotrosPageModule)
}, {
  path: 'distribuidor',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_distribuidor_distribuidor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/distribuidor/distribuidor.module */ 44874)).then(m => m.DistribuidorPageModule)
}, {
  path: 'software-de-equipos',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_software-de-equipos_software-de-equipos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/software-de-equipos/software-de-equipos.module */ 76970)).then(m => m.SoftwareDeEquiposPageModule)
}, {
  path: 'cursos-gratis',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_cursos-gratis_cursos-gratis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cursos-gratis/cursos-gratis.module */ 24169)).then(m => m.CursosGratisPageModule)
}, {
  path: 'terminos-politicas/:id',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_terminos-politicas_terminos-politicas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/terminos-politicas/terminos-politicas.module */ 48910)).then(m => m.TerminosPoliticasPageModule)
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    useHash: true,
    initialNavigation: 'enabledBlocking',
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], AppRoutingModule);

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api-productos.service */ 54867);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ 36402);
/* harmony import */ var _services_carrito_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/carrito-service.service */ 25852);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login.service */ 6138);
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/test.service */ 63961);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
















let AppComponent = class AppComponent {
  constructor(menu, shoppingCart, renderer, usuarioService, authService, router, apiProductos, alertController, location, platform, sanitizer, dataService) {
    this.menu = menu;
    this.shoppingCart = shoppingCart;
    this.renderer = renderer;
    this.usuarioService = usuarioService;
    this.authService = authService;
    this.router = router;
    this.apiProductos = apiProductos;
    this.alertController = alertController;
    this.location = location;
    this.platform = platform;
    this.sanitizer = sanitizer;
    this.dataService = dataService;
    this.isDarkTheme = false;
    this.datosUsuario = [];
    this.searchbarVisible = false;
    this.totalItems = 0;
    this.resultadoBusqueda = null;
    this.txtBuscador = '';
    this.numeroResultados = 0;
    this.productos = [];
    this.cargando = false;
    this.version = 6;
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
    this.pistasContIs = false;
    this.cardMarcasIs = false;
    this.chat = "https://chat.chatra.io/?isModern=true#hostId=WsCwNXHL8qFQnNjAK&mode=widget&clientId=4qr0d6m_fGVCXNJKniJ97bGayZtpkM3v-GI73rjE&lang=es&currentPage=https%3A%2F%2Flideart.com.mx%2F&currentPageTitle=Lideart&prevPage=&referrer=";
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
      if (this.usuario) {
        this.checalo();
      }
    });
    // const info: DeviceInfo = await Device.getInfo();
    // this.iosOrAndroid = (info.platform === "android" || info.platform === "ios");
    // this.sendSms() 
    this.urlsafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.chat);
  }
  ngOnInit() {
    this.apiProductos.getProductos().subscribe(response => {
      this.productos = response;
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    this.checalo();
    this.checaVersion();
    this.sus = this.platform.backButton.subscribe(() => {
      this.location.back();
    });
    /*this.dataService.data$.subscribe((data) => {
      // Do something with the data in the AppComponent
      console.log('Data in AppComponent:', data);
      this.dataHeader = data;
      setTimeout(() => {
        this.datasas();
      }, 1000);
    });*/
    //this.urlsafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.chat);
  }

  datasas() {
    console.log(this.dataHeader);
    if (this.dataHeader == 1) {
      this.renderer.setStyle(this.hedin.nativeElement, 'display', 'none');
    } else if (this.dataHeader == 2) {
      this.renderer.setStyle(this.hedin.nativeElement, 'display', 'block');
    }
  }
  /*chatea(){
    Browser.open({url: this.chat})
  }*/
  handlePistas() {
    if (this.pistasContIs == false) {
      this.renderer.setStyle(this.pistasCont.nativeElement, 'height', '0em');
      this.renderer.setStyle(this.pistasCont.nativeElement, 'padding', '0em');
      this.renderer.removeClass(this.ud1.nativeElement, 'fa-chevron-up');
      this.renderer.addClass(this.ud1.nativeElement, 'fa-chevron-down');
      this.pistasContIs = true;
    } else if (this.pistasContIs == true) {
      this.renderer.setStyle(this.pistasCont.nativeElement, 'height', '8em');
      this.renderer.setStyle(this.pistasCont.nativeElement, 'padding', '1em');
      this.renderer.removeClass(this.ud1.nativeElement, 'fa-chevron-down');
      this.renderer.addClass(this.ud1.nativeElement, 'fa-chevron-up');
      this.pistasContIs = false;
    }
  }
  handleCard1() {
    if (this.cardMarcasIs == false) {
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'height', '12em');
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'padding', '.1em');
      this.renderer.removeClass(this.ud2.nativeElement, 'fa-chevron-up');
      this.renderer.addClass(this.ud2.nativeElement, 'fa-chevron-down');
      this.cardMarcasIs = true;
    } else if (this.cardMarcasIs == true) {
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'height', '3em');
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'padding', '0em');
      this.renderer.removeClass(this.ud2.nativeElement, 'fa-chevron-down');
      this.renderer.addClass(this.ud2.nativeElement, 'fa-chevron-up');
      this.cardMarcasIs = false;
    }
  }
  mevoy() {
    this.txtBuscador = "";
    this.router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this.router.navigate(['/resultados-busqueda']);
    });
  }
  checaVersion() {
    this.usuarioService.checaVersion().subscribe(version => {
      this.versionAppstore = version;
      if (this.versionAppstore > this.version) {
        this.errorVesion();
      }
    });
  }
  errorVesion() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Nueva Version',
        message: 'Existe una nueva version de esta aplicación, te recomendamos actualizar para evitar errores ¿Deseas Actualizar ahora?',
        buttons: [{
          text: 'Confirmar',
          handler: () => {
            window.open("https://play.google.com/store/apps/details?id=io.ionic.lideart", '_system');
          }
        }]
      });
      yield alert.present();
    })();
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
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
  openSearchBar3() {
    var buscador = document.getElementById('buscador');
    this.searchbarVisible = this.searchbarVisible == false ? true : false;
    if (this.searchbarVisible == false) {
      buscador.style.display = "none";
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
  search(event) {
    if (event.detail.value != '') {
      const filtro = event.target.value.trim();
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  close() {
    this.menu.close();
    this.usuarioService.logout();
    this.authService.logout();
    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  //   sendSms() {
  //     const numbers: string[] = ["+52 639 1061558"];
  //     SmsManager.send({
  //         numbers: numbers,
  //         text: "hola compadre, le mando este mensaje",
  //     }).then(() => {
  //         // success
  //     }).catch(error => {
  //         console.error(error);
  //     });
  // }
  closen() {
    this.menu.close();
  }
  checalo() {
    if (this.usuario != null) {
      this.usuarioService.checaUsuario(this.usuario.usuario).subscribe(data => {
        this.datosUsuario = data;
        this.nombre = this.datosUsuario.nombre;
        this.apellido = this.datosUsuario.apellido;
      });
    } else if (this.usuario == null) {
      this.nombre = 'Bienvenido a';
      this.apellido = 'Lideart';
    }
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController
  }, {
    type: _services_carrito_service_service__WEBPACK_IMPORTED_MODULE_5__.CarritoServiceService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2
  }, {
    type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService
  }, {
    type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
  }, {
    type: _services_test_service__WEBPACK_IMPORTED_MODULE_7__.DataService
  }];
  static #_2 = this.propDecorators = {
    pistasCont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['pistasCont']
    }],
    ud1: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['ud1']
    }],
    cardMarcas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['cardMarcas']
    }],
    ud2: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['ud2']
    }],
    hedin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['hedin']
    }]
  };
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/angular */ 29909);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 90956);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-lazyload-image */ 21935);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.module */ 8364);
/* harmony import */ var _pages_modal_recuperar_modal_recuperar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/modal-recuperar/modal-recuperar.module */ 87746);
/* harmony import */ var _pages_modal_registro_modal_registro_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/modal-registro/modal-registro.module */ 36887);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _pipe_seguridad_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/seguridad.pipe */ 30031);



















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pipe_seguridad_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_11__.LazyLoadImageModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule, swiper_angular__WEBPACK_IMPORTED_MODULE_13__.SwiperModule, _pages_login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginPageModule, _pages_modal_recuperar_modal_recuperar_module__WEBPACK_IMPORTED_MODULE_4__.ModalRecuperarPageModule, _pages_modal_registro_modal_registro_module__WEBPACK_IMPORTED_MODULE_5__.ModalRegistroPageModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.NoopAnimationsModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy
  }, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA]
})], AppModule);

/***/ }),

/***/ 10822:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentsModule: () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _desk_footer_desk_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desk-footer/desk-footer.component */ 34349);
/* harmony import */ var _desk_header_desk_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desk-header/desk-header.component */ 93175);








let ComponentsModule = class ComponentsModule {};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
  declarations: [_desk_header_desk_header_component__WEBPACK_IMPORTED_MODULE_1__.DeskHeaderComponent, _desk_footer_desk_footer_component__WEBPACK_IMPORTED_MODULE_0__.DeskFooterComponent],
  exports: [_desk_header_desk_header_component__WEBPACK_IMPORTED_MODULE_1__.DeskHeaderComponent, _desk_footer_desk_footer_component__WEBPACK_IMPORTED_MODULE_0__.DeskFooterComponent]
})], ComponentsModule);

/***/ }),

/***/ 34349:
/*!*****************************************************************!*\
  !*** ./src/app/components/desk-footer/desk-footer.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskFooterComponent: () => (/* binding */ DeskFooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _desk_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desk-footer.component.html?ngResource */ 6883);
/* harmony import */ var _desk_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desk-footer.component.scss?ngResource */ 93069);
/* harmony import */ var _desk_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_desk_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let DeskFooterComponent = class DeskFooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
DeskFooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-desk-footer',
  template: _desk_footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_desk_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], DeskFooterComponent);

/***/ }),

/***/ 93175:
/*!*****************************************************************!*\
  !*** ./src/app/components/desk-header/desk-header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeskHeaderComponent: () => (/* binding */ DeskHeaderComponent)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _desk_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desk-header.component.html?ngResource */ 39663);
/* harmony import */ var _desk_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desk-header.component.scss?ngResource */ 44452);
/* harmony import */ var _desk_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_desk_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_pages_modal_registro_modal_registro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/modal-registro/modal-registro.page */ 11709);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ 36402);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);














let DeskHeaderComponent = class DeskHeaderComponent {
  constructor(renderer, apiProductos, router, shoppingCart, modalCtrl, usuarioService, authService, wishlist) {
    this.renderer = renderer;
    this.apiProductos = apiProductos;
    this.router = router;
    this.shoppingCart = shoppingCart;
    this.modalCtrl = modalCtrl;
    this.usuarioService = usuarioService;
    this.authService = authService;
    this.wishlist = wishlist;
    this.sticky = false;
    this.pistasContIs = false;
    this.cardMarcasIs = false;
    this.cardCategoriasIs = false;
    this.nav_contIs = false;
    this.cargando = false;
    this.datosUsuario = [];
    this.totalItems = 0;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
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
    this.listaWishlist = [];
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
      if (this.usuario) {
        this.checalo();
      }
    });
  }
  ngOnInit() {
    this.apiProductos.getProductos().subscribe(response => {
      this.productos = response;
    });
    this.shoppingCart.cartItems.subscribe(d => {
      this.totalItems = d.length;
    });
    if (this.usuario) {
      this.wishlist.recuperaWishlist(this.usuario.usuario).subscribe(response => {
        this.listaWishlist = response;
      });
    }
  }
  handlePistas() {
    if (this.pistasContIs == false) {
      this.renderer.setStyle(this.pistasCont.nativeElement, 'height', '0em');
      this.renderer.setStyle(this.pistasCont.nativeElement, 'padding', '0em');
      this.renderer.removeClass(this.ud1.nativeElement, 'fa-chevron-up');
      this.renderer.addClass(this.ud1.nativeElement, 'fa-chevron-down');
      this.pistasContIs = true;
    } else if (this.pistasContIs == true) {
      this.renderer.setStyle(this.pistasCont.nativeElement, 'height', '8em');
      this.renderer.setStyle(this.pistasCont.nativeElement, 'padding', '1em');
      this.renderer.removeClass(this.ud1.nativeElement, 'fa-chevron-down');
      this.renderer.addClass(this.ud1.nativeElement, 'fa-chevron-up');
      this.pistasContIs = false;
    }
  }
  handleCard1() {
    if (this.cardMarcasIs == false) {
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'height', '12em');
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'padding', '.1em');
      this.renderer.removeClass(this.ud2.nativeElement, 'fa-chevron-up');
      this.renderer.addClass(this.ud2.nativeElement, 'fa-chevron-down');
      this.cardMarcasIs = true;
    } else if (this.cardMarcasIs == true) {
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'height', '3em');
      this.renderer.setStyle(this.cardMarcas.nativeElement, 'padding', '0em');
      this.renderer.removeClass(this.ud2.nativeElement, 'fa-chevron-down');
      this.renderer.addClass(this.ud2.nativeElement, 'fa-chevron-up');
      this.cardMarcasIs = false;
    }
  }
  handleCard2() {
    if (this.cardCategoriasIs == false) {
      this.renderer.setStyle(this.cardCategorias.nativeElement, 'height', '12em');
      this.renderer.setStyle(this.cardCategorias.nativeElement, 'padding', '.1em');
      this.renderer.removeClass(this.ud3.nativeElement, 'fa-chevron-up');
      this.renderer.addClass(this.ud3.nativeElement, 'fa-chevron-down');
      this.cardCategoriasIs = true;
    } else if (this.cardCategoriasIs == true) {
      this.renderer.setStyle(this.cardCategorias.nativeElement, 'height', '3em');
      this.renderer.setStyle(this.cardCategorias.nativeElement, 'padding', '0em');
      this.renderer.removeClass(this.ud3.nativeElement, 'fa-chevron-down');
      this.renderer.addClass(this.ud3.nativeElement, 'fa-chevron-up');
      this.cardCategoriasIs = false;
    }
  }
  ngAfterViewInit() {
    this.elementPosition = this.upMenu.nativeElement.offsetTop;
  }
  checalo() {
    this.usuarioService.checaUsuario(this.usuario.usuario).subscribe(data => {
      this.datosUsuario = data;
      this.nombre = this.datosUsuario.nombre;
      this.apellido = this.datosUsuario.apellido;
    });
  }
  close() {
    this.usuarioService.logout();
    this.authService.logout();
    this.router.navigateByUrl('/home', {
      replaceUrl: true
    });
  }
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.renderer.setStyle(this.upMenu.nativeElement, 'position', 'fixed');
    } else {
      this.renderer.setStyle(this.upMenu.nativeElement, 'position', 'relative');
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
  search(event) {
    if (event.detail.value != '') {
      const filtro = event.target.value.trim();
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_9__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
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
  modalReg() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: src_app_pages_modal_registro_modal_registro_page__WEBPACK_IMPORTED_MODULE_3__.ModalRegistroPage,
        cssClass: 'modalRegistroCss',
        initialBreakpoint: 1,
        breakpoints: [0, 0.5, 1]
      });
      return yield modal.present();
    })();
  }
  llevame(item, sku) {
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
  mevoy() {
    this.txtBuscador = "";
    this.router.navigateByUrl('/', {
      skipLocationChange: true
    }).then(() => {
      this.router.navigate(['/resultados-busqueda']);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Renderer2
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_4__.ApiProductosService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_6__.CarritoServiceService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__.LoginService
  }, {
    type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
  }, {
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_8__.ServiciowishlistService
  }];
  static #_2 = this.propDecorators = {
    nav_cont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['nav_cont']
    }],
    upMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['upMenu']
    }],
    pistasCont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['pistasCont']
    }],
    ud1: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['ud1']
    }],
    cardMarcas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['cardMarcas']
    }],
    ud2: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['ud2']
    }],
    cardCategorias: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['cardCategorias']
    }],
    ud3: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
      args: ['ud3']
    }],
    handleScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.HostListener,
      args: ['window:scroll', ['$event']]
    }]
  };
};
DeskHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-desk-header',
  template: _desk_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
  styles: [(_desk_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DeskHeaderComponent);

/***/ }),

/***/ 1391:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/authentication.service */ 36402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 81527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79736);





let AuthGuard = class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canLoad() {
    return this.authService.isAuthenticated.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(val => val !== null),
    // Filter out initial Behaviour subject value
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1),
    // Otherwise the Observable doesn't complete!
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
    }));
  }
  static #_ = this.ctorParameters = () => [{
    type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: 'root'
})], AuthGuard);

/***/ }),

/***/ 96906:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageRoutingModule: () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 44773);




const routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
}];
let LoginPageRoutingModule = class LoginPageRoutingModule {};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], LoginPageRoutingModule);

/***/ }),

/***/ 8364:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPageModule: () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 96906);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 44773);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let LoginPageModule = class LoginPageModule {};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  exports: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage] //, DeskHeaderComponent, DeskFooterComponent
})], LoginPageModule);

/***/ }),

/***/ 44773:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPage: () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 86535);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 36402);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var _modal_recuperar_modal_recuperar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-recuperar/modal-recuperar.page */ 97218);
/* harmony import */ var _modal_registro_modal_registro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-registro/modal-registro.page */ 11709);
/* harmony import */ var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/test.service */ 63961);













let LoginPage = class LoginPage {
  /*get gifs(){
    return this.dataService.historial;
  }*/
  constructor(modalCtrl, formBuilder, alertController, loadingController, usuariosLogin, router, authService, dataService) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.usuariosLogin = usuariosLogin;
    this.router = router;
    this.authService = authService;
    this.dataService = dataService;
    this.isSubmitted = false;
    this.isLoading = false;
    this.items = [];
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      /* https://localcoder.org/how-to-validate-password-strength-with-angular-5-validator-pattern  */
      /*
      - At least 8 characters in length
      - Lowercase letters
      - Uppercase letters
      - Numbers
      - Special characters
      */
    });
  }

  handleHead() {
    this.router.navigate(['/home']);
    this.dataService.setData(2);
  }
  presentLoading() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      return yield _this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Iniciando Sesion...',
        duration: 50000,
        spinner: 'bubbles'
      }).then(a => {
        a.present().then(() => {
          console.log('presented');
          if (!_this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    })();
  }
  dismiss() {
    var _this2 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isLoading = false;
      return yield _this2.loadingController.dismiss().then(() => console.log('dismissed'));
    })();
  }
  login() {
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      //this.presentLoading();
      this.presentAlert();
    } else {
      this.presentLoading();
      this.usuariosLogin.login(this.loginForm.value).subscribe(res => {
        if (res.exito === 1) {
          this.dismiss();
          const toka = res.token;
          this.authService.login(toka);
          if (this.items.length > 0) {
            this.router.navigate(['/carrito']);
            this.dataService.setData(2);
          } else {
            //this.router.navigate(['/home']);
            this.router.navigateByUrl('/home', {
              replaceUrl: true
            });
            this.dataService.setData(2);
          }
        }
        if (res.exito === 2) {
          this.dismiss();
          this.correoNoExiste();
        }
        if (res.exito === 3) {
          this.dismiss();
          this.correoNoActivo();
        }
        if (res.exito === 4) {
          this.dismiss();
          this.passwordMalo();
        }
      });
    }
  }
  correoNoExiste() {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'loginAlertComp',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'El correo ingresado no existe.',
        buttons: ['OK']
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }
  correoNoActivo() {
    var _this4 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'loginAlertComp',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'El correo ingresado no esta activo.',
        buttons: ['OK']
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }
  passwordMalo() {
    var _this5 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'loginAlertComp',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'Password Incorrecto.',
        buttons: ['OK']
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }
  errorNotificationPassword() {
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Error',
    //   text: 'Password Incorrecto!',
    // })
  }
  errorNotificationActivo() {
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Error',
    //   text: 'Correo no Activado!',
    // })
  }
  errorNotificationCorreo() {
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Error',
    //   text: 'Correo no Existe!',
    // })
  }
  get errorControl() {
    return this.loginForm.controls;
  }
  presentAlert() {
    var _this6 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'loginAlertComp',
        header: 'Error',
        //subHeader: 'Subtitle',
        message: 'Completa correctamente los campos.',
        buttons: ['OK']
      });
      yield alert.present();
      const {
        role
      } = yield alert.onDidDismiss();
    })();
  }
  modalRec() {
    var _this7 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this7.modalCtrl.create({
        component: _modal_recuperar_modal_recuperar_page__WEBPACK_IMPORTED_MODULE_5__.ModalRecuperarPage,
        cssClass: 'modalRecuperarCss',
        initialBreakpoint: 0.8,
        breakpoints: [0, 0.5, 1]
      });
      return yield modal.present();
    })();
  }
  modalReg() {
    var _this8 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this8.modalCtrl.create({
        component: _modal_registro_modal_registro_page__WEBPACK_IMPORTED_MODULE_6__.ModalRegistroPage,
        cssClass: 'modalRegistroCss',
        initialBreakpoint: 1,
        breakpoints: [0, 0.5, 1]
      });
      return yield modal.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
  }, {
    type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_7__.DataService
  }];
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginPage);

/***/ }),

/***/ 18794:
/*!*************************************************************************!*\
  !*** ./src/app/pages/modal-recuperar/modal-recuperar-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRecuperarPageRoutingModule: () => (/* binding */ ModalRecuperarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _modal_recuperar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-recuperar.page */ 97218);




const routes = [{
  path: '',
  component: _modal_recuperar_page__WEBPACK_IMPORTED_MODULE_0__.ModalRecuperarPage
}];
let ModalRecuperarPageRoutingModule = class ModalRecuperarPageRoutingModule {};
ModalRecuperarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ModalRecuperarPageRoutingModule);

/***/ }),

/***/ 87746:
/*!*****************************************************************!*\
  !*** ./src/app/pages/modal-recuperar/modal-recuperar.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRecuperarPageModule: () => (/* binding */ ModalRecuperarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _modal_recuperar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-recuperar-routing.module */ 18794);
/* harmony import */ var _modal_recuperar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-recuperar.page */ 97218);







let ModalRecuperarPageModule = class ModalRecuperarPageModule {};
ModalRecuperarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _modal_recuperar_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalRecuperarPageRoutingModule],
  exports: [_modal_recuperar_page__WEBPACK_IMPORTED_MODULE_1__.ModalRecuperarPage],
  declarations: [_modal_recuperar_page__WEBPACK_IMPORTED_MODULE_1__.ModalRecuperarPage]
})], ModalRecuperarPageModule);

/***/ }),

/***/ 97218:
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-recuperar/modal-recuperar.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRecuperarPage: () => (/* binding */ ModalRecuperarPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _modal_recuperar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-recuperar.page.html?ngResource */ 18500);
/* harmony import */ var _modal_recuperar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-recuperar.page.scss?ngResource */ 25359);
/* harmony import */ var _modal_recuperar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_recuperar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ 6138);








let ModalRecuperarPage = class ModalRecuperarPage {
  constructor(modalCtrl, formBuilder, contactoService, toastController) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.contactoService = contactoService;
    this.toastController = toastController;
    this.datos = [];
    this.estoycargando = false;
  }
  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss();
  }
  sendRequest() {
    this.estoycargando = true;
    this.contactoService.requestReset(this.correito).subscribe(data => {
      this.datos = data;
      if (this.datos == null || this.datos == undefined || this.datos == "") {
        this.Errorsito();
        this.estoycargando = true;
      } else {
        this.nombre = this.datos.nombre;
        this.apellido = this.datos.lastname;
        this.link = this.datos.link;
        this.correito = this.datos.correo;
        var lineasCorreo = [];
        lineasCorreo.push({
          "nombreCliente": this.nombre + " " + this.apellido,
          "correoCliente": this.correito,
          "link": this.link
        });
        this.contactoService.EnviaCorreoRecuperaPassword(lineasCorreo[0]).subscribe(data => {
          this.estoycargando = false;
          this.Success();
          this.correito = "";
        });
      }
    });
  }
  Errorsito() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Correo no registrado',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  Success() {
    var _this2 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Verifica tu correo electronico y sigue los pasos para recuperar tu contraseña',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
  }];
};
ModalRecuperarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-modal-recuperar',
  template: _modal_recuperar_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_recuperar_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalRecuperarPage);

/***/ }),

/***/ 95009:
/*!***********************************************************************!*\
  !*** ./src/app/pages/modal-registro/modal-registro-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRegistroPageRoutingModule: () => (/* binding */ ModalRegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _modal_registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-registro.page */ 11709);




const routes = [{
  path: '',
  component: _modal_registro_page__WEBPACK_IMPORTED_MODULE_0__.ModalRegistroPage
}];
let ModalRegistroPageRoutingModule = class ModalRegistroPageRoutingModule {};
ModalRegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ModalRegistroPageRoutingModule);

/***/ }),

/***/ 36887:
/*!***************************************************************!*\
  !*** ./src/app/pages/modal-registro/modal-registro.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRegistroPageModule: () => (/* binding */ ModalRegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _modal_registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-registro-routing.module */ 95009);
/* harmony import */ var _modal_registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-registro.page */ 11709);







let ModalRegistroPageModule = class ModalRegistroPageModule {};
ModalRegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _modal_registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalRegistroPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
  exports: [_modal_registro_page__WEBPACK_IMPORTED_MODULE_1__.ModalRegistroPage],
  declarations: [_modal_registro_page__WEBPACK_IMPORTED_MODULE_1__.ModalRegistroPage]
})], ModalRegistroPageModule);

/***/ }),

/***/ 11709:
/*!*************************************************************!*\
  !*** ./src/app/pages/modal-registro/modal-registro.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalRegistroPage: () => (/* binding */ ModalRegistroPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _modal_registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-registro.page.html?ngResource */ 67485);
/* harmony import */ var _modal_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-registro.page.scss?ngResource */ 36976);
/* harmony import */ var _modal_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/registro.service */ 35253);









let ModalRegistroPage = class ModalRegistroPage {
  constructor(modalCtrl, formBuilder, alertController, loadingController, router, registroService) {
    this.modalCtrl = modalCtrl;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.router = router;
    this.registroService = registroService;
    this.isSubmitted = false;
    this.datosDynamics = [];
    this.isLoading = false;
    this.facturame = false;
  }
  ngOnInit() {
    this.regisForm = this.formBuilder.group({
      nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(36)]],
      apellidos: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(36)]],
      rfc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[A-Za-z0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(13)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]],
      /* https://localcoder.org/how-to-validate-password-strength-with-angular-5-validator-pattern  */
      /*
      - At least 8 characters in length
      - Lowercase letters
      - Uppercase letters
      - Numbers
      - Special characters
      */
      news: [false],
      priv: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('true')]],
      term: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('true')]]
    });
  }
  register() {
    this.presentLoading();
    this.isSubmitted = true;
    if (this.regisForm.invalid) {
      //return;
      return;
    }
    this.regis = this.regisForm.value;
    this.newsActive = this.regis.news;
    //console.log(this.newsActive);
    if (this.newsActive == true) {
      this.newsletter = 1;
    } else {
      this.newsletter = 0;
    }
    this.regis.newsletter = this.newsletter;
    //this.SpinnerService.show();
    this.registroService.registroUsuario(this.regis).subscribe(response => {
      console.log(response);
      if (response == 1) {
        this.addUserDynamics(this.regis);
        this.dismiss();
      }
      if (response == 2) {
        this.dismiss();
        //this.errorNotificationCorreo();
        //this.SpinnerService.hide();
      }
    });
  }

  facturado() {
    if (this.facturame == false) {
      this.facturame = true;
    } else {
      this.facturame = false;
    }
  }
  presentLoading() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.isLoading = true;
      return yield _this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Registrando Usuario...',
        duration: 3000,
        spinner: 'bubbles'
      }).then(a => {
        a.present().then(() => {
          console.log('presented');
          if (!_this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
    })();
  }
  addUserDynamics(registroUsuario) {
    //this.SpinnerService.show();
    var datosUsuario = Object.values(registroUsuario);
    var nombre = datosUsuario[0].toUpperCase();
    var apellidos = datosUsuario[1].toUpperCase();
    var rfc = datosUsuario[2].toUpperCase();
    var email = datosUsuario[4].toUpperCase();
    if (rfc == '' || rfc == null) {
      rfc = "XAXX010101000";
    }
    var jsonUsuario = {
      "CustomerAccount": "",
      "OrganizationName": nombre + " " + apellidos,
      "SalesCurrencyCode": "MXN",
      "CustomerGroupId": "CONTADO",
      "SalesDistrict": "CHIH",
      "CompanyType": "2",
      "RFCNumber": rfc,
      "SiteId": "CHIH",
      "LineDiscountCode": "CHIH-D-BS",
      "SalesSegmentId": "COMERCIO",
      "PrimaryContactPhone": "",
      "PrimaryContactEmail": email,
      "Direcciones": [{
        "dataAreaId": "LIN",
        "customerLegalEntityId": "LIN",
        "customerAccountNumber": "",
        "addressDescription": "",
        "addressZipCode": "",
        "addressState": "",
        "addressCountryRegionId": "MEX",
        "addressCity": "",
        "addressStreet": "",
        "addressStreetNumber": "",
        "addressCountyId": "",
        "addressCountyName": "",
        "addressLocationRoles": "Business",
        "isPrimary": "Yes",
        "addressUniqueId": "New"
      }],
      "Contactos": [{
        "partyNumber": "0",
        "description": nombre,
        "locator": "",
        "locatorExtension": "",
        "type": "1",
        "isPrimary": "Yes",
        "partyUniqueId": "New"
      }, {
        "partyNumber": "0",
        "description": nombre,
        "locator": email,
        "locatorExtension": "",
        "type": "2",
        "isPrimary": "Yes",
        "partyUniqueId": "New"
      }]
    };
    // console.log('Datos = ' + JSON.stringify(jsonUsuario));
    this.registroService.registroDynamics(JSON.stringify(jsonUsuario)).subscribe(dataUser => {
      console.log(dataUser);
      if (dataUser == 1) {
        this.datosDynamics = Object.values(dataUser);
        var arrayDatos = JSON.parse(this.datosDynamics[2]);
        this.customerID = arrayDatos.CustomerAccount;
        this.correo = arrayDatos.PrimaryContactEmail;
        var datosJson = {
          'customerID': this.customerID,
          'correo': this.correo
        };
        this.registroService.actualizaCustomerID(JSON.stringify(datosJson)).subscribe(data => {});
        //this.SpinnerService.hide();
        //this.exitoRegistro();
        this.router.navigate(['/login']);
      }
    });
  }
  get errorControl() {
    return this.regisForm.controls;
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: src_app_services_registro_service__WEBPACK_IMPORTED_MODULE_3__.RegistroService
  }];
};
ModalRegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-modal-registro',
  template: _modal_registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalRegistroPage);

/***/ }),

/***/ 30031:
/*!****************************************!*\
  !*** ./src/app/pipe/seguridad.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 36480);



let SafePipe = class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer
  }];
};
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'safeHtml'
})], SafePipe);

/***/ }),

/***/ 54867:
/*!***************************************************!*\
  !*** ./src/app/services/api-productos.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiProductosService: () => (/* binding */ ApiProductosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);



const httpOption = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
let ApiProductosService = class ApiProductosService {
  constructor(http) {
    this.http = http;
    this.url = "https://lideart.com.mx/Automatizacion/listaJson.php";
  }
  getProductos() {
    return this.http.get(this.url);
  }
  getSpecificProduct(id) {
    return this.http.get("https://lideart.com.mx/Automatizacion/listaJson2.php?id=" + id);
  }
  getCategorias(id_cat) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaCategorias.php?id_cat=" + id_cat);
  }
  getRelacionados(id_cat) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/productosRelacionados.php?id_cat=" + id_cat);
  }
  checaCupon(datos = []) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/checaCupon.php', datos);
  }
  borraCupon(datos = []) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/cancelaCupon.php', datos);
  }
  getDescripcionProducto(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaArticulo.php?id_product=" + id_product);
  }
  getSubcategoriaPorProducto(id_padre) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaSubCategorias.php?id_parent=" + id_padre);
  }
  getSubcategoriaPorProducto2() {
    return this.http.get("https://lideart.com.mx/Automatizacion/ejemplos.php");
  }
  getDescripcionPaquete(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaArticuloPaquete.php?id_product=" + id_product);
  }
  getDatosPedido(id_customer) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaPedidos.php?id_customer=" + id_customer);
  }
  getSlaidaHome() {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/traesliderIMG.php");
  }
  getSliderImgs(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/getImgSlider.php?id_product=" + id_product);
  }
  getVideos(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/traeVideos.php?id_product=" + id_product);
  }
  getPrecioUnitario(objetoPost) {
    return this.http.post('https://lideart.aytcloud.com/inaxLideartExpoConsAPI/api/Product/getPrecio', objetoPost);
  }
  getExistencias(reference, sitio) {
    return this.http.get('https://lideart.aytcloud.com/inaxLideartExpoConsAPI/api/Product/getExistencias/' + reference + '/CHIH');
  }
  getDescuento(datos = []) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/checaDescuento.php', datos);
  }
  getInfoPaquetes(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/consultaInfoPaquetes.php?id_product=" + id_product);
  }
  esPaquete(id_product) {
    return this.http.get("https://lideart.com.mx/Automatizacion/apis/esPaquete.php?id_product=" + id_product);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
ApiProductosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ApiProductosService);

/***/ }),

/***/ 36402:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationService: () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 74459);






const TOKEN_KEY = 'my-token';
let AuthenticationService = class AuthenticationService {
  constructor(http) {
    this.http = http;
    // Init with null to filter out the first value in a guard!
    this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    this.token = '';
    this.loadToken();
  }
  loadToken() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({
        key: TOKEN_KEY
      });
      if (token && token.value) {
        //console.log('set token: ', token.value);
        _this.token = token.value;
        _this.isAuthenticated.next(true);
      } else {
        _this.isAuthenticated.next(false);
      }
    })();
  }
  login(tokenr) {
    const token = tokenr;
    this.isAuthenticated.next(true);
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({
      key: TOKEN_KEY,
      value: token
    });
    /*return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
        map((data: any) => data.token),
        switchMap((token) => {
            return from(Preferences.set({ key: TOKEN_KEY, value: token }));
        }),
        tap((_) => {
            
        })
    );*/
  }

  logout() {
    this.isAuthenticated.next(false);
    return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.remove({
      key: TOKEN_KEY
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);

/***/ }),

/***/ 25852:
/*!*****************************************************!*\
  !*** ./src/app/services/carrito-service.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarritoServiceService: () => (/* binding */ CarritoServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);



let CarritoServiceService = class CarritoServiceService {
  constructor() {
    this.placeholder = [];
    this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    const ls = this.getCartData();
    if (ls) {
      this.cartItems.next(ls);
    }
  }
  addItem(product) {
    const ls = this.getCartData();
    let exist;
    let pasa;
    pasa = false;
    if (ls) {
      ls.find(item => {
        if (!pasa) {
          pasa = item.sku === product.sku;
          if (pasa) {
            exist = item;
          }
        }
      });
      if (pasa) {
        exist.quantity += product.quantity;
        this.setCartData(ls);
      } else {
        ls.push(product);
        this.setCartData(ls);
      }
    } else {
      const newData = [product];
      this.placeholder.push(product);
      this.setCartData(newData);
    }
  }
  setCartData(data) {
    localStorage.setItem("cart", JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData() {
    return JSON.parse(localStorage.getItem("cart") + "");
  }
  deleteCart() {
    this.placeholder = [];
    this.cartItems.next(this.placeholder);
    localStorage.removeItem('cart');
  }
  static #_ = this.ctorParameters = () => [];
};
CarritoServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], CarritoServiceService);

/***/ }),

/***/ 6138:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);





const httpOption = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
let LoginService = class LoginService {
  get usuarioData() {
    return this.usuarioSubject.value;
  }
  constructor(http) {
    this.http = http;
    this.url = "https://lideart.com.mx/Automatizacion/apis/login.php";
    this.usuarioSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse("" + localStorage.getItem('usuario')));
    this.usuario = this.usuarioSubject.asObservable();
  }
  login(Login) {
    return this.http.post(this.url, Login, httpOption).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      if (res.exito === 1) {
        const usuario = {
          usuario: res.usuario,
          token: res.token
        };
        //console.log(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        this.usuarioSubject.next(usuario);
      }
      return res;
    }));
  }
  logout() {
    localStorage.removeItem('usuario');
    this.usuarioSubject.next(null);
  }
  resetMe(key, token, password, password2) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/updatePassword.php', {
      key,
      token,
      password,
      password2
    });
  }
  requestReset(email) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/passwordReset.php?email=' + email);
  }
  checaUsuario(correo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/checaUsuario.php?email=' + correo);
  }
  EnviaCorreoRecuperaPassword(datosCorreo) {
    return this.http.post('https://lideart.aytcloud.com/inaxapilideart/api/email/enviarRecuperacionLideart', datosCorreo);
  }
  recuperaDatosCliente(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/recuperaDatosCliente.php?datosCorreo=' + datosCorreo);
  }
  traePuntos(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/traePuntos.php?datosCorreo=' + datosCorreo);
  }
  actualizaDatosCliente(datosCorreo) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/actualizaDatosCliente.php', datosCorreo);
  }
  recuperaDatosDireccion(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/recuperaDireccion.php?datosCorreo=' + datosCorreo);
  }
  recuperaOrdenescliente(cliente) {
    return this.http.get('https://lideart.aytcloud.com/inaxLideartExpoConsAPI/api/venta/getEspecificClientOrdenesVenta/' + cliente);
  }
  DetalledeVenta(OV) {
    return this.http.get('https://lideart.aytcloud.com/inaxLideartExpoConsAPI/api/ProductosVenta/getLineasOrdenVenta/' + OV);
  }
  BorrarDatosDir(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/BorrarDatosDir.php?datosCorreo=' + datosCorreo);
  }
  selectDireccionZipCode(accion, postCode) {
    return this.http.post('https://avanceytec.com.mx/Automatizacion/direcciones/address.php', {
      accion,
      postCode
    });
  }
  selectDireccionState(accion, state) {
    return this.http.post('https://avanceytec.com.mx/Automatizacion/direcciones/address.php', {
      accion,
      state
    });
  }
  selectDireccionCity(accion, city) {
    return this.http.post('https://avanceytec.com.mx/Automatizacion/direcciones/address.php', {
      accion,
      city
    });
  }
  enviaDireccion(direccion) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/registraDireccion.php', direccion);
  }
  guardaDatosFactura(direccion) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/guardarDatosFactura.php', direccion);
  }
  consultaDatosFactura(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/consultaDatosFactura.php?email=' + datosCorreo);
  }
  checaCountyID(datosCorreo) {
    return this.http.post('https://avanceytec.com.mx/Automatizacion/apis/checaCountyID.php', datosCorreo);
  }
  revisaDescuento(datosCorreo) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/checaCarrito.php', datosCorreo);
  }
  getReviews() {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/reviews.php');
  }
  registraReviews(datos = []) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/registraReviews.php', datos);
  }
  checaVersion() {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/checaVersion.php');
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], LoginService);

/***/ }),

/***/ 35253:
/*!**********************************************!*\
  !*** ./src/app/services/registro.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroService: () => (/* binding */ RegistroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);



const httpOption = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
let RegistroService = class RegistroService {
  constructor(http) {
    this.http = http;
  }
  registroUsuario(registro) {
    console.log(registro);
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/registro.php', registro);
  }
  registroDynamics(datosUsuario) {
    // return this.http.post('https://lideart.aytcloud.com/inaxapiv2/api/cliente/addClientdynamics365',datosUsuario,httpOption);
    return this.http.post('https://lideart.aytcloud.com/inaxapidev/api/cliente/addClientdynamics365', datosUsuario, httpOption);
  }
  actualizaCustomerID(datos) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/actualizaCustomerID.php', datos);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
RegistroService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], RegistroService);

/***/ }),

/***/ 69919:
/*!******************************************************!*\
  !*** ./src/app/services/serviciowishlist.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiciowishlistService: () => (/* binding */ ServiciowishlistService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);



const httpOption = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const headers = new Headers();
let ServiciowishlistService = class ServiciowishlistService {
  constructor(http) {
    this.http = http;
  }
  sendWishlist(datosWishlist) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/registraWishlist.php', datosWishlist);
  }
  recuperaWishlist(datosCorreo) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/getWishlist.php?datosCorreo=' + datosCorreo);
  }
  eliminarWishlist(datosWishlist) {
    return this.http.post('https://lideart.com.mx/Automatizacion/apis/eliminaWishlist.php', datosWishlist);
  }
  recuperaBlog() {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/blog.php');
  }
  recuperaArticulo(id_post) {
    return this.http.get('https://lideart.com.mx/Automatizacion/apis/articulo-blog.php?id_post=' + id_post);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
ServiciowishlistService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ServiciowishlistService);

/***/ }),

/***/ 63961:
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);



let DataService = class DataService {
  constructor() {
    this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(1);
    this.data$ = this.dataSubject.asObservable();
  }
  setData(data) {
    this.dataSubject.next(data);
  }
};
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], DataService);

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 94737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		87512,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		56470,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		85690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		68508,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		3438,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		19119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		52319,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		44848,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		94752,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		9870,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		85892,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		9118,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9538,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		24969,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		21835,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		76719,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		3121,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3025,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		33914,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		13761,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		86138,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		12063,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		84950,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		69707,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60234,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		37209,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		93068,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		99215,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		35635,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		1497,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		15922,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		16199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		53549,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		45966,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		93187,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		59092,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		17600,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		49870,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		86152,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81657,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		88394,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44574,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		33514,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7502,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		97832,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9805,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		57393,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		370,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 79595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 31386);
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
  font-family: "swiper-icons";
  src: url("data:application/font-woff;charset=utf-8;base64, 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") format("woff");
  font-weight: 400;
  font-style: normal;
}
:root {
  --swiper-theme-color: #007aff;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
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

.swiper-android .swiper-slide,
.swiper-wrapper {
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

/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
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

/* 3D Effects */
.swiper-3d, .swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper,
.swiper-3d .swiper-slide,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
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

/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
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
  width: var(--swiper-centered-offset-after);
}
.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  height: var(--swiper-centered-offset-after);
}
.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}

.swiper-button-prev,
.swiper-button-next {
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
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 10px;
  right: auto;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: "prev";
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: "next";
}

.swiper-button-lock {
  display: none;
}

:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination, .swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}

/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 10px;
  left: 0;
  width: 100%;
}

/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}

.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: 50%;
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  appearance: none;
}

.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}

.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}

.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: 10px;
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform, 200ms top;
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms left;
}

.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform, 200ms right;
}

/* Progress */
.swiper-pagination-progressbar {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-horizontal, .swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: 4px;
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar, .swiper-pagination-progressbar.swiper-pagination-vertical, .swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite, .swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: 4px;
  height: 100%;
  left: 0;
  top: 0;
}

.swiper-pagination-lock {
  display: none;
}

.line-filter {
  text-align: center;
  line-height: 20px;
  background: #70c2d1;
  padding: 0;
  margin: 0;
}

.name-client {
  font-size: 0.9em;
  max-width: 12em;
  padding: 0;
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

menu-text {
  font-size: 2em;
}

ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon h6 {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

.menuLogo {
  padding: 1em;
}

h6 {
  --color: var(--ion-text-color);
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

.gorgori {
  display: none;
}

.chat-cont {
  position: fixed;
  bottom: 2em;
  right: 3em;
  width: 4em;
  height: 4em;
  background-color: #ff5c6a;
  border-radius: 50%;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.chat-cont i {
  font-size: 1.8em;
}

.search_toggle {
  width: 100%;
  height: 100%;
}
.search_toggle #axbody {
  max-height: none !important;
  min-height: 100% !important;
  list-style: none;
  overflow-y: scroll !important;
  width: 100% !important;
  height: 20em;
  padding-inline-start: 0px;
  padding: 0em 1em;
  /*.ui-corner-all:last-child{
    border-bottom: none;
    margin-bottom: none;
  }*/
}
.search_toggle #axbody .ui-corner-all {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  border-bottom: 1px solid #00d7ff;
  border-bottom-style: dashed;
  padding-bottom: 0.75em;
  margin-bottom: 1em;
}
.search_toggle #axbody .search_lewa {
  display: block;
  width: 5em;
  height: 5em;
  border: 1px solid #00d3ff;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
.search_toggle #axbody .search_lewa img {
  width: 100%;
  height: 100%;
}
.search_toggle #axbody .search_prawa {
  width: calc(100% - 6em);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.36em;
}
.search_toggle #axbody .search_prawa .search_marka {
  color: #fff;
  font-weight: 100;
  font-size: 0.7em;
}
.search_toggle #axbody .search_prawa .search_nazwa {
  font-size: 0.85em;
  color: #fff;
  font-weight: 400;
}
.search_toggle #axbody .search_prawa .search_cena {
  font-size: 0.9em;
  color: #fff;
  font-weight: 100;
}
.search_toggle ul::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle ul::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle #search_plugin {
  width: 100%;
  height: 100%;
}
.search_toggle #search_plugin form {
  width: 100%;
  height: 100%;
}
.search_toggle #search_plugin form .buscainp {
  width: 100%;
  height: 100%;
  padding: 0em 1em;
  border-radius: 0em 3em 3em 0em;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 0.9em;
}
.search_toggle #search_plugin form .buscainp:focus {
  outline: none;
}
.search_toggle #search_plugin form .buscainp::placeholder {
  color: rgba(255, 255, 255, 0.671);
  font-size: 0.8em;
}
.search_toggle .conten-abs {
  position: absolute;
  min-width: 40em;
  height: auto;
  top: 3em;
  right: 0;
  z-index: 10;
  background-color: #00a3c7;
  padding: 1em;
  border-radius: 2em;
}
.search_toggle .conten-abs .cuerpoPistas .txt-decir {
  margin: 0;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: 100;
  cursor: pointer;
}
.search_toggle .conten-abs .cuerpoPistas .ud1 {
  font-size: 0.6em;
  margin-left: 1em;
  color: #fff;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas {
  width: 100%;
  max-height: 8em;
  background-color: #0096b5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  padding: 1em;
  overflow-y: scroll;
  border-radius: 2em 0em 0em 2em;
  transition: 0.2s all ease-in-out;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas div {
  width: -moz-fit-content;
  width: fit-content;
  display: inline-block;
  padding: 5px 10px;
  color: #00d9ff;
  border: 1px dashed #00d3ff;
  margin: 3px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.6s all ease-in-out;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas div:hover {
  color: #ffffff;
  border: 1px dashed #ffffff;
}
.search_toggle .conten-abs .dowi {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.search_toggle .conten-abs .dowi .lefti {
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3em;
}
.search_toggle .conten-abs .dowi .lefti .card {
  width: 100%;
  height: 3em;
  background-color: #0096b2;
  padding: 0.1em;
  border-radius: 0.5em;
  transition: 0.2s all ease-in-out;
  overflow: hidden;
}
.search_toggle .conten-abs .dowi .lefti .card .lista {
  overflow-y: scroll;
  width: 100%;
  height: 9em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista div {
  position: relative;
  border-bottom: 1px solid #ffffff !important;
  width: 100%;
  height: 2.5em;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 0.9em;
  font-weight: 100;
}
.search_toggle .conten-abs .dowi .lefti .card .lista div input[type=checkbox] {
  cursor: pointer;
  width: 1.2em;
  height: 1.2em;
}
.search_toggle .conten-abs .dowi .lefti .card .taitl-filt {
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-size: 0.9em;
  font-weight: 100;
}
.search_toggle .conten-abs .dowi .lefti .card .taitl-filt i {
  font-size: 0.7em;
  color: #fff;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree {
  overflow-y: unset !important;
  padding: 0em 0em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  height: auto;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less {
  height: auto !important;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less div {
  border-bottom: none;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less .w-100 {
  overflow-y: unset !important;
}
.search_toggle .conten-abs .dowi .rigti {
  width: 60%;
  height: auto;
  height: 25em;
  background-color: #0096b3;
  border-radius: 2em;
}
.search_toggle .conten-abs .dowi .rigti .result-taitl {
  color: #fff;
  font-size: 1em;
  font-weight: 100;
}

@media (max-width: 992px) {
  .gorgori {
    display: block;
  }
  .desk-header {
    display: none;
  }
  .footer-desk {
    display: none;
  }
  .search_toggle .conten-abs {
    min-width: 0em;
    width: 100%;
    top: 5.8em;
    border-radius: 0em;
    height: 20em;
    overflow-y: scroll;
  }
  .search_toggle .conten-abs .dowi {
    flex-direction: column;
  }
  .search_toggle .conten-abs .dowi .lefti {
    width: 100%;
  }
  .search_toggle .conten-abs .dowi .rigti {
    width: 100%;
    height: 20em;
    overflow: hidden;
  }
  .search_toggle #search_plugin form .buscainp {
    background-color: #17c2fc;
    border-radius: 0em 0em 0em 0em;
    height: 2.5em;
  }
}
@media (min-width: 992px) {
  .asideMenu {
    display: none !important;
    position: relative !important;
    z-index: -1 !important;
    visibility: hidden !important;
  }
}`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper.scss","webpack://./src/app/app.component.scss","webpack://./node_modules/swiper/modules/navigation/navigation.scss","webpack://./node_modules/swiper/modules/pagination/pagination.scss"],"names":[],"mappings":"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","sourcesContent":["/**\n * Swiper 8.4.7\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: January 30, 2023\n */\n\n@import 'swiper-vars.scss';\n@at-root {\n  @font-face {\n    font-family: 'swiper-icons';\n    src: url('data:application/font-woff;charset=utf-8;base64, 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')\n      format('woff');\n    font-weight: 400;\n    font-style: normal;\n  }\n}\n@at-root {\n  :root {\n    --swiper-theme-color: #{$themeColor};\n  }\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-pointer-events {\n  touch-action: pan-y;\n  &.swiper-vertical {\n    touch-action: pan-x;\n  }\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight {\n  &,\n  .swiper-slide {\n    height: auto;\n  }\n\n  .swiper-wrapper {\n    align-items: flex-start;\n    transition-property: transform, height;\n  }\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d {\n  &,\n  &.swiper-css-mode .swiper-wrapper {\n    perspective: 1200px;\n  }\n  .swiper-wrapper,\n  .swiper-slide,\n  .swiper-slide-shadow,\n  .swiper-slide-shadow-left,\n  .swiper-slide-shadow-right,\n  .swiper-slide-shadow-top,\n  .swiper-slide-shadow-bottom,\n  .swiper-cube-shadow {\n    transform-style: preserve-3d;\n  }\n  .swiper-slide-shadow,\n  .swiper-slide-shadow-left,\n  .swiper-slide-shadow-right,\n  .swiper-slide-shadow-top,\n  .swiper-slide-shadow-bottom {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    z-index: 10;\n  }\n  .swiper-slide-shadow {\n    background: rgba(0, 0, 0, 0.15);\n  }\n  .swiper-slide-shadow-left {\n    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-right {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-top {\n    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n  .swiper-slide-shadow-bottom {\n    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  }\n}\n\n/* CSS Mode */\n.swiper-css-mode {\n  > .swiper-wrapper {\n    overflow: auto;\n    scrollbar-width: none; /* For Firefox */\n    -ms-overflow-style: none; /* For Internet Explorer and Edge */\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: start start;\n  }\n}\n.swiper-horizontal.swiper-css-mode {\n  > .swiper-wrapper {\n    scroll-snap-type: x mandatory;\n  }\n}\n.swiper-vertical.swiper-css-mode {\n  > .swiper-wrapper {\n    scroll-snap-type: y mandatory;\n  }\n}\n.swiper-centered {\n  > .swiper-wrapper::before {\n    content: '';\n    flex-shrink: 0;\n    order: 9999;\n  }\n  &.swiper-horizontal {\n    > .swiper-wrapper > .swiper-slide:first-child {\n      margin-inline-start: var(--swiper-centered-offset-before);\n    }\n    > .swiper-wrapper::before {\n      height: 100%;\n      width: var(--swiper-centered-offset-after);\n    }\n  }\n  &.swiper-vertical {\n    > .swiper-wrapper > .swiper-slide:first-child {\n      margin-block-start: var(--swiper-centered-offset-before);\n    }\n    > .swiper-wrapper::before {\n      width: 100%;\n      height: var(--swiper-centered-offset-after);\n    }\n  }\n\n  > .swiper-wrapper > .swiper-slide {\n    scroll-snap-align: center center;\n    scroll-snap-stop: always;\n  }\n}\n\n\n\n","@import 'swiper/scss';\n@import 'swiper/scss/navigation';\n@import 'swiper/scss/pagination';\n\n.line-filter {\n  text-align: center;\n  line-height: 20px;\n  background: #70c2d1;\n  padding: 0;\n  margin: 0;\n}\n\n.name-client{\n  font-size: 0.9em;\n  max-width: 12em;\n  padding: 0;\n}\n\nion-searchbar {\n  --icon-color: #1ca3c9;\n  width: 95%;\n  margin-left: 10px;\n}\n\n.search-container {\n  width: 90vw;\n  right: 5vw;\n  height: auto;\n  max-height: 50vh;\n  overflow-y: scroll;\n  position: absolute;\n}\n\nmenu-text{\n  font-size: 2em;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n\n  margin-bottom: 18px;\n\n  color: #757575;\n\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon h6 {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.menuLogo {\n  padding: 1em;\n}\n\nh6 {\n  --color: var(--ion-text-color);\n}\n\n.loader {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  position: fixed;\n  top: calc(0%);\n  left: calc(0%);\n  background-color: rgb(255, 255, 255);\n  opacity: 0.9;\n\n  img{\n    width: 200px;\n    height: auto;\n\n  }\n\n}\n\n.gorgori{ // ion-header\n  display: none;\n}\n\n.chat-cont{\n  position: fixed;\n  bottom: 2em;\n  right: 3em;\n  width: 4em;\n  height: 4em;\n  background-color: #ff5c6a;\n  border-radius: 50%;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  i{\n    font-size: 1.8em;\n  }\n}\n\n.search_toggle{\n  width: 100%;\n  height: 100%;\n\n  #axbody{\n    max-height: none!important;\n    min-height: 100% !important;\n    list-style: none;\n    overflow-y: scroll!important;\n    width: 100%!important;\n    height: 20em;\n    padding-inline-start: 0px;\n    padding: 0em 1em;\n\n    .ui-corner-all{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      gap: 1em;\n      border-bottom: 1px solid #00d7ff;\n      border-bottom-style: dashed;\n      padding-bottom: 0.75em;\n      margin-bottom: 1em;\n    }\n\n    /*.ui-corner-all:last-child{\n      border-bottom: none;\n      margin-bottom: none;\n    }*/\n\n    .search_lewa{\n      display: block;\n      width: 5em;\n      height: 5em;\n      border: 1px solid #00d3ff;\n      border-radius: 50%;\n      background-position: center;\n      background-size: cover;\n      overflow: hidden;\n\n      img{\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .search_prawa{\n      width: calc(100% - 6em);\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 0.36em;\n\n      .search_marka{\n        color: #fff;\n        font-weight: 100;\n        font-size: .7em;\n      }\n\n      .search_nazwa{\n        font-size: .85em;\n        color: #fff;\n        font-weight: 400;\n      }\n\n      .search_cena{\n        font-size: .9em;\n        color: #fff;\n        font-weight: 100;\n      }\n    }\n  }\n\n  ul::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n  }\n    \n  ul::-webkit-scrollbar-thumb {\n    background-color: #ffffffb7;\n    //border-radius: 1vh;\n    width: 0.25em;\n  }\n\n  #search_plugin{\n    width: 100%;\n    height: 100%;\n\n    form{\n      width: 100%;\n      height: 100%;\n\n      .buscainp{\n        width: 100%;\n        height: 100%;\n        padding: 0em 1em;\n        border-radius: 0em 3em 3em 0em;\n        background-color: transparent;\n        border: none;\n        color: #fff;\n        font-size: .9em;\n      }\n\n      .buscainp:focus{\n        outline: none;\n      }\n\n      .buscainp::placeholder{\n        color: rgba(255, 255, 255, 0.671);\n        font-size: .8em;\n      }\n    }\n  }\n\n  .conten-abs{\n    position: absolute;\n    min-width: 40em;\n    height: auto;\n    top: 3em;\n    right: 0;\n    z-index: 10;\n    background-color: #00a3c7;\n    padding: 1em;\n    border-radius: 2em;\n\n    .cuerpoPistas{\n\n      .txt-decir{\n        margin: 0;\n        margin-bottom: 0.5em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.4em;\n        font-weight: 100;\n        cursor: pointer;\n      }\n\n      .ud1{\n        font-size: .6em;\n        margin-left: 1em;\n        color: #fff;\n      }\n\n      .lasPistas{\n        width: 100%;\n        max-height: 8em;\n        background-color: #0096b5;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: .5em;\n        padding: 1em;\n        overflow-y: scroll;\n        border-radius: 2em 0em 0em 2em;\n        transition: .2s all ease-in-out;\n      }\n\n      .lasPistas::-webkit-scrollbar {\n        width: .35em;\n        background-color: transparent;\n        height: .7em;\n      }\n        \n      .lasPistas::-webkit-scrollbar-thumb {\n        background-color: #ffffffb7;\n        //border-radius: 1vh;\n        width: 0.25em;\n      }\n\n      .lasPistas div{\n        width: fit-content;\n        display: inline-block;\n        padding: 5px 10px;\n        color: #00d9ff;\n        border: 1px dashed #00d3ff;\n        margin: 3px;\n        border-radius: 3px;\n        cursor: pointer;\n        transition: .6s all ease-in-out;\n      }\n\n      .lasPistas div:hover{\n        color: #ffffff;\n        border: 1px dashed #ffffff;\n      }\n    }\n\n    .dowi{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-start;\n      gap: 1em;\n\n      .lefti{\n        width: 40%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        gap: 0.3em;\n\n        .card{\n          width: 100%;\n          height: 3em;\n          background-color: #0096b2;\n          padding: 0.1em;\n          border-radius: 0.5em;\n          transition: .2s all ease-in-out;\n          overflow: hidden;\n\n          .lista{\n            overflow-y: scroll;\n            width: 100%;\n            height: 9em;\n          }\n\n          .lista::-webkit-scrollbar {\n            width: .35em;\n            background-color: transparent;\n            height: .7em;\n          }\n            \n          .lista::-webkit-scrollbar-thumb {\n            background-color: #ffffffb7;\n            //border-radius: 1vh;\n            width: 0.25em;\n          }\n\n          .lista div{\n            position: relative;\n            border-bottom: 1px solid #ffffff!important;\n            width: 100%;\n            height: 2.5em;\n            display: flex!important;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            color: #fff;\n            font-size: .9em;\n            font-weight: 100;\n\n            input[type='checkbox']{\n              cursor: pointer;\n              width: 1.2em;\n              height: 1.2em;\n            }\n          }\n\n          .taitl-filt{\n            text-align: center;\n            cursor: pointer;\n            color: #fff;\n            font-size: .9em;\n            font-weight: 100;\n\n            i{\n              font-size: .7em;\n              color: #fff;\n            }\n          }\n\n          .category-tree{\n            overflow-y: unset!important;\n            padding: 0em 0em;\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            height: auto;\n\n            .less{\n              height: auto!important;\n\n              div{\n                border-bottom: none;\n              }\n\n              .w-100{\n                overflow-y: unset!important;\n              }\n            }\n          }\n        }\n      }\n\n      .rigti{\n        width: 60%;\n        height: auto;\n        height: 25em;\n        background-color: #0096b3;\n        border-radius: 2em;\n\n        .result-taitl{\n          color: #fff;\n          font-size: 1em;\n          font-weight: 100;\n        }\n      }\n    }\n  }\n}\n\n@media(max-width: 992px){\n  .gorgori{\n    display: block;\n  }\n\n  .desk-header{\n    display: none;\n  }\n\n  .footer-desk{\n    display: none;\n  }\n\n  .search_toggle{\n    .conten-abs{\n      min-width: 0em;\n      width: 100%;\n      top: 5.8em;\n      border-radius: 0em;\n      height: 20em;\n      overflow-y: scroll;\n\n      .dowi{\n        flex-direction: column;\n\n        .lefti{\n          width: 100%;\n        }\n\n        .rigti{\n          width: 100%;\n          height: 20em;\n          overflow: hidden;\n        }\n      }\n    }\n\n    #search_plugin{\n      form{\n        .buscainp{\n          background-color: #17c2fc;\n          border-radius: 0em 0em 0em 0em;\n          height: 2.5em;\n        }\n      }\n    }\n  }\n}\n\n@media(min-width: 992px){\n  .asideMenu{\n    display: none!important;\n    position: relative!important;\n    z-index: -1!important;\n    visibility: hidden!important;\n  }\n}","@import '../../swiper-vars.scss';\n@at-root {\n  :root {\n    --swiper-navigation-size: 44px;\n    /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n  }\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n  &.swiper-button-disabled {\n    opacity: 0.35;\n    cursor: auto;\n    pointer-events: none;\n  }\n  &.swiper-button-hidden {\n    opacity: 0;\n    cursor: auto;\n    pointer-events: none;\n  }\n  .swiper-navigation-disabled & {\n    display: none !important;\n  }\n  &:after {\n    font-family: swiper-icons;\n    font-size: var(--swiper-navigation-size);\n    text-transform: none !important;\n    letter-spacing: 0;\n    font-variant: initial;\n    line-height: 1;\n  }\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  &:after {\n    content: 'prev';\n  }\n  left: 10px;\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  &:after {\n    content: 'next';\n  }\n  right: 10px;\n  left: auto;\n}\n\n.swiper-button-lock {\n  display: none;\n}\n","@import '../../swiper-vars.scss';\n@at-root {\n  :root {\n    /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n  }\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n  &.swiper-pagination-hidden {\n    opacity: 0;\n  }\n  .swiper-pagination-disabled > &,\n  &.swiper-pagination-disabled {\n    display: none !important;\n  }\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n  .swiper-pagination-bullet {\n    transform: scale(0.33);\n    position: relative;\n  }\n  .swiper-pagination-bullet-active {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullet-active-main {\n    transform: scale(1);\n  }\n  .swiper-pagination-bullet-active-prev {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullet-active-prev-prev {\n    transform: scale(0.33);\n  }\n  .swiper-pagination-bullet-active-next {\n    transform: scale(0.66);\n  }\n  .swiper-pagination-bullet-active-next-next {\n    transform: scale(0.33);\n  }\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: 50%;\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n  @at-root button#{&} {\n    border: none;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    appearance: none;\n  }\n  .swiper-pagination-clickable & {\n    cursor: pointer;\n  }\n\n  &:only-child {\n    display: none !important;\n  }\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n  .swiper-pagination-bullet {\n    margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n    display: block;\n  }\n  &.swiper-pagination-bullets-dynamic {\n    top: 50%;\n    transform: translateY(-50%);\n    width: 8px;\n    .swiper-pagination-bullet {\n      display: inline-block;\n      transition: 200ms transform, 200ms top;\n    }\n  }\n}\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-horizontal.swiper-pagination-bullets {\n  .swiper-pagination-bullet {\n    margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n  }\n  &.swiper-pagination-bullets-dynamic {\n    left: 50%;\n    transform: translateX(-50%);\n    white-space: nowrap;\n    .swiper-pagination-bullet {\n      transition: 200ms transform, 200ms left;\n    }\n  }\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n  .swiper-pagination-progressbar-fill {\n    background: var(--swiper-pagination-color, var(--swiper-theme-color));\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale(0);\n    transform-origin: left top;\n  }\n  .swiper-rtl & .swiper-pagination-progressbar-fill {\n    transform-origin: right top;\n  }\n  .swiper-horizontal > &,\n  &.swiper-pagination-horizontal,\n  .swiper-vertical > &.swiper-pagination-progressbar-opposite,\n  &.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n    width: 100%;\n    height: 4px;\n    left: 0;\n    top: 0;\n  }\n  .swiper-vertical > &,\n  &.swiper-pagination-vertical,\n  .swiper-horizontal > &.swiper-pagination-progressbar-opposite,\n  &.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n    width: 4px;\n    height: 100%;\n    left: 0;\n    top: 0;\n  }\n}\n.swiper-pagination-lock {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93069:
/*!******************************************************************************!*\
  !*** ./src/app/components/desk-footer/desk-footer.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-desk {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.footer-desk .reds-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #259bbc;
  border-top: 8px solid #eeabb2;
  padding: 1em 0em;
}
.footer-desk .reds-cont .cont-rs {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
.footer-desk .reds-cont .cont-rs .redin {
  width: 2.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.7s all ease-in-out;
}
.footer-desk .reds-cont .cont-rs .redin i {
  font-size: 1.1em;
  transition: 0.7s all ease-in-out;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(1) {
  box-shadow: rgba(0, 165, 200, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(1) i {
  color: rgb(130, 192, 205);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(1):hover {
  background-color: rgb(0, 165, 200);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(1):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(2) {
  box-shadow: rgba(101, 191, 205, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(2) i {
  color: rgb(101, 191, 205);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(2):hover {
  background-color: rgb(101, 191, 205);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(2):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(3) {
  box-shadow: rgba(140, 205, 205, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(3) i {
  color: rgb(140, 205, 205);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(3):hover {
  background-color: rgb(140, 205, 205);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(3):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(4) {
  box-shadow: rgba(115, 183, 224, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(4) i {
  color: rgb(115, 183, 224);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(4):hover {
  background-color: rgb(115, 183, 224);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(4):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(5) {
  box-shadow: rgba(243, 172, 177, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(5) i {
  color: rgb(243, 172, 177);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(5):hover {
  background-color: rgb(243, 172, 177);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(5):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(6) {
  box-shadow: rgba(243, 165, 141, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(6) i {
  color: rgb(243, 165, 141);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(6):hover {
  background-color: rgb(243, 165, 141);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(6):hover i {
  color: #fff;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(7) {
  box-shadow: rgba(182, 206, 220, 0.56) 0px 0px 12px;
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(7) i {
  color: rgb(182, 206, 220);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(7):hover {
  background-color: rgb(182, 206, 220);
}
.footer-desk .reds-cont .cont-rs .redin:nth-child(7):hover i {
  color: #fff;
}
.footer-desk .rest-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2em 0em;
  gap: 1.5em;
}
.footer-desk .rest-cont .warn {
  color: #000;
  font-size: 0.9em;
}
.footer-desk .rest-cont .col-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1em;
  padding: 0em 6em;
}
.footer-desk .rest-cont .col-cont .colt {
  width: 33.33%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em;
}
.footer-desk .rest-cont .col-cont .colt .titl {
  color: #000;
  font-size: 0.9em;
}
.footer-desk .rest-cont .col-cont .colt .linka {
  color: #666;
  font-size: 0.8em;
  text-decoration: none;
  transition: 0.3s all ease-in-out;
}
.footer-desk .rest-cont .col-cont .colt .linka:hover {
  color: #000;
  padding-left: 0.4em;
}`, "",{"version":3,"sources":["webpack://./src/app/components/desk-footer/desk-footer.component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;EACA,WAAA;EACA,sBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,6BAAA;EACA,gBAAA;AACN;AACM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;AACR;AACQ;EACE,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,gCAAA;AACV;AACU;EACE,gBAAA;EACA,gCAAA;AACZ;AAGQ;EACE,gDAAA;AADV;AAGU;EACE,yBAAA;AADZ;AAKQ;EACE,kCAAA;AAHV;AAKU;EACE,WAAA;AAHZ;AAOQ;EACE,kDAAA;AALV;AAOU;EACE,yBAAA;AALZ;AASQ;EACE,oCAAA;AAPV;AASU;EACE,WAAA;AAPZ;AAWQ;EACE,kDAAA;AATV;AAWU;EACE,yBAAA;AATZ;AAaQ;EACE,oCAAA;AAXV;AAaU;EACE,WAAA;AAXZ;AAeQ;EACE,kDAAA;AAbV;AAeU;EACE,yBAAA;AAbZ;AAiBQ;EACE,oCAAA;AAfV;AAiBU;EACE,WAAA;AAfZ;AAmBQ;EACE,kDAAA;AAjBV;AAmBU;EACE,yBAAA;AAjBZ;AAqBQ;EACE,oCAAA;AAnBV;AAqBU;EACE,WAAA;AAnBZ;AAuBQ;EACE,kDAAA;AArBV;AAuBU;EACE,yBAAA;AArBZ;AAyBQ;EACE,oCAAA;AAvBV;AAyBU;EACE,WAAA;AAvBZ;AA2BQ;EACE,kDAAA;AAzBV;AA2BU;EACE,yBAAA;AAzBZ;AA6BQ;EACE,oCAAA;AA3BV;AA6BU;EACE,WAAA;AA3BZ;AAiCI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,UAAA;AA/BN;AAiCM;EACE,WAAA;EACA,gBAAA;AA/BR;AAkCM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;EACA,QAAA;EACA,gBAAA;AAhCR;AAkCQ;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;AAhCV;AAkCU;EACE,WAAA;EACA,gBAAA;AAhCZ;AAmCU;EACE,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,gCAAA;AAjCZ;AAoCU;EACE,WAAA;EACA,mBAAA;AAlCZ","sourcesContent":[".footer-desk{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    position: relative;\n    z-index: 10;\n    background-color: #fff;\n  \n    .reds-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-bottom: 5px solid #259bbc;\n      border-top: 8px solid #eeabb2;\n      padding: 1em 0em;\n  \n      .cont-rs{\n        width: auto;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        gap: .5em;\n  \n        .redin{\n          width: 2.5em;\n          height: 2.5em;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          border-radius: 50%;\n          text-decoration: none;\n          transition: .7s all ease-in-out;\n  \n          i{\n            font-size: 1.1em;\n            transition: .7s all ease-in-out;\n          }\n        }\n  \n        .redin:nth-child(1){\n          box-shadow: rgb(0 165 200 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(130 192 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(1):hover{\n          background-color: rgb(0 165 200 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(2){\n          box-shadow: rgb(101 191 205 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(101 191 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(2):hover{\n          background-color: rgb(101 191 205 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(3){\n          box-shadow: rgb(140 205 205 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(140 205 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(3):hover{\n          background-color: rgb(140 205 205 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(4){\n          box-shadow: rgb(115 183 224 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(115 183 224 / 100%);\n          }\n        }\n  \n        .redin:nth-child(4):hover{\n          background-color: rgb(115 183 224 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(5){\n          box-shadow: rgb(243 172 177 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(243 172 177 / 100%);\n          }\n        }\n  \n        .redin:nth-child(5):hover{\n          background-color: rgb(243 172 177 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(6){\n          box-shadow: rgb(243 165 141 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(243 165 141 / 100%);\n          }\n        }\n  \n        .redin:nth-child(6):hover{\n          background-color: rgb(243 165 141 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(7){\n          box-shadow: rgb(182 206 220 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(182 206 220 / 100%);\n          }\n        }\n  \n        .redin:nth-child(7):hover{\n          background-color: rgb(182 206 220 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n      }\n    }\n  \n    .rest-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      padding: 2em 0em;\n      gap: 1.5em;\n  \n      .warn{\n        color: #000;\n        font-size: .9em;\n      }\n  \n      .col-cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: flex-start;\n        gap: 1em;\n        padding: 0em 6em;\n  \n        .colt{\n          width: 33.33%;\n          height: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: center;\n          gap: .3em;\n  \n          .titl{\n            color: #000;\n            font-size: .9em;\n          }\n  \n          .linka{\n            color: #666;\n            font-size: .8em;\n            text-decoration: none;\n            transition: .3s all ease-in-out;\n          }\n  \n          .linka:hover{\n            color: #000;\n            padding-left: .4em;\n          }\n        }\n      }\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 44452:
/*!******************************************************************************!*\
  !*** ./src/app/components/desk-header/desk-header.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.desk-header {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #fff;
  color: #fff;
}
.desk-header .pagos-cont {
  width: 100%;
  height: 6em;
  background-color: #ecd6d4;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.desk-header .pagos-cont .first-cont {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.desk-header .pagos-cont .first-cont .txt-cont {
  width: 20em;
  height: 3.5em;
  background-color: #ffb2b6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  padding-left: 3.5em;
}
.desk-header .pagos-cont .first-cont .txt-cont .txt:nth-child(1) {
  font-size: 1.1em;
  font-weight: 100;
}
.desk-header .pagos-cont .first-cont .txt-cont .txt:nth-child(2) {
  font-size: 1.1em;
  font-weight: 900;
}
.desk-header .pagos-cont .first-cont .txt-cont .trokita {
  position: absolute;
  background-color: #ffb2b6;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  left: -0.2em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.desk-header .pagos-cont .second-cont {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
}
.desk-header .pagos-cont .second-cont .prin {
  background-color: #ffb2b6;
  font-size: 1em;
  font-weight: 600;
  padding: 0.2em 0.75em;
  border-radius: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.desk-header .pagos-cont .second-cont .secon {
  font-size: 1em;
  font-weight: 100;
  width: 19em;
  text-align: center;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1411764706);
}
.desk-header .pagos-cont .third-cont {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4em;
}
.desk-header .pagos-cont .third-cont .prin {
  background-color: #ffb2b6;
  font-size: 1em;
  font-weight: 600;
  padding: 0.2em 0.75em;
  border-radius: 2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.desk-header .pagos-cont .third-cont .contcarmov {
  width: 12em;
  height: 3.5em;
  position: relative;
  overflow: hidden;
}
.desk-header .pagos-cont .third-cont .contcarmov .mov {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4em;
  position: absolute;
  left: 14em;
  animation: mov 15s linear infinite;
}
.desk-header .pagos-cont .third-cont .contcarmov .mov .metodo-cont {
  width: 10em;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
.desk-header .pagos-cont .third-cont .contcarmov .mov .metodo-cont .grap {
  font-size: 2em;
}
.desk-header .pagos-cont .third-cont .contcarmov .mov .metodo-cont .txt {
  font-size: 0.6em;
  text-align: center;
  font-weight: 100;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5098039216);
}
@keyframes mov {
  0% {
    left: 12em;
  }
  100% {
    left: -55em;
  }
}
.desk-header .up {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em 1em;
  border-bottom: 1px solid #1ca3c9;
  border-bottom-style: dashed;
  background-color: #fff;
  position: relative;
}
.desk-header .up .loguin {
  width: 9em;
  height: auto;
}
.desk-header .up .nav-opcs-cont {
  width: 50%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  row-gap: 0.4em;
}
.desk-header .up .nav-opcs-cont .opi {
  margin-right: 1em;
  text-decoration: none;
  font-weight: 100;
  font-size: 0.9em;
  color: #777;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.desk-header .up .nav-opcs-cont .opi::before {
  content: "";
  width: 110%;
  height: 2em;
  background-color: #00a8cc;
  position: absolute;
  top: -1.2em;
  visibility: hidden;
  opacity: 0;
  left: -5%;
  z-index: -1;
  transition: 0.1s all ease-in-out;
  border-radius: 0.1em;
}
.desk-header .up .nav-opcs-cont .opi:hover {
  color: #fff;
}
.desk-header .up .nav-opcs-cont .opi:hover::before {
  top: -0.5em;
  visibility: visible;
  opacity: 1;
}
.desk-header .up .nav-opcs-cont .opi:last-child {
  margin-right: 0em;
}
.desk-header .up .nav-opcs-cont .tagin-mesrosa {
  background-color: #fdb6ff;
  border-radius: 2em;
  padding: 0.2em 1em;
  color: #fff;
}
.desk-header .up .nav-opcs-cont .tagin-mesrosa::before {
  content: "";
  display: none;
}
.desk-header .up .nav-opcs-cont .tagin-halloween {
  background-color: #e16216;
  border-radius: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2em 1em;
  gap: 0.5em;
  color: #fff;
}
.desk-header .up .nav-opcs-cont .tagin-halloween .grap {
  font-size: 1em;
}
.desk-header .up .nav-opcs-cont .tagin-halloween::before {
  content: "";
  display: none;
}
.desk-header .up .nav-cont {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.3em;
  position: relative;
  padding-left: 9em;
  display: none;
}
.desk-header .up .nav-cont .tagin-conts {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5em;
}
.desk-header .up .nav-cont .tagin-conts .tagin-mesrosa {
  background-color: #fdb6ff;
  border-radius: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2em 1em;
  gap: 0.5em;
  cursor: pointer;
}
.desk-header .up .nav-cont .tagin-conts .tagin-mesrosa .grap {
  font-size: 1em;
}
.desk-header .up .nav-cont .tagin-conts .tagin-mesrosa .tag-txt {
  font-size: 0.9em;
}
.desk-header .up .nav-cont .tagin-conts .tagin-halloween {
  background-color: #e16216;
  border-radius: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.2em 1em;
  gap: 0.5em;
  cursor: pointer;
}
.desk-header .up .nav-cont .tagin-conts .tagin-halloween .grap {
  font-size: 1em;
}
.desk-header .up .nav-cont .tagin-conts .tagin-halloween .tag-txt {
  font-size: 0.9em;
}
.desk-header .up .nav-cont .btn-nav {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 18em;
  height: 2.5em;
  overflow: hidden;
  border-radius: 2em;
  box-shadow: 0px 0px 15px 1px rgba(0, 167, 204, 0.1764705882);
}
.desk-header .up .nav-cont .btn-nav .cros1 {
  background-color: #00a8cc;
  width: 2em;
  height: 19em;
  transform: rotate(84deg);
  animation: rot1 3s linear infinite;
}
@keyframes rot1 {
  from {
    transform: rotate(84deg);
  }
  to {
    transform: rotate(444deg);
  }
}
.desk-header .up .nav-cont .btn-nav .blankin-cont {
  background-color: #fff;
  width: 17.8em;
  height: 2.4em;
  border-radius: 4em;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 2em;
  transition: 0.7s all ease-in-out;
}
.desk-header .up .nav-cont .btn-nav .blankin-cont .blankin-txt {
  color: #00a8cc;
  transition: 0.7s all ease-in-out;
}
.desk-header .up .nav-cont .btn-nav .blankin-cont .blankin-icon {
  color: #00a8cc;
  transition: 0.7s all ease-in-out;
}
.desk-header .up .nav-cont .btn-nav .blankin-cont:hover {
  background-color: #00a8cc;
}
.desk-header .up .nav-cont .btn-nav .blankin-cont:hover .blankin-txt {
  color: #fff;
}
.desk-header .up .nav-cont .btn-nav .blankin-cont:hover .blankin-icon {
  color: #fff;
}
.desk-header .up .nav-cont .btn-nav:hover .cros1 {
  display: none;
}
.desk-header .up .desp-cont {
  position: absolute;
  top: -25em;
  width: 80%;
  height: 23.5em;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 1em;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s all ease-in-out;
}
.desk-header .up .desp-cont .fix {
  width: 100%;
  height: 100%;
  gap: 0.5em;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 0.5em;
}
.desk-header .up .desp-cont .fix .opc {
  width: 100%;
  height: 2.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  color: #00a8cc;
  border-radius: 2em;
  font-size: 0.8em;
  padding: 1.3em 0em;
  padding-left: 1em;
  border: 1px solid #00a8cc;
  cursor: pointer;
  transition: 0.7s all ease-in-out;
}
.desk-header .up .desp-cont .fix .opc:hover {
  color: #fff;
  background-color: #00a8cc;
}
.desk-header .up .desp-cont .fix::-webkit-scrollbar {
  width: 0.3em;
  background-color: transparent;
  height: 0.7em;
}
.desk-header .up .desp-cont .fix::-webkit-scrollbar-thumb {
  background-color: #00a3c7;
  width: 0.25em;
}
.desk-header .up .third-cont {
  width: 33%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.desk-header .up .third-cont .busc-cont {
  width: 18em;
  height: 2.5em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1em;
  border-radius: 3em;
  border: 1px solid #1ca3c9;
  background-color: #1ca3c9;
  position: relative;
  box-shadow: rgba(0, 163, 199, 0.3) 5px 5px, rgba(0, 163, 199, 0.2) 10px 10px, rgba(0, 163, 199, 0.1) 15px 15px;
}
.desk-header .up .third-cont .busc-cont .grapi {
  font-size: 0.9em;
}
.desk-header .up .third-cont .busc-cont .inp {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0em 1em;
  overflow: hidden;
  font-size: 0.9em;
  font-weight: 100;
}
.desk-header .up .third-cont .busc-cont .inp::placeholder {
  color: rgb(240, 240, 240);
}
.desk-header .up .third-cont .busc-cont .inp:focus {
  outline: none;
}
.desk-header .up .third-cont .busc-cont .encontrados-cont-desk {
  z-index: 99;
  position: absolute;
  top: 3em;
  left: calc(50% - 13.5em);
  width: 22em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 1em;
  overflow: hidden;
  padding: 1em;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.desk-header .up .third-cont .busc-cont .encontrados-cont-desk .line-filter-desk {
  text-align: center;
  line-height: 20px;
  background: #00a3c7;
  margin-block-start: 0em;
  margin-block-end: 0em;
  border-radius: 2em;
  padding: 0.1em 0em;
  font-size: 0.9em;
  width: 100%;
}
.desk-header .up .third-cont .busc-cont .encontrados-cont-desk .search-container-desk {
  width: 100%;
  height: auto;
  max-height: 30vh;
  overflow-y: scroll;
}
.desk-header .up .third-cont .busc-cont .encontrados-cont-desk .search-container-desk::-webkit-scrollbar {
  width: 0.3em;
  background-color: transparent;
  height: 0.7em;
}
.desk-header .up .third-cont .busc-cont .encontrados-cont-desk .search-container-desk::-webkit-scrollbar-thumb {
  background-color: #00a3c7;
  width: 0.25em;
}
.desk-header .up .third-cont .oth-opts-cont {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding-top: 1.4em;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.1em;
  position: relative;
  cursor: pointer;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .grapi-up {
  color: #97989b;
  font-size: 1.6em;
  transition: 0.1s all ease-in-out;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .grapi-down {
  color: #97989b;
  transition: 0.1s all ease-in-out;
  font-size: 0.9em;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .opts-acount-cont {
  position: absolute;
  right: 0;
  top: 2.3em;
  min-width: 12em;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 11;
  background-color: #fff;
  border-radius: 0.6em;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .opts-acount-cont .opas {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transition: 0.5s all ease-in-out;
  padding: 0.5em 0em;
  text-decoration: none;
  gap: 1em;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .opts-acount-cont .opas span {
  color: #666;
  font-size: 0.8em;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .opts-acount-cont .opas:hover {
  background-color: rgb(242, 242, 242);
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont .opts-acount-cont .opas:hover span {
  color: #00a3c7;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont:hover .grapi-up {
  color: #000;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont:hover .grapi-down {
  color: #000;
}
.desk-header .up .third-cont .oth-opts-cont .opt-cont:hover .opts-acount-cont {
  display: flex;
}
.desk-header .down {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.9em 1em;
  background-color: #fff;
}
.desk-header .down .horario {
  font-size: 0.9em;
  color: #666;
  display: flex;
  flex-direction: column;
}
.desk-header .down .cont-rs {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
.desk-header .down .cont-rs .redin {
  width: 2.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
  transition: 0.7s all ease-in-out;
}
.desk-header .down .cont-rs .redin i {
  font-size: 1.1em;
  transition: 0.7s all ease-in-out;
}
.desk-header .down .cont-rs .redin:nth-child(1) {
  box-shadow: rgba(0, 165, 200, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(1) i {
  color: rgb(130, 192, 205);
}
.desk-header .down .cont-rs .redin:nth-child(1):hover {
  background-color: rgb(0, 165, 200);
}
.desk-header .down .cont-rs .redin:nth-child(1):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(2) {
  box-shadow: rgba(101, 191, 205, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(2) i {
  color: rgb(101, 191, 205);
}
.desk-header .down .cont-rs .redin:nth-child(2):hover {
  background-color: rgb(101, 191, 205);
}
.desk-header .down .cont-rs .redin:nth-child(2):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(3) {
  box-shadow: rgba(140, 205, 205, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(3) i {
  color: rgb(140, 205, 205);
}
.desk-header .down .cont-rs .redin:nth-child(3):hover {
  background-color: rgb(140, 205, 205);
}
.desk-header .down .cont-rs .redin:nth-child(3):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(4) {
  box-shadow: rgba(115, 183, 224, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(4) i {
  color: rgb(115, 183, 224);
}
.desk-header .down .cont-rs .redin:nth-child(4):hover {
  background-color: rgb(115, 183, 224);
}
.desk-header .down .cont-rs .redin:nth-child(4):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(5) {
  box-shadow: rgba(243, 172, 177, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(5) i {
  color: rgb(243, 172, 177);
}
.desk-header .down .cont-rs .redin:nth-child(5):hover {
  background-color: rgb(243, 172, 177);
}
.desk-header .down .cont-rs .redin:nth-child(5):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(6) {
  box-shadow: rgba(243, 165, 141, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(6) i {
  color: rgb(243, 165, 141);
}
.desk-header .down .cont-rs .redin:nth-child(6):hover {
  background-color: rgb(243, 165, 141);
}
.desk-header .down .cont-rs .redin:nth-child(6):hover i {
  color: #fff;
}
.desk-header .down .cont-rs .redin:nth-child(7) {
  box-shadow: rgba(182, 206, 220, 0.56) 0px 0px 12px;
}
.desk-header .down .cont-rs .redin:nth-child(7) i {
  color: rgb(182, 206, 220);
}
.desk-header .down .cont-rs .redin:nth-child(7):hover {
  background-color: rgb(182, 206, 220);
}
.desk-header .down .cont-rs .redin:nth-child(7):hover i {
  color: #fff;
}
.desk-header .down .infocont {
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.2em;
}
.desk-header .down .infocont .opc {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.5s all ease-in-out;
  gap: 1em;
  width: 100%;
}
.desk-header .down .infocont .opc span {
  padding: 0em 0em;
  color: #777;
  font-size: 0.9em;
}
.desk-header .down .info-cont {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16em;
  height: 2.5em;
  box-shadow: rgba(0, 163, 199, 0.14) 0px 1px 12px;
  transition: 0.5s all ease-in-out;
  display: none;
}
.desk-header .down .info-cont span {
  color: #198aa3;
  font-size: 0.9em;
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0em 2em;
  transition: 0.5s all ease-in-out;
}
.desk-header .down .info-cont .opcs-cont {
  position: absolute;
  top: 2.5em;
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.desk-header .down .info-cont .opcs-cont .opc {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: auto;
  padding: 0.7em 1em;
  gap: 1em;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 163, 199, 0.1490196078);
}
.desk-header .down .info-cont .opcs-cont .opc span {
  padding: 0em 0em;
  color: #198aa3;
}
.desk-header .down .info-cont .opcs-cont .opc:last-child {
  border-bottom: none;
}
.desk-header .down .info-cont .opcs-cont .opc:hover {
  background-color: rgb(240, 240, 240);
}
.desk-header .down .info-cont:hover {
  background-color: #1ca3c9;
}
.desk-header .down .info-cont:hover span {
  color: #fff;
}
.desk-header .down .info-cont:hover .opcs-cont {
  display: flex;
}

#scroll-text {
  /* animation properties */
  font-size: 20px;
  font-weight: bold;
  transform: translateX(10%);
  animation: my-animation 5s linear infinite;
}

/* for Firefox */
/* for Chrome */
@keyframes my-animation {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(-5%);
  }
}
.search_toggle {
  width: 100%;
  height: 100%;
}
.search_toggle #axbody {
  max-height: none !important;
  min-height: 100% !important;
  list-style: none;
  overflow-y: scroll !important;
  width: 100% !important;
  height: 20em;
  padding-inline-start: 0px;
  padding: 0em 1em;
  /*.ui-corner-all:last-child{
    border-bottom: none;
    margin-bottom: none;
  }*/
}
.search_toggle #axbody .ui-corner-all {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  border-bottom: 1px solid #00d7ff;
  border-bottom-style: dashed;
  padding-bottom: 0.75em;
  margin-bottom: 1em;
}
.search_toggle #axbody .search_lewa {
  display: block;
  width: 5em;
  height: 5em;
  border: 1px solid #00d3ff;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
.search_toggle #axbody .search_lewa img {
  width: 100%;
  height: 100%;
}
.search_toggle #axbody .search_prawa {
  width: calc(100% - 6em);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.36em;
}
.search_toggle #axbody .search_prawa .search_marka {
  color: #fff;
  font-weight: 100;
  font-size: 0.7em;
}
.search_toggle #axbody .search_prawa .search_nazwa {
  font-size: 0.85em;
  color: #fff;
  font-weight: 400;
}
.search_toggle #axbody .search_prawa .search_cena {
  font-size: 0.9em;
  color: #fff;
  font-weight: 100;
}
.search_toggle ul::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle ul::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle #search_plugin {
  width: 100%;
  height: 100%;
}
.search_toggle #search_plugin form {
  width: 100%;
  height: 100%;
}
.search_toggle #search_plugin form .buscainp {
  width: 100%;
  height: 100%;
  padding: 0em 1em;
  border-radius: 0em 3em 3em 0em;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 0.9em;
}
.search_toggle #search_plugin form .buscainp:focus {
  outline: none;
}
.search_toggle #search_plugin form .buscainp::placeholder {
  color: rgba(255, 255, 255, 0.671);
  font-size: 0.8em;
}
.search_toggle .conten-abs {
  position: absolute;
  min-width: 40em;
  height: auto;
  top: 3em;
  right: 0;
  z-index: 10;
  background-color: #00a3c7;
  padding: 1em;
  border-radius: 2em;
}
.search_toggle .conten-abs .cuerpoPistas .txt-decir {
  margin: 0;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
  font-weight: 100;
  cursor: pointer;
}
.search_toggle .conten-abs .cuerpoPistas .ud1 {
  font-size: 0.6em;
  margin-left: 1em;
  color: #fff;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas {
  width: 100%;
  max-height: 8em;
  background-color: #0096b5;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  padding: 1em;
  overflow-y: scroll;
  border-radius: 2em 0em 0em 2em;
  transition: 0.2s all ease-in-out;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas div {
  width: -moz-fit-content;
  width: fit-content;
  display: inline-block;
  padding: 5px 10px;
  color: #00d9ff;
  border: 1px dashed #00d3ff;
  margin: 3px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.6s all ease-in-out;
}
.search_toggle .conten-abs .cuerpoPistas .lasPistas div:hover {
  color: #ffffff;
  border: 1px dashed #ffffff;
}
.search_toggle .conten-abs .dowi {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.search_toggle .conten-abs .dowi .lefti {
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3em;
}
.search_toggle .conten-abs .dowi .lefti .card {
  width: 100%;
  height: 3em;
  background-color: #0096b2;
  padding: 0.1em;
  border-radius: 0.5em;
  transition: 0.2s all ease-in-out;
  overflow: hidden;
}
.search_toggle .conten-abs .dowi .lefti .card .lista {
  overflow-y: scroll;
  width: 100%;
  height: 9em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.7176470588);
  width: 0.25em;
}
.search_toggle .conten-abs .dowi .lefti .card .lista div {
  position: relative;
  border-bottom: 1px solid #ffffff !important;
  width: 100%;
  height: 2.5em;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 0.9em;
  font-weight: 100;
}
.search_toggle .conten-abs .dowi .lefti .card .lista div input[type=checkbox] {
  cursor: pointer;
  width: 1.2em;
  height: 1.2em;
}
.search_toggle .conten-abs .dowi .lefti .card .taitl-filt {
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-size: 0.9em;
  font-weight: 100;
}
.search_toggle .conten-abs .dowi .lefti .card .taitl-filt i {
  font-size: 0.7em;
  color: #fff;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree {
  overflow-y: unset !important;
  padding: 0em 0em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  height: auto;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less {
  height: auto !important;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less div {
  border-bottom: none;
}
.search_toggle .conten-abs .dowi .lefti .card .category-tree .less .w-100 {
  overflow-y: unset !important;
}
.search_toggle .conten-abs .dowi .rigti {
  width: 60%;
  height: auto;
  height: 25em;
  background-color: #0096b3;
  border-radius: 2em;
}
.search_toggle .conten-abs .dowi .rigti .result-taitl {
  color: #fff;
  font-size: 1em;
  font-weight: 100;
}`, "",{"version":3,"sources":["webpack://./src/app/components/desk-header/desk-header.component.scss"],"names":[],"mappings":"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","sourcesContent":[".desk-header{\n    width: calc(100%);\n    height: auto;\n    position: relative;\n    z-index: 10;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n    background-color: #fff;\n    color: #fff;\n  \n    .pagos-cont{\n      width: 100%;\n      height: 6em;\n      background-color: #ecd6d4;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n  \n      .first-cont{\n        height: 100%;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n  \n        .txt-cont{\n          width: 20em;\n          height: 3.5em;\n          background-color: #ffb2b6;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          border-radius: 2em;\n          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n          position: relative;\n          padding-left: 3.5em;\n  \n          .txt:nth-child(1){\n            font-size: 1.1em;\n            font-weight: 100;\n          }\n  \n          .txt:nth-child(2){\n            font-size: 1.1em;\n            font-weight: 900;\n          }\n  \n          .trokita{\n            position: absolute;\n            background-color: #ffb2b6;\n            width: 2em;\n            height: 2em;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 2.5em;\n            left: -.2em;\n            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n          }\n        }\n      }\n  \n      .second-cont{\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: .7em;\n  \n        .prin{\n          background-color: #ffb2b6;\n          font-size: 1em;\n          font-weight: 600;\n          padding: 0.2em 0.75em;\n          border-radius: 2em;\n          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n        }\n  \n        .secon{\n          font-size: 1em;\n          font-weight: 100;\n          width: 19em;\n          text-align: center;\n          text-shadow: 0px 0px 3px #00000024;\n        }\n      }\n  \n      .third-cont{\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: .4em;\n  \n        .prin{\n          background-color: #ffb2b6;\n          font-size: 1em;\n          font-weight: 600;\n          padding: 0.2em 0.75em;\n          border-radius: 2em;\n          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n        }\n  \n        .contcarmov{\n          width: 12em;\n          height: 3.5em;\n          position: relative;\n          overflow: hidden;\n       \n          .mov{\n            height: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            gap: 4em;\n            position: absolute;\n            left: 14em;\n            animation: mov 15s linear infinite;\n      \n            .metodo-cont{\n              width: 10em;\n              height: 100%;\n              display: flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n              gap: .5em;\n              //@at-root: 1px solid red;\n  \n              .grap{\n                font-size: 2em;\n              }\n  \n              .txt{\n                font-size: .6em;\n                text-align: center;\n                font-weight: 100;\n                text-shadow: 0px 0px 3px #00000082;\n              }\n            }\n          }\n       \n          @keyframes mov{\n              0%{\n                  left: 12em;\n              }\n       \n              100%{\n                  left: -55em;\n              }\n          }\n        }\n      }\n    }\n  \n    .up{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n      padding: 1em 1em;\n      border-bottom: 1px solid #1ca3c9;\n      border-bottom-style: dashed;\n      background-color: #fff;\n      position: relative;\n  \n      .loguin{\n        width: 9em;\n        height: auto;\n      }\n\n      .nav-opcs-cont{\n        width: 50%;\n        height: auto;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: center;\n        row-gap: .4em;\n        \n        .opi{\n          margin-right: 1em;\n          text-decoration: none;\n          font-weight: 100;\n          font-size: .9em;\n          color: #777;\n          //transition: .2s all ease-in-out;\n          position: relative;\n          z-index: 1;\n          cursor: pointer;\n        }\n\n        .opi::before{\n          content: '';\n          width: 110%;\n          height: 2em;\n          background-color: #00a8cc;\n          position: absolute;\n          top: -1.2em; // .5em\n          visibility: hidden;\n          opacity: 0;\n          left: calc(50% - 55%);\n          z-index: -1;\n          transition: .1s all ease-in-out;\n          border-radius: .1em;\n        }\n\n        .opi:hover{\n          //font-size: 1em;\n          color: #fff;\n        }\n\n        .opi:hover::before{\n          top: -.5em; // .5em\n          visibility: visible;\n          opacity: 1;\n        }\n\n        .opi:last-child{\n          margin-right: 0em;\n        }\n\n        .tagin-mesrosa{\n          background-color: #fdb6ff;\n          border-radius: 2em;\n          padding: 0.2em 1em;\n          color: #fff;\n        }\n\n        .tagin-mesrosa::before{\n          content: '';\n          display: none;\n        }\n\n        .tagin-halloween{\n          background-color: #e16216;\n          border-radius: 2em;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          padding: 0.2em 1em;\n          gap: 0.5em;\n          color: #fff;\n  \n          .grap{\n            font-size: 1em;\n          }\n        }\n\n        .tagin-halloween::before{\n          content: '';\n          display: none;\n        }\n      }\n  \n      .nav-cont{\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: .3em;\n        position: relative;\n        padding-left: 9em;\n        display: none;\n  \n        .tagin-conts{\n          display: flex;\n          flex-direction: row;\n          justify-content: flex-start;\n          align-items: center;\n          gap: .5em;\n  \n          .tagin-mesrosa{\n            background-color: #fdb6ff;\n            border-radius: 2em;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            padding: 0.2em 1em;\n            gap: 0.5em;\n            cursor: pointer;\n    \n            .grap{\n              font-size: 1em;\n            }\n    \n            .tag-txt{\n              font-size: .9em;\n            }\n          }\n    \n          .tagin-halloween{\n            background-color: #e16216;\n            border-radius: 2em;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            padding: 0.2em 1em;\n            gap: 0.5em;\n            cursor: pointer;\n    \n            .grap{\n              font-size: 1em;\n            }\n    \n            .tag-txt{\n              font-size: .9em;\n            }\n          }\n        }\n  \n        .btn-nav{\n          position: relative;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          width: 18em;\n          height: 2.5em;\n          overflow: hidden;\n          border-radius: 2em;\n          //border: 1px solid red;\n          box-shadow: 0px 0px 15px 1px #00a7cc2d;\n        \n          .cros1{\n            background-color: #00a8cc;\n            width: 2em;\n            height: 19em;\n            transform: rotate(84deg);\n            animation: rot1 3s linear infinite;\n          }\n  \n          @keyframes rot1{\n            from{\n              transform: rotate(84deg);\n            }\n            to{\n              transform: rotate(444deg);\n            }\n          }\n  \n          .blankin-cont{\n            background-color: #fff;\n            width: 17.8em;\n            height: 2.4em;\n            border-radius: 4em;\n            position: absolute;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            gap: 2em;\n            transition: .7s all ease-in-out;\n  \n            .blankin-txt{\n              color: #00a8cc;\n              transition: .7s all ease-in-out;\n            }\n  \n            .blankin-icon{\n              color: #00a8cc;\n              transition: .7s all ease-in-out;\n            }\n          }\n  \n          .blankin-cont:hover{\n            background-color: #00a8cc;\n  \n            .blankin-txt{\n              color: #fff;\n            }\n  \n            .blankin-icon{\n              color: #fff;\n            }\n          }\n        }\n  \n        .btn-nav:hover{\n          .cros1{\n            display: none;\n          }\n        }\n      }\n  \n      .desp-cont{\n        position: absolute;\n        top: -25em;\n        width: 80%;\n        height: 23.5em;\n        background-color: #fff;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        border-radius: 1em;\n        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n        padding: 1em;\n        opacity: 0;\n        visibility: hidden;\n        transition: .5s all ease-in-out;\n  \n        .fix{\n          width: 100%;\n          height: 100%;\n          gap: 0.5em;\n          overflow-y: scroll;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n          padding-right: .5em;\n  \n          .opc{\n            width: 100%;\n            height: 2.5em;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n            background-color: #fff;\n            color: #00a8cc;\n            border-radius: 2em;\n            font-size: 0.8em;\n            padding: 1.3em 0em;\n            padding-left: 1em;\n            border: 1px solid #00a8cc;\n            cursor: pointer;\n            transition: .7s all ease-in-out;\n          }\n  \n          .opc:hover{\n            color: #fff;\n            background-color: #00a8cc;\n          }\n        }\n  \n        .fix::-webkit-scrollbar {\n          width: .3em;\n          background-color: transparent;\n          height: .7em;\n        }\n      \n        .fix::-webkit-scrollbar-thumb {\n          background-color: #00a3c7;\n          //border-radius: 1vh;\n          width: 0.25em;\n        }\n      }\n\n      .third-cont{\n        width: 33%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        gap: 1em;\n\n        .busc-cont{\n          width: 18em;\n          height: 2.5em;\n          display: flex;\n          justify-content: flex-start;\n          align-items: center;\n          padding-left: 1em;\n          border-radius: 3em;\n          border: 1px solid #1ca3c9;\n          background-color: #1ca3c9;\n          position: relative;\n          box-shadow: \n            rgba(0, 163, 199, 0.3) 5px 5px, \n            rgba(0, 163, 199, 0.2) 10px 10px, \n            rgba(0, 163, 199, 0.1) 15px 15px;\n\n          .grapi{\n            font-size: .9em;\n          }\n    \n          .inp{\n            width: 100%;\n            height: 100%;\n            background-color: transparent;\n            border: none;\n            padding: 0em 1em;\n            overflow: hidden;\n            font-size: .9em;\n            font-weight: 100;\n          }\n    \n          .inp::placeholder{\n            color: rgb(240, 240, 240);\n          }\n    \n          .inp:focus{\n            outline: none;\n          }\n    \n          .encontrados-cont-desk{\n            z-index: 99; \n            position: absolute; \n            top: 3em;\n            left: calc(50% - 13.5em);\n            width: 22em;\n            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n            border-radius: 1em;\n            overflow: hidden;\n            padding: 1em;\n            background-color: #fff;  \n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: 1em;\n    \n            .line-filter-desk{\n              text-align: center;\n              line-height: 20px;\n              background: #00a3c7;\n              margin-block-start: 0em;\n              margin-block-end: 0em;\n              border-radius: 2em;\n              padding: 0.1em 0em;\n              font-size: .9em;\n              width: 100%;\n            }\n    \n            .search-container-desk{\n              width: 100%;\n              height: auto;\n              max-height: 30vh;\n              overflow-y: scroll;\n            }\n    \n            .search-container-desk::-webkit-scrollbar {\n              width: .3em;\n              background-color: transparent;\n              height: .7em;\n            }\n          \n            .search-container-desk::-webkit-scrollbar-thumb {\n              background-color: #00a3c7;\n              //border-radius: 1vh;\n              width: 0.25em;\n            }\n          }\n        }\n\n        .oth-opts-cont{\n          width: auto;\n          height: auto;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          gap: 1em;\n          padding-top: 1.4em;\n\n          .opt-cont{\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: center;\n            gap: .1em;\n            position: relative;\n            cursor: pointer;\n\n            .grapi-up{\n              color: #97989b;\n              font-size: 1.6em;\n              transition: .1s all ease-in-out;\n            }\n\n            .grapi-down{\n              color: #97989b;\n              transition: .1s all ease-in-out;\n              font-size: .9em;\n            }\n\n            .opts-acount-cont{\n              position: absolute;\n              right: 0;\n              top: 2.3em;\n              min-width: 12em;\n              height: auto;\n              display: none;\n              flex-direction: column;\n              justify-content: flex-start;\n              align-items: flex-start;\n              z-index: 11;\n              background-color: #fff;\n              border-radius: 0.6em;\n              overflow: hidden;\n              box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;\n\n              .opas{\n                width: 100%;\n                height: auto;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                background-color: #ffff;\n                transition: .5s all ease-in-out;\n                padding: .5em 0em;\n                text-decoration: none;\n                gap: 1em;\n\n                span{\n                  color: #666;\n                  font-size: .8em;\n                }\n              }\n\n              .opas:hover{\n                background-color: rgb(242, 242, 242);\n\n                span{\n                  color: #00a3c7;\n                }\n              }\n            }\n          }\n\n          .opt-cont:hover{\n            .grapi-up{\n              color: #000;\n            }\n\n            .grapi-down{\n              color: #000;\n            }\n\n            .opts-acount-cont{\n              display: flex;\n            } \n          }\n        }\n      }\n    }\n  \n    .down{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n      padding: .9em 1em;\n      background-color: #fff;\n  \n      .horario{\n        font-size: .9em;\n        color: #666;\n        display: flex;\n        flex-direction: column;\n      }\n  \n      .cont-rs{\n        width: auto;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        gap: .5em;\n  \n        .redin{\n          width: 2.5em;\n          height: 2.5em;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          border-radius: 50%;\n          text-decoration: none;\n          transition: .7s all ease-in-out;\n  \n          i{\n            font-size: 1.1em;\n            transition: .7s all ease-in-out;\n          }\n        }\n  \n        .redin:nth-child(1){\n          box-shadow: rgb(0 165 200 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(130 192 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(1):hover{\n          background-color: rgb(0 165 200 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(2){\n          box-shadow: rgb(101 191 205 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(101 191 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(2):hover{\n          background-color: rgb(101 191 205 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(3){\n          box-shadow: rgb(140 205 205 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(140 205 205 / 100%);\n          }\n        }\n  \n        .redin:nth-child(3):hover{\n          background-color: rgb(140 205 205 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(4){\n          box-shadow: rgb(115 183 224 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(115 183 224 / 100%);\n          }\n        }\n  \n        .redin:nth-child(4):hover{\n          background-color: rgb(115 183 224 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(5){\n          box-shadow: rgb(243 172 177 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(243 172 177 / 100%);\n          }\n        }\n  \n        .redin:nth-child(5):hover{\n          background-color: rgb(243 172 177 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(6){\n          box-shadow: rgb(243 165 141 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(243 165 141 / 100%);\n          }\n        }\n  \n        .redin:nth-child(6):hover{\n          background-color: rgb(243 165 141 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n  \n        .redin:nth-child(7){\n          box-shadow: rgb(182 206 220 / 56%) 0px 0px 12px;\n  \n          i{\n            color: rgb(182 206 220 / 100%);\n          }\n        }\n  \n        .redin:nth-child(7):hover{\n          background-color: rgb(182 206 220 / 100%);\n  \n          i{\n            color: #fff;\n          }\n        }\n      }\n\n      .infocont{\n        width: 20%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-end;\n        gap: .2em;\n\n        .opc{\n          background-color: #fff;\n          display: flex;\n          flex-direction: row;\n          justify-content: center;\n          align-items: center;\n          text-decoration: none;\n          transition: .5s all ease-in-out;\n          gap: 1em;\n          width: 100%;\n\n          span{\n            padding: 0em 0em;\n            color: #777;\n            font-size: .9em;\n          }\n        }\n      }\n  \n      .info-cont{\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 16em;\n        height: 2.5em;\n        box-shadow: rgb(0 163 199 / 14%) 0px 1px 12px;\n        //border-radius: 2em;\n        //border-bottom: 1px solid rgb(0 163 199 / 20%);\n        transition: .5s all ease-in-out;\n        display: none;\n  \n        span{\n          color: #198aa3;\n          font-size: .9em;\n          font-weight: 100;\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          padding: 0em 2em;\n          transition: .5s all ease-in-out;\n        }\n  \n        .opcs-cont{\n          position: absolute;\n          top: 2.5em;\n          width: 100%;\n          height: auto;\n          display: none;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n          padding-top: 1em;\n          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  \n          .opc{\n            background-color: #fff;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            text-decoration: none;\n            transition: .5s all ease-in-out;\n            width: 100%;\n            height: auto;\n            padding: 0.7em 1em;\n            gap: 1em;\n            cursor: pointer;\n            border-bottom: 1px solid #00a3c726;\n  \n            span{\n              padding: 0em 0em;\n              color: #198aa3;\n            }\n          }\n  \n          .opc:last-child{\n            border-bottom: none;\n          }\n  \n          .opc:hover{\n            background-color: rgb(240, 240, 240);\n          }\n        }\n      }\n  \n      .info-cont:hover{\n        background-color: #1ca3c9;\n  \n        span{\n          color: #fff;\n        }\n  \n        .opcs-cont{\n          display: flex;\n        }\n      }\n    }\n}\n\n#scroll-text {\n  /* animation properties */\n  font-size: 20px;\n  font-weight: bold;\n  -moz-transform: translateX(10%);\n  -webkit-transform: translateX(10%);\n  transform: translateX(10%);\n  \n  -moz-animation: my-animation 5s linear infinite;\n  -webkit-animation: my-animation 5s linear infinite;\n  animation: my-animation 5s linear infinite;\n}\n\n/* for Firefox */\n@-moz-keyframes my-animation {\n  from { -moz-transform: translateX(10%); }\n  to { -moz-transform: translateX(-5%); }\n}\n\n/* for Chrome */\n@-webkit-keyframes my-animation {\n  from { -webkit-transform: translateX(10%); }\n  to { -webkit-transform: translateX(-5%); }\n}\n\n@keyframes my-animation {\n  from {\n    -moz-transform: translateX(10%);\n    -webkit-transform: translateX(10%);\n    transform: translateX(10%);\n  }\n  to {\n    -moz-transform: translateX(-5%);\n    -webkit-transform: translateX(-5%);\n    transform: translateX(-5%);\n  }\n}\n\n.search_toggle{\n  width: 100%;\n  height: 100%;\n\n  #axbody{\n    max-height: none!important;\n    min-height: 100% !important;\n    list-style: none;\n    overflow-y: scroll!important;\n    width: 100%!important;\n    height: 20em;\n    padding-inline-start: 0px;\n    padding: 0em 1em;\n\n    .ui-corner-all{\n      width: 100%;\n      height: auto;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      gap: 1em;\n      border-bottom: 1px solid #00d7ff;\n      border-bottom-style: dashed;\n      padding-bottom: 0.75em;\n      margin-bottom: 1em;\n    }\n\n    /*.ui-corner-all:last-child{\n      border-bottom: none;\n      margin-bottom: none;\n    }*/\n\n    .search_lewa{\n      display: block;\n      width: 5em;\n      height: 5em;\n      border: 1px solid #00d3ff;\n      border-radius: 50%;\n      background-position: center;\n      background-size: cover;\n      overflow: hidden;\n\n      img{\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    .search_prawa{\n      width: calc(100% - 6em);\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      gap: 0.36em;\n\n      .search_marka{\n        color: #fff;\n        font-weight: 100;\n        font-size: .7em;\n      }\n\n      .search_nazwa{\n        font-size: .85em;\n        color: #fff;\n        font-weight: 400;\n      }\n\n      .search_cena{\n        font-size: .9em;\n        color: #fff;\n        font-weight: 100;\n      }\n    }\n  }\n\n  ul::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n  }\n    \n  ul::-webkit-scrollbar-thumb {\n    background-color: #ffffffb7;\n    //border-radius: 1vh;\n    width: 0.25em;\n  }\n\n  #search_plugin{\n    width: 100%;\n    height: 100%;\n\n    form{\n      width: 100%;\n      height: 100%;\n\n      .buscainp{\n        width: 100%;\n        height: 100%;\n        padding: 0em 1em;\n        border-radius: 0em 3em 3em 0em;\n        background-color: transparent;\n        border: none;\n        color: #fff;\n        font-size: .9em;\n      }\n\n      .buscainp:focus{\n        outline: none;\n      }\n\n      .buscainp::placeholder{\n        color: rgba(255, 255, 255, 0.671);\n        font-size: .8em;\n      }\n    }\n  }\n\n  .conten-abs{\n    position: absolute;\n    min-width: 40em;\n    height: auto;\n    top: 3em;\n    right: 0;\n    z-index: 10;\n    background-color: #00a3c7;\n    padding: 1em;\n    border-radius: 2em;\n\n    .cuerpoPistas{\n\n      .txt-decir{\n        margin: 0;\n        margin-bottom: 0.5em;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 1.4em;\n        font-weight: 100;\n        cursor: pointer;\n      }\n\n      .ud1{\n        font-size: .6em;\n        margin-left: 1em;\n        color: #fff;\n      }\n\n      .lasPistas{\n        width: 100%;\n        max-height: 8em;\n        background-color: #0096b5;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        gap: .5em;\n        padding: 1em;\n        overflow-y: scroll;\n        border-radius: 2em 0em 0em 2em;\n        transition: .2s all ease-in-out;\n      }\n\n      .lasPistas::-webkit-scrollbar {\n        width: .35em;\n        background-color: transparent;\n        height: .7em;\n      }\n        \n      .lasPistas::-webkit-scrollbar-thumb {\n        background-color: #ffffffb7;\n        //border-radius: 1vh;\n        width: 0.25em;\n      }\n\n      .lasPistas div{\n        width: fit-content;\n        display: inline-block;\n        padding: 5px 10px;\n        color: #00d9ff;\n        border: 1px dashed #00d3ff;\n        margin: 3px;\n        border-radius: 3px;\n        cursor: pointer;\n        transition: .6s all ease-in-out;\n      }\n\n      .lasPistas div:hover{\n        color: #ffffff;\n        border: 1px dashed #ffffff;\n      }\n    }\n\n    .dowi{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-start;\n      gap: 1em;\n\n      .lefti{\n        width: 40%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        gap: 0.3em;\n\n        .card{\n          width: 100%;\n          height: 3em;\n          background-color: #0096b2;\n          padding: 0.1em;\n          border-radius: 0.5em;\n          transition: .2s all ease-in-out;\n          overflow: hidden;\n\n          .lista{\n            overflow-y: scroll;\n            width: 100%;\n            height: 9em;\n          }\n\n          .lista::-webkit-scrollbar {\n            width: .35em;\n            background-color: transparent;\n            height: .7em;\n          }\n            \n          .lista::-webkit-scrollbar-thumb {\n            background-color: #ffffffb7;\n            //border-radius: 1vh;\n            width: 0.25em;\n          }\n\n          .lista div{\n            position: relative;\n            border-bottom: 1px solid #ffffff!important;\n            width: 100%;\n            height: 2.5em;\n            display: flex!important;\n            flex-direction: row;\n            justify-content: space-between;\n            align-items: center;\n            color: #fff;\n            font-size: .9em;\n            font-weight: 100;\n\n            input[type='checkbox']{\n              cursor: pointer;\n              width: 1.2em;\n              height: 1.2em;\n            }\n          }\n\n          .taitl-filt{\n            text-align: center;\n            cursor: pointer;\n            color: #fff;\n            font-size: .9em;\n            font-weight: 100;\n\n            i{\n              font-size: .7em;\n              color: #fff;\n            }\n          }\n\n          .category-tree{\n            overflow-y: unset!important;\n            padding: 0em 0em;\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            height: auto;\n\n            .less{\n              height: auto!important;\n\n              div{\n                border-bottom: none;\n              }\n\n              .w-100{\n                overflow-y: unset!important;\n              }\n            }\n          }\n        }\n      }\n\n      .rigti{\n        width: 60%;\n        height: auto;\n        height: 25em;\n        background-color: #0096b3;\n        border-radius: 2em;\n\n        .result-taitl{\n          color: #fff;\n          font-size: 1em;\n          font-weight: 100;\n        }\n      }\n    }\n  }\n}\n\n@media(max-width: 992px){\n  \n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86535:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
}

.cont {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

ion-content {
  --ion-background-color: url('Textura-ventana-de-inicio.png')!important;
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-card {
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
ion-card .where {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
ion-card .where a {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 600;
  color: #000;
}
ion-card .where a span {
  display: inline-block;
  border-bottom: 3px solid #14A8CD;
  padding-bottom: 0.5rem;
}
ion-card .where #regis {
  font-weight: 600;
  color: #14A8CD;
  cursor: pointer;
}
ion-card img {
  width: 60%;
  padding: 1rem;
}
ion-card form {
  width: 100%;
  height: auto;
}
ion-card .error {
  color: red;
  font-size: 1rem;
  font-weight: bolder;
}
ion-card .correcto {
  color: green;
  font-size: 1rem;
  font-weight: bolder;
}
ion-card ion-item {
  --ion-item-background: none !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
ion-card ion-button {
  height: 4rem;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  --background: #14A8CD;
  color: #fff;
}
ion-card ion-button:hover {
  --background: #14A8CD!important;
  color: #fff;
  transition: 1s;
}
ion-card ion-input {
  color: #000;
  font-weight: 600;
}
ion-card ion-label {
  color: #000;
  font-weight: 600;
}
ion-card .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color) {
  color: #000;
}
ion-card .item-interactive.item-has-focus {
  --highlight-background: #000;
}
ion-card .forgot {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-card .forgot a {
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.mod {
  --background: black;
}

#closeModal {
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.loginDesk {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.loginDesk .contDesk {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  padding: 5em 0em;
}
.loginDesk .contDesk .cardi {
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25em;
  height: auto;
  border-radius: 1em;
  box-shadow: rgba(0, 168, 203, 0.3) 0px 5px 30px;
}
.loginDesk .contDesk .cardi .where {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin: 0.5em 0em;
}
.loginDesk .contDesk .cardi .where a {
  font-size: 0.9em;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 400;
  color: #000;
}
.loginDesk .contDesk .cardi .where a span {
  display: inline-block;
  border-bottom: 3px solid #14A8CD;
  padding-bottom: 0.5rem;
}
.loginDesk .contDesk .cardi .where #regis {
  font-weight: 400;
  color: #14A8CD;
  cursor: pointer;
}
.loginDesk .contDesk .cardi img {
  width: 12em;
  padding: 1em;
}
.loginDesk .contDesk .cardi form {
  width: 100%;
  height: auto;
}
.loginDesk .contDesk .cardi .error {
  color: red;
  font-size: 1em;
  font-weight: bolder;
}
.loginDesk .contDesk .cardi .correcto {
  color: green;
  font-size: 1em;
  font-weight: bolder;
}
.loginDesk .contDesk .cardi ion-item {
  --ion-item-background: none !important;
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin: 1em 0em;
}
.loginDesk .contDesk .cardi ion-button {
  height: 4em;
  font-family: "Roboto", sans-serif;
  font-size: 1em;
  letter-spacing: 0.1rem;
  font-weight: 400;
  --background: #14A8CD;
  color: #fff;
}
.loginDesk .contDesk .cardi ion-button:hover {
  --background: #14A8CD!important;
  color: #fff;
  transition: 1s;
}
.loginDesk .contDesk .cardi ion-input {
  color: #000;
  font-weight: 400;
}
.loginDesk .contDesk .cardi ion-label {
  color: #000;
  font-weight: 400;
  font-size: 0.8em;
}
.loginDesk .contDesk .cardi .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color) {
  color: #000;
}
.loginDesk .contDesk .cardi .item-interactive.item-has-focus {
  --highlight-background: #000;
}
.loginDesk .contDesk .cardi .forgot {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginDesk .contDesk .cardi .forgot a {
  font-size: 0.9em;
  color: #000;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  margin-top: 0rem;
  margin-bottom: 0rem;
  margin: 1.5em 0em;
  transition: 0.4s all ease-in-out;
}
.loginDesk .contDesk .cardi .forgot a:hover {
  color: #14A8CD;
}

.loginDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.loginDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}

@media (min-width: 992px) {
  .loginDesk {
    display: flex;
  }
  ion-content {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/pages/login/login.page.scss"],"names":[],"mappings":"AAGA;EACI,UAAA;EACA,SAAA;AADJ;;AAIA;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AADJ;;AAIA;EACI,sEAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADJ;;AAIA;EACI,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uLAAA;AADJ;AAGI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AADR;AAGQ;EACI,eAAA;EACA,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;AADZ;AAGY;EACI,qBAAA;EACA,gCAAA;EACA,sBAAA;AADhB;AAKQ;EACI,gBAAA;EACA,cAAA;EACA,eAAA;AAHZ;AAOI;EACI,UAAA;EACA,aAAA;AALR;AAQI;EACI,WAAA;EACA,YAAA;AANR;AASI;EACI,UAAA;EACA,eAAA;EACA,mBAAA;AAPR;AAUI;EACI,YAAA;EACA,eAAA;EACA,mBAAA;AARR;AAWI;EACI,sCAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AATR;AAYI;EACI,YAAA;EACA,iCAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,WAAA;AAVR;AAaI;EACI,+BAAA;EACA,WAAA;EACA,cAAA;AAXR;AAcI;EACI,WAAA;EACA,gBAAA;AAZR;AAeI;EACI,WAAA;EACA,gBAAA;AAbR;AAgBI;EACI,WAAA;AAdR;AAiBI;EACI,4BAAA;AAfR;AAkBI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAhBR;AAkBQ;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAhBZ;;AAqBA;EACI,mBAAA;AAlBJ;;AAqBA;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAlBJ;;AAqBA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;AAlBJ;AAoBI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAlBR;AAoBQ;EACI,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,+CAAA;AAlBZ;AAqBY;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAnBhB;AAqBgB;EACI,gBAAA;EACA,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;AAnBpB;AAqBoB;EACI,qBAAA;EACA,gCAAA;EACA,sBAAA;AAnBxB;AAuBgB;EACI,gBAAA;EACA,cAAA;EACA,eAAA;AArBpB;AAyBY;EACI,WAAA;EACA,YAAA;AAvBhB;AA0BY;EACI,WAAA;EACA,YAAA;AAxBhB;AA2BY;EACI,UAAA;EACA,cAAA;EACA,mBAAA;AAzBhB;AA4BY;EACI,YAAA;EACA,cAAA;EACA,mBAAA;AA1BhB;AA6BY;EACI,sCAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;AA3BhB;AA8BY;EACI,WAAA;EACA,iCAAA;EACA,cAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,WAAA;AA5BhB;AA+BY;EACI,+BAAA;EACA,WAAA;EACA,cAAA;AA7BhB;AAgCY;EACI,WAAA;EACA,gBAAA;AA9BhB;AAiCY;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;AA/BhB;AAkCY;EACI,WAAA;AAhChB;AAmCY;EACI,4BAAA;AAjChB;AAoCY;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAlChB;AAoCgB;EACI,gBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,gCAAA;AAlCpB;AAqCgB;EACI,cAAA;AAnCpB;;AA0CA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AAvCJ;;AA0CA;EACI,iDAAA;EAEA,aAAA;AAxCJ;;AA2CA;EACI;IACI,aAAA;EAxCN;EA2CE;IACI,aAAA;EAzCN;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap');\n\n\n*{\n    padding: 0;\n    margin: 0;\n}\n\n.cont{ \n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\nion-content{\n    --ion-background-color: url('../../../assets/img/Textura-ventana-de-inicio.png')!important; //rgb(189, 193, 194) !important\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nion-card{\n    background: #fdfdfd;//     #fdfdfd            #14A8CD\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    .where{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: row;\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n\n        a{\n            font-size: 1rem;\n            font-family: 'Roboto', sans-serif;\n            text-decoration: none;\n            font-weight: 600;\n            color: #000;\n\n            span{\n                display:inline-block;\n                border-bottom: 3px solid #14A8CD;\n                padding-bottom: .5rem;\n            }\n        }\n\n        #regis{\n            font-weight: 600;\n            color: #14A8CD;\n            cursor: pointer;\n        }\n    }\n\n    img{\n        width: 60%;\n        padding: 1rem;\n    }\n\n    form{\n        width: 100%;\n        height: auto;\n    }\n\n    .error{\n        color: red;\n        font-size: 1rem;\n        font-weight: bolder;\n    }\n\n    .correcto{\n        color: green;\n        font-size: 1rem;\n        font-weight: bolder;\n    }\n\n    ion-item{\n        --ion-item-background: none !important;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        padding-left: 2rem;\n        padding-right: 2rem;\n    }\n\n    ion-button{\n        height: 4rem;\n        font-family: 'Roboto', sans-serif;\n        font-size: 1.3rem;\n        letter-spacing: .1rem;\n        font-weight: 600;\n        --background: #14A8CD;\n        color: #fff;\n    }\n\n    ion-button:hover{\n        --background: #14A8CD!important;\n        color: #fff;\n        transition: 1s;\n    }\n\n    ion-input{\n        color: #000;\n        font-weight: 600;\n    }\n\n    ion-label{\n        color: #000;\n        font-weight: 600;\n    }\n\n    .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){\n        color: #000;\n    }\n\n    .item-interactive.item-has-focus{\n        --highlight-background: #000;\n    }\n\n    .forgot{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        a{\n            font-size: 1rem;\n            margin-top: 2rem;\n            margin-bottom: 2rem;\n            color: #000;\n            font-weight: 600;\n            text-decoration: none;\n            cursor: pointer;\n        }\n    }\n}\n\n.mod{\n    --background: black;\n}\n\n#closeModal{\n    font-size: 1.2rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    color: #000;\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.loginDesk{\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n\n    .contDesk{ \n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 1rem;\n        background-color: #fff;\n        padding: 5em 0em;\n\n        .cardi{\n            background: #fdfdfd;//     #fdfdfd            #14A8CD\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-direction: column;\n            width: 25em;\n            height: auto;\n            border-radius: 1em;\n            box-shadow: rgba(0, 168, 203, 0.3) 0px 5px 30px;\n            //box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n            \n            .where{\n                width: 100%;\n                height: auto;\n                display: flex;\n                justify-content: space-around;\n                align-items: center;\n                flex-direction: row;\n                margin-top: 0rem;\n                margin-bottom: 0rem;\n                margin: .5em 0em;\n\n                a{\n                    font-size: .9em;\n                    font-family: 'Roboto', sans-serif;\n                    text-decoration: none;\n                    font-weight: 400;\n                    color: #000;\n\n                    span{\n                        display:inline-block;\n                        border-bottom: 3px solid #14A8CD;\n                        padding-bottom: .5rem;\n                    }\n                }\n\n                #regis{\n                    font-weight: 400;\n                    color: #14A8CD;\n                    cursor: pointer;\n                }\n            }\n\n            img{\n                width: 12em;\n                padding: 1em;\n            }\n\n            form{\n                width: 100%;\n                height: auto;\n            }\n\n            .error{\n                color: red;\n                font-size: 1em;\n                font-weight: bolder;\n            }\n\n            .correcto{\n                color: green;\n                font-size: 1em;\n                font-weight: bolder;\n            }\n\n            ion-item{\n                --ion-item-background: none !important;\n                margin-top: 0rem;\n                margin-bottom: 0rem;\n                margin: 1em 0em;\n            }\n\n            ion-button{\n                height: 4em;\n                font-family: 'Roboto', sans-serif;\n                font-size: 1em;\n                letter-spacing: .1rem;\n                font-weight: 400;\n                --background: #14A8CD;\n                color: #fff;\n            }\n\n            ion-button:hover{\n                --background: #14A8CD!important;\n                color: #fff;\n                transition: 1s;\n            }\n\n            ion-input{\n                color: #000;\n                font-weight: 400;\n            }\n\n            ion-label{\n                color: #000;\n                font-weight: 400;\n                font-size: .8em;\n            }\n\n            .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){\n                color: #000;\n            }\n\n            .item-interactive.item-has-focus{\n                --highlight-background: #000;\n            }\n\n            .forgot{\n                width: 100%;\n                height: auto;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n\n                a{\n                    font-size: .9em;\n                    color: #000;\n                    font-weight: 400;\n                    text-decoration: none;\n                    cursor: pointer;\n                    margin-top: 0rem;\n                    margin-bottom: 0rem;\n                    margin: 1.5em 0em;\n                    transition: .4s all ease-in-out;\n                }\n                \n                a:hover{\n                    color: #14A8CD;\n                }\n            }\n        }\n    }\n}\n\n.loginDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.loginDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}\n\n@media(min-width: 992px){\n    .loginDesk{\n        display: flex;\n    }\n\n    ion-content{\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 25359:
/*!****************************************************************************!*\
  !*** ./src/app/pages/modal-recuperar/modal-recuperar.page.scss?ngResource ***!
  \****************************************************************************/
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

.cont {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  -webkit-backdrop-filter: blur(50px);
          backdrop-filter: blur(50px);
}

ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-card {
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
ion-card .where {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
ion-card .where a {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 600;
  color: #000;
}
ion-card .where a span {
  display: inline-block;
  border-bottom: 3px solid #14A8CD;
  padding-bottom: 0.5rem;
}
ion-card .where #regis {
  font-weight: 600;
  color: #14A8CD;
}
ion-card img {
  width: 60%;
  padding: 1rem;
}
ion-card form {
  width: 100%;
  height: auto;
}
ion-card ion-item {
  --ion-item-background: none !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
ion-card ion-button {
  height: 4rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  --background: #14A8CD;
  color: #fff;
}
ion-card ion-button:hover {
  --background: #14A8CD!important;
  color: #fff;
  transition: 1s;
}
ion-card ion-input {
  color: #000;
  font-weight: 600;
}
ion-card ion-label {
  color: #000;
  font-weight: 600;
}
ion-card .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color) {
  color: #000;
}
ion-card .item-interactive.item-has-focus {
  --highlight-background: #000;
}
ion-card .forgot {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-card .forgot a {
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

.mod {
  --background: black;
}

#closeModal {
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

@media (min-width: 992px) {
  ion-card {
    width: 30em;
  }
  ion-card img {
    width: 15em;
  }
  ion-card ion-label {
    font-weight: 100;
    font-size: 0.9em;
  }
  ion-card ion-button {
    height: 4em;
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
    letter-spacing: 0rem;
    font-weight: 400;
    --background: #14A8CD;
    color: #fff;
  }
  #closeModal {
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin: 1em 0em;
    font-weight: 100;
    font-size: 1.2em;
  }
}
.inps {
  width: 100%;
  height: 2.5rem;
  background: rgb(235, 244, 247);
  text-indent: 1rem;
  border-radius: 5rem;
  border: 1px solid rgb(0, 163, 197);
  margin-bottom: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/modal-recuperar/modal-recuperar.page.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mCAAA;UAAA,2BAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uLAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AACR;AACQ;EACI,eAAA;EACA,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;AACZ;AACY;EACI,qBAAA;EACA,gCAAA;EACA,sBAAA;AAChB;AAGQ;EACI,gBAAA;EACA,cAAA;AADZ;AAKI;EACI,UAAA;EACA,aAAA;AAHR;AAMI;EACI,WAAA;EACA,YAAA;AAJR;AAOI;EACI,sCAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AALR;AASI;EACI,YAAA;EACA,iCAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,WAAA;AAPR;AAUI;EACI,+BAAA;EACA,WAAA;EACA,cAAA;AARR;AAWI;EACI,WAAA;EACA,gBAAA;AATR;AAYI;EACI,WAAA;EACA,gBAAA;AAVR;AAaI;EACI,WAAA;AAXR;AAcI;EACI,4BAAA;AAZR;AAeI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAbR;AAeQ;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAbZ;;AAkBA;EACI,mBAAA;AAfJ;;AAkBA;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAfJ;;AAkBA;EACI;IACI,WAAA;EAfN;EAiBM;IACI,WAAA;EAfV;EAkBM;IACI,gBAAA;IACA,gBAAA;EAhBV;EAmBM;IACI,WAAA;IACA,iCAAA;IACA,gBAAA;IACA,oBAAA;IACA,gBAAA;IACA,qBAAA;IACA,WAAA;EAjBV;EAqBE;IACI,gBAAA;IACA,mBAAA;IACA,eAAA;IACA,gBAAA;IACA,gBAAA;EAnBN;AACF;AAsBA;EACI,WAAA;EACA,cAAA;EACA,8BAAA;EACA,iBAAA;EACA,mBAAA;EACA,kCAAA;EACA,qBAAA;AApBJ","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n}\n\n.cont{ \n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    backdrop-filter: blur(50px);\n}\n\nion-content{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nion-card{\n    background: #fdfdfd;//     #fdfdfd            #14A8CD\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    .where{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: row;\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n\n        a{\n            font-size: 1rem;\n            font-family: 'Roboto', sans-serif;\n            text-decoration: none;\n            font-weight: 600;\n            color: #000;\n\n            span{\n                display:inline-block;\n                border-bottom: 3px solid #14A8CD;\n                padding-bottom: .5rem;\n            }\n        }\n\n        #regis{\n            font-weight: 600;\n            color: #14A8CD;\n        }\n    }\n\n    img{\n        width: 60%;\n        padding: 1rem;\n    }\n\n    form{\n        width: 100%;\n        height: auto;\n    }\n\n    ion-item{\n        --ion-item-background: none !important;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        padding-left: 2rem;\n        padding-right: 2rem;\n        \n    }\n\n    ion-button{\n        height: 4rem;\n        font-family: 'Roboto', sans-serif;\n        font-size: .8rem;\n        letter-spacing: .1rem;\n        font-weight: 600;\n        --background: #14A8CD;\n        color: #fff;\n    }\n\n    ion-button:hover{\n        --background: #14A8CD!important;\n        color: #fff;\n        transition: 1s;\n    }\n\n    ion-input{\n        color: #000;\n        font-weight: 600;\n    }\n\n    ion-label{\n        color: #000;\n        font-weight: 600;\n    }\n\n    .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){\n        color: #000;\n    }\n\n    .item-interactive.item-has-focus{\n        --highlight-background: #000;\n    }\n\n    .forgot{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        a{\n            font-size: 1rem;\n            margin-top: 1rem;\n            margin-bottom: 1rem;\n            color: #000;\n            font-weight: 600;\n            text-decoration: none;\n            cursor: pointer;\n        }\n    }\n}\n\n.mod{\n    --background: black;\n}\n\n#closeModal{\n    font-size: 1.2rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    color: #000;\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n@media(min-width: 992px){\n    ion-card{\n        width: 30em;\n\n        img{\n            width: 15em;\n        }\n\n        ion-label{\n            font-weight: 100;\n            font-size: .9em;\n        }\n\n        ion-button{\n            height: 4em;\n            font-family: \"Roboto\", sans-serif;\n            font-size: 0.9em;\n            letter-spacing: 0rem;\n            font-weight: 400;\n            --background: #14A8CD;\n            color: #fff;\n        }\n    }\n\n    #closeModal{\n        margin-top: 0rem;\n        margin-bottom: 0rem;\n        margin: 1em 0em;\n        font-weight: 100;\n        font-size: 1.2em;\n    }\n}\n\n.inps{\n    width: 100%;\n    height: 2.5rem;\n    background:   rgb(235, 244, 247);\n    text-indent: 1rem;\n    border-radius: 5rem;\n    border: 1px solid rgb(0 163 197);\n    margin-bottom: .5rem;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 36976:
/*!**************************************************************************!*\
  !*** ./src/app/pages/modal-registro/modal-registro.page.scss?ngResource ***!
  \**************************************************************************/
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

.cont {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  -webkit-backdrop-filter: blur(50px);
          backdrop-filter: blur(50px);
}

ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-card {
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
ion-card .where {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
ion-card .where a {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  font-weight: 600;
  color: #000;
}
ion-card .where a span {
  display: inline-block;
  border-bottom: 3px solid #14A8CD;
  padding-bottom: 0.5rem;
}
ion-card .where #regis {
  font-weight: 600;
  color: #14A8CD;
}
ion-card img {
  width: 60%;
  padding: 1rem;
}
ion-card form {
  width: 100%;
  height: auto;
}
ion-card .error {
  color: red;
  font-size: 1rem;
  font-weight: bolder;
}
ion-card .correcto {
  color: green;
  font-size: 1rem;
  font-weight: bolder;
}
ion-card ion-item {
  --ion-item-background: none !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
ion-card ion-button {
  height: 4rem;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  --background: #14A8CD;
  color: #fff;
}
ion-card ion-button:hover {
  --background: #14A8CD!important;
  color: #fff;
  transition: 1s;
}
ion-card ion-input {
  color: #000;
  font-weight: 600;
  /*--placeholder-color: #000;
  --placeholder-weight: 600;*/
}
ion-card .custom-placeholder {
  color: #000;
  font-size: 1.1rem;
  font-weight: bolder;
}
ion-card ion-label {
  color: black;
  font-weight: 600;
}
ion-card .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color) {
  color: #000;
}
ion-card .item-interactive.item-has-focus {
  --highlight-background: #000;
}
ion-card .forgot {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
ion-card .forgot a {
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}
ion-card ion-text {
  color: #000;
}
ion-card ion-list {
  background: none !important;
}
ion-card ion-list ion-item {
  --background: none !important;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 0;
  padding-right: 0;
}
ion-card ion-list ion-item ion-checkbox {
  width: 1.2rem;
  height: 1.2rem;
  --border-radius: .6rem;
  text-align: center;
}
ion-card ion-list ion-item ion-label {
  margin-left: 1rem;
  white-space: normal !important;
  text-align: center;
}

.mod {
  --background: black;
}

#closeModal {
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}

@media (min-width: 992px) {
  ion-card {
    width: 30em;
  }
  ion-card form ion-item {
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin: 1em 0em;
  }
  ion-card form ion-item ion-toggle {
    padding: 1em 0em;
  }
  ion-card form ion-item ion-label {
    font-weight: 100;
    font-size: 0.9em;
  }
  ion-card ion-list .vrp {
    text-decoration: none;
    font-size: 1.1em;
  }
  ion-card ion-button {
    height: 4em;
    font-family: "Roboto", sans-serif;
    font-size: 0.9em;
    /* letter-spacing: 0.1rem; */
    font-weight: 100;
    --background: #14A8CD;
    color: #fff;
  }
  ion-card ion-text h1 {
    font-size: 1.7em;
    font-weight: 100;
  }
  ion-card .forgot #closeModal {
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin: 1em 0em;
    transition: 0.4s all ease-in-out;
    font-size: 1.1em;
  }
  ion-card .forgot #closeModal:hover {
    color: #14A8CD;
  }
}
.modalRecuperarCss::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.modalRecuperarCss::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/modal-registro/modal-registro.page.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,SAAA;AACJ;;AAEA;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mCAAA;UAAA,2BAAA;AACJ;;AAEA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,uLAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;AACR;AACQ;EACI,eAAA;EACA,iCAAA;EACA,qBAAA;EACA,gBAAA;EACA,WAAA;AACZ;AACY;EACI,qBAAA;EACA,gCAAA;EACA,sBAAA;AAChB;AAGQ;EACI,gBAAA;EACA,cAAA;AADZ;AAKI;EACI,UAAA;EACA,aAAA;AAHR;AAMI;EACI,WAAA;EACA,YAAA;AAJR;AAOI;EACI,UAAA;EACA,eAAA;EACA,mBAAA;AALR;AAQI;EACI,YAAA;EACA,eAAA;EACA,mBAAA;AANR;AASI;EACI,sCAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AAPR;AAWI;EACI,YAAA;EACA,iCAAA;EACA,iBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,WAAA;AATR;AAYI;EACI,+BAAA;EACA,WAAA;EACA,cAAA;AAVR;AAaI;EACI,WAAA;EACA,gBAAA;EAEA;6BAAA;AAXR;AAeI;EACI,WAAA;EACA,iBAAA;EACA,mBAAA;AAbR;AAgBI;EACI,YAAA;EACA,gBAAA;AAdR;AAiBI;EACI,WAAA;AAfR;AAkBI;EACI,4BAAA;AAhBR;AAmBI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAjBR;AAmBQ;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAjBZ;AAqBI;EACI,WAAA;AAnBR;AAsBI;EACI,2BAAA;AApBR;AAsBQ;EACI,6BAAA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AApBZ;AAsBY;EAEI,aAAA;EACA,cAAA;EACA,sBAAA;EACA,kBAAA;AArBhB;AAwBY;EACI,iBAAA;EACA,8BAAA;EACA,kBAAA;AAtBhB;;AA4BA;EACI,mBAAA;AAzBJ;;AA4BA;EACI,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;AAzBJ;;AA4BA;EACI;IACI,WAAA;EAzBN;EA4BU;IACI,gBAAA;IACA,mBAAA;IACA,eAAA;EA1Bd;EA4Bc;IACI,gBAAA;EA1BlB;EA6Bc;IACI,gBAAA;IACA,gBAAA;EA3BlB;EAiCU;IACI,qBAAA;IACA,gBAAA;EA/Bd;EAmCM;IACI,WAAA;IACA,iCAAA;IACA,gBAAA;IACA,4BAAA;IACA,gBAAA;IACA,qBAAA;IACA,WAAA;EAjCV;EAqCU;IACI,gBAAA;IACA,gBAAA;EAnCd;EAwCU;IACI,gBAAA;IACA,mBAAA;IACA,eAAA;IACA,gCAAA;IACA,gBAAA;EAtCd;EAyCU;IACI,cAAA;EAvCd;AACF;AA4CA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AA1CJ;;AA6CA;EACI,iDAAA;EAEA,aAAA;AA3CJ","sourcesContent":["*{\n    padding: 0;\n    margin: 0;\n}\n\n.cont{ \n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    backdrop-filter: blur(50px);\n}\n\nion-content{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nion-card{\n    background: #fdfdfd;//     #fdfdfd            #14A8CD\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n    \n    .where{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: row;\n        margin-top: 2rem;\n        margin-bottom: 1rem;\n\n        a{\n            font-size: 1rem;\n            font-family: 'Roboto', sans-serif;\n            text-decoration: none;\n            font-weight: 600;\n            color: #000;\n\n            span{\n                display:inline-block;\n                border-bottom: 3px solid #14A8CD;\n                padding-bottom: .5rem;\n            }\n        }\n\n        #regis{\n            font-weight: 600;\n            color: #14A8CD;\n        }\n    }\n\n    img{\n        width: 60%;\n        padding: 1rem;\n    }\n\n    form{\n        width: 100%;\n        height: auto;\n    }\n\n    .error{\n        color: red;\n        font-size: 1rem;\n        font-weight: bolder;\n    }\n\n    .correcto{\n        color: green;\n        font-size: 1rem;\n        font-weight: bolder;\n    }\n\n    ion-item{\n        --ion-item-background: none !important;\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        padding-left: 2rem;\n        padding-right: 2rem;\n        \n    }\n\n    ion-button{\n        height: 4rem;\n        font-family: 'Roboto', sans-serif;\n        font-size: .8rem;\n        letter-spacing: .1rem;\n        font-weight: 600;\n        --background: #14A8CD;\n        color: #fff;\n    }\n\n    ion-button:hover{\n        --background: #14A8CD!important;\n        color: #fff;\n        transition: 1s;\n    }\n\n    ion-input{\n        color: #000;\n        font-weight: 600;\n\n        /*--placeholder-color: #000;\n        --placeholder-weight: 600;*/\n    }\n\n    .custom-placeholder{\n        color: #000;\n        font-size: 1.1rem;\n        font-weight: bolder;\n    }\n\n    ion-label{\n        color: black;\n        font-weight: 600;\n    }\n\n    .item-has-focus .label-floating.sc-ion-label-md-h:not(.ion-color){\n        color: #000;\n    }\n\n    .item-interactive.item-has-focus{\n        --highlight-background: #000;\n    }\n\n    .forgot{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        a{\n            font-size: 1rem;\n            margin-top: 1rem;\n            margin-bottom: 1rem;\n            color: #000;\n            font-weight: 600;\n            text-decoration: none;\n            cursor: pointer;\n        }\n    }\n\n    ion-text{\n        color: #000;\n    }\n\n    ion-list{\n        background: none!important;\n\n        ion-item{\n            --background: none !important;\n            margin-top: 2rem;\n            margin-bottom: 2rem;\n            padding-left: 0;\n            padding-right: 0;\n\n            ion-checkbox{\n                //border: 1.5px solid black;\n                width: 1.2rem;\n                height: 1.2rem;\n                --border-radius: .6rem;\n                text-align: center;\n            }\n\n            ion-label{\n                margin-left: 1rem;\n                white-space: normal !important;\n                text-align: center;\n            }\n        }\n    }\n}\n\n.mod{\n    --background: black;\n}\n\n#closeModal{\n    font-size: 1.2rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    color: #000;\n    font-weight: 600;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n@media(min-width: 992px){\n    ion-card{\n        width: 30em;\n\n        form{\n            ion-item{\n                margin-top: 0rem;\n                margin-bottom: 0rem;\n                margin: 1em 0em;\n\n                ion-toggle{\n                    padding: 1em 0em;\n                }\n\n                ion-label{\n                    font-weight: 100;\n                    font-size: .9em;\n                }\n            }\n        }\n\n        ion-list{\n            .vrp{\n                text-decoration: none;\n                font-size: 1.1em;\n            }\n        }\n\n        ion-button{\n            height: 4em;\n            font-family: \"Roboto\", sans-serif;\n            font-size: 0.9em;\n            /* letter-spacing: 0.1rem; */\n            font-weight: 100;\n            --background: #14A8CD;\n            color: #fff;\n        }\n\n        ion-text{\n            h1{\n                font-size: 1.7em;\n                font-weight: 100;\n            }\n        }\n\n        .forgot{\n            #closeModal{\n                margin-top: 0rem;\n                margin-bottom: 0rem;\n                margin: 1em 0em;\n                transition: .4s all ease-in-out;\n                font-size: 1.1em;\n            }\n\n            #closeModal:hover{\n                color: #14A8CD;\n            }\n        }\n    }\n}\n\n.modalRecuperarCss::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.modalRecuperarCss::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <div #hedin>\n  <ion-header [translucent]=\"true\" class=\"gorgori\">\n    <ion-toolbar color=\"secondary\" mode=\"md\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button color=\"light\" (click)=\"openSearchBar3()\"></ion-menu-button>\n      </ion-buttons>\n      <ion-title color=\"light\" slot=\"start\" class=\"name-client\"> {{nombre+\" \"+apellido}}</ion-title>\n      <!-- <ion-title class=\"ion-text-center\">\n        <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n      </ion-title> -->\n    \n      <ion-button\n    (click)=\"openSearchBar()\"\n    color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    id=\"cel-header\"\n   slot=\"end\"\n  >\n    <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-button>\n  \n      <!-- <ion-button color=\"secondary\"\n      class=\"ion-activable ripple-parent\"\n      slot=\"end\"\n      [routerLink]=\"['/perfil']\"\n      >\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      </ion-button> -->\n      <ion-button\n        slot=\"end\"\n        color=\"secondary\"\n        class=\"ion-activatable ripple-parent\"\n        [routerLink]=\"['/cart']\"\n      >\n        <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n        <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n        <ion-ripple-effect></ion-ripple-effect>\n      </ion-button>\n  \n    </ion-toolbar>\n    <div class=\"search_toggle\" style=\"background: transparent;\">\n      <div style=\"display: none;\" id=\"buscador\">\n        <!--<ion-toolbar color=\"secondary\" mode=\"md\">\n    \n          <ion-searchbar\n          *ngIf=\"searchbarVisible\"\n          spellcheck=\"true\"\n          style=\"text-align: initial; padding: 0; overflow: hidden;\"\n          showCancelButton=\"never\"\n          placeholder=\"Buscar\"\n          [(ngModel)]=\"txtBuscador\"\n          spellcheck=\"true\"\n          (keyup)=\"search($event)\"\n          mode=\"ios\"\n        ></ion-searchbar>\n          </ion-toolbar>-->\n        <div id=\"search_plugin\" *ngIf=\"searchbarVisible\">\n          <form method=\"get\" routerLinkActive=\"router-link-active\" > \n            <input type=\"text\" name=\"s\" placeholder=\"Busque en nuestro catalogo\"  id=\"pabuscar\" class=\"buscainp\" onkeyup=\"buscaleprevio(this,event)\" [(ngModel)]=\"txtBuscador\">\n            <input type=\"text\" name=\"p\" \tvalue=\"1\"  \t\tstyle=\"display: none;\">\n            <input type=\"text\" name=\"v\" \tvalue=\"12\" \t\tstyle=\"display: none;\">\n            <input type=\"text\" name=\"view\" \tvalue=\"list\" \tstyle=\"display: none;\">\n            <input type=\"text\" name=\"sort\" \tvalue=\"0\" \tstyle=\"display: none;\">\n            <button type=\"submit\" (click)=\"mevoy()\" ></button>\n          </form>\n        </div>\n      </div>\n      <div class=\"conten-abs\" *ngIf=\"txtBuscador != ''\">\n        <div class=\"container-fluid m-0 cuerpoPistas\" id=\"cuerpoPistas\" style=\"padding: 0px; display: block;\">\n          <div class=\"row m-0\" style=\"padding: 0px;background: transparent;\">\n            <div class=\"col-lg-12 col-xs-12 col-sm-12 m-lg-0 p-lg-0\" id=\"contenedorPistas\">\n              <!--  -->\n              <div class=\"card text-center text-dark\"  id=\"contResultadosPistas\" style=\"display: none;\" >\n                <div class=\"card-body\">\n                  <h1 class=\"txt-decir\" (click)=\"handlePistas()\"><div style=\"display: inline;\">Quiza quisiste decir:</div> <i class=\"fas fa-chevron-up ud1\" #ud1></i></h1>\n                  <div id=\"resultadosPistas\" class=\"text-left\" style=\"padding: 0px 15px 15px 15px;text-align: left;\">\n                    <div class=\"row container p-lg-0 m-lg-0 lasPistas\" id=\"lasPistas\" #pistasCont>\n    \n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--  -->\n            </div>\n          </div>\n        </div>\n        <div class=\"container-fluid m-0\" id=\"cuerpoBusqueda\" style=\"padding: 0px; display: none;\">\n          <div class=\"row m-0 dowi\" style=\"padding: 0px;background: transparent;\">\n            <div class=\"col-lg-12 col-xs-12 col-sm-12 m-lg-0 p-lg-0 lefti\" id=\"contenedorFiltros\" style=\"display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: .3em;\">\n              <div class=\"card text-center text-dark\"  id=\"contResultadosMarcas\" #cardMarcas>\n                <div class=\"card-body\">\n                  <p class=\"taitl-filt\" (click)=\"handleCard1()\">Marcas <i class=\"fas fa-chevron-up\" style=\"margin-left:10px\" #ud2></i></p>\n                  <div id=\"resultadosMarcas\" class=\"text-left lista\" style=\"padding:0px 15px;text-align: left;\"></div>\n                </div>\n              </div>\n              <!-- <div class=\"card text-center text-dark\"  id=\"contResultadosCategorias\" #cardCategorias>\n                <div class=\"card-body\">\n                  <p class=\"taitl-filt\" (click)=\"handleCard2()\">Categorias <i class=\"fas fa-chevron-up\" style=\"margin-left:10px\" #ud3></i></p>\n                  <div id=\"resultadosCategorias\" class=\"text-left lista\"  style=\"padding:0px 15px;text-align: left;\"></div>\n                </div>\n              </div> -->\n            </div>\n            <div class=\"col-lg-12 col-xs-12 col-sm-12 rigti\"  id=\"padreResultados\" >\n              <div class=\"card text-center text-dark\">\n                <div class=\"card-body\">\n                  <p class=\"card-title text-uppercase result-taitl\" id=\"res-tit\" style=\"text-align: center;background: transparent;\">resultados</p>\n                  <ul class=\"ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all\" id=\"axbody\" tabindex=\"0\"></ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <!--<div *ngIf=\"txtBuscador != ''\"  style=\"z-index: 99; position:fixed; width: 100%;\">\n      <p class=\"line-filter\">{{numeroResultados}} productos encontrados</p>\n      \n      <div class=\"search-container\">\n        <ion-item\n          button\n           \n          *ngFor=\"let producto of resultadoBusqueda\" (click)=\"openSearchBar2(producto.item.id_product,producto.item.sku)\"\n        >\n          <ion-thumbnail slot=\"start\">\n            <img src=\"https://lideart.com.mx/{{producto.item.image_link}}\" />\n          </ion-thumbnail>\n          <ion-label>\n            <h3>{{producto.item.nombre}}</h3>\n            <p>\n              <span style=\"font-weight: lighter\">\n                SKU: {{producto.item.sku[0]}}\n              </span>\n            </p>\n            <b>${{producto.item.precio | number}}</b>\n          </ion-label>\n          <ion-icon name=\"eye\" style=\"color: #70c2d1\" slot=\"end\"></ion-icon>\n        </ion-item>\n      </div>\n    </div>-->\n  </ion-header>\n  </div>\n  \n\n  <ion-menu class=\"asideMenu\" side=\"start\" menuId=\"first\" contentId=\"main-content\">\n    <ion-header>\n      <img\n        src=\"/assets/img/logo-lide.png\"\n        class=\"menuLogo\"\n      />\n      <div style=\"background-color: rgb(57, 184, 235); padding: .5em 0em;\">\n        <ion-text color=\"light\" class=\"ion-text-center\" >\n          <p style=\"margin-top:10px ;\" *ngIf=\"usuario\">{{nombre+\" \"+apellido}}\n            {{usuario.usuario}}</p>\n          </ion-text>\n              <ion-grid>\n                <ion-row *ngIf=\"usuario\">\n                  <ion-col class=\"ion-text-center\" >\n                    <img src=\"/assets/img/iconosMenu/Boton-Cuenta.png\" height=\"20x\" width=\"20px\">\n                  </ion-col>\n                  <ion-col >\n                    <a style=\"color:white;text-decoration: none;font-size: 12px;\" [routerLink]=\"['/perfil', 0]\" (click)=\"closen()\">Ver Cuenta</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"usuario\">\n                  <ion-col class=\"ion-text-center\">\n                    <ion-icon name=\"apps-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col>\n                    <a style=\"color:white;text-decoration: none;font-size: 12px;\" [routerLink]=\"['/perfil', 1]\" (click)=\"closen()\">Lidepuntos</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"usuario\">\n                  <ion-col class=\"ion-text-center\">\n                    <ion-icon name=\"albums-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col>\n                    <a style=\"color:white;text-decoration: none;font-size: 12px;\" [routerLink]=\"['/perfil', 2]\" (click)=\"closen()\">Historial de pedidos</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col class=\"ion-text-center\">\n                    <ion-icon name=\"cart-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col>\n                    <a style=\"color:white;text-decoration: none;font-size: 12px;\" routerLink=\"/cart\" (click)=\"closen()\">Ver Carrito</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"usuario\">\n                  <ion-col class=\"ion-text-center\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col>\n                    <a style=\"color:white;text-decoration: none; font-size: 12px;\" (click)=\"close()\">Cerrar Sesión</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"!usuario\">\n                  <ion-col class=\"ion-text-center\">\n                    <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                  </ion-col>\n                  <ion-col>\n                    <a style=\"color:white;text-decoration: none; font-size: 12px;\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" (click)=\"closen()\">Iniciar Sesión</a>\n                  </ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n              </ion-grid>\n                \n               \n              <!-- <li>Ver Carrito</li>\n              <li>Cerrar Sesión</li> -->\n            \n          \n        \n      </div>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\">\n          <ion-item\n           \n            routerLink=\"/home\"\n            lines=\"none\"\n            detail=\"false\"\n       \n            \n          >\n           <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"/assets/img/iconosMenu/Boton-Inicio.png\" height=\"25px\" width=\"25px\">\n              </ion-col>\n              <ion-col >\n                <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\" >Ir a Inicio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                </ion-label>\n              </ion-col>\n              <ion-col></ion-col>\n              \n            </ion-row>\n           </ion-grid>\n\n          </ion-item>\n\n\n\n          <ion-item\n           \n            routerLink=\"/categorias\"\n            lines=\"none\"\n            detail=\"false\"\n         \n           \n          >\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"/assets/img/iconosMenu/Boton-Categorias.png\" height=\"25px\" width=\"25px\">\n              </ion-col>\n              <ion-col >\n                <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Categorías de productos </ion-label>\n              </ion-col>\n              <ion-col></ion-col>\n            \n            </ion-row>\n           </ion-grid>\n          </ion-item>\n\n          <ion-item\n          \n            routerLink=\"/promociones\"\n            lines=\"none\"\n            detail=\"false\"\n     \n          >\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <img src=\"/assets/img/iconosMenu/Boton-Promociones.png\" height=\"25px\" width=\"25px\">\n                </ion-col>\n                <ion-col>\n                  <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Ver promociones &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                    </ion-label>\n                </ion-col>\n                <ion-col></ion-col>\n                \n              </ion-row>\n            </ion-grid>\n          </ion-item>\n\n          <ion-item\n           \n            routerLink=\"/wishlist\"\n            lines=\"none\"\n            detail=\"false\"\n            *ngIf=\"usuario\"\n          >\n          <ion-grid>\n            <ion-row>\n              <ion-col style=\"padding: 0px\">\n                <img src=\"/assets/img/iconosMenu/Boton-Wishlist.png\" height=\"25px\" width=\"25px\">\n              </ion-col>\n              <ion-col>\n                <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Mi lista de deseos &nbsp;&nbsp;</ion-label>\n              </ion-col>\n              <ion-col></ion-col>\n              \n            </ion-row>\n           </ion-grid>\n          </ion-item>\n\n        <ion-item\n        \n        routerLink=\"/blog\"\n        lines=\"none\"\n        detail=\"false\"\n       \n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"/assets/img/iconosMenu/Boton-Blog.png\" height=\"25px\" width=\"25px\">\n          </ion-col>\n          <ion-col>\n            <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Ir a blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n          </ion-col>\n          <ion-col></ion-col>\n          \n        </ion-row>\n       </ion-grid>\n      </ion-item>\n\n      <ion-item\n     \n      routerLink=\"/faq\"\n      lines=\"none\"\n      detail=\"false\"\n \n    >\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!--<img src=\"/assets/img/iconosMenu/Lidepuntos.webp\" height=\"25px\" width=\"25px\">-->\n          <ion-icon name=\"help\" style=\"color: #00abcf; font-size: 1.6em;\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Preguntas frecuentes</ion-label>\n        </ion-col>\n        <ion-col></ion-col>\n        \n      </ion-row>\n     </ion-grid>\n    </ion-item>\n\n\n\n  <ion-item\n\n  routerLink=\"/lidepuntos\"\n  lines=\"none\"\n  detail=\"false\"\n \n>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <!--<img src=\"/assets/img/iconosMenu/Lidepuntos.webp\" height=\"25px\" width=\"25px\">-->\n      <i class=\"fa-solid fa-trophy\" style=\"color: #00abcf; font-size: 1.6em;\"></i>\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Lidepuntos&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n    </ion-col>\n    <ion-col></ion-col>\n      \n  </ion-row>\n  </ion-grid>\n  \n  </ion-item>\n\n\n  <ion-item lines=\"none\" detail=\"false\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!--<img src=\"/assets/img/iconosMenu/Lidepuntos.webp\" height=\"25px\" width=\"25px\"> -->\n          <ion-icon name=\"briefcase\" style=\"color: #00abcf; font-size: 1.6em;\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <a href=\"https://lideart.com.mx/content/7-politica-de-privacidad\" target=\"blank\" style=\"font-size: 12px; color: rgb(57, 184, 235); text-decoration: none;\">Políticas&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n        </ion-col>\n        <ion-col></ion-col>\n          \n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item lines=\"none\"\n  routerLink=\"/reviews\"\n  detail=\"false\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!--<img src=\"/assets/img/iconosMenu/Lidepuntos.webp\" height=\"25px\" width=\"25px\"> -->\n          <ion-icon name=\"happy\" style=\"color: #00abcf; font-size: 1.6em;\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <a target=\"blank\" style=\"font-size: 12px; color: rgb(57, 184, 235); text-decoration: none;\">Reviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n        </ion-col>\n        <ion-col></ion-col>\n          \n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  <ion-item lines=\"none\"\n  routerLink=\"/chat\"\n  detail=\"false\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <!--<img src=\"/assets/img/iconosMenu/Lidepuntos.webp\" height=\"25px\" width=\"25px\">--> \n          <ion-icon name=\"chatbox\" style=\"color: #00abcf; font-size: 1.6em;\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <a target=\"blank\" style=\"font-size: 12px; color: rgb(57, 184, 235); text-decoration: none;\">Chat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>\n        </ion-col>\n        <ion-col></ion-col>\n          \n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n  <ion-item\n\n>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <img src=\"/assets/img/iconosMenu/Boton-Ayuda.png\" height=\"25px\" width=\"25px\">\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\"><a href=\"https://soporte.craftroom.mx/\" target=\"_blank\">Soporte</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </ion-label>\n    </ion-col>\n    <ion-col></ion-col>\n    \n  </ion-row>\n </ion-grid>\n \n</ion-item>\n\n<ion-item\n\n>\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <img src=\"/assets/img/iconosMenu/Boton-Ayuda.png\" height=\"25px\" width=\"25px\">\n    </ion-col>\n    <ion-col>\n      <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\"><a href=\"https://lideart.com.mx/contact-form/formulario-de-contacto\" target=\"_blank\">Contacto</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </ion-label>\n    </ion-col>\n    <ion-col></ion-col>\n    \n  </ion-row>\n </ion-grid>\n \n</ion-item>\n\n\n          <!-- <ion-item\n            routerDirection=\"root\"\n            routerLink=\"/cart\"\n            lines=\"none\"\n            detail=\"false\"\n            routerLinkActive=\"selected\"\n          >\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <img src=\"/assets/img/iconosMenu/Boton-Promociones.png\" height=\"25px\" width=\"25px\">\n              </ion-col>\n              <ion-col>\n                <ion-label>Ver Promociones&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n              </ion-col>\n              <ion-col></ion-col>\n              \n            </ion-row>\n           </ion-grid>\n          </ion-item> -->\n\n\n\n          <!-- <ion-item\n          routerDirection=\"root\"\n          lines=\"none\"\n          detail=\"false\"\n          routerLinkActive=\"selected\"\n        >\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/img/iconosMenu/Boton-Blog.png\" height=\"25px\" width=\"25px\">\n            </ion-col>\n            <ion-col>\n              <ion-label >Ir a Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              </ion-label>\n            </ion-col>\n            <ion-col></ion-col>\n          \n          </ion-row>\n         </ion-grid>\n        </ion-item> -->\n\n\n\n\n        <!-- <ion-item\n        routerDirection=\"root\"\n        lines=\"none\"\n        detail=\"false\"\n        routerLinkActive=\"selected\"\n      >\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src=\"/assets/img/iconosMenu/Boton-Preguntas.png\" height=\"25px\" width=\"25px\">\n          </ion-col>\n          <ion-col>\n            <ion-label>Preguntas Frecuentes\n            </ion-label>\n          </ion-col>\n          <ion-col></ion-col>\n         \n        </ion-row>\n       </ion-grid>\n      </ion-item> -->\n\n\n      <!-- <ion-item\n      routerDirection=\"root\"\n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"/assets/img/iconosMenu/Boton-Soporte.png\" height=\"25px\" width=\"25px\">\n        </ion-col>\n        <ion-col>\n          <ion-label>Soporte&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          </ion-label>\n        </ion-col>\n        <ion-col></ion-col>\n      \n      </ion-row>\n     </ion-grid>\n    </ion-item> -->\n\n    \n    <!-- <ion-item\n    routerDirection=\"root\"\n    lines=\"none\"\n    detail=\"false\"\n    routerLinkActive=\"selected\"\n  >\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img src=\"/assets/img/iconosMenu/Boton-Ayuda.png\" height=\"25px\" width=\"25px\">\n      </ion-col>\n      <ion-col>\n        <ion-label>Ayuda&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        </ion-label>\n      </ion-col>\n      <ion-col></ion-col>\n   \n    </ion-row>\n   </ion-grid>\n  </ion-item> -->\n\n\n\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer>\n      <!-- <ion-item\n      routerDirection=\"root\"\n      routerLink=\"/blog\"\n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <img src=\"/assets/img/iconosMenu/Boton-Blog.png\" height=\"25px\" width=\"25px\">\n        </ion-col>\n        <ion-col>\n          <ion-label style=\"font-size: 12px; color: rgb(57, 184, 235);\">Ayuda &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ion-label>\n        </ion-col>\n        <ion-col></ion-col>\n        \n      </ion-row>\n     </ion-grid>\n    </ion-item> -->\n    </ion-footer>\n  </ion-menu>\n\n\n  <div class=\"loader\" *ngIf=\"cargando\">\n    <img src=\"/assets/img/loadersillo.gif\">\n  </div>\n\n  <ion-router-outlet id=\"first\" id=\"main-content\"></ion-router-outlet>\n\n  <section class=\"chat-cont\">\n    <i class=\"fa-solid fa-comments\"></i>\n  </section>\n</ion-app>\n\n<script type=\"text/javascript\" charset=\"utf-8\" async defer>\n\n  \n\tfunction escondeHijos(hijo1, hijo2, padre){\n\t\n\t\tif(hijo2 != \"\"){\n\t\t\tpadre.children[0].className = (document.getElementById(hijo2).style.display == 'none'?'fas fa-chevron-up':'fas fa-chevron-down')\n\t\t\tdocument.getElementById(hijo2).style.display = (document.getElementById(hijo2).style.display == 'none'?'block':'none')\n\t\t\tif(document.getElementById('resultadosMarcas').style.display != \"none\"){\n\t\t\t\tdocument.getElementById('contResultadosMarcas').children[0].children[0].click()\n\t\t\t}\n\t\t\tif(document.getElementById('resultadosCategorias').style.display != \"none\"){\n\t\t\t\tdocument.getElementById('contResultadosCategorias').children[0].children[0].click()\n\t\t\t}\n\t\t}else{\n\t\t\tpadre.children[1].className = (document.getElementById(hijo1).style.display == 'none'?'fas fa-chevron-up':'fas fa-chevron-down')\n\t\t}\n\t\tdocument.getElementById(hijo1).style.display = (document.getElementById(hijo1).style.display == 'none'?'block':'none')\n\t}\n\tif(window.outerWidth < 769){\n\t\tescondeHijos('contResultadosMarcas','contResultadosCategorias',document.getElementById('tituloFiltros'))\n\t}else{\n\t\tdocument.getElementById('contResultadosMarcas').children[0].children[0].click()\n\t\tdocument.getElementById('contResultadosCategorias').children[0].children[0].click()\n\t}\n</script>";

/***/ }),

/***/ 6883:
/*!******************************************************************************!*\
  !*** ./src/app/components/desk-footer/desk-footer.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"footer-desk\">\n  <div class=\"reds-cont\">\n    <div class=\"cont-rs\">\n      <a class=\"redin\" href=\"https://www.facebook.com/Lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-facebook-f\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://twitter.com/lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-twitter\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.instagram.com/lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-instagram\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://ar.linkedin.com/company/lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-linkedin-in\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.pinterest.com.mx/lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-pinterest-p\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.youtube.com/c/Lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-youtube\"></i>\n      </a>\n      <a class=\"redin\" [routerLink]=\"['/reviews']\" routerLinkActive=\"router-link-active\" >\n        <i class=\"fa-solid fa-comment\"></i>\n      </a>\n    </div>\n  </div>\n  <div class=\"rest-cont\">\n    <span class=\"warn\">Todos los precios ya incluyen IVA</span>\n    <div class=\"col-cont\">\n      <div class=\"colt\">\n        <span class=\"titl\">PRODUCTOS</span>\n        <a [routerLink]=\"['/lidepuntos']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Lidepuntos</a>\n        <a [routerLink]=\"['/catalogo/123']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Productos en oferta</a>\n        <a [routerLink]=\"['/categoria/10']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Productos</a>\n        <a [routerLink]=\"['/categoria/11']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Marcas</a>\n        <a [routerLink]=\"['/categoria/12']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Técnicas</a>\n        <a [routerLink]=\"['/paquetes']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Paquetes</a>\n      </div>\n      <div class=\"colt\">\n        <span class=\"titl\">NUESTRA EMPRESA</span>\n        <a [routerLink]=\"['/terminos-politicas', 1]\" routerLinkActive=\"router-link-active\" class=\"linka\">Terminos de servicio</a>\n        <a [routerLink]=\"['/terminos-politicas', 2]\" routerLinkActive=\"router-link-active\" class=\"linka\">Política de reembolso</a>\n        <a [routerLink]=\"['/terminos-politicas', 3]\" routerLinkActive=\"router-link-active\" class=\"linka\">Política de privacidad</a>\n        <a [routerLink]=\"['/terminos-politicas', 4]\" routerLinkActive=\"router-link-active\"  class=\"linka\">Política de envíos</a>\n        <a [routerLink]=\"['/terminos-politicas', 5]\" routerLinkActive=\"router-link-active\"  class=\"linka\">Política de Garantía</a>\n        <a [routerLink]=\"['/nosotros']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Nosotros</a>\n        <a [routerLink]=\"['/distribuidor']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Distribuidor</a>\n        <a [routerLink]=\"['/contacto']\" routerLinkActive=\"router-link-active\"  class=\"linka\">Contacto</a>\n      </div>\n      <div class=\"colt\">\n        <span class=\"titl\">INFORMACIÓN</span>\n        <a [routerLink]=\"['/terminos-politicas', 1]\" routerLinkActive=\"router-link-active\" class=\"linka\">Terminos de servicio</a>\n        <a [routerLink]=\"['/terminos-politicas', 2]\" routerLinkActive=\"router-link-active\" class=\"linka\">Política de reembolso</a>\n        <a [routerLink]=\"['/terminos-politicas', 3]\" routerLinkActive=\"router-link-active\" class=\"linka\">Política de privacidad</a>\n      </div>\n    </div>\n  </div>\n</section>";

/***/ }),

/***/ 39663:
/*!******************************************************************************!*\
  !*** ./src/app/components/desk-header/desk-header.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"desk-header\">\n  <div class=\"pagos-cont\">\n    <div class=\"first-cont\">\n      <div class=\"txt-cont\">\n        <span class=\"txt\">A PARTIR DE $2,000.00</span>\n        <span class=\"txt\">¡ENVIO GRATIS!</span>\n        <i class=\"fa-solid fa-truck trokita\"></i>\n      </div>\n    </div>\n    <div class=\"second-cont\">\n      <span class=\"prin\">3 MESES SIN INTERESES</span>\n      <span class=\"secon\">EN COMPRAS MAYORES A <strong>$3,000.00</strong> CON PAYPAL Y TARJETAS DE CRÉDITO</span>\n    </div>\n    <div class=\"third-cont\">\n      <span class=\"prin\">FORMAS DE PAGO</span>\n      <div class=\"contcarmov\">\n        <div class=\"mov\">\n          <div class=\"metodo-cont\">\n            <i class=\"fa-solid fa-credit-card grap\"></i>\n            <span class=\"txt\">TARJETA DE CRÉDITO Y DÉBITO</span>\n          </div>\n          <div class=\"metodo-cont\">\n            <i class=\"fa-brands fa-paypal grap\"></i>\n            <span class=\"txt\">PAY PAL</span>\n          </div>\n          <div class=\"metodo-cont\">\n            <i class=\"fa-solid fa-shop grap\"></i>\n            <span class=\"txt\">OXXO</span>\n          </div>\n          <div class=\"metodo-cont\">\n            <i class=\"fa-solid fa-money-bill-transfer grap\"></i>\n            <span class=\"txt\">TRANSFERENCIA</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"up\" #upMenu>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" >\n      <img src=\"assets/img/logo-lide.png\" alt=\"\" class=\"loguin\">\n    </a>\n    <div class=\"nav-opcs-cont\">\n      <a [routerLink]=\"['/categoria/10']\" routerLinkActive=\"router-link-active\"  class=\"opi\">PRODUCTOS</a>\n      <a [routerLink]=\"['/categoria/11']\" routerLinkActive=\"router-link-active\"  class=\"opi\">MARCAS</a>\n      <a [routerLink]=\"['/categoria/12']\" routerLinkActive=\"router-link-active\"  class=\"opi\">TÉCNICAS</a>\n      <a [routerLink]=\"['/paquetes']\" routerLinkActive=\"router-link-active\"  class=\"opi\">PAQUETES</a>\n      <a [routerLink]=\"['/catalogo-paquetes/1738']\" routerLinkActive=\"router-link-active\"  class=\"opi\">Pa'Quete Mandes Solo</a>\n      <!--<a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\"  class=\"opi tagin-mesrosa\">MES ROSA</a>\n      <a [routerLink]=\"['/catalogo/1419']\" routerLinkActive=\"router-link-active\"  class=\"opi tagin-halloween\"><i class=\"fa-solid fa-ghost grap\"></i> HALLOWEEN</a>-->\n      <a [routerLink]=\"['/catalogo/123']\" routerLinkActive=\"router-link-active\"  class=\"opi\">OUTLET</a>\n      <a [routerLink]=\"['/blog']\" routerLinkActive=\"router-link-active\"  class=\"opi\">BLOG</a>\n      <a [routerLink]=\"['/software-de-equipos']\" routerLinkActive=\"router-link-active\"  class=\"opi\">SOFTWARE DE EQUIPOS</a>\n      <a [routerLink]=\"['/distribuidor']\" routerLinkActive=\"router-link-active\"  class=\"opi\">DISTRIBUIDOR</a>\n      <a [routerLink]=\"['/lidepuntos']\" routerLinkActive=\"router-link-active\"  class=\"opi\">LIDEPUNTOS</a>\n      <a [routerLink]=\"['/cursos-gratis']\" routerLinkActive=\"router-link-active\"  class=\"opi\">CURSOS GRATIS</a>\n      <a [routerLink]=\"['/nosotros']\" routerLinkActive=\"router-link-active\"  class=\"opi\">NOSOTROS</a>\n      <a href=\"https://soporte.craftroom.mx/hc/es-419\" target=\"blank\" class=\"opi\">SOPORTE</a>\n      <a [routerLink]=\"['/contacto']\" routerLinkActive=\"router-link-active\"  class=\"opi\">CONTACTO</a>\n    </div>\n    <div class=\"nav-cont\">\n      <div class=\"tagin-conts\">\n        <div class=\"tagin-mesrosa\">\n          <span class=\"tag-txt\">Mes rosa</span>\n        </div>\n        <div class=\"tagin-halloween\">\n          <i class=\"fa-solid fa-ghost grap\"></i>\n          <span class=\"tag-txt\">Halloween</span>\n        </div>\n      </div>\n      <div class=\"btn-nav\" (click)=\"handleNav()\">\n        <div class=\"cros1\"></div>\n        <div class=\"cros2\"></div>\n        <div class=\"blankin-cont\">\n          <span class=\"blankin-txt\">Navegar</span>\n          <i class=\"fa-solid fa-sailboat blankin-icon\"></i>\n        </div>\n      </div>\n      <!--<div class=\"desp-cont\" #nav_cont>\n        <div class=\"fix\">\n          <a class=\"opc\">\n            PRODUCTOS\n          </a>\n          <a class=\"opc\">\n            MARCAS\n          </a>\n          <a class=\"opc\">\n            TÉCNICAS\n          </a>\n          <a class=\"opc\">\n            PAQUETES\n          </a>\n          <a class=\"opc\">\n            OUTLET\n          </a>\n          <a class=\"opc\">\n            BLOG\n          </a>\n          <a class=\"opc\">\n            SOFTWARE DE EQUIPOS\n          </a>\n          <a class=\"opc\">\n            DISTRIBUIDOR\n          </a>\n          <a class=\"opc\">\n            LIDEPUNTOS\n          </a>\n          <a class=\"opc\">\n            CURSOS GRATIS\n          </a>\n          <a class=\"opc\">\n            NOSOTROS\n          </a>\n          <a class=\"opc\">\n            SOPORTE\n          </a>\n          <a class=\"opc\">\n            CONTACTO\n          </a>\n        </div>\n      </div>-->\n    </div>\n    <div class=\"third-cont\">\n      <!-- Contenedor de buscador -->\n      <div class=\"busc-cont\">\n        <i class=\"fa-solid fa-magnifying-glass grapi\"></i>\n        <!-- <input type=\"text\" spellcheck=\"true\"\n        class=\"inp\"\n        showCancelButton=\"never\"\n        placeholder=\"Busque en nuestro catalogo\"\n        [(ngModel)]=\"txtBuscador\"\n        spellcheck=\"true\"\n        (keyup)=\"search($event)\"\n        mode=\"ios\"> -->\n\n\n\n<!-- NUEVOOOOOOOOOOOOOOOOOOOO PRUEBA BUSCADOR -->\n\n<div id=\"_desktop_search_plugin\" class=\"col-lg-4 col-xs-12 col-sm-12 search-widget\">\n\t<span class=\"search_button\"></span>\n\t<div class=\"search_toggle\" style=\"background: transparent;\">\n\t\t<div id=\"search_plugin\" >\n\t\t\t<form method=\"get\" routerLinkActive=\"router-link-active\" > \n\t\t\t\t<input type=\"text\" name=\"s\" placeholder=\"Busque en nuestro catalogo\"  id=\"pabuscar\" class=\"buscainp\" onkeyup=\"buscaleprevio(this,event)\" [(ngModel)]=\"txtBuscador\">\n\t\t\t\t<input type=\"text\" name=\"p\" \tvalue=\"1\"  \t\tstyle=\"display: none;\">\n\t\t\t\t<input type=\"text\" name=\"v\" \tvalue=\"12\" \t\tstyle=\"display: none;\">\n\t\t\t\t<input type=\"text\" name=\"view\" \tvalue=\"list\" \tstyle=\"display: none;\">\n\t\t\t\t<input type=\"text\" name=\"sort\" \tvalue=\"0\" \tstyle=\"display: none;\">\n\t\t\t\t<button type=\"submit\" (click)=\"mevoy()\" ></button>\n\t\t\t</form>\n\t\t</div>\n    <div class=\"conten-abs\" *ngIf=\"txtBuscador != ''\">\n      <div class=\"container-fluid m-0 cuerpoPistas\" id=\"cuerpoPistas\" style=\"padding: 0px; display: block;\">\n        <div class=\"row m-0\" style=\"padding: 0px;background: transparent;\">\n          <div class=\"col-lg-12 col-xs-12 col-sm-12 m-lg-0 p-lg-0\" id=\"contenedorPistas\">\n            <!--  -->\n            <div class=\"card text-center text-dark\"  id=\"contResultadosPistas\" style=\"display: none;\" >\n              <div class=\"card-body\">\n                <h1 class=\"txt-decir\" (click)=\"handlePistas()\"><div style=\"display: inline;\">Quiza quisiste decir:</div> <i class=\"fas fa-chevron-up ud1\" #ud1></i></h1>\n                <div id=\"resultadosPistas\" class=\"text-left\" style=\"padding: 0px 15px 15px 15px;text-align: left;\">\n                  <div class=\"row container p-lg-0 m-lg-0 lasPistas\" id=\"lasPistas\" #pistasCont>\n  \n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--  -->\n          </div>\n        </div>\n      </div>\n      <div class=\"container-fluid m-0\" id=\"cuerpoBusqueda\" style=\"padding: 0px; display: none;\">\n        <div class=\"row m-0 dowi\" style=\"padding: 0px;background: transparent;\">\n          <div class=\"col-lg-12 col-xs-12 col-sm-12 m-lg-0 p-lg-0 lefti\" id=\"contenedorFiltros\" style=\"display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: .3em;\">\n            <div class=\"card text-center text-dark\"  id=\"contResultadosMarcas\" #cardMarcas>\n              <div class=\"card-body\">\n                <p class=\"taitl-filt\" (click)=\"handleCard1()\">Marcas <i class=\"fas fa-chevron-up\" style=\"margin-left:10px\" #ud2></i></p>\n                <div id=\"resultadosMarcas\" class=\"text-left lista\" style=\"padding:0px 15px;text-align: left;\"></div>\n              </div>\n            </div>\n            <!-- <div class=\"card text-center text-dark\"  id=\"contResultadosCategorias\" #cardCategorias>\n              <div class=\"card-body\">\n                <p class=\"taitl-filt\" (click)=\"handleCard2()\">Categorias <i class=\"fas fa-chevron-up\" style=\"margin-left:10px\" #ud3></i></p>\n                <div id=\"resultadosCategorias\" class=\"text-left lista\"  style=\"padding:0px 15px;text-align: left;\"></div>\n              </div>\n            </div> -->\n          </div>\n          <div class=\"col-lg-12 col-xs-12 col-sm-12 rigti\"  id=\"padreResultados\" >\n            <div class=\"card text-center text-dark\">\n              <div class=\"card-body\">\n                <p class=\"card-title text-uppercase result-taitl\" id=\"res-tit\" style=\"text-align: center;background: transparent;\">resultados</p>\n                <ul class=\"ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all\" id=\"axbody\" tabindex=\"0\"></ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\t</div>\n</div>\n\n\n<!-- AQUI TERMINA LA PRUEBA DE BUSCADOR -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n        <!-- <div *ngIf=\"txtBuscador != ''\" class=\"encontrados-cont-desk\">\n          <p class=\"line-filter-desk\">{{numeroResultados}} productos encontrados</p>\n          <div class=\"search-container-desk\">\n            <ion-item\n              button\n              *ngFor=\"let producto of resultadoBusqueda\" (click)=\"openSearchBar2(producto.item.id_product,producto.item.sku)\"\n            >\n              <ion-thumbnail slot=\"start\">\n                <img src=\"https://lideart.com.mx/{{producto.item.image_link}}\" />\n              </ion-thumbnail>\n              <ion-label>\n                <h3>{{producto.item.nombre}}</h3>\n                <p>\n                  <span style=\"font-weight: lighter\">\n                    SKU: {{producto.item.sku[0]}}\n                  </span>\n                </p>\n                <b>${{producto.item.precio | number}}</b>\n              </ion-label>\n              <ion-icon name=\"eye\" style=\"color: #70c2d1\" slot=\"end\"></ion-icon>\n            </ion-item>\n          </div>\n        </div> -->\n       \n      </div> \n      <!-- Contenedor de buscador -->\n      <div class=\"oth-opts-cont\">\n        <div class=\"opt-cont\">\n          <i class=\"fa-solid fa-circle-user grapi-up\"></i>\n          <i class=\"fa-solid fa-angle-down grapi-down\"></i>\n          <div class=\"opts-acount-cont\">\n            <a *ngIf=\"!usuario\" [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\"  class=\"opas\">\n              <span><i class=\"fa-solid fa-right-to-bracket\"></i> Iniciar Sesión</span>\n            </a>\n            <a *ngIf=\"!usuario\" class=\"opas\" (click)=\"modalReg()\">\n              <span><i class=\"fa-solid fa-user-plus\"></i> Crear Cuenta</span>\n            </a>\n            <a *ngIf=\"usuario\" class=\"opas\" [routerLink]=\"['/perfil/0']\" routerLinkActive=\"router-link-active\" >\n              <span><i class=\"fa-solid fa-circle-user\"></i> Mi Cuenta</span>\n            </a>\n            <a *ngIf=\"usuario\" class=\"opas\" [routerLink]=\"['/wishlist']\" routerLinkActive=\"router-link-active\" >\n              <span><i class=\"fa-brands fa-gratipay\"></i> Wishlist</span>\n            </a>\n            <a *ngIf=\"usuario\" class=\"opas\" (click)=\"close()\">\n              <span><i class=\"fa-solid fa-circle-xmark\"></i> Cerrar sesión</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"opt-cont\" [routerLink]=\"['/cart']\" routerLinkActive=\"router-link-active\" >\n          <i class=\"fa-solid fa-bag-shopping grapi-up\"></i>\n          <span class=\"grapi-down\">{{totalItems}}</span>\n        </div>\n        <div *ngIf=\"usuario\" class=\"opt-cont\" [routerLink]=\"['/wishlist']\" routerLinkActive=\"router-link-active\" >\n          <i class=\"fa-solid fa-heart grapi-up\"></i>\n          <span class=\"grapi-down\">{{listaWishlist.length}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"down\">\n    <span class=\"horario\"><span>Horario Chihuahua:</span> <span>Lunes a Viernes: 8:00 am - 6:00 pm</span></span>\n    <div class=\"cont-rs\">\n      <a class=\"redin\" href=\"https://www.facebook.com/Lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-facebook-f\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://twitter.com/lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-twitter\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.instagram.com/lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-instagram\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://ar.linkedin.com/company/lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-linkedin-in\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.pinterest.com.mx/lideart/\" target=\"blank\">\n        <i class=\"fa-brands fa-pinterest-p\"></i>\n      </a>\n      <a class=\"redin\" href=\"https://www.youtube.com/c/Lideart\" target=\"blank\">\n        <i class=\"fa-brands fa-youtube\"></i>\n      </a>\n      <a class=\"redin\" [routerLink]=\"['/reviews']\" routerLinkActive=\"router-link-active\" >\n        <i class=\"fa-solid fa-comment\"></i>\n      </a>\n    </div>\n    <div class=\"infocont\">\n      <a href=\"https://web.whatsapp.com/send?l=en&phone=+526146051278\" target=\"blank\" class=\"opc\">\n        <i class=\"fa-brands fa-whatsapp\"></i>\n        <span>(614) 605 1278</span>\n      </a>\n      <a href=\"tel:+526144326122\" class=\"opc\">\n        <i class=\"fa-solid fa-phone\" style=\"font-size: .9em;\"></i>\n        <span>Tel (614) 432 6122</span>\n      </a>\n      <a href=\"tel:+526146051278\" class=\"opc\">\n        <i class=\"fa-solid fa-phone\" style=\"font-size: .9em;\"></i>\n        <span>Cel (614) 605 1278</span>\n      </a>\n      <a href=\"mailto:contacto@lideart.com.mx\" class=\"opc\">\n        <i class=\"fa-solid fa-envelope\"></i>\n        <span>contacto@lideart.com.mx</span>\n      </a>\n    </div>\n    <div class=\"info-cont\">\n      <span>Información de contacto <i class=\"fa-solid fa-caret-down\"></i></span>\n      <div class=\"opcs-cont\">\n        <a href=\"https://web.whatsapp.com/send?l=en&phone=+526146051278\" target=\"blank\" class=\"opc\">\n          <i class=\"fa-brands fa-whatsapp\"></i>\n          <span>(614) 605 1278</span>\n        </a>\n        <a href=\"tel:+526144326122\" class=\"opc\">\n          <i class=\"fa-solid fa-phone\" style=\"font-size: .9em;\"></i>\n          <span>(614) 432 6122</span>\n        </a>\n        <a href=\"tel:+526146051278\" class=\"opc\">\n          <i class=\"fa-solid fa-phone\" style=\"font-size: .9em;\"></i>\n          <span>(614) 605 1278</span>\n        </a>\n        <a href=\"mailto:contacto@lideart.com.mx\" class=\"opc\">\n          <i class=\"fa-solid fa-envelope\"></i>\n          <span>contacto@lideart.com.mx</span>\n        </a>\n        \n      </div>\n    </div>\n  </div>\n</section>\n\n\n<script type=\"text/javascript\" charset=\"utf-8\" async defer>\n\n  \n\tfunction escondeHijos(hijo1, hijo2, padre){\n\t\n\t\tif(hijo2 != \"\"){\n\t\t\tpadre.children[0].className = (document.getElementById(hijo2).style.display == 'none'?'fas fa-chevron-up':'fas fa-chevron-down')\n\t\t\tdocument.getElementById(hijo2).style.display = (document.getElementById(hijo2).style.display == 'none'?'block':'none')\n\t\t\tif(document.getElementById('resultadosMarcas').style.display != \"none\"){\n\t\t\t\tdocument.getElementById('contResultadosMarcas').children[0].children[0].click()\n\t\t\t}\n\t\t\tif(document.getElementById('resultadosCategorias').style.display != \"none\"){\n\t\t\t\tdocument.getElementById('contResultadosCategorias').children[0].children[0].click()\n\t\t\t}\n\t\t}else{\n\t\t\tpadre.children[1].className = (document.getElementById(hijo1).style.display == 'none'?'fas fa-chevron-up':'fas fa-chevron-down')\n\t\t}\n\t\tdocument.getElementById(hijo1).style.display = (document.getElementById(hijo1).style.display == 'none'?'block':'none')\n\t}\n\tif(window.outerWidth < 769){\n\t\tescondeHijos('contResultadosMarcas','contResultadosCategorias',document.getElementById('tituloFiltros'))\n\t}else{\n\t\tdocument.getElementById('contResultadosMarcas').children[0].children[0].click()\n\t\tdocument.getElementById('contResultadosCategorias').children[0].children[0].click()\n\t}\n</script>";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--<ion-header>\n  <ion-toolbar>\n    \n  </ion-toolbar>\n</ion-header>-->\n\n<section class=\"loginDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"contDesk\">\n    <ion-card class=\"cardi\">\n      <img src=\"assets/img/lideart_logo.png\" alt=\"Logo avance\">\n      <div class=\"where\">\n        <a><span>INICIAR SESIÓN</span></a>\n        <a (click)=\"modalReg()\" id=\"regis\">REGISTRARSE</a>\n      </div>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n        <ion-item>\n          <ion-label position=\"floating\">Correo Electrónico</ion-label>\n          <ion-input appAutofill formControlName=\"email\" type=\"email\" name=\"email\" autocomplete=\"email\" [(ngModel)]=\"email\" required email></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input appAutofill formControlName=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" [(ngModel)]=\"password\" required></ion-input>\n        </ion-item>\n        <ion-button type=\"submit\" expand=\"full\">ENTRAR</ion-button>\n      </form>\n      <div class=\"forgot\">\n        <a (click)=\"modalRec()\"> ¿ Olvidaste la contraseña ? </a>\n      </div>\n    </ion-card>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n  <div class=\"cont\">\n\n    <ion-card>\n\n      <img src=\"assets/img/lideart_logo.png\" alt=\"Logo avance\">\n\n      <div class=\"where\">\n        <a><span>INICIAR SESIÓN</span></a>\n        <a (click)=\"modalReg()\" id=\"regis\">REGISTRARSE</a>\n      </div>\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" novalidate>\n\n        <ion-item>\n          <ion-label position=\"floating\">Correo Electrónico</ion-label>\n          <ion-input appAutofill formControlName=\"email\" type=\"email\" name=\"email\" autocomplete=\"email\" [(ngModel)]=\"email\" required email></ion-input>\n          <!-- <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n            Email Obligatorio\n          </span> -->\n          <!-- <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n            Ingresa patrón correcto de Email\n          </span> -->\n          <!-- <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.email.errors?.required && !errorControl.email.errors?.pattern\">\n            Correcto\n          </span> -->\n        </ion-item>\n  \n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input appAutofill formControlName=\"password\" name=\"password\" type=\"password\" autocomplete=\"current-password\" [(ngModel)]=\"password\" required></ion-input>\n          <!-- <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n            Contraseña Obligatoria\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.pattern\">\n            Ingresa patrón correcto de contraseña\n          </span>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.password.errors?.required && !errorControl.password.errors?.pattern\">\n            Correcto\n          </span> -->\n        </ion-item>\n        \n        <ion-button type=\"submit\" expand=\"full\">ENTRAR</ion-button>\n  \n      </form>\n\n      <!--<div class=\"forgot\">\n        <a (click)=\"handleHead()\"> Entrar como invitado </a>\n      </div>-->\n\n      <div class=\"forgot\">\n        <a (click)=\"modalRec()\"> ¿ Olvidaste la contraseña ? </a>\n      </div>\n      \n    </ion-card>\n\n  </div>\n\n</ion-content>\n";

/***/ }),

/***/ 18500:
/*!****************************************************************************!*\
  !*** ./src/app/pages/modal-recuperar/modal-recuperar.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"modalRecuperarCss\">\n  <div class=\"cont\">\n\n    <ion-card>\n    \n      <img src=\"assets/img/lideart_logo.png\" alt=\"Logo avance\">\n    \n      <!--<div class=\"where\">\n        <a href=\"\"><span>INICIAR SESIÓN</span></a>\n        <a id=\"regis\" href=\"\">REGISTRARSE</a>\n      </div>-->\n    \n      <form>\n    \n        <ion-item>\n          <input class=\"inps\" type=\"text\" name=\"correito\" [(ngModel)]=\"correito\"  placeholder=\"Ingresa Correo\"> \n            <ion-input></ion-input>\n        </ion-item>\n              \n        <ion-button expand=\"full\" (click)=\"sendRequest()\">Recuperar cuenta</ion-button>\n      \n      </form>\n    \n      <div class=\"forgot\">\n        <a id=\"closeModal\" (click)=\"dismiss()\">Cerrar</a>\n      </div>\n          \n    </ion-card>\n    \n  </div>\n</ion-content>\n\n";

/***/ }),

/***/ 67485:
/*!**************************************************************************!*\
  !*** ./src/app/pages/modal-registro/modal-registro.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content class=\"modalRecuperarCss\">\n  <div class=\"cont\">\n\n    <ion-card>\n    \n      <img src=\"assets/img/lideart_logo.png\" alt=\"Logo avance\">\n    \n      <!--<div class=\"where\">\n        <a href=\"\"><span>INICIAR SESIÓN</span></a>\n        <a id=\"regis\" href=\"\">REGISTRARSE</a>\n      </div>-->\n\n      <ion-text>\n        <h1>Crea tu cuenta</h1>\n      </ion-text>\n    \n      <form [formGroup]=\"regisForm\" (ngSubmit)=\"register()\" novalidate>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Nombre</ion-label>\n          <ion-input formControlName=\"nombre\" type=\"text\"></ion-input>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.required\">\n            Nombre obligatorio.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.pattern\">\n            Solo letras.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.minlength\">\n            Nombre muy corto.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.nombre.errors?.maxlength\">\n            Nombre muy largo.\n          </span>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.nombre.errors?.required && !errorControl.nombre.errors?.pattern && !errorControl.nombre.errors?.minlength && !errorControl.nombre.errors?.maxlength\">\n            Correcto\n          </span>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Apellidos</ion-label>\n          <ion-input formControlName=\"apellidos\" type=\"text\"></ion-input>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellidos.errors?.required\">\n            Apellidos obligatorios.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellidos.errors?.pattern\">\n            Solo letras.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellidos.errors?.minlength\">\n            Apellidos cortos.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.apellidos.errors?.maxlength\">\n            Apellidos muy largos.\n          </span>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.apellidos.errors?.required && !errorControl.apellidos.errors?.pattern && !errorControl.apellidos.errors?.minlength && !errorControl.apellidos.errors?.maxlength\">\n            Correcto\n          </span>\n        </ion-item>\n        <ion-item>\n          <ion-label>¿Desea Facturar? </ion-label>\n          <ion-toggle color=\"secondary\" (click)=\"facturado()\"></ion-toggle>  \n        </ion-item>\n\n        <ion-item *ngIf=\"facturame == true\">\n          <ion-label position=\"floating\">RFC</ion-label>\n          <ion-input formControlName=\"rfc\" type=\"text\" class=\"custom-placeholder\" placeholder=\"Opcional, solo si se quiere factura\"></ion-input>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.pattern\">\n            Solo letras y números.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.minlength\">\n            RFC corto.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.rfc.errors?.maxlength\">\n            RFC largo.\n          </span>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.rfc.errors?.pattern && !errorControl.rfc.errors?.minlength && !errorControl.rfc.errors?.maxlength\">\n            No es obligatorio, solo si se quiere factura.\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"facturame == true\">\n          <ion-label position=\"floating\">Razon Social</ion-label>\n          <ion-input formControlName=\"rfc\" type=\"text\" class=\"custom-placeholder\" placeholder=\"Opcional, solo si se quiere factura\"></ion-input>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.rfc.errors?.pattern && !errorControl.rfc.errors?.minlength && !errorControl.rfc.errors?.maxlength\">\n            No es obligatorio, solo si se quiere factura.\n          </span>\n        </ion-item>\n        <ion-item *ngIf=\"facturame == true\">\n          <ion-select [(ngModel)]=\"usocfdi\" style=\"color: black;background-color: white;\" value=\"G01\" okText=\"OK\" cancelText=\"Cancelar\">\n            <ion-select-option value=\"G01\">G01 - Adquisición de mercancías</ion-select-option>\n            <ion-select-option value=\"G02\">G02 - Devoluciones, descuentos o bonificaciones</ion-select-option>\n            <ion-select-option value=\"G03\">G03 - Gastos en general</ion-select-option>\n            <ion-select-option value=\"I02\">I02 - Mobiliario y equipo de oficina por inversiones</ion-select-option>\n            <ion-select-option value=\"I04\">I04 - Equipo de cómputo y accesorios</ion-select-option>\n            <ion-select-option value=\"I08\">I08 - Otra maquinaria y equipo</ion-select-option>\n            <ion-select-option value=\"P01\">P01 - Por definir</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf=\"facturame == true\">\n          <ion-select [(ngModel)]=\"regimenFiscal\" style=\"color: black;background-color: white;\" value=\"G01\" okText=\"OK\" cancelText=\"Cancelar\">\n            <ion-select-option value=\"G01\">601 - General de Ley Personas Morales</ion-select-option>\n            <ion-select-option value=\"G02\">603 - Personas Morales con Fines no Lucrativos</ion-select-option>\n            <ion-select-option value=\"G03\">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</ion-select-option>\n            <ion-select-option value=\"I02\">606 - Arrendamiento</ion-select-option>\n            <ion-select-option value=\"I04\">607 - Régimen de Enajenación o Adquisición de Bienes</ion-select-option>\n            <ion-select-option value=\"I08\">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</ion-select-option>\n            <ion-select-option value=\"P01\">611 - Ingresos por Dividendos (socios y accionistas)</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Correo Electrónico</ion-label>\n            <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\n              Email Obligatorio.\n            </span>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n              Ingresa patrón correcto de Email.\n            </span>\n            <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.email.errors?.required && !errorControl.email.errors?.pattern\">\n              Correcto\n            </span>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Contraseña</ion-label>\n          <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.required\">\n            Contraseña Obligatoria.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.pattern\">\n            - Mínimo 8 caracteres.<br>\n            - Debe tener minúsculas.<br>\n            - Debe tener mayúsculas.<br>\n            - Debe tener números.<br>\n            - Debe tener carácter especial. $@$!%*?&\n          </span>\n          <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.password.errors?.required && !errorControl.password.errors?.pattern\">\n            Correcto\n          </span>\n        </ion-item>\n\n        <ion-list lines=\"none\">\n\n          <div style=\"width: 100%; height: auto; display: flex; justify-content: center; align-items: center;\">\n            <a href=\"https://lideart.com.mx/content/7-politica-de-privacidad\" class=\"vrp\" target=\"blank\">Ver políticas de seguridad</a>\n          </div>\n\n          <ion-item>\n            <ion-checkbox formControlName=\"news\"></ion-checkbox>\n            <ion-label>Suscribirse a nuestro boletín de noticias</ion-label>\n          </ion-item>\n        \n          <ion-item>\n            <ion-checkbox formControlName=\"priv\"></ion-checkbox>\n            <ion-label>Privacidad de los datos del cliente</ion-label>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.priv.errors?.pattern\">\n              Debes aceptar.\n            </span>\n            <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.priv.errors?.pattern\">\n              Aceptado\n            </span>\n          </ion-item>\n\n          <ion-item>\n            <ion-checkbox formControlName=\"term\"></ion-checkbox>\n            <ion-label>Acepto las condiciones generales y la política de confidencialidad</ion-label>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.term.errors?.pattern\">\n              Debes aceptar.\n            </span>\n            <span class=\"correcto ion-padding\" *ngIf=\"isSubmitted && !errorControl.term.errors?.pattern\">\n              Aceptado\n            </span>\n          </ion-item>\n        </ion-list>\n              \n        <ion-button type=\"submit\" expand=\"full\">Registrarse</ion-button>\n      \n      </form>\n    \n      <div class=\"forgot\">\n        <a id=\"closeModal\" (click)=\"dismiss()\">Cerrar</a>\n      </div>\n          \n    </ion-card>\n    \n  </div>\n</ion-content>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
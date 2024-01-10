(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_wishlist_wishlist_module_ts"],{

/***/ 32520:
/*!***********************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistPageRoutingModule: () => (/* binding */ WishlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.page */ 66625);




const routes = [{
  path: '',
  component: _wishlist_page__WEBPACK_IMPORTED_MODULE_0__.WishlistPage
}];
let WishlistPageRoutingModule = class WishlistPageRoutingModule {};
WishlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], WishlistPageRoutingModule);

/***/ }),

/***/ 8776:
/*!***************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistPageModule: () => (/* binding */ WishlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-routing.module */ 32520);
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page */ 66625);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let WishlistPageModule = class WishlistPageModule {};
WishlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_1__.WishlistPage]
})], WishlistPageModule);

/***/ }),

/***/ 66625:
/*!*************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistPage: () => (/* binding */ WishlistPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _wishlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.page.html?ngResource */ 96377);
/* harmony import */ var _wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wishlist.page.scss?ngResource */ 32015);
/* harmony import */ var _wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);





//import { Clipboard } from '@angular/cdk/clipboard';





let WishlistPage = class WishlistPage {
  constructor(renderer2, servicioWishlist, usuarioService, toastController, apiProductos, router) {
    this.renderer2 = renderer2;
    this.servicioWishlist = servicioWishlist;
    this.usuarioService = usuarioService;
    this.toastController = toastController;
    this.apiProductos = apiProductos;
    this.router = router;
    this.invitarIs = false;
    this.lecturaIs = false;
    this.veIs = false;
    this.correoIs = false;
    this.totalwish = 0;
    this.listaWishlist = [];
    this.cargando = false;
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
    });
  }
  ngOnInit() {
    this.checaWishlist();
  }
  invitar() {
    if (this.invitarIs == false) {
      this.renderer2.setStyle(this.invitarCont.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.invitarCont.nativeElement, 'z-index', '1');
      this.invitarIs = true;
    } else if (this.invitarIs == true) {
      this.renderer2.setStyle(this.invitarCont.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.invitarCont.nativeElement, 'z-index', '-1');
      this.invitarIs = false;
    }
  }
  opclectura() {
    if (this.lecturaIs == false) {
      this.renderer2.setStyle(this.lectura.nativeElement, 'color', '#00abcf');
      if (this.veIs == true) {
        this.opcve();
      }
      this.lecturaIs = true;
    } else if (this.lecturaIs == true) {
      this.renderer2.setStyle(this.lectura.nativeElement, 'color', 'rgb(94, 94, 94)');
      this.lecturaIs = false;
    }
    this.midRev();
  }
  opcve() {
    if (this.veIs == false) {
      this.renderer2.setStyle(this.ve.nativeElement, 'color', '#00abcf');
      if (this.lecturaIs == true) {
        this.opclectura();
      }
      this.veIs = true;
    } else if (this.veIs == true) {
      this.renderer2.setStyle(this.ve.nativeElement, 'color', 'rgb(94, 94, 94)');
      this.veIs = false;
    }
    this.midRev();
  }
  midRev() {
    if (this.lecturaIs == true || this.veIs == true) {
      this.renderer2.setStyle(this.mid.nativeElement, 'padding', '1rem 0rem');
      this.renderer2.setStyle(this.midl.nativeElement, 'display', 'flex');
      this.renderer2.setStyle(this.midl2.nativeElement, 'display', 'flex');
      this.renderer2.setStyle(this.midl3.nativeElement, 'display', 'flex');
    }
    if (this.lecturaIs == false && this.veIs == false) {
      this.renderer2.setStyle(this.mid.nativeElement, 'padding', '0rem 0rem');
      this.renderer2.setStyle(this.midl.nativeElement, 'display', 'none');
      this.renderer2.setStyle(this.midl2.nativeElement, 'display', 'none');
      this.renderer2.setStyle(this.midl3.nativeElement, 'display', 'none');
    }
  }
  copiar() {
    this.renderer2.setStyle(this.copy.nativeElement, 'display', 'block');
    //this.clipboard.copy(this.link);
    setTimeout(() => {
      this.renderer2.setStyle(this.copy.nativeElement, 'display', 'none');
    }, 500);
  }
  enviarCorreo() {
    if (this.correoIs == false) {
      this.renderer2.setStyle(this.correo.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.correo.nativeElement, 'z-index', '1');
      this.correoIs = true;
    } else if (this.correoIs == true) {
      this.renderer2.setStyle(this.correo.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.correo.nativeElement, 'z-index', '-5');
      this.correoIs = false;
    }
  }
  checaWishlist() {
    this.servicioWishlist.recuperaWishlist(this.usuario.usuario).subscribe(res => {
      this.listaWishlist = res;
      this.link = this.listaWishlist[0].link;
    });
  }
  eliminarWishlist(sku) {
    var jsonWishlist = {
      "usuario": this.usuario.usuario,
      "sku": sku
    };
    this.servicioWishlist.eliminarWishlist(jsonWishlist).subscribe(data => {
      if (data == 0) {
        this.presentToast();
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }
  comprar(item, sku) {
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
  presentToast() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Se elimino el producto de tu wishlist',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2
  }, {
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_3__.ServiciowishlistService
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_5__.ApiProductosService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }];
  static #_2 = this.propDecorators = {
    invitarCont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['invitarCont']
    }],
    lectura: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['lectura']
    }],
    ve: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['ve']
    }],
    mid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['mid']
    }],
    midl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['midl']
    }],
    midl2: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['midl2']
    }],
    midl3: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['midl3']
    }],
    copy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['copy']
    }],
    correo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['correo']
    }]
  };
};
WishlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-wishlist',
  template: _wishlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_wishlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], WishlistPage);

/***/ }),

/***/ 32015:
/*!**************************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.head-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.head-cont .buscador {
  width: 100%;
  height: 7rem;
  background: #00abcf;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.head-cont .buscador form {
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.head-cont .buscador form button {
  width: 3rem;
  height: 2rem;
  background: #fff;
  color: #00abcf;
  font-size: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.head-cont .buscador form input {
  width: 80%;
  height: 2rem;
  background: #fff;
  border: 0px;
}
.head-cont .buscador form input:focus {
  outline: none;
}
.head-cont .rest {
  width: 100%;
  height: 3rem;
  background: #4ed4e0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.head-cont .rest .burgir {
  width: 15%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-cont .rest .burgir ion-icon {
  color: #fff;
  font-size: 2rem;
}
.head-cont .rest .titled {
  width: 70%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head-cont .rest .titled p {
  color: #fff;
  font-size: 1rem;
}
.head-cont .rest .icons {
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.head-cont .rest .icons .i1 {
  width: 30%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.head-cont .rest .icons .i1 ion-icon {
  color: #fff;
  font-size: 1.8rem;
}
.head-cont .rest .icons .i2 {
  width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-cont .rest .icons .i2 ion-icon {
  color: #fff;
  font-size: 1.8rem;
}

.wishlist {
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.wishlist .titulo {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0rem;
}
.wishlist .titulo p {
  font-size: 0.9rem;
  color: #4ed4e0;
  font-weight: 600;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.wishlist .invitar {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.wishlist .invitar .btn {
  width: 70%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #00abcf;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 5rem;
}
.wishlist .invitar .btn ion-icon {
  font-size: 1.8rem;
  color: #fff;
  margin-right: 1rem;
}
.wishlist .invitar .btn p {
  font-size: 1.2rem;
  color: #fff;
  font-weight: lighter;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.wishlist .productos {
  width: 100%;
  height: auto;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.wishlist .productos .prod {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.wishlist .productos .prod .imagen {
  width: 9rem;
  height: 9rem;
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.wishlist .productos .prod .imagen img {
  width: 100%;
  height: auto;
}
.wishlist .productos .prod .info {
  width: 60%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wishlist .productos .prod .info .parrafos {
  margin-bottom: 0.2rem;
}
.wishlist .productos .prod .info .parrafos p {
  font-size: 1rem;
  color: black;
  font-weight: lighter;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.wishlist .productos .prod .info .links {
  display: flex;
  flex-direction: column;
}
.wishlist .productos .prod .info .links a {
  text-decoration: none;
  color: #4ed4e0;
  border-left: 1px solid #4ed4e0;
  padding-left: 0.4rem;
  margin: 0.4rem 0rem;
  font-weight: 600;
  font-size: 12px;
}
.wishlist .seguir {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
}
.wishlist .seguir .comp {
  width: 70%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #00abcf;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 5rem;
}
.wishlist .seguir .comp p {
  font-size: 1.2rem;
  color: #fff;
  font-weight: lighter;
  margin-block-start: 0em;
  margin-block-end: 0em;
}

.invitar-cont {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.666);
  position: fixed;
  top: 0;
  opacity: 0;
  z-index: -1;
}
.invitar-cont #cerrar {
  font-size: 1.8rem;
  color: #000;
  right: 0.3rem;
  top: 0.3rem;
  position: absolute;
}
.invitar-cont .opts {
  width: 90%;
  height: auto;
  background: #fff;
  position: absolute;
  left: 5%;
  top: 35%;
  padding: 1rem;
}
.invitar-cont .lectura {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 2rem;
}
.invitar-cont .lectura .bl {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(94, 94, 94);
}
.invitar-cont .lectura p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9rem;
  color: rgb(94, 94, 94);
}
.invitar-cont .mid {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 1rem;
  border-top: 1.2px solid rgb(65, 65, 65);
  border-bottom: 1.2px solid rgb(65, 65, 65);
  padding: 0rem 0rem;
  padding-left: 1rem;
  margin: 1rem 0rem;
}
.invitar-cont .mid .midl {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.invitar-cont .mid .midl ion-icon {
  color: #000;
  font-size: 1.7rem;
}
.invitar-cont .mid .midl p {
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-size: 0.9rem;
  color: rgb(94, 94, 94);
  margin-left: 1rem;
}
.invitar-cont .mid .midl .copys {
  position: relative;
}
.invitar-cont .mid .midl .copys span {
  display: none;
  position: absolute;
  top: -1rem;
  left: 0;
  width: 10rem;
  height: auto;
  font-size: 0.8rem;
  color: #4ed4e0;
}
.invitar-cont .ve {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0rem 2rem;
}
.invitar-cont .ve .bl {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(94, 94, 94);
}
.invitar-cont .ve p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9rem;
  color: rgb(94, 94, 94);
}
.invitar-cont .correo {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  opacity: 0;
  z-index: -5;
}
.invitar-cont .correo .cancelar {
  position: absolute;
  top: 10rem;
  color: #00abcf;
  font-size: 1.2rem;
  border-bottom: 1px solid #00abcf;
  border-bottom-style: dashed;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
}
.invitar-cont .correo .cancelar ion-icon {
  margin-right: 0.4rem;
}
.invitar-cont .correo .cont-next {
  width: 100%;
  height: auto;
  position: absolute;
  top: 13rem;
  display: flex;
  flex-direction: column;
}
.invitar-cont .correo .cont-next .titled {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.invitar-cont .correo .cont-next .titled p {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  font-size: 1.8rem;
  color: #000;
  font-weight: 600;
}
.invitar-cont .correo .cont-next form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.invitar-cont .correo .cont-next form .pas {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
}
.invitar-cont .correo .cont-next form .pas p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9rem;
  color: rgb(94, 94, 94);
}
.invitar-cont .correo .cont-next form .pas input {
  background: none;
  border: 0px;
  border-bottom: 1px solid #00abcf;
  width: 80%;
  height: 2rem;
  margin-left: 1rem;
}
.invitar-cont .correo .cont-next form .pas input:focus {
  outline: none;
}
.invitar-cont .correo .cont-next form button {
  width: 40%;
  height: 2rem;
  background: #00abcf;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 5rem;
  margin-top: 1rem;
}

.wishDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.wishDesk .wishCont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
}
.wishDesk .wishCont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.2em;
}
.wishDesk .wishCont .taitl-cont .prin {
  color: #000000;
  font-size: 1.5em;
}
.wishDesk .wishCont .taitl-cont .secon {
  color: #00a3c7;
  font-size: 1.2em;
}
.wishDesk .wishCont .wish-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0em 2em;
  gap: 2em;
}
.wishDesk .wishCont .wish-cont .prod {
  width: 20em;
  height: 20em;
  border-radius: 20em 20em 20em 20em;
  overflow: hidden;
  position: relative;
  box-shadow: rgba(0, 163, 197, 0.2) 0px 4px 30px;
  border: 1px solid rgba(0, 163, 199, 0.2588235294);
  transition: 0.5s all ease-in-out;
}
.wishDesk .wishCont .wish-cont .prod .imag {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.wishDesk .wishCont .wish-cont .prod .parrafos {
  position: absolute;
  width: 100%;
  height: 7em;
  background-color: rgba(0, 163, 199, 0.8);
  z-index: 2;
  bottom: -7em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.7em;
  gap: 0.2em;
  transition: 0.5s all ease-in-out;
}
.wishDesk .wishCont .wish-cont .prod .parrafos .nom {
  color: #fff;
  font-size: 0.8em;
  font-weight: 600;
}
.wishDesk .wishCont .wish-cont .prod .parrafos .rest {
  color: #fff;
  font-size: 0.8em;
}
.wishDesk .wishCont .wish-cont .prod .links {
  position: absolute;
  top: -3em;
  width: 100%;
  height: 3em;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  transition: 0.5s all ease-in-out;
}
.wishDesk .wishCont .wish-cont .prod .links a {
  background-color: #00a3c7;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}
.wishDesk .wishCont .wish-cont .prod .links a i {
  color: #fff;
}
.wishDesk .wishCont .wish-cont .prod:hover {
  border-radius: 20em 20em 3em 3em;
}
.wishDesk .wishCont .wish-cont .prod:hover .parrafos {
  bottom: 0em;
}
.wishDesk .wishCont .wish-cont .prod:hover .links {
  top: 0em;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .wishDesk {
    display: flex;
  }
}
.wishDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.wishDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/wishlist/wishlist.page.scss"],"names":[],"mappings":"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","sourcesContent":[".head-cont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    .buscador{\n        width: 100%;\n        height: 7rem;\n        background: #00abcf;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n        align-items: center;\n\n        form{\n            width: 100%;\n            height: auto;\n            margin-bottom: .5rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            \n            button{\n                width: 3rem;\n                height: 2rem;\n                background: #fff;\n                color: #00abcf;\n                font-size: 2rem;\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n            }\n\n            input{\n                width: 80%;\n                height: 2rem;\n                background: #fff;\n                border: 0px;\n            }\n\n            input:focus{\n                outline: none;\n            }\n        }\n    }\n\n    .rest{\n        width: 100%;\n        height: 3rem;\n        background: #4ed4e0;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: center;\n\n        .burgir{\n            width: 15%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            ion-icon{\n                color: #fff;\n                font-size: 2rem;\n            }\n        }\n\n        .titled{\n            width: 70%;\n            height: auto;\n            display: flex;\n            justify-content: flex-start;\n            align-items: center;\n\n            p{\n                color: #fff;\n                font-size: 1rem;\n            }\n        }\n\n        .icons{\n            width: 30%;\n            height: auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n\n            .i1{\n                width: 30%;\n                height: auto;\n                display: flex;\n                justify-content: flex-start;\n                align-items: center;\n\n                ion-icon{\n                    color: #fff;\n                    font-size: 1.8rem;\n                }\n            }\n\n            .i2{\n                width: 70%;\n                height: auto;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n\n                ion-icon{\n                    color: #fff;\n                    font-size: 1.8rem;\n                }\n            }\n        }\n    }\n}\n\n\n\n\n.wishlist{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    .titulo{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 1rem 0rem;\n\n        p{\n            font-size: .9rem;\n            color: #4ed4e0;\n            font-weight: 600;\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n        }\n    }\n\n    .invitar{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin-bottom: 1rem;\n\n        .btn{\n            width: 70%;\n            height: 3rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            background: #00abcf;\n            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n            border-radius: 5rem;\n\n            ion-icon{\n                font-size: 1.8rem;\n                color: #fff;\n                margin-right: 1rem;\n            }\n\n            p{\n                font-size: 1.2rem;\n                color: #fff;\n                font-weight: lighter;\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n            }\n        }\n    }\n\n    .productos{\n        width: 100%;\n        height: auto;\n        padding: 1rem .5rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n\n        .prod{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: flex-start;\n            margin-bottom: 1rem;\n\n            .imagen{\n                width: 9rem;\n                height: 9rem;\n                border: 1px solid #000;\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-start;\n                align-items: flex-start;\n\n                img{\n                    width: 100%;\n                    height: auto;\n                }\n            }\n\n            .info{\n                width: 60%;\n                height: 9rem;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: flex-start;\n                padding-left: .5rem;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n\n\n                .parrafos{\n                    margin-bottom: .2rem;\n\n                    p{\n                        font-size: 1rem;\n                        color: black;\n                        font-weight: lighter;\n                        margin-block-start: 0em;\n                        margin-block-end: 0em;\n                    }\n                }\n\n                .links{\n                    display: flex;\n                    flex-direction: column;\n\n                    a{\n                        text-decoration: none;\n                        color: #4ed4e0;\n                        border-left: 1px solid #4ed4e0;\n                        padding-left: .4rem;\n                        margin: .4rem 0rem;\n                        font-weight: 600;\n                        font-size: 12px;\n                    }\n                }\n            }\n        }\n    }\n\n    .seguir{\n        width: 100%;\n        height: auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        padding: 2rem 0rem;\n\n        .comp{\n            width: 70%;\n            height: 3rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            background: #00abcf;\n            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n            border-radius: 5rem;\n\n            p{\n                font-size: 1.2rem;\n                color: #fff;\n                font-weight: lighter;\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n            }\n        }\n    }\n}\n\n.invitar-cont{\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.666);\n    position: fixed;\n    top: 0;\n    opacity: 0;\n    z-index: -1;\n\n    #cerrar{\n        font-size: 1.8rem;\n        color: #000;\n        right: .3rem;\n        top: .3rem;\n        position: absolute;\n    }\n\n    .opts{\n        width: 90%;\n        height: auto;\n        background: #fff;\n        position: absolute;\n        left: 5%;\n        top: 35%;\n        padding: 1rem;\n    }\n\n    .lectura{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        padding: 0rem 2rem;\n\n        .bl{\n            font-size: 1.1rem;\n            font-weight: 600;\n            //color: #35a7dc; //Azul si es seleccionado\n            color: rgb(94, 94, 94);\n        }\n\n        p{\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            font-size: .9rem;\n            color: rgb(94, 94, 94);\n        }\n    }\n\n    .mid{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        padding: 0rem 1rem;\n        border-top: 1.2px solid rgb(65, 65, 65);\n        border-bottom: 1.2px solid rgb(65, 65, 65);\n        padding: 0rem 0rem;                                                     //Este\n        padding-left: 1rem;\n        margin: 1rem 0rem;\n\n        .midl{\n            width: 100%;\n            height: auto;\n            display: none;                                                      //Este\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n\n            ion-icon{\n                color: #000;\n                font-size: 1.7rem;\n            }\n\n            p{\n                margin-block-start: 1em;\n                margin-block-end: 1em;\n                font-size: .9rem;\n                color: rgb(94, 94, 94);\n                margin-left: 1rem;\n            }\n\n            .copys{\n                position: relative;\n\n                span{\n                    display: none;                                              //Este\n                    position: absolute;\n                    top: -1rem;\n                    left: 0;\n                    width: 10rem;\n                    height: auto;\n                    font-size: .8rem;\n                    color: #4ed4e0;\n                }\n            }\n        }\n    }\n\n    .ve{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        padding: 0rem 2rem;\n\n        .bl{\n            font-size: 1.1rem;\n            font-weight: 600;\n            //color: #35a7dc; //Azul si es seleccionado\n            color: rgb(94, 94, 94);\n        }\n\n        p{\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            font-size: .9rem;\n            color: rgb(94, 94, 94);\n        }\n    }\n\n    .correo{\n        width: 100%;\n        height: 100%;\n        background: #fff;\n        position: absolute;\n        top: 0;\n        opacity: 0;\n        z-index: -5;\n\n        .cancelar{\n            position: absolute;\n            top: 10rem;\n            color: #00abcf;\n            font-size: 1.2rem;\n            border-bottom: 1px solid #00abcf;\n            border-bottom-style: dashed;\n            width: 100%;\n            height: 3rem;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: center;\n            padding-left: 1rem;\n\n            ion-icon{ margin-right: .4rem; }\n        }\n\n        .cont-next{\n            width: 100%;\n            height: auto;\n            position: absolute;\n            top: 13rem;\n            display: flex;\n            flex-direction: column;\n\n            .titled{\n                width: 100%;\n                height: auto;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n\n                p{\n                    margin-block-start: .5em;\n                    margin-block-end: .5em;\n                    font-size: 1.8rem;\n                    color: #000;\n                    font-weight: 600;\n                }\n            }\n\n            form{\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n\n                .pas{   \n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: row;\n                    align-items: center;\n                    justify-content: flex-start;\n                    padding-left: 1rem;\n\n                    p{\n                        margin-block-start: 0em;\n                        margin-block-end: 0em;\n                        font-size: .9rem;\n                        color: rgb(94, 94, 94); \n                    }\n\n                    input{\n                        background: none;\n                        border: 0px;\n                        border-bottom: 1px solid #00abcf;\n                        width: 80%;\n                        height: 2rem;\n                        margin-left: 1rem;\n                    }\n\n                    input:focus{\n                        outline: none;\n                    }\n                }\n\n                button{\n                    width: 40%;\n                    height: 2rem;\n                    background: #00abcf;\n                    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n                    font-size: 1.2rem;\n                    color: #fff;\n                    border-radius: 5rem;\n                    margin-top: 1rem;\n                }\n            }\n        }\n    }\n}\n\n.wishDesk{\n    width: 100%;\n    height: auto;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: scroll;\n\n    .wishCont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 2em;\n\n        .taitl-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: center;\n            gap: .2em;\n\n            .prin{\n                color: #000000;\n                font-size: 1.5em;\n            }\n\n            .secon{\n                color: #00a3c7;\n                font-size: 1.2em;\n            }\n        }\n\n        .wish-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            padding: 0em 2em;\n            gap: 2em;\n\n            .prod{\n                width: 20em;\n                height: 20em;\n                border-radius: 20em 20em 20em 20em;\n                overflow: hidden;\n                position: relative;\n                box-shadow: rgb(0 163 197 / 20%) 0px 4px 30px;\n                border: 1px solid #00a3c742;\n                transition: .5s all ease-in-out;\n\n                .imag{\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    z-index: 1;\n                }\n\n                .parrafos{\n                    position: absolute;\n                    width: 100%;\n                    height: 7em;\n                    background-color: rgb(0 163 199 / 80%);\n                    z-index: 2;\n                    bottom: -7em;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: flex-start;\n                    align-items: flex-start;\n                    padding: .7em;\n                    gap: .2em;\n                    transition: .5s all ease-in-out;\n\n                    .nom{\n                        color: #fff;\n                        font-size: .8em;\n                        font-weight: 600;\n                    }\n\n                    .rest{\n                        color: #fff;\n                        font-size: .8em;\n                    }\n                }\n\n                .links{\n                    position: absolute;\n                    top: -3em;\n                    width: 100%;\n                    height: 3em;\n                    z-index: 2;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    gap: .5em;\n                    transition: .5s all ease-in-out;\n\n                    a{\n                        background-color: #00a3c7;\n                        width: 2em;\n                        height: 2em;\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        border-radius: 50%;\n                        cursor: pointer;\n\n                        i{\n                            color: #fff;\n                        }\n                    }\n                }\n            }\n\n            .prod:hover{\n                border-radius: 20em 20em 3em 3em;\n\n                .parrafos{\n                    bottom: 0em;\n                }\n\n                .links{\n                    top: 0em;\n                }\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-header{\n        display: none;\n    }\n\n    ion-content{\n        display: none;\n    }\n\n    .wishDesk{\n        display: flex;\n    }\n}\n\n.wishDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.wishDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96377:
/*!**************************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\"> Lista de Deseos\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <!-- <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button> -->\n    <!-- <ion-button\n      slot=\"end\"\n      color=\"secondary\"\n      class=\"ion-activatable ripple-parent\"\n      [routerLink]=\"['/cart']\"\n    >\n      <ion-badge color=\"danger\" slot=\"end\">{{totalItems}}</ion-badge>\n      <ion-icon name=\"cart-outline\" color=\"light\"></ion-icon>\n      <ion-ripple-effect></ion-ripple-effect>\n    </ion-button> -->\n\n  </ion-toolbar>\n  <!-- <div style=\"display: none;\" id=\"buscador\"> -->\n    <!-- <ion-toolbar color=\"secondary\" mode=\"md\"> -->\n\n      <!-- <ion-searchbar\n      *ngIf=\"searchbarVisible\"\n      spellcheck=\"true\"\n      style=\"text-align: initial; padding: 0; overflow: hidden\"\n      showCancelButton=\"never\"\n      placeholder=\"Buscar\"\n      [(ngModel)]=\"txtBuscador\"\n      spellcheck=\"true\"\n      (keyup)=\"search($event)\"\n      mode=\"ios\"\n    ></ion-searchbar> -->\n      <!-- </ion-toolbar> -->\n  <!-- </div> -->\n</ion-header>\n\n<section class=\"wishDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"wishCont\">\n    <div class=\"taitl-cont\">\n      <span class=\"prin\">Bienvenido {{usuario.usuario}}</span>\n      <div class=\"secon\">a tu lista de deseos</div>\n    </div>\n    <div class=\"wish-cont\">\n      <div class=\"prod\" *ngFor=\"let item of listaWishlist\">\n        <img class=\"imag\" src=\"{{item.imagen}}\" alt=\"\">\n        <div class=\"parrafos\">\n          <span class=\"nom\">- {{item.title}}</span>\n          <span class=\"rest\">Código: {{item.sku}}</span>\n          <span class=\"rest\">Color: {{item.color}}</span>\n        </div>\n        <div class=\"links\">\n          <a (click)=\"comprar(item.id_product,item.sku)\"><i class=\"fa-solid fa-bag-shopping\"></i></a>\n          <a (click)=\"eliminarWishlist(item.sku)\"><i class=\"fa-solid fa-trash\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n  <div class=\"wishlist\">\n    <div class=\"titulo\">\n      <p>Bienvenido {{usuario.usuario}}</p>\n      <p>a tu lista de deseos</p>\n    </div>\n    <!-- <div class=\"invitar\">\n      <div class=\"btn\" (click)=\"invitar()\">\n        <ion-icon name=\"person-add-outline\"></ion-icon>\n        <p>Invitar a un amigo</p>\n      </div>\n    </div> -->\n    <div class=\"productos\">\n      <div class=\"prod\" *ngFor=\"let item of listaWishlist\">\n        <div class=\"imagen\">\n          <img src=\"{{item.imagen}}\" alt=\"\">\n        </div>\n        <div class=\"info\">\n          <div class=\"parrafos\">\n            <p>{{item.title}}</p>\n            <p>Código: {{item.sku}}</p>\n            <p>Color: {{item.color}}</p>\n            <!-- <p style=\"font-weight: 900; color: #000;\">$1,399.99 MXN</p> -->\n          </div>\n          <div class=\"links\">\n            <!-- <a (click)=\"copiar(item.link)\">Copiar Enlace</a> -->\n            <!-- <a (click)=\"copiar()\">Copiar Enlace</a> -->\n            <a (click)=\"comprar(item.id_product,item.sku)\">Ir a Comprar</a>\n            <a (click)=\"eliminarWishlist(item.sku)\">Eliminar</a>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"prod\">\n        <div class=\"imagen\">\n          <img src=\"\" alt=\"\">\n        </div>\n        <div class=\"info\">\n          <div class=\"parrafos\">\n            <p>Plancha de Calor sigue la linea </p>\n            <p>Código: 4425-0324</p>\n            <p>Color: Frambuesa</p>\n            <p style=\"font-weight: 900; color: #000;\">$1,399.99 MXN</p>\n          </div>\n          <div class=\"links\">\n            <a href=\"\">Enviar al carrito</a>\n            <a href=\"\">Eliminar</a>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"prod\">\n        <div class=\"imagen\">\n          <img src=\"\" alt=\"\">\n        </div>\n        <div class=\"info\">\n          <div class=\"parrafos\">\n            <p>Plancha de Calor sigue la linea </p>\n            <p>Código: 4425-0324</p>\n            <p>Color: Frambuesa</p>\n            <p style=\"font-weight: 900; color: #000;\">$1,399.99 MXN</p>\n          </div>\n          <div class=\"links\">\n            <a href=\"\">Enviar al carrito</a>\n            <a href=\"\">Eliminar</a>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"prod\">\n        <div class=\"imagen\">\n          <img src=\"\" alt=\"\">\n        </div>\n        <div class=\"info\">\n          <div class=\"parrafos\">\n            <p>Plancha de Calor sigue la linea </p>\n            <p>Código: 4425-0324</p>\n            <p>Color: Frambuesa</p>\n            <p style=\"font-weight: 900; color: #000;\">$1,399.99 MXN</p>\n          </div>\n          <div class=\"links\">\n            <a href=\"\">Enviar al carrito</a>\n            <a href=\"\">Eliminar</a>\n          </div>\n        </div>\n      </div> -->\n    </div>\n    <div class=\"seguir\">\n      <div class=\"comp\">\n        <p routerLink=\"/categorias\">Seguir comprando</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"invitar-cont\" #invitarCont>\n    <div class=\"opts\">\n      <ion-icon id=\"cerrar\" name=\"close-circle-outline\" (click)=\"invitar()\"></ion-icon>\n      <div class=\"lectura\">\n        <p class=\"bl\" #lectura (click)=\"opclectura()\">Solo lectura</p>\n        <p>Cualquiera con un enlace puede ver tu lista sin realizar modificaciones.</p>\n      </div>\n      <div class=\"mid\" #mid>\n        <div class=\"midl\" #midl>\n          <ion-icon name=\"link-outline\"></ion-icon>\n          <p class=\"copys\" (click)=\"copiar()\">\n            Copiar enlace\n            <span #copy>¡ Enlace copiado !</span>\n          </p>\n        </div>\n        <div class=\"midl\" #midl2>\n          <ion-icon name=\"mail-outline\"></ion-icon>\n          <p (click)=\"enviarCorreo()\">Correo electrónico</p>\n        </div>\n        <div class=\"midl\" #midl3>\n          <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n          <p>Mensaje de texto</p>\n        </div>\n      </div>\n      <div class=\"ve\">\n        <p class=\"bl\" #ve (click)=\"opcve()\">Ver y Editar</p>\n        <p>Las personas invitadas pueden agregar o eliminar articulos de tu lista.</p>\n      </div>\n    </div>\n\n    <div class=\"correo\" #correo>\n      <div class=\"cancelar\" (click)=\"enviarCorreo()\"><ion-icon name=\"close-circle-outline\"></ion-icon>Cancelar</div>\n      <div class=\"cont-next\">\n        <div class=\"titled\"> <p> Ver mi lista en Lideart. </p> </div>\n        <form action=\"\">\n          <div class=\"pas\">\n            <p>Para:</p>\n            <input type=\"text\" placeholder=\"Correo electrónico\">\n          </div>\n          <button>Compartir</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wishlist_wishlist_module_ts.js.map
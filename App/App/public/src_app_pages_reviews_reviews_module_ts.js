(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reviews_reviews_module_ts"],{

/***/ 12096:
/*!*********************************************************!*\
  !*** ./src/app/pages/reviews/reviews-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsPageRoutingModule: () => (/* binding */ ReviewsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.page */ 80954);




const routes = [{
  path: '',
  component: _reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage
}];
let ReviewsPageRoutingModule = class ReviewsPageRoutingModule {};
ReviewsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ReviewsPageRoutingModule);

/***/ }),

/***/ 54696:
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsPageModule: () => (/* binding */ ReviewsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews-routing.module */ 12096);
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page */ 80954);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let ReviewsPageModule = class ReviewsPageModule {};
ReviewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _reviews_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReviewsPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_1__.ReviewsPage]
})], ReviewsPageModule);

/***/ }),

/***/ 80954:
/*!***********************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewsPage: () => (/* binding */ ReviewsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reviews_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.page.html?ngResource */ 66291);
/* harmony import */ var _reviews_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page.scss?ngResource */ 88419);
/* harmony import */ var _reviews_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reviews_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 6138);






let ReviewsPage = class ReviewsPage {
  constructor(loginService) {
    this.loginService = loginService;
    this.loaded = false;
    this.reviews = [];
    this.estrellas = 0;
    this.datosUsuario = [];
    this.loginService.usuario.subscribe(res => {
      this.usuario = res;
      if (this.usuario) {}
    });
  }
  ngOnInit() {
    this.loginService.getReviews().subscribe(res => {
      this.reviews = res;
      this.loaded = true;
      this.URLestrellas = "https://lideart.com.mx/modules/lgcomments/views/img/stars/plain/bluelight/" + this.reviews.stars + "stars.png";
      console.log(this.reviews);
    });
    //this.checalo();
  }

  cancel2() {
    this.modal.dismiss(null, 'cancel');
  }
  cancel2desk() {
    this.modalDesk.dismiss(null, 'cancel');
  }
  checalo() {
    this.loginService.checaUsuario(this.usuario.usuario).subscribe(data => {
      this.datosUsuario = data;
      this.id_customer = this.datosUsuario.id_customer;
    });
  }
  registraReview() {
    var jsonCarrito = {
      "estrellas": this.estrellas,
      "nombre": this.nombre,
      "titulo": this.titulo,
      "comentario": this.comentario,
      "id_customer": this.id_customer
    };
    this.loginService.registraReviews(jsonCarrito).subscribe(data => {
      location.reload();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
  }];
  static #_2 = this.propDecorators = {
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonModal]
    }],
    modalDesk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['modalDesk']
    }]
  };
};
ReviewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-reviews',
  template: _reviews_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
  styles: [(_reviews_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ReviewsPage);

/***/ }),

/***/ 88419:
/*!************************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menuLogo {
  padding: 1em;
  padding-left: 40px;
  justify-content: center;
  align-items: center;
}

.icons {
  width: 25px;
  height: 25px;
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
.compra {
  width: 100%;
  height: auto;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-bottom: 0.5rem;
}
.compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
}
.compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.compra .ent {
  background: #1ed5cc;
  width: 12rem;
  height: 2.5rem;
  border-radius: 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}

.inps {
  width: 100%;
  height: 2.5rem;
  background: none;
  text-indent: 1rem;
  border-radius: 5rem;
  border: 1px solid #33a1c3;
  margin-bottom: 0.5rem;
}

.inps:focus {
  outline: none;
}

.selict {
  width: 100%;
  height: 2.5rem;
  background: none;
  padding: 0rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #33a1c3;
  margin-bottom: 0.5rem;
}

.selict:focus {
  outline: none;
}

.modal {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.reviews-cont {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.reviews-cont .desk-review {
  width: 50%;
  height: auto;
  padding: 2em 0em;
}
.reviews-cont .desk-review .fixa {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.reviews-cont .desk-review .fixa ion-card {
  width: 100%;
  box-shadow: rgba(23, 217, 253, 0.3) 0px 7px 29px 0px;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .reviews-cont {
    display: flex;
  }
  ion-modal .ion-page:not(ion-nav .ion-page) {
    position: relative;
    contain: layout style;
    height: 100%;
    padding: 1em;
  }
}
.reviews-cont::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.reviews-cont::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/reviews/reviews.page.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,kBAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAGE;EACE,WAAA;EACA,YAAA;AAAJ;;AAGE;EACE,oCAAA;AAAJ;;AAGE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AAAJ;;AAGE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AAAJ;;AAGE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;AAAJ;;AAGE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AAAJ;;AAGE;EACE;IACE,UAAA;EAAJ;EAGE;IACE,UAAA;EADJ;AACF;AAIE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AAFJ;AAKI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAHN;AAKM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAHR;AAKQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AAHV;AAOM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AALR;AAOQ;EACE,iBAAA;AALV;AAUI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AARN;;AAYE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;AATJ;;AAYE;EACE,aAAA;AATJ;;AAYE;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;AATJ;;AAYE;EACE,aAAA;AATJ;;AAYA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;AATF;;AAYA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;AATF;AAWE;EACE,UAAA;EACA,YAAA;EACA,gBAAA;AATJ;AAWI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AATN;AAWM;EACE,WAAA;EACA,oDAAA;AATR;;AAeA;EACE;IACE,aAAA;EAZF;EAeA;IACE,aAAA;EAbF;EAgBA;IACE,aAAA;EAdF;EAiBA;IACE,kBAAA;IACA,qBAAA;IACA,YAAA;IACA,YAAA;EAfF;AACF;AAkBA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAhBF;;AAmBA;EACE,iDAAA;EAEA,aAAA;AAjBF","sourcesContent":[".menuLogo {\n    padding: 1em;\n    padding-left: 40px;\n    justify-content: center;\n    align-items: center;\n\n  }\n\n  .icons{\n    width: 25px;\n    height: 25px;\n  }\n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n   \n  \n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n  \n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n  \n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n  \n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n  \n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n  \n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n  \n  .inps{\n    width: 100%;\n    height: 2.5rem;\n    background: none;\n    text-indent: 1rem;\n    border-radius: 5rem;\n    border: 1px solid #33a1c3;\n    margin-bottom: .5rem;\n  }\n  \n  .inps:focus{\n    outline: none;\n  }\n  \n  .selict{\n    width: 100%;\n    height: 2.5rem;\n    background: none;\n    padding: 0rem 1rem;\n    border-radius: .5rem;\n    border: 1px solid #33a1c3;\n    margin-bottom: .5rem;\n  }\n  \n  .selict:focus{\n    outline: none;\n  }\n\n.modal{\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.reviews-cont{\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  .desk-review{\n    width: 50%;\n    height: auto;\n    padding: 2em 0em;\n\n    .fixa{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column-reverse;\n      justify-content: flex-start;\n      align-items: center;\n      gap: 1em;\n\n      ion-card{\n        width: 100%;\n        box-shadow: rgb(23 217 253 / 30%) 0px 7px 29px 0px;\n      }\n    }\n  }\n}\n  \n@media(min-width: 992px){\n  ion-header{\n    display: none;\n  }\n\n  ion-content{\n    display: none;\n  }\n\n  .reviews-cont{\n    display: flex;\n  }\n\n  ion-modal .ion-page:not(ion-nav .ion-page) {\n    position: relative;\n    contain: layout style;\n    height: 100%;\n    padding: 1em;\n  }\n}\n\n.reviews-cont::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.reviews-cont::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 66291:
/*!************************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Reviews\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n\n  </div>\n</ion-header>\n\n<section class=\"reviews-cont\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"desk-review\">\n    <ion-fab slot=\"fixed\" vertical=\"start\" horizontal=\"end\">\n      <ion-fab-button id=\"open-modal-desk\" expand=\"block\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n    <div class=\"fixa\" *ngIf=\"loaded\" >\n      <ion-card *ngFor=\"let producto of reviews\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-text-center\">{{producto.title}}</ion-card-title>\n          <ion-card-subtitle class=\"ion-text-center\"><img src=\"{{'https://lideart.com.mx/modules/lgcomments/views/img/stars/plain/bluelight/'+producto.stars+'stars.png'}}\"></ion-card-subtitle>\n        </ion-card-header>\n        \n      \n        <ion-card-content>\n          <div [innerHTML]=\"producto.comment\"></div>\n        </ion-card-content>\n        <ion-card-content>\n          <ion-label slot=\"float:left\">{{producto.nick}}</ion-label>\n          <ion-label style=\"float:right;\">{{producto.date}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n  <ion-fab slot=\"fixed\" vertical=\"start\" horizontal=\"end\">\n    <ion-fab-button id=\"open-modal2\" expand=\"block\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <div *ngIf=\"loaded\" >\n  <ion-card *ngFor=\"let producto of reviews\">\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">{{producto.title}}</ion-card-title>\n      <ion-card-subtitle class=\"ion-text-center\"><img src=\"{{'https://lideart.com.mx/modules/lgcomments/views/img/stars/plain/bluelight/'+producto.stars+'stars.png'}}\"></ion-card-subtitle>\n    </ion-card-header>\n    \n  \n    <ion-card-content>\n      <div [innerHTML]=\"producto.comment\"></div>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-label slot=\"float:left\">{{producto.nick}}</ion-label>\n      <ion-label style=\"float:right;\">{{producto.date}}</ion-label>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<ion-modal trigger=\"open-modal2\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"cancel2()\">Volver</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <div class=\"modal\">\n      <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estrellas\">\n        <option value=\"0\" selected>Selecciona Calificación</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n      </select>\n      \n      <input class=\"inps\" type=\"text\" name=\"addrnombreess1\" [(ngModel)]=\"nombre\"  placeholder=\"Nombre\">\n      <input class=\"inps\" type=\"text\" name=\"titulo\" [(ngModel)]=\"titulo\" placeholder=\"Titulo\">\n      <textarea class=\"inps\" rows=\"5\" cols=\"50\" name=\"comentario\" [(ngModel)]=\"comentario\" placeholder=\"Comentario\"></textarea>\n      <ion-button (click)=\"registraReview()\">Enviar Comentario</ion-button>\n    </div>\n   \n  </ng-template>\n</ion-modal>\n\n<ion-modal trigger=\"open-modal-desk\" #modalDesk style=\"--width: 450px; --height: auto;\">\n  <ng-template style=\"padding: 1em;\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"cancel2desk()\">Volver</ion-button>\n    </ion-buttons>\n    <div class=\"modal\">\n      <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estrellas\" style=\"color: #000;\">\n        <option value=\"0\" selected>Selecciona Calificación</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n      </select>\n      \n      <input class=\"inps\" type=\"text\" name=\"addrnombreess1\" [(ngModel)]=\"nombre\"  placeholder=\"Nombre\" style=\"color: #000;\">\n      <input class=\"inps\" type=\"text\" name=\"titulo\" [(ngModel)]=\"titulo\" placeholder=\"Titulo\" style=\"color: #000;\">\n      <textarea class=\"inps\" rows=\"5\" cols=\"50\" name=\"comentario\" [(ngModel)]=\"comentario\" placeholder=\"Comentario\" style=\"color: #000;\"></textarea>\n      <ion-button (click)=\"registraReview()\">Enviar Comentario</ion-button>\n    </div>\n   \n  </ng-template>\n</ion-modal>\n\n  <ion-list *ngIf=\"!loaded\">\n    <ion-list-header>\n      <ion-skeleton-text [animated]=\"true\" style=\"width: 80px\"></ion-skeleton-text>\n    </ion-list-header>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text [animated]=\"true\"></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 80%;\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 60%;\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text [animated]=\"true\" style=\"width: 30%;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n \n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reviews_reviews_module_ts.js.map
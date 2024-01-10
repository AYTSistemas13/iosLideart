(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_articulo-blog_articulo-blog_module_ts"],{

/***/ 74053:
/*!*********************************************************************!*\
  !*** ./src/app/pages/articulo-blog/articulo-blog-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticuloBlogPageRoutingModule: () => (/* binding */ ArticuloBlogPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _articulo_blog_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articulo-blog.page */ 66338);




const routes = [{
  path: '',
  component: _articulo_blog_page__WEBPACK_IMPORTED_MODULE_0__.ArticuloBlogPage
}];
let ArticuloBlogPageRoutingModule = class ArticuloBlogPageRoutingModule {};
ArticuloBlogPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ArticuloBlogPageRoutingModule);

/***/ }),

/***/ 14912:
/*!*************************************************************!*\
  !*** ./src/app/pages/articulo-blog/articulo-blog.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticuloBlogPageModule: () => (/* binding */ ArticuloBlogPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _articulo_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articulo-blog-routing.module */ 74053);
/* harmony import */ var _articulo_blog_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articulo-blog.page */ 66338);







let ArticuloBlogPageModule = class ArticuloBlogPageModule {};
ArticuloBlogPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _articulo_blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.ArticuloBlogPageRoutingModule],
  declarations: [_articulo_blog_page__WEBPACK_IMPORTED_MODULE_1__.ArticuloBlogPage]
})], ArticuloBlogPageModule);

/***/ }),

/***/ 66338:
/*!***********************************************************!*\
  !*** ./src/app/pages/articulo-blog/articulo-blog.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticuloBlogPage: () => (/* binding */ ArticuloBlogPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _articulo_blog_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articulo-blog.page.html?ngResource */ 22711);
/* harmony import */ var _articulo_blog_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articulo-blog.page.scss?ngResource */ 27393);
/* harmony import */ var _articulo_blog_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_articulo_blog_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);






let ArticuloBlogPage = class ArticuloBlogPage {
  constructor(blogService, activatedRoute) {
    this.blogService = blogService;
    this.activatedRoute = activatedRoute;
    this.blogaso = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.id_post = params.id_blog;
      this.traerArticulo(this.id_post);
    });
  }
  traerArticulo(id_post) {
    this.blogService.recuperaArticulo(id_post).subscribe(data => {
      this.blogaso = data;
      this.image = this.blogaso[0].image;
      this.descripcion = this.blogaso[0].description;
      var posicion = this.descripcion.indexOf("<img");
      var posicion2 = posicion + 4;
      this.descripcion = this.descripcion.slice(0, posicion2) + ' class="testas"' + this.descripcion.slice(posicion + 4);
      console.log(this.descripcion);
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_2__.ServiciowishlistService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }];
};
ArticuloBlogPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-articulo-blog',
  template: _articulo_blog_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_articulo_blog_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ArticuloBlogPage);
/*while (posicion >= 0){


  this.descripcion = this.descripcion.slice(0, posicion2) + 'kla';
  //this.descripcion = this.descripcion.slice(0, posicion) + 'kla' + this.descripcion.slice(posicion + 4);

  posicion = this.descripcion.indexOf("<img");
}*/

/***/ }),

/***/ 27393:
/*!************************************************************************!*\
  !*** ./src/app/pages/articulo-blog/articulo-blog.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.conti .testas {
  width: 10px !important;
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
  z-index: 99;
}

.line-filter {
  text-align: center;
  line-height: 20px;
  background: #70c2d1;
  padding: 0;
  margin: 0;
}

.header-ios ion-toolbar:last-of-type {
  --border-width: 0;
}

.header-translucent-ios ion-toolbar {
  --opacity: 1;
}

ion-card-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

ion-card-content {
  width: 100%;
  height: auto;
  overflow: hidden;
  text-overflow: ellipsis;
}

.textito {
  height: 150px;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/articulo-blog/articulo-blog.page.scss"],"names":[],"mappings":"AACE;EACE,sBAAA;AAAJ;;AAIA;EACI,oCAAA;AADJ;;AAIE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AADJ;;AAIE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AADJ;;AAIE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AADJ;;AAIE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AADJ;;AAIE;EACE,iBAAA;AADJ;;AAGE;EACE,YAAA;AAAJ;;AAKA;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;AAFF;;AAMA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EAEA,uBAAA;AAJF;;AAQA;EACE,aAAA;AALF","sourcesContent":[".conti{\n  .testas{\n    width: 10px!important;\n  }\n}\n\nion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n    z-index: 99;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n\n\n\nion-card-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  \n}\n\nion-card-content {\n  width: 100%;\n  height:auto;\n  overflow: hidden;\n  \n  text-overflow: ellipsis;\n  \n}\n\n.textito{\n  height: 150px;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 22711:
/*!************************************************************************!*\
  !*** ./src/app/pages/articulo-blog/articulo-blog.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Blog\n    </ion-title>\n    <!-- <ion-title class=\"ion-text-center\">\n      <img class=\"imagensita\"  src=\"/assets/img/logo-negro.png\" routerLink=\"/home\" >\n    </ion-title> -->\n  \n    <!-- <ion-button\n  (click)=\"openSearchBar()\"\n  color=\"secondary\"\n  class=\"ion-activable ripple-parent\"\n slot=\"end\"\n>\n  <ion-icon name=\"search-outline\" color=\"light\"></ion-icon>\n  <ion-ripple-effect></ion-ripple-effect>\n</ion-button> -->\n\n    <ion-button color=\"secondary\"\n    class=\"ion-activable ripple-parent\"\n    slot=\"end\"\n    [routerLink]=\"['/perfil']\"\n    >\n    <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-button>\n\n\n  </ion-toolbar>\n  <div style=\"display: none;\" id=\"buscador\">\n\n  </div>\n</ion-header>\n\n<ion-content>\n\n  <div  *ngFor=\"let item of blogaso\">\n\n    <img src=\"https://lideart.com.mx/img/ybc_blog/post/{{image}}\">\n\n    <div style=\"margin-left: 15px; margin-right: 15px;\" class=\"conti\" [innerHTML]=\"descripcion\">\n\n    </div>\n  </div>\n  </ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_articulo-blog_articulo-blog_module_ts.js.map
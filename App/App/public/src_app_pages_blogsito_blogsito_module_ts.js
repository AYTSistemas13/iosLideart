(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_blogsito_blogsito_module_ts"],{

/***/ 14799:
/*!***********************************************************!*\
  !*** ./src/app/pages/blogsito/blogsito-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogsitoPageRoutingModule: () => (/* binding */ BlogsitoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _blogsito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogsito.page */ 97297);




const routes = [{
  path: '',
  component: _blogsito_page__WEBPACK_IMPORTED_MODULE_0__.BlogsitoPage
}];
let BlogsitoPageRoutingModule = class BlogsitoPageRoutingModule {};
BlogsitoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BlogsitoPageRoutingModule);

/***/ }),

/***/ 72297:
/*!***************************************************!*\
  !*** ./src/app/pages/blogsito/blogsito.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogsitoPageModule: () => (/* binding */ BlogsitoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _blogsito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogsito-routing.module */ 14799);
/* harmony import */ var _blogsito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogsito.page */ 97297);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let BlogsitoPageModule = class BlogsitoPageModule {};
BlogsitoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _blogsito_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogsitoPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_blogsito_page__WEBPACK_IMPORTED_MODULE_1__.BlogsitoPage]
})], BlogsitoPageModule);

/***/ }),

/***/ 97297:
/*!*************************************************!*\
  !*** ./src/app/pages/blogsito/blogsito.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogsitoPage: () => (/* binding */ BlogsitoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _blogsito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blogsito.page.html?ngResource */ 291);
/* harmony import */ var _blogsito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blogsito.page.scss?ngResource */ 33500);
/* harmony import */ var _blogsito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blogsito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/serviciowishlist.service */ 69919);





let BlogsitoPage = class BlogsitoPage {
  constructor(blogService) {
    this.blogService = blogService;
    this.blogArray = [];
  }
  ngOnInit() {
    this.traerBlog();
  }
  traerBlog() {
    this.blogService.recuperaBlog().subscribe(data => {
      this.blogArray = data;
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_serviciowishlist_service__WEBPACK_IMPORTED_MODULE_2__.ServiciowishlistService
  }];
};
BlogsitoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-blogsito',
  template: _blogsito_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_blogsito_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BlogsitoPage);

/***/ }),

/***/ 33500:
/*!**************************************************************!*\
  !*** ./src/app/pages/blogsito/blogsito.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `p {
  margin-block-start: 0em !important;
  margin-block-end: 0em !important;
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
}

.blogsitoDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.blogsitoDesk .bodyBlog {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
}
.blogsitoDesk .bodyBlog .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.blogsitoDesk .bodyBlog .taitl-cont .taitl {
  color: #00a3c7;
  font-size: 1.7em;
}
.blogsitoDesk .bodyBlog .grida-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  padding: 0em 1em;
}
.blogsitoDesk .bodyBlog .grida-cont .carda {
  width: 18em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
  transition: 0.5s all ease-in-out;
}
.blogsitoDesk .bodyBlog .grida-cont .carda img {
  width: 100%;
  height: auto;
}
.blogsitoDesk .bodyBlog .grida-cont .carda .title-blog {
  width: 100%;
  height: auto;
  text-align: center;
  color: #000;
  padding: 0em 1em;
  font-size: 1.1em;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.blogsitoDesk .bodyBlog .grida-cont .carda .title-blog:hover {
  color: #00a3c7;
}
.blogsitoDesk .bodyBlog .grida-cont .carda .textito {
  width: 100%;
  padding: 0em 1em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  height: auto;
  text-align: center;
  color: #000;
  font-size: 0.9em;
}
.blogsitoDesk .bodyBlog .grida-cont .carda .rmore {
  color: #666;
  text-decoration: none;
  width: 100%;
  height: auto;
  padding: 0em 1.2em;
  padding-bottom: 1em;
  transition: 0.3s all ease-in-out;
  text-decoration: underline;
  font-style: italic;
  font-size: 0.9em;
}
.blogsitoDesk .bodyBlog .grida-cont .carda .rmore:hover {
  color: #00a3c7;
}
.blogsitoDesk .bodyBlog .grida-cont .carda:hover {
  box-shadow: rgba(2, 164, 197, 0.8) 0px 5px 24px;
}

@media (min-width: 992px) {
  ion-content {
    display: none;
  }
  .blogsitoDesk {
    display: flex;
  }
}
.blogsitoDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.blogsitoDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/blogsito/blogsito.page.scss"],"names":[],"mappings":"AAAA;EACE,kCAAA;EACA,gCAAA;AACF;;AAEA;EACI,oCAAA;AACJ;;AAEE;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AACJ;;AAEE;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AACJ;;AAEE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AACJ;;AAEE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AACJ;;AAEE;EACE,iBAAA;AACJ;;AACE;EACE,YAAA;AAEJ;;AAGA;EACE,gBAAA;EACA,mBAAA;EACA,uBAAA;AAAF;;AAIA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EAEA,uBAAA;AAFF;;AAMA;EACE,aAAA;AAHF;;AAMA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AAHF;AAKE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;AAHJ;AAKI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AAHN;AAKM;EACE,cAAA;EACA,gBAAA;AAHR;AAOI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;EACA,gBAAA;AALN;AAOM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EAEA,iDAAA;EACA,gCAAA;AANR;AAQQ;EACE,WAAA;EACA,YAAA;AANV;AASQ;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;AAPV;AAUQ;EACE,cAAA;AARV;AAWQ;EACE,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,WAAA;EACA,gBAAA;AATV;AAYQ;EACE,WAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;EACA,0BAAA;EACA,kBAAA;EACA,gBAAA;AAVV;AAaQ;EACE,cAAA;AAXV;AAeM;EACE,+CAAA;AAbR;;AAmBA;EACE;IACE,aAAA;EAhBF;EAmBA;IACE,aAAA;EAjBF;AACF;AAoBA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAlBF;;AAqBA;EACE,iDAAA;EAEA,aAAA;AAnBF","sourcesContent":["p {\n  margin-block-start: 0em!important;\n  margin-block-end: 0em!important;\n}\n\nion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n    z-index: 99;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n\n\n\nion-card-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  \n}\n\nion-card-content {\n  width: 100%;\n  height:auto;\n  overflow: hidden;\n  \n  text-overflow: ellipsis;\n  \n}\n\n.textito{\n  height: 150px;\n}\n\n.blogsitoDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow-y: scroll;\n\n  .bodyBlog{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 3em 0em;\n    gap: 2em;\n\n    .taitl-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n\n      .taitl{\n        color: #00a3c7;\n        font-size: 1.7em;\n      }\n    }\n\n    .grida-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 1em;\n      padding: 0em 1em;\n\n      .carda{\n        width: 18em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1em;\n        //border: 1px solid red;\n        box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;\n        transition: .5s all ease-in-out;\n        \n        img{\n          width: 100%;\n          height: auto;\n        }\n\n        .title-blog{\n          width: 100%;\n          height: auto;\n          text-align: center;\n          color: #000;\n          padding: 0em 1em;\n          font-size: 1.1em;\n          cursor: pointer;\n          transition: .3s all ease-in-out;\n        }\n\n        .title-blog:hover{\n          color: #00a3c7;\n        }\n\n        .textito{\n          width: 100%;\n          padding: 0em 1em;\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          height: auto;\n          text-align: center;\n          color: #000;\n          font-size: .9em;\n        }\n\n        .rmore{\n          color: #666;\n          text-decoration: none;\n          width: 100%;\n          height: auto;\n          padding: 0em 1.2em;\n          padding-bottom: 1em;\n          transition: .3s all ease-in-out;\n          text-decoration: underline;\n          font-style: italic;\n          font-size: .9em;\n        }\n\n        .rmore:hover{\n          color: #00a3c7;\n        }\n      }\n\n      .carda:hover{\n        box-shadow: rgba(2, 164, 197, 0.8) 0px 5px 24px;\n      }\n    }\n  }\n}\n\n@media(min-width: 992px){\n  ion-content{\n    display: none;\n  }\n\n  .blogsitoDesk{\n    display: flex;\n  }\n}\n\n.blogsitoDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.blogsitoDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 291:
/*!**************************************************************!*\
  !*** ./src/app/pages/blogsito/blogsito.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"blogsitoDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"bodyBlog\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Blog</span>\n    </div>\n    <div class=\"grida-cont\">\n      <div class=\"carda\" *ngFor=\"let item of blogArray\">\n        <a [routerLink]=\"['/articulo-blog',item.id_post]\" style=\"width: 100%;\">\n          <img src=\"https://lideart.com.mx/img/ybc_blog/post/thumb/{{item.thumb}}\" />\n        </a>\n        <a class=\"title-blog\">{{item.title}}</a> \n        <p class=\"textito\" [innerHTML]=\"item.short_description\"></p>\n        <a class=\"rmore\" [routerLink]=\"['/articulo-blog',item.id_post]\">Leer Mas</a>\n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content style=\"--padding-top: 4em;\">\n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-down-outline\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"bottom\">\n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Cursos y Eventos.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n    <img class=\"icons\" src=\"/assets/img/blog/iconos/Descargables.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Equipos y Materiales.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Experiencias.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Festividades.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Ideas e Inspiraciones.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Noticias.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Proyectos.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Tutoriales y guías.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    \n   \n      <ion-item\n      routerDirection=\"root\"\n      \n      lines=\"none\"\n      detail=\"false\"\n      routerLinkActive=\"selected\"\n    >\n          <img class=\"icons\" src=\"/assets/img/blog/iconos/Videos.png\" height=\"25px\" width=\"25px\">\n    </ion-item>\n    </ion-fab-list>\n  </ion-fab>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of blogArray\">\n          <ion-card>\n            <img src=\"https://lideart.com.mx/img/ybc_blog/post/thumb/{{item.thumb}}\" />\n            <ion-card-header>\n              <ion-card-title>{{item.title}}</ion-card-title>\n            </ion-card-header>\n          \n            <ion-card-content>\n              <p class=\"textito\" [innerHTML]=\"item.short_description\"></p>\n              \n            </ion-card-content>\n            <ion-button fill=\"clear\" [routerLink]=\"['/articulo-blog',item.id_post]\">Leer Mas</ion-button>\n          </ion-card>         \n          \n        </ion-col>\n        <!-- <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button [routerLink]=\"['/catalogo','37']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/2 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col> -->\n      </ion-row>\n      <!-- <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/3 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button [routerLink]=\"['/catalogo','37']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/4 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/5 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button [routerLink]=\"['/catalogo','37']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/6 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button block [routerLink]=\"['/catalogo','20']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/7 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"cardContainer\">\n            <button [routerLink]=\"['/catalogo','37']\"  style=\"width: 100%;\">\n              <img src=\"/assets/img/blog/8 Blog.png\" width=\"100%\"\n              />\n            </button>\n          </div>\n        </ion-col>\n      </ion-row> -->\n    </ion-grid>\n \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_blogsito_blogsito_module_ts.js.map
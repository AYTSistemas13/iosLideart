(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cursos-gratis_cursos-gratis_module_ts"],{

/***/ 89362:
/*!*********************************************************************!*\
  !*** ./src/app/pages/cursos-gratis/cursos-gratis-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursosGratisPageRoutingModule: () => (/* binding */ CursosGratisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _cursos_gratis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursos-gratis.page */ 61381);




const routes = [{
  path: '',
  component: _cursos_gratis_page__WEBPACK_IMPORTED_MODULE_0__.CursosGratisPage
}];
let CursosGratisPageRoutingModule = class CursosGratisPageRoutingModule {};
CursosGratisPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CursosGratisPageRoutingModule);

/***/ }),

/***/ 24169:
/*!*************************************************************!*\
  !*** ./src/app/pages/cursos-gratis/cursos-gratis.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursosGratisPageModule: () => (/* binding */ CursosGratisPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _cursos_gratis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursos-gratis-routing.module */ 89362);
/* harmony import */ var _cursos_gratis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursos-gratis.page */ 61381);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let CursosGratisPageModule = class CursosGratisPageModule {};
CursosGratisPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _cursos_gratis_routing_module__WEBPACK_IMPORTED_MODULE_0__.CursosGratisPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_cursos_gratis_page__WEBPACK_IMPORTED_MODULE_1__.CursosGratisPage]
})], CursosGratisPageModule);

/***/ }),

/***/ 61381:
/*!***********************************************************!*\
  !*** ./src/app/pages/cursos-gratis/cursos-gratis.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CursosGratisPage: () => (/* binding */ CursosGratisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cursos_gratis_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cursos-gratis.page.html?ngResource */ 90359);
/* harmony import */ var _cursos_gratis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cursos-gratis.page.scss?ngResource */ 67174);
/* harmony import */ var _cursos_gratis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursos_gratis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let CursosGratisPage = class CursosGratisPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
CursosGratisPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-cursos-gratis',
  template: _cursos_gratis_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cursos_gratis_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CursosGratisPage);

/***/ }),

/***/ 67174:
/*!************************************************************************!*\
  !*** ./src/app/pages/cursos-gratis/cursos-gratis.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cursosDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  overflow-y: scroll;
}
.cursosDesk .cursosCont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
}
.cursosDesk .cursosCont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cursosDesk .cursosCont .taitl-cont .taitl {
  color: #00a3c7;
  font-weight: 100;
  font-size: 2em;
}
.cursosDesk .cursosCont .content-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0em 2em;
  gap: 2em;
}
.cursosDesk .cursosCont .content-cont .opt {
  width: 25em;
  height: 15em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5.5em 0em 5.5em 0em;
  overflow: hidden;
  box-shadow: rgba(0, 163, 197, 0.4) -5px 5px, rgba(0, 163, 197, 0.3) -10px 10px, rgba(0, 163, 197, 0.2) -15px 15px, rgba(0, 163, 197, 0.1) -20px 20px, rgba(0, 163, 197, 0.05) -25px 25px;
  animation: 1s ajam ease-in-out infinite;
  animation-play-state: paused;
  position: relative;
}
.cursosDesk .cursosCont .content-cont .opt .tapa1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  transition: 1s all ease-in-out;
  top: -100%;
  background-color: #00a3c7;
  padding: 1em;
  padding-left: 2em;
  gap: 0.2em;
}
.cursosDesk .cursosCont .content-cont .opt .tapa1 .ir {
  text-decoration: none;
  color: #fff;
  font-weight: 100;
  font-size: 0.7em;
  transition: 0.5s all ease-in-out;
  padding: 0.1em;
}
.cursosDesk .cursosCont .content-cont .opt .tapa1 .ir:hover {
  color: rgba(255, 255, 255, 0.616);
}
.cursosDesk .cursosCont .content-cont .opt .tapa1 .ir2 {
  text-decoration: none;
  color: #fff;
  font-weight: 100;
  font-size: 1.3em;
  transition: 0.5s all ease-in-out;
  padding: 0.4em 1.5em;
  border-radius: 2em;
  background-color: #00c090;
}
.cursosDesk .cursosCont .content-cont .opt .tapa1 .ir2:hover {
  background-color: #00af88;
}
.cursosDesk .cursosCont .content-cont .opt:hover {
  animation-play-state: running;
}
.cursosDesk .cursosCont .content-cont .opt:hover .tapa1 {
  top: 0%;
}
@keyframes ajam {
  0% {
    box-shadow: rgba(0, 163, 197, 0.5) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;
  }
  25% {
    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0.4) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;
  }
  50% {
    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0.3) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;
  }
  75% {
    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0.2) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;
  }
  100% {
    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0.1) -25px 25px;
  }
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(1) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_CRICUT.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(2) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_SILHOUETTE.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(3) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_LUMINOS.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(4) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados-SAWGRASS.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(5) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_JANOME.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(6) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_SUBLIMARTS.webp");
}
.cursosDesk .cursosCont .content-cont .opt:nth-child(7) {
  background-image: url("https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_OTROS.webp");
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .cursosDesk {
    display: flex;
  }
}
.cursosDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.cursosDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/cursos-gratis/cursos-gratis.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACZ;AACY;EACI,cAAA;EACA,gBAAA;EACA,cAAA;AAChB;AAGQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,gBAAA;EACA,QAAA;AADZ;AAGY;EACI,WAAA;EACA,YAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;EACA,kCAAA;EACA,gBAAA;EACA,wLAAA;EACA,uCAAA;EACA,4BAAA;EACA,kBAAA;AADhB;AAGgB;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,kBAAA;EACA,8BAAA;EACA,UAAA;EACA,yBAAA;EACA,YAAA;EACA,iBAAA;EACA,UAAA;AADpB;AAGoB;EACI,qBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,gCAAA;EACA,cAAA;AADxB;AAIoB;EACI,iCAAA;AAFxB;AAKoB;EACI,qBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;EACA,gCAAA;EACA,oBAAA;EACA,kBAAA;EACA,yBAAA;AAHxB;AAMoB;EACI,yBAAA;AAJxB;AASY;EACI,6BAAA;AAPhB;AASgB;EACI,OAAA;AAPpB;AAWY;EACI;IACI,+KAAA;EATlB;EAWc;IACI,+KAAA;EATlB;EAWc;IACI,+KAAA;EATlB;EAWc;IACI,+KAAA;EATlB;EAWc;IACI,+KAAA;EATlB;AACF;AAYY;EACI,qGAAA;AAVhB;AAaY;EACI,yGAAA;AAXhB;AAcY;EACI,sGAAA;AAZhB;AAeY;EACI,uGAAA;AAbhB;AAgBY;EACI,qGAAA;AAdhB;AAiBY;EACI,yGAAA;AAfhB;AAkBY;EACI,oGAAA;AAhBhB;;AAsBA;EACI;IACI,aAAA;EAnBN;EAsBE;IACI,aAAA;EApBN;EAuBE;IACI,aAAA;EArBN;AACF;AAwBA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AAtBJ;;AAyBA;EACI,iDAAA;EAEA,aAAA;AAvBJ","sourcesContent":[".cursosDesk{\n    width: 100%;\n    height: auto;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    overflow-y: scroll;\n\n    .cursosCont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 2em;\n\n        .taitl-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .taitl{\n                color: #00a3c7;\n                font-weight: 100;\n                font-size: 2em;\n            }\n        }\n\n        .content-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: center;\n            padding: 0em 2em;\n            gap: 2em;\n\n            .opt{\n                width: 25em;\n                height: 15em;\n                background-position: center;\n                background-repeat: no-repeat;\n                background-size: cover;\n                border-radius: 5.5em 0em 5.5em 0em;\n                overflow: hidden;\n                box-shadow: rgba(0, 163, 197, 0.4) -5px 5px, rgba(0, 163, 197, 0.3) -10px 10px, rgba(0, 163, 197, 0.2) -15px 15px, rgba(0, 163, 197, 0.1) -20px 20px, rgba(0, 163, 197, 0.05) -25px 25px;\n                animation: 1s ajam ease-in-out infinite;\n                animation-play-state: paused;\n                position: relative;\n\n                .tapa1{\n                    width: 100%;\n                    height: 100%;\n                    display: flex;\n                    flex-direction: column;\n                    justify-content: center;\n                    align-items: flex-start;\n                    position: absolute;\n                    transition: 1s all ease-in-out;\n                    top: -100%;\n                    background-color: #00a3c7;\n                    padding: 1em;\n                    padding-left: 2em;\n                    gap: .2em;\n\n                    .ir{\n                        text-decoration: none;\n                        color: #fff;\n                        font-weight: 100;\n                        font-size: .7em;\n                        transition: .5s all ease-in-out;\n                        padding: .1em;\n                    }\n\n                    .ir:hover{\n                        color: rgba(255, 255, 255, 0.616);\n                    }\n\n                    .ir2{\n                        text-decoration: none;\n                        color: #fff;\n                        font-weight: 100;\n                        font-size: 1.3em;\n                        transition: .5s all ease-in-out;\n                        padding: 0.4em 1.5em;\n                        border-radius: 2em;\n                        background-color: #00c090;\n                    }\n\n                    .ir2:hover{\n                        background-color: #00af88;\n                    }\n                }\n            }\n\n            .opt:hover{\n                animation-play-state: running;\n\n                .tapa1{\n                    top: 0%;\n                }\n            }\n\n            @keyframes ajam{\n                0%{\n                    box-shadow: rgba(0, 163, 197, 0.5) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;\n                }\n                25%{\n                    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0.4) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;\n                }\n                50%{\n                    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0.3) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;\n                }\n                75%{\n                    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0.2) -20px 20px, rgba(0, 163, 197, 0) -25px 25px;\n                }\n                100%{\n                    box-shadow: rgba(0, 163, 197, 0) -5px 5px, rgba(0, 164, 197, 0) -10px 10px, rgba(0, 164, 197, 0) -15px 15px, rgba(0, 163, 197, 0) -20px 20px, rgba(0, 163, 197, 0.1) -25px 25px;\n                }\n            }\n\n            .opt:nth-child(1){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_CRICUT.webp');\n            }\n\n            .opt:nth-child(2){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_SILHOUETTE.webp');\n            }\n\n            .opt:nth-child(3){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_LUMINOS.webp');\n            }\n\n            .opt:nth-child(4){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados-SAWGRASS.webp');\n            }\n\n            .opt:nth-child(5){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_JANOME.webp');\n            }\n\n            .opt:nth-child(6){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_SUBLIMARTS.webp');\n            }\n\n            .opt:nth-child(7){\n                background-image: url('https://lideart.com.mx/img/cursos_pregrabados/Cursos_pregrabados_OTROS.webp');\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-header{\n        display: none;\n    }\n\n    ion-content{\n        display: none;\n    }\n\n    .cursosDesk{\n        display: flex;\n    }\n}\n\n.cursosDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.cursosDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90359:
/*!************************************************************************!*\
  !*** ./src/app/pages/cursos-gratis/cursos-gratis.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cursos-gratis</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<section class=\"cursosDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"cursosCont\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Cursos Gratis</span>\n    </div>\n    <div class=\"content-cont\">\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/242945030206142/\" class=\"ir\" target=\"blank\">- Curso Easypress + Explore Air 2: corte y aplicación básica de vinil textil</a>\n          <a href=\"https://www.facebook.com/groups/563318844391386/\" class=\"ir\" target=\"blank\">- Curso Easypress + Maker: corte y aplicación básica de vinil textil</a>\n          <a href=\"https://www.facebook.com/groups/658708114895173/\" class=\"ir\" target=\"blank\">- Curso Easypress: aplicación vinil textil básico</a>\n          <a href=\"https://www.facebook.com/groups/242216730282933/\" class=\"ir\" target=\"blank\">- Curso Easypress Mini + Explore Air 2: corte y aplicación vinil textil básico</a>\n          <a href=\"https://www.facebook.com/groups/685465395233323/\" class=\"ir\" target=\"blank\">- Curso online Explore Air 2 básico</a>\n          <a href=\"https://www.facebook.com/groups/4840776332618340/\" class=\"ir\" target=\"blank\">- Curso online básico Explore 3</a>\n          <a href=\"https://www.facebook.com/groups/207324630532408/\" class=\"ir\" target=\"blank\">- Curso online básico Cricut Joy</a>\n          <a href=\"https://www.facebook.com/groups/376944303175071/\" class=\"ir\" target=\"blank\">- Curso online Maker básico</a>\n          <a href=\"https://www.facebook.com/groups/3663712350519664/\" class=\"ir\" target=\"blank\">- Curso online básico Maker 3</a>\n          <a href=\"https://www.facebook.com/groups/542288737082970/\" class=\"ir\" target=\"blank\">- Curso online básico Mug Press</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/332512787795612/\" class=\"ir\" target=\"blank\">- Curso Silhouette Alta básico</a>\n          <a href=\"https://www.facebook.com/groups/704771843263368/\" class=\"ir\" target=\"blank\">- Curso Cameo 4 básico online</a>\n          <a href=\"https://www.facebook.com/groups/456080841823862/\" class=\"ir\" target=\"blank\">- Curso online Curio básico</a>\n          <a href=\"https://www.facebook.com/groups/2014676408674698/\" class=\"ir\" target=\"blank\">- Curso básico Silhouette Portrait 3</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/148720093124464/\" class=\"ir\" target=\"blank\">- Curso Técnicas de aplicación de foil</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/235701960889815/\" class=\"ir\" target=\"blank\">- Curso Sawgrass básico</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/520293581964682/\" class=\"ir\" target=\"blank\">- Curso costura Mini Deluxe: elaboración de cubrebocas</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/285037092782788/\" class=\"ir\" target=\"blank\">- Curso planchas Sublimarts</a>\n        </div>\n      </div>\n      <div class=\"opt\">\n        <div class=\"tapa1\">\n          <a href=\"https://www.facebook.com/groups/199339961487210/\" class=\"ir\" target=\"blank\">- Curso técnicas para Embossing</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cursos-gratis_cursos-gratis_module_ts.js.map
"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_modal-product_modal-product_module_ts"],{

/***/ 1663:
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal-product/modal-product-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalProductPageRoutingModule: () => (/* binding */ ModalProductPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _modal_product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-product.page */ 17571);




const routes = [{
  path: '',
  component: _modal_product_page__WEBPACK_IMPORTED_MODULE_0__.ModalProductPage
}];
let ModalProductPageRoutingModule = class ModalProductPageRoutingModule {};
ModalProductPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ModalProductPageRoutingModule);

/***/ }),

/***/ 31384:
/*!*************************************************************!*\
  !*** ./src/app/pages/modal-product/modal-product.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalProductPageModule: () => (/* binding */ ModalProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _modal_product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-product-routing.module */ 1663);
/* harmony import */ var _modal_product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-product.page */ 17571);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-lazyload-image */ 21935);








let ModalProductPageModule = class ModalProductPageModule {};
ModalProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_7__.LazyLoadImageModule, _modal_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalProductPageRoutingModule],
  declarations: [_modal_product_page__WEBPACK_IMPORTED_MODULE_1__.ModalProductPage]
})], ModalProductPageModule);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_modal-product_modal-product_module_ts.js.map
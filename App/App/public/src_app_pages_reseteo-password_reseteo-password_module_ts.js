(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_reseteo-password_reseteo-password_module_ts"],{

/***/ 46070:
/*!***************************************************************************!*\
  !*** ./src/app/pages/reseteo-password/reseteo-password-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReseteoPasswordPageRoutingModule: () => (/* binding */ ReseteoPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _reseteo_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reseteo-password.page */ 12903);




const routes = [{
  path: '',
  component: _reseteo_password_page__WEBPACK_IMPORTED_MODULE_0__.ReseteoPasswordPage
}];
let ReseteoPasswordPageRoutingModule = class ReseteoPasswordPageRoutingModule {};
ReseteoPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], ReseteoPasswordPageRoutingModule);

/***/ }),

/***/ 8702:
/*!*******************************************************************!*\
  !*** ./src/app/pages/reseteo-password/reseteo-password.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReseteoPasswordPageModule: () => (/* binding */ ReseteoPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _reseteo_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reseteo-password-routing.module */ 46070);
/* harmony import */ var _reseteo_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reseteo-password.page */ 12903);







let ReseteoPasswordPageModule = class ReseteoPasswordPageModule {};
ReseteoPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _reseteo_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReseteoPasswordPageRoutingModule],
  declarations: [_reseteo_password_page__WEBPACK_IMPORTED_MODULE_1__.ReseteoPasswordPage]
})], ReseteoPasswordPageModule);

/***/ }),

/***/ 12903:
/*!*****************************************************************!*\
  !*** ./src/app/pages/reseteo-password/reseteo-password.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReseteoPasswordPage: () => (/* binding */ ReseteoPasswordPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _reseteo_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reseteo-password.page.html?ngResource */ 62548);
/* harmony import */ var _reseteo_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reseteo-password.page.scss?ngResource */ 44170);
/* harmony import */ var _reseteo_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reseteo_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ 6138);









let ReseteoPasswordPage = class ReseteoPasswordPage {
  constructor(formBuilder, contactoService, router, activatedRoute, toastController) {
    this.formBuilder = formBuilder;
    this.contactoService = contactoService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.toastController = toastController;
    this.estoycargando = false;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.key = params['key'];
      this.token = params['token'];
    });
  }
  reseteame() {
    this.estoycargando = true;
    this.contactoService.resetMe(this.key, this.token, this.password, this.password2).subscribe(datos => {
      if (datos == 1) {
        this.estoycargando = false;
        this.cambioDePassword();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1500);
      }
      if (datos == 3) {
        this.estoycargando = false;
        this.tokenExpiro();
      }
      if (datos == 2) {
        this.estoycargando = false;
        this.errorUpdate();
      }
    });
  }
  tokenExpiro() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'El token ingresado ya no es valido',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  cambioDePassword() {
    var _this2 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: 'Tu contraseña ah sido actualizada',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  errorUpdate() {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'El correo ingresado no es valido',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
  }];
};
ReseteoPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-reseteo-password',
  template: _reseteo_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_reseteo_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ReseteoPasswordPage);

/***/ }),

/***/ 44170:
/*!******************************************************************************!*\
  !*** ./src/app/pages/reseteo-password/reseteo-password.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logincont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8em 0em;
}
.logincont .login {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.logincont .login .titulo {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 4em;
}
.logincont .login .titulo p {
  font-size: 1.3em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 0rem;
}
.logincont .login .titulo img {
  width: 50%;
  height: auto;
  margin-bottom: 1em;
}
.logincont .login .titulo .imagensita {
  height: auto;
  width: 100px;
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
.logincont .login .titulo .separator {
  margin-bottom: 15px;
}
.logincont .login .titulo .separator:after {
  width: 70px;
  display: block;
  margin: auto;
  content: "";
  height: 1px;
  background: #000000;
  bottom: 0px;
  left: 50%;
  transition: width 0.8s ease, background-color 0.8s ease;
  -webkit-transition: width 0.8s ease, background-color 0.8s ease;
  -o-transition: width 0.8s ease, background-color 0.8s ease;
  -ms-transition: width 0.8s ease, background-color 0.8s ease;
  -moz-transition: width 0.8s ease, background-color 0.8s ease;
}
.logincont .login .titulo .separator:before {
  content: "";
  display: block;
  margin: auto;
  left: 50%;
  height: 1px;
  width: 50px;
  bottom: -10px;
  background: #000000;
  transition: width 0.8s ease, background-color 0.8s ease;
  -webkit-transition: width 0.8s ease, background-color 0.8s ease;
  -o-transition: width 0.8s ease, background-color 0.8s ease;
  -ms-transition: width 0.8s ease, background-color 0.8s ease;
  -moz-transition: width 0.8s ease, background-color 0.8s ease;
  margin-bottom: 4px;
}
.logincont .login form {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
}
.logincont .login form .sup {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1em;
}
.logincont .login form .sup .texti {
  width: 100%;
  font-size: 1.1em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 0rem;
  margin-bottom: 0.5em;
}
.logincont .login form .sup input {
  width: 100%;
  height: 3em;
  background: #f6f6f6;
  border: none;
  color: #999999;
  font-size: 1.1em;
  text-indent: 1em;
  margin-bottom: 1em;
}
.logincont .login form .sup .input:focus {
  outline: none;
}
.logincont .login form .sup .forgot {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
}
.logincont .login form .sup .forgot a {
  font-size: 1.2em;
  color: #ff334c;
}
.logincont .login form .sup .forgot a:hover {
  animation: parpadeo 0.7s ease infinite;
}
@keyframes parpadeo {
  50% {
    opacity: 0;
  }
}
.logincont .login form .sup button {
  width: 100%;
  height: 3em;
  background: #3cc3f8;
  color: #fff;
  font-size: 1.1em;
  border: none;
  cursor: pointer;
  transition: 1s all ease-in-out;
}
.logincont .login form .sup button:hover {
  background: none;
  border: 2px solid #ff334c;
  color: #ff334c;
}
.logincont .login form .imagen-sesion {
  width: 40%;
  height: auto;
}
.logincont .login form .imagen-sesion img {
  width: 100%;
  height: auto;
}
.logincont .login .logsm {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s all ease-in-out;
  padding-bottom: 1em;
}
.logincont .login .logsm h1 {
  font-size: 1.5em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 1em;
}
.logincont .login .logsm .redes {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logincont .login .logsm .redes .red {
  width: 8em;
  padding: 0.5em 0em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 0.5em;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}
.logincont .login .logsm .redes .red i {
  color: #fff;
  margin-right: 0.5em;
}
.logincont .login .logsm .redes .red p {
  color: #fff;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 0rem;
}
.logincont .login .logsm .redes .red:hover {
  width: 8.5em;
  padding: 0.7em 0em;
}
.logincont .login .logsm .redes .red:nth-child(1) {
  background: #4a70ab;
}
.logincont .login .logsm .redes .red:nth-child(2) {
  background: #00d0da;
}
.logincont .login .logsm .redes .red:nth-child(3) {
  background: #e64d39;
}
.logincont .login .logsm .redes .red:last-child {
  margin-right: 0em;
}
@keyframes rainbow {
  0% {
    border-bottom: 4px solid #4a70ab;
  }
  33% {
    border-bottom: 4px solid #4a70ab;
  }
  66% {
    border-bottom: 4px solid #00d0da;
  }
  100% {
    border-bottom: 4px solid #e64d39;
  }
}
.logincont .login:hover .titulo .separator:before {
  width: 70px;
  left: 0;
  background: #ff334c;
}
.logincont .login:hover .titulo .separator:after {
  width: 50px;
  left: 0;
  background: #ff334c;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/reseteo-password/reseteo-password.page.scss"],"names":[],"mappings":"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","sourcesContent":[".logincont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 8em 0em;\n\n    .login{\n        width: 80%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n\n        .titulo{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: center;\n            margin-bottom: 4em;\n        \n            p{\n                font-size: 1.3em;\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n                margin-bottom: 0rem;\n            }\n        \n            img{\n                width: 50%;\n                height: auto;\n                margin-bottom: 1em;\n            }\n            \n            .imagensita{\n                height: auto;\n                width: 100px;\n                margin-top: 10px;\n                padding-left: 5px;\n                padding-right:5px;\n            }\n        \n            .separator{\n                margin-bottom: 15px;\n            }\n        \n            .separator:after { \n                width: 70px; \n                display: block; \n                margin: auto; \n                content: \"\"; \n                height: 1px; \n                background: #000000; \n                bottom: 0px; \n                left: 50%; \n                transition: width .8s ease, background-color .8s ease; -webkit-transition: width .8s ease, background-color .8s ease; \n                -o-transition: width .8s ease, background-color .8s ease; -ms-transition: width .8s ease, background-color .8s ease; \n                -moz-transition: width .8s ease, background-color .8s ease; \n            }\n        \n            .separator:before { \n                content: ''; \n                display: block; \n                margin: auto; \n                left: 50%; \n                height: 1px; \n                width: 50px; \n                bottom: -10px; \n                background: #000000; \n                transition: width .8s ease, background-color .8s ease; -webkit-transition: width .8s ease, background-color .8s ease; \n                -o-transition: width .8s ease, background-color .8s ease; -ms-transition: width .8s ease, background-color .8s ease; \n                -moz-transition: width .8s ease, background-color .8s ease; margin-bottom: 4px; \n            }\n        }\n\n        form{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n            margin-bottom: 3em;\n\n            .sup{\n                width: 50%;\n                height: auto;\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-start;\n                align-items: center;\n                margin-right: 1em;\n\n                .texti{\n                    width: 100%;\n                    font-size: 1.1em;\n                    margin-block-start: 0em;\n                    margin-block-end: 0em;\n                    margin-bottom: 0rem;\n                    margin-bottom: .5em;\n                }\n    \n                input{\n                    width: 100%;\n                    height: 3em;\n                    background: #f6f6f6;\n                    border: none;\n                    color: #999999;\n                    font-size: 1.1em;\n                    text-indent: 1em;\n                    margin-bottom: 1em;\n                }\n    \n                .input:focus{\n                    outline: none;\n                }\n    \n                .forgot{\n                    width: 100%;\n                    height: auto;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                    margin-bottom: 1em;\n    \n                    a{\n                        font-size: 1.2em;\n                        color: #ff334c;\n                    }\n                    \n                    a:hover{\n                        animation: parpadeo .7s ease infinite;\n                    }\n    \n                    @keyframes parpadeo{\n                        50%{opacity: 0;}\n                    }\n                }\n    \n                button{\n                    width: 100%;\n                    height: 3em;\n                    background: #3cc3f8;\n                    color: #fff;\n                    font-size: 1.1em;\n                    border: none;\n                    cursor: pointer;\n                    transition: 1s all ease-in-out;\n                }\n    \n                button:hover{\n                    background: none;\n                    border: 2px solid #ff334c;\n                    color: #ff334c;\n                }\n            }\n\n            .imagen-sesion{\n                width: 40%;\n                height: auto;\n        \n                img{\n                    width: 100%;\n                    height: auto;\n                }\n            }\n        }\n\n        .logsm{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            transition: 1s all ease-in-out;\n            padding-bottom: 1em;\n\n            h1{\n                font-size: 1.5em;\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n                margin-bottom: 1em;\n            }\n\n            .redes{\n                width: 100%;\n                height: auto;\n                display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-items: center;\n\n                .red{\n                    width: 8em;\n                    padding: .5em 0em;\n                    display: flex;\n                    flex-direction: row;\n                    justify-content: center;\n                    align-items: center;\n                    margin-right: .5em;\n                    cursor: pointer;\n                    transition: .3s all ease-in-out;\n\n                    i{\n                        color: #fff;\n                        margin-right: .5em;\n                    }\n\n                    p{\n                        color: #fff;\n                        margin-block-start: 0em;\n                        margin-block-end: 0em;\n                        margin-bottom: 0rem;\n                    }\n                }\n                .red:hover{\n                    width: 8.5em;\n                    padding: .7em 0em;\n                }\n\n                .red:nth-child(1){\n                    background: #4a70ab;\n                }\n\n                .red:nth-child(2){\n                    background: #00d0da;\n                }\n\n                .red:nth-child(3){\n                    background: #e64d39;\n                }\n\n                .red:last-child{\n                    margin-right: 0em;\n                }\n            }\n        }\n\n        // .logsm:hover{\n        //     animation: rainbow .7s ease infinite;\n        // }\n\n        @keyframes rainbow{\n            0%{border-bottom: 4px solid #4a70ab;}\n            33%{border-bottom: 4px solid #4a70ab;}\n            66%{border-bottom: 4px solid #00d0da;}\n            100%{border-bottom: 4px solid #e64d39;}\n        }\n    }\n\n    .login:hover{\n        .titulo .separator:before { width: 70px; left: 0; background: #ff334c; }\n        .titulo .separator:after { width: 50px; left: 0; background: #ff334c; }\n    }\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 62548:
/*!******************************************************************************!*\
  !*** ./src/app/pages/reseteo-password/reseteo-password.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"logincont\">\n    \n  <div class=\"login\">\n      <div class=\"titulo\">\n          <p>¡Hola! <strong>{{key}}</strong> Por favor ingresa tu nueva contraseña</p>\n          <div class=\"separator\"></div>\n      </div>\n      <form>\n          <div class=\"sup\">\n              <p class=\"texti\">Contraseña*</p>\n              <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\"  placeholder=\"Contraseña\" required=\"required\" id=\"inputPassword\"/>\n    \n              <p class=\"texti\">Confirmar Contraseña*</p>\n              <input class=\"form-control\"  type=\"password\" name=\"password2\" [(ngModel)]=\"password2\"  placeholder=\"Confirmar Contraseña\" required=\"required\" id=\"inputPassword2\"/>\n              <button (click)=\"reseteame()\" >Solicitar Recuperación de contraseña</button>\n          </div>\n      </form>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_reseteo-password_reseteo-password_module_ts.js.map
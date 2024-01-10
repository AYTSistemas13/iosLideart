(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_nosotros_nosotros_module_ts"],{

/***/ 3843:
/*!***********************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NosotrosPageRoutingModule: () => (/* binding */ NosotrosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros.page */ 93066);




const routes = [{
  path: '',
  component: _nosotros_page__WEBPACK_IMPORTED_MODULE_0__.NosotrosPage
}];
let NosotrosPageRoutingModule = class NosotrosPageRoutingModule {};
NosotrosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], NosotrosPageRoutingModule);

/***/ }),

/***/ 97541:
/*!***************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NosotrosPageModule: () => (/* binding */ NosotrosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros-routing.module */ 3843);
/* harmony import */ var _nosotros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page */ 93066);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let NosotrosPageModule = class NosotrosPageModule {};
NosotrosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _nosotros_routing_module__WEBPACK_IMPORTED_MODULE_0__.NosotrosPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_nosotros_page__WEBPACK_IMPORTED_MODULE_1__.NosotrosPage]
})], NosotrosPageModule);

/***/ }),

/***/ 93066:
/*!*************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NosotrosPage: () => (/* binding */ NosotrosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _nosotros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nosotros.page.html?ngResource */ 48862);
/* harmony import */ var _nosotros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nosotros.page.scss?ngResource */ 20791);
/* harmony import */ var _nosotros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nosotros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




let NosotrosPage = class NosotrosPage {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
NosotrosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-nosotros',
  template: _nosotros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_nosotros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NosotrosPage);

/***/ }),

/***/ 20791:
/*!**************************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nosotrosDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.nosotrosDesk .conten-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
}
.nosotrosDesk .conten-cont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nosotrosDesk .conten-cont .taitl-cont .taitl {
  color: #00a3c7;
  font-size: 2em;
  font-weight: 100;
}
.nosotrosDesk .conten-cont .filo {
  color: #00a3c7;
  font-weight: 100;
  font-size: 1.5em;
}
.nosotrosDesk .conten-cont .filo img {
  width: 3.8em;
  height: auto;
  filter: drop-shadow(2px 2px 0px #00a3c7);
}
.nosotrosDesk .conten-cont .separt {
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6em;
}
.nosotrosDesk .conten-cont .separt .subts {
  color: #00a3c7;
  font-weight: 100;
  font-size: 1.2em;
}
.nosotrosDesk .conten-cont .separt .texto {
  font-size: 0.9em;
  color: #000;
  font-weight: 100;
}
.nosotrosDesk .conten-cont .separt ul li {
  color: #000;
  font-weight: 100;
  font-size: 0.9em;
}

@media (min-width: 992px) {
  ion-header {
    display: none;
  }
  ion-content {
    display: none;
  }
  .nosotrosDesk {
    display: flex;
  }
}
.nosotrosDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.nosotrosDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/nosotros/nosotros.page.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AACJ;AACI;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;AACR;AACQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACZ;AACY;EACI,cAAA;EACA,cAAA;EACA,gBAAA;AAChB;AAGQ;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AADZ;AAGY;EACI,YAAA;EACA,YAAA;EACA,wCAAA;AADhB;AAKQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AAHZ;AAKY;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AAHhB;AAMY;EACI,gBAAA;EACA,WAAA;EACA,gBAAA;AAJhB;AAQgB;EACI,WAAA;EACA,gBAAA;EACA,gBAAA;AANpB;;AAaA;EACI;IACI,aAAA;EAVN;EAaE;IACI,aAAA;EAXN;EAcE;IACI,aAAA;EAZN;AACF;AAeA;EACI,aAAA;EACA,6BAAA;EACA,aAAA;AAbJ;;AAgBA;EACI,iDAAA;EAEA,aAAA;AAdJ","sourcesContent":[".nosotrosDesk{\n    width: 100%;\n    height: auto;\n    display: none;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-y: scroll;\n\n    .conten-cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        padding: 3em 0em;\n        gap: 2em;\n\n        .taitl-cont{\n            width: 100%;\n            height: auto;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            .taitl{\n                color: #00a3c7;\n                font-size: 2em;\n                font-weight: 100;\n            }\n        }\n\n        .filo{\n            color: #00a3c7;\n            font-weight: 100;\n            font-size: 1.5em;\n\n            img{\n                width: 3.8em;\n                height: auto;\n                filter: drop-shadow(2px 2px 0px #00a3c7);\n            }\n        }\n\n        .separt{\n            width: 50em;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: .6em;\n\n            .subts{\n                color: #00a3c7;\n                font-weight: 100;\n                font-size: 1.2em;\n            }\n\n            .texto{\n                font-size: .9em;\n                color: #000;\n                font-weight: 100;\n            }\n\n            ul{\n                li{\n                    color: #000;\n                    font-weight: 100;\n                    font-size: .9em;\n                }\n            }\n        }\n    }\n}\n\n@media(min-width: 992px){\n    ion-header{\n        display: none;\n    }\n\n    ion-content{\n        display: none;\n    }\n\n    .nosotrosDesk{\n        display: flex;\n    }\n}\n\n.nosotrosDesk::-webkit-scrollbar {\n    width: .35em;\n    background-color: transparent;\n    height: .7em;\n}\n  \n.nosotrosDesk::-webkit-scrollbar-thumb {\n    background-color: #00a2c779;\n    //border-radius: 1vh;\n    width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 48862:
/*!**************************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>nosotros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<section class=\"nosotrosDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"conten-cont\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Nosotros</span>\n    </div>\n    <span class=\"filo\">Filosofía <img src=\"assets/img/logo-lide.png\" alt=\"\"></span>\n    <div class=\"separt\">\n      <span class=\"subts\">Nuestra historia</span>\n      <span class=\"texto\">\n        Avance (nuestra empresa hermana) se presentó en dos exposiciones de manualidades en 2014 para mostrar los productos que tenía para ese mercado, \n        ambas participaciones fueron bajo el concepto de Manualidades Creativas, gracias a la aceptación y actitud emprendedora que se observó en los clientes, \n        se decide avanzar un paso más para ese mercado, adaptar el concepto al comercio electrónico, \"Manualidades Creativas, Tú negocio online” especializado en venta \n        de materiales y equipos para manualidades por medio de una página web.\n      </span>\n      <span class=\"texto\">\n        Con la finalidad de integrarnos a un mercado moderno, innovador, vanguardista, unisex, emprendedor, joven, y creativo; pasamos por un proceso \n        de trasformación que nos llevó a “Lideart, Proveedor líder en equipos de vanguardia y materiales para manualidades, proyectos DIY o negocios emprendedores.”\n      </span>\n      <span class=\"texto\">\n        Sabemos que estamos en un mundo de constantes cambios, el tiempo en el que caduca la tecnología cada vez es más corto, nuestra responsabilidad es ofrecerle al \n        cliente innovación, acercarles productos de calidad que no son tan accesibles en una tienda física incluso que aún no han llegado al mercado local, nuestra \n        responsabilidad es ser la mejor opción.\n      </span>\n    </div>\n    <div class=\"separt\">\n      <span class=\"subts\">¿Quiénes somos?</span>\n      <span class=\"texto\">\n        Somos una empresa de productos para manualidades innovadora con visión al futuro, buscamos siempre ser la mejor alternativa de compra para nuestros clientes \n        manteniendo capacitado a nuestro personal a través de diferentes técnicas, logrando así tener expertos en nuestro equipo, promovemos abiertamente el trabajo \n        en equipo y hacemos partícipe a todos nuestros empleados en las actividades laborales. Somos una empresa en proceso de crecimiento por lo tanto con constantes \n        cambios para lograr nuestros objetivos. En Lideart no es solo ofrecemos sustento a varias familias, sino un lugar para aprender, crecer y sobresalir; \n        nuestro principal objetivo es el servicio y así lo proyectamos día con día buscando también opciones para mejorar.\n      </span>\n      <span class=\"texto\">\n        Perseguimos una meta en común; satisfacer a nuestros clientes y hacerles la vida más fácil. Para eso trabajamos en equipo, nuestros esfuerzos están dirigidos \n        a multiplicar logros, sin dejar de lado nuestras necesidades, por eso estamos interesados que nuestros empleados tengan una actitud positiva referente a sus \n        actividades laborales, preocupándonos porque el tiempo y energía que invierten en su trabajo los haga sentir satisfechos, comprometidos con la organización, \n        estar orgullosos de ¡Ponerse la camiseta!\n      </span>\n      <span class=\"texto\">\n        Fomentamos en nuestros colaboradores humildad, hacemos conciencia en que trabajamos con personas que tanto ellas como nosotros nos ayudamos mutuamente a \n        alcanzar nuestros objetivos.\n      </span>\n      <span class=\"texto\">\n        Buscamos fomentar el crecimiento económico de nuestra comunidad, brindado inspiración, capacitación, servicio, soporte y los mejores productos a cualquiera \n        que busque crear o crecer su propio negocio. Apoyamos a cualquier persona que busque emprender, ya sea que no tengan mucho tiempo o que busquen hacerlo desde \n        la comodidad de su hogar, haciendo algo que en realidad disfruten.\n      </span>\n    </div>\n    <div class=\"separt\">\n      <span class=\"subts\">Misión</span>\n      <span class=\"texto\">\n        Satisfacer las necesidades de nuestra sociedad en productos de manualidades brindando una solución de sus requerimientos mediante una compra en línea. \n        Inspirando y brindando orientación a personas que deseen iniciar o crecer su negocio, ofreciendo no solo productos de calidad, innovadores y vanguardistas, \n        sino el mejor servicio, asesoría altamente competente, trasparencia y capacitación, dándole a nuestros clientes lo que necesitan, con la mejor calidad, rapidez, \n        seguridad y comodidad, siempre tomando en cuenta el sentido de responsabilidad y ética.\n      </span>\n    </div>\n    <div class=\"separt\">\n      <span class=\"subts\">Visión</span>\n      <span class=\"texto\">\n        Ser los líderes en el mercado de las manualidades posicionándonos como la empresa más confiable, asegurando la satisfacción total de nuestros clientes y \n        subdistribuidores a través de productos innovadores con la mejor calidad y un servicio impecable, superando las expectativas de una compra en línea; \n        asimismo impulsar el emprendimiento y desarrollo económico de los mexicanos.\n      </span>\n    </div>\n    <div class=\"separt\">\n      <span class=\"subts\">Valores</span>\n      <ul>\n        <li><strong>Abrazar al cambio</strong> <br>Para crecer se necesita cambio, por eso estamos en constates cambios, siempre buscando mejorar en todos los aspectos.</li>\n        <li><strong>Honestidad</strong> <br>Toda la información que otorguemos a nuestros colaboradores y clientes debe ser real, justificada, confiable y comprobable.</li>\n        <li><strong>Confianza</strong> <br>Cultivaremos cada relación con credibilidad, nos comprometemos haciendo buen uso de los recursos que nos asignan, basándonos en la responsabilidad y respeto mutuo.</li>\n        <li><strong>Respeto</strong> <br>Proveemos atención y cortesía, reconociendo el valor propio y derechos de todos nuestros clientes y equipo, siempre bajo un ambiente de amabilidad y aceptación.</li>\n        <li><strong>Trabajo en equipo</strong> <br>Gracias a nuestro trabajo en equipo y compañerismo logramos llegar a nuestro fin en común, que es lograr brindar los mejores productos y servicio.</li>\n        <li><strong>Compromiso</strong> <br>Nos enfocamos para el cumplimiento de nuestras metas y servicios, motivamos a nuestro equipo de trabajo a actuar con integridad.</li>\n        <li><strong>Pasión</strong> <br>Nos apasionamos por lo que hacemos, sintiendo e inspirando pasión por medio de nuestro servicio y proyectos, luchando día a día por mejorar lo que ofrecemos.</li>\n        <li><strong>Servicio</strong> <br>Brindamos una atención integral encaminada a superar las expectativas, buscando la satisfacción de todos nuestros clientes.</li>\n        <li><strong>Innovación</strong> <br>No solo brindamos los productos más novedosos, también impulsamos nuevos modelos de negocio, ofrecemos nuevos servicios y mejoramos los procesos para mejorar en todos los aspectos como en la calidad y servicio que ofrecemos.</li>\n      </ul>\n    </div>\n    <div class=\"separt\">\n      <span class=\"subts\">Nuestros objetivos</span>\n      <ul>\n        <li>Ser la mejor opción para satisfacer las necesidades de nuestra sociedad en todo tipo de productos para manualidades.</li>\n        <li>Brindar una solución de los materiales requeridos mediante una compra en línea con la máxima seguridad y calidad.</li>\n        <li>Dar una experiencia excepcional por medio de nuestro servicio, innovación de productos y calidad, buscando crear una emoción positiva y la satisfacción de nuestro cliente</li>\n        <li>Impulsar el desarrollo individual ofreciendo las mejores condiciones, productos y asesoría; así contribuir de manera importante al desarrollo económico y social de nuestra comunidad.</li>\n        <li>Ayudar al desarrollo de nuestros subdistribuidores con el objetivo de lograr el máximo crecimiento en conjunto.</li>\n      </ul>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_nosotros_nosotros_module_ts.js.map
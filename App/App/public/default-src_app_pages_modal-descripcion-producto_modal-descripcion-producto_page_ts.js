(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_modal-descripcion-producto_modal-descripcion-producto_page_ts"],{

/***/ 20340:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/modal-descripcion-producto/modal-descripcion-producto.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalDescripcionProductoPage: () => (/* binding */ ModalDescripcionProductoPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _modal_descripcion_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-descripcion-producto.page.html?ngResource */ 41659);
/* harmony import */ var _modal_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-descripcion-producto.page.scss?ngResource */ 47417);
/* harmony import */ var _modal_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);








let ModalDescripcionProductoPage = class ModalDescripcionProductoPage {
  constructor(modalCtrl, productoService, toastController, shoppingCart) {
    this.modalCtrl = modalCtrl;
    this.productoService = productoService;
    this.toastController = toastController;
    this.shoppingCart = shoppingCart;
    this.colorSeleccionado = '';
    this.color = 'blanco';
    this.items = [];
    this.crr_sel = 0;
    this.crr_indx = 0;
    this.cantidad = 1;
  }
  ngOnInit() {
    this.getDescripcionProducto();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
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
  getDescripcionProducto() {
    this.productoService.getDescripcionProducto(this.id_product).subscribe(data => {
      this.productoData = data;
      this.atributos = this.productoData[0].detalles.atributos;
      this.precioDyn = this.productoData[0].precio;
      this.colorDefault();
    });
  }
  agregarAlCarrito(producto) {
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
          producto.precio = this.productoData[0].precio;
          this.shoppingCart.addItem(producto);
        }
      }
    }
  }
  seleccionacolor(nombreColor, id_attribute, id_group) {
    this.colorSeleccionado = nombreColor;
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
            // var sitio = (<HTMLSelectElement>document.getElementById("sucursal")).value;
            // this.getExistencias(referenciaLimpia,sitio);
            if (uv) {
              uv.innerText = variables[nvalor].unidadVenta.replace(/-R$/, '');
              var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
              unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
              // this.getPrecioUnitario(referenciaLimpia,unidadventLimpia);
            }
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
            var sitio = document.getElementById("sucursal").value;
            // this.getExistencias(referenciaLimpia,sitio);
            if (uv) {
              uv.innerText = variables[i].unidadVenta.replace(/-R$/, '');
              var unidadventLimpia = uv.outerHTML.replace(/-R$/, '');
              unidadventLimpia = unidadventLimpia.split(/>/)[1].split(/</)[0];
              // this.getPrecioUnitario(referenciaLimpia,unidadventLimpia);
            }
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
      let span = document.getElementsByClassName('id_group_2 selector-color')[0].children[0];
      span.click();
    }, 1000);
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
  ShowError3() {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this3.toastController.create({
        message: 'No puedes llevar al Carrito mas de la Cantidad en Existencias',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  showSuccess() {
    var _this4 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this4.toastController.create({
        message: 'Producto agregado al carrito',
        color: "success",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  ShowError2() {
    var _this5 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: 'Necesitas Seleccionar Color',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  static #_ = this.ctorParameters = () => [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_4__.CarritoServiceService
  }];
};
ModalDescripcionProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-modal-descripcion-producto',
  template: _modal_descripcion_producto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_descripcion_producto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalDescripcionProductoPage);

/***/ }),

/***/ 47417:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modal-descripcion-producto/modal-descripcion-producto.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-content {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 1rem;
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

.textillo {
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
  font-weight: bold;
}

.form-group {
  margin-left: 100px;
}

.selector-color {
  display: inline-block;
  margin: 0px 2px;
  width: auto;
  height: auto;
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
  border: solid black 1px;
}

.selector-color input {
  width: auto;
  background-size: cover;
  position: absolute;
  height: auto;
  top: 5px;
  left: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.5) 0px 0px 12px;
  transition: 1s;
}

.selected.selector-color input {
  width: auto;
  height: auto;
  top: 0px;
  left: 0px;
}

.contiene-descripcion > table > tbody > tr > td > div > img {
  max-width: 100%;
  height: auto;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/modal-descripcion-producto/modal-descripcion-producto.page.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AACJ;;AAEA;EACI,sCAAA;EACA,kCAAA;UAAA,0BAAA;EACA;uHAAA;EAEA,aAAA;EACA,8BAAA;EAEA,sBAAA;EAGA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,aAAA;EAEA,2BAAA;EACA,qCAAA;EACA,mBAAA;EACA,yCAAA;EACA,0BAAA;EACA,kCAAA;EACA,wCAAA;AAHJ;AAKI;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AAHN;AAKM;EACE,UAAA;EACA,YAAA;AAHR;AAOI;EACE,WAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;AALN;AAMM;EACE,WAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;AAJR;;AAcE;EACI,eAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AAXN;;AAcE;EAED,kBAAA;AAZD;;AAeE;EACE,qBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,uBAAA;EACA,cAAA;AAZJ;;AAcE;EACE,YAAA;EACA,gBAAA;AAXJ;;AAcE;EACE,uBAAA;AAXJ;;AAcE;EACE,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;EACA,iDAAA;EACA,cAAA;AAXJ;;AAcE;EACE,WAAA;EACA,YAAA;EACA,QAAA;EACA,SAAA;AAXJ;;AAcE;EACE,eAAA;EACA,YAAA;AAXJ","sourcesContent":["ion-content{\n  background-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nion-card{\n    background: rgba(255, 255, 255, 0.164); //     #fdfdfd            #14A8CD*\n    backdrop-filter: blur(2px);\n    /*background: rgb(28,138,242);\n    background: linear-gradient(0deg, rgba(28,138,242,1) 47%, rgba(45,166,253,1) 47%); //     #fdfdfd            #14A8CD*/\n    display: flex;\n    justify-content:space-between;\n   \n    flex-direction: column;\n    //box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n    //box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;\n    width: 100%;\n    height: 100%;\n    border-radius: .25rem;\n    padding: 1rem;\n\n    /* From https://css.glass */\n    background: rgba(255, 255, 255, 0.150);\n    border-radius: 10px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(3px);\n    -webkit-backdrop-filter: blur(3px);\n    border: .5px solid rgba(0, 0, 0, 0.082);\n\n    .contImg{\n      width: 100%;\n      height: 60%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 1rem;\n\n      img{\n        width: 80%;\n        height: auto;\n      }\n    }\n\n    .text{\n      width: 100%;\n      height: 40%;\n      color: black;\n      font-size: 15px;\n      font-weight: bold;\n      ion-text{\n        width: 100%;\n        font-size: 20vw;\n        text-align: center;\n        color: rgb(0, 0, 0);\n        // text-shadow: 4px 3px 4px rgb(65, 64, 64); \n      }\n\n    }\n\n\n\n  }\n\n  .textillo{\n      font-size: 20px;\n      margin-bottom: 10px;\n      color: black;\n      font-weight: bold;\n  }\n\n  .form-group{\n\n margin-left: 100px;\n  }\n\n  .selector-color {\n    display: inline-block;\n    margin: 0px 2px;\n    width: auto;\n    height: auto;\n    position: relative;\n    border-radius: 3px;\n    cursor: pointer;\n    overflow: hidden;\n    transform: rotate(0deg);\n    transition: 1s;\n  }\n  .texto-descripcion {\n    color: white;\n    font-size: 1.3em;\n  }\n  \n  .selected.selector-color {\n    border:solid black 1px;\n  }\n  \n  .selector-color input {\n    width: auto;\n    background-size: cover;\n    position: absolute;\n    height: auto;\n    top: 5px;\n    left: 5px;\n    box-shadow: inset rgb(0 0 0 / 50%) 0px 0px 12px;\n    transition: 1s;\n  }\n  \n  .selected.selector-color input {\n    width: auto;\n    height: auto;\n    top: 0px;\n    left: 0px;\n  }\n  \n  .contiene-descripcion > table > tbody > tr > td > div > img {\n    max-width: 100%;\n    height: auto;\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41659:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/modal-descripcion-producto/modal-descripcion-producto.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content >\n  <div >\n    <ion-button (click)=\"dismiss()\" slot=\"end\">\n      <ion-icon  name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n    <ion-card *ngFor=\"let producto of productoData\"> \n    <ion-text class=\"textillo\">{{producto.title}}</ion-text>\n      <img src=\"{{producto.image_link}}\">\n\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\" >Precio:</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text class=\"text\" >${{producto.precio | number: '1.2-2'}} mxn </ion-text>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n             <ion-text class=\"text\" >SKU:</ion-text>\n            </ion-col>\n            <ion-col>\n              <p class=\"text\">\n                \n                  <span id=\"referencia\">{{ producto.sku  }}\n                  </span>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Existencia:</ion-text>\n            </ion-col>\n            <ion-col>\n            <ion-text class=\"text\">{{producto.availability}}</ion-text> \n            </ion-col>\n          </ion-row>\n          <ion-row>\n\n                <div *ngFor=\"let atributo of atributos\">\n                  <ion-col >\n                  <ion-text class=\"text\" for=\"\">{{atributo.name}}:</ion-text>\n                </ion-col>\n                <ion-col >\n                  <div *ngIf=\"atributo.is_color_group != '1'\">\n                    <div *ngFor=\"let valor of atributo.valores\" id=\"{{valor.id_attribute}}\"\n                      class=\"selector-color id_group_{{atributo.id_attribute_group}}\" >\n                      <ion-button *ngIf=\"valor.color != ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-color: {{valor.color}}\">{{valor.name}}</ion-button>\n                      <ion-button *ngIf=\"valor.color == ''\" title=\"{{valor.name}}\"\n                      (click)=\"seleccionacolor(valor.name,valor.id_attribute,atributo.id_attribute_group)\"\n                        style=\"background-image: url({{valor.image}});\">{{valor.name}}</ion-button>\n        \n                    </div>\n                  </div>\n                \n                \n                  <select style=\"color: black;\" *ngIf=\"atributo.is_color_group == '1'\" name=\"atributos\" (change)=\"cambiaSku()\"\n                    class=\"form-group {{atributo.id_attribute_group}}\" >\n                    <option *ngFor=\"let valor of atributo.valores\" value=\"{{valor.id_attribute}}\">{{valor.name}}</option>\n                  </select>\n                </ion-col>\n                </div>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-text class=\"text\">Cantidad:</ion-text>   \n            </ion-col>\n            <ion-col>\n              <ion-input class=\"text\" type=\"number\" min=\"1\" value=\"1\" max=\"{{producto.availability}}\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  (click)=\"agregarAlCarrito(productoData[0])\">Agregar Al Carrito</ion-button>\n          <ion-button expand=\"full\" shape=\"round\" color=\"secondary\"  routerLink=\"/cart\" (click)=\"dismiss()\" >Ir a Carrito</ion-button>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_modal-descripcion-producto_modal-descripcion-producto_page_ts.js.map
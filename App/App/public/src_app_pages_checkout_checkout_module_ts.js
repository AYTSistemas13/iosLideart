(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_checkout_checkout_module_ts"],{

/***/ 43396:
/*!***********************************************************!*\
  !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPageRoutingModule: () => (/* binding */ CheckoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.page */ 8349);




const routes = [{
  path: '',
  component: _checkout_page__WEBPACK_IMPORTED_MODULE_0__.CheckoutPage
}];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {};
CheckoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], CheckoutPageRoutingModule);

/***/ }),

/***/ 27747:
/*!***************************************************!*\
  !*** ./src/app/pages/checkout/checkout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPageModule: () => (/* binding */ CheckoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 43396);
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page */ 8349);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let CheckoutPageModule = class CheckoutPageModule {};
CheckoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_1__.CheckoutPage]
})], CheckoutPageModule);

/***/ }),

/***/ 8349:
/*!*************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutPage: () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.page.html?ngResource */ 93201);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout.page.scss?ngResource */ 30919);
/* harmony import */ var _checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/carrito-service.service */ 25852);
/* harmony import */ var src_app_services_checkout_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/checkout-service.service */ 46943);
/* harmony import */ var src_app_services_conekta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/conekta.service */ 50088);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);

var CheckoutPage_1;














// const conekta = require('conekta');
// conekta.locale = 'es';
// conekta.api_key = 'key_qEuQ5HwQEdb9qm8HHeLgXg';
let CheckoutPage = class CheckoutPage {
  static #_ = CheckoutPage_1 = this;
  constructor(usuarioService, checkoutService, shoppingCart, sanitizer, toastController, modalCtrl, loadingController, /*private payPal: PayPal*/http, renderer, conekta, productoService, alertController, datePipe) {
    this.usuarioService = usuarioService;
    this.checkoutService = checkoutService;
    this.shoppingCart = shoppingCart;
    this.sanitizer = sanitizer;
    this.toastController = toastController;
    this.modalCtrl = modalCtrl;
    this.loadingController = loadingController;
    this.http = http;
    this.renderer = renderer;
    this.conekta = conekta;
    this.productoService = productoService;
    this.alertController = alertController;
    this.datePipe = datePipe;
    this.customActionSheetOptions = {
      header: 'Uso CFDI',
      subHeader: 'Selecciona el uso de CFDI'
    };
    this.customActionSheetOptions3 = {
      header: 'Metodo de Pago',
      subHeader: 'Selecciona el metodo de pago'
    };
    this.customActionSheetOptions2 = {
      header: 'Regimen Fiscal',
      subHeader: 'Selecciona el regimen fiscal'
    };
    this.isModalOpen = false;
    this.isModalOpen2 = false;
    this.isModalOpen3 = false;
    this.isModalOpen4 = false;
    //public payPalConfig ? : IPayPalConfig;
    this.showSuccess = false;
    this.showCancel = false;
    this.showError = false;
    this.searchbarVisible = false;
    this.datosUsuario = [];
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.direccion = [];
    this.radioDireccion = 0;
    this.checarDireccion = true;
    this.lineas = [];
    this.lineasBomnitas = [];
    this.respuestaCotizacion = "";
    this.items = [];
    this.recoge = false;
    this.valorRadio = 0;
    this.productitos = [];
    this.valorPaqueteExpress = true;
    this.iframe = "";
    this.datosWebPay = [];
    this.tipoEnvio = "";
    this.radioEnvio = true;
    this.respuesta = [];
    this.radioPago = true;
    this.metodoPago = "";
    this.postcode = "";
    this.address1 = "";
    this.id_state = "";
    this.city = "";
    this.colony = "";
    this.totalEnvio = 0;
    this.facturame = false;
    this.facturame2 = false;
    this.datoscounty = [];
    this.respuestillaOV = [];
    this.datosdelcarro = [];
    this.cargando = false;
    this.sepuede = false;
    this.arregloitems = [];
    this.urlconekta = "";
    this.paquetaxos = [];
    this.oxxxo = "";
    this.metodinPago = "00";
    this.noCuenta = '65-50630503-1';
    this.clabe = '014150655063050317';
    this.banco = 'Santander';
    this.porcentaje = 0;
    this.usocfdi = "G01";
    this.regimenfiscal = "601";
    this.fechaActual = Date.now();
    this.fechaActual2 = Date.now();
    this.cliente = [];
    this.orden = [];
    this.facturitadatos = [];
    this.paypalIs = false;
    this.modalNdIs = false;
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
    this.now = new Date().toString().split(' ')[4];
    const currentDate = new Date();
    this.formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.usuarioService.usuario.subscribe(res => {
      this.usuario = res;
      // const customer = conekta.Customer.create({
      //   name: this.usuario,
      //   email: this.usuario.correo
      // });
    });
  }

  ngOnInit() {
    this.checalo();
    this.tambienChecalo();
    this.shoppingCart.cartItems.subscribe(data => {
      this.items = data;
      if (this.items) {
        this.getPeso(this.items);
        // this.getTotal(this.items);
        this.calculaPaqueterias();
      }
    });
    // this.getItemsCarrito2();
    //this.initConfig();
    /**/
  }

  getClientTokenForPaypal() {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.http.get('https://app.lideart.net/brainTreeClientToken').toPromise();
    })();
  }
  facturado() {
    if (this.facturame == false) {
      this.facturame = true;
    } else {
      this.facturame = false;
    }
  }
  facturado2() {
    if (this.facturame2 == false) {
      this.facturame2 = true;
    } else {
      this.facturame2 = false;
    }
  }
  openModalNd() {
    if (this.modalNdIs == false) {
      this.renderer.setStyle(this.modal_nd.nativeElement, 'display', 'flex');
      this.modalNdIs = true;
    } else if (this.modalNdIs == true) {
      this.renderer.setStyle(this.modal_nd.nativeElement, 'display', 'none');
      this.modalNdIs = false;
    }
  }
  handleBraintreePayment(nonce) {
    var _this2 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.makePaymentRequest(_this2.grandTotal.toFixed(2), nonce).then(transaction => {
        console.log('Transaction', transaction);
      });
      /*this.api.makePaymentRequest(this.payableAmount, nonce).then((transaction) => {
        console.log('Transaction', transaction);
      });*/
    })();
  }

  makePaymentRequest(amount, nonce) {
    var _this3 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paymentDetails = {
        paymentAmount: amount,
        nonceFromTheClient: nonce
      };
      return yield _this3.http.post('https://app.lideart.net/checkoutWithPayment', paymentDetails).toPromise();
    })();
  }
  agregarDir() {
    var ciudad = document.getElementsByName("city")[0].selectedOptions[0].innerText;
    this.city = ciudad;
    var colonia = document.getElementsByName("colony")[0].selectedOptions[0].innerText;
    var estado = document.getElementsByName('id_state')[0].selectedOptions[0].innerText;
    var nc = colonia.split(' ');
    nc.pop();
    var coloniaFinal = nc.join(' ');
    this.colony = coloniaFinal;
    this.estado = estado;
    let arregloDir = {
      "alias": this.alias,
      "phonenumber": this.telefono,
      "zipcode": this.zipcode,
      "address1": this.address1,
      "address2": this.address2,
      "stateValue": this.estado,
      "cityValue": this.city,
      "colony": coloniaFinal,
      "correo": this.usuario.usuario
    };
    this.usuarioService.enviaDireccion(arregloDir).subscribe(datos => {
      location.reload();
    });
  }
  guardaDatosFactura() {
    let arregloDir = {
      "email": this.usuario.usuario,
      "uso_cfdi": this.usocfdi,
      "razon_social": this.razonSocial,
      "rfc": this.rfc,
      "cp": this.codigoPostal,
      "direccion_fiscal": this.DirFiscal,
      "metodo_pago": this.metodinPago,
      "regimen_fiscal": this.regimenfiscal
    };
    this.usuarioService.guardaDatosFactura(arregloDir).subscribe(datosFact => {
      this.respFact = datosFact;
      if (datosFact == 0) {
        this.presentAlertConfirm3();
      } else {
        this.presentAlertConfirm4();
      }
    });
  }
  agregarDatosFacturacion() {
    let arregloDir = {
      "razonSocial": this.razonSocial,
      "rfc": this.rfc,
      "DirFiscal": this.DirFiscal,
      "FormaPago": this.FormaPago,
      "UsoCFDI": this.UsoCFDI
    };
    this.usuarioService.enviaDireccion(arregloDir).subscribe(datos => {
      this.cancel3();
    });
  }
  accionesDireccion(valor, accion) {
    if (valor != '' && valor != undefined) {}
    switch (accion) {
      case 'zipcode':
        if (valor.length >= 4) {
          this.porZipCode(valor.value);
        }
        break;
      case 'state':
        this.porState(valor.value);
        break;
      case 'city':
        this.porCity(valor.value);
        break;
      case 'colony':
        this.porColony();
        break;
      case 'edicion_direccion':
        // this.paraEditar(valor)
        break;
      default:
        break;
    }
  }
  porZipCode(postcode) {
    this.usuarioService.selectDireccionZipCode('zipcode', this.zipcode).subscribe(res => {
      this.respuesta = res;
      let textoOpciones = '<option value="" disabled="" >-- por favor elija --</option>';
      if (this.respuesta.estado > 0) {
        document.getElementsByName('id_state')[0].value = this.respuesta.estado;
        // this.direccionForm.controls.stateValue.setValue(this.respuesta.estado);
        this.estado = this.respuesta.estado;
        const ciudades = this.respuesta.ciudades;
        const ciudad = this.respuesta.ciudad;
        for (var i = 0; i < ciudades.length; i++) {
          if (ciudades[i] == ciudad) {
            textoOpciones += '<option value="' + ciudades[i] + '" selected>' + ciudades[i] + '</option>';
          } else {
            textoOpciones += '<option value="' + ciudades[i] + '">' + ciudades[i] + '</option>';
          }
        }
        document.getElementsByName('city')[0].innerHTML = textoOpciones;
        // this.direccionForm.controls.cityValue.setValue(ciudades[i]);
        textoOpciones = '<option value="" disabled="" >-- por favor elija --</option>';
        const colonias = this.respuesta.colonias;
        for (var i = 0; i < colonias.length; i++) {
          textoOpciones += '<option value="' + colonias[i]['colonia'] + '">' + colonias[i]['colonia'] + ' (' + colonias[i]['codigo_postal'] + ')</option>';
        }
        document.getElementsByName('colony')[0].innerHTML = textoOpciones;
        // this.direccionForm.controls.colonyValue.setValue(colonias[i]['colonia']);
      } else {
        document.getElementsByName('id_state')[0].selectedIndex = 0;
        document.getElementsByName('city')[0].innerHTML = textoOpciones;
        // this.direccionForm.controls.cityValue.setValue(textoOpciones);
        document.getElementsByName('city')[0].selectedIndex = 0;
        document.getElementsByName('colony')[0].innerHTML = textoOpciones;
        // this.direccionForm.controls.colonyValue.setValue(textoOpciones);
        document.getElementsByName('colony')[0].selectedIndex = 0;
      }
      // this.SpinnerService.hide();
    });
  }

  porState(state) {
    // this.SpinnerService.show();
    // this.direccionForm.controls.zipcode.reset;
    this.usuarioService.selectDireccionState('porState', this.estado).subscribe(res => {
      this.respuesta = res;
      let textoOpciones = '<option value="" disabled="" >-- por favor elija --</option>';
      const ciudades = this.respuesta.ciudades;
      for (var i = 0; i < ciudades.length; i++) {
        textoOpciones += '<option value="' + ciudades[i] + '">' + ciudades[i] + '</option>';
      }
      document.getElementsByName('city')[0].innerHTML = textoOpciones;
      // this.direccionForm.controls.cityValue.setValue(textoOpciones);
      textoOpciones = '<option value="" disabled="" >-- por favor elija --</option>';
      const colonias = this.respuesta.colonias;
      for (var i = 0; i < colonias.length; i++) {
        textoOpciones += '<option value="' + colonias[i]['colonia'] + '">' + colonias[i]['colonia'] + ' (' + colonias[i]['codigo_postal'] + ')</option>';
      }
      document.getElementsByName('colony')[0].innerHTML = textoOpciones;
      // colony
      // this.SpinnerService.hide();
    });
  }

  porCity(city) {
    // this.SpinnerService.show();
    // this.direccionForm.controls.zipcode.reset;
    // (<HTMLElement>document.getElementsByName('postcode')[0]).value = ""
    this.usuarioService.selectDireccionCity("porCity", this.city).subscribe(res => {
      this.respuesta = res;
      // this.SpinnerService.hide();
    });

    let textoOpciones = '<option value="" disabled="" >-- por favor elija --</option>';
    const colonias = this.respuesta.colonias;
    for (var i = 0; i < colonias.length; i++) {
      textoOpciones += '<option value="' + colonias[i]['colonia'] + '">' + colonias[i]['colonia'] + ' (' + colonias[i]['codigo_postal'] + ')</option>';
    }
    document.getElementsByName('colony')[0].innerHTML = textoOpciones;
    this.porColony();
    // this.SpinnerService.hide();
  }

  porColony() {
    var algo = document.getElementsByName('colony');
    if (algo.length > 0) {
      var opcion = algo[0];
      var texto = opcion.selectedOptions[0].innerText;
      var arr_codigo_postal = texto.split(' ');
      var codigo_postal = arr_codigo_postal[arr_codigo_postal.length - 1];
      codigo_postal = codigo_postal.replace(/\(/g, '').replace(/\)/g, '');
      document.getElementsByName('zipcode')[0].value = codigo_postal;
      this.zipcode = codigo_postal;
    }
    // this.SpinnerService.hide();
    // console.log(this.direccionForm.controls.colonyValue)
    // 
  }

  presentAlertConfirm() {
    var _this4 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Debes aceptar los terminos y condiciones del servicio antes de seleccionar metodo de pago',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  presentAlertConfirm3() {
    var _this5 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Esta cuenta ya tiene datos de facturacion guardados',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  presentAlertConfirm4() {
    var _this6 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Exito!',
        message: 'Datos de Facturacion guardados correctamente',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  presentAlertConfirm2() {
    var _this7 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Debes aceptar los terminos y condiciones de pago',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  /* AQUI INICIA PAYPAL
  paymentAmount: string = '3.33';
  currency: string = 'INR';
  currencyIcon: string = '₹';
   
  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      // Only needed if you get an "Internal Service Error" after PayPal login!
      //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid
        }, () => {
          // Error or render dialog closed without being successful
        });
        }, () => {
           // Error in configuration
        });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
   AQUI TERMINA PAYPAL */
  /*private initConfig(): void {
    this.payPalConfig = {
     
        currency: 'MXN',
        clientId: 'AStFqSiMlHe49OfnXWGV0AUbzDcRVyjJcQ_wo4fIrfvbwmjUyWOhalIm1AAJuUqY_foVZFT9Ts8_lkP0',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
           intent: 'CAPTURE',
           purchase_units: [{
                amount: {
                    currency_code: 'MXN',
                   value: (this.grandTotal+(this.totalEnvio*1.16)).toFixed(2).toString(),
                    breakdown: {
                        item_total: {
                            currency_code: 'MXN',
                            value: (this.grandTotal+(this.totalEnvio*1.16)).toFixed(2).toString(),
                           
                      }
                    }
                },
                items: this.getItemsCarrito()
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
       onApprove: (data, actions) => {
           
         
            actions.order.get().then((details: any) => {
             
            });
            this.relizarCompra();
          },
        onClientAuthorization: (data) => {
         
           this.showSuccess = true;
        },
        onCancel: (data, actions) => {
      
            this.showCancel = true;
          },
        onError: err => {
         
            this.showError = true;
        },
        onClick: (data, actions) => {
          
  //            // this.resetStatus();
        }
    };
  }*/
  getItemsCarrito() {
    const items = [];
    let item = {};
    this.items.forEach(it => {
      item = {
        name: it.title,
        quantity: it.quantity,
        unit_amount: {
          value: (it.precio * 1.16).toFixed(2),
          currency_code: 'MXN'
        }
      };
      items.push(item);
    });
    let envio = {};
    envio = {
      name: 'Paquete Express',
      quantity: '1',
      unit_amount: {
        value: (this.totalEnvio * 1.16).toFixed(2),
        currency_code: 'MXN'
      }
    };
    items.push(envio);
    return items;
  }
  getItemsCarrito2() {
    let item = {};
    this.items.forEach(it => {
      item = {
        name: it.title,
        unit_price: (it.precio * 100).toFixed(2),
        quantity: it.quantity
      };
      this.arregloitems.push(item);
    });
    console.log(JSON.stringify(this.arregloitems));
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
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_8__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  continuarPersonal() {
    document.getElementById("personal").style.display = "none";
    document.getElementById("direccion").style.display = "block";
  }
  continuarDireccion() {
    if (this.checarDireccion) {
      this.seleccionaDireccion();
    } else {
      document.getElementById("direccion").style.display = "none";
      document.getElementById("envio").style.display = "block";
    }
  }
  regresarDireccion() {
    document.getElementById("personal").style.display = "block";
    document.getElementById("direccion").style.display = "none";
  }
  continuarEnvio() {
    if (this.radioEnvio) {
      this.seleccionaEnvio();
    } else {
      this.getTotal(this.items);
      document.getElementById("pago").style.display = "block";
      document.getElementById("envio").style.display = "none";
      this.cargando = true;
      this.usuarioService.consultaDatosFactura(this.usuario.usuario).subscribe(datosdeFactura => {
        this.facturitadatos = datosdeFactura;
        if (this.facturitadatos.length > 0) {
          this.usocfdi = this.facturitadatos[0].uso_cfdi;
          this.razonSocial = this.facturitadatos[0].razon_social;
          this.rfc = this.facturitadatos[0].rfc;
          this.codigoPostal = this.facturitadatos[0].cp;
          this.DirFiscal = this.facturitadatos[0].direccion_fiscal;
          this.metodinPago = this.facturitadatos[0].metodo_pago;
          this.regimenfiscal = this.facturitadatos[0].regimen_fiscal;
        }
        this.cargando = false;
      });
    }
  }
  regresarEnvio() {
    document.getElementById("direccion").style.display = "block";
    document.getElementById("envio").style.display = "none";
  }
  regresaPago() {
    location.reload();
    document.getElementById("envio").style.display = "block";
    document.getElementById("pago").style.display = "none";
  }
  checalo() {
    this.usuarioService.checaUsuario(this.usuario.usuario).subscribe(data => {
      this.datosUsuario = data;
      this.nombre = this.datosUsuario.nombre;
      this.apellido = this.datosUsuario.apellido;
      this.customerID = this.datosUsuario.customerID;
    });
  }
  tambienChecalo() {
    this.checkoutService.getDireccion(this.usuario.usuario).subscribe(res => {
      this.direccion = res;
      for (let i = 0; i < this.direccion.length; i++) {
        const element = this.direccion[i].id_state;
        if (element == 57) {
          this.nombreEstado = "Aguascalientes";
        }
        if (element == 58) {
          this.nombreEstado = "Baja California";
        }
        if (element == 59) {
          this.nombreEstado = "Baja California Sur";
        }
        if (element == 60) {
          this.nombreEstado = "Campeche";
        }
        if (element == 61) {
          this.nombreEstado = "Chiapas";
        }
        if (element == 62) {
          this.nombreEstado = "Chihuahua";
        }
        if (element == 63) {
          this.nombreEstado = "Coahuila";
        }
        if (element == 64) {
          this.nombreEstado = "Colima";
        }
        if (element == 65) {
          this.nombreEstado = "Distrito Federal";
        }
        if (element == 66) {
          this.nombreEstado = "Durango";
        }
        if (element == 67) {
          this.nombreEstado = "Guanajuato";
        }
        if (element == 68) {
          this.nombreEstado = "Guerrero";
        }
        if (element == 69) {
          this.nombreEstado = "Hidalgo";
        }
        if (element == 70) {
          this.nombreEstado = "Jalisco";
        }
        if (element == 71) {
          this.nombreEstado = "Estado de Mexico";
        }
        if (element == 72) {
          this.nombreEstado = "Michoacan";
        }
        if (element == 73) {
          this.nombreEstado = "Morelos";
        }
        if (element == 74) {
          this.nombreEstado = "Nayarit";
        }
        if (element == 75) {
          this.nombreEstado = "Nuevo Leon";
        }
        if (element == 76) {
          this.nombreEstado = "Oaxaca";
        }
        if (element == 77) {
          this.nombreEstado = "Puebla";
        }
        if (element == 78) {
          this.nombreEstado = "Queretaro";
        }
        if (element == 79) {
          this.nombreEstado = "Quintana Roo";
        }
        if (element == 80) {
          this.nombreEstado = "San Luis Potosi";
        }
        if (element == 81) {
          this.nombreEstado = "Sinaloa";
        }
        if (element == 82) {
          this.nombreEstado = "Sonora";
        }
        if (element == 83) {
          this.nombreEstado = "Tabasco";
        }
        if (element == 84) {
          this.nombreEstado = "Tamaulipas";
        }
        if (element == 85) {
          this.nombreEstado = "Tlaxcala";
        }
        if (element == 86) {
          this.nombreEstado = "Veracruz";
        }
        if (element == 87) {
          this.nombreEstado = "Yucatan";
        }
        if (element == 88) {
          this.nombreEstado = "Zacatecas";
        }
      }
    });
  }
  direccionIsChecked() {
    this.checarDireccion = false;
    var countyJson = {
      "codigo_postal": this.direccion[this.radioDireccion].postcode,
      "asentamiento": this.direccion[this.radioDireccion].colony
    };
    this.usuarioService.checaCountyID(JSON.stringify(countyJson)).subscribe(countyID => {
      this.datoscounty = countyID;
      this.countyId = this.datoscounty[0].CountyId;
      if (this.countyId == null || this.countyId == undefined) {
        this.countyId = this.datoscounty[0].id_codigo_postal + "_" + this.direccion[this.radioDireccion].postcode;
      }
      this.city = this.nombreEstado.toUpperCase();
      if (this.city == "CHIHUAHUA") {
        this.codigo = "CHH";
      }
      if (this.city == "AGUASCALIENTES") {
        this.codigo = "AGS";
      }
      if (this.city == "BAJA CALIFORNIA") {
        this.codigo = "BCA";
      }
      if (this.city == "BAJA CALIFORNIA SUR") {
        this.codigo = "BCS";
      }
      if (this.city == "CAMPECHE") {
        this.codigo = "CAM";
      }
      if (this.city == "CIUDAD DE MEXICO") {
        this.codigo = "CDM";
      }
      if (this.city == "COAHUILA") {
        this.codigo = "COA";
      }
      if (this.city == "COLIMA") {
        this.codigo = "COL";
      }
      if (this.city == "DURANGO") {
        this.codigo = "DGO";
      }
      if (this.city == "DISTRITO FEDERAL") {
        this.codigo = "DIF";
      }
      if (this.city == "GUERRERO") {
        this.codigo = "GRO";
      }
      if (this.city == "GUANAJUATO") {
        this.codigo = "GTO";
      }
      if (this.city == "HIDALGO") {
        this.codigo = "HGO";
      }
      if (this.city == "JALISCO") {
        this.codigo = "JAL";
      }
      if (this.city == "ESTADO DE MEXICO") {
        this.codigo = "MEX";
      }
      if (this.city == "MICHOACAN") {
        this.codigo = "MIC";
      }
      if (this.city == "MORELOS") {
        this.codigo = "MOR";
      }
      if (this.city == "NAYARIT") {
        this.codigo = "NAY";
      }
      if (this.city == "NUEVO LEON") {
        this.codigo = "NLE";
      }
      if (this.city == "OAXACA") {
        this.codigo = "OAX";
      }
      if (this.city == "PUEBLA") {
        this.codigo = "PUE";
      }
      if (this.city == "QUERETARO") {
        this.codigo = "QRO";
      }
      if (this.city == "QUINTANA ROO") {
        this.codigo = "ROO";
      }
      if (this.city == "SINALOA") {
        this.codigo = "SIN";
      }
      if (this.city == "SAN LUIS POTOSI") {
        this.codigo = "SLP";
      }
      if (this.city == "SONORA") {
        this.codigo = "SON";
      }
      if (this.city == "TABASCO") {
        this.codigo = "TAB";
      }
      if (this.city == "TAMAULIPAS") {
        this.codigo = "TAM";
      }
      if (this.city == "TLAXCALA") {
        this.codigo = "TLA";
      }
      if (this.city == "VERACRUZ") {
        this.codigo = "VER";
      }
      if (this.city == "YUCATAN") {
        this.codigo = "YUC";
      }
      if (this.city == "ZACATECAS") {
        this.codigo = "ZAC";
      }
      this.checarDireccion = false;
    });
    this.postcode = this.direccion[this.radioDireccion].postcode;
    this.address1 = this.direccion[this.radioDireccion].address1;
    this.id_state = this.direccion[this.radioDireccion].id_state;
    this.city = this.direccion[this.radioDireccion].city;
    this.colony = this.direccion[this.radioDireccion].colony;
  }
  getPeso(data) {
    let subs = 0;
    for (const item of data) {
      subs += item.weight * item.quantity;
      this.peso = subs;
    }
  }
  getTotal(data) {
    let subs = 0;
    let jsonCupon = {
      "email": this.usuario.usuario
    };
    this.usuarioService.revisaDescuento(jsonCupon).subscribe(codigos => {
      this.datosdelcarro = codigos;
      this.numero_carro = this.datosdelcarro[0].id_cart;
      if (this.datosdelcarro[0].descuento == 1) {
        for (const item of data) {
          subs += item.precio * item.quantity;
          this.porcentaje = this.datosdelcarro[0].porcentaje;
          this.grandTotal = subs;
          this.calculo = this.grandTotal * this.datosdelcarro[0].porcentaje;
          this.grandTotal = this.grandTotal - this.calculo;
          let totalPaypal = this.grandTotal + this.totalEnvio.toFixed(2);
          // let totalPaypal = ".01";
          // Render the PayPal button into #paypal-button-container
          window['paypal'].Buttons({
            // Set up the transaction
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: 'MXN',
                    value: totalPaypal.toString(),
                    breakdown: {
                      item_total: {
                        currency_code: 'MXN',
                        value: totalPaypal.toString()
                      }
                    }
                  }
                  // items: this.getItemsCarrito()
                }]
              });
            },

            // Finalize the transaction
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                let compra = document.getElementById('comprame');
                compra.click();
              }).catch(err => {});
            }
          }).render('#paypal-button-container');
        }
      } else {
        for (const item of data) {
          subs += item.precio * item.quantity;
          this.grandTotal = subs;
          this.grandTotal = this.grandTotal + this.totalEnvio;
          let totalPaypal = this.grandTotal.toFixed(2);
          // let totalPaypal = ".01";
          // Render the PayPal button into #paypal-button-container
          window['paypal'].Buttons({
            // Set up the transaction
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: 'MXN',
                    value: totalPaypal.toString(),
                    breakdown: {
                      item_total: {
                        currency_code: 'MXN',
                        value: totalPaypal.toString()
                      }
                    }
                  }
                  // items: this.getItemsCarrito()
                }]
              });
            },

            // Finalize the transaction
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                // Show a success message to the buyer
                let compra = document.getElementById('comprame');
                compra.click();
                // alert('Transaction completed by ' + details.payer.name.given_name + '!');
              }).catch(err => {
                console.log(err);
              });
            }
          }).render('#paypal-button-container');
        }
      }
    });
  }
  calculaPaqueterias() {
    if (this.peso >= 0.00 && this.peso < 6.00) {
      this.estafeta = 190.09;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 6.00 && this.peso < 8.00) {
      this.estafeta = 214.98;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 8.00 && this.peso < 10.00) {
      this.estafeta = 239.98;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 10.00 && this.peso < 12.00) {
      this.estafeta = 264.77;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 12.00 && this.peso < 14.00) {
      this.estafeta = 289.66;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 14.00 && this.peso < 16.00) {
      this.estafeta = 314.56;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 16.00 && this.peso < 18.00) {
      this.estafeta = 339.45;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 18.00 && this.peso < 20.00) {
      this.estafeta = 364.34;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 20.00 && this.peso < 22.00) {
      this.estafeta = 389.24;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 22.00 && this.peso < 24.00) {
      this.estafeta = 414.13;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 24.00 && this.peso < 26.00) {
      this.estafeta = 439.03;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 26.00 && this.peso < 28.00) {
      this.estafeta = 463.92;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 28.00 && this.peso < 30.00) {
      this.estafeta = 488.81;
      this.paqueteExpress = 191.40;
    }
    if (this.peso >= 30.00 && this.peso < 1000.00) {
      this.estafeta = 488.81;
      this.paqueteExpress = 407.16;
    }
    if (this.grandTotal > 2000) {
      this.estafeta = 0.1;
      this.paqueteExpress = 0.1;
    }
  }
  envioEstafeta() {
    this.recoge = false;
    this.radioEnvio = false;
    this.tipoEnvio = "Estafeta Estandar";
    this.valorEnvio = 2;
    this.totalEnvio = this.estafeta;
    this.modoEntrega = "PAQUETERIA";
  }
  envioPaqueteExpress() {
    this.recoge = false;
    this.radioEnvio = false;
    this.tipoEnvio = "Paquete Express";
    this.valorEnvio = 1;
    this.totalEnvio = this.paqueteExpress;
    this.modoEntrega = "PAQUETERIA";
  }
  envioRecoge() {
    this.recoge = true;
    this.radioEnvio = false;
    this.tipoEnvio = "Recoger en Sucursal";
    this.valorEnvio = 3;
    this.totalEnvio = 0;
    this.modoEntrega = "PASA";
  }
  transferencia() {
    this.sepuede = true;
    // document.getElementById('comprame').style.display = "block";
    this.valorRadio = 1;
    this.radioPago = false;
    this.metodoPago = "Transferencia";
    this.paymentMethod = "28";
    this.PaymentTermsName = "CONTADO";
    // this.paypal();
  }

  oxxoPay() {
    this.sepuede = true;
    // document.getElementById('comprame').style.display = "block";
    this.paymentMethod = "28";
    this.PaymentTermsName = "CONTADO";
    this.radioPago = false;
    this.metodoPago = "Oxxo Pay";
    this.valorRadio = 2;
    // this.setOpen3(true);
  }

  paypal() {
    // document.getElementById('comprame').style.display = "none";
    this.sepuede = false;
    this.radioPago = false;
    this.valorRadio = 4;
    this.metodoPago = "PayPal";
    this.PaymentTermsName = "CONTADO";
    this.paymentMethod = "03";
    if (this.paypalIs == false) {
      this.renderer.setStyle(this.paypalcont.nativeElement, 'display', 'block');
      this.paypalIs = true;
    } else if (this.paypalIs == true) {
      this.renderer.setStyle(this.paypalcont.nativeElement, 'display', 'none');
      this.paypalIs = false;
    }
  }
  facturameprro() {
    var _this8 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Debes aceptar los terminos y condiciones de pago',
        buttons: [{
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }
  relizarCompra() {
    if (this.facturame2 == false) {
      this.facturameprro();
    } else {
      this.cargando = true;
      for (let item of this.items) {
        if (item.paquete == 1) {
          this.productoService.getInfoPaquetes(item.sku).subscribe(paquetaxo => {
            this.paquetaxos = paquetaxo;
            for (let index = 0; index < this.paquetaxos.length; index++) {
              let lineasLocal = {
                salesQuotationNumber: null,
                dataAreaId: "lin",
                itemNumber: this.paquetaxos[index].sku,
                requestedSalesQuantity: Number(this.paquetaxos[index].cantidad),
                shippingWarehouseId: "CHIHCONS",
                fixedPriceCharges: 0,
                salesTaxGroupCode: "VTAS",
                stF_Category: null,
                inventoryLotId: null,
                orderedSalesQuantity: 0,
                salesOrderNumber: null,
                descripcionLinea: null,
                usuario: null,
                salesPrice: Number(this.paquetaxos[index].precio_total),
                ShippingSiteId: "CHIH",
                LineDiscountPercentage: 0
              };
              this.lineas.push(lineasLocal);
            }
          });
        }
        if (item.paquete != 1) {
          let lineasLocal = {
            salesQuotationNumber: null,
            dataAreaId: "lin",
            itemNumber: item.sku,
            requestedSalesQuantity: Number(item.quantity),
            shippingWarehouseId: "CHIHCONS",
            fixedPriceCharges: 0,
            salesTaxGroupCode: "VTAS",
            stF_Category: null,
            inventoryLotId: null,
            orderedSalesQuantity: 0,
            salesOrderNumber: null,
            descripcionLinea: null,
            usuario: null,
            salesPrice: Number(item.precio / 1.16),
            ShippingSiteId: "CHIH",
            LineDiscountPercentage: 0
          };
          this.lineas.push(lineasLocal);
        }
      }
      if (this.recoge == false && this.valorEnvio == 2) {
        let lineasPaqueteria = {
          salesQuotationNumber: null,
          dataAreaId: "lin",
          itemNumber: '9999-0850',
          requestedSalesQuantity: 1,
          shippingWarehouseId: "CHIHCONS",
          fixedPriceCharges: 0,
          salesTaxGroupCode: "VTAS",
          stF_Category: null,
          inventoryLotId: null,
          orderedSalesQuantity: 0,
          salesOrderNumber: null,
          descripcionLinea: null,
          usuario: null,
          salesPrice: Number(this.estafeta),
          ShippingSiteId: "CHIH",
          LineDiscountPercentage: 0
        };
        this.lineas.push(lineasPaqueteria);
      }
      if (this.recoge == false && this.valorEnvio == 1) {
        let lineasPaqueteria = {
          salesQuotationNumber: null,
          dataAreaId: "lin",
          itemNumber: '9999-9003',
          requestedSalesQuantity: 1,
          shippingWarehouseId: "CHIHCONS",
          fixedPriceCharges: 0,
          salesTaxGroupCode: "VTAS",
          stF_Category: null,
          inventoryLotId: null,
          orderedSalesQuantity: 0,
          salesOrderNumber: null,
          descripcionLinea: null,
          usuario: null,
          salesPrice: Number(this.paqueteExpress),
          ShippingSiteId: "CHIH",
          LineDiscountPercentage: 0
        };
        this.lineas.push(lineasPaqueteria);
      }
      this.arreglito = this.lineas;
      setTimeout(() => {
        let objetoCompra = {
          salesQuotationNumber: null,
          currencyCode: "MXN",
          languageId: "es-MX",
          dataAreaId: "lin",
          defaultShippingSiteId: "CHIH",
          requestingCustomerAccountNumber: this.customerID,
          quotationTakerPersonnelNumber: "0003028",
          quotationResponsiblePersonnelNumber: "0003028",
          salesOrderOriginCode: "MOTV_00034",
          salesTaxGroupCode: "VTAS",
          deliveryModeCode: this.modoEntrega,
          customersReference: "",
          customerPaymentMethodName: this.paymentMethod,
          paymentTermsName: this.PaymentTermsName,
          usuario: this.usuario.usuario,
          promoCode: null,
          nombreCliente: this.nombre.toUpperCase() + " " + this.apellido.toUpperCase(),
          formattedInvoiceAddress: this.direccion[this.radioDireccion].address1 + "\n" + this.direccion[this.radioDireccion].city + "," + this.codigo + ",MEX\n" + this.direccion[this.radioDireccion].postcode,
          deliveryAddressStreet: this.address1,
          deliveryAddressCountryRegionId: "MEX",
          deliveryAddressCity: this.city,
          deliveryAddressCountyId: this.countyId,
          deliveryAddressZipCode: this.postcode,
          deliveryAddressName: this.nombre.toUpperCase() + " " + this.apellido.toUpperCase(),
          deliveryAddressStateId: this.codigo,
          enviarCorreo: false,
          correoCliente: this.usuario.usuario,
          nombreEmpleado: "Eduardo Acosta",
          correoEmpleado: "sistemas16@avanceytec.com.mx",
          DeliveryAddressCountyId: this.countyId,
          DeliveryAddressLocationId: "000537244",
          DeliveryAddressDescription: this.nombre.toUpperCase() + " " + this.apellido.toUpperCase(),
          DefaultShippingWarehouseId: "CHIHCONS",
          Lineas: this.arreglito
        };
        this.checkoutService.guardaObjetoCot(JSON.stringify(objetoCompra), this.usuario.usuario).subscribe(guarda => {});
        this.checkoutService.addCotizacionDynamics(objetoCompra).subscribe(response => {
          this.cotDatos = response;
          this.respuestaCotizacion = this.cotDatos.data.salesQuotationNumber;
          // this.lineas = this.cotDatos.lineas;
          let objetoOrdenVenta = {
            DeliveryAddressCity: this.direccion[this.radioDireccion].city,
            DeliveryAddressCountryRegionId: "MEX",
            DeliveryAddressCountyId: this.countyId,
            DeliveryAddressDescription: this.nombre.toUpperCase() + " " + this.apellido.toUpperCase(),
            DeliveryAddressName: this.nombre.toUpperCase() + " " + this.apellido.toUpperCase(),
            DeliveryAddressStateId: this.codigo,
            DeliveryAddressStreet: this.direccion[this.radioDireccion].address1,
            DeliveryAddressStreetNumber: "380",
            DeliveryAddressZipCode: this.direccion[this.radioDireccion].postcode,
            lineas: this.lineas,
            PaymentTermsName: this.PaymentTermsName,
            SATPurpose: this.usocfdi,
            Usuario: "ventascat22",
            dataAreaId: "LIN",
            quotationId: this.respuestaCotizacion,
            _AccountNum: this.customerID
          };
          this.checkoutService.convertirOrdenVenta(objetoOrdenVenta).subscribe(respuestilla => {
            this.respuestillaOV = respuestilla;
            this.respuestaOV = this.respuestillaOV.data.salesOrderNumber;
            if (this.metodoPago == 'Transferencia') {
              this.jsonMensaje = {
                "nombreCliente": this.nombre + " " + this.apellido,
                "noCliente": this.customerID,
                "folio": this.respuestaOV,
                "importe": (this.grandTotal + this.totalEnvio).toFixed(2),
                "correoCliente": this.usuario.usuario,
                "direccion": this.address1,
                "CFDI": this.usocfdi,
                "razonSocial": this.razonSocial,
                "rfc": this.rfc,
                "DirFiscal": this.DirFiscal,
                "FormadePago": this.metodoPago,
                "Cuenta": this.noCuenta,
                "Clabe": this.clabe,
                "Banco": this.banco,
                "TelPrincipal": "6146051278",
                "TelComprador": "6143609156"
              };
            } else {
              this.jsonMensaje = {
                "nombreCliente": this.nombre + " " + this.apellido,
                "noCliente": this.customerID,
                "folio": this.respuestaOV,
                "importe": (this.grandTotal + this.totalEnvio).toFixed(2),
                "correoCliente": this.usuario.usuario,
                "direccion": this.address1,
                "CFDI": this.usocfdi,
                "razonSocial": this.razonSocial,
                "rfc": this.rfc,
                "DirFiscal": this.DirFiscal,
                "FormadePago": this.metodoPago,
                "TelPrincipal": "6146051278",
                "TelComprador": "6143609156"
              };
            }
            // formatDate(this.fechaActual2,'YYYY-MM-DD','');
            for (let item of this.items) {
              let lineasBomnitas = {
                nombreProducto: item.title,
                salesQuotationNumber: null,
                dataAreaId: "lin",
                itemNumber: item.sku,
                requestedSalesQuantity: Number(item.quantity),
                shippingWarehouseId: "CHIHCONS",
                fixedPriceCharges: 0,
                salesTaxGroupCode: "VTAS",
                stF_Category: null,
                inventoryLotId: null,
                orderedSalesQuantity: 0,
                salesOrderNumber: null,
                descripcionLinea: null,
                usuario: null,
                salesPrice: Number(item.precio),
                ShippingSiteId: "CHIH",
                LineDiscountPercentage: 0
              };
              this.lineasBomnitas.push(lineasBomnitas);
            }
            let mensajazo = {
              "customerName": this.nombre + " " + this.apellido,
              "order_name": this.respuestaOV,
              "date": this.formattedDate,
              "payment": this.metodoPago,
              "products": this.lineasBomnitas,
              "discounts": [this.porcentaje],
              "total_products": this.grandTotal,
              "total_discounts": this.porcentaje,
              "total_wrapping": 0,
              "total_shipping": this.totalEnvio,
              "total_tax_paid": this.grandTotal / 1.16,
              "total_paid": this.grandTotal,
              "carrier": this.modoEntrega,
              "delivery_block_html": "N/A",
              "invoice_block_html": "N/A",
              "emailDestino": this.usuario.usuario + ',ventas@lideart.com.mx'
            };
            this.checkoutService.mandacorreo(mensajazo).subscribe(masdatos => {
              let objetoVentita = {
                "correo": this.usuario.usuario,
                "nombre": this.nombre + " " + this.apellido,
                "pais": "Mexico",
                "estado": this.nombreEstado,
                "ciudad": this.direccion[this.radioDireccion].city,
                "colonia": this.direccion[this.radioDireccion].colony,
                "cp": this.direccion[this.radioDireccion].postcode,
                "direccion": this.direccion[this.radioDireccion].address1,
                "fecha": this.fechaActual,
                "hora": this.now,
                "metodo_pago": this.metodoPago,
                "paqueteria": this.totalEnvio,
                "iva": (this.grandTotal + this.totalEnvio) * .16,
                "subtotal": this.grandTotal,
                "total": this.grandTotal + this.totalEnvio.toFixed(2),
                "cotizacion": this.respuestaCotizacion,
                "ov": this.respuestaOV
              };
              this.checkoutService.guarda_venta(objetoVentita).subscribe(datosVenta => {
                if (this.metodoPago == 'Oxxo Pay') {
                  const customerData = {
                    name: this.nombre + " " + this.apellido,
                    email: this.usuario.usuario
                  };
                  this.conekta.createCustomer(customerData).subscribe(datitos => {
                    this.cargando = true;
                    this.cliente = datitos;
                    let totalcompra = (this.grandTotal * 100).toString();
                    let totalenvio = (this.totalEnvio * 100).toString();
                    const thirty_days_from_now = Math.round(Date.now() / 1000 + 60 * 60 * 24 * 30).toString();
                    const orderData = {
                      "line_items": [{
                        "name": "Pedido Lideart App",
                        "unit_price": parseInt(totalcompra),
                        "quantity": 1
                      }],
                      "shipping_lines": [{
                        "amount": parseInt(totalenvio)
                      }],
                      "currency": "MXN",
                      "customer_info": {
                        "name": this.nombre + " " + this.apellido,
                        "email": this.usuario.usuario,
                        "phone": "+5215555555555"
                      },
                      shipping_contact: {
                        phone: '+5215555555555',
                        receiver: this.nombre + " " + this.apellido,
                        address: {
                          street1: "Direccion de Envio",
                          country: 'MX',
                          postal_code: this.postcode
                        }
                      },
                      "metadata": {
                        "datos_extra": "1234"
                      },
                      "charges": [{
                        "payment_method": {
                          "type": "cash",
                          "expires_at": thirty_days_from_now
                        }
                      }]
                    };
                    this.conekta.createOrder(orderData).subscribe(orderdata => {
                      this.cargando = false;
                      this.orden = orderdata;
                      this.oxxxo = this.orden.charges.data[0].payment_method.reference;
                      this.productitos = this.items;
                      this.shoppingCart.deleteCart();
                      document.getElementById("pago").style.display = "none";
                      this.cargando = false;
                      if (window.innerWidth < 992) {
                        this.animacion('comprita');
                      } else {
                        this.animacion('resumenEscritorio');
                      }
                      document.getElementById("resumen").style.display = "block";
                    });
                  });
                } else {
                  this.cargando = false;
                  this.productitos = this.items;
                  this.shoppingCart.deleteCart();
                  document.getElementById("pago").style.display = "none";
                  this.cargando = false;
                  if (window.innerWidth < 992) {
                    this.animacion('comprita');
                  } else {
                    this.animacion('resumenEscritorio');
                  }
                  document.getElementById("resumen").style.display = "block";
                }
              });
            });
          });
        });
      }, 5000);
    }
  }
  tarjetas() {
    // document.getElementById('comprame').style.display = "none";
    this.sepuede = false;
    this.radioPago = false;
    this.metodoPago = "Web Pay";
    this.valorRadio = 3;
    this.paymentMethod = "28";
    this.PaymentTermsName = "CONTADO";
    // this.metodoPago = "Web Pay";
    document.getElementById('open-modal').click();
    document.getElementById('modalsito').style.display = "flex";
    this.webPay();
    // (<HTMLInputElement>document.getElementsByName("paypal")[0].children[0].children[0].children[2]).disabled = false;
    // (<HTMLInputElement>document.getElementsByName("transferencia")[0].children[0].children[0].children[2]).disabled = false;
    // (<HTMLInputElement>document.getElementsByName("tarjetas")[0].children[0].children[0].children[2]).disabled = true;
  }

  webPay() {
    const roundTo = function (num, places) {
      const factor = 10 ** places;
      return Math.round(num * factor) / factor;
    };
    var lejson = {
      "total": roundTo(this.grandTotal, 2),
      "email": this.usuario.usuario
    };
    this.checkoutService.webpay(lejson).subscribe(data => {
      this.datosWebPay = data;
      this.iframe = this.datosWebPay.ligaWebPay;
      this.urlsafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframe);
      var intervalopago = setInterval(() => {
        this.checkoutService.checaPago(this.numero_carro).subscribe(response => {
          this.respuestapago = response;
          var resPago = this.respuestapago;
          if (resPago > 0) {
            if (resPago == 1) {
              clearInterval(intervalopago);
              this.relizarCompra();
              this.cancel();
            } else {
              alert('Error al Procesar pago');
              clearInterval(intervalopago);
            }
          }
        });
      }, 1000);
    });
  }
  seleccionaDireccion() {
    var _this9 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this9.toastController.create({
        message: 'Seleccione una dirección para continuar',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  seleccionaEnvio() {
    var _this10 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this10.toastController.create({
        message: 'Seleccione un envío para continuar',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  errorAcuerdo() {
    var _this11 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this11.toastController.create({
        message: 'Acepta los terminos y condiciones para seleccionar este metodo de pago',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  seleccionaPago() {
    var _this12 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this12.toastController.create({
        message: 'Asegurate de seleccionar metodo de pago y aceptar los terminos.',
        color: "danger",
        position: "top",
        duration: 1500
      });
      toast.present();
    })();
  }
  modalReg() {
    var _this13 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this13.modalCtrl.create({
        component: CheckoutPage_1,
        cssClass: 'modalRegistroCss',
        initialBreakpoint: 1,
        breakpoints: [0, 0.5, 1]
      });
      return yield modal.present();
    })();
  }
  presentLoading() {
    var _this14 = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this14.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Finalizando Compra...',
        duration: 8000
      });
      yield loading.present();
      const {
        role,
        data
      } = yield loading.onDidDismiss();
    })();
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
    document.getElementById('modalsito').style.display = "none";
  }
  setOpen(isOpen) {
    this.isModalOpen = isOpen;
  }
  setOpen2(isOpen2) {
    this.isModalOpen2 = isOpen2;
  }
  setOpen3(isOpen3) {
    this.isModalOpen3 = isOpen3;
  }
  setOpen4(isOpen4) {
    this.isModalOpen4 = isOpen4;
  }
  cancel2() {
    this.modal2.dismiss(null, 'cancel');
  }
  cancel3() {
    this.modal.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  cancel4() {
    this.modal3.dismiss(null, 'cancel');
  }
  animacion(valor) {
    document.getElementById(valor).style.display = "flex";
  }
  quitaAnimacion() {
    document.getElementById('comprita').style.display = "none";
  }
  bloqueo() {
    if (this.facturame2 == false) {
      this.errorAcuerdo();
    }
  }
  static #_2 = this.ctorParameters = () => [{
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService
  }, {
    type: src_app_services_checkout_service_service__WEBPACK_IMPORTED_MODULE_4__.CheckoutServiceService
  }, {
    type: src_app_services_carrito_service_service__WEBPACK_IMPORTED_MODULE_3__.CarritoServiceService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Renderer2
  }, {
    type: src_app_services_conekta_service__WEBPACK_IMPORTED_MODULE_5__.ConektaService
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_7__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
  }];
  static #_3 = this.propDecorators = {
    modal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
    }],
    modal2: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
    }],
    modal3: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
    }],
    modal4: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
    }],
    modal5: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonModal]
    }],
    paypalcont: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: ['paypalcont']
    }],
    modal_nd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
      args: ['modal_nd']
    }]
  };
};
CheckoutPage = CheckoutPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-checkout',
  template: _checkout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_checkout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CheckoutPage);

/***/ }),

/***/ 50088:
/*!*********************************************!*\
  !*** ./src/app/services/conekta.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConektaService: () => (/* binding */ ConektaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 54860);



let ConektaService = class ConektaService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://api.conekta.io/customers';
    this.accessToken = 'key_8qEer5VSRctJBEx9ztbQJhs';
    this.apiUrl2 = 'https://api.conekta.io/orders';
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Accept': 'application/vnd.conekta-v2.1.0+json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`
      })
    };
  }
  createCustomer(customerData) {
    return this.http.post(this.apiUrl, customerData, this.httpOptions);
  }
  createOrder(orderData) {
    return this.http.post(this.apiUrl2, orderData, this.httpOptions);
  }
  static #_ = this.ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient
  }];
};
ConektaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ConektaService);

/***/ }),

/***/ 30919:
/*!**************************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `img.ng-lazyloaded {
  animation: fadein 1.5s;
}

ion-button {
  --box-shadow: transparent !important;
}

button {
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

ion-select {
  color: #fff;
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
.header-ios ion-toolbar:last-of-type {
  --border-width: 0;
}

.header-translucent-ios ion-toolbar {
  --opacity: 1;
}

ion-img::part(image) {
  width: 100px;
  height: 30px;
}

.redes img {
  height: 30px;
  width: 30px;
}

.redes {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.marcas img {
  height: 150px;
  width: 150px;
  text-align: center;
  margin: 0px;
}

.marcas {
  text-align: center;
}

.bottomBanner img {
  height: auto;
  width: 100%;
}

.imagensita {
  height: auto !important;
  width: auto !important;
}

.imageNumero {
  height: 60px;
  width: 100px;
}

.imageNumero2 {
  height: 50px;
  width: 50px;
}

.noquiero {
  text-align: start;
}

.imagencuatro {
  height: 50px;
  width: 50px;
}

.imagentres {
  height: 60px;
  width: 60px;
}

.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  display: grid;
  margin-right: 5px;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  width: 0.7em;
  height: 0.7em;
}

.part5 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  gap: 1em;
}
.part5 ion-checkbox {
  width: 1.5em;
  height: 1.5em;
}
.part5 p {
  font-size: 1em;
  max-width: 80%;
}

ion-card {
  margin: auto;
  width: 100%;
  padding: 10px;
  background: #fcfcfc;
}

.divis {
  margin: auto;
  width: 100%;
  padding: 10px;
  background: #fcfcfc;
}

ion-item {
  width: 100%;
  --background: none!important;
}

ion-radio-group {
  --background: none!important;
}

ion-list {
  --background: none!important;
}

.list-ios {
  background: none;
}

.list-md {
  background: none;
}

ion-list-header {
  --background: none!important;
}

.labelT {
  font-size: 6vw;
  color: rgb(0, 0, 0);
}

.labelC {
  font-size: 4vw;
  color: rgb(0, 0, 0);
}

.contR {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

ion-content {
  --background: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  --keyboard-offset:0px!important;
}

.personal {
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5em;
}
.personal ion-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: none;
  border-radius: none;
  background: #fff;
}
.personal ion-card form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: none;
  border-radius: none;
  background: #fff;
}
.personal ion-card .part1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.personal ion-card .part1 ion-card-title {
  font-size: 0.9rem;
  color: #00a3c7;
  padding: 1rem 0rem;
  font-weight: 300;
}
.personal ion-card .part1 .cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.personal ion-card .part1 .cont .nin {
  width: 100%;
  height: auto;
  border: 1px solid rgb(84, 84, 84);
}
.personal ion-card .part1 .cont .nin input {
  background: none;
  width: 100%;
  height: 2.5rem;
  text-indent: 1rem;
  font-size: 1rem;
  border: 0px;
}
.personal ion-card .part1 .cont input:focus {
  outline: none;
}
.personal ion-card .part1 .cont p {
  font-size: 0.75rem;
}
.personal ion-card .part2 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0rem 0.5rem;
}
.personal ion-card .part2 .terms {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1.5rem 0rem;
}
.personal ion-card .part2 .terms .inp {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.personal ion-card .part2 .terms .txt {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.personal ion-card .part2 .terms .txt p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-style: italic;
  font-size: 1rem;
  text-align: justify;
}
.personal ion-card .btn {
  background: #1ca3c9;
  color: #fff;
  border-radius: 5rem;
  width: 15rem;
  height: 3rem;
  font-size: 1.3rem;
  font-weight: lighter;
  margin-top: 2rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}

@media screen and ((max-width: 992px)) {
  .item-title {
    font-size: 1em !important;
    font-weight: normal !important;
    color: black !important;
  }
  .item-description {
    font-size: 1em !important;
    color: black !important;
  }
  .item-price {
    font-size: 1em !important;
    font-weight: normal !important;
    color: black !important;
  }
  .paq:hover {
    box-shadow: none !important;
  }
  #compraEscritorio {
    display: none;
  }
  .subtitulosSecciones {
    font-size: 1em;
  }
  #itemsDirecciones {
    box-shadow: none !important;
  }
  .nombreClienteDirecciones {
    margin-bottom: 0.3em;
  }
  #resumenEscritorio {
    display: none !important;
  }
  .direccion .part2 {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 4rem;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    font-family: "RobotoCondensed-Light";
    font-size: 1.5em;
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
}
.direccion {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.direccion ion-card {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: none;
  border-radius: none;
  background: #fff;
}
.direccion ion-card .part1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.direccion ion-card .part1 .titulosSecciones {
  font-size: 0.9rem;
  color: rgb(84, 84, 84);
  padding: 1rem 0rem;
  font-weight: 300;
}
.direccion ion-card .part1 p {
  font-size: 0.9rem;
}
.direccion ion-card .part2 .pas {
  margin-bottom: 2em;
}
.direccion ion-card .part2 .pas:last-child {
  margin-bottom: 0em;
}
.direccion ion-card .part2 p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9rem;
}
.direccion ion-card .part3 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 0rem;
}
.direccion ion-card .part3 .sub {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.direccion ion-card .part3 .sub ion-icon {
  font-size: 1.2rem;
}
.direccion ion-card .part3 .sub a {
  font-size: 1rem;
  text-decoration: none;
}
.direccion ion-card .part3 .sub2 {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.direccion ion-card .part3 .sub2 ion-icon {
  font-size: 1.2rem;
}
.direccion ion-card .part3 .sub2 a {
  font-size: 1rem;
  text-decoration: none;
}
.direccion ion-card .part4 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  gap: 1em;
}
.direccion ion-card .part4 .btn {
  background: #1ca3c9 !important;
  color: #fff !important;
  border-radius: 5rem;
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 2rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.direccion ion-card .part4 .b1 {
  margin-right: 0.5rem;
}
.direccion ion-card .part4 .b2 {
  margin-left: 0.5rem;
}

.envio {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.envio ion-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: none;
  border-radius: none;
  background: #fff;
}
.envio ion-card .part1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.envio ion-card .part1 ion-card-title {
  font-size: 0.9rem;
  color: rgb(84, 84, 84);
  padding: 1rem 0rem;
  font-weight: 300;
}
.envio ion-card .paq {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s;
  padding: 10px;
}
.envio ion-card .paq .inp {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.envio ion-card .paq .txt {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
}
.envio ion-card .paq .txt p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9rem;
  text-align: justify;
}
.envio ion-card .part4 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  gap: 1em;
}
.envio ion-card .part4 .btn {
  background: #1ca3c9 !important;
  color: #fff !important;
  border-radius: 5rem;
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 2rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.envio ion-card .part4 .b1 {
  margin-right: 0.5rem;
}
.envio ion-card .part4 .b2 {
  margin-left: 0.5rem;
}

/*.paq:hover{
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
}*/
.pago {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pago ion-card {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: none;
  border-radius: none;
  background: #fff;
}
.pago ion-card .part1 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
.pago ion-card .part1 ion-card-title {
  font-size: 0.9rem;
  color: rgb(84, 84, 84);
  padding: 1rem 0rem;
  font-weight: 300;
}
.pago ion-card .pago {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0.3rem 0rem;
}
.pago ion-card .pago .rowin {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.pago ion-card .pago .inp {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.pago ion-card .pago .txt {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.pago ion-card .pago .txt p {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
  font-size: 0.9rem;
  text-align: justify;
}
.pago ion-card .pago .paypalcont {
  width: 100%;
  height: auto;
  display: none;
}
.pago ion-card .fixink {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.pago ion-card .terms {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  margin-top: 2rem;
}
.pago ion-card .terms .titl {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: rgb(140, 140, 140);
  padding: 0rem 0.5rem;
}
.pago ion-card .terms .titl p {
  color: black;
  font-size: 0.9rem;
  font-weight: 400;
}
.pago ion-card .terms .titl .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}
.pago ion-card .part4 {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  gap: 1em;
}
.pago ion-card .part4 .btn {
  background: #1ca3c9 !important;
  color: #fff !important;
  border-radius: 5rem;
  width: 8rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 2rem;
  margin-bottom: 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.pago ion-card .part4 .b1 {
  margin-right: 0.5rem;
}
.pago ion-card .part4 .b2 {
  margin-left: 0.5rem;
}

.item-title {
  font-size: 2em;
  font-weight: bold;
  color: #333;
}

.item-description {
  font-size: 0.6em;
  color: #666;
}

.item-price {
  font-size: 0.75em;
  font-weight: bold;
  color: #0088a7;
}

.core {
  background: #cedce0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px rgba(2, 255, 255, 0.15) solid;
  animation: flicker 0.2s infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

.core2 {
  background: #cedce0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px rgba(2, 255, 255, 0.15) solid;
  animation: flicker2 0.2s infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

.big_core {
  background: #cedce0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px rgba(2, 255, 255, 0.15) solid;
  animation: big_flicker 0.2s infinite;
}

.c_ease {
  animation: colour_ease 3s infinite ease-in-out;
}

.counterspin5 {
  animation: rotate_anti 5s linear infinite;
}

.counterspin4 {
  animation: rotate_anti 4s linear infinite;
}

.semi_arc {
  width: 100px;
  height: 100px;
  border: 6px solid #02feff;
  background: rgba(2, 254, 255, 0.2);
  border-radius: 50%;
  transform: rotateZ(0deg);
  transition: box-shadow 3s ease;
  text-align: center;
  line-height: 100px;
}

.semi_arc:hover {
  box-shadow: 0px 0px 30px rgba(2, 254, 255, 0.8);
  transition: 0.3s;
}

.semi_arc_2 {
  content: "";
  position: absolute;
  width: 94%;
  height: 94%;
  left: 3%;
  top: 3%;
  border: 5px solid #02feff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate 4s linear infinite;
  text-align: center;
  line-height: 129px;
}

.semi_arc_2:after {
  content: "";
  position: absolute;
  width: 94%;
  height: 94%;
  left: 3%;
  top: 3%;
  border: 4px solid #02feff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate_anti 2s linear infinite;
}

.semi_arc_3 {
  content: "";
  position: absolute;
  width: 94%;
  height: 94%;
  left: 3%;
  top: 3%;
  border: 5px solid #02feff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate 4s linear infinite;
  text-align: center;
  line-height: 129px;
}

.arc {
  width: 100px;
  height: 100px;
  border: 6px solid #02feff;
  background: rgba(2, 254, 255, 0.2);
  border-radius: 50%;
  transform: rotateY(-30deg) translateZ(-200px);
  transform: rotateZ(0deg);
  transition: box-shadow 3s ease;
  text-align: center;
  line-height: 100px;
}

.arc:hover {
  box-shadow: 0px 0px 30px rgba(2, 254, 255, 0.8);
  transition: 0.3s;
}

.arc:after {
  content: "";
  position: absolute;
  width: 94%;
  height: 94%;
  left: 3%;
  top: 3%;
  border: 4px solid #02feff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotate 4s linear infinite;
}

.e1:after {
  border-color: rgba(2, 255, 255, 0.6);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.e2:after {
  border-color: rgba(2, 255, 255, 0.6);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.e3 {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  animation: rotate 5s linear infinite;
}

.e3:after {
  border-color: rgba(2, 255, 255, 0.6);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.e4 {
  width: 150px;
  height: 150px;
}

.e4_1 {
  border-color: rgba(2, 255, 255, 0.3);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.e4_1:after {
  border-color: rgba(2, 255, 255, 0.6);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

.e5 {
  width: 200px;
  height: 200px;
}

.e5_1 {
  color: rgba(2, 255, 255, 0.15);
  border: 2px solid;
  border-left: 2px solid transparent;
  animation: rotate 5s linear infinite;
}

.e5_2 {
  color: rgba(2, 255, 255, 0.7);
  border: 4px solid;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  animation: rotate_anti 4s linear infinite;
}

.e5_3 {
  color: rgba(2, 255, 255, 0.5);
  border: 2px solid;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  animation: rotate 3s linear infinite;
}

.e5_4 {
  color: rgba(2, 255, 255, 0.15);
  border: 4px solid;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  animation: rotate_anti 2s linear infinite;
}

.e6 {
  border-color: transparent;
  background: rgba(255, 255, 255, 0);
  width: 200px;
  height: 200px;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
@keyframes rotate_anti {
  0% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
}
@keyframes colour_ease {
  0% {
    border-color: #02feff;
  }
  50% {
    border-color: rgba(2, 254, 255, 0.5);
  }
  100% {
    border-color: #02feff;
  }
}
@keyframes flicker {
  0% {
    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  40% {
    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  50% {
    box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);
  }
  60% {
    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  100% {
    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
}
@keyframes flicker2 {
  0% {
    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  40% {
    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  50% {
    box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);
  }
  60% {
    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
  100% {
    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);
  }
}
@keyframes big_flicker {
  0% {
    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);
  }
  40% {
    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);
  }
  50% {
    box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);
  }
  60% {
    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);
  }
  100% {
    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);
  }
}
html,
body {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.arc_reactor {
  position: relative;
  top: 50%;
  margin-top: -125px;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 15px rgba(2, 255, 255, 0.3), inset 0px 0px 50px 15px rgba(2, 255, 255, 0.3);
}

.core2 {
  background: #cedce0;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 5px solid rgba(2, 255, 255, 0.15);
  animation: flicker2 0.2s infinite;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

.e7 {
  width: 95.25%;
  height: 95.25%;
  left: 2.5475%;
  right: 2.5475%;
  border: 6px solid transparent;
  background: transparent;
  border-radius: 50%;
  transform: rotateZ(0deg);
  transition: box-shadow 3s ease;
  text-align: center;
  line-height: 100px;
}

.case_container {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  position: absolute;
  margin-left: 20px;
  margin-top: 20px;
}

.marks li {
  display: block;
  width: 3px;
  height: 11px;
  background: rgba(2, 254, 255, 0.8);
  position: absolute;
  margin-left: 105px;
  margin-top: -110px;
  animation: colour_ease2 3s infinite ease-in-out;
}

@keyframes colour_ease2 {
  0% {
    background: #02feff;
  }
  50% {
    background: rgba(2, 254, 255, 0.3);
  }
  100% {
    background: #02feff;
  }
}
.marks li:first-child {
  transform: rotate(6deg) translateY(125px);
}

.marks li:nth-child(2) {
  transform: rotate(12deg) translateY(125px);
}

.marks li:nth-child(3) {
  transform: rotate(18deg) translateY(125px);
}

.marks li:nth-child(4) {
  transform: rotate(24deg) translateY(125px);
}

.marks li:nth-child(5) {
  transform: rotate(30deg) translateY(125px);
}

.marks li:nth-child(6) {
  transform: rotate(36deg) translateY(125px);
}

.marks li:nth-child(7) {
  transform: rotate(42deg) translateY(125px);
}

.marks li:nth-child(8) {
  transform: rotate(48deg) translateY(125px);
}

.marks li:nth-child(9) {
  transform: rotate(54deg) translateY(125px);
}

.marks li:nth-child(10) {
  transform: rotate(60deg) translateY(125px);
}

.marks li:nth-child(11) {
  transform: rotate(66deg) translateY(125px);
}

.marks li:nth-child(12) {
  transform: rotate(72deg) translateY(125px);
}

.marks li:nth-child(13) {
  transform: rotate(78deg) translateY(125px);
}

.marks li:nth-child(14) {
  transform: rotate(84deg) translateY(125px);
}

.marks li:nth-child(15) {
  transform: rotate(90deg) translateY(125px);
}

.marks li:nth-child(16) {
  transform: rotate(96deg) translateY(125px);
}

.marks li:nth-child(17) {
  transform: rotate(102deg) translateY(125px);
}

.marks li:nth-child(18) {
  transform: rotate(108deg) translateY(125px);
}

.marks li:nth-child(19) {
  transform: rotate(114deg) translateY(125px);
}

.marks li:nth-child(20) {
  transform: rotate(120deg) translateY(125px);
}

.marks li:nth-child(21) {
  transform: rotate(126deg) translateY(125px);
}

.marks li:nth-child(22) {
  transform: rotate(132deg) translateY(125px);
}

.marks li:nth-child(23) {
  transform: rotate(138deg) translateY(125px);
}

.marks li:nth-child(24) {
  transform: rotate(144deg) translateY(125px);
}

.marks li:nth-child(25) {
  transform: rotate(150deg) translateY(125px);
}

.marks li:nth-child(26) {
  transform: rotate(156deg) translateY(125px);
}

.marks li:nth-child(27) {
  transform: rotate(162deg) translateY(125px);
}

.marks li:nth-child(28) {
  transform: rotate(168deg) translateY(125px);
}

.marks li:nth-child(29) {
  transform: rotate(174deg) translateY(125px);
}

.marks li:nth-child(30) {
  transform: rotate(180deg) translateY(125px);
}

.marks li:nth-child(31) {
  transform: rotate(186deg) translateY(125px);
}

.marks li:nth-child(32) {
  transform: rotate(192deg) translateY(125px);
}

.marks li:nth-child(33) {
  transform: rotate(198deg) translateY(125px);
}

.marks li:nth-child(34) {
  transform: rotate(204deg) translateY(125px);
}

.marks li:nth-child(35) {
  transform: rotate(210deg) translateY(125px);
}

.marks li:nth-child(36) {
  transform: rotate(216deg) translateY(125px);
}

.marks li:nth-child(37) {
  transform: rotate(222deg) translateY(125px);
}

.marks li:nth-child(38) {
  transform: rotate(228deg) translateY(125px);
}

.marks li:nth-child(39) {
  transform: rotate(234deg) translateY(125px);
}

.marks li:nth-child(40) {
  transform: rotate(240deg) translateY(125px);
}

.marks li:nth-child(41) {
  transform: rotate(246deg) translateY(125px);
}

.marks li:nth-child(42) {
  transform: rotate(252deg) translateY(125px);
}

.marks li:nth-child(43) {
  transform: rotate(258deg) translateY(125px);
}

.marks li:nth-child(44) {
  transform: rotate(264deg) translateY(125px);
}

.marks li:nth-child(45) {
  transform: rotate(270deg) translateY(125px);
}

.marks li:nth-child(46) {
  transform: rotate(276deg) translateY(125px);
}

.marks li:nth-child(47) {
  transform: rotate(282deg) translateY(125px);
}

.marks li:nth-child(48) {
  transform: rotate(288deg) translateY(125px);
}

.marks li:nth-child(49) {
  transform: rotate(294deg) translateY(125px);
}

.marks li:nth-child(50) {
  transform: rotate(300deg) translateY(125px);
}

.marks li:nth-child(51) {
  transform: rotate(306deg) translateY(125px);
}

.marks li:nth-child(52) {
  transform: rotate(312deg) translateY(125px);
}

.marks li:nth-child(53) {
  transform: rotate(318deg) translateY(125px);
}

.marks li:nth-child(54) {
  transform: rotate(324deg) translateY(125px);
}

.marks li:nth-child(55) {
  transform: rotate(330deg) translateY(125px);
}

.marks li:nth-child(56) {
  transform: rotate(336deg) translateY(125px);
}

.marks li:nth-child(57) {
  transform: rotate(342deg) translateY(125px);
}

.marks li:nth-child(58) {
  transform: rotate(348deg) translateY(125px);
}

.marks li:nth-child(59) {
  transform: rotate(354deg) translateY(125px);
}

.marks li:nth-child(60) {
  transform: rotate(360deg) translateY(125px);
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
  background-color: white;
  z-index: 9999999;
}
.loader img {
  width: 200px;
  height: auto;
}

.comprassss {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  position: fixed;
  transition: 0.75s all ease-in-out;
  top: 0;
  opacity: 1;
  left: 0%;
}
.comprassss img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.comprassss button {
  background: #1ca3c9 !important;
  color: #fff !important;
  border-radius: 5rem;
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: lighter;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  position: absolute;
  left: calc(50% - 6rem);
  top: calc(60% + 5rem);
}

.custom-col {
  padding: 0em;
  border: 1px solid transparent;
  display: flex;
  justify-content: left;
  align-items: center;
}

@media screen and (min-width: 993px) {
  .tituloItemCompra {
    width: -moz-fit-content;
    width: fit-content;
    font-size: 1.5em;
    text-overflow: unset;
  }
  .titulosSecciones {
    font-size: 1.5em;
  }
  .custom-col {
    padding: 20px;
    border: 1px solid transparent;
    transition: border-color 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*.custom-col:hover{
    border-color:#3dc2ff ;
  }*/
  .nombreClienteDirecciones {
    margin-bottom: 0.3em;
    font-size: 1.8em;
    width: -moz-fit-content;
    width: fit-content;
  }
  .subtitulosSecciones {
    font-size: 2.8em;
  }
  #resumenEscritorio {
    display: flex;
    box-shadow: rgba(65, 212, 238, 0.2) 0px 7px 29px 0px;
    padding: 0.82em;
    left: 0;
  }
  #resumen {
    display: none !important;
  }
  .etiquetasResumen {
    color: #00a3c7;
  }
  .cantidadesResumen {
    font-weight: bold;
  }
  .rowResumen {
    font-size: 1.2em;
    font-weight: 100;
  }
  .paq {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 5px !important;
  }
  .inp ion-radio {
    margin-right: 20px;
  }
  .txt {
    flex: 1;
    align-items: center;
  }
  .direccion .part2 {
    border-bottom: 2px solid rgb(137, 212, 247);
    border-top: 2px solid rgb(137, 212, 247);
    font-family: "RobotoCondensed-Light";
    font-size: 2.3em;
  }
  .direccion .part1 {
    color: #00a3c7;
  }
  .compra {
    width: 100%;
    height: auto;
    background: #fff;
    box-shadow: green;
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
    align-items: flex-end;
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
    background: rgb(235, 244, 247);
    text-indent: 1rem;
    border-radius: 5rem;
    border: 1px solid rgb(0, 163, 197);
    margin-bottom: 0.5rem;
  }
  .inps:focus {
    outline: none;
  }
  .selict {
    width: 100%;
    height: 2.5rem;
    background: rgb(235, 244, 247);
    padding: 0rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(0, 163, 197);
    margin-bottom: 0.5rem;
  }
  .selict:focus {
    outline: none;
  }
}
.custom-card {
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
}

.custom-card-title {
  color: #0088a7;
  font-size: 1.8em;
}

.custom-hr {
  width: 100%;
  height: 1px;
  background: rgb(128, 128, 128);
  border: none;
  margin: 1em 0;
}

.inp ion-radio {
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 1px solid #3880ff;
}

.direc-list-cont {
  width: 40em;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.direc-list-cont .direct-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3em;
  padding: 1em;
  padding-left: 4em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.4s all ease-in-out;
  position: relative;
  border-radius: 1em;
}
.direc-list-cont .direct-cont .direc {
  color: #000;
  font-size: 0.96em;
  font-weight: 100;
  transition: 0.4s all ease-in-out;
}
.direc-list-cont .direct-cont:hover {
  box-shadow: rgba(0, 163, 199, 0.66) 0px 2px 8px 0px;
}
.direc-list-cont .direct-cont:hover .direc {
  color: #0196b7;
}

.deskheader {
  display: none;
}

.deskfooter {
  display: none;
}

.deskbtn {
  display: none;
}

.modal-nd {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3098039216);
}
.modal-nd .form-conten {
  width: 30em;
  height: auto;
  padding: 1em;
  background-color: #fff;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  position: relative;
}
.modal-nd .form-conten .inps {
  width: 100%;
  height: 2.5em;
  background: rgb(255, 255, 255);
  text-indent: 0em;
  border-radius: 0em;
  border: none;
  border-bottom: 1px solid rgb(0, 163, 197);
  margin-bottom: 0em;
  padding: 0em 1em;
  color: #00a3c7;
}
.modal-nd .form-conten .inps::placeholder {
  color: #000;
  font-size: 0.9em;
}
.modal-nd .form-conten .selict {
  width: 100%;
  height: 2.5rem;
  background: rgb(255, 255, 255);
  padding: 0rem 1rem;
  border-radius: 0em;
  border: none;
  border-bottom: 1px solid rgb(0, 163, 197);
  margin-bottom: 0em;
  color: #00a3c7;
}
.modal-nd .form-conten button {
  padding: 0.5em 3em;
  font-size: 1.1em;
  font-weight: 100;
  background-color: #ffffff;
  color: #00a3d0;
  border: 1px solid #00a3d0;
  transition: 0.5s all ease-in-out;
  border-radius: 2em;
}
.modal-nd .form-conten button:hover {
  background-color: #00a3d0;
  color: #fff;
}
.modal-nd .form-conten .cancel {
  color: #f00;
  position: absolute;
  right: 1.5em;
  bottom: 1.5em;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
}
.modal-nd .form-conten .cancel:hover {
  color: rgba(255, 0, 0, 0.568);
}

.super-cont-envio {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.super-cont-envio .envio-cont {
  width: 40em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.super-cont-envio .envio-cont .opt-cont {
  width: 100%;
  height: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.4s all ease-in-out;
  padding-left: 4em;
  position: relative;
  border-radius: 1em;
}
.super-cont-envio .envio-cont .opt-cont:hover {
  box-shadow: rgba(0, 163, 199, 0.66) 0px 2px 8px 0px;
}
.super-cont-envio .part4 {
  padding: 2em 0em;
  display: flex;
  gap: 1em;
}
.super-cont-envio .part4 .btn {
  background: #fff !important;
  color: #00a3c7 !important;
  border-radius: 5rem;
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: lighter;
  margin-top: 0em;
  margin-bottom: 0em;
  box-shadow: none;
  border: 1px solid #00a3c7;
  transition: 0.5s all ease-in-out;
}
.super-cont-envio .part4 .btn:hover {
  background: #00a3c7 !important;
  color: #fff !important;
}

@media (min-width: 992px) {
  .pagoContDesk {
    width: 40em !important;
    box-shadow: none !important;
  }
  .super-cont-envio {
    display: flex;
  }
  ion-header {
    display: none;
  }
  .deactbtn {
    display: none;
  }
  .deskbtn {
    display: block;
  }
  .pago ion-card .part4 {
    padding: 2em 0em;
  }
  .pago ion-card .part4 .b1 {
    background: #fff !important;
    color: #00a3c7 !important;
    border-radius: 5rem;
    width: 12rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: lighter;
    margin-top: 0em;
    margin-bottom: 0em;
    box-shadow: none;
    border: 1px solid #00a3c7;
    transition: 0.5s all ease-in-out;
    margin-right: 0em;
  }
  .pago ion-card .part4 .b1:hover {
    background: #00a3c7 !important;
    color: #fff !important;
  }
  .direccion ion-card .part4 {
    padding: 2em 0em;
  }
  .direccion ion-card .part4 .btn {
    background: #fff !important;
    color: #00a3c7 !important;
    border-radius: 5rem;
    width: 12rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: lighter;
    margin-top: 0em;
    margin-bottom: 0em;
    box-shadow: none;
    border: 1px solid #00a3c7;
    transition: 0.5s all ease-in-out;
  }
  .direccion ion-card .part4 .btn:hover {
    background: #00a3c7 !important;
    color: #fff !important;
  }
  .form-control {
    width: 0.5em;
    height: 0.5em;
    cursor: pointer;
  }
  .deskheader {
    display: block;
  }
  .deskfooter {
    display: block;
  }
  .part2 {
    display: none;
  }
  .titulosSecciones {
    font-size: 1.8em !important;
    color: #00a3c7 !important;
  }
  .subtitulosSecciones {
    font-size: 1.2em !important;
  }
  .direc-list-cont {
    display: flex;
  }
  .custom-card {
    box-shadow: none;
    padding: 10px;
    margin-bottom: 20px;
    width: 50% !important;
  }
  .env-cont {
    display: none !important;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/pages/checkout/checkout.page.scss"],"names":[],"mappings":"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","sourcesContent":["img.ng-lazyloaded {\n    animation: fadein 1.5s;\n  }\n  \n  \n  ion-button {\n    --box-shadow: transparent !important;\n  }\n  \n  button {\n    //background-color: transparent !important;\n    border: none;\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n  }\n\n  ion-select{\n    color: #fff;\n  }\n  \n  ion-searchbar {\n    --icon-color: #1ca3c9;\n    width: 95%;\n    margin-left: 10px;\n  }\n  \n  .search-container {\n    width: 90vw;\n    right: 5vw;\n    height: auto;\n    max-height: 50vh;\n    overflow-y: scroll;\n    position: absolute;\n  }\n  \n  .line-filter {\n    text-align: center;\n    line-height: 20px;\n    background: #70c2d1;\n    padding: 0;\n    margin: 0;\n  }\n  \n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .header-ios ion-toolbar:last-of-type {\n    --border-width: 0;\n  }\n  .header-translucent-ios ion-toolbar {\n    --opacity: 1;\n  }\n  \n  ion-img::part(image) {\n  width: 100px;\n  height: 30px;\n  }\n  \n  \n  .redes img{\n   height: 30px;\n   width: 30px;\n  }\n  \n  .redes{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    align-items: center;\n  }\n  \n  .marcas img{\n    height: 150px;\n    width: 150px;\n    text-align: center;\n    margin: 0px;\n    \n  }\n  \n  .marcas{\n    text-align: center;\n  }\n  \n  .bottomBanner img{\n    height: auto;\n    width: 100%;\n  }\n  \n  .imagensita{\n    height: auto!important;\n    width: auto!important;\n  }\n\n  .imageNumero{\n      height: 60px;\n      width: 100px; \n  }\n\n  .imageNumero2{\n    height: 50px;\n    width: 50px; \n}\n\n.noquiero{\n    text-align: start;\n}\n\n.imagencuatro{\n    height: 50px;\n    width: 50px; \n}\n\n.imagentres{\n    height: 60px;\n    width: 60px; \n\n\n}\n\n.form-control {\n  font-family: system-ui, sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  line-height: 1.1;\n  display: grid;\n  margin-right: 5px;\n  grid-template-columns: 1em auto;\n  gap: 0.5em;\n  width: .70em;\n  height: .70em;\n}\n\n\n// ion-content{\n//   --ion-background-color: url('../../../assets/img/tile_background2.png')!important; //rgb(189, 193, 194) !important\n\n// }\n\n.part5{\n\n  width: 100%;\n\n  height: auto;\n\n  display: flex;\n\n  flex-direction: row;\n\n  justify-content: center;\n\n  align-items: center;\n\n  padding: 1rem 0rem;\n\n  gap: 1em;\n\n\n\n\n  ion-checkbox{\n\n    width: 1.5em;\n\n    height: 1.5em;\n\n  }\n\n\n\n\n  p{\n\n    font-size: 1em;\n\n    max-width: 80%;\n\n  }\n\n}\n\n\nion-card{\n  \n  margin: auto;\n  width: 100%;\n  padding: 10px;\n  background: #fcfcfc;//     #fdfdfd            #14A8CD\n}\n\n.divis{\n  margin: auto;\n  width: 100%;\n  padding: 10px;\n  background: #fcfcfc;//     #fdfdfd            #14A8CD\n}\n\nion-item{\n  width: 100%;\n  --background: none!important; //     #fdfdfd            #14A8CD\n}\n\nion-radio-group{\n  --background: none!important;\n}\n\nion-list{\n  --background: none!important;\n}\n\n.list-ios{\n  background: none;\n}\n\n.list-md{\n  background: none;\n}\n\nion-list-header{\n  --background: none!important;\n}\n\n.labelT{\n  font-size: 6vw;\n  color: rgb(0, 0, 0);\n//   text-shadow: 0px 0px 8px rgba(0, 0, 0, 1),\n//                0px 0px 12px rgba(0, 0, 0, 1);\n}\n\n.labelC{\n  font-size: 4vw;\n  color: rgb(0, 0, 0);\n  // text-shadow: 0px 0px 8px rgba(0, 0, 0, 1);\n}\n\n.contR{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n}\n\n// .cont{\n//   --ion-background-color: url('../../../assets/img/tile_background2.png')!important; //rgb(189, 193, 194) !important\n// }\n\nion-content{\n  --background: rgb(255, 255, 255);\n  width: 100%;\n  height: auto;\n  --keyboard-offset:0px!important;\n}\n\n.personal {\n  max-width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.5em;\n  //background-image: black;\n\n  ion-card {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background: none;\n    border-radius: none;\n    background: #fff;\n\n    form{\n      width: 100%;\n      height: 100%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      flex-direction: column;\n      background: none;\n      border-radius: none;\n      background: #fff;\n    }\n\n    .part1{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n\n      ion-card-title{\n        font-size: .9rem;\n        color: #00a3c7;\n        padding: 1rem 0rem;\n        font-weight: 300;\n      }\n\n      .cont{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n\n        .nin{\n          width: 100%;\n          height: auto;\n          border: 1px solid rgb(84, 84, 84);\n\n          input{\n            background: none;\n            width: 100%;\n            height: 2.5rem;\n            text-indent: 1rem;\n            font-size: 1rem;\n            border: 0px;\n          }\n        }\n\n        input:focus{\n          outline: none;\n        }\n\n        p{\n          font-size: .75rem;\n        }\n      }\n    }\n\n    .part2{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      padding: 0rem .5rem;\n\n      .terms{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: flex-start;\n        margin: 1.5rem 0rem;\n\n        .inp{\n          width: 10%;\n          height: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n        }\n\n        .txt{\n          width: 90%;\n          height: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n\n          p{\n            margin-block-start: 0em;\n            margin-block-end: 0em;\n            font-style: italic;\n            font-size: 1rem;\n            text-align: justify;\n          }\n        }\n      }\n    }\n\n    .btn{\n      background: #1ca3c9;\n      color: #fff;\n      border-radius: 5rem;\n      width: 15rem;\n      height: 3rem;\n      font-size: 1.3rem;\n      font-weight: lighter;\n      margin-top: 2rem;\n      margin-bottom: 4rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    }\n  }\n\n}\n@media screen and ((max-width:992px)){\n  .item-title{\n    font-size: 1em !important;\n    font-weight: normal !important;\n    color: black !important;\n    \n  }\n  \n  .item-description{\n    font-size: 1em !important;\n    color: black !important;\n  }\n  \n  .item-price{\n    font-size: 1em !important;\n    font-weight: normal !important;\n    color: black !important;\n  }\n\n  .paq:hover{\n    box-shadow: none !important;\n  }\n  #compraEscritorio{\n    display: none;\n  }\n\n  .subtitulosSecciones{\n    font-size: 1em;\n  }\n\n  #itemsDirecciones{\n    box-shadow: none !important;\n  }\n\n  .nombreClienteDirecciones{\n    margin-bottom: .3em;\n  }\n\n  #resumenEscritorio{\n    display: none !important;\n  }\n  .direccion .part2{\n    width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      // border-top: 1px solid rgb(84, 84, 84);\n      // border-bottom: 1px solid rgb(84, 84, 84);\n     // padding: 1rem 0rem;\n      padding-left: 4rem;\n      border-bottom: 1px solid black;\n      border-top: 1px solid black;     \n  \n      font-family: 'RobotoCondensed-Light';\n      font-size: 1.5em;\n  }\n  .inps{\n    width: 100%;\n    height: 2.5rem;\n    background: none;\n    text-indent: 1rem;\n    border-radius: 5rem;\n    border: 1px solid #33a1c3;\n    margin-bottom: .5rem;\n  }\n  \n  .inps:focus{\n    outline: none;\n  }\n  .selict{\n    width: 100%;\n    height: 2.5rem;\n    background: none;\n    padding: 0rem 1rem;\n    border-radius: .5rem;\n    border: 1px solid #33a1c3;\n    margin-bottom: .5rem;\n  }\n  \n  .selict:focus{\n    outline: none;\n  }\n}\n\n.direccion{\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  //background-image: black;\n\n  ion-card{\n    width: 100%;\n    height: auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background: none;\n    border-radius: none;\n    background: #fff;\n\n    .part1{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;     \n      justify-content: flex-start;\n      align-items: center;\n      text-align: center;\n    \n\n      .titulosSecciones{\n        font-size: .9rem;\n        color: rgb(84, 84, 84);\n        padding: 1rem 0rem;\n        font-weight: 300;\n      }\n\n      p{\n        font-size: .9rem;\n      }\n    }\n\n    .part2{\n      // width: 100%;\n      // height: auto;\n      // display: flex;\n      // flex-direction: column;\n      // justify-content: flex-start;\n      // align-items: flex-start;\n      // border-top: 1px solid rgb(223, 223, 223);\n      // border-bottom: 1px solid rgb(223, 223, 223);\n      // padding: 1rem 0rem;\n      // padding-left: 4rem;\n\n      .pas{\n        margin-bottom: 2em;\n      }\n\n      .pas:last-child{\n        margin-bottom: 0em;\n      }\n\n      p{\n        margin-block-start: 0em;\n        margin-block-end: 0em;\n        font-size: .9rem;\n      }\n    }\n\n    .part3{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-start;\n      padding: 1rem 0rem;\n\n      .sub{\n        width: 50%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n\n        ion-icon{\n          font-size: 1.2rem;\n        }\n\n        a{\n          font-size: 1rem;\n          text-decoration: none;\n        }\n      }\n\n      .sub2{\n        width: 50%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n\n        ion-icon{\n          font-size: 1.2rem;\n        }\n\n        a{\n          font-size: 1rem;\n          text-decoration: none;\n        }\n      }\n    }\n\n    .part4{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding: 1rem 0rem;\n      gap: 1em;\n\n      .btn{\n        background: #1ca3c9!important;\n        color: #fff!important;\n        border-radius: 5rem;\n        width: 12rem;\n        height: 3rem;\n        font-size: 1rem;\n        font-weight: lighter;\n        margin-top: 2rem;\n        margin-bottom: 4rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      }\n\n      .b1{\n        margin-right: .5rem;\n      }\n\n      .b2{\n        margin-left: .5rem;\n      }\n    }\n  }\n}\n\n.envio{\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  //background-image: black;\n\n  ion-card{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background: none;\n    border-radius: none;\n    background: #fff;\n\n    .part1{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      text-align: center;\n\n      ion-card-title{\n        font-size: .9rem;\n        color: rgb(84, 84, 84);\n        padding: 1rem 0rem;\n        font-weight: 300;\n      }\n    }\n\n    .paq{\n      width: 80%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      //margin: 1.5rem 0rem;\n\n      //box-shadow: 0 0 10px rgba(50, 50, 93, 0.25);\n      transition: box-shadow 0.3s;\n      padding: 10px;\n      //margin-bottom: 20px;\n\n      .inp{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n\n      .txt{\n        width: 90%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: left;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: .9rem;\n          text-align: justify;\n        }\n      }\n    }\n\n    .part4{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding: 1rem 0rem;\n      gap: 1em;\n\n      .btn{\n        background: #1ca3c9!important;\n        color: #fff!important;\n        border-radius: 5rem;\n        width: 8rem;\n        height: 3rem;\n        font-size: 1rem;\n        font-weight: lighter;\n        margin-top: 2rem;\n        margin-bottom: 4rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      }\n\n      .b1{\n        margin-right: .5rem;\n      }\n\n      .b2{\n        margin-left: .5rem;\n      }\n    }\n  }\n}\n\n/*.paq:hover{\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n}*/\n\n.pago{\n  width: 100%;\n  height: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  //background-image: black;\n\n  ion-card{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n    background: none;\n    border-radius: none;\n    background: #fff;\n\n    .part1{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      text-align: center;\n\n      ion-card-title{\n        font-size: .9rem;\n        color: rgb(84, 84, 84);\n        padding: 1rem 0rem;\n        font-weight: 300;\n      }\n    }\n\n    .pago{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: flex-start;\n      margin: .3rem 0rem;\n\n      .rowin{\n        display: flex;\n        flex-direction: row;\n        justify-content: flex-start;\n        align-items: flex-start;\n        gap: 1em;\n      }\n\n      .inp{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n\n      }\n\n      .txt{\n        width: 90%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n\n        p{\n          margin-block-start: .2em;\n          margin-block-end: .2em;\n          font-size: .9rem;\n          text-align: justify;\n        }\n      }\n\n      .paypalcont{\n        width: 100%;\n        height: auto;\n        display: none;\n      }\n    }\n\n    .fixink{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      gap: 1em;\n    }\n\n    .terms{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding-left: 2rem;\n      margin-top: 2rem;\n\n      .titl{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n        background: rgb(140, 140, 140);\n        padding: 0rem .5rem;\n\n        p{\n          color: black;\n          font-size: .9rem;\n          font-weight: 400;\n        }\n\n        .icons{\n          width: 10%;\n          height: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          color: black;\n        }\n      }\n    }\n\n    .part4{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      padding: 1rem 0rem;\n      gap: 1em;\n\n      .btn{\n        background: #1ca3c9!important;\n        color: #fff!important;\n        border-radius: 5rem;\n        width: 8rem;\n        height: 3rem;\n        font-size: 1rem;\n        font-weight: lighter;\n        margin-top: 2rem;\n        margin-bottom: 4rem;\n        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      }\n\n      .b1{\n        margin-right: .5rem;\n      }\n\n      .b2{\n        margin-left: .5rem;\n      }\n    }\n\n\n  }\n}\n\n.item-title{\n  font-size: 2em;\n  font-weight: bold;\n  color: #333;\n  \n}\n\n.item-description{\n  font-size: 0.6em;\n  color: #666;\n}\n\n.item-price{\n  font-size: 0.75em;\n  font-weight: bold;\n  color: #0088a7;\n}\n\n\n\n.core {\n  background: #cedce0;\n  width: 100px;\n  height: 100px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  border: 10px rgba(2, 255, 255, 0.15) solid;\n  animation: flicker 0.2s infinite;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n}\n\n.core2 {\n  background: #cedce0;\n  width: 100px;\n  height: 100px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  border: 10px rgba(2, 255, 255, 0.15) solid;\n  animation: flicker2 0.2s infinite;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n}\n\n.big_core {\n  background: #cedce0;\n  width: 200px;\n  height: 200px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  border: 10px rgba(2, 255, 255, 0.15) solid;\n  animation: big_flicker 0.2s infinite;\n}\n\n.c_ease {\n  animation: colour_ease 3s infinite ease-in-out;\n}\n\n.counterspin5 {\n  animation: rotate_anti 5s linear infinite;\n}\n\n.counterspin4 {\n  animation: rotate_anti 4s linear infinite;\n}\n\n.semi_arc {\n  width: 100px;\n  height: 100px;\n  border: 6px solid #02feff;\n  background: rgba(2, 254, 255, 0.2);\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  transform: rotateZ(0deg);\n  transition: box-shadow 3s ease;\n  text-align: center;\n  line-height: 100px;\n}\n\n.semi_arc:hover {\n  box-shadow: 0px 0px 30px rgba(2, 254, 255, 0.8);\n  transition: 0.3s;\n}\n\n.semi_arc_2 {\n  content: \"\";\n  position: absolute;\n  width: 94%;\n  height: 94%;\n  left: 3%;\n  top: 3%;\n  border: 5px solid #02feff;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  animation: rotate 4s linear infinite;\n  text-align: center;\n  line-height: 129px;\n}\n\n.semi_arc_2:after {\n  content: \"\";\n  position: absolute;\n  width: 94%;\n  height: 94%;\n  left: 3%;\n  top: 3%;\n  border: 4px solid #02feff;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  animation: rotate_anti 2s linear infinite;\n}\n\n.semi_arc_3 {\n  content: \"\";\n  position: absolute;\n  width: 94%;\n  height: 94%;\n  left: 3%;\n  top: 3%;\n  border: 5px solid #02feff;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  animation: rotate 4s linear infinite;\n  text-align: center;\n  line-height: 129px;\n}\n\n.arc {\n  width: 100px;\n  height: 100px;\n  border: 6px solid #02feff;\n  background: rgba(2, 254, 255, 0.2);\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -moz-transform: rotateY(-30deg) translateZ(-200px);\n  -ms-transform: rotateY(-30deg) translateZ(-200px);\n  -webkit-transform: rotateY(-30deg) translateZ(-200px);\n  transform: rotateY(-30deg) translateZ(-200px);\n  transform: rotateZ(0deg);\n  transition: box-shadow 3s ease;\n  text-align: center;\n  line-height: 100px;\n}\n\n.arc:hover {\n  box-shadow: 0px 0px 30px rgba(2, 254, 255, 0.8);\n  transition: 0.3s;\n}\n\n.arc:after {\n  content: \"\";\n  position: absolute;\n  width: 94%;\n  height: 94%;\n  left: 3%;\n  top: 3%;\n  border: 4px solid #02feff;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  animation: rotate 4s linear infinite;\n}\n\n.e1:after {\n  border-color: rgba(2, 255, 255, 0.6);\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.e2:after {\n  border-color: rgba(2, 255, 255, 0.6);\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n.e3 {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  animation: rotate 5s linear infinite;\n}\n\n.e3:after {\n  border-color: rgba(2, 255, 255, 0.6);\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n\n.e4 {\n  width: 150px;\n  height: 150px;\n}\n\n.e4_1 {\n  border-color: rgba(2, 255, 255, 0.3);\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.e4_1:after {\n  border-color: rgba(2, 255, 255, 0.6);\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n}\n\n.e5 {\n  width: 200px;\n  height: 200px;\n}\n\n.e5_1 {\n  color: rgba(2, 255, 255, 0.15);\n  border: 2px solid;\n  border-left: 2px solid transparent;\n  animation: rotate 5s linear infinite;\n}\n\n.e5_2 {\n  color: rgba(2, 255, 255, 0.7);\n  border: 4px solid;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  animation: rotate_anti 4s linear infinite;\n}\n\n.e5_3 {\n  color: rgba(2, 255, 255, 0.5);\n  border: 2px solid;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n  animation: rotate 3s linear infinite;\n}\n\n.e5_4 {\n  color: rgba(2, 255, 255, 0.15);\n  border: 4px solid;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  animation: rotate_anti 2s linear infinite;\n}\n\n.e6 {\n  border-color: transparent;\n  background: rgba(255, 255, 255, 0);\n  width: 200px;\n  height: 200px;\n}\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  100% {\n    transform: rotateZ(360deg);\n  }\n}\n@keyframes rotate_anti {\n  0% {\n    transform: rotateZ(360deg);\n  }\n  100% {\n    transform: rotateZ(0deg);\n  }\n}\n@keyframes colour_ease {\n  0% {\n    border-color: #02feff;\n  }\n  50% {\n    border-color: rgba(2, 254, 255, 0.5);\n  }\n  100% {\n    border-color: #02feff;\n  }\n}\n@keyframes flicker {\n  0% {\n    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    box-shadow: 0px 0px 16px 6px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    box-shadow: 0px 0px 16px 8px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@keyframes flicker2 {\n  0% {\n    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    box-shadow: 0px 0px 50px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 100px 2px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    box-shadow: 0px 0px 60px 25px rgba(150, 255, 255, 0.5), inset 0px 1px 4px 2px rgba(21, 211, 233, 0.3);\n  }\n}\n@keyframes big_flicker {\n  0% {\n    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  40% {\n    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  50% {\n    box-shadow: 0px 0px 35px 17px rgba(150, 255, 255, 0.5), inset 0px 1px 50px 40px rgba(21, 211, 233, 0.3);\n  }\n  60% {\n    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n  100% {\n    box-shadow: 0px 0px 40px 20px rgba(150, 255, 255, 0.5), inset 0px 1px 30px 15px rgba(21, 211, 233, 0.3);\n  }\n}\nhtml,\nbody {\n  height: 100%;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.arc_reactor {\n  position: relative;\n  top: 50%;\n  margin-top: -125px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n  height: 250px;\n  border-radius: 50%;\n  box-shadow: 0px 0px 50px 15px rgba(2, 255, 255, 0.3), inset 0px 0px 50px 15px rgba(2, 255, 255, 0.3);\n}\n\n.core2 {\n  background: #cedce0;\n  width: 110px;\n  height: 110px;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  border: 5px solid rgba(2, 255, 255, 0.15);\n  animation: flicker2 0.2s infinite;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n}\n\n.e7 {\n  width: 95.25%;\n  height: 95.25%;\n  left: 2.5475%;\n  right: 2.5475%;\n  border: 6px solid transparent;\n  background: transparent;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  border-radius: 50%;\n  transform: rotateZ(0deg);\n  transition: box-shadow 3s ease;\n  text-align: center;\n  line-height: 100px;\n}\n\n.case_container {\n  width: 210px;\n  height: 210px;\n  border-radius: 50%;\n  position: absolute;\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.marks li {\n  display: block;\n  width: 3px;\n  height: 11px;\n  background: rgba(2, 254, 255, 0.8);\n  position: absolute;\n  margin-left: 105px;\n  margin-top: -110px;\n  animation: colour_ease2 3s infinite ease-in-out;\n}\n\n@keyframes colour_ease2 {\n  0% {\n    background: #02feff;\n  }\n  50% {\n    background: rgba(2, 254, 255, 0.3);\n  }\n  100% {\n    background: #02feff;\n  }\n}\n.marks li:first-child {\n  transform: rotate(6deg) translateY(125px);\n}\n\n.marks li:nth-child(2) {\n  transform: rotate(12deg) translateY(125px);\n}\n\n.marks li:nth-child(3) {\n  transform: rotate(18deg) translateY(125px);\n}\n\n.marks li:nth-child(4) {\n  transform: rotate(24deg) translateY(125px);\n}\n\n.marks li:nth-child(5) {\n  transform: rotate(30deg) translateY(125px);\n}\n\n.marks li:nth-child(6) {\n  transform: rotate(36deg) translateY(125px);\n}\n\n.marks li:nth-child(7) {\n  transform: rotate(42deg) translateY(125px);\n}\n\n.marks li:nth-child(8) {\n  transform: rotate(48deg) translateY(125px);\n}\n\n.marks li:nth-child(9) {\n  transform: rotate(54deg) translateY(125px);\n}\n\n.marks li:nth-child(10) {\n  transform: rotate(60deg) translateY(125px);\n}\n\n.marks li:nth-child(11) {\n  transform: rotate(66deg) translateY(125px);\n}\n\n.marks li:nth-child(12) {\n  transform: rotate(72deg) translateY(125px);\n}\n\n.marks li:nth-child(13) {\n  transform: rotate(78deg) translateY(125px);\n}\n\n.marks li:nth-child(14) {\n  transform: rotate(84deg) translateY(125px);\n}\n\n.marks li:nth-child(15) {\n  transform: rotate(90deg) translateY(125px);\n}\n\n.marks li:nth-child(16) {\n  transform: rotate(96deg) translateY(125px);\n}\n\n.marks li:nth-child(17) {\n  transform: rotate(102deg) translateY(125px);\n}\n\n.marks li:nth-child(18) {\n  transform: rotate(108deg) translateY(125px);\n}\n\n.marks li:nth-child(19) {\n  transform: rotate(114deg) translateY(125px);\n}\n\n.marks li:nth-child(20) {\n  transform: rotate(120deg) translateY(125px);\n}\n\n.marks li:nth-child(21) {\n  transform: rotate(126deg) translateY(125px);\n}\n\n.marks li:nth-child(22) {\n  transform: rotate(132deg) translateY(125px);\n}\n\n.marks li:nth-child(23) {\n  transform: rotate(138deg) translateY(125px);\n}\n\n.marks li:nth-child(24) {\n  transform: rotate(144deg) translateY(125px);\n}\n\n.marks li:nth-child(25) {\n  transform: rotate(150deg) translateY(125px);\n}\n\n.marks li:nth-child(26) {\n  transform: rotate(156deg) translateY(125px);\n}\n\n.marks li:nth-child(27) {\n  transform: rotate(162deg) translateY(125px);\n}\n\n.marks li:nth-child(28) {\n  transform: rotate(168deg) translateY(125px);\n}\n\n.marks li:nth-child(29) {\n  transform: rotate(174deg) translateY(125px);\n}\n\n.marks li:nth-child(30) {\n  transform: rotate(180deg) translateY(125px);\n}\n\n.marks li:nth-child(31) {\n  transform: rotate(186deg) translateY(125px);\n}\n\n.marks li:nth-child(32) {\n  transform: rotate(192deg) translateY(125px);\n}\n\n.marks li:nth-child(33) {\n  transform: rotate(198deg) translateY(125px);\n}\n\n.marks li:nth-child(34) {\n  transform: rotate(204deg) translateY(125px);\n}\n\n.marks li:nth-child(35) {\n  transform: rotate(210deg) translateY(125px);\n}\n\n.marks li:nth-child(36) {\n  transform: rotate(216deg) translateY(125px);\n}\n\n.marks li:nth-child(37) {\n  transform: rotate(222deg) translateY(125px);\n}\n\n.marks li:nth-child(38) {\n  transform: rotate(228deg) translateY(125px);\n}\n\n.marks li:nth-child(39) {\n  transform: rotate(234deg) translateY(125px);\n}\n\n.marks li:nth-child(40) {\n  transform: rotate(240deg) translateY(125px);\n}\n\n.marks li:nth-child(41) {\n  transform: rotate(246deg) translateY(125px);\n}\n\n.marks li:nth-child(42) {\n  transform: rotate(252deg) translateY(125px);\n}\n\n.marks li:nth-child(43) {\n  transform: rotate(258deg) translateY(125px);\n}\n\n.marks li:nth-child(44) {\n  transform: rotate(264deg) translateY(125px);\n}\n\n.marks li:nth-child(45) {\n  transform: rotate(270deg) translateY(125px);\n}\n\n.marks li:nth-child(46) {\n  transform: rotate(276deg) translateY(125px);\n}\n\n.marks li:nth-child(47) {\n  transform: rotate(282deg) translateY(125px);\n}\n\n.marks li:nth-child(48) {\n  transform: rotate(288deg) translateY(125px);\n}\n\n.marks li:nth-child(49) {\n  transform: rotate(294deg) translateY(125px);\n}\n\n.marks li:nth-child(50) {\n  transform: rotate(300deg) translateY(125px);\n}\n\n.marks li:nth-child(51) {\n  transform: rotate(306deg) translateY(125px);\n}\n\n.marks li:nth-child(52) {\n  transform: rotate(312deg) translateY(125px);\n}\n\n.marks li:nth-child(53) {\n  transform: rotate(318deg) translateY(125px);\n}\n\n.marks li:nth-child(54) {\n  transform: rotate(324deg) translateY(125px);\n}\n\n.marks li:nth-child(55) {\n  transform: rotate(330deg) translateY(125px);\n}\n\n.marks li:nth-child(56) {\n  transform: rotate(336deg) translateY(125px);\n}\n\n.marks li:nth-child(57) {\n  transform: rotate(342deg) translateY(125px);\n}\n\n.marks li:nth-child(58) {\n  transform: rotate(348deg) translateY(125px);\n}\n\n.marks li:nth-child(59) {\n  transform: rotate(354deg) translateY(125px);\n}\n\n.marks li:nth-child(60) {\n  transform: rotate(360deg) translateY(125px);\n\n}\n\n// .compra{\n//   width: 100%;\n//   height: auto;\n//   background: #fff;\n//   box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n//   display: flex;\n//   flex-direction: column;\n//   justify-content: center;\n//   align-items: center;\n//   padding: 1.5rem 1rem;\n//   margin-bottom: .5rem;\n\n//   .info{\n//     width: 100%;\n//     height: auto;\n//     display: flex;\n//     flex-direction: row;\n//     justify-content: center;\n//     align-items: flex-end;\n//     position: relative;\n\n//     .text{\n//       width: 100%;\n//       height: auto;\n//       display: flex;\n//       flex-direction: column;\n//       justify-content: center;\n//       align-items: center;\n\n//       p{\n//         margin-block-start: 0em;\n//         margin-block-end: 0em;\n//         font-size: 1rem;\n//         color: rgb(107, 107, 107);\n//       }\n//     }\n\n//     .icons{\n//       width: 10%;\n//       height: auto;\n//       display: flex;\n//       flex-direction: column;\n//       justify-content: center;\n//       align-items: center;\n//       position: absolute;\n//       right: 0;\n\n//       ion-icon{\n//         font-size: 2.2rem;\n//       }\n//     }\n//   }\n\n//   .ent{\n//     background: #1ed5cc;\n//     width: 12rem;\n//     height: 2.5rem;\n//     border-radius: 5rem;\n//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n//     color: #fff;\n//     display: flex;\n//     justify-content: center;\n//     align-items: center;\n//     margin-top: 1.5rem;\n//   }\n// }\n\n// .inps{\n//   width: 100%;\n//   height: 2.5rem;\n//   background: none;\n//   text-indent: 1rem;\n//   border-radius: 5rem;\n//   border: 1px solid #33a1c3;\n//   margin-bottom: .5rem;\n// }\n\n// .inps:focus{\n//   outline: none;\n// }\n\n\n\n\n\n\n\n.loader {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  position: fixed;\n  top: calc(0%);\n  left: calc(0%);\n  background-color: white;\n  z-index: 9999999;\n\n \n\n  img{\n    width: 200px;\n    height: auto;\n\n  }\n\n}\n\n.comprassss{\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  position: fixed;\n  transition: .75s all ease-in-out;\n  top: 0;\n  opacity: 1;\n  left: 0%;\n\n  img{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    background: #1ca3c9!important;\n    color: #fff!important;\n    border-radius: 5rem;\n    width: 12rem;\n    height: 3rem;\n    font-size: 1rem;\n    font-weight: lighter;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    position: absolute;\n    left: calc(50% - 6rem);\n    top: calc(60% + 5rem);\n  }\n}\n\n.custom-col{\n  padding: 0em;\n  border: 1px solid transparent;\n  //transition: border-color 0.3s;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n\n\n@media screen and (min-width:993px){\n  .tituloItemCompra{\n    width: fit-content; \n    font-size: 1.5em;\n    text-overflow: unset;\n  }\n\n  .titulosSecciones{\n    font-size: 1.5em;\n  }\n\n  .custom-col{\n  padding: 20px;\n  border: 1px solid transparent;\n  transition: border-color 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  }\n\n  /*.custom-col:hover{\n    border-color:#3dc2ff ;\n  }*/\n  .nombreClienteDirecciones{\n    margin-bottom: .3em; font-size: 1.8em;width:fit-content;\n  }\n\n  .subtitulosSecciones{\n    font-size: 2.8em;\n  }\n\n\n  #resumenEscritorio{\n    display: flex;\n    box-shadow: rgba(65, 212, 238, 0.2) 0px 7px 29px 0px;\n    padding: 0.82em; \n    //width: 18em;\n    left: 0;\n  }\n\n  #resumen{\n    display: none !important;\n    //visibility: hidden;\n  }\n\n  .etiquetasResumen{\n    color: #00a3c7;\n  }\n\n  .cantidadesResumen{\n    font-weight: bold;\n  }\n\n  .rowResumen{\n    font-size: 1.2em;\n    font-weight:100;\n  }\n\n  .paq{\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    padding: 5px !important;\n  }\n\n  .inp ion-radio{\n    margin-right: 20px;\n  }\n  .txt{\n    flex: 1;\n    align-items: center;\n  }\n  \n  .direccion .part2{\n    border-bottom: 2px solid rgb(137, 212, 247);\n    border-top: 2px solid rgb(137, 212, 247);\n    \n\n    font-family: 'RobotoCondensed-Light';\n    font-size: 2.3em;\n  }\n\n  .direccion .part1{\n    color:#00a3c7;\n    \n  }\n  \n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: green;\n    //box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n  \n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n  \n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n  \n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n  \n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n  \n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n  \n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n  .inps{\n    width: 100%;\n    height: 2.5rem;\n    background:   rgb(235, 244, 247);\n    text-indent: 1rem;\n    border-radius: 5rem;\n    border: 1px solid rgb(0 163 197);\n    margin-bottom: .5rem;\n  }\n  \n  .inps:focus{\n    outline: none;\n  }\n\n  .selict{\n    width: 100%;\n    height: 2.5rem;\n    background: rgb(235, 244, 247);\n    padding: 0rem 1rem;\n    border-radius: .5rem;\n    border: 1px solid rgb(0 163 197);\n    margin-bottom: .5rem;\n  }\n  \n  .selict:focus{\n    outline: none;\n  }\n}\n\n.custom-card{\n  //box-shadow: 0 0 10px rgba(0,0,0,0.2);\n  //transition: box-shadow 0.3s;\n  padding: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.custom-card:hover{\n  //box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n}\n\n.custom-card-title{\n  color:#0088a7;\n  font-size: 1.8em;\n}\n\n.custom-hr{\n  width: 100%;\n  height: 1px;\n  background: rgb(128,128,128);\n  border: none;\n  margin: 1em 0;\n}\n\n// .custom-col{\n//   padding: 20px;\n//   border: 1px solid transparent;\n//   transition: border-color 0.3s;\n//   display: flex;\n//   justify-content: center;\n//   align-items: center;\n// }\n\n// .custom-col:hover{\n//   border-color:#3dc2ff ;\n// }\n\n.inp ion-radio{\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 50%;\n  border: 1px solid #3880ff;\n}\n\n.direc-list-cont{\n  width: 40em;\n  height: auto;\n  //border: 1px solid red;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 1em;\n\n  .direct-cont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: .3em;\n    padding: 1em;\n    padding-left: 4em;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    transition: .4s all ease-in-out;\n    position: relative;\n    border-radius: 1em;\n\n    .direc{\n      color: #000;\n      font-size: .96em;\n      font-weight: 100;\n      transition: .4s all ease-in-out;\n    }\n  }\n\n  .direct-cont:hover{\n    box-shadow: rgba(0, 163, 199, 0.66) 0px 2px 8px 0px;\n\n    .direc{\n      color: #0196b7;\n    }\n  }\n}\n\n.deskheader{\n  display: none;\n}\n\n.deskfooter{\n  display: none;\n}\n\n.deskbtn{\n  display: none;\n}\n\n.modal-nd{\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  display: none;\n  justify-content: center;\n  align-items: center;\n  background-color: #0000004f;\n\n  .form-conten{\n    width: 30em;\n    height: auto;\n    padding: 1em;\n    background-color: #fff;\n    border-radius: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    position: relative;\n\n    .inps{\n      width: 100%;\n      height: 2.5em;\n      background: rgb(255, 255, 255);\n      text-indent: 0em;\n      border-radius: 0em;\n      border: none;\n      border-bottom: 1px solid rgb(0, 163, 197);\n      margin-bottom: 0em;\n      padding: 0em 1em;\n      color: #00a3c7;\n    }\n\n    .inps::placeholder{\n      color: #000;\n      font-size: .9em;\n    }\n\n    .selict{\n      width: 100%;\n      height: 2.5rem;\n      background: rgb(255, 255, 255);\n      padding: 0rem 1rem;\n      border-radius: 0em;\n      border: none;\n      border-bottom: 1px solid rgb(0, 163, 197);\n      margin-bottom: 0em;\n      color: #00a3c7;\n    }\n\n    button{\n      padding: 0.5em 3em;\n      font-size: 1.1em;\n      font-weight: 100;\n      background-color: #ffffff;\n      color: #00a3d0;\n      border: 1px solid #00a3d0;\n      transition: .5s all ease-in-out;\n      border-radius: 2em;\n    }\n\n    button:hover{\n      background-color: #00a3d0;\n      color: #fff;\n    }\n\n    .cancel{\n      color: #f00;\n      position: absolute;\n      right: 1.5em;\n      bottom: 1.5em;\n      cursor: pointer;\n      transition: .5s all ease-in-out;\n    }\n\n    .cancel:hover{\n      color: rgba(255, 0, 0, 0.568);\n    }\n  }\n}\n\n.super-cont-envio{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  .envio-cont{\n    width: 40em;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n\n    .opt-cont{\n      width: 100%;\n      height: auto;\n      padding: 1em;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      gap: .5em;\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n      transition: .4s all ease-in-out;\n      padding-left: 4em;\n      position: relative;\n      border-radius: 1em;\n    }\n\n    .opt-cont:hover{\n      box-shadow: rgba(0, 163, 199, 0.66) 0px 2px 8px 0px;\n    }\n  }\n\n  .part4{\n    padding: 2em 0em;\n    display: flex;\n    gap: 1em;\n\n    .btn{\n      background: #fff !important;\n      color: #00a3c7 !important;\n      border-radius: 5rem;\n      width: 12rem;\n      height: 3rem;\n      font-size: 1rem;\n      font-weight: lighter;\n      margin-top: 0em;\n      margin-bottom: 0em;\n      box-shadow: none;\n      border: 1px solid #00a3c7;\n      transition: .5s all ease-in-out;\n    }\n\n    .btn:hover{\n      background: #00a3c7 !important;\n      color: #fff !important;\n    }\n  }\n}\n\n@media(min-width: 992px){\n  .pagoContDesk{\n    width: 40em!important;\n    box-shadow: none!important;\n  }\n\n  .super-cont-envio{\n    display: flex;\n  }\n\n  ion-header{\n    display: none;\n  }\n\n  .deactbtn{\n    display: none;\n  }\n\n  .deskbtn{\n    display: block;\n  }\n\n  .pago{\n    ion-card{\n      .part4{\n        padding: 2em 0em;\n    \n        .b1{\n          background: #fff !important;\n          color: #00a3c7 !important;\n          border-radius: 5rem;\n          width: 12rem;\n          height: 3rem;\n          font-size: 1rem;\n          font-weight: lighter;\n          margin-top: 0em;\n          margin-bottom: 0em;\n          box-shadow: none;\n          border: 1px solid #00a3c7;\n          transition: .5s all ease-in-out;\n          margin-right: 0em;\n        }\n    \n        .b1:hover{\n          background: #00a3c7 !important;\n          color: #fff !important;\n        }\n      }\n    }\n  }\n\n  .direccion{\n    ion-card{\n      .part4{\n        padding: 2em 0em;\n\n        .btn{\n          background: #fff !important;\n          color: #00a3c7 !important;\n          border-radius: 5rem;\n          width: 12rem;\n          height: 3rem;\n          font-size: 1rem;\n          font-weight: lighter;\n          margin-top: 0em;\n          margin-bottom: 0em;\n          box-shadow: none;\n          border: 1px solid #00a3c7;\n          transition: .5s all ease-in-out;\n        }\n\n        .btn:hover{\n          background: #00a3c7 !important;\n          color: #fff !important;\n        }\n      }\n    }\n  }\n\n  .form-control{\n    width: .5em;\n    height: .5em;\n    cursor: pointer;\n  }\n\n  .deskheader{\n    display: block;\n  }\n\n  .deskfooter{\n    display: block;\n  }\n\n  .part2{\n    display: none;\n  }\n\n  .titulosSecciones{\n    font-size: 1.8em!important;\n    color: #00a3c7!important;\n  }\n\n  .subtitulosSecciones{\n    font-size: 1.2em!important;\n  }\n\n  .direc-list-cont{\n    display: flex;\n  }\n\n  .custom-card{\n    box-shadow: none;\n    padding: 10px;\n    margin-bottom: 20px;\n    width: 50% !important;\n  }\n\n  .env-cont{\n    display: none!important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 93201:
/*!**************************************************************!*\
  !*** ./src/app/pages/checkout/checkout.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"secondary\" mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title color=\"light\" slot=\"start\">Caja\n    </ion-title>\n    <ion-title class=\"ion-text-center\">\n    </ion-title>\n  \n\n\n \n  \n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <app-desk-header class=\"deskheader\" style=\"width: 100%;\"></app-desk-header>\n  <!-- <div class=\"personal\" id=\"personal\" >\n    <ion-card >\n\n      <form>\n\n        <div class=\"part1\">\n          <ion-card-title>1.- INFORMACIÓN PERSONAL</ion-card-title>\n          <div class=\"cont\">\n            <div class=\"nin\">\n              <input type=\"text\">\n            </div>\n            <p>*NOMBRE</p>\n          </div>\n          <div class=\"cont\">\n            <div class=\"nin\">\n              <input type=\"text\">\n            </div>\n            <p>*APELLIDOS</p>\n          </div>\n          <div class=\"cont\">\n            <div class=\"nin\">\n              <input type=\"text\">\n            </div>\n            <p>*RFC OPCIONAL</p>\n          </div>\n          <div class=\"cont\">\n            <div class=\"nin\">\n              <input type=\"text\">\n            </div>\n            <p>*CORREO ELECTRÓNICO</p>\n          </div>\n          <div class=\"cont\">\n            <div class=\"nin\">\n              <input type=\"text\">\n            </div>\n            <p>*CONTRASEÑA</p>\n          </div>\n        </div>\n\n        <div class=\"part2\" >\n          <div class=\"terms\">\n            <div class=\"inp\">\n              <ion-checkbox color=\"dark\"></ion-checkbox>\n            </div>\n            <div class=\"txt\">\n              <p>Suscribirse a nuestro boletín de noticias</p>\n              <p>Puede darse de baja en cualquier momento. Por ello, lo invitamos a ver nuestro aviso de provacidad e información de contacto.</p>\n            </div>\n          </div>\n          <div class=\"terms\">\n            <div class=\"inp\">\n              <ion-checkbox color=\"dark\"></ion-checkbox>\n            </div>\n            <div class=\"txt\">\n              <p>Privacidad de los datos del cliente</p>\n              <p>Los datos personales que proporciona son utilizados para satisfacer sus necesidades, procesar pedidos o permitirle el acceso a una información específica. Usted tiene el derecho de modificar y eliminar toda la información personal que se encuentra en la página \"Mi Cuenta\".</p>\n            </div>\n          </div>\n          <div class=\"terms\">\n            <div class=\"inp\">\n              <ion-checkbox color=\"dark\"></ion-checkbox>\n            </div>\n            <div class=\"txt\">\n              <p>Acepto las condiciones generales y la política de confidencialidad</p>\n            </div>\n          </div>\n        </div>\n\n        <button class=\"btn\" (click)=\"continuarPersonal()\">Continuar</button>\n\n      </form>\n\n    </ion-card>\n  </div> -->\n\n  <div id=\"direccion\" class=\"direccion\" >\n    <ion-card>\n      \n      <div class=\"part1\">\n        <ion-card-title class=\"titulosSecciones\" style=\"color: #00a3c7;\">1.- DIRECCIONES</ion-card-title>\n        <p class=\"subtitulosSecciones\">La dirección seleccionada se utilizará como su dirección de entrega</p>\n      </div>\n\n      <div class=\"part2\" *ngFor=\"let direcciones of direccion; let i = index;\">\n        <div class=\"row pas\">\n          <div class=\"col-4\" style=\"position: relative;\">\n            <input class=\"form-control\" style=\"position: absolute; left: -10% ;\" type=\"radio\" id=\"radio{{+i}}\"  name=\"radioDireccion\" (change)=\"direccionIsChecked()\" value=\"{{i}}\" [(ngModel)]=\"radioDireccion\">\n\n          </div>\n          <div  class=\"col-4\" id=\"itemsDirecciones\" style=\"box-shadow: rgba(65, 212, 238, 0.2) 0px 7px 29px 0px;padding: 0.82em; width: 18em;left: 0;\">\n            <p class=\"nombreClienteDirecciones\" style=\"font-size: 0.8em;\">{{direcciones.firstname}} {{direcciones.lastname}}</p>\n            <p style=\"margin-bottom: .3em; font-size: 0.7em;\">{{direcciones.phone}}</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">{{direcciones.zipcode}}</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">{{direcciones.address1}}</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">México</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">{{nombreEstado}}</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">{{direcciones.city}}</p>\n            <p style=\"margin-bottom: .3em;font-size: 0.7em;\">{{direcciones.colony}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"direc-list-cont\">\n        <div class=\"direct-cont\" *ngFor=\"let direcciones of direccion; let i = index;\">\n          <input class=\"form-control\" style=\"position: absolute; left: .5em;\" type=\"radio\" id=\"radio{{+i}}\"  name=\"radioDireccion2\" (change)=\"direccionIsChecked()\" value=\"{{i}}\" [(ngModel)]=\"radioDireccion\">\n          <span class=\"direc\">{{direcciones.firstname}} {{direcciones.lastname}}</span>\n          <span class=\"direc\">{{direcciones.phone}}</span>\n          <span class=\"direc\">{{direcciones.zipcode}}</span>\n          <span class=\"direc\">{{direcciones.address1}}</span>\n          <span class=\"direc\">México</span>\n          <span class=\"direc\">{{nombreEstado}}</span>\n          <span class=\"direc\">{{direcciones.city}}</span>\n          <span class=\"direc\">{{direcciones.colony}}</span>\n        </div>\n      </div>\n\n      <!-- <div class=\"part3\">\n        <div class=\"sub\">\n          <ion-icon name=\"cut-outline\"></ion-icon>\n          <a href=\"\">Editar</a>\n        </div>\n        <div class=\"sub2\">\n          <ion-icon name=\"trash-outline\"></ion-icon>\n          <a href=\"\">Eliminar</a>\n        </div>\n      </div> -->\n\n      <div class=\"part4\">\n        <!-- <button class=\"btn b1\" (click)=\"regresarDireccion()\">Regresar</button> -->\n       <!-- <button class=\"btn b2\" (click)=\"animacion()\">animacion</button> -->\n        <button class=\"btn deactbtn\" id=\"open-modal2\" expand=\"block\">Nueva Dirección</button>\n        <button class=\"btn deskbtn\" (click)=\"openModalNd()\" id=\"open-modal2\" expand=\"block\">Nueva Dirección</button>\n        <button class=\"btn\" (click)=\"continuarDireccion()\">Continuar</button>\n        <!-- <ion-button id=\"open-modal2\"  expand=\"block\">Nueva Dirección</ion-button> -->\n        \n        <ion-modal  trigger=\"open-modal2\" style=\"height: auto; width: 100%;\">\n          <ng-template>\n          \n            <div class=\"compra\" id=\"compraMovil\" >\n              \n              <input class=\"inps\" type=\"text\" [(ngModel)]=\"alias\" name=\"alias\" placeholder=\"Alias Dirección\" >\n              <input class=\"inps\" type=\"text\" name=\"telefono\" [(ngModel)]=\"telefono\"   placeholder=\"Telefono\">\n              <input class=\"inps\" type=\"text\" name=\"zipcode\"  [(ngModel)]=\"zipcode\"  (change)=\"accionesDireccion(zipcode, 'zipcode')\" placeholder=\"Código Postal\">\n              <input class=\"inps\" type=\"text\" name=\"address1\" [(ngModel)]=\"address1Form\"  placeholder=\"Dirección\">\n              <input class=\"inps\" type=\"text\" name=\"address2\" [(ngModel)]=\"address2\" placeholder=\"Dirección Complementaria\">\n              <select class=\"selict\" name=\"id_country\" >\n                <option value=\"1\" >Selecciona tu País</option>\n               \n                <option value=\"145\" selected>México</option>\n              </select>\n              <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estado\"   (change)=\"accionesDireccion(estado, 'state')\" >\n                <option value=\"\" selected>Provincia o Estado</option>\n                <option value=\"57\">Aguascalientes</option>\n                <option value=\"58\">Baja California</option>\n                <option value=\"59\">Baja California Sur</option>\n                <option value=\"60\">Campeche</option>\n                <option value=\"61\">Chiapas</option>\n                <option value=\"62\">Chihuahua</option>\n                <option value=\"63\">Coahuila</option>\n                <option value=\"64\">Colima</option>\n                <option value=\"65\">Distrito Federal</option>\n                <option value=\"66\">Durango</option>\n                <option value=\"67\">Guanajuato</option>\n                <option value=\"68\">Guerrero</option>\n                <option value=\"69\">Hidalgo</option>\n                <option value=\"70\">Jalisco</option>\n                <option value=\"71\">Estado de México</option>\n                <option value=\"72\">Michoacán</option>\n                <option value=\"73\">Morelos</option>\n                <option value=\"74\">Nayarit</option>\n                <option value=\"75\">Nuevo León</option>\n                <option value=\"76\">Oaxaca</option>\n                <option value=\"77\">Puebla</option>\n                <option value=\"78\">Querétaro</option>\n                <option value=\"79\">Quintana Roo</option>\n                <option value=\"80\">San Luis Potosí</option>\n                <option value=\"81\">Sinaloa</option>\n                <option value=\"82\">Sonora</option>\n                <option value=\"83\">Tabasco</option>\n                <option value=\"84\">Tamaulipas</option>\n                <option value=\"85\">Tlaxcala</option>\n                <option value=\"86\">Veracruz</option>\n                <option value=\"87\">Yucatán</option>\n                <option value=\"88\">Zacatecas</option>\n               \n              </select>\n        \n              <select class=\"selict\" id=\"ciudadR\" name=\"city\" [(ngModel)]=\"cityForm\"    (change)=\"accionesDireccion(cityForm, 'city')\" >\n                <option value=\"\" selected>Ciudad</option>\n                \n              </select>\n        \n              <select class=\"selict\" name=\"colony\" [(ngModel)]=\"colonyForm\"   (change)=\"accionesDireccion(colonyForm,'colony')\" >\n                <option value=\"\" selected>Colonia</option>\n              </select>\n            \n        \n              <ion-button style=\"margin-top:15px ;\" (click)=\"agregarDir()\">Agregar</ion-button>\n              \n            </div>\n          </ng-template>\n        </ion-modal>\n      \n\n      </div>\n\n    </ion-card>\n  </div>\n\n  <div class=\"envio\" id=\"envio\" style=\"display: none;\">\n    <ion-card class=\"custom-card\">\n      <div class=\"part1\" >\n        <ion-card-title class=\"titulosSecciones\">2.-METODO DE ENVÍO</ion-card-title>\n      </div>\n    </ion-card>\n    \n    <div class=\"super-cont-envio\">\n      <div class=\"envio-cont\">\n        <ion-radio-group style=\"width: 100%; height: auto; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1em;\">\n          <div class=\"opt-cont\">\n            <ion-radio value=\"1\" (click)=\"envioPaqueteExpress()\" style=\"width: 1.2em; height: 1.2em; border-radius: 50%; border: 1px solid #3880ff; position: absolute; left: 1em;\"></ion-radio>\n            <span class=\"titl1\">Paquete Express</span>\n            <span class=\"titl2\">de 4 a 5 días hábiles</span>\n            <span class=\"titl3\">{{paqueteExpress | currency: 'MX $'}}</span>\n          </div>\n          <div class=\"opt-cont\">\n            <ion-radio value=\"2\" (click)=\"envioEstafeta()\" style=\"width: 1.2em; height: 1.2em; border-radius: 50%; border: 1px solid #3880ff; position: absolute; left: 1em;\"></ion-radio>\n            <span class=\"titl1\">Estafeta</span>\n            <span class=\"titl2\">de 3 a 5 días hábiles</span>\n            <span class=\"titl3\">{{estafeta | currency: 'MX $'}}</span>\n          </div>\n          <div class=\"opt-cont\">\n            <ion-radio value=\"3\" (click)=\"envioRecoge()\" style=\"position: absolute; left: 1em;\"></ion-radio>\n            <span class=\"titl1\">Paso por él, ÚNICAMENTE RECOGIENDO PAQUETE EN SUCURSAL Chihuahua</span>\n            <span class=\"titl2\">C. Washington No. 3701. Int.</span>\n            <span class=\"titl2\">Edificio 48</span>\n            <span class=\"titl2\">Parque Ind. Las Américas</span>\n            <span class=\"titl2\">México, Chihuahua Chih.</span>\n            <span class=\"titl2\">31114</span>\n            <span class=\"titl3\">Se puede recoger apartir de 2 horas después de realizada la compra.</span>\n            <span class=\"titl3\">De NO ir por el producto se tendrá que cobrar el envío.</span>\n          </div>\n        </ion-radio-group>\n      </div>\n      <div class=\"part4\">\n        <button class=\"btn b1\" (click)=\"regresarEnvio()\">Regresar</button>\n        <button class=\"btn b2\" (click)=\"continuarEnvio()\">Continuar</button>\n      </div>\n    </div>\n\n    <ion-card class=\"custom-card env-cont\">\n      <ion-grid>\n        <ion-radio-group>\n          <ion-row>\n            <ion-col class=\"custom-col\">\n              <div class=\"paq\" >\n                <div class=\"inp\">\n                  <ion-radio value=\"1\" (click)=\"envioPaqueteExpress()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n                </div>\n                <div class=\"txt\" >\n                  <p class=\"item-title\" style=\"font-size: 1.5em;\">Paquete Express</p>\n                  <p class=\"item-description\" style=\"font-size: 14.4px;\">de 4 a 5 días hábiles</p>\n                  <p class=\"item-price\" style=\"font-size: 14.4px;\">{{paqueteExpress | currency: 'MX $'}}</p>\n                </div>\n              </div>\n            </ion-col>\n\n            <hr class=\"custom-hr\">\n\n            <ion-col class=\"custom-col\">\n              <div class=\"paq\">\n                <div class=\"inp\">\n                  <ion-radio value=\"2\" (click)=\"envioEstafeta()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n                </div>\n                <div class=\"txt\">\n                  <p class=\"item-title\" style=\"font-size: 1.5em;\">Estafeta</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">de 3 a 5 días hábiles</p>\n                  <p class=\"item-price\" style=\"font-size: 1.3em;\">{{estafeta | currency: 'MX $'}}</p>\n                </div>\n              </div>\n            </ion-col>\n\n            <hr class=\"custom-hr\">\n\n            <ion-col class=\"custom-col\">\n              <div class=\"paq\">\n                <div class=\"inp\">\n                  <ion-radio value=\"3\" (click)=\"envioRecoge()\"></ion-radio>\n                </div>\n                <div class=\"txt\">\n                  <p  class=\"item-title\" style=\"font-size: 1.5em; align-content: center;\">Paso por él, ÚNICAMENTE RECOGIENDO PAQUETE EN SUCURSAL Chihuahua</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">C. Washington No. 3701. Int.</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">Edificio 48</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">Parque Ind. Las Américas</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">México, Chihuahua Chih.</p>\n                  <p class=\"item-description\" style=\"font-size: 1.2em;\">31114</p>\n                  <p class=\"item-price\"> Se puede recoger apartir de 2 horas después de realizada la compra.</p>\n                  <p class=\"item-price\">De NO ir por el producto se tendrá que cobrar el envío.</p>\n                </div>\n              </div>\n            </ion-col>\n            <hr class=\"custom-hr\">\n          </ion-row>\n          <div class=\"part4\">\n            <button class=\"btn b1\" (click)=\"regresarEnvio()\">Regresar</button>\n            <button class=\"btn b2\" (click)=\"continuarEnvio()\">Continuar</button>\n          </div>\n        </ion-radio-group>\n      </ion-grid>\n    </ion-card>\n    \n    \n  </div>\n\n\n\n\n\n  <div id=\"envio\" class=\"envio\" style=\"display: none;\" >\n    <ion-card>\n\n      <div class=\"part1\">\n        <ion-card-title style=\"color: #0088a7;font-size: 1.8em;\">2.- METODO DE ENVÍO</ion-card-title>\n      </div>\n\n      <hr style=\"width: 100%; height: 1px; background: rgb(128, 128, 128);\">\n      <ion-radio-group >\n      <div class=\"paq\" >\n        <div class=\"inp\">\n          <ion-radio value=\"1\" (click)=\"envioPaqueteExpress()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n        </div>\n        <div class=\"txt\">\n          <p >Paquete Express</p>\n          <p>de 4 a 5 días hábiles</p>\n          <p>{{paqueteExpress | currency: 'MX $'}}</p>\n        </div>\n      </div>\n\n      <hr style=\"width: 100%; height: 1px; background: rgb(128, 128, 128);\">\n\n      <div class=\"paq\">\n        <div class=\"inp\">\n          <ion-radio value=\"2\" (click)=\"envioEstafeta()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n        </div>\n        <div class=\"txt\">\n          <p>Estafeta</p>\n          <p>de 3 a 5 días hábiles</p>\n          <p>{{estafeta | currency: 'MX $'}}</p>\n        </div>\n      </div>\n\n      <hr style=\"width: 100%; height: 1px; background: rgb(128, 128, 128);\">\n\n      <div class=\"paq\">\n        <div class=\"inp\">\n          <ion-radio value=\"3\" (click)=\"envioRecoge()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n        </div>\n        <div class=\"txt\">\n          <p style=\"margin-bottom: 1rem;\">Paso por él, ÚNICAMENTE RECOGIENDO PAQUETE EN SUCURSAL Chihuahua</p>\n          <p>C. Washington No. 3701. Int.</p>\n          <p>Edificio 48</p>\n          <p>Parque Ind. Las Américas</p>\n          <p>México, Chihuahua Chih.</p>\n          <p>31114</p>\n          <p>Se puede recoger apartir de 2 horas después de realizada la compra.</p>\n          <p>De NO ir por el producto se tendrá que cobrar el envío.</p>\n        </div>\n      </div>\n\n      <div class=\"part4\">\n        <button class=\"btn b1\" (click)=\"regresarEnvio()\">Regresar</button>\n        <button class=\"btn b2\" (click)=\"continuarEnvio()\">Continuar</button>\n      </div>\n    </ion-radio-group>\n    </ion-card>\n  </div>\n\n  <div id=\"pago\" class=\"pago\" style=\"display: none;\">\n    <ion-card class=\"pagoContDesk\">\n\n      <div class=\"part1\">\n        <ion-card-title style=\"color: #0088a7;font-size: 1.8em;\">3.- PAGO</ion-card-title>\n      </div>\n\n      <hr style=\"width: 100%; height: 1px; background: rgb(128, 128, 128);\">\n      \n      <div class=\"part5\">\n        <ion-item>\n          <ion-toggle color=\"secondary\" (click)=\"facturado2()\"></ion-toggle>  \n            <p>Estoy de acuerdo con los <a (click)=\"setOpen2(true)\">términos del servicio</a> y los <a (click)=\"setOpen(true)\">términos de revocación</a> y los acepto sin reservas</p>\n        </ion-item>\n        <!-- <ion-checkbox labelPlacement=\"end\"></ion-checkbox> -->\n        <!-- <ion-checkbox>I agree to the terms and conditions</ion-checkbox> -->\n        <ion-modal [isOpen]=\"isModalOpen\">\n          <ng-template>\n            <ion-header>\n              <ion-toolbar>\n                <ion-title>Politicas de Rembolso</ion-title>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"setOpen(false)\">Cerrar</ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-header>\n            <ion-content class=\"ion-padding\">\n              <div style=\"max-width: 1200px; margin: 0 auto;\">\n                <h2 class=\"ui-heading\" style=\"text-align: left;\"><span style=\"color: #1ea9d1; font-size: 1.5em;\"><strong>Política de reembolso</strong></span></h2>\n                <p style=\"font-family: 'RobotoCondensed-Light';\"><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">Información requerida para proceder con devoluciones de dinero :</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- Monto de la devolución</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- Motivo de la devolución</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- Comprobante de pago</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- Caratula de estado de cuenta que contenga: Nombre del beneficiario de la cuenta (debe ser la misma cuenta de la cual procede el pago), número de cuenta, clabe interbancaria (18 dígitos) y nombre del banco en el que se realizará el depósito.</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- POR DISPOSICIONES FISCALES Y POLÍTICAS DE LA EMPRESA, </span><b style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">no se efectuarán reembolsos a clientes a una cuenta distinta a la procedente de los recursos</b><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">.</span><br style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\" /><span style=\"color: #222222; font-family: 'RobotoCondensed-Light', serif; font-size: 16px; background-color: #ffffff;\">- Su información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica.</span></p>\n                <div style=\"text-align: left;\">\n                <ul>\n                <li>Para cualquier situación referente a faltante de material, error en el surtido o error en su pedido, cuenta solo con 72 horas hábiles para reportarnos la situación, la cual estará sujeta a revisión.</li>\n                <li>Cuando devuelve un artículo, acepta que el reembolso y la forma en que se acredita pueden variar de acuerdo con la condición del artículo, el tiempo que ha tenido el artículo y la forma en que este fue comprado. Si devuelve un producto diferente o en condiciones diferentes al que enviamos, no podremos procesar su reembolso.</li>\n                <li>El producto debe venir en su empaque original y en las mismas condiciones que le fue enviado. Al devolver el producto debe proteger tanto el producto como el empaque del mismo para evitar daños en transporte.</li>\n                <li>En material cortado NO habrá devoluciones ni cambios.</li>\n                <li>Contamos con 24 horas para realizar las revisiones.</li>\n                <li>No hay cambios inmediatos.</li>\n                <li>Se cuentan con 72 horas hábiles para realizar cualquier devolución.</li>\n                <li>Todos los materiales de uso y soporte del producto (incluyendo herramientas, manuales, tarjetas de garantía, etc.) deben ser devueltos con el artículo.</li>\n                <li>Códigos de licencias o tarjetas electrónicas no se pueden devolver después de la compra.</li>\n                <li>En caso de que se tenga que aplicar algún reembolso por medio del método de pago CONEKTA se debe de esperar un mínimo de 30 días hábiles.</li>\n                </ul>\n                </div>\n                <div style=\"text-align: left;\"> </div>\n                <h2 class=\"ui-heading\" style=\"text-align: left;\"><span style=\"color: #ff9900;\"></span></h2>\n                </div>\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n  \n        <ion-modal [isOpen]=\"isModalOpen2\">\n          <ng-template>\n            <ion-header>\n              <ion-toolbar>\n                <ion-title>Terminos de Servicio</ion-title>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"setOpen2(false)\">Cerrar</ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-header>\n            <ion-content class=\"ion-padding\">\n              <div style=\"max-width: 1000px; margin: 0 auto;\">\n                <p>INFORMACIÓN DE CONTACTO</p>\n                <p>Whatsapp: (614) 6-05-12-78</p>\n                <p>Tel: (614) 4-32-61-22 Ext: 1142</p>\n                <p>Correo: ventas@lideart.com.mx</p>\n                <p></p>\n                <ul>\n                <li>Si el pago es con cheque, el envío NO se hará hasta que hayan transcurrido 48 horas y se haya reflejado el pago.</li>\n                <li>Si el método de pago se realizó por transferencia bancaria, el envío se hará hasta que hayan transcurrido 24 horas después de haber enviado tu comprobante de pago.</li>\n                <li>Para pago con TRANSFERENCIA ó en OXXO tiene solo 3 días para realizar su pago y enviar su comprobante al correo contacto@lideart.com.mx indicando la referencia de su pedido en el asunto del correo, en caso de no recibir su pago al 4to día le llegara un correo confirmando la cancelación de su pedido, y en caso de aun querer el pedido será necesario volverlo a realizar.</li>\n                <li>Todos los pedidos hechos en días hábiles antes de las 14:00 hrs. salen el mismo día, después de esa hora, el envío se hace al día siguiente hábil.</li>\n                <li>Es necesario presentar su credencial de elector a la hora de recoger su mercancía en sucursal.</li>\n                <li>En el caso poco probable que un equipo o mercancía saliera defectuosa, por favor contáctese al correo contacto@lideart.com.mx y siga las instrucciones que le indique el colaborador de nuestra compañía.</li>\n                <li>Favor de validar sus datos fiscales, no se realizarán refacturaciones por error de envío de datos.</li>\n                <li>Favor de indicar al momento de su compra si requieren factura fiscal proporcionando los datos necesarios para tal acción, de lo contrario no se podrá refacturar la mercancía.</li>\n                <li>Estimado Cliente, le recordamos que para poder facturar con nosotros debe estar dado de alta ante el SAT. De lo contrario se le realizará la venta como “Público en General” con los precios establecidos.</li>\n                <li>Las paqueterías son externas a Lideart por lo que les pedimos que si al recibir su paquete va con algún golpe, con sellos de nuestra cinta violados, cajas rotas, cajas húmedas o con algún tipo de daño que pueda comprometer o no la mercancía que va dentro les pedimos que por precaución, se haga la anotación al firmar de recibido con los comentarios del estado de la caja. Les pedimos confirmarnos dicha información en un lapso de no mayor a 24 hrs, al correo contacto@lideart.com.mx adjuntando fotografías o video, para en caso de que al abrir su caja encuentren algún daño en su mercancía, podamos reportarlo a paquetería oportunamente, favor de indicar la referencia de su pedido en el asunto del correo (9 letras indicadas en este mismo correo).</li>\n                </ul>\n                </div>\n            </ion-content>\n          </ng-template>\n        </ion-modal>\n      </div>\n\n      <div style=\"display: flex; align-items: center;justify-content: center;\">\n        <ion-item>\n          <ion-label style=\"font-size: 20px;font-weight:bold;margin-block-start: 0em;margin-block-end: 0em;\">¿Desea Facturar? &nbsp;&nbsp;<ion-toggle style=\"padding:0px; height:25px; width: 50px;\" color=\"secondary\" (click)=\"facturado()\"></ion-toggle>  </ion-label>\n          \n        </ion-item>\n      </div>\n        <div *ngIf=\"facturame\">\n    \n          <div class=\"txt\">\n                <div class=\"compra\" >\n                  <ion-select class=\"inps\"  [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\"   [(ngModel)]=\"usocfdi\" style=\"color: black;background-color: white;\" value=\"G00\" okText=\"OK\" cancelText=\"Cancelar\">\n                    <ion-select-option value=\"G01\">G01 - Adquisición de mercancías</ion-select-option>\n                    <ion-select-option value=\"G02\">G02 - Devoluciones, descuentos o bonificaciones</ion-select-option>\n                    <ion-select-option value=\"G03\">G03 - Gastos en general</ion-select-option>\n                    <ion-select-option value=\"I02\">I02 - Mobiliario y equipo de oficina por inversiones</ion-select-option>\n                    <ion-select-option value=\"I04\">I04 - Equipo de cómputo y accesorios</ion-select-option>\n                    <ion-select-option value=\"I08\">I08 - Otra maquinaria y equipo</ion-select-option>\n                    <ion-select-option value=\"P01\">P01 - Por definir</ion-select-option>\n                  </ion-select>\n                  <input class=\"inps\" type=\"text\" [(ngModel)]=\"razonSocial\" name=\"razonSocial\" placeholder=\"RAZON SOCIAL\" >\n                  <input class=\"inps\" type=\"text\" name=\"rfc\" [(ngModel)]=\"rfc\"   placeholder=\"RFC\"> \n                  <input class=\"inps\" type=\"text\" name=\"codigoPostal\" [(ngModel)]=\"codigoPostal\"   placeholder=\"CODIGO POSTAL\"> \n                  <input class=\"inps\" type=\"text\" name=\"DirFiscal\"  [(ngModel)]=\"DirFiscal\" placeholder=\"DIRECCIÓN FISCAL\">\n                  <!-- <input class=\"inps\" type=\"text\" name=\"FormaPago\" [(ngModel)]=\"metodoPago\"  placeholder=\"Forma de Pago\"> -->\n                  <ion-select class=\"inps\"  [interfaceOptions]=\"customActionSheetOptions3\" interface=\"action-sheet\"   [(ngModel)]=\"metodinPago\" style=\"color: black;background-color: white;\" value=\"G00\" okText=\"OK\" cancelText=\"Cancelar\">\n                    <ion-select-option value=\"00\">METODO DE PAGO</ion-select-option>\n                    <ion-select-option value=\"Transferencia\">TRANSFERENCIA</ion-select-option>\n                    <ion-select-option value=\"Webpay\">WEBPAY</ion-select-option>\n                    <ion-select-option value=\"Paypal\">PAYPAL</ion-select-option>\n                    <ion-select-option value=\"Oxxo\">OXXO</ion-select-option>\n                  </ion-select>\n                  <ion-select class=\"inps\" interface=\"action-sheet\"  [interfaceOptions]=\"customActionSheetOptions2\"   [(ngModel)]=\"regimenfiscal\" style=\"color: black;background-color: white;\" value=\"600\" okText=\"OK\" cancelText=\"Cancelar\">\n                    <ion-select-option value=\"601\">601 - General de Ley Personas Morales</ion-select-option>\n                    <ion-select-option value=\"603\">603 - Personas Morales con Fines no Lucrativos</ion-select-option>\n                    <ion-select-option value=\"605\">605 - Sueldos y Salarios e Ingresos Asimilados a Salarios</ion-select-option>\n                    <ion-select-option value=\"606\">606 - Arrendamiento</ion-select-option>\n                    <ion-select-option value=\"607\">607 - Régimen de Enajenación o Adquisición de Bienes</ion-select-option>\n                    <ion-select-option value=\"608\">608 - Demás ingresos</ion-select-option>\n                    <ion-select-option value=\"610\">610 - Residentes en el Extranjero sin Establecimiento Permanente en México</ion-select-option>\n                    <ion-select-option value=\"611\">611 - Ingresos por Dividendos (socios y accionistas)</ion-select-option>\n                    <ion-select-option value=\"612\">612 - Personas Físicas con Actividades Empresariales y Profesionales</ion-select-option>\n                    <ion-select-option value=\"614\">614 - Ingresos por intereses</ion-select-option>\n                    <ion-select-option value=\"615\">615 - Régimen de los ingresos por obtención de premios</ion-select-option>\n                    <ion-select-option value=\"616\">616 - Sin obligaciones fiscales</ion-select-option>\n                    <ion-select-option value=\"620\">620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos</ion-select-option>\n                    <ion-select-option value=\"621\">621 - Incorporación Fiscal</ion-select-option>\n                    <ion-select-option value=\"622\">622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</ion-select-option>\n                    <ion-select-option value=\"623\">623 - Opcional para Grupos de Sociedades</ion-select-option>\n                    <ion-select-option value=\"624\">624 - Coordinados</ion-select-option>\n                    <ion-select-option value=\"625\">625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</ion-select-option>\n                    <ion-select-option value=\"626\">626 - Régimen Simplificado de Confianza</ion-select-option>\n                  </ion-select>\n        \n                  <!-- <input class=\"inps\" type=\"text\" name=\"UsoCFDI\" [(ngModel)]=\"UsoCFDI\" placeholder=\"Uso de CFDI\"> -->\n                  <p>Guardar Datos para futuras facturas <ion-button (click)=\"guardaDatosFactura()\">+</ion-button></p>\n                  </div>\n                  \n    \n        </div>\n      </div>\n \n      <br>\n      <div style=\"width:100%;height:auto;display: flex;align-items: center;justify-content: center;flex-direction: row;\">\n\n          <p style=\"font-size: 20px;font-weight:bold;margin-block-start: 0em;margin-block-end: 0em;color: black;margin-right: 10px;\">Total a pagar:</p>\n          <p style=\"font-size: 20px;font-weight:bold;margin-block-start: 0em;margin-block-end: 0em;color: black;margin-left: 10px;\">{{grandTotal | number: '1.2-2'}}</p>\n   \n      </div>\n      <br>\n      <br>\n      <div style=\"width: 100%;\">\n        <ion-accordion-group>\n          <ion-accordion value=\"first\">\n            <ion-item slot=\"header\" (click)=\"transferencia()\" color=\"secondary\">\n              <ion-label>Pago por Transferencia</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n                <div class=\"part4\">\n              <button class=\"btn b2\" id=\"comprame\" (click)=\"relizarCompra()\" style=\"font-size: 1em;\">Realizar Compra</button>\n            </div>\n            </div>\n          </ion-accordion>\n          <ion-accordion value=\"second\" (click)=\"bloqueo()\" disabled=\"{{facturame2 == false}}\">\n            <ion-item slot=\"header\" (click)=\"tarjetas()\" color=\"secondary\">\n              <ion-label>Pago con Tarjeta (Web Pay)</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n              <ion-button id=\"open-modal\" style=\"display:none\" expand=\"block\">Abrir</ion-button>\n              <ion-modal id=\"modalsito\" trigger=\"open-modal\">\n                <ng-template>\n                  <ion-header>\n                    <ion-toolbar>\n                      <ion-buttons slot=\"start\">\n                        <ion-button (click)=\"cancel()\">Volver</ion-button>\n                      </ion-buttons>\n                    </ion-toolbar>\n                  </ion-header>\n                  <iframe [src]=\"urlsafe\" scrolling=\"yes\" height=\"850px\" style=\"width: 100%; overflow: hidden; border: 0px; display: inherit;\"></iframe>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </ion-accordion>\n          <ion-accordion value=\"third\" *ngIf=\"grandTotal>15\">\n            <ion-item slot=\"header\" (click)=\"oxxoPay()\" color=\"secondary\">\n              <ion-label>Pago en Efectivo Oxxo</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\" slot=\"content\">\n              <div class=\"part4\">\n                <button class=\"btn b2\" id=\"comprame\" (click)=\"relizarCompra()\" style=\"font-size: 1em;\">Realizar Compra</button>\n              </div>\n            </div>\n          </ion-accordion>\n          <ion-accordion value=\"fourth\" (click)=\"bloqueo()\" disabled=\"{{facturame2 == false}}\">\n            <ion-item slot=\"header\" (click)=\"paypal()\" color=\"secondary\" >\n              <ion-label>Pago con Paypal</ion-label>\n            </ion-item>\n            <div class=\"ion-padding\"  slot=\"content\">\n              <div class=\"paypalcont\" #paypalcont>  \n                <!-- <ion-button class=\"paypalBtn\" id=\"paypal-container\"></ion-button> -->\n                    <div button class=\"paypalBtn\" id=\"paypal-button-container\"></div>\n              </div>\n            </div>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n    \n   \n\n      <ion-radio-group>\n      <!-- <div class=\"pago\">\n        <div class=\"inp\">\n          <ion-radio value=\"1\" (click)=\"transferencia()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n        </div>\n        <div class=\"txt\">\n          <p style=\"margin-left: 1em;\">Pago por transferencia bancaria</p>\n        </div>\n      </div>\n      <div class=\"pago\">\n        <div class=\"inp\">\n          <ion-radio value=\"3\" (click)=\"tarjetas()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n          \n        </div>\n        <ion-button id=\"open-modal\" style=\"display:none\" expand=\"block\">Abrir</ion-button> -->\n        <!-- <ng-container *ngIf=\"valorRadio == 3\">\n          <div>\n            <iframe [src]=\"urlsafe\" scrolling=\"no\" height=\"600px\" style=\"width: 100%; overflow: hidden; border: 0px; display: inherit;\"></iframe>\n          </div>\n        </ng-container> -->\n        <!-- <ion-modal id=\"modalsito\" trigger=\"open-modal\">\n          <ng-template>\n            <ion-header>\n              <ion-toolbar>\n                <ion-buttons slot=\"start\">\n                  <ion-button (click)=\"cancel()\">Volver</ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-header>\n            <iframe [src]=\"urlsafe\" scrolling=\"no\" height=\"700px\" style=\"width: 100%; overflow: hidden; border: 0px; display: inherit;\"></iframe>\n          </ng-template>\n        </ion-modal> -->\n        <!-- <div class=\"txt\">\n          <p style=\"margin-left: 1em;\">Pago con tarjeta (Web Pay)</p>\n        </div>\n      </div>\n      <div class=\"pago\" *ngIf=\"grandTotal>15\">\n        <div class=\"inp\">\n          <ion-radio value=\"2\" (click)=\"oxxoPay()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n        </div> -->\n        <!-- <ion-modal [isOpen]=\"isModalOpen3\">\n          <ng-template>\n            <ion-header>\n              <ion-toolbar>\n                <ion-title>Conekta Oxxo</ion-title>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"setOpen3(false)\">Cerrar</ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-header>\n            <ion-content class=\"ion-padding\">\n            <p>Para pago con TRANSFERENCIA ó en OXXO tiene solo 3 días para realizar su pago y enviar su comprobante al correo contacto@lideart.com.mx indicando la orden de venta en el asunto del correo.</p>\n            <p>Porfavor presione el siguiente enlace que lo redirigira a la pantalla de cobro de conekta.</p>\n            <a  href=\"{{urlconekta}}\" target=\"_blank\">Conekta Pago en efectivo en Oxxo</a>\n            </ion-content>\n          </ng-template>\n        </ion-modal> -->\n        <!-- <div class=\"txt\">\n          <p style=\"margin-left: 1em;\">Pago en Efectivo Oxxo</p>\n        </div>\n      </div> -->\n<!-- \n      <div class=\"pago fixink\">\n        <div class=\"rowin\">\n          <div class=\"inp\">\n            <ion-radio value=\"4\" (click)=\"paypal()\" style=\"width: 1.5em; height: 1.5em; border-radius: 50%; border: 1px solid #3880ff;\"></ion-radio>\n          </div>\n          <div class=\"txt\">\n            <p style=\"margin-left: 1em;\">Paypal</p>\n          </div>\n        </div>\n        <ng-container *ngIf=\"valorRadio == 4\">\n          \n        </ng-container>\n        <div class=\"paypalcont\" #paypalcont>\n       \n              <div button class=\"paypalBtn\" id=\"paypal-button-container\"></div>\n        </div>\n      </div> -->\n    </ion-radio-group>\n\n\n\n      <div class=\"part4\"> \n        <button class=\"btn b1\" (click)=\"regresaPago()\">Regresar</button>\n        <!-- <button class=\"btn b2\" id=\"comprame\" (click)=\"relizarCompra()\" style=\"font-size: 1em;display:none\">Realizar Compra</button> -->\n      </div>\n\n      <!--<div class=\"imgCont ion-float-start\">\n        <img src=\"/assets/img/number-four.png\">\n        <ion-card-title>Forma de Pago</ion-card-title>\n      </div>-->\n\n      <!--<div class=\"cont\">\n        <ion-list lines=\"none\">\n          <ion-radio-group>\n            <ion-list-header>\n              <ion-label class=\"labelT\">\n                Selecciona una forma de Pago\n              </ion-label>\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-label class=\"labelC\">Pago por transferencia bancaria</ion-label>\n              <ion-radio value=\"1\" (click)=\"transferencia()\"></ion-radio>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label class=\"labelC\">Pago en Efectivo con Oxxo</ion-label>\n              <ion-radio value=\"2\" (click)=\"oxxoPay()\"></ion-radio>\n            </ion-item>\n        \n             <ion-item>\n              <ion-label class=\"labelC\">Pago con Tarjeta de Credito/Debito</ion-label>\n              <ion-radio value=\"3\" (click)=\"tarjetas()\"></ion-radio>\n              <ng-container *ngIf=\"valorRadio == 3\">\n                <div>\n                  <iframe [src]=\"urlsafe\" scrolling=\"no\" height=\"700px\" style=\"width: 100%; overflow: hidden; border: 0px; display: inherit;\"></iframe>\n                </div>\n              </ng-container>\n            </ion-item> \n        \n        \n          </ion-radio-group>\n        </ion-list>\n        <ion-list>\n    \n          <ion-item lines=\"none\" style=\"color: black;\">\n            <ion-label class=\"labelC\">CFDI</ion-label>\n            <ion-select style=\"color: black;\" value=\"G01\" okText=\"OK\" cancelText=\"Cancelar\">\n              <ion-select-option value=\"G01\">G01 - Adquisición de mercancías</ion-select-option>\n              <ion-select-option value=\"G02\">G02 - Devoluciones, descuentos o bonificaciones</ion-select-option>\n              <ion-select-option value=\"G03\">G03 - Gastos en general</ion-select-option>\n              <ion-select-option value=\"I02\">I02 - Mobiliario y equipo de oficina por inversiones</ion-select-option>\n              <ion-select-option value=\"I04\">I04 - Equipo de cómputo y accesorios</ion-select-option>\n              <ion-select-option value=\"I08\">I08 - Otra maquinaria y equipo</ion-select-option>\n              <ion-select-option value=\"P01\">P01 - Por definir</ion-select-option>\n            </ion-select>\n\n          </ion-item>\n        \n        </ion-list>\n      </div>-->\n\n      <!--<div class=\"contB\">\n        <ion-button color=\"secondary\" (click)=\"regresaPago()\" >\n          <ion-label>Regresar</ion-label>\n        </ion-button>\n        <ion-button  color=\"secondary\" (click)=\"relizarCompra()\" >\n          <ion-label >Realizar Compra</ion-label>\n        </ion-button>\n      </div> -->\n\n    </ion-card>\n  </div>\n\n  <div class=\"personal\" id=\"resumen\" style=\"display: none;\">\n    <ion-card>\n\n      <div class=\"imgCont ion-float-start\" style=\"padding-top: 2em;\">\n        <ion-card-title style=\"font-weight: 100;\">\n          Resumen de compras\n        </ion-card-title>\n      </div>\n      <ion-card-content>\n        <ion-list>\n          <ion-item *ngFor=\"let item of productitos\">\n            <ion-thumbnail slot=\"start\">\n              <img  src=\"{{item.image_link}}\" />\n            </ion-thumbnail>\n            <ion-label style=\"width: 200px;text-overflow: unset;\">{{item.title}}</ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-grid>\n          <ion-row>\n            <ion-col>Total:</ion-col>\n            <ion-col>{{grandTotal | number: '1.2-2'}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Tipo de Pago:</ion-col>\n            <ion-col>{{metodoPago}}</ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col>No. de Cuenta</ion-col>\n            <ion-col>{{noCuenta}}</ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col>Clabe Interbancaria</ion-col>\n            <ion-col>{{clabe}}</ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col>Banco</ion-col>\n            <ion-col>{{banco}}</ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"metodoPago == 'Oxxo Pay'\">\n            <ion-col>Referencia</ion-col>\n            <ion-col>{{oxxxo}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Tipo de Envio:</ion-col>\n            <ion-col>{{tipoEnvio}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Cotización:</ion-col>\n            <ion-col>{{respuestaCotizacion}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Orden de Venta:</ion-col>\n            <ion-col>{{respuestaOV}}</ion-col>\n          </ion-row>\n          <div *ngIf=\"facturame\">\n          <ion-row >\n            <ion-col>Datos de Facturación:</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Uso CFDI</ion-col>\n            <ion-col>{{usocfdi}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Razon Social</ion-col>\n            <ion-col>{{razonSocial}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>RFC</ion-col>\n            <ion-col>{{rfc}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Dirección Fiscal</ion-col>\n            <ion-col>{{DirFiscal}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Forma de Pago</ion-col>\n            <ion-col>{{metodoPago}}</ion-col>\n          </ion-row> \n          <ion-row>\n            <ion-col>Codigo Postal</ion-col>\n            <ion-col>{{codigoPostal}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Regimen Fiscal</ion-col>\n            <ion-col>{{regimenfiscal}}</ion-col>\n          </ion-row>\n        </div>\n        </ion-grid>\n      </ion-card-content>\n\n      <!-- <div class=\"cont\">\n        <ion-item *ngFor=\"let item of productitos\">\n          <div class=\"contR\">\n            <ion-thumbnail >\n              <img src=\"{{item.image_link}}\">\n            </ion-thumbnail>\n            <ion-label class=\"labelC\">\n              <h2>{{item.title}}</h2>\n              <p>{{item.quantity}}</p>\n            </ion-label>\n            <h5 fill=\"outline\" slot=\"end\">${{item.precio | number: '1.2-2'}}</h5>\n          </div>\n        </ion-item>\n        <ion-grid>\n          <ion-col>\n            <ion-label class=\"labelT\">Cotizacion: </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"labelC\">\n              {{respuestaCotizacion}}\n            </ion-label>\n          </ion-col>\n        </ion-grid>\n      </div> -->\n      \n      <div class=\"contB\">\n        <ion-button shape=\"round\" color=\"secondary\" expand=\"block\" [routerLink]=\"['/home']\" class=\"full\" routerLinkActive=\"router-link-active\" >Aceptar</ion-button>\n      </div>\n\n    </ion-card>\n  </div>\n\n\n\n  <div class=\"personal\" id=\"resumenEscritorio\" style=\"display: none;\">\n    <ion-card>\n      <div style=\"align-items: center;width: fit-content;text-align: center;\">\n        <div>\n          <img src=\"/assets/img/loguito.jpg\"/>\n        </div>\n        <ion-label style=\"font-weight: bold; font-size: 4em\">\n          ¡GRACIAS POR TU COMPRA!\n        </ion-label>\n        <p style=\"font-size: 2em;\">\n          Valoramos tu apoyo y estamos emocionados de tenerte como cliente.\n        </p>\n      </div>\n\n      <div class=\"imgCont ion-float-start\" style=\"padding-top: 2em;\">\n        <ion-card-title class=\"rowResumen\" style=\"font-size: 2.5em;\">\n          Resumen de compras\n        </ion-card-title>\n      </div>\n      <ion-card-content>\n        <ion-list>\n          <ion-item *ngFor=\"let item of productitos\">\n            <ion-thumbnail style=\"width: 150px; height: 150px;\" slot=\"start\">\n              <img  src=\"{{item.image_link}}\" />\n            </ion-thumbnail>\n            <ion-label class=\"tituloItemCompra\">{{item.title}}</ion-label>\n          </ion-item>\n        </ion-list>\n        <ion-grid>\n          <ion-row class=\"rowResumen\" >\n            <ion-col class=\"etiquetasResumen\">Total:</ion-col>\n            <ion-col class=\"cantidadesResumen\">{{grandTotal | number: '1.2-2'}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\">\n            <ion-col class=\"etiquetasResumen\">Tipo de Pago:</ion-col>\n            <ion-col>{{metodoPago}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\" *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col class=\"etiquetasResumen\">No. de Cuenta</ion-col>\n            <ion-col>{{noCuenta}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\" *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col class=\"etiquetasResumen\">Clabe Interbancaria</ion-col>\n            <ion-col>{{clabe}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\" *ngIf=\"metodoPago == 'Transferencia'\">\n            <ion-col class=\"etiquetasResumen\">Banco</ion-col>\n            <ion-col>{{banco}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\" *ngIf=\"metodoPago == 'Oxxo Pay'\">\n            <ion-col class=\"etiquetasResumen\">Referencia</ion-col>\n            <ion-col>{{oxxxo}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\">\n            <ion-col class=\"etiquetasResumen\">Tipo de Envio:</ion-col>\n            <ion-col>{{tipoEnvio}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\">\n            <ion-col class=\"etiquetasResumen\">Cotización:</ion-col>\n            <ion-col>{{respuestaCotizacion}}</ion-col>\n          </ion-row>\n          <ion-row class=\"rowResumen\">\n            <ion-col class=\"etiquetasResumen\">Orden de Venta:</ion-col>\n            <ion-col>{{respuestaOV}}</ion-col>\n          </ion-row>\n          <div *ngIf=\"facturame\">\n          <ion-row >\n            <ion-col>Datos de Facturación:</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Uso CFDI</ion-col>\n            <ion-col>{{usocfdi}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Razon Social</ion-col>\n            <ion-col>{{razonSocial}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>RFC</ion-col>\n            <ion-col>{{rfc}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Dirección Fiscal</ion-col>\n            <ion-col>{{DirFiscal}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Forma de Pago</ion-col>\n            <ion-col>{{metodoPago}}</ion-col>\n          </ion-row> \n          <ion-row>\n            <ion-col>Codigo Postal</ion-col>\n            <ion-col>{{codigoPostal}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Regimen Fiscal</ion-col>\n            <ion-col>{{regimenfiscal}}</ion-col>\n          </ion-row>\n        </div>\n        </ion-grid>\n      </ion-card-content>\n\n      <!-- <div class=\"cont\">\n        <ion-item *ngFor=\"let item of productitos\">\n          <div class=\"contR\">\n            <ion-thumbnail >\n              <img src=\"{{item.image_link}}\">\n            </ion-thumbnail>\n            <ion-label class=\"labelC\">\n              <h2>{{item.title}}</h2>\n              <p>{{item.quantity}}</p>\n            </ion-label>\n            <h5 fill=\"outline\" slot=\"end\">${{item.precio | number: '1.2-2'}}</h5>\n          </div>\n        </ion-item>\n        <ion-grid>\n          <ion-col>\n            <ion-label class=\"labelT\">Cotizacion: </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"labelC\">\n              {{respuestaCotizacion}}\n            </ion-label>\n          </ion-col>\n        </ion-grid>\n      </div> -->\n      \n      <div class=\"contB\">\n        <ion-button shape=\"round\" color=\"secondary\" expand=\"block\" [routerLink]=\"['/home']\" class=\"full\" routerLinkActive=\"router-link-active\" >Aceptar</ion-button>\n      </div>\n\n    </ion-card>\n  </div>\n\n\n\n  <div class=\"comprassss\" (click)=\"quitaAnimacion()\" id=\"comprita\" style=\"display:none;\">\n    <img src=\"/assets/img/compra.jpg\">\n    <button (click)=\"quitaAnimacion()\" class=\"botonsillo\">Ir a Resumen</button>\n  </div>\n\n  <div class=\"loader\" *ngIf=\"cargando\">\n    <img src=\"/assets/img/loadersillo.gif\">\n  </div>\n  <app-desk-footer class=\"deskfooter\"></app-desk-footer>\n</ion-content>\n\n<section class=\"modal-nd\" #modal_nd>\n  <div class=\"form-conten\">\n    <input class=\"inps\" type=\"text\" [(ngModel)]=\"alias\" name=\"alias\" placeholder=\"Alias Dirección\" >\n    <input class=\"inps\" type=\"text\" name=\"telefono\" [(ngModel)]=\"telefono\"   placeholder=\"Telefono\">\n    <input class=\"inps\" type=\"text\" name=\"zipcode\"  [(ngModel)]=\"zipcode\"  (change)=\"accionesDireccion(zipcode, 'zipcode')\" placeholder=\"Código Postal\">\n    <input class=\"inps\" type=\"text\" name=\"address1\" [(ngModel)]=\"address1Form\"  placeholder=\"Dirección\">\n    <input class=\"inps\" type=\"text\" name=\"address2\" [(ngModel)]=\"address2\" placeholder=\"Dirección Complementaria\">\n    <select class=\"selict\" name=\"id_country\" >\n      <option value=\"1\" >Selecciona tu País</option>\n      <option value=\"145\" selected>México</option>\n    </select>\n    <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estado\"   (change)=\"accionesDireccion(estado, 'state')\" >\n      <option value=\"\" selected>Provincia o Estado</option>\n      <option value=\"57\">Aguascalientes</option>\n      <option value=\"58\">Baja California</option>\n      <option value=\"59\">Baja California Sur</option>\n      <option value=\"60\">Campeche</option>\n      <option value=\"61\">Chiapas</option>\n      <option value=\"62\">Chihuahua</option>\n      <option value=\"63\">Coahuila</option>\n      <option value=\"64\">Colima</option>\n      <option value=\"65\">Distrito Federal</option>\n      <option value=\"66\">Durango</option>\n      <option value=\"67\">Guanajuato</option>\n      <option value=\"68\">Guerrero</option>\n      <option value=\"69\">Hidalgo</option>\n      <option value=\"70\">Jalisco</option>\n      <option value=\"71\">Estado de México</option>\n      <option value=\"72\">Michoacán</option>\n      <option value=\"73\">Morelos</option>\n      <option value=\"74\">Nayarit</option>\n      <option value=\"75\">Nuevo León</option>\n      <option value=\"76\">Oaxaca</option>\n      <option value=\"77\">Puebla</option>\n      <option value=\"78\">Querétaro</option>\n      <option value=\"79\">Quintana Roo</option>\n      <option value=\"80\">San Luis Potosí</option>\n      <option value=\"81\">Sinaloa</option>\n      <option value=\"82\">Sonora</option>\n      <option value=\"83\">Tabasco</option>\n      <option value=\"84\">Tamaulipas</option>\n      <option value=\"85\">Tlaxcala</option>\n      <option value=\"86\">Veracruz</option>\n      <option value=\"87\">Yucatán</option>\n      <option value=\"88\">Zacatecas</option>\n    </select>\n    <select class=\"selict\" id=\"ciudadR\" name=\"city\" [(ngModel)]=\"cityForm\"    (change)=\"accionesDireccion(cityForm, 'city')\" >\n      <option value=\"\" selected>Ciudad</option>\n    </select>\n    <select class=\"selict\" name=\"colony\" [(ngModel)]=\"colonyForm\"   (change)=\"accionesDireccion(colonyForm,'colony')\" >\n      <option value=\"\" selected>Colonia</option>\n    </select>\n    <button (click)=\"agregarDir()\">Agregar</button>\n    <span class=\"cancel\" (click)=\"openModalNd()\">Cancelar</span>\n  </div>\n</section>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_checkout_checkout_module_ts.js.map
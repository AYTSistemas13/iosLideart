(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_perfil_perfil_module_ts"],{

/***/ 75935:
/*!*******************************************************!*\
  !*** ./src/app/pages/perfil/perfil-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilPageRoutingModule: () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 32994);




const routes = [{
  path: '',
  component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
}];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], PerfilPageRoutingModule);

/***/ }),

/***/ 73731:
/*!***********************************************!*\
  !*** ./src/app/pages/perfil/perfil.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilPageModule: () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 75935);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 32994);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 10822);








let PerfilPageModule = class PerfilPageModule {};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
})], PerfilPageModule);

/***/ }),

/***/ 32994:
/*!*********************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilPage: () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var _Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 15246);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 3976);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 2288);
/* harmony import */ var src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-productos.service */ 54867);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ 35302);
/* harmony import */ var _modal_product_modal_product_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-product/modal-product.page */ 17571);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ 6138);











let PerfilPage = class PerfilPage {
  constructor(apiProductos, modalController, renderer2, loginService, route, productoService) {
    this.apiProductos = apiProductos;
    this.modalController = modalController;
    this.renderer2 = renderer2;
    this.loginService = loginService;
    this.route = route;
    this.productoService = productoService;
    this.searchbarVisible = false;
    this.txtBuscador = '';
    this.productos = [];
    this.resultadoBusqueda = null;
    this.numeroResultados = 0;
    this.historialIs = false;
    this.informacionIs = false;
    this.LidepunteIs = false;
    this.isSubmitted = false;
    this.direccionIs = false;
    this.direccionIs2 = false;
    this.datosUsuario = [];
    this.informacion = [];
    this.pedidos = [];
    this.direcciones = [];
    this.clientesito = [];
    this.respuesta = [];
    this.lidepuntos = [];
    this.ordenes = [];
    this.ordensitas = [];
    this.modalin = false;
    this.opc = this.route.snapshot.paramMap.get('rec');
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
    this.infoDeskIs = false;
    this.dirDeskIs = false;
    this.agregaDirIs = false;
    this.histDeskIs = false;
    this.puntDeskIs = false;
    this.loginService.usuario.subscribe(res => {
      this.usuario = res;
      if (this.usuario) {}
    });
  }
  ngOnInit() {
    this.checalo();
    this.checalox2();
    this.checalox3();
    this.traePuntos();
    this.apiProductos.getProductos().subscribe(response => {
      this.productos = response;
    });
    //this.opc = this.route.snapshot.paramMap.get('rec');
    console.log(this.opc);
    console.log('si');
  }
  ngAfterViewInit() {
    console.log(this.opc);
    if (this.opc == 1) {
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'z-index', '1');
      this.LidepunteIs = true;
    }
    if (this.opc == 2) {
      this.renderer2.setStyle(this.historialf.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.historialf.nativeElement, 'z-index', '1');
      this.historialIs = true;
    }
  }
  historiale() {
    if (this.historialIs == false) {
      this.renderer2.setStyle(this.historialf.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.historialf.nativeElement, 'z-index', '1');
      this.historialIs = true;
    } else if (this.historialIs == true) {
      this.renderer2.setStyle(this.historialf.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.historialf.nativeElement, 'z-index', '-1');
      this.historialIs = false;
      this.opc = 0;
    }
  }
  informacione() {
    if (this.informacionIs == false) {
      this.renderer2.setStyle(this.informacionf.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.informacionf.nativeElement, 'z-index', '1');
      this.informacionIs = true;
    } else if (this.informacionIs == true) {
      this.renderer2.setStyle(this.informacionf.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.informacionf.nativeElement, 'z-index', '-1');
      this.informacionIs = false;
    }
  }
  infoDesk() {
    if (this.infoDeskIs == false) {
      this.renderer2.setStyle(this.info_Desk.nativeElement, 'width', '100%');
      this.renderer2.setStyle(this.info_Desk.nativeElement, 'height', '100%');
      this.infoDeskIs = true;
    } else if (this.infoDeskIs == true) {
      this.renderer2.setStyle(this.info_Desk.nativeElement, 'width', '0%');
      this.renderer2.setStyle(this.info_Desk.nativeElement, 'height', '0%');
      this.infoDeskIs = false;
    }
  }
  dirDesk() {
    if (this.dirDeskIs == false) {
      this.renderer2.setStyle(this.dir_Desk.nativeElement, 'width', '100%');
      this.renderer2.setStyle(this.dir_Desk.nativeElement, 'height', '100%');
      this.dirDeskIs = true;
    } else if (this.dirDeskIs == true) {
      this.renderer2.setStyle(this.dir_Desk.nativeElement, 'width', '0%');
      this.renderer2.setStyle(this.dir_Desk.nativeElement, 'height', '0%');
      if (this.agregaDirIs == true) {
        this.agregaDir();
      }
      this.dirDeskIs = false;
    }
  }
  agregaDir() {
    if (this.agregaDirIs == false) {
      this.renderer2.setStyle(this.agrega_Dir.nativeElement, 'width', '100%');
      this.renderer2.setStyle(this.agrega_Dir.nativeElement, 'height', '100%');
      this.agregaDirIs = true;
    } else if (this.agregaDirIs == true) {
      this.renderer2.setStyle(this.agrega_Dir.nativeElement, 'width', '0%');
      this.renderer2.setStyle(this.agrega_Dir.nativeElement, 'height', '0%');
      this.agregaDirIs = false;
    }
  }
  histDesk() {
    if (this.histDeskIs == false) {
      this.renderer2.setStyle(this.hist_Desk.nativeElement, 'width', '100%');
      this.renderer2.setStyle(this.hist_Desk.nativeElement, 'height', '100%');
      this.histDeskIs = true;
    } else if (this.histDeskIs == true) {
      this.renderer2.setStyle(this.hist_Desk.nativeElement, 'width', '0%');
      this.renderer2.setStyle(this.hist_Desk.nativeElement, 'height', '0%');
      this.histDeskIs = false;
    }
  }
  puntDesk() {
    if (this.puntDeskIs == false) {
      this.renderer2.setStyle(this.punt_Desk.nativeElement, 'width', '100%');
      this.renderer2.setStyle(this.punt_Desk.nativeElement, 'height', '100%');
      this.puntDeskIs = true;
    } else if (this.puntDeskIs == true) {
      this.renderer2.setStyle(this.punt_Desk.nativeElement, 'width', '0%');
      this.renderer2.setStyle(this.punt_Desk.nativeElement, 'height', '0%');
      this.puntDeskIs = false;
    }
  }
  direccione() {
    if (this.direccionIs == false) {
      this.renderer2.setStyle(this.direccionf.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.direccionf.nativeElement, 'z-index', '1');
      this.direccionIs = true;
    } else if (this.direccionIs == true) {
      this.renderer2.setStyle(this.direccionf.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.direccionf.nativeElement, 'z-index', '-1');
      this.direccionIs = false;
    }
  }
  Lidepunte() {
    if (this.LidepunteIs == false) {
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'z-index', '1');
      this.LidepunteIs = true;
    } else if (this.LidepunteIs == true) {
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.lidepuntef.nativeElement, 'z-index', '-1');
      this.LidepunteIs = false;
      this.opc = 0;
    }
  }
  direccione2() {
    this.direccione();
    if (this.direccionIs2 == false) {
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'z-index', '1');
      this.direccionIs2 = true;
    } else if (this.direccionIs2 == true) {
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'z-index', '-1');
      this.direccionIs2 = false;
    }
  }
  quita() {
    if (this.direccionIs2 == false) {
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'opacity', '1');
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'z-index', '1');
      this.direccionIs2 = true;
    } else if (this.direccionIs2 == true) {
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'opacity', '0');
      this.renderer2.setStyle(this.direccionf2.nativeElement, 'z-index', '-1');
      this.direccionIs2 = false;
    }
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
      const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.productos, this.options);
      const pattern = filtro;
      this.resultadoBusqueda = fuse.search(pattern);
      this.numeroResultados = fuse.search(pattern).length;
      this.resultadoBusqueda = this.resultadoBusqueda.slice(0, 100);
    }
  }
  openModal(id) {
    var _this = this;
    return (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.txtBuscador = '';
      _this.apiProductos.getSpecificProduct(id).subscribe( /*#__PURE__*/function () {
        var _ref = (0,_Users_eduardoacosta_Documents_GitHub_LideartApp_IONIC_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
          if (response[0]) {
            _this.product = response[0];
            const modal = yield _this.modalController.create({
              component: _modal_product_modal_product_page__WEBPACK_IMPORTED_MODULE_4__.ModalProductPage,
              cssClass: 'my-custom-class',
              initialBreakpoint: 0.6,
              breakpoints: [0, 0.6, 0.8, 1],
              componentProps: {
                product: _this.product
              }
            });
            return yield modal.present();
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  checalo() {
    this.loginService.checaUsuario(this.usuario.usuario).subscribe(data => {
      this.datosUsuario = data;
      this.id_customer = this.datosUsuario.id_customer;
      this.productoService.getDatosPedido(this.id_customer).subscribe(datoos => {
        this.pedidos = datoos;
      });
    });
  }
  checalox2() {
    this.loginService.recuperaDatosCliente(this.usuario.usuario).subscribe(data => {
      this.informacion = data;
      this.nombre = this.informacion[0].firstname;
      this.apellido = this.informacion[0].lastname;
      this.rfc = this.informacion[0].RFC;
      this.correo = this.informacion[0].email;
      this.customerID = this.informacion[0].customerID;
      this.loginService.recuperaOrdenescliente(this.customerID).subscribe(muchosDatos => {
        this.ordenes = muchosDatos;
        this.ordensitas = this.ordenes.data;
      });
    });
  }
  cancel() {
    // this.modalito.dismiss(null, 'cancel');
    this.modalin = false;
  }
  traePuntos() {
    this.loginService.traePuntos(this.usuario.usuario).subscribe(data => {
      this.lidepuntos = data;
      this.totalpuntos = this.lidepuntos[0].Total_Lidepuntos;
    });
  }
  checalox3() {
    this.loginService.recuperaDatosDireccion(this.usuario.usuario).subscribe(data => {
      this.direcciones = data;
      for (let i = 0; i < this.direcciones.length; i++) {
        const element = this.direcciones[i].id_state;
        if (element == 62) {
          this.nombreEstado = "Chihuahua";
        }
      }
    });
  }
  abreme() {
    this.modalin = true;
  }
  actualizar() {
    let datosCliente = {
      "nombre": this.nombre,
      "apellido": this.apellido,
      "rfc": this.rfc,
      "correo": this.correo
    };
    this.loginService.actualizaDatosCliente(datosCliente).subscribe(respuesta => {
      location.reload();
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
    this.loginService.selectDireccionZipCode('zipcode', this.zipcode).subscribe(res => {
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
    this.loginService.selectDireccionState('porState', this.estado).subscribe(res => {
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
    this.loginService.selectDireccionCity("porCity", this.city).subscribe(res => {
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
    this.loginService.enviaDireccion(arregloDir).subscribe(datos => {
      location.reload();
    });
  }
  static #_ = this.ctorParameters = () => [{
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2
  }, {
    type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
  }, {
    type: src_app_services_api_productos_service__WEBPACK_IMPORTED_MODULE_3__.ApiProductosService
  }];
  static #_2 = this.propDecorators = {
    modalito: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal]
    }],
    historialf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['historial']
    }],
    informacionf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['informacion']
    }],
    direccionf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['direccion']
    }],
    direccionf2: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['direccion2']
    }],
    lidepuntef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['lidepuntos']
    }],
    info_Desk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['info_Desk']
    }],
    dir_Desk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['dir_Desk']
    }],
    agrega_Dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['agrega_Dir']
    }],
    hist_Desk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['hist_Desk']
    }],
    punt_Desk: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
      args: ['punt_Desk']
    }]
  };
};
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-perfil',
  template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PerfilPage);

/***/ }),

/***/ 3976:
/*!**********************************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 92487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 31386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ion-button {
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

.header-md::after {
  display: none;
}

.container {
  height: 100%;
  background-color: var(--ion-color-primary);
  display: grid;
  justify-items: center;
}

.content {
  position: absolute;
  bottom: 0;
  background: var(--ion-color-light);
  width: 100%;
  height: 75%;
  border-radius: 4em 4em 0 0;
  box-shadow: 0px -14px 12px 6px rgba(0, 0, 0, 0.2);
}

.name {
  font-weight: bold;
}

.mail {
  font-weight: 100;
  margin-top: 1em;
}

.info-container {
  background-color: white;
  width: 88%;
  margin: 7em 5%;
  height: auto;
  border-radius: 1em;
  border: 1px solid var(--ion-color-medium);
}
.info-container p {
  color: black;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
}

ion-avatar {
  position: absolute;
  width: 10em;
  height: 10em;
  margin: 0 30vw;
  bottom: 65vh;
  z-index: 10;
  border: 10px solid var(--ion-color-light);
  box-shadow: 0px -14px 12px 6px rgba(0, 0, 0, 0.2);
}

.header-ios ion-toolbar:last-of-type {
  --border-width: 0;
}

.header-translucent-ios ion-toolbar {
  --opacity: 1;
}

.perfil {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #fff;
  opacity: 0.8;
}
.perfil .btn {
  width: 70%;
  height: 3rem;
  background: #128ab6;
  color: #fff;
  border-radius: 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0.8rem;
  margin: 1.5rem 0rem;
  position: relative;
}
.perfil .btn ion-icon {
  font-size: 1.8rem;
}
.perfil .btn p {
  font-size: 1.1rem;
  font-weight: lighter;
  margin-left: 1rem;
}
.perfil .btn .shadow {
  width: 80%;
  height: 0.6rem;
  background: rgba(0, 0, 0, 0.152);
  position: absolute;
  bottom: -0.6rem;
  left: 10%;
  -webkit-backdrop-filter: blur(1px);
          backdrop-filter: blur(1px);
  border-radius: 0rem 0rem 0.4rem 0.4rem;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
}

.historial {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  position: fixed;
  top: 3.5rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
  opacity: 0;
  z-index: -1;
  transition: all 2s;
}
.historial .volver {
  background: #1ed5cc;
  width: 6rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0.5rem;
  top: 8rem;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
}
.historial .volver ion-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.4rem;
}
.historial .volver p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #fff;
  font-size: 1rem;
}
.historial .titled {
  width: 100%;
  height: 5rem;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 0.5rem;
}
.historial .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: rgb(107, 107, 107);
  font-size: 1rem;
}
.historial .compra {
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
.historial .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.historial .compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.historial .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.historial .compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.historial .compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.historial .compra .ent {
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

.informacion {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  position: fixed;
  top: 3.5rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
  opacity: 0;
  z-index: -1;
  transition: all 2s;
}
.informacion .volver {
  background: #1ed5cc;
  width: 6rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0.5rem;
  top: 8rem;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
}
.informacion .volver ion-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.4rem;
}
.informacion .volver p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #fff;
  font-size: 1rem;
}
.informacion .titled {
  width: 100%;
  height: 5rem;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 0.5rem;
}
.informacion .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: rgb(107, 107, 107);
  font-size: 1rem;
}
.informacion .compra {
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
.informacion .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.informacion .compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.informacion .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.informacion .compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.informacion .compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.informacion .compra .ent {
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

.direccion {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  position: fixed;
  top: 3.5rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
  opacity: 0;
  z-index: -1;
  transition: all 2s;
}
.direccion .volver {
  background: #1ed5cc;
  width: 6rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0.5rem;
  top: 8rem;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
}
.direccion .volver ion-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.4rem;
}
.direccion .volver p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #fff;
  font-size: 1rem;
}
.direccion .titled {
  width: 100%;
  height: 5rem;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 0.5rem;
}
.direccion .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: rgb(107, 107, 107);
  font-size: 1rem;
}
.direccion .compra {
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
.direccion .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.direccion .compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.direccion .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.direccion .compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.direccion .compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.direccion .compra .ent {
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

.lidepuntos {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  position: fixed;
  top: 3.5rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
  opacity: 0;
  z-index: -1;
  transition: all 2s;
}
.lidepuntos .volver {
  background: #1ed5cc;
  width: 6rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0.5rem;
  top: 8rem;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
}
.lidepuntos .volver ion-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.4rem;
}
.lidepuntos .volver p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #fff;
  font-size: 1rem;
}
.lidepuntos .titled {
  width: 100%;
  height: 5rem;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 0.5rem;
}
.lidepuntos .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: rgb(107, 107, 107);
  font-size: 1rem;
}
.lidepuntos .compra {
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
.lidepuntos .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.lidepuntos .compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lidepuntos .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.lidepuntos .compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.lidepuntos .compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.lidepuntos .compra .ent {
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

.direccion2 {
  width: 100%;
  height: 100%;
  background: rgb(237, 237, 237);
  position: fixed;
  top: 3.5rem;
  overflow-y: scroll;
  padding-bottom: 3rem;
  opacity: 0;
  z-index: -1;
  transition: all 2s;
}
.direccion2 .volver {
  background: #1ed5cc;
  width: 6rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0.5rem;
  top: 8rem;
  z-index: 10;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 0.5rem;
}
.direccion2 .volver ion-icon {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 0.4rem;
}
.direccion2 .volver p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #fff;
  font-size: 1rem;
}
.direccion2 .titled {
  width: 100%;
  height: 5rem;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin-bottom: 0.5rem;
}
.direccion2 .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: rgb(107, 107, 107);
  font-size: 1rem;
}
.direccion2 .compra {
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
.direccion2 .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: relative;
}
.direccion2 .compra .info .text {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.direccion2 .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 1rem;
  color: rgb(107, 107, 107);
}
.direccion2 .compra .info .icons {
  width: 10%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}
.direccion2 .compra .info .icons ion-icon {
  font-size: 2.2rem;
}
.direccion2 .compra .ent {
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

@media screen and (orientation: landscape) {
  ion-avatar {
    display: none;
  }
  .info-container {
    margin: 3em 5%;
  }
}
ion-content {
  display: block;
}

.perfilDesk {
  width: 100%;
  height: auto;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.perfilDesk .perfilCont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 0em;
  gap: 2em;
  position: relative;
}
.perfilDesk .perfilCont .taitl-cont {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.perfilDesk .perfilCont .taitl-cont .taitl {
  color: #00a3c7;
  font-size: 1.7em;
}
.perfilDesk .perfilCont .opts-cont {
  width: 50em;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
}
.perfilDesk .perfilCont .opts-cont .opt {
  width: 20em;
  height: 10em;
  border-radius: 1em;
  box-shadow: rgba(99, 99, 99, 0.35) 0px 2px 8px 0px;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.perfilDesk .perfilCont .opts-cont .opt i {
  color: #8b8b8b;
  font-size: 4em;
  transition: 0.3s all ease-in-out;
}
.perfilDesk .perfilCont .opts-cont .opt .opt-name {
  color: #8b8b8b;
  font-size: 1.2em;
  transition: 0.3s all ease-in-out;
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(1):hover {
  box-shadow: rgba(0, 163, 197, 0.5) 0px 1px 12px 1px;
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(1):hover i {
  color: rgba(0, 163, 197, 0.8);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(1):hover .opt-name {
  color: rgba(0, 163, 197, 0.8);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(2):hover {
  box-shadow: rgba(0, 53, 197, 0.5) 0px 1px 12px 1px;
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(2):hover i {
  color: rgba(0, 53, 197, 0.7);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(2):hover .opt-name {
  color: rgba(0, 53, 197, 0.7);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(3):hover {
  box-shadow: rgba(43, 0, 197, 0.5) 0px 1px 12px 1px;
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(3):hover i {
  color: rgba(43, 0, 197, 0.8);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(3):hover .opt-name {
  color: rgba(43, 0, 197, 0.8);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(4):hover {
  box-shadow: rgba(135, 0, 197, 0.5) 0px 1px 12px 1px;
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(4):hover i {
  color: rgba(135, 0, 197, 0.8);
}
.perfilDesk .perfilCont .opts-cont .opt:nth-child(4):hover .opt-name {
  color: rgba(135, 0, 197, 0.8);
}
.perfilDesk .perfilCont .infoDesk {
  /*width: 100%;
  height: 100%;*/
  width: 0%;
  height: 0%;
  background-color: rgb(0, 163, 197);
  position: absolute;
  padding: 3em 0em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease-in-out;
  overflow: hidden;
}
.perfilDesk .perfilCont .infoDesk .closen {
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  font-size: 2em;
  transition: 0.3s all ease-in-out;
  opacity: 1;
  cursor: pointer;
}
.perfilDesk .perfilCont .infoDesk .closen:hover {
  opacity: 0.6;
}
.perfilDesk .perfilCont .infoDesk .compra {
  width: 30em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}
.perfilDesk .perfilCont .infoDesk .compra .cont-opc {
  padding: 0.4em 0.7em;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid #fff;
  border-radius: 0.7em 0em;
}
.perfilDesk .perfilCont .infoDesk .compra .cont-opc ion-label {
  font-size: 0.7em;
}
.perfilDesk .perfilCont .infoDesk .compra .cont-opc ion-input {
  --padding-top: 5px;
  --padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4196078431);
  transition: 0.5s all ease-in-out;
}
.perfilDesk .perfilCont .dirDesk {
  /*width: 100%;
  height: 100%;*/
  width: 0%;
  height: 0%;
  background-color: rgb(0, 53, 197);
  position: absolute;
  padding: 3em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease-in-out;
  overflow: hidden;
  gap: 2em;
}
.perfilDesk .perfilCont .dirDesk .closen {
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  font-size: 2em;
  transition: 0.3s all ease-in-out;
  opacity: 1;
  cursor: pointer;
}
.perfilDesk .perfilCont .dirDesk .closen:hover {
  opacity: 0.6;
}
.perfilDesk .perfilCont .dirDesk .fix {
  width: 30em;
  height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  align-items: center;
  background: #1135c0;
  box-shadow: 41px 41px 82px #0e2da3, -41px -41px 82px #143ddd;
  border-radius: 1em;
  padding: 1em;
  overflow-y: scroll;
  position: relative;
}
.perfilDesk .perfilCont .dirDesk .fix .compra {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7em;
  border-bottom: 1px solid #ffffff;
  border-bottom-style: dashed;
  padding: 0.7em 1em;
}
.perfilDesk .perfilCont .dirDesk .fix .compra .info {
  width: 100%;
  height: auto;
}
.perfilDesk .perfilCont .dirDesk .fix .compra .info .text {
  width: 100%;
  height: auto;
}
.perfilDesk .perfilCont .dirDesk .fix .compra .info .text p {
  font-size: 0.9em;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #00aaff;
  animation: 1s parpcolor1 ease-in-out infinite;
}
.perfilDesk .perfilCont .dirDesk .fix .compra .ent {
  font-size: 0.7em;
  color: #00aaff;
  animation: 1s parpcolor1 ease-in-out infinite;
}
@keyframes parpcolor1 {
  0%, 100% {
    color: rgba(0, 170, 255, 0.6784313725);
  }
  50% {
    color: #00aaff;
  }
}
.perfilDesk .perfilCont .dirDesk .fix .compra:last-child {
  border-bottom: none;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 {
  width: 0%;
  height: 0%;
  background: #1234bd;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  transition: 0.2s all ease-in-out;
  opacity: 1;
  z-index: 1;
  padding-bottom: 0;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .titled {
  width: 100%;
  height: 4em;
  background: #1234bd;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0rem 2rem;
  box-shadow: none;
  margin-bottom: none;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .titled p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: #00aaff;
  font-size: 0.9em;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .titled .closin {
  position: absolute;
  left: 1em;
  color: #00aaff;
  cursor: pointer;
  font-size: 1.2em;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .contina {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.7em;
  padding: 0.7em 1em;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .contina .inps {
  width: 100%;
  height: 2.4em;
  background: none;
  text-indent: 1rem;
  border-radius: 5rem;
  color: #00aaff;
  border: 1px solid #00aaff;
  margin-bottom: none;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .contina .inps::placeholder {
  color: #00aaff;
}
.perfilDesk .perfilCont .dirDesk .fix .direccion2 .contina .selict {
  width: 100%;
  height: 2.4rem;
  background: none;
  padding: 0rem 1rem;
  border-radius: 2em;
  border: 1px solid #00aaff;
  margin-bottom: none;
  color: #00aaff;
}
.perfilDesk .perfilCont .dirDesk button {
  background-color: #1135c0 !important;
  border: 1px solid #00aaff;
  color: #00aaff;
  padding: 0.7em 2em;
  border-radius: 2em;
}
.perfilDesk .perfilCont .histDesk {
  /*width: 100%;
  height: 100%;*/
  width: 0%;
  height: 0%;
  background-color: rgb(43, 0, 197);
  position: absolute;
  padding: 3em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease-in-out;
  overflow: hidden;
  gap: 2em;
}
.perfilDesk .perfilCont .histDesk .closen {
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  font-size: 2em;
  transition: 0.3s all ease-in-out;
  opacity: 1;
  cursor: pointer;
}
.perfilDesk .perfilCont .histDesk .closen:hover {
  opacity: 0.6;
}
.perfilDesk .perfilCont .histDesk .contenHist {
  width: 20em;
  height: 25em;
  border: 1px solid rgba(255, 255, 255, 0.1607843137);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 1em;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 1em;
  padding: 1em;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3294117647);
  border-bottom-style: dashed;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info .text {
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info .text p {
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.7803921569);
  font-weight: 100;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info .icons button {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: #3503c0;
  box-shadow: 15px 15px 10px #2d03a3, -5px -5px 10px #3d03dd;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info .icons button i {
  color: #6400ff;
  transition: 0.5s all ease-in-out;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .info .icons button:hover i {
  color: #fff;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra .ent {
  font-size: 0.9em;
  color: #fff;
}
.perfilDesk .perfilCont .histDesk .contenHist .compra:last-child {
  border-bottom: none;
}
.perfilDesk .perfilCont .histDesk .contenHist::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}
.perfilDesk .perfilCont .histDesk .contenHist::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.4745098039);
  width: 0.25em;
}
.perfilDesk .perfilCont .puntDesk {
  /*width: 100%;
  height: 100%;*/
  width: 0%;
  height: 0%;
  background-color: rgb(135, 0, 197);
  position: absolute;
  padding: 3em 0em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s all ease-in-out;
  overflow: hidden;
  gap: 2em;
}
.perfilDesk .perfilCont .puntDesk .closen {
  position: absolute;
  top: 1em;
  right: 1em;
  color: #fff;
  font-size: 2em;
  transition: 0.3s all ease-in-out;
  opacity: 1;
  cursor: pointer;
}
.perfilDesk .perfilCont .puntDesk .closen:hover {
  opacity: 0.6;
}
.perfilDesk .perfilCont .puntDesk .puntCont {
  width: 25em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding: 1em;
  background: #8f09c0;
  box-shadow: 41px 41px 82px #7a08a3, -41px -41px 82px #a40add;
  border-radius: 2em;
}
.perfilDesk .perfilCont .puntDesk .puntCont .title {
  font-weight: 100;
  font-size: 0.95em;
  color: #fff;
}
.perfilDesk .perfilCont .puntDesk .puntCont .conten {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.perfilDesk .perfilCont .puntDesk .puntCont .conten .ent {
  border: 1px solid rgba(255, 255, 255, 0.1607843137);
  font-size: 0.9em;
  color: #fff;
  padding: 0.7em 2em;
  border-radius: 3em;
}
.perfilDesk .perfilCont .puntDesk .puntCont .fin {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 0.5em;
}
.perfilDesk .perfilCont .puntDesk .puntCont .fin .txt {
  font-weight: 100;
  font-size: 0.75em;
  color: #fff;
}
.perfilDesk .perfilCont .puntDesk .puntCont .fin .linka {
  text-decoration: none;
  font-weight: 100;
  font-size: 1.1em;
  transition: 0.5s all ease-in-out;
  color: #d559ff;
}
.perfilDesk .perfilCont .puntDesk .puntCont .fin .linka:hover {
  color: #fff;
  text-decoration: underline;
}

@media (min-width: 992px) {
  .perfilDesk {
    display: flex;
  }
  ion-content {
    display: none;
  }
}
.perfilDesk::-webkit-scrollbar {
  width: 0.35em;
  background-color: transparent;
  height: 0.7em;
}

.perfilDesk::-webkit-scrollbar-thumb {
  background-color: rgba(0, 162, 199, 0.4745098039);
  width: 0.25em;
}`, "",{"version":3,"sources":["webpack://./src/app/pages/perfil/perfil.page.scss"],"names":[],"mappings":"AAEA;EACE,oCAAA;AADF;;AAIA;EACE,wCAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,qBAAA;AADF;;AAIA;EACE,qBAAA;EACA,UAAA;EACA,iBAAA;AADF;;AAIA;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AADF;;AAIA;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,UAAA;EACA,SAAA;AADF;;AAIA;EACE,aAAA;AADF;;AAIA;EACE,YAAA;EACA,0CAAA;EACA,aAAA;EACA,qBAAA;AADF;;AAIA;EACE,kBAAA;EACA,SAAA;EACA,kCAAA;EACA,WAAA;EACA,WAAA;EACA,0BAAA;EACA,iDAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;EACE,gBAAA;EACA,eAAA;AADF;;AAGA;EACE,uBAAA;EACA,UAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,yCAAA;AAAF;AACE;EACE,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;AACJ;;AAGA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,yCAAA;EACA,iDAAA;AAAF;;AAGA;EACE,iBAAA;AAAF;;AAEA;EACE,YAAA;AACF;;AAMA;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,mBAAA;EACA,sBAAA;EACA,sBAAA;EACA,YAAA;AAHF;AAKE;EACE,UAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,8IAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,mBAAA;EACA,oBAAA;EACA,mBAAA;EACA,kBAAA;AAHJ;AAKI;EACE,iBAAA;AAHN;AAMI;EACE,iBAAA;EACA,oBAAA;EACA,iBAAA;AAJN;AAOI;EACE,UAAA;EACA,cAAA;EACA,gCAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,kCAAA;UAAA,0BAAA;EACA,sCAAA;EACA,4CAAA;AALN;;AAUA;EACE,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;AAPF;AASE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,wFAAA;EACA,qBAAA;AAPJ;AASI;EACE,WAAA;EACA,iBAAA;EACA,oBAAA;AAPN;AAUI;EACE,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;AARN;AAYE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4EAAA;EACA,qBAAA;AAVJ;AAYI;EACE,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAVN;AAcE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AAZJ;AAcI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AAZN;AAcM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAZR;AAcQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AAZV;AAgBM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AAdR;AAgBQ;EACE,iBAAA;AAdV;AAmBI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAjBN;;AAsBA;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;AAnBF;;AAsBA;EACE,aAAA;AAnBF;;AAsBA;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;AAnBF;;AAsBA;EACE,aAAA;AAnBF;;AAsBA;EACE,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;AAnBF;AAqBE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,wFAAA;EACA,qBAAA;AAnBJ;AAqBI;EACE,WAAA;EACA,iBAAA;EACA,oBAAA;AAnBN;AAsBI;EACE,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;AApBN;AAwBE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4EAAA;EACA,qBAAA;AAtBJ;AAwBI;EACE,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAtBN;AA0BE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AAxBJ;AA0BI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AAxBN;AA0BM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAxBR;AA0BQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AAxBV;AA4BM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AA1BR;AA4BQ;EACE,iBAAA;AA1BV;AA+BI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AA7BN;;AAkCA;EACE,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;AA/BF;AAiCE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,wFAAA;EACA,qBAAA;AA/BJ;AAiCI;EACE,WAAA;EACA,iBAAA;EACA,oBAAA;AA/BN;AAkCI;EACE,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;AAhCN;AAoCE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4EAAA;EACA,qBAAA;AAlCJ;AAoCI;EACE,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAlCN;AAsCE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AApCJ;AAsCI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AApCN;AAsCM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AApCR;AAsCQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AApCV;AAwCM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AAtCR;AAwCQ;EACE,iBAAA;AAtCV;AA2CI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAzCN;;AA8CA;EACE,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;AA3CF;AA6CE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,wFAAA;EACA,qBAAA;AA3CJ;AA6CI;EACE,WAAA;EACA,iBAAA;EACA,oBAAA;AA3CN;AA8CI;EACE,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;AA5CN;AAgDE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4EAAA;EACA,qBAAA;AA9CJ;AAgDI;EACE,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AA9CN;AAkDE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AAhDJ;AAkDI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AAhDN;AAkDM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAhDR;AAkDQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AAhDV;AAoDM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AAlDR;AAoDQ;EACE,iBAAA;AAlDV;AAuDI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AArDN;;AA0DA;EACE,WAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;AAvDF;AAyDE;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;EACA,wFAAA;EACA,qBAAA;AAvDJ;AAyDI;EACE,WAAA;EACA,iBAAA;EACA,oBAAA;AAvDN;AA0DI;EACE,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,eAAA;AAxDN;AA4DE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,4EAAA;EACA,qBAAA;AA1DJ;AA4DI;EACE,uBAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AA1DN;AA8DE;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,4EAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;EACA,qBAAA;AA5DJ;AA8DI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,kBAAA;AA5DN;AA8DM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AA5DR;AA8DQ;EACE,uBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;AA5DV;AAgEM;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;AA9DR;AAgEQ;EACE,iBAAA;AA9DV;AAmEI;EACE,mBAAA;EACA,YAAA;EACA,cAAA;EACA,mBAAA;EACA,8IAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAjEN;;AAuEA;EACE;IACE,aAAA;EApEF;EAsEA;IACE,cAAA;EApEF;AACF;AAuEA;EACE,cAAA;AArEF;;AAwEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,kBAAA;AArEF;AAuEE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,QAAA;EACA,kBAAA;AArEJ;AAuEI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;AArEN;AAuEM;EACE,cAAA;EACA,gBAAA;AArER;AAyEI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,uBAAA;EACA,QAAA;AAvEN;AA0EM;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kDAAA;EACA,gCAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;AAxER;AA0EQ;EACE,cAAA;EACA,cAAA;EACA,gCAAA;AAxEV;AA2EQ;EACE,cAAA;EACA,gBAAA;EACA,gCAAA;AAzEV;AA6EM;EACE,mDAAA;AA3ER;AA6EQ;EACE,6BAAA;AA3EV;AA8EQ;EACE,6BAAA;AA5EV;AAgFM;EACE,kDAAA;AA9ER;AAgFQ;EACE,4BAAA;AA9EV;AAiFQ;EACE,4BAAA;AA/EV;AAmFM;EACE,kDAAA;AAjFR;AAmFQ;EACE,4BAAA;AAjFV;AAoFQ;EACE,4BAAA;AAlFV;AAsFM;EACE,mDAAA;AApFR;AAsFQ;EACE,6BAAA;AApFV;AAuFQ;EACE,6BAAA;AArFV;AA0FI;EACE;gBAAA;EAEA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,gBAAA;AAxFN;AA0FM;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,gCAAA;EACA,UAAA;EACA,eAAA;AAxFR;AA2FM;EACE,YAAA;AAzFR;AA4FM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;AA1FR;AA4FQ;EACE,oBAAA;EACA,wCAAA;EACA,sBAAA;EACA,wBAAA;AA1FV;AA4FU;EACE,gBAAA;AA1FZ;AA6FU;EACE,kBAAA;EACA,qBAAA;EACA,0DAAA;EACA,gCAAA;AA3FZ;AAiGI;EACE;gBAAA;EAEA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,gBAAA;EACA,QAAA;AA/FN;AAiGM;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,gCAAA;EACA,UAAA;EACA,eAAA;AA/FR;AAkGM;EACE,YAAA;AAhGR;AAmGM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EACA,mBAAA;EACA,mBAAA;EACA,4DAAA;EAEA,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAlGR;AAoGQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;EACA,gCAAA;EACA,2BAAA;EACA,kBAAA;AAlGV;AAoGU;EACE,WAAA;EACA,YAAA;AAlGZ;AAoGY;EACE,WAAA;EACA,YAAA;AAlGd;AAoGc;EACE,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,cAAA;EACA,6CAAA;AAlGhB;AAuGU;EACE,gBAAA;EACA,cAAA;EACA,6CAAA;AArGZ;AAwGU;EACE;IACE,sCAAA;EAtGZ;EAyGU;IACE,cAAA;EAvGZ;AACF;AA2GQ;EACE,mBAAA;AAzGV;AA4GQ;EACE,SAAA;EACA,UAAA;EACA,mBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,UAAA;EACA,iBAAA;AA1GV;AA4GU;EACE,WAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AA1GZ;AA4GY;EACE,uBAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;AA1Gd;AA6GY;EACE,kBAAA;EACA,SAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;AA3Gd;AA+GU;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;AA7GZ;AA+GY;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,mBAAA;AA7Gd;AAgHY;EACE,cAAA;AA9Gd;AAiHY;EACE,WAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;AA/Gd;AAqHM;EACE,oCAAA;EACA,yBAAA;EACA,cAAA;EACA,kBAAA;EACA,kBAAA;AAnHR;AAuHI;EACE;gBAAA;EAEA,SAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,gBAAA;EACA,QAAA;AArHN;AAuHM;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,gCAAA;EACA,UAAA;EACA,eAAA;AArHR;AAwHM;EACE,YAAA;AAtHR;AAyHM;EACE,WAAA;EACA,YAAA;EACA,mDAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,kBAAA;AAvHR;AAyHQ;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,QAAA;EACA,YAAA;EACA,0DAAA;EACA,2BAAA;AAvHV;AAyHU;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;EACA,QAAA;AAvHZ;AAyHY;EACE,UAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,UAAA;AAvHd;AAyHc;EACE,uBAAA;EACA,qBAAA;EACA,gBAAA;EACA,wCAAA;EACA,gBAAA;AAvHhB;AA6Hc;EACE,UAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;EACA,0DAAA;AA3HhB;AA6HgB;EACE,cAAA;EACA,gCAAA;AA3HlB;AAiIgB;EACE,WAAA;AA/HlB;AAqIU;EACE,gBAAA;EACA,WAAA;AAnIZ;AAuIQ;EACE,mBAAA;AArIV;AAyIM;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAvIR;AA0IM;EACE,mDAAA;EAEA,aAAA;AAzIR;AA6II;EACE;gBAAA;EAEA,SAAA;EACA,UAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gCAAA;EACA,gBAAA;EACA,QAAA;AA3IN;AA6IM;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,cAAA;EACA,gCAAA;EACA,UAAA;EACA,eAAA;AA3IR;AA8IM;EACE,YAAA;AA5IR;AA+IM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,4DAAA;EACA,kBAAA;AA7IR;AA+IQ;EACE,gBAAA;EACA,iBAAA;EACA,WAAA;AA7IV;AAgJQ;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA9IV;AAgJU;EACE,mDAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AA9IZ;AAkJQ;EACE,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AAhJV;AAkJU;EACE,gBAAA;EACA,iBAAA;EACA,WAAA;AAhJZ;AAmJU;EACE,qBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gCAAA;EACA,cAAA;AAjJZ;AAoJU;EACE,WAAA;EACA,0BAAA;AAlJZ;;AA0JA;EACE;IACE,aAAA;EAvJF;EA0JA;IACE,aAAA;EAxJF;AACF;AA2JA;EACE,aAAA;EACA,6BAAA;EACA,aAAA;AAzJF;;AA4JA;EACE,iDAAA;EAEA,aAAA;AA1JF","sourcesContent":["//@import url(\"../../../theme/variables.scss\");\n\nion-button {\n  --box-shadow: transparent !important;\n}\n\nbutton {\n  background-color: transparent !important;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  display: inline-block;\n}\n\nion-searchbar {\n  --icon-color: #1ca3c9;\n  width: 95%;\n  margin-left: 10px;\n}\n\n.search-container {\n  width: 90vw;\n  right: 5vw;\n  height: auto;\n  max-height: 50vh;\n  overflow-y: scroll;\n  position: absolute;\n  z-index: 99;\n}\n\n.line-filter {\n  text-align: center;\n  line-height: 20px;\n  background: #70c2d1;\n  padding: 0;\n  margin: 0;\n}\n\n.header-md::after {\n  display: none;\n}\n\n.container {\n  height: 100%;\n  background-color: var(--ion-color-primary);\n  display: grid;\n  justify-items: center;\n}\n\n.content {\n  position: absolute;\n  bottom: 0;\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 75%;\n  border-radius: 4em 4em 0 0;\n  box-shadow: 0px -14px 12px 6px rgb(0 0 0 / 20%);\n}\n\n.name {\n  font-weight: bold;\n}\n\n.mail {\n  font-weight: 100;\n  margin-top: 1em;\n}\n.info-container {\n  background-color: white;\n  width: 88%;\n  margin: 7em 5%;\n  height: auto;\n  border-radius: 1em;\n  border: 1px solid var(--ion-color-medium);\n  p {\n    color: black;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: center;\n  }\n}\n\nion-avatar {\n  position: absolute;\n  width: 10em;\n  height: 10em;\n  margin: 0 30vw;\n  bottom: 65vh;\n  z-index: 10;\n  border: 10px solid var(--ion-color-light);\n  box-shadow: 0px -14px 12px 6px rgb(0 0 0 / 20%);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n.header-translucent-ios ion-toolbar {\n  --opacity: 1;\n}\n\n\n\n\n\n.perfil{\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n  background-color: #fff;\n  opacity: 0.8;\n\n  .btn{\n    width: 70%;\n    height: 3rem;\n    background: #128ab6;\n    color: #fff;\n    border-radius: 5rem;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: .8rem;\n    margin: 1.5rem 0rem;\n    position: relative;\n\n    ion-icon{\n      font-size: 1.8rem;\n    }\n\n    p{\n      font-size: 1.1rem;\n      font-weight: lighter;\n      margin-left: 1rem;\n    }\n\n    .shadow{\n      width: 80%;\n      height: .6rem;\n      background: rgba(0, 0, 0, 0.152);\n      position: absolute;\n      bottom: -.6rem;\n      left: 10%;\n      backdrop-filter: blur(1px);\n      border-radius: 0rem 0rem .4rem .4rem;\n      box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;\n    }\n  }\n}\n\n.historial{\n  width: 100%;\n  height: 100%;\n  background: rgb(237, 237, 237);\n  position: fixed;\n  top: 3.5rem;\n  overflow-y: scroll;\n  padding-bottom: 3rem;\n  opacity: 0;\n  z-index: -1;\n  transition: all 2s;\n\n  .volver{\n    background: #1ed5cc;\n    width: 6rem;\n    height: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    left: .5rem;\n    top: 8rem;\n    z-index: 10;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    border-radius: .5rem;\n\n    ion-icon{\n      color: #fff;\n      font-size: 1.5rem;\n      margin-right: .4rem;\n    }\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: #fff;\n      font-size: 1rem;\n    }\n  }\n\n  .titled{\n    width: 100%;\n    height: 5rem;\n    background: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 0rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    margin-bottom: .5rem;\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: rgb(107, 107, 107);\n      font-size: 1rem;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n\n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n\n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n\n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n\n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n\n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n}\n\n.inps{\n  width: 100%;\n  height: 2.5rem;\n  background: none;\n  text-indent: 1rem;\n  border-radius: 5rem;\n  border: 1px solid #33a1c3;\n  margin-bottom: .5rem;\n}\n\n.inps:focus{\n  outline: none;\n}\n\n.selict{\n  width: 100%;\n  height: 2.5rem;\n  background: none;\n  padding: 0rem 1rem;\n  border-radius: .5rem;\n  border: 1px solid #33a1c3;\n  margin-bottom: .5rem;\n}\n\n.selict:focus{\n  outline: none;\n}\n\n.informacion{\n  width: 100%;\n  height: 100%;\n  background: rgb(237, 237, 237);\n  position: fixed;\n  top: 3.5rem;\n  overflow-y: scroll;\n  padding-bottom: 3rem;\n  opacity: 0;\n  z-index: -1;\n  transition: all 2s;\n\n  .volver{\n    background: #1ed5cc;\n    width: 6rem;\n    height: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    left: .5rem;\n    top: 8rem;\n    z-index: 10;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    border-radius: .5rem;\n\n    ion-icon{\n      color: #fff;\n      font-size: 1.5rem;\n      margin-right: .4rem;\n    }\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: #fff;\n      font-size: 1rem;\n    }\n  }\n\n  .titled{\n    width: 100%;\n    height: 5rem;\n    background: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 0rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    margin-bottom: .5rem;\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: rgb(107, 107, 107);\n      font-size: 1rem;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n\n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n\n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n\n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n\n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n\n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n}\n\n.direccion{\n  width: 100%;\n  height: 100%;\n  background: rgb(237, 237, 237);\n  position: fixed;\n  top: 3.5rem;\n  overflow-y: scroll;\n  padding-bottom: 3rem;\n  opacity: 0;\n  z-index: -1;\n  transition: all 2s;\n\n  .volver{\n    background: #1ed5cc;\n    width: 6rem;\n    height: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    left: .5rem;\n    top: 8rem;\n    z-index: 10;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    border-radius: .5rem;\n\n    ion-icon{\n      color: #fff;\n      font-size: 1.5rem;\n      margin-right: .4rem;\n    }\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: #fff;\n      font-size: 1rem;\n    }\n  }\n\n  .titled{\n    width: 100%;\n    height: 5rem;\n    background: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 0rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    margin-bottom: .5rem;\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: rgb(107, 107, 107);\n      font-size: 1rem;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n\n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n\n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n\n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n\n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n\n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n}\n\n.lidepuntos{\n  width: 100%;\n  height: 100%;\n  background: rgb(237, 237, 237);\n  position: fixed;\n  top: 3.5rem;\n  overflow-y: scroll;\n  padding-bottom: 3rem;\n  opacity: 0;\n  z-index: -1;\n  transition: all 2s;\n\n  .volver{\n    background: #1ed5cc;\n    width: 6rem;\n    height: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    left: .5rem;\n    top: 8rem;\n    z-index: 10;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    border-radius: .5rem;\n\n    ion-icon{\n      color: #fff;\n      font-size: 1.5rem;\n      margin-right: .4rem;\n    }\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: #fff;\n      font-size: 1rem;\n    }\n  }\n\n  .titled{\n    width: 100%;\n    height: 5rem;\n    background: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 0rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    margin-bottom: .5rem;\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: rgb(107, 107, 107);\n      font-size: 1rem;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n\n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n\n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n\n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n\n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n\n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n}\n\n.direccion2{\n  width: 100%;\n  height: 100%;\n  background: rgb(237, 237, 237);\n  position: fixed;\n  top: 3.5rem;\n  overflow-y: scroll;\n  padding-bottom: 3rem;\n  opacity: 0;\n  z-index: -1;\n  transition: all 2s;\n\n  .volver{\n    background: #1ed5cc;\n    width: 6rem;\n    height: 2rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    left: .5rem;\n    top: 8rem;\n    z-index: 10;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;\n    border-radius: .5rem;\n\n    ion-icon{\n      color: #fff;\n      font-size: 1.5rem;\n      margin-right: .4rem;\n    }\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: #fff;\n      font-size: 1rem;\n    }\n  }\n\n  .titled{\n    width: 100%;\n    height: 5rem;\n    background: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 0rem 2rem;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    margin-bottom: .5rem;\n\n    p{\n      margin-block-start: 0em;\n      margin-block-end: 0em;\n      color: rgb(107, 107, 107);\n      font-size: 1rem;\n    }\n  }\n\n  .compra{\n    width: 100%;\n    height: auto;\n    background: #fff;\n    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1.5rem 1rem;\n    margin-bottom: .5rem;\n\n    .info{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: flex-end;\n      position: relative;\n\n      .text{\n        width: 100%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        p{\n          margin-block-start: 0em;\n          margin-block-end: 0em;\n          font-size: 1rem;\n          color: rgb(107, 107, 107);\n        }\n      }\n\n      .icons{\n        width: 10%;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        right: 0;\n\n        ion-icon{\n          font-size: 2.2rem;\n        }\n      }\n    }\n\n    .ent{\n      background: #1ed5cc;\n      width: 12rem;\n      height: 2.5rem;\n      border-radius: 5rem;\n      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 1.5rem;\n    }\n  }\n}\n\n\n@media screen and (orientation: landscape) {\n  ion-avatar {\n    display: none;\n  }\n  .info-container {\n    margin: 3em 5%;\n  }\n}\n\nion-content{\n  display: block;\n}\n\n.perfilDesk{\n  width: 100%;\n  height: auto;\n  display: none;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow-y: scroll;\n\n  .perfilCont{\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 3em 0em;\n    gap: 2em;\n    position: relative;\n\n    .taitl-cont{\n      width: 100%;\n      height: auto;\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n\n      .taitl{\n        color: #00a3c7;\n        font-size: 1.7em;\n      }\n    }\n\n    .opts-cont{\n      width: 50em;\n      height: auto;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 2em;\n      //border: 1px solid red;\n      \n      .opt{\n        width: 20em;\n        height: 10em;\n        border-radius: 1em;\n        box-shadow: rgba(99, 99, 99, 0.35) 0px 2px 8px 0px;\n        transition: .3s all ease-in-out;\n        cursor: pointer;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 1em;\n\n        i{\n          color: #8b8b8b;\n          font-size: 4em;\n          transition: .3s all ease-in-out;\n        }\n\n        .opt-name{\n          color: #8b8b8b;\n          font-size: 1.2em;\n          transition: .3s all ease-in-out;\n        }\n      }\n\n      .opt:nth-child(1):hover{\n        box-shadow: rgba(0, 163, 197, 0.5) 0px 1px 12px 1px;\n\n        i{\n          color: rgba(0, 163, 197, 0.8);\n        }\n\n        .opt-name{\n          color: rgba(0, 163, 197, 0.8);\n        }\n      }\n\n      .opt:nth-child(2):hover{\n        box-shadow: rgba(0, 53, 197, 0.5) 0px 1px 12px 1px;\n\n        i{\n          color: rgba(0, 53, 197, 0.7);\n        }\n\n        .opt-name{\n          color: rgba(0, 53, 197, 0.7);\n        }\n      }\n\n      .opt:nth-child(3):hover{\n        box-shadow: rgba(43, 0, 197, 0.5) 0px 1px 12px 1px;\n\n        i{\n          color: rgba(43, 0, 197, 0.8);\n        }\n\n        .opt-name{\n          color: rgba(43, 0, 197, 0.8);\n        }\n      }\n\n      .opt:nth-child(4):hover{\n        box-shadow: rgba(135, 0, 197, 0.5) 0px 1px 12px 1px;\n\n        i{\n          color: rgba(135, 0, 197, 0.8);\n        }\n\n        .opt-name{\n          color: rgba(135, 0, 197, 0.8);\n        }\n      }\n    }\n\n    .infoDesk{\n      /*width: 100%;\n      height: 100%;*/\n      width: 0%;\n      height: 0%;\n      background-color: rgba(0, 163, 197, 1);\n      position: absolute;\n      padding: 3em 0em;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: .4s all ease-in-out;\n      overflow: hidden;\n\n      .closen{\n        position: absolute;\n        top: 1em;\n        right: 1em;\n        color: #fff;\n        font-size: 2em;\n        transition: .3s all ease-in-out;\n        opacity: 1;\n        cursor: pointer;\n      }\n\n      .closen:hover{\n        opacity: .6;\n      }\n\n      .compra{\n        width: 30em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1em;\n\n        .cont-opc{\n          padding: 0.4em 0.7em;\n          background-color: rgba(255, 255, 255, 0);\n          border: 2px solid #fff;\n          border-radius: 0.7em 0em;\n\n          ion-label{\n            font-size: .7em;\n          }\n\n          ion-input{\n            --padding-top: 5px;\n            --padding-bottom: 2px;\n            border-bottom: 1px solid #ffffff6b;\n            transition: .5s all ease-in-out;\n          }\n        }\n      }\n    }\n\n    .dirDesk{\n      /*width: 100%;\n      height: 100%;*/\n      width: 0%;\n      height: 0%;\n      background-color: rgba(0, 53, 197, 1);\n      position: absolute;\n      padding: 3em 0em;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: .4s all ease-in-out;\n      overflow: hidden;\n      gap: 2em;\n\n      .closen{\n        position: absolute;\n        top: 1em;\n        right: 1em;\n        color: #fff;\n        font-size: 2em;\n        transition: .3s all ease-in-out;\n        opacity: 1;\n        cursor: pointer;\n      }\n\n      .closen:hover{\n        opacity: .6;\n      }\n\n      .fix{\n        width: 30em;\n        height: 20em;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1em;\n        align-items: center;\n        background: #1135c0;\n        box-shadow:  41px 41px 82px #0e2da3,\n             -41px -41px 82px #143ddd;\n        border-radius: 1em;\n        padding: 1em;\n        overflow-y: scroll;\n        position: relative;\n\n        .compra{\n          width: 100%;\n          height: auto;\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: center;\n          gap: .7em;\n          border-bottom: 1px solid #ffffff;\n          border-bottom-style: dashed;\n          padding: 0.7em 1em;\n  \n          .info{\n            width: 100%;\n            height: auto;\n\n            .text{\n              width: 100%;\n              height: auto;\n              \n              p{\n                font-size: .9em;\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n                color: #00aaff;\n                animation: 1s parpcolor1 ease-in-out infinite;\n              }\n            }\n          }\n\n          .ent{\n            font-size: .7em;\n            color: #00aaff;\n            animation: 1s parpcolor1 ease-in-out infinite;\n          }\n\n          @keyframes parpcolor1{\n            0%,100%{\n              color: #00aaffad;\n            }\n\n            50%{\n              color: #00aaff;\n            }\n          }\n        }\n\n        .compra:last-child{\n          border-bottom: none;\n        }\n\n        .direccion2{\n          width: 0%;\n          height: 0%;\n          background: #1234bd;\n          position: absolute;\n          top: 0;\n          left: 0;\n          overflow-y: scroll;\n          transition: .2s all ease-in-out;\n          opacity: 1;\n          z-index: 1;\n          padding-bottom: 0;\n\n          .titled{\n            width: 100%;\n            height: 4em;\n            background: #1234bd;\n            position: relative;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n            padding: 0rem 2rem;\n            box-shadow: none;\n            margin-bottom: none;\n\n            p{\n              margin-block-start: 0em;\n              margin-block-end: 0em;\n              color: #00aaff;\n              font-size: .9em;\n            }\n\n            .closin{\n              position: absolute;\n              left: 1em;\n              color: #00aaff;\n              cursor: pointer;\n              font-size: 1.2em;\n            }\n          }\n\n          .contina{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: column;\n            justify-content: flex-start;\n            align-items: center;\n            gap: .7em;\n            padding: 0.7em 1em;\n\n            .inps{\n              width: 100%;\n              height: 2.4em;\n              background: none;\n              text-indent: 1rem;\n              border-radius: 5rem;\n              color: #00aaff;\n              border: 1px solid #00aaff;\n              margin-bottom: none;\n            }\n\n            .inps::placeholder{\n              color: #00aaff;\n            }\n\n            .selict{\n              width: 100%;\n              height: 2.4rem;\n              background: none;\n              padding: 0rem 1rem;\n              border-radius: 2em;\n              border: 1px solid #00aaff;\n              margin-bottom: none;\n              color: #00aaff;\n            }\n          }\n        }\n      }\n\n      button{\n        background-color: #1135c0!important;\n        border: 1px solid #00aaff;\n        color: #00aaff;\n        padding: 0.7em 2em;\n        border-radius: 2em;\n      }\n    }\n\n    .histDesk{\n      /*width: 100%;\n      height: 100%;*/\n      width: 0%;\n      height: 0%;\n      background-color: rgba(43, 0, 197, 1);\n      position: absolute;\n      padding: 3em 0em;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: .4s all ease-in-out;\n      overflow: hidden;\n      gap: 2em;\n\n      .closen{\n        position: absolute;\n        top: 1em;\n        right: 1em;\n        color: #fff;\n        font-size: 2em;\n        transition: .3s all ease-in-out;\n        opacity: 1;\n        cursor: pointer;\n      }\n\n      .closen:hover{\n        opacity: .6;\n      }\n\n      .contenHist{\n        width: 20em;\n        height: 25em;\n        border: 1px solid #ffffff29;\n        overflow-y: scroll;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: flex-start;\n        border-radius: 1em;\n\n        .compra{\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: center;\n          width: 100%;\n          height: auto;\n          gap: 1em;\n          padding: 1em;\n          border-bottom: 1px solid #ffffff54;\n          border-bottom-style: dashed;\n\n          .info{\n            width: 100%;\n            height: auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: flex-start;\n            align-items: flex-start;\n            gap: 1em;\n\n            .text{\n              width: 80%;\n              height: auto;\n              display: flex;\n              flex-direction: column;\n              justify-content: flex-start;\n              align-items: flex-start;\n              gap: 0.5em;\n\n              p{\n                margin-block-start: 0em;\n                margin-block-end: 0em;\n                font-size: .9em;\n                color: #ffffffc7;\n                font-weight: 100;\n              }\n            }\n\n            .icons{\n\n              button{\n                width: 3em;\n                height: 3em;\n                border-radius: 50%;\n                background: #3503c0;\n                box-shadow: 15px 15px 10px #2d03a3, -5px -5px 10px #3d03dd;\n\n                i{\n                  color: #6400ff;\n                  transition: .5s all ease-in-out;\n                }\n              }\n\n              button:hover{\n                \n                i{\n                  color: #fff;\n                }\n              }\n            }\n          }\n\n          .ent{\n            font-size: .9em;\n            color: #fff;\n          }\n        }\n\n        .compra:last-child{\n          border-bottom: none;\n        }\n      }\n\n      .contenHist::-webkit-scrollbar {\n        width: .35em;\n        background-color: transparent;\n        height: .7em;\n      }\n      \n      .contenHist::-webkit-scrollbar-thumb {\n        background-color: #ffffff79;\n        //border-radius: 1vh;\n        width: 0.25em;\n      }\n    }\n\n    .puntDesk{\n      /*width: 100%;\n      height: 100%;*/\n      width: 0%;\n      height: 0%;\n      background-color: rgba(135, 0, 197, 1);\n      position: absolute;\n      padding: 3em 0em;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: .4s all ease-in-out;\n      overflow: hidden;\n      gap: 2em;\n\n      .closen{\n        position: absolute;\n        top: 1em;\n        right: 1em;\n        color: #fff;\n        font-size: 2em;\n        transition: .3s all ease-in-out;\n        opacity: 1;\n        cursor: pointer;\n      }\n\n      .closen:hover{\n        opacity: .6;\n      }\n\n      .puntCont{\n        width: 25em;\n        height: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n        gap: 1em;\n        padding: 1em;\n        background: #8f09c0;\n        box-shadow: 41px 41px 82px #7a08a3, -41px -41px 82px #a40add;\n        border-radius: 2em;\n\n        .title{\n          font-weight: 100;\n          font-size: .95em;\n          color: #fff;\n        }\n\n        .conten{\n          width: 100%;\n          height: auto;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n\n          .ent{\n            border: 1px solid #ffffff29;\n            font-size: .9em;\n            color: #fff;\n            padding: 0.7em 2em;\n            border-radius: 3em;\n          }\n        }\n\n        .fin{\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: center;\n          width: 100%;\n          height: auto;\n          gap: 0.5em;\n\n          .txt{\n            font-weight: 100;\n            font-size: .75em;\n            color: #fff;\n          }\n\n          .linka{\n            text-decoration: none;\n            font-weight: 100;\n            font-size: 1.1em;\n            transition: .5s all ease-in-out;\n            color: #d559ff;\n          }\n\n          .linka:hover{\n            color: #fff;\n            text-decoration: underline;\n          }\n        }\n      }\n    }\n  }\n}\n\n@media(min-width: 992px){\n  .perfilDesk{\n    display: flex;\n  }\n\n  ion-content{\n    display: none;\n  }\n}\n\n.perfilDesk::-webkit-scrollbar {\n  width: .35em;\n  background-color: transparent;\n  height: .7em;\n}\n\n.perfilDesk::-webkit-scrollbar-thumb {\n  background-color: #00a2c779;\n  //border-radius: 1vh;\n  width: 0.25em;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15246:
/*!**********************************************************!*\
  !*** ./src/app/pages/perfil/perfil.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"perfilDesk\">\n  <app-desk-header style=\"width: 100%;\"></app-desk-header>\n  <div class=\"perfilCont\">\n    <div class=\"taitl-cont\">\n      <span class=\"taitl\">Mi cuenta</span>\n    </div>\n    <div class=\"opts-cont\">\n      <div class=\"opt\" (click)=\"infoDesk()\">\n        <i class=\"fa-solid fa-circle-user\"></i>\n        <span class=\"opt-name\">Información</span>\n      </div>\n      <div class=\"opt\" (click)=\"dirDesk()\">\n        <i class=\"fa-solid fa-location-dot\"></i>\n        <span class=\"opt-name\">Direcciones</span>\n      </div>\n      <div class=\"opt\" (click)=\"histDesk()\">\n        <i class=\"fa-solid fa-calendar-days\"></i>\n        <span class=\"opt-name\">Historial de pedidos</span>\n      </div>\n      <div class=\"opt\" (click)=\"puntDesk()\">\n        <i class=\"fa-solid fa-medal\"></i>\n        <span class=\"opt-name\">Lidepuntos</span>\n      </div>\n    </div>\n\n    <div class=\"infoDesk\" #info_Desk>\n      <i class=\"fa-solid fa-circle-xmark closen\" (click)=\"infoDesk()\"></i>\n      <div class=\"compra\" >\n          <div class=\"cont-opc\">\n            <ion-label position=\"floating\" >Nombre</ion-label>\n            <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"nombre\"></ion-input>\n          </div>\n          <div class=\"cont-opc\">\n            <ion-label position=\"floating\" >Apellidos</ion-label>\n            <ion-input  type=\"text\"name=\"apellido\" [(ngModel)]=\"apellido\"></ion-input>\n          </div>\n          <div class=\"cont-opc\">\n            <ion-label position=\"floating\" >RFC</ion-label>\n            <ion-input  type=\"text\" name=\"rfc\" [(ngModel)]=\"rfc\" class=\"custom-placeholder\" placeholder=\"Opcional, solo si se quiere factura\"></ion-input>\n          </div>\n          <div class=\"cont-opc\">\n              <ion-label position=\"floating\" >Correo Electrónico</ion-label>\n              <ion-input  type=\"email\" name=\"correo\" [(ngModel)]=\"correo\" disabled=\"true\"></ion-input>\n          </div>\n          <ion-button style=\"margin-top:15px ;\" expand=\"block\" (click)=\"actualizar()\">Actualizar</ion-button>\n      </div>\n    </div>\n\n    <div class=\"dirDesk\" #dir_Desk>\n      <i class=\"fa-solid fa-circle-xmark closen\" (click)=\"dirDesk()\"></i>\n      <div class=\"fix\">\n        <div class=\"compra\" *ngFor=\"let item of direcciones\">\n          <div class=\"info\">\n            <div class=\"text\">\n              <p>{{item.alias}}</p>\n              <p>{{item.address1}}</p>\n              <p>{{nombreEstado}} | {{item.city}} | {{item.colony}}</p>\n            </div>\n            <div class=\"icons\">\n              <!-- <ion-icon name=\"search-circle-outline\"></ion-icon>\n              <ion-icon name=\"refresh-circle-outline\"></ion-icon> -->\n            </div>\n          </div>\n          <div class=\"ent\">{{item.date_add}}</div>\n        </div>\n      \n        <div class=\"direccion2\" #agrega_Dir>\n          <div class=\"titled\">\n            <p>Ingresa la información de la nueva dirección</p>\n            <i class=\"fa-solid fa-circle-chevron-left closin\" (click)=\"agregaDir()\"></i>\n          </div>\n          <div class=\"contina\" >\n            <input class=\"form-control inps\" type=\"text\" [(ngModel)]=\"alias\" name=\"alias\" placeholder=\"Alias Dirección\" >\n            <input class=\"form-control inps\" type=\"text\" name=\"telefono\" [(ngModel)]=\"telefono\"   placeholder=\"Telefono\">\n            <input class=\"form-control inps\" type=\"text\" name=\"zipcode\"  [(ngModel)]=\"zipcode\"  (change)=\"accionesDireccion(zipcode, 'zipcode')\" placeholder=\"Código Postal\">\n            <input class=\"form-control inps\" type=\"text\" name=\"address1\" [(ngModel)]=\"address1\"  placeholder=\"Dirección\">\n            <input class=\"inps\" type=\"text\" name=\"address2\" [(ngModel)]=\"address2\" placeholder=\"Dirección Complementaria\">\n            <select class=\"selict\" name=\"id_country\" >\n              <option value=\"1\" >Selecciona tu País</option>\n              <option value=\"145\" selected>México</option>\n            </select>\n            <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estado\"   (change)=\"accionesDireccion(estado, 'state')\" >\n              <option value=\"\" selected>Provincia o Estado</option>\n              <option value=\"57\">Aguascalientes</option>\n              <option value=\"58\">Baja California</option>\n              <option value=\"59\">Baja California Sur</option>\n              <option value=\"60\">Campeche</option>\n              <option value=\"61\">Chiapas</option>\n              <option value=\"62\">Chihuahua</option>\n              <option value=\"63\">Coahuila</option>\n              <option value=\"64\">Colima</option>\n              <option value=\"65\">Distrito Federal</option>\n              <option value=\"66\">Durango</option>\n              <option value=\"67\">Guanajuato</option>\n              <option value=\"68\">Guerrero</option>\n              <option value=\"69\">Hidalgo</option>\n              <option value=\"70\">Jalisco</option>\n              <option value=\"71\">Estado de México</option>\n              <option value=\"72\">Michoacán</option>\n              <option value=\"73\">Morelos</option>\n              <option value=\"74\">Nayarit</option>\n              <option value=\"75\">Nuevo León</option>\n              <option value=\"76\">Oaxaca</option>\n              <option value=\"77\">Puebla</option>\n              <option value=\"78\">Querétaro</option>\n              <option value=\"79\">Quintana Roo</option>\n              <option value=\"80\">San Luis Potosí</option>\n              <option value=\"81\">Sinaloa</option>\n              <option value=\"82\">Sonora</option>\n              <option value=\"83\">Tabasco</option>\n              <option value=\"84\">Tamaulipas</option>\n              <option value=\"85\">Tlaxcala</option>\n              <option value=\"86\">Veracruz</option>\n              <option value=\"87\">Yucatán</option>\n              <option value=\"88\">Zacatecas</option>\n            </select>\n      \n            <select class=\"selict\" name=\"city\" [(ngModel)]=\"city\"    (change)=\"accionesDireccion(city, 'city')\" >\n              <option value=\"\" selected>Ciudad</option>\n            </select>\n      \n            <select class=\"selict\" name=\"colony\" [(ngModel)]=\"colony\"   (change)=\"accionesDireccion(colony,'colony')\" >\n              <option value=\"\" selected>Colonia</option>\n            </select>\n      \n            <button (click)=\"agregarDir()\">Agregar</button>\n          </div>\n        </div>\n      </div>\n      <button (click)=\"agregaDir()\">Agregar Dirección</button>\n    </div>\n\n    <div class=\"histDesk\" #hist_Desk>\n      <i class=\"fa-solid fa-circle-xmark closen\" (click)=\"histDesk()\"></i>\n      <div class=\"contenHist\">\n        <div class=\"compra\" *ngFor=\"let item of ordensitas\">\n          <div class=\"info\">\n            <div class=\"text\">\n              <p>{{item.salesOrderNumber}}</p>\n              <p>{{item.requestedShippingDate}}</p>\n              <p>{{item.paymentTermsName}}</p>\n            </div>\n            <div class=\"icons\">\n              <button [routerLink]=\"['/venta',item.salesOrderNumber]\"><i class=\"fa-solid fa-eye\"></i></button>\n            </div>\n          </div>\n          <div class=\"ent\">{{item.salesOrderStatus}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"puntDesk\" #punt_Desk>\n      <i class=\"fa-solid fa-circle-xmark closen\" (click)=\"puntDesk()\"></i>\n      <div class=\"puntCont\">\n        <span class=\"title\">Estos son los Lidepuntos actuales en tu cuenta:</span>\n        <div class=\"conten\">\n          <div class=\"ent\">{{totalpuntos}}</div>\n        </div>\n        <div class=\"fin\">\n          <span class=\"txt\">¿Deseas saber como obtener mas puntos?</span>\n          <a class=\"linka\" routerLink=\"/lidepuntos\">Click Aquí</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-desk-footer style=\"width: 100%;\"></app-desk-footer>\n</section>\n\n<ion-content [fullscreen]=\"true\" style=\"position: relative; --padding-top: 4em;\">\n\n  <div class=\"perfil\" >\n    <div class=\"btn\" (click)=\"informacione()\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n      <p>Información</p>\n    </div>\n    <div class=\"btn\" (click)=\"direccione()\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"location-outline\"></ion-icon>\n      <p>Direcciones</p>\n    </div>\n    <div class=\"btn\" (click)=\"historiale()\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <p>Historial de pedidos</p>\n    </div>\n    <div class=\"btn\" (click)=\"Lidepunte()\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n      <p>Lidepuntos</p>\n    </div>\n    <!-- <div class=\"btn\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"receipt-outline\"></ion-icon>\n      <p>Recibos de crédito</p>\n    </div>\n    <div class=\"btn\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"pricetag-outline\"></ion-icon>\n      <p>Mis Vales</p>\n    </div>\n    <div class=\"btn\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"book-outline\"></ion-icon>\n      <p>Mis datos</p>\n    </div>\n    <div class=\"btn\">\n      <div class=\"shadow\"></div>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <p>My loyalty points</p>\n    </div> -->\n  </div>\n\n  <div class=\"historial\" #historial>\n    <div class=\"volver\" (click)=\" historiale()\">\n      <ion-icon name=\"return-up-back-outline\"></ion-icon>\n      <p>Volver</p>\n    </div>\n    <div class=\"titled\">\n      <p>Estos son los pedidos que han realizado desde que se creó tu cuenta:</p>\n    </div>\n    <div class=\"compra\" *ngFor=\"let item of ordensitas\">\n      <div class=\"info\">\n        <div class=\"text\">\n          <p>{{item.salesOrderNumber}}</p>\n          <p>{{item.requestedShippingDate}}</p>\n          <p>{{item.paymentTermsName}}</p>\n        </div>\n        <div class=\"icons\">\n          <ion-button [routerLink]=\"['/venta',item.salesOrderNumber]\">+</ion-button>\n        </div>\n      </div>\n      <div class=\"ent\">{{item.salesOrderStatus}}</div>\n    </div>\n  </div>\n\n\n\n  <div class=\"informacion\" #informacion>\n    <div class=\"volver\" (click)=\"informacione()\">\n      <ion-icon name=\"return-up-back-outline\"></ion-icon>\n      <p>Volver</p>\n    </div>\n    <div class=\"titled\">\n      <p>Esta es la información de tu cuenta:</p>\n    </div>\n    \n    <div class=\"compra\" >\n      <div style=\"margin-top:25px ; \">\n        <ion-item>\n          <ion-label position=\"floating\" >Nombre</ion-label>\n          <ion-input type=\"text\" name=\"nombre\" [(ngModel)]=\"nombre\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Apellidos</ion-label>\n          <ion-input  type=\"text\"name=\"apellido\" [(ngModel)]=\"apellido\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >RFC</ion-label>\n          <ion-input  type=\"text\" name=\"rfc\" [(ngModel)]=\"rfc\" class=\"custom-placeholder\" placeholder=\"Opcional, solo si se quiere factura\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n            <ion-label position=\"floating\" >Correo Electrónico</ion-label>\n            <ion-input  type=\"email\" name=\"correo\" [(ngModel)]=\"correo\" disabled=\"true\"></ion-input>\n        </ion-item>\n        <ion-button style=\"margin-top:15px ;\" expand=\"block\" (click)=\"actualizar()\">Actualizar</ion-button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"direccion\" #direccion>\n    <div class=\"volver\" (click)=\"direccione()\">\n      <ion-icon name=\"return-up-back-outline\"></ion-icon>\n      <p>Volver</p>\n    </div>\n    <div class=\"titled\">\n      <p>Estos son las direcciones de tu cuenta:</p>\n    </div>\n    <div class=\"compra\" *ngFor=\"let item of direcciones\">\n      <div class=\"info\">\n        <div class=\"text\">\n          <p>{{item.alias}}</p>\n          <p>{{item.address1}}</p>\n          <p>{{nombreEstado}} | {{item.city}} | {{item.colony}}</p>\n        </div>\n        <div class=\"icons\">\n          <!-- <ion-icon name=\"search-circle-outline\"></ion-icon>\n          <ion-icon name=\"refresh-circle-outline\"></ion-icon> -->\n        </div>\n      </div>\n      <div class=\"ent\">{{item.date_add}}</div>\n    </div>\n      <ion-button expand=\"block\" (click)=\"direccione2()\">Agregar Dirección</ion-button>\n  </div>\n\n  <div class=\"direccion2\" #direccion2>\n    <div class=\"volver\" (click)=\" quita()\">\n      <ion-icon name=\"return-up-back-outline\"></ion-icon>\n      <p>Volver</p>\n    </div>\n    <div class=\"titled\">\n      <p>Ingresa la información de la nueva dirección</p>\n    </div>\n    <div class=\"compra\" >\n      <input class=\"form-control inps\" type=\"text\" [(ngModel)]=\"alias\" name=\"alias\" placeholder=\"Alias Dirección\" >\n      <input class=\"form-control inps\" type=\"text\" name=\"telefono\" [(ngModel)]=\"telefono\"   placeholder=\"Telefono\">\n      <input class=\"form-control inps\" type=\"text\" name=\"zipcode\"  [(ngModel)]=\"zipcode\"  (change)=\"accionesDireccion(zipcode, 'zipcode')\" placeholder=\"Código Postal\">\n      <input class=\"form-control inps\" type=\"text\" name=\"address1\" [(ngModel)]=\"address1\"  placeholder=\"Dirección\">\n      <input class=\"inps\" type=\"text\" name=\"address2\" [(ngModel)]=\"address2\" placeholder=\"Dirección Complementaria\">\n      <select class=\"selict\" name=\"id_country\" >\n        <option value=\"1\" >Selecciona tu País</option>\n       \n        <option value=\"145\" selected>México</option>\n      </select>\n      <select class=\"selict\" name=\"id_state\" [(ngModel)]=\"estado\"   (change)=\"accionesDireccion(estado, 'state')\" >\n        <option value=\"\" selected>Provincia o Estado</option>\n        <option value=\"57\">Aguascalientes</option>\n        <option value=\"58\">Baja California</option>\n        <option value=\"59\">Baja California Sur</option>\n        <option value=\"60\">Campeche</option>\n        <option value=\"61\">Chiapas</option>\n        <option value=\"62\">Chihuahua</option>\n        <option value=\"63\">Coahuila</option>\n        <option value=\"64\">Colima</option>\n        <option value=\"65\">Distrito Federal</option>\n        <option value=\"66\">Durango</option>\n        <option value=\"67\">Guanajuato</option>\n        <option value=\"68\">Guerrero</option>\n        <option value=\"69\">Hidalgo</option>\n        <option value=\"70\">Jalisco</option>\n        <option value=\"71\">Estado de México</option>\n        <option value=\"72\">Michoacán</option>\n        <option value=\"73\">Morelos</option>\n        <option value=\"74\">Nayarit</option>\n        <option value=\"75\">Nuevo León</option>\n        <option value=\"76\">Oaxaca</option>\n        <option value=\"77\">Puebla</option>\n        <option value=\"78\">Querétaro</option>\n        <option value=\"79\">Quintana Roo</option>\n        <option value=\"80\">San Luis Potosí</option>\n        <option value=\"81\">Sinaloa</option>\n        <option value=\"82\">Sonora</option>\n        <option value=\"83\">Tabasco</option>\n        <option value=\"84\">Tamaulipas</option>\n        <option value=\"85\">Tlaxcala</option>\n        <option value=\"86\">Veracruz</option>\n        <option value=\"87\">Yucatán</option>\n        <option value=\"88\">Zacatecas</option>\n       \n      </select>\n\n      <select class=\"selict\" name=\"city\" [(ngModel)]=\"city\"    (change)=\"accionesDireccion(city, 'city')\" >\n        <option value=\"\" selected>Ciudad</option>\n        \n      </select>\n\n      <select class=\"selict\" name=\"colony\" [(ngModel)]=\"colony\"   (change)=\"accionesDireccion(colony,'colony')\" >\n        <option value=\"\" selected>Colonia</option>\n      </select>\n      <!-- <div style=\"margin-top:25px ; \">\n        <ion-item>\n          <ion-label position=\"floating\" >Alias</ion-label>\n          <ion-input type=\"text\" name=\"alias\" [(ngModel)]=\"alias\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Nombre</ion-label>\n          <ion-input  type=\"text\"name=\"nombre\" [(ngModel)]=\"nombreDir\"></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\" >Apellidos</ion-label>\n          <ion-input  type=\"text\" name=\"apellido\" [(ngModel)]=\"apellidoDir\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Empresa</ion-label>\n          <ion-input  type=\"text\" name=\"empresa\" [(ngModel)]=\"empresa\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Telefono</ion-label>\n          <ion-input  type=\"text\" name=\"telefono\" [(ngModel)]=\"telefono\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Código Postal</ion-label>\n          <ion-input  type=\"text\" name=\"cp\" [(ngModel)]=\"cp\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Dirección</ion-label>\n          <ion-input  type=\"text\" name=\"address1\" [(ngModel)]=\"address1\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Dirección Complementaria</ion-label>\n          <ion-input  type=\"text\" name=\"address2\" [(ngModel)]=\"address2\" placeholder=\"Opcional\"></ion-input>\n        </ion-item> -->\n    \n\n        <ion-button style=\"margin-top:15px ;\" expand=\"block\" (click)=\"agregarDir()\">Agregar</ion-button>\n      \n    </div>\n\n  </div>\n\n  <div class=\"lidepuntos\" #lidepuntos>\n    <div class=\"volver\" (click)=\" Lidepunte()\">\n      <ion-icon name=\"return-up-back-outline\"></ion-icon>\n      <p>Volver</p>\n    </div>\n    <div class=\"titled\">\n      <p>Estos son los Lidepuntos actuales en tu cuenta:</p>\n    </div>\n    <div class=\"compra\">\n      <div class=\"info\">\n        <div class=\"text\">\n            \n        </div>\n        <div class=\"icons\">\n    \n        </div>\n      </div>\n      <div class=\"ent\">{{totalpuntos}}</div>\n    </div>\n    <div class=\"titled\">\n    <p>¿Deseas saber como obtener mas puntos?</p>\n    <ion-button style=\"margin-top:15px ;\" expand=\"block\" routerLink=\"/lidepuntos\">Click Aquí</ion-button>\n  </div>\n  </div>\n\n</ion-content>\n\n<!--\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"txtBuscador != ''\">\n    <p class=\"line-filter\">{{numeroResultados}} productos encontrados</p>\n    \n    <div class=\"search-container\">\n      <ion-item\n        button\n        (click)=\"openModal(producto.item.id_product)\"\n        *ngFor=\"let producto of resultadoBusqueda\"\n      >\n        <ion-thumbnail slot=\"start\">\n          <img src=\"https://lideart.com.mx/{{producto.item.image_link}}\" />\n        </ion-thumbnail>\n        <ion-label>\n          <h3>{{producto.item.nombre}}</h3>\n          <p>\n            <span style=\"font-weight: lighter\">\n              SKU: {{producto.item.sku[0]}}\n            </span>\n          </p>\n          <b>${{producto.item.precio | number}}</b>\n        </ion-label>\n        <ion-icon name=\"eye\" style=\"color: #70c2d1\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </div>\n  </div>\n  <div class=\"container\">\n    <ion-avatar>\n    <img src=\"/assets/img/lideart_logo.png\">\n    </ion-avatar>\n    <div class=\"content\">\n      <div class=\"info-container\">\n        <p class=\"name\">Luis Valladolid</p>\n        <p class=\"mail\">sistemas18@avanceytec.com.mx</p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n-->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil_perfil_module_ts.js.map
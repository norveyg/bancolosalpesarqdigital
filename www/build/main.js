webpackJsonp([5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingresa_info_ingresa_info__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioPage');
    };
    InicioPage.prototype.gotoContinue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ingresa_info_ingresa_info__["a" /* IngresaInfoPage */]);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"F:\ionic\banco\src\pages\inicio\inicio.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Banco de Los Alpes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <div text-center>\n      <h2>Bienvenido!</h2>\n      <h2 style="font-size:40px;color:green">Jorge</h2>\n      <h2>Correo registrado:</h2>\n      <h2>jorge@gmail.com</h2>\n    </div>\n    </ion-item>\n  \n  <p></p>\n  <ion-item>\n  <div text-center>   \n    <h2>Ingresa tu información</h2>\n    <h2>financiera mensual actual:</h2>\n  </div>\n  </ion-item>\n\n<ion-item>\n  <ion-label fixed>Ingresos</ion-label>\n  <ion-input type="text" value=""></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label fixed>Egresos</ion-label>\n  <ion-input type="text"></ion-input>\n</ion-item>  \n\n<button ion-button block (click)="gotoContinue()">Continuar>></button>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic\banco\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResumenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResumenPage = /** @class */ (function () {
    function ResumenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Adquirir vivienda' },
            { data: [58, 48, 40, 19, 86, 27, 90], label: 'Comprar vehiculo' },
            { data: [38, 48, 77, 9, 100, 27, 40], label: 'Viajar' },
            { data: [20, 35, 67, 22, 60, 17, 30], label: 'Estudiar' },
            { data: [44, 66, 22, 15, 45, 66, 30], label: 'Otros' }
        ];
        this.lineChartLabels = ['2019', '2020', '2021', '2022', '2023'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(43,43,43,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ResumenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResumenPage');
    };
    ResumenPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ResumenPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ResumenPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ResumenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-resumen',template:/*ion-inline-start:"F:\ionic\banco\src\pages\resumen\resumen.html"*/'<!--\n  Generated template for the ResumenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Proyección de gastos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <div text-center>\n          <h2>Tus opciones de cumplir lo que deseas</h2>\n          <h2>en los proximos 5 años son:</h2>\n        </div>\n        </ion-item>\n\n        <ion-item>\n            <div text-left>\n              <h2>Adquirir vivienda: </h2>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>50%</p>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>No Acepatdo</p>\n              <h2>Comprar vehiculo:</h2>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>38%</p>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>No Acepatdo</p>\n              <h2>Viajar: </h2>\n              <p style="font-weight: bold; font-size: 20px; color: green;" absolute-drag>65%</p>\n              <p style="font-weight: bold; font-size: 20px; color: green;" absolute-drag>Aceptado</p>\n              <h2>Estudiar:</h2>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>35%</p>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>No Acepatdo</p>\n              <h2>Otros: </h2>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>22%</p>\n              <p style="font-weight: bold; font-size: 20px; color: red;" absolute-drag>No Acepatdo</p>\n \n            </div>\n            </ion-item>\n\n    <div class="row">\n      <div class="col-md-6">\n        <div style="display: block;">\n        <canvas baseChart width="300" height="400"\n                    [datasets]="lineChartData"\n                    [labels]="lineChartLabels"\n                    [options]="lineChartOptions"\n                    [colors]="lineChartColors"\n                    [legend]="lineChartLegend"\n                    [chartType]="lineChartType"\n                    (chartHover)="chartHovered($event)"\n                    (chartClick)="chartClicked($event)"></canvas>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"F:\ionic\banco\src\pages\resumen\resumen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ResumenPage);
    return ResumenPage;
}());

//# sourceMappingURL=resumen.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ingresa_info_ingresa_info__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.gotoContinue = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ingresa_info_ingresa_info__["a" /* IngresaInfoPage */]);
    };
    LoginPage.prototype.mostrarMensaje = function () {
        var alert = this.alertCtrl.create({
            title: 'Registro Exitoso!',
            subTitle: 'Ya puedes comenzar a usar la aplicación!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"F:\ionic\banco\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Banco de Los Alpes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <div text-center>\n      <h2>Ingresa tu informaciòn:</h2>\n    </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label text-wrap># Identificación</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Nombres</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Dirección</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Ciudad</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Telefono</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>  \n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>  \n  \n  <ion-item>\n    <ion-label fixed>Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label text-wrap>Confirmar Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n<button ion-button block (click)="mostrarMensaje()">Guardar Registro</button>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic\banco\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ingresa-info/ingresa-info.module": [
		460,
		4
	],
	"../pages/inicio/inicio.module": [
		458,
		3
	],
	"../pages/login/login.module": [
		459,
		2
	],
	"../pages/opciones/opciones.module": [
		461,
		0
	],
	"../pages/resumen/resumen.module": [
		462,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_ingresa_info_ingresa_info__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_resumen_resumen__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ingresa_info_ingresa_info__["a" /* IngresaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ingresa-info/ingresa-info.module#IngresaInfoPageModule', name: 'IngresaInfoPage', segment: 'ingresa-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opciones/opciones.module#OpcionesPageModule', name: 'OpcionesPage', segment: 'opciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resumen/resumen.module#ResumenPageModule', name: 'ResumenPage', segment: 'resumen', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_ingresa_info_ingresa_info__["a" /* IngresaInfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_resumen_resumen__["a" /* ResumenPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 215,
	"./af.js": 215,
	"./ar": 216,
	"./ar-dz": 217,
	"./ar-dz.js": 217,
	"./ar-kw": 218,
	"./ar-kw.js": 218,
	"./ar-ly": 219,
	"./ar-ly.js": 219,
	"./ar-ma": 220,
	"./ar-ma.js": 220,
	"./ar-sa": 221,
	"./ar-sa.js": 221,
	"./ar-tn": 222,
	"./ar-tn.js": 222,
	"./ar.js": 216,
	"./az": 223,
	"./az.js": 223,
	"./be": 224,
	"./be.js": 224,
	"./bg": 225,
	"./bg.js": 225,
	"./bm": 226,
	"./bm.js": 226,
	"./bn": 227,
	"./bn.js": 227,
	"./bo": 228,
	"./bo.js": 228,
	"./br": 229,
	"./br.js": 229,
	"./bs": 230,
	"./bs.js": 230,
	"./ca": 231,
	"./ca.js": 231,
	"./cs": 232,
	"./cs.js": 232,
	"./cv": 233,
	"./cv.js": 233,
	"./cy": 234,
	"./cy.js": 234,
	"./da": 235,
	"./da.js": 235,
	"./de": 236,
	"./de-at": 237,
	"./de-at.js": 237,
	"./de-ch": 238,
	"./de-ch.js": 238,
	"./de.js": 236,
	"./dv": 239,
	"./dv.js": 239,
	"./el": 240,
	"./el.js": 240,
	"./en-au": 241,
	"./en-au.js": 241,
	"./en-ca": 242,
	"./en-ca.js": 242,
	"./en-gb": 243,
	"./en-gb.js": 243,
	"./en-ie": 244,
	"./en-ie.js": 244,
	"./en-il": 245,
	"./en-il.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./gu": 263,
	"./gu.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mn": 288,
	"./mn.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./mt": 292,
	"./mt.js": 292,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./tg": 319,
	"./tg.js": 319,
	"./th": 320,
	"./th.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./ug-cn": 327,
	"./ug-cn.js": 327,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-tw": 337,
	"./zh-tw.js": 337
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 438;

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"F:\ionic\banco\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\ionic\banco\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngresaInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resumen_resumen__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IngresaInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IngresaInfoPage = /** @class */ (function () {
    function IngresaInfoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    IngresaInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IngresaInfoPage');
    };
    IngresaInfoPage.prototype.gotoContinue1 = function () {
        var alert = this.alertCtrl.create({
            title: Math.random() + 'ALERTA!!!!!!',
            subTitle: 'Hemos detectado que estas en lista negra de datacredito. Debes corregir esto para continuar',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resumen_resumen__["a" /* ResumenPage */]);
    };
    IngresaInfoPage.prototype.gotoContinue = function () {
        if (Math.random() > 0.5) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resumen_resumen__["a" /* ResumenPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'ALERTA!!!!!!',
                subTitle: 'Hemos detectado que estas en lista negra de datacredito. Debes corregir esto para continuar',
                buttons: ['OK']
            });
            alert_1.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resumen_resumen__["a" /* ResumenPage */]);
        }
    };
    IngresaInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ingresa-info',template:/*ion-inline-start:"F:\ionic\banco\src\pages\ingresa-info\ingresa-info.html"*/'<!--\n  Generated template for the IngresaInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Banco de los Alpes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <div text-center>\n          <h2>Que es lo que mas deseas:</h2>\n        </div>\n        </ion-item>\n\n  <ion-item>\n    <ion-label>Adquirir Vivienda</ion-label>\n    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Comprar Vehiculo</ion-label>\n    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n  </ion-item>  \n\n  <ion-item>\n    <ion-label>Viajar</ion-label>\n    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Estudiar</ion-label>\n    <ion-checkbox color="dark" checked="false"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Otro Cual?</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="gotoContinue()">Continuar>></button>\n\n</ion-content>\n'/*ion-inline-end:"F:\ionic\banco\src\pages\ingresa-info\ingresa-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], IngresaInfoPage);
    return IngresaInfoPage;
}());

//# sourceMappingURL=ingresa-info.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotoRegistro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.gotoInicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"F:\ionic\banco\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        Banco de Los Alpes\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n    <ion-item>\n      <div text-center>\n        <h2>Banco de Los Alpes</h2>\n        <p>Universidad de los Andes</p>\n      </div>\n      </ion-item>\n      <ion-item>\n      <p></p>\n      <div text-center>\n      <img  src="assets/imgs/banco.jpg">\n    </div>\n      <p></p>\n      </ion-item>\n  <ion-item>\n    <ion-label fixed>Usuario</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <button ion-button block (click)="gotoInicio()">Ingresar</button>\n  <button ion-button block (click)="gotoRegistro()">Registrate</button>\n  <div text-right>\n    <p>Desarrollado por: Norvey Gonzalez</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\ionic\banco\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map
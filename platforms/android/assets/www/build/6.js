webpackJsonp([6],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(284);
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
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authservice = authservice;
        this.credentials = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signin = function () {
        var _this = this;
        this.authservice.login(this.credentials).then(function (res) {
            if (!res.code)
                _this.navCtrl.setRoot('TabsPage');
            else
                alert(res);
        });
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.passwordreset = function () {
        this.navCtrl.push('PasswordresetPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\proyecto\src\pages\login\login.html"*/'<ion-header>\n\n\n\n\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="background">\n\n\n\n           <ion-slides>             \n\n                <ion-slide style="background-image: url(\'assets/imgs/fondo1.jpg\')">\n\n                  <p>Bienvenido Inicia sesion o registrate</p>\n\n                  <p>------------></p>\n\n                  <br>\n\n                  <img src="assets/imgs/logo.png">\n\n                </ion-slide>\n\n        \n\n                <ion-slide style="background-image: url(\'assets/imgs/fondo1.jpg\')">\n\n                    <h1>Iniciar Sesion</h1>\n\n                    \n\n                     \n\n                      <table>\n\n                          <tr>\n\n                              <td>\n\n                                   \n\n                              </td><td>\n\n                                  Usuario: \n\n                              </td>\n\n                              <td>\n\n                                  <ion-input type="email" placeholder="Email" [(ngModel)]="credentials.email"></ion-input>\n\n                              </td>\n\n                          </tr>\n\n                          <tr>\n\n                              <td>\n\n                                   \n\n                              </td>\n\n                              <td>\n\n                                  Contraseña:\n\n                              </td>\n\n                              <td>\n\n                                  <ion-input type="password" placeholder="Password" [(ngModel)]="credentials.password"></ion-input>\n\n                                  \n\n                              </td>\n\n                          </tr>\n\n\n\n                      </table><br>\n\n\n\n                      <table  align="center">\n\n                            <tr>\n\n                              <td >\n\n                                  <button ion-button block round outline color="light" (click)="signin()">Iniciar Sesión</button><br>\n\n                                  <br>\n\n                              </td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td >\n\n                                    <button ion-button clear full color="light" (click)="signup()">No tienes una cuenta? Regístrate</button>\n\n                                    \n\n                                </td>\n\n                            </tr>\n\n                            <tr>\n\n                                <td >\n\n                                    <button ion-button block round outline color="light" (click)="signup()">Registrate</button>\n\n                                </td>\n\n                            </tr>\n\n                      </table>\n\n                      \n\n                                     \n\n                    \n\n                </ion-slide>       \n\n        \n\n                <ion-slide style="background-image: url(\'assets/imgs/fondo1.jpg\')">\n\n                    <p>Chatea con tus amigos.</p>\n\n                    <br>\n\n                    <img src="assets/imgs/logo.png">\n\n                </ion-slide>\n\n\n\n            </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\proyecto\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
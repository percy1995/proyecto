webpackJsonp([6],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps__ = __webpack_require__(480);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__maps__["a" /* MapsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maps__["a" /* MapsPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__maps__["a" /* MapsPage */]
        ]
    })
], MapsModule);

//# sourceMappingURL=maps.module.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = (function () {
    function MapsPage(navCtrl, googleMaps) {
        this.navCtrl = navCtrl;
        this.googleMaps = googleMaps;
    }
    MapsPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapsPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: 43.0741904,
                    lng: -89.3809802 // default location
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            // Now you can use all methods safely.
            _this.getPosition();
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    MapsPage.prototype.getPosition = function () {
        var _this = this;
        this.map.getMyLocation()
            .then(function (response) {
            _this.map.moveCamera({
                target: response.latLng
            });
            _this.map.addMarker({
                title: 'My Position',
                icon: 'blue',
                animation: 'DROP',
                position: response.latLng
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return MapsPage;
}());
MapsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-maps',template:/*ion-inline-start:"C:\proyecto\src\pages\maps\maps.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Demo 111\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"C:\proyecto\src\pages\maps\maps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_maps__["a" /* GoogleMaps */]])
], MapsPage);

//# sourceMappingURL=maps.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
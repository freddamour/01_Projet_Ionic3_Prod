webpackJsonp([1],{

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
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
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
        this.pdfSrc = './assets/Test.pdf';
        this.titre = 'app works';
        this.firsName = "robert";
        this.name = "dupont";
        this.collection = [
            { reference: '1234', name: 'toto', state: 0 },
            { reference: '3456', name: 'titi', state: 1 },
            { reference: '5678', name: 'tata', state: 2 },
        ];
        this.testObservable();
        this.resetNewItem();
    } // fin constructeur
    HomePage.prototype.resetNewItem = function () {
        this.newItem = { reference: '', name: '', state: 0 };
    };
    HomePage.prototype.getDetails = function (event, parameter) {
        event.preventDefault();
        console.log(event);
        var eventEnCours = event.target || event.currentTarget || event.srcElement;
        //console.log(eventEnCours.attributes.id); //affiche id=1234
        //console.log(eventEnCours.id); // affiche 1234
        console.log(parameter);
    };
    HomePage.prototype.creationObjet = function () {
        this.collection.push(this.newItem);
        console.log(this.newItem);
        this.resetNewItem();
    };
    HomePage.prototype.doClick = function () {
        this.name = "click sur button";
    };
    HomePage.prototype.testObservable = function () {
        // observation de tableau
        [1, 2, 3, 4, 5]
            .map(function (x) { return x * 2; }) // applique la fonction anonyme fn sur chaque événement et retourne le résultat.
            .filter(function (x) { return x > 5; }) // laisse passer les seuls événements qui répondent au prédicat
            .forEach(function (x) { return console.log(x); });
        //Observable.create reçoit une fonction qui émet des événements sur son paramètre observer
        var observable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].create(function (observer) { return observer.next('hello'); });
        observable.subscribe(function (value) { return console.log(value); });
        var myObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].from([1, 2, 4, 5]);
        myObservable.subscribe(function (i) { return console.log(i); });
        //const myObservable2 = Observable.interval(1000)
        //myObservable2.subscribe((i) => (console.log(i)));
        // observation des Event
        window.onload = function () {
            var btn = document.getElementById('btn');
            var source = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromEvent(btn, 'click');
            source.subscribe(function (data) { return console.log("obs1" + data); });
        };
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\eea\Documents\GitHub\01 vue\02_V2B_ionic_start_V1\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div>\n\n        <label>PDF src</label>\n\n        <input type="text" placeholder="PDF src" [(ngModel)]="pdfSrc">\n\n    </div>\n\n    <pdf-viewer [src]="pdfSrc" \n\n                [render-text]="true"\n\n                [render-text]="true"\n\n                [show-all]="true"\n\n                [page]="2"\n\n                [stick-to-page]="true"\n\n                [autoresize]="true"\n\n                [original-size]="true"\n\n                [zoom]="0.4"\n\n                style="display: block;"\n\n    ></pdf-viewer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n  bla bla.\n\n  <a href="../../assets/Test.pdf">Notre grille tarifaire (PDF)</a>\n\n  <iframe frameborder="0" width="90%" height="60%" src="../../assets/Test.pdf" scrolling="auto"></iframe>\n\n  <p>\n\n    lien vers site <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n  <p>interpolation de propriété {{1+1}}</p>\n\n  <p>{{titre}}+{{firsName}}</p>\n\n  <hr />\n\n\n\n<br>\n\n<input type="text" name="" id="" [(ngModel)]="newItem.reference">\n\n<input type="text" name="" id="" [(ngModel)]="newItem.name">\n\n<input type="text" name="" id="" [(ngModel)]="newItem.state">\n\n\n\n<!--   utile pour la maintenance -->\n\n<p> {{newItem |json}}</p>\n\n\n\n\n\n<!--   câblage de l\'évenement sur une méthode du composant -->\n\n<button (click)="creationObjet()">Ajouter un objet</button>\n\n<!--   itération sur une collection -->\n\n  <div\n\n   *ngFor="let item of collection">\n\n  <p> Référense: {{item.reference}}</p>\n\n  <p> nom: {{item.name}}</p>\n\n  <p> state: {{item.state}}</p>\n\n\n\n  <!--   définition de l\'objet $event -->\n\n  <a href="" id="{{item.reference}}" (click)="getDetails($event, \'test\')">vers getDetails</a>\n\n\n\n  <!--   affichage conditionner -->\n\n  <p class="state-0" *ngIf="0==item.state">A faire </p>\n\n  <p class="state-1" *ngIf="1==item.state">En cours </p>\n\n  <p class="state-2"*ngIf="2==item.state">fait </p>\n\n  <hr />\n\n </div>\n\n  \n\n\n\n  <!--   cible du binding -->\n\ndom: <input type="texte" [value]="name">\n\nattr:<input type="texte" value="{{name}}">\n\n<p [innerText]= "name"></p>\n\n<p>{{name}}</p>\n\n\n\n <!--   cible vue vers model -->\n\ndouble binding <input type="text"[(ngModel)]=name>\n\n<button (click)="doClick()">appel méthode dans fichier .ts</button>\n\n<button ion-button id="btn" >click</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\eea\Documents\GitHub\01 vue\02_V2B_ionic_start_V1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}()); //fin constructeur

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__ = __webpack_require__(692);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\eea\Documents\GitHub\01 vue\02_V2B_ionic_start_V1\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\eea\Documents\GitHub\01 vue\02_V2B_ionic_start_V1\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[362]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");





var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'search-recipe', component: _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_4__["SearchRecipeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n  height:60em; background-size:cover; width:100%;\r\n  background-image:url('bg.png');\r\n  background-position:50% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsV0FBVztFQUMvQywrQkFBdUM7RUFDdkMsNEJBQTRCO0NBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgaGVpZ2h0OjYwZW07IGJhY2tncm91bmQtc2l6ZTpjb3Zlcjsgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnfmltYWdlcy9iZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\r\n<app-header></app-header>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MashUp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-recipe/search-recipe.component */ "./src/app/search-recipe/search-recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _search_recipe_search_recipe_component__WEBPACK_IMPORTED_MODULE_7__["SearchRecipeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default background\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" class=\"navbar-brand background\">Find your Recipe!!!</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse tx\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/home\">Home</a></li>\r\n        <li><a routerLink=\"/search-recipe\">Search Recipe</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/shopping-list\">Contact Us</a></li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [".background {background:#000000; color: #ffffff}", "li a { color: white}", "ul.nav a:hover { color: #fffccc  }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n}\r\n\r\n.child-container {\r\n  color: white;\r\n  text-align: center;\r\n  position: center;\r\n\r\n}\r\n\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 17px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCOztDQUVsQjs7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbn1cclxuLmRlc2Mge1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2>Hello, Welcome to <b>Find Your Recipe!!!\r\n    </b></h2>\r\n    <span class=\"desc\">FInd Your Recipe is a Mashup Web Application which is built using <i> Foursquare & Edamam's Recipe Search API </i> . This application find Recipe and Place to find that Food.</span><br><br><br>\r\n    <form>\r\n      <div class=\"img img-responsive\">\r\n        <img src=\"https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=730&q=80\"\r\n           alt=\"\" style=\"height: 350px\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Subscribe to our news letter:</label><br><br>\r\n        <div class=\"form-group col-lg-4 col-lg-offset-4\">\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"name@example.com\"/>\r\n        </div>\r\n        <br>\r\n        <button class=\"btn btn-primary col-lg-2 col-lg-offset-5\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.css":
/*!***********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parent-container {\r\n  position: relative;\r\n  height:100%;\r\n  width: 100%;\r\n}\r\n\r\n.child-container {\r\n  color: white;\r\n  text-align: center;\r\n  position: center;\r\n\r\n}\r\n\r\n.desc {\r\n  font-family: Georgia;\r\n  font-size: 17px;\r\n}\r\n\r\n.thumbnail {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);\r\n  transition: 0.3s;\r\n  min-width: 40%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.thumbnail-description {\r\n  min-height: 40px;\r\n}\r\n\r\n.thumbnail:hover {\r\n  cursor: pointer;\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 1);\r\n}\r\n\r\n.panel-body {\r\n  overflow-y: auto;\r\n  height: 50vh;\r\n}\r\n\r\nbutton {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlY2lwZS9zZWFyY2gtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCOztDQUVsQjs7QUFDRDtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSwyQ0FBMkM7RUFDM0MsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxnQkFBZ0I7RUFDaEIsMENBQTBDO0NBQzNDOztBQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZWNpcGUvc2VhcmNoLXJlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG5cclxufVxyXG4uZGVzYyB7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWE7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4udGh1bWJuYWlsIHtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBtaW4td2lkdGg6IDQwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWwtZGVzY3JpcHRpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50aHVtYm5haWw6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAxKTtcclxufVxyXG5cclxuLnBhbmVsLWJvZHkge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.html":
/*!************************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parent-container\">\r\n  <div class=\"child-container\">\r\n    <h2><b>Search for your recipe!!\r\n    </b></h2><br>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <div class=\"form-group col-lg-6 col-lg-offset-3 input-group\">\r\n          <input #recipe class=\"form-control\" placeholder=\"Recipe name\" type=\"text\">\r\n          <span class=\"input-group-addon\">-</span>\r\n          <input #place class=\"form-control\" placeholder=\"Place\" type=\"text\">\r\n          <span class=\"input-group-addon\">-</span>\r\n\r\n        </div>\r\n        <br>\r\n        <button (click)=\"getVenues()\" class=\"btn col-lg-2 col-lg-offset-5 \" type=\"button\">Go</button>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div><br><br>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\"><b>How to make</b></div>\r\n        <div class=\"panel-body\">\r\n          <div *ngFor=\"let recipe of recipeList\" class=\"list-group\">\r\n            <img src=\"{{ recipe.image }}\" style=\"\">\r\n            <h2><b>{{ recipe.label }}</b></h2>\r\n            <p>Servings: {{ recipe.yield }} | Calories per serving: {{ recipe.calories.toFixed() }}</p>\r\n            <p>Diet: {{ recipe.dietLabels }}, {{ recipe.healthLabels }}</p>\r\n            <p>Source: <a href=\"{{ recipe.url }}\">{{ recipe.url }}</a> </p>\r\n            <!-- display list of ingredients -->\r\n            <h3>Ingredients: </h3>\r\n            <div *ngFor=\"let ingredient of recipe.ingredients\" class=\"list-group-item\">\r\n              {{ingredient.text}}\r\n            </div>\r\n            <hr>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"panel panel-default col-6\">\r\n        <div class=\"panel-heading\"><b>Where to get</b></div>\r\n        <div class=\"panel-body\">\r\n          <div *ngFor=\"let venue of venueList\" class=\"list-group-item clearfix\">\r\n            <div class=\"pull-left\">\r\n              <h4 class=\"list-group-item-heading\">{{venue.name}}</h4>\r\n              <p>{{venue.location.address}}</p>\r\n              <p>{{venue.location.city}}, {{venue.location.state}} {{venue.location.postalCode}} </p>\r\n              <p>{{venue.location.country}} </p>\r\n            </div>\r\n            <span class=\"pull-right\">\r\n             <a target=\"_blank\" href=\"http://maps.google.com/maps?saddr={{currentLat}},{{currentLong}}\r\n             &daddr={{venue.location.formattedAddress[0]}},{{venue.location.formattedAddress[1]}},{{venue.location.formattedAddress[2]}}\">\r\n               <img src=\"../../assets/google.png\" style=\"width: 30px; height: 30px;\"></a>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/search-recipe/search-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/search-recipe/search-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRecipeComponent", function() { return SearchRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchRecipeComponent = /** @class */ (function () {
    function SearchRecipeComponent(_http) {
        this._http = _http;
        this.venueList = [];
    }
    SearchRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.navigator.geolocation.getCurrentPosition(function (position) {
            _this.geolocationPosition = position;
            _this.currentLat = position.coords.latitude;
            _this.currentLong = position.coords.longitude;
        });
    };
    SearchRecipeComponent.prototype.getVenues = function () {
        var _this = this;
        this.recipeValue = this.recipes.nativeElement.value;
        this.placeValue = this.places.nativeElement.value;
        if (this.recipeValue !== null) {
            /**
             * Write code to get recipe
             */
            this._http.get('https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=db9927b6'
                + '&app_key=d08fbd177d03c50acff5e26581f28a75')
                .subscribe(function (_a) {
                var hits = _a.hits;
                _this.recipeList = hits.map(function (hit) { return hit.recipe; });
            });
        }
        if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null) {
            if (this.recipeValue !== '') {
                /**
                 * Write code to get place
                 */
                // tslint:disable-next-line:max-line-length
                this._http.get('https://api.foursquare.com/v2/venues/search/?' + '&client_id=OO2P1I0OMSUPC1RDII0B35LZ1A0XVKNJUPBEPGKRMW1CC3J2'
                    + '&client_secret=KMBRXGGGSIAL5AL25YZIURABMKFSHU4ZVAULIRXB0QB131CM' + '&v=20180928&limit=10&&near=' + this.placeValue + 'a' +
                    '' + this.recipeValue).
                    subscribe(function (_a) {
                    var response = _a.response;
                    _this.venueList = response.venues;
                });
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recipe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "recipes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('place'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchRecipeComponent.prototype, "places", void 0);
    SearchRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-recipe',
            template: __webpack_require__(/*! ./search-recipe.component.html */ "./src/app/search-recipe/search-recipe.component.html"),
            styles: [__webpack_require__(/*! ./search-recipe.component.css */ "./src/app/search-recipe/search-recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchRecipeComponent);
    return SearchRecipeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\priya\OneDrive\Documents\GitHub\Web\ICP 6\Source\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
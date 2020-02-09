(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\r\nbdOpacity = 0.9\r\nbdColor = \"#ffffff\"\r\nsize = \"default\"\r\ncolor = \"#000000\"\r\ntype = \"ball-8bits\"\r\n[fullScreen] = \"true\">\r\n<p> Cargando... </p>\r\n</ngx-spinner>\r\n\r\n<div class=\"container p-3\">\r\n\r\n  <div class=\"mb-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-12 col-sm-12 col-md-12 col-lg-3\">\r\n        <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png\" class=\"img-fluid\">\r\n      </div>\r\n      <div class=\"col col-12 col-sm-12 col-md-12 col-lg-9 mt-4\">\r\n        <h1 class=\"text-center\">Starwars API</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">Inicio</li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\" *ngIf=\"router.url != '/my-starships'\">Películas</li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\" *ngIf=\"router.url === '/my-starships'\">Mis naves</li>\r\n    </ol>\r\n  </nav>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col col-12 col-sm-12 col-md-12 col-lg-3\">\r\n      <ul class=\"list-group mb-4\">\r\n        <a [routerLink] = \"['/']\" class=\"list-group-item list-group-item-action\">Películas</a>\r\n        <a [routerLink] = \"['/my-starships']\" class=\"list-group-item list-group-item-action\">Mis naves</a>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col col-12 col-sm-12 col-md-12 col-lg-9\">\r\n      <router-outlet class=\"mb-4\"></router-outlet>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/films/films.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/films/films.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Lista de películas</h5>\r\n\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-sm table-striped table-bordered table-hover\">\r\n    <thead class=\"text-center\">\r\n      <tr>\r\n        <th>Episodio</th>\r\n        <th>Título</th>\r\n        <th>Lanzamiento</th>\r\n        <th>Acciones</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-container *ngFor=\"let film of films; let i = index;\">\r\n        <tr>\r\n          <td align=\"center\">{{film.episode_id}}</td>\r\n          <td>{{film.title}}</td>\r\n          <td align=\"center\">{{film.release_date}}</td>\r\n          <td align=\"center\">\r\n            <a class=\"btn btn-outline-primary btn-sm\" [routerLink] = \"['/film/'+ extractIdURL(i) +'/starships/list']\" title=\"Ver\">\r\n              <i class=\"fa fa-eye\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\" role=\"alert\">\n  Editar nave\n</div>\n\n<div class=\"card\">\n  <h5 class=\"card-header\">Información</h5>\n\n  <div class=\"card-body\">\n\n    <form [formGroup]=\"starshipForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.name.errors\">\n            <small *ngIf=\"starshipForm.controls.name.errors.required\" class=\"form-text text-danger\">El campo <strong>nombre</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Modelo</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"model\" [ngClass]=\"{ 'is-invalid': submitted && f.model.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.model.errors\">\n            <small *ngIf=\"starshipForm.controls.model.errors.required\" class=\"form-text text-danger\">El campo <strong>modelo</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Tamaño</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"length\" [ngClass]=\"{ 'is-invalid': submitted && f.length.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.length.errors\">\n            <small *ngIf=\"starshipForm.controls.length.errors.required\" class=\"form-text text-danger\">El campo <strong>tamaño</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Capacidad de carga</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cargo_capacity\" [ngClass]=\"{ 'is-invalid': submitted && f.cargo_capacity.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.cargo_capacity.errors\">\n            <small *ngIf=\"starshipForm.controls.cargo_capacity.errors.required\" class=\"form-text text-danger\">El campo <strong>capacidad de carga</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Pasajeros</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"passengers\" [ngClass]=\"{ 'is-invalid': submitted && f.passengers.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.passengers.errors\">\n            <small *ngIf=\"starshipForm.controls.passengers.errors.required\" class=\"form-text text-danger\">El campo <strong>pasajeros</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Velcidad máxima de atmósfera</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"max_atmosphering_speed\" [ngClass]=\"{ 'is-invalid': submitted && f.max_atmosphering_speed.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.max_atmosphering_speed.errors\">\n            <small *ngIf=\"starshipForm.controls.max_atmosphering_speed.errors.required\" class=\"form-text text-danger\">El campo <strong>velocidad máxima de atmósfera</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Calificación de hiperimpulsor</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"hyperdrive_rating\" [ngClass]=\"{ 'is-invalid': submitted && f.hyperdrive_rating.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.hyperdrive_rating.errors\">\n            <small *ngIf=\"starshipForm.controls.hyperdrive_rating.errors.required\" class=\"form-text text-danger\">El campo <strong>calificación de hiperimpulsor</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Fabricante</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"manufacturer\" [ngClass]=\"{ 'is-invalid': submitted && f.manufacturer.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.manufacturer.errors\">\n            <small *ngIf=\"starshipForm.controls.manufacturer.errors.required\" class=\"form-text text-danger\">El campo <strong>fabricante</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Clase</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"starship_class\" [ngClass]=\"{ 'is-invalid': submitted && f.starship_class.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.starship_class.errors\">\n            <small *ngIf=\"starshipForm.controls.starship_class.errors.required\" class=\"form-text text-danger\">El campo <strong>clase</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Costo en créditos</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cost_in_credits\" [ngClass]=\"{ 'is-invalid': submitted && f.cost_in_credits.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.cost_in_credits.errors\">\n            <small *ngIf=\"starshipForm.controls.cost_in_credits.errors.required\" class=\"form-text text-danger\">El campo <strong>costo en créditos</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <button class=\"btn btn-success btn-sm float-right\" title=\"Guardar\" [disabled]=\"clicked\">\n        <i class=\"fa fa-save\"></i> Guardar\n      </button>\n\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-info/my-starship-info.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-info/my-starship-info.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\" role=\"alert\">\n  Nave seleccionada: <strong>{{starship.name}}</strong>\n</div>\n\n<div class=\"card\">\n  <h5 class=\"card-header\">Especificaciones\n    <button class=\"btn btn-danger btn-sm float-right\" (click)=\"deleteSS(starship._id)\" title=\"Eliminar\">\n      <i class=\"fa fa-trash\"></i> Eliminar\n    </button>\n\n    <a class=\"btn btn-warning btn-sm float-right mr-2\" [routerLink] = \"['/my-starships/edit/', starship._id]\" title=\"Editar\">\n      <i class=\"fa fa-pencil\"></i> Editar\n    </a>\n  </h5>\n\n  <div class=\"card-body\">\n\n    <h5 class=\"card-title\">Modelo</h5>\n    <p class=\"card-text\">{{starship.model}}</p>\n\n    <h5 class=\"card-title\">Tamaño</h5>\n    <p class=\"card-text\">{{starship.length}}</p>\n\n    <h5 class=\"card-title\">Capacidad de carga</h5>\n    <p class=\"card-text\">{{starship.cargo_capacity}}</p>\n\n    <h5 class=\"card-title\">Pasajeros</h5>\n    <p class=\"card-text\">{{starship.passengers}}</p>\n\n    <h5 class=\"card-title\">Velcidad máxima de atmósfera</h5>\n    <p class=\"card-text\">{{starship.max_atmosphering_speed}}</p>\n\n    <h5 class=\"card-title\">Calificación de hiperimpulsor</h5>\n    <p class=\"card-text\">{{starship.hyperdrive_rating}}</p>\n\n    <h5 class=\"card-title\">Fabricante</h5>\n    <p class=\"card-text\">{{starship.manufacturer}}</p>\n\n    <h5 class=\"card-title\">Clase</h5>\n    <p class=\"card-text\">{{starship.starship_class}}</p>\n\n    <h5 class=\"card-title\">Costo en créditos</h5>\n    <p class=\"card-text\">{{starship.cost_in_credits}}</p>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starships.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starships.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5>Mi lista de naves</h5>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-sm table-striped table-bordered table-hover\">\n    <thead class=\"text-center\">\n      <tr>\n        <th>Nombre</th>\n        <th>Modelo</th>\n        <th>Acciones</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngFor=\"let starship of starships; let i = index;\">\n        <tr>\n          <td>{{starship.name}}</td>\n          <td>{{starship.model}}</td>\n          <td align=\"center\">\n            <a class=\"btn btn-outline-primary btn-sm\" [routerLink] = \"['/my-starships/info/', starship._id]\" title=\"Ver\">\n              <i class=\"fa fa-eye\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-edit/starship-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-edit/starship-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\" role=\"alert\">\n  Editar nave\n</div>\n\n<div class=\"card\">\n  <h5 class=\"card-header\">Información</h5>\n\n  <div class=\"card-body\">\n\n    <form [formGroup]=\"starshipForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Nombre</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.name.errors\">\n            <small *ngIf=\"starshipForm.controls.name.errors.required\" class=\"form-text text-danger\">El campo <strong>nombre</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Modelo</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"model\" [ngClass]=\"{ 'is-invalid': submitted && f.model.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.model.errors\">\n            <small *ngIf=\"starshipForm.controls.model.errors.required\" class=\"form-text text-danger\">El campo <strong>modelo</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Tamaño</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"length\" [ngClass]=\"{ 'is-invalid': submitted && f.length.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.length.errors\">\n            <small *ngIf=\"starshipForm.controls.length.errors.required\" class=\"form-text text-danger\">El campo <strong>tamaño</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Capacidad de carga</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cargo_capacity\" [ngClass]=\"{ 'is-invalid': submitted && f.cargo_capacity.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.cargo_capacity.errors\">\n            <small *ngIf=\"starshipForm.controls.cargo_capacity.errors.required\" class=\"form-text text-danger\">El campo <strong>capacidad de carga</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Pasajeros</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"passengers\" [ngClass]=\"{ 'is-invalid': submitted && f.passengers.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.passengers.errors\">\n            <small *ngIf=\"starshipForm.controls.passengers.errors.required\" class=\"form-text text-danger\">El campo <strong>pasajeros</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Velcidad máxima de atmósfera</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"max_atmosphering_speed\" [ngClass]=\"{ 'is-invalid': submitted && f.max_atmosphering_speed.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.max_atmosphering_speed.errors\">\n            <small *ngIf=\"starshipForm.controls.max_atmosphering_speed.errors.required\" class=\"form-text text-danger\">El campo <strong>velocidad máxima de atmósfera</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Calificación de hiperimpulsor</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"hyperdrive_rating\" [ngClass]=\"{ 'is-invalid': submitted && f.hyperdrive_rating.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.hyperdrive_rating.errors\">\n            <small *ngIf=\"starshipForm.controls.hyperdrive_rating.errors.required\" class=\"form-text text-danger\">El campo <strong>calificación de hiperimpulsor</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Fabricante</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"manufacturer\" [ngClass]=\"{ 'is-invalid': submitted && f.manufacturer.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.manufacturer.errors\">\n            <small *ngIf=\"starshipForm.controls.manufacturer.errors.required\" class=\"form-text text-danger\">El campo <strong>fabricante</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Clase</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"starship_class\" [ngClass]=\"{ 'is-invalid': submitted && f.starship_class.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.starship_class.errors\">\n            <small *ngIf=\"starshipForm.controls.starship_class.errors.required\" class=\"form-text text-danger\">El campo <strong>clase</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"font-weight-bold\">Costo en créditos</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cost_in_credits\" [ngClass]=\"{ 'is-invalid': submitted && f.cost_in_credits.errors }\">\n        <div *ngIf=\"submitted && starshipForm.controls.cost_in_credits.errors\">\n            <small *ngIf=\"starshipForm.controls.cost_in_credits.errors.required\" class=\"form-text text-danger\">El campo <strong>costo en créditos</strong> es requerido.</small>\n        </div>\n      </div>\n\n      <button class=\"btn btn-success btn-sm float-right\" title=\"Guardar\" [disabled]=\"clicked\">\n        <i class=\"fa fa-save\"></i> Guardar\n      </button>\n\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-info/starship-info.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-info/starship-info.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\" role=\"alert\">\n  Nave seleccionada: <strong>{{starship.name}}</strong>\n</div>\n\n<div class=\"card\">\n  <h5 class=\"card-header\">Especificaciones\n    <a class=\"btn btn-warning btn-sm float-right\" [routerLink] = \"['/film/starships/edit/', starship.id]\" title=\"Editar\">\n      <i class=\"fa fa-pencil\"></i> Editar\n    </a>\n  </h5>\n\n  <div class=\"card-body\">\n\n    <h5 class=\"card-title\">Modelo</h5>\n    <p class=\"card-text\">{{starship.model}}</p>\n\n    <h5 class=\"card-title\">Tamaño</h5>\n    <p class=\"card-text\">{{starship.length}}</p>\n\n    <h5 class=\"card-title\">Capacidad de carga</h5>\n    <p class=\"card-text\">{{starship.cargo_capacity}}</p>\n\n    <h5 class=\"card-title\">Pasajeros</h5>\n    <p class=\"card-text\">{{starship.passengers}}</p>\n\n    <h5 class=\"card-title\">Velcidad máxima de atmósfera</h5>\n    <p class=\"card-text\">{{starship.max_atmosphering_speed}}</p>\n\n    <h5 class=\"card-title\">Calificación de hiperimpulsor</h5>\n    <p class=\"card-text\">{{starship.hyperdrive_rating}}</p>\n\n    <h5 class=\"card-title\">Fabricante</h5>\n    <p class=\"card-text\">{{starship.manufacturer}}</p>\n\n    <h5 class=\"card-title\">Clase</h5>\n    <p class=\"card-text\">{{starship.starship_class}}</p>\n\n    <h5 class=\"card-title\">Costo en créditos</h5>\n    <p class=\"card-text\">{{starship.cost_in_credits}}</p>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starships-list/starships-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starships-list/starships-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert alert-info\" role=\"alert\">\n  Película seleccionada: <strong>{{film.title + ', ' + film.release_date}}</strong>\n</div>\n\n<h5>Lista de naves</h5>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-sm table-striped table-bordered table-hover\">\n    <thead class=\"text-center\">\n      <tr>\n        <th>Nombre</th>\n        <th>Modelo</th>\n        <th>Acciones</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <ng-container *ngFor=\"let starship of starships; let i = index;\">\n        <tr>\n          <td>{{starship.name}}</td>\n          <td>{{starship.model}}</td>\n          <td align=\"center\">\n            <a class=\"btn btn-outline-primary btn-sm\" [routerLink] = \"['/film/starships/info/',starship.id]\" title=\"Ver\">\n              <i class=\"fa fa-eye\"></i>\n            </a>\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'starwars-ng';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_films_films_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/films/films.component */ "./src/app/components/films/films.component.ts");
/* harmony import */ var _components_starships_starships_list_starships_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/starships/starships-list/starships-list.component */ "./src/app/components/starships/starships-list/starships-list.component.ts");
/* harmony import */ var _components_starships_starship_info_starship_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/starships/starship-info/starship-info.component */ "./src/app/components/starships/starship-info/starship-info.component.ts");
/* harmony import */ var _components_starships_starship_edit_starship_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/starships/starship-edit/starship-edit.component */ "./src/app/components/starships/starship-edit/starship-edit.component.ts");
/* harmony import */ var _components_my_starships_my_starships_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/my-starships/my-starships.component */ "./src/app/components/my-starships/my-starships.component.ts");
/* harmony import */ var _components_my_starships_my_starship_info_my_starship_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/my-starships/my-starship-info/my-starship-info.component */ "./src/app/components/my-starships/my-starship-info/my-starship-info.component.ts");
/* harmony import */ var _components_my_starships_my_starship_edit_my_starship_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/my-starships/my-starship-edit/my-starship-edit.component */ "./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_films_films_component__WEBPACK_IMPORTED_MODULE_10__["FilmsComponent"],
            _components_starships_starships_list_starships_list_component__WEBPACK_IMPORTED_MODULE_11__["StarshipsListComponent"],
            _components_starships_starship_info_starship_info_component__WEBPACK_IMPORTED_MODULE_12__["StarshipInfoComponent"],
            _components_starships_starship_edit_starship_edit_component__WEBPACK_IMPORTED_MODULE_13__["StarshipEditComponent"],
            _components_my_starships_my_starships_component__WEBPACK_IMPORTED_MODULE_14__["MyStarshipsComponent"],
            _components_my_starships_my_starship_info_my_starship_info_component__WEBPACK_IMPORTED_MODULE_15__["MyStarshipInfoComponent"],
            _components_my_starships_my_starship_edit_my_starship_edit_component__WEBPACK_IMPORTED_MODULE_16__["MyStarshipEditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_7__["routing"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ],
        providers: [_app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_films_films_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/films/films.component */ "./src/app/components/films/films.component.ts");
/* harmony import */ var _components_starships_starships_list_starships_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/starships/starships-list/starships-list.component */ "./src/app/components/starships/starships-list/starships-list.component.ts");
/* harmony import */ var _components_starships_starship_info_starship_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/starships/starship-info/starship-info.component */ "./src/app/components/starships/starship-info/starship-info.component.ts");
/* harmony import */ var _components_starships_starship_edit_starship_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/starships/starship-edit/starship-edit.component */ "./src/app/components/starships/starship-edit/starship-edit.component.ts");
/* harmony import */ var _components_my_starships_my_starships_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-starships/my-starships.component */ "./src/app/components/my-starships/my-starships.component.ts");
/* harmony import */ var _components_my_starships_my_starship_info_my_starship_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-starships/my-starship-info/my-starship-info.component */ "./src/app/components/my-starships/my-starship-info/my-starship-info.component.ts");
/* harmony import */ var _components_my_starships_my_starship_edit_my_starship_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-starships/my-starship-edit/my-starship-edit.component */ "./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.ts");









const appRoutes = [
    {
        path: '', component: _components_films_films_component__WEBPACK_IMPORTED_MODULE_2__["FilmsComponent"]
    },
    {
        path: 'film/starships', component: _components_starships_starships_list_starships_list_component__WEBPACK_IMPORTED_MODULE_3__["StarshipsListComponent"]
    },
    {
        path: 'film/:id/starships/list', component: _components_starships_starships_list_starships_list_component__WEBPACK_IMPORTED_MODULE_3__["StarshipsListComponent"]
    },
    {
        path: 'film/starships/info/:id', component: _components_starships_starship_info_starship_info_component__WEBPACK_IMPORTED_MODULE_4__["StarshipInfoComponent"]
    },
    {
        path: 'film/starships/edit/:id', component: _components_starships_starship_edit_starship_edit_component__WEBPACK_IMPORTED_MODULE_5__["StarshipEditComponent"]
    },
    {
        path: 'my-starships', component: _components_my_starships_my_starships_component__WEBPACK_IMPORTED_MODULE_6__["MyStarshipsComponent"]
    },
    {
        path: 'my-starships/info/:id', component: _components_my_starships_my_starship_info_my_starship_info_component__WEBPACK_IMPORTED_MODULE_7__["MyStarshipInfoComponent"]
    },
    {
        path: 'my-starships/edit/:id', component: _components_my_starships_my_starship_edit_my_starship_edit_component__WEBPACK_IMPORTED_MODULE_8__["MyStarshipEditComponent"]
    }
];
const appRoutingProviders = [];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/films/films.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/films/films.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsbXMvZmlsbXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/films/films.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/films/films.component.ts ***!
  \*****************************************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let FilmsComponent = class FilmsComponent {
    constructor(swapiService, spinner) {
        this.swapiService = swapiService;
        this.spinner = spinner;
        this.films = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.swapiService.getFilms().subscribe(response => {
            //console.log(response.results);
            this.films = response.results.sort(this.dynamicSort('episode_id'));
            this.spinner.hide();
        }, error => {
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Swapi!',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    dynamicSort(property) {
        return function (a, b) {
            return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        };
    }
    extractIdURL(index) {
        return this.films[index].url.split('/')[5];
    }
};
FilmsComponent.ctorParameters = () => [
    { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
FilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-films',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./films.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/films/films.component.html")).default,
        providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./films.component.scss */ "./src/app/components/films/films.component.scss")).default]
    })
], FilmsComponent);



/***/ }),

/***/ "./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktc3RhcnNoaXBzL215LXN0YXJzaGlwLWVkaXQvbXktc3RhcnNoaXAtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyStarshipEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStarshipEditComponent", function() { return MyStarshipEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mongoapi.service */ "./src/app/services/mongoapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let MyStarshipEditComponent = class MyStarshipEditComponent {
    constructor(mongoapiService, router, activatedRoute, formBuilder, spinner) {
        this.mongoapiService = mongoapiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.submitted = false;
        this.clicked = false;
    }
    ngOnInit() {
        this.spinner.show();
        this.starshipForm = this.formBuilder.group({
            id: ['', ''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cargo_capacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            max_atmosphering_speed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            hyperdrive_rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            starship_class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            cost_in_credits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.mongoapiService.showStarship(id).subscribe(response => {
            this.starshipForm.controls.id.setValue(response.starship._id);
            this.starshipForm.controls.name.setValue(response.starship.name);
            this.starshipForm.controls.model.setValue(response.starship.model);
            this.starshipForm.controls.length.setValue(response.starship.length);
            this.starshipForm.controls.cargo_capacity.setValue(response.starship.cargo_capacity);
            this.starshipForm.controls.passengers.setValue(response.starship.passengers);
            this.starshipForm.controls.max_atmosphering_speed.setValue(response.starship.max_atmosphering_speed);
            this.starshipForm.controls.hyperdrive_rating.setValue(response.starship.hyperdrive_rating);
            this.starshipForm.controls.manufacturer.setValue(response.starship.manufacturer);
            this.starshipForm.controls.starship_class.setValue(response.starship.starship_class);
            this.starshipForm.controls.cost_in_credits.setValue(response.starship.cost_in_credits);
            this.spinner.hide();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Mongoapi!',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    get f() { return this.starshipForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.clicked = true;
        // stop the process here if form is invalid
        if (this.starshipForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Favor de completar los datos obligatorios!',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
            this.clicked = false;
            return;
        }
        this.updateSS();
    }
    updateSS() {
        //console.log(this.starshipForm.value);return 0;
        this.mongoapiService.updateStarship(this.starshipForm.value).subscribe(response => {
            //console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: response.message,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            }).then((result) => {
                if (result.value) {
                    window.history.back();
                    //this.router.navigate(['/']);
                }
            });
        }, error => {
            //console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al editar la nave espacial!',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
        });
    }
};
MyStarshipEditComponent.ctorParameters = () => [
    { type: _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
MyStarshipEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-starship-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-starship-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.html")).default,
        providers: [_services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-starship-edit.component.scss */ "./src/app/components/my-starships/my-starship-edit/my-starship-edit.component.scss")).default]
    })
], MyStarshipEditComponent);



/***/ }),

/***/ "./src/app/components/my-starships/my-starship-info/my-starship-info.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/my-starships/my-starship-info/my-starship-info.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktc3RhcnNoaXBzL215LXN0YXJzaGlwLWluZm8vbXktc3RhcnNoaXAtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/my-starships/my-starship-info/my-starship-info.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/my-starships/my-starship-info/my-starship-info.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MyStarshipInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStarshipInfoComponent", function() { return MyStarshipInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/mongoapi.service */ "./src/app/services/mongoapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let MyStarshipInfoComponent = class MyStarshipInfoComponent {
    constructor(mongoapiService, router, activatedRoute, spinner) {
        this.mongoapiService = mongoapiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.starship = [];
    }
    ngOnInit() {
        this.spinner.show();
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.mongoapiService.showStarship(id).subscribe(response => {
            //console.log(response);
            this.starship = response.starship;
            this.spinner.hide();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Mongoapi!',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    deleteSS(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Desea eliminar la nave espacial?',
            text: "Esta acción no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {
                this.mongoapiService.destroyStarship(id).subscribe(response => {
                    //console.log(response);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: response.message,
                        icon: 'success',
                        confirmButtonText: 'Aceptar',
                        allowOutsideClick: false
                    }).then((result) => {
                        if (result.value) {
                            this.router.navigate(['/my-starships']);
                        }
                    });
                }, error => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        icon: 'error',
                        title: 'Ha ocurrido un error al eliminar la nave espacial!',
                        confirmButtonText: 'Aceptar'
                    });
                });
            }
        });
    }
};
MyStarshipInfoComponent.ctorParameters = () => [
    { type: _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
MyStarshipInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-starship-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-starship-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starship-info/my-starship-info.component.html")).default,
        providers: [_services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-starship-info.component.scss */ "./src/app/components/my-starships/my-starship-info/my-starship-info.component.scss")).default]
    })
], MyStarshipInfoComponent);



/***/ }),

/***/ "./src/app/components/my-starships/my-starships.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-starships/my-starships.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktc3RhcnNoaXBzL215LXN0YXJzaGlwcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/my-starships/my-starships.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-starships/my-starships.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyStarshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyStarshipsComponent", function() { return MyStarshipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/mongoapi.service */ "./src/app/services/mongoapi.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");





let MyStarshipsComponent = class MyStarshipsComponent {
    constructor(mongoapiService, spinner) {
        this.mongoapiService = mongoapiService;
        this.spinner = spinner;
        this.starships = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.mongoapiService.getMyStarships().subscribe(response => {
            //console.log(response);
            this.spinner.hide();
            if (response.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    icon: 'error',
                    title: response.error,
                    confirmButtonText: 'Aceptar'
                });
            }
            else {
                this.starships = response.starships;
            }
        }, error => {
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Mongo',
                confirmButtonText: 'Aceptar'
            });
        });
    }
};
MyStarshipsComponent.ctorParameters = () => [
    { type: _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
MyStarshipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-starships',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-starships.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-starships/my-starships.component.html")).default,
        providers: [_services_mongoapi_service__WEBPACK_IMPORTED_MODULE_2__["MongoapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-starships.component.scss */ "./src/app/components/my-starships/my-starships.component.scss")).default]
    })
], MyStarshipsComponent);



/***/ }),

/***/ "./src/app/components/starships/starship-edit/starship-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/starships/starship-edit/starship-edit.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnNoaXBzL3N0YXJzaGlwLWVkaXQvc3RhcnNoaXAtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/starships/starship-edit/starship-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/starships/starship-edit/starship-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StarshipEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipEditComponent", function() { return StarshipEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/mongoapi.service */ "./src/app/services/mongoapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let StarshipEditComponent = class StarshipEditComponent {
    constructor(swapiService, mongoapiService, router, activatedRoute, formBuilder, spinner) {
        this.swapiService = swapiService;
        this.mongoapiService = mongoapiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.spinner = spinner;
        this.submitted = false;
        this.clicked = false;
    }
    ngOnInit() {
        this.spinner.show();
        this.starshipForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            length: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cargo_capacity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            passengers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            max_atmosphering_speed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            hyperdrive_rating: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            manufacturer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            starship_class: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            cost_in_credits: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.swapiService.getStarshipInfo(id).subscribe(response => {
            this.starshipForm.controls.name.setValue(response.name);
            this.starshipForm.controls.model.setValue(response.model);
            this.starshipForm.controls.length.setValue(response.length);
            this.starshipForm.controls.cargo_capacity.setValue(response.cargo_capacity);
            this.starshipForm.controls.passengers.setValue(response.passengers);
            this.starshipForm.controls.max_atmosphering_speed.setValue(response.max_atmosphering_speed);
            this.starshipForm.controls.hyperdrive_rating.setValue(response.hyperdrive_rating);
            this.starshipForm.controls.manufacturer.setValue(response.manufacturer);
            this.starshipForm.controls.starship_class.setValue(response.starship_class);
            this.starshipForm.controls.cost_in_credits.setValue(response.cost_in_credits);
            this.spinner.hide();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Swapi',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    get f() { return this.starshipForm.controls; }
    onSubmit() {
        this.submitted = true;
        this.clicked = true;
        // stop the process here if form is invalid
        if (this.starshipForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                icon: 'error',
                title: 'Favor de completar los datos obligatorios!',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
            this.clicked = false;
            return;
        }
        this.storeSSUpdated();
    }
    storeSSUpdated() {
        this.mongoapiService.storeStarship(this.starshipForm.value).subscribe(response => {
            //console.log(response);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                title: response.message,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            }).then((result) => {
                if (result.value) {
                    window.history.back();
                    //this.router.navigate(['/']);
                }
            });
        }, error => {
            //console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al editar la nave espacial!',
                confirmButtonText: 'Aceptar',
                allowOutsideClick: false
            });
        });
    }
};
StarshipEditComponent.ctorParameters = () => [
    { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
    { type: _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_3__["MongoapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }
];
StarshipEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starship-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starship-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-edit/starship-edit.component.html")).default,
        providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"], _services_mongoapi_service__WEBPACK_IMPORTED_MODULE_3__["MongoapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starship-edit.component.scss */ "./src/app/components/starships/starship-edit/starship-edit.component.scss")).default]
    })
], StarshipEditComponent);



/***/ }),

/***/ "./src/app/components/starships/starship-info/starship-info.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/starships/starship-info/starship-info.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnNoaXBzL3N0YXJzaGlwLWluZm8vc3RhcnNoaXAtaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/starships/starship-info/starship-info.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/starships/starship-info/starship-info.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StarshipInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipInfoComponent", function() { return StarshipInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let StarshipInfoComponent = class StarshipInfoComponent {
    constructor(swapiService, router, activatedRoute, spinner) {
        this.swapiService = swapiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.starship = [];
    }
    ngOnInit() {
        this.spinner.show();
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.swapiService.getStarshipInfo(id).subscribe(response => {
            //console.log(response);
            this.starship = response;
            this.starship.id = this.extractIdURL();
            this.spinner.hide();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Swapi',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    extractIdURL() {
        return this.starship.url.split('/')[5];
    }
};
StarshipInfoComponent.ctorParameters = () => [
    { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
StarshipInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starship-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starship-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starship-info/starship-info.component.html")).default,
        providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starship-info.component.scss */ "./src/app/components/starships/starship-info/starship-info.component.scss")).default]
    })
], StarshipInfoComponent);



/***/ }),

/***/ "./src/app/components/starships/starships-list/starships-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/starships/starships-list/starships-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnNoaXBzL3N0YXJzaGlwcy1saXN0L3N0YXJzaGlwcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/starships/starships-list/starships-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/starships/starships-list/starships-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StarshipsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarshipsListComponent", function() { return StarshipsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/swapi.service */ "./src/app/services/swapi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let StarshipsListComponent = class StarshipsListComponent {
    constructor(swapiService, router, activatedRoute, spinner) {
        this.swapiService = swapiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.spinner = spinner;
        this.film = [];
        this.starships = [];
    }
    ngOnInit() {
        this.spinner.show();
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.swapiService.getFilmInfo(id).subscribe(response => {
            //console.log(response);
            this.film = response;
            this.getSS();
            this.spinner.hide();
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Swapi',
                confirmButtonText: 'Aceptar'
            });
        });
    }
    getSS() {
        for (var i = 0; i < this.film.starships.length; i++) {
            this.getSSData(this.film.starships[i]);
        }
    }
    getSSData(url) {
        //console.log(url.split('/')[5]);
        this.swapiService.getStarshipInfo(url.split('/')[5]).subscribe(response => {
            this.starships.push({
                id: response.url.split('/')[5],
                name: response.name,
                model: response.model
            });
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: 'error',
                title: 'Ha ocurrido un error al obtener los datos desde Swapi',
                confirmButtonText: 'Aceptar'
            });
        });
    }
};
StarshipsListComponent.ctorParameters = () => [
    { type: _services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
StarshipsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-starships-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./starships-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/starships/starships-list/starships-list.component.html")).default,
        providers: [_services_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./starships-list.component.scss */ "./src/app/components/starships/starships-list/starships-list.component.scss")).default]
    })
], StarshipsListComponent);



/***/ }),

/***/ "./src/app/services/mongoapi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/mongoapi.service.ts ***!
  \**********************************************/
/*! exports provided: MongoapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MongoapiService", function() { return MongoapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MongoapiService = class MongoapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.mongoapi = "http://localhost:3900/api/starships/";
    }
    getMyStarships() {
        return this.httpClient.get(this.mongoapi);
    }
    storeStarship(starship) {
        return this.httpClient.post(this.mongoapi, starship);
    }
    showStarship(id) {
        return this.httpClient.get(this.mongoapi + id);
    }
    updateStarship(starship) {
        return this.httpClient.put(this.mongoapi + starship.id, starship);
    }
    destroyStarship(id) {
        return this.httpClient.delete(this.mongoapi + id);
    }
};
MongoapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MongoapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MongoapiService);



/***/ }),

/***/ "./src/app/services/swapi.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/swapi.service.ts ***!
  \*******************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SwapiService = class SwapiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.swapi = "https://swapi.co/api/";
    }
    getFilms() {
        return this.httpClient.get(this.swapi + 'films');
    }
    getFilmInfo(id) {
        return this.httpClient.get(this.swapi + 'films/' + id);
    }
    getStarshipInfo(id) {
        return this.httpClient.get(this.swapi + 'starships/' + id);
    }
};
SwapiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SwapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SwapiService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\npm\angular\projects\starwars-ng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
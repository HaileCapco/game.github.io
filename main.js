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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\" role=\"main\">\n  <span>CopcoTable app is running!</span>\n    <router-outlet></router-outlet>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/capco-pager/capco-pager.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/capco-pager/capco-pager.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"capcopageselector\">\n    <div class=\"pagersize\"  >\n        <label>Select Page Size</label>\n        <!-- [(ngModel)]=\"selectedPageSize\" -->\n        <select name=\"selectedPageSize\" class=\"pagersizeselector\" [(ngModel)]=\"selectedPageSize\"  (change)=\"setPagesize(selectedPageSize)\">\n            <option *ngFor=\"let pagesize of capcoPageSizes; let i=index\">\n              {{pagesize}}\n              <!-- {{pagesize| power : 1| ellipsis:['(',')']}} -->\n            </option>\n        </select>\n    </div>\n\n    <div class=\"pager\">\n        <ul *ngIf=\"capcoPager.totalPagesCount\" class=\"pagination\">\n            <li>\n                <button [disabled]=\"capcoPager.activepage === 1\" class=\"btn btn-primary\" (click)=\"setcapcoPage(1)\"> First</button>\n            </li>\n            <li>\n                <button [disabled]=\"capcoPager.activepage === 1\"  class=\"btn btn-primary\" (click)=\"setcapcoPage(capcoPager.activepage - 1)\"> Prev</button>\n            </li>\n            <li>\n              <button class=\"btn btn-success\"> {{capcoPager.activepage}} of {{capcoPager.totalPagesCount}}</button>\n            </li>\n            <li>\n                <button [disabled]=\"capcoPager.activepage === capcoPager.totalPagesCount\" class=\"btn btn-primary\" (click)=\"setcapcoPage(capcoPager.activepage + 1)\"> Next</button>\n\n            </li>\n            <li>\n                <button [disabled]=\"capcoPager.activepage === capcoPager.totalPagesCount\" class=\"btn btn-primary\" (click)=\"setcapcoPage(capcoPager.totalPagesCount)\"> Last</button>\n            </li>\n          </ul>\n      </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/copco-table/copco-table.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/copco-table/copco-table.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"capcoexercise\">\n\n    <div class=\"toptext\">\n        <p>\n            A web page is not like a book. The size of a book limits how much content can fill a page, but a web page has infinite height and can hold or load as much content as the website can handle. The only drawback to putting too much content on a page is that it can make the site load slower.\n\n            However, most sites have enough bandwidth to support showing more content per page without compromising the loading time. The problem is that most sites show users very little content with short pages. By making your pages longer without compromising loading speed, users will get more content per page and won’t have to click the pagination as much. They’ll be able to easily scroll to see more content faster.\n        </p>\n\n\n      </div>\n      <div class=\"fixeddiv\">\n          <div class=\"caplohamletdiv\" *ngIf=\"totalcapcosampledata > 0\">\n\n              <table class=\"fixed_header\">\n                <thead>\n                  <tr>\n                      <th *ngFor=\"let colname of columns\">\n\n                            {{colname| titlecase}}\n\n                        </th>\n                        <th>Action\n\n                        </th>\n                  </tr>\n\n                </thead>\n                  <tbody>\n                      <tr *ngFor=\"let sample of selectedSampledata; let i = index\">\n                          <td *ngFor=\"let colname of columns\">\n                              {{sample[colname]}}\n                          </td>\n                          <td>\n                            <button class=\"btn btn-primary btn-sm\" (click)=\"submit(sample)\">Select</button>\n                          </td>\n                        </tr>\n                  </tbody>\n                  </table>\n\n          </div>\n          <div class=\"pager\">\n              <app-capco-pager class=\"pagerfooter\"  [totalcapcosampledata]=\"totalcapcosampledata\"></app-capco-pager>\n          </div>\n      </div>\n");

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

/***/ "./src/app/CapcoSampleData/capcosampledata.data.ts":
/*!*********************************************************!*\
  !*** ./src/app/CapcoSampleData/capcosampledata.data.ts ***!
  \*********************************************************/
/*! exports provided: Capcosampledata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capcosampledata", function() { return Capcosampledata; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Capcosampledata {
    //  Array<Icapcosampledata> = [];
    getcapcosampledata() {
        let data = JSON.parse(this.capcosampledata);
        return data;
    }
    constructor() {
        this.capcosampledata =
            `[
	{
		"name": "Nell D. Michael",
		"phone": "602-1033",
		"email": "hendrerit.id.ante@placeratvelit.ca",
		"company": "Praesent Eu LLP",
		"date_entry": "2017-07-30 23:27:39",
		"org_num": "907369 2973",
		"address_1": "P.O. Box 916, 8584 Vestibulum St.",
		"city": "Vitry-sur-Seine",
		"zip": "2353",
		"geo": "60.77971, 7.98874",
		"pan": "4532992507580",
		"pin": "7086",
		"id": 1,
		"status": "read",
		"fee": "$60.99",
		"guid": "48653E36-987F-48EC-7382-7F009FF34628",
		"date_exit": "2018-11-14 12:37:54",
		"date_first": "2018-05-20 01:07:05",
		"date_recent": "2019-04-06 23:28:25",
		"url": "https://capco.com/"
	},
	{
		"name": "Ciara G. Stanley",
		"phone": "1-358-613-2160",
		"email": "natoque.penatibus@facilisisloremtristique.co.uk",
		"company": "Nunc Nulla Vulputate LLP",
		"date_entry": "2018-03-25 11:05:22",
		"org_num": "987983 1023",
		"address_1": "Ap #700-733 Senectus Rd.",
		"city": "Maule",
		"zip": "21911",
		"geo": "-47.21116, 22.18684",
		"pan": "4024007170167232",
		"pin": "6394",
		"id": 2,
		"status": "expired",
		"fee": "$92.73",
		"guid": "D4CC10B0-5F19-EE33-CCA2-95DBD8E7B21F",
		"date_exit": "2018-07-22 19:05:57",
		"date_first": "2018-08-02 03:50:35",
		"date_recent": "2017-08-12 01:56:58",
		"url": "https://capco.com/"
	},
	{
		"name": "Elton B. Ashley",
		"phone": "1-149-435-5772",
		"email": "elit@intempuseu.ca",
		"company": "Ut Consulting",
		"date_entry": "2018-05-26 02:26:45",
		"org_num": "699361 5639",
		"address_1": "5619 Aenean Road",
		"city": "Coquimbo",
		"zip": "TB32 0SC",
		"geo": "45.90788, -30.58453",
		"pan": "4532228764377",
		"pin": "2131",
		"id": 3,
		"status": "read",
		"fee": "$61.56",
		"guid": "20EFC5BA-0115-226D-2B47-A60557F0EFA1",
		"date_exit": "2018-02-27 03:34:13",
		"date_first": "2017-10-28 13:45:44",
		"date_recent": "2017-07-12 20:49:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Bree L. Shepherd",
		"phone": "292-9303",
		"email": "nisi.Mauris@Quisque.net",
		"company": "Molestie Dapibus Industries",
		"date_entry": "2018-04-22 10:10:56",
		"org_num": "074354 0494",
		"address_1": "P.O. Box 687, 2800 Nec, St.",
		"city": "Welland",
		"zip": "6505",
		"geo": "-33.00506, 41.89197",
		"pan": "4378821072523",
		"pin": "9402",
		"id": 4,
		"status": "unread",
		"fee": "$0.69",
		"guid": "BDC0C08A-5CB5-8D15-E117-73B2C46BF8A4",
		"date_exit": "2018-02-01 23:11:33",
		"date_first": "2018-10-31 01:36:50",
		"date_recent": "2018-02-03 06:21:40",
		"url": "https://capco.com/"
	},
	{
		"name": "Astra S. Small",
		"phone": "410-6374",
		"email": "ultricies.dignissim.lacus@arcuet.net",
		"company": "Pharetra Consulting",
		"date_entry": "2018-11-27 08:35:30",
		"org_num": "703814 3975",
		"address_1": "Ap #552-6080 Libero Street",
		"city": "Godhra",
		"zip": "21129",
		"geo": "-77.27339, 117.00508",
		"pan": "4050008480247",
		"pin": "3858",
		"id": 5,
		"status": "read",
		"fee": "$9.12",
		"guid": "82804858-039A-CCF8-49C4-E8C08D452D74",
		"date_exit": "2018-11-02 14:48:04",
		"date_first": "2017-10-05 21:01:01",
		"date_recent": "2017-05-24 03:45:11",
		"url": "https://capco.com/"
	},
	{
		"name": "Hillary X. Skinner",
		"phone": "246-3182",
		"email": "ligula.elit.pretium@lobortisnisi.org",
		"company": "Pede Sagittis Augue Ltd",
		"date_entry": "2019-01-02 03:55:04",
		"org_num": "959685 9208",
		"address_1": "6783 Sed Avenue",
		"city": "Salzgitter",
		"zip": "S6K 7J5",
		"geo": "-53.76604, 32.48473",
		"pan": "4716186800980",
		"pin": "3735",
		"id": 6,
		"status": "unread",
		"fee": "$90.78",
		"guid": "56074A43-A3B6-F500-DAF8-FE2EEE5ED887",
		"date_exit": "2019-01-02 12:46:04",
		"date_first": "2019-02-10 16:02:02",
		"date_recent": "2018-05-30 18:56:03",
		"url": "https://capco.com/"
	},
	{
		"name": "Ina K. Watkins",
		"phone": "1-362-854-8221",
		"email": "ridiculus@vitae.net",
		"company": "Hendrerit Limited",
		"date_entry": "2017-08-17 22:28:07",
		"org_num": "897776 3203",
		"address_1": "174-2012 Nunc. Av.",
		"city": "Steendorp",
		"zip": "3791",
		"geo": "-85.10852, -46.57126",
		"pan": "4916963045045",
		"pin": "4622",
		"id": 7,
		"status": "expired",
		"fee": "$15.91",
		"guid": "3B8432B7-6001-2553-4E76-67DF66DED818",
		"date_exit": "2017-08-08 23:15:28",
		"date_first": "2019-03-19 01:41:06",
		"date_recent": "2018-12-26 23:11:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Chantale C. Emerson",
		"phone": "1-780-159-3804",
		"email": "Mauris.magna.Duis@nisi.ca",
		"company": "Magnis Dis Parturient Inc.",
		"date_entry": "2019-02-04 10:35:31",
		"org_num": "265386 8402",
		"address_1": "Ap #806-2185 Semper, Road",
		"city": "San Piero a Sieve",
		"zip": "3503 IW",
		"geo": "-10.79607, -103.04992",
		"pan": "4716447211316",
		"pin": "6690",
		"id": 8,
		"status": "read",
		"fee": "$22.17",
		"guid": "AD80C927-9D30-DCA1-59F8-53DDBF9DCAD1",
		"date_exit": "2018-08-26 18:57:43",
		"date_first": "2017-10-03 01:53:27",
		"date_recent": "2018-01-31 07:36:13",
		"url": "https://capco.com/"
	},
	{
		"name": "Adria J. Sykes",
		"phone": "849-2323",
		"email": "lacus@tellusimperdietnon.org",
		"company": "Lacus Vestibulum LLP",
		"date_entry": "2017-07-27 14:56:21",
		"org_num": "225057 1003",
		"address_1": "844-1932 Ultrices Avenue",
		"city": "Zelem",
		"zip": "615314",
		"geo": "-11.96703, 29.59137",
		"pan": "4485167545791751",
		"pin": "7874",
		"id": 9,
		"status": "expired",
		"fee": "$58.95",
		"guid": "C915A25A-33A3-DE2F-5BD4-E90705328C80",
		"date_exit": "2017-07-31 01:10:38",
		"date_first": "2018-08-24 21:24:23",
		"date_recent": "2018-11-08 02:34:30",
		"url": "https://capco.com/"
	},
	{
		"name": "Britanney Z. Neal",
		"phone": "856-1569",
		"email": "mi@duinectempus.net",
		"company": "Sem Ut Company",
		"date_entry": "2018-06-06 10:48:48",
		"org_num": "635919 3221",
		"address_1": "Ap #790-6675 Convallis Rd.",
		"city": "Lochgilphead",
		"zip": "01268",
		"geo": "46.41423, 51.06231",
		"pan": "455 63163 60465 405",
		"pin": "1703",
		"id": 10,
		"status": "expired",
		"fee": "$27.94",
		"guid": "5D34DC45-805C-14CC-75E5-B8A94BFE5D80",
		"date_exit": "2017-07-12 08:26:08",
		"date_first": "2018-11-05 04:49:30",
		"date_recent": "2018-08-21 21:19:48",
		"url": "https://capco.com/"
	},
	{
		"name": "Eve T. Tillman",
		"phone": "339-0583",
		"email": "sit.amet.consectetuer@sit.ca",
		"company": "Velit Consulting",
		"date_entry": "2017-12-23 14:14:02",
		"org_num": "042592 6847",
		"address_1": "P.O. Box 668, 9978 Sem St.",
		"city": "Lago Verde",
		"zip": "91891",
		"geo": "-34.97301, 34.60232",
		"pan": "4532 485 66 4187",
		"pin": "5574",
		"id": 11,
		"status": "unread",
		"fee": "$63.50",
		"guid": "78761D33-54CC-E8DF-8CDC-2D5AE0A89766",
		"date_exit": "2018-12-24 02:28:49",
		"date_first": "2017-08-01 08:46:20",
		"date_recent": "2017-06-05 15:57:59",
		"url": "https://capco.com/"
	},
	{
		"name": "Linus O. Duffy",
		"phone": "1-103-646-2097",
		"email": "risus.Duis@Aliquam.net",
		"company": "Ut Dolor Associates",
		"date_entry": "2018-10-30 14:09:36",
		"org_num": "958693 1926",
		"address_1": "414-1373 Eu Av.",
		"city": "Henley-on-Thames",
		"zip": "5864 IF",
		"geo": "-71.18038, 123.00144",
		"pan": "4716864836116",
		"pin": "2721",
		"id": 12,
		"status": "unread",
		"fee": "$48.57",
		"guid": "868C6D65-E761-08EE-093B-C49146D5002A",
		"date_exit": "2018-10-01 22:26:22",
		"date_first": "2018-02-01 21:02:59",
		"date_recent": "2018-02-07 16:15:16",
		"url": "https://capco.com/"
	},
	{
		"name": "Serena M. Mclaughlin",
		"phone": "179-8547",
		"email": "lorem@at.co.uk",
		"company": "Leo Cras Corporation",
		"date_entry": "2017-08-29 03:18:06",
		"org_num": "427104 6965",
		"address_1": "891-3958 Sodales Avenue",
		"city": "Imperatriz",
		"zip": "56700",
		"geo": "-61.73447, 97.57099",
		"pan": "4024007198380072",
		"pin": "8989",
		"id": 13,
		"status": "expired",
		"fee": "$65.13",
		"guid": "BB3F2A50-E93C-306F-D872-ECD818F814F1",
		"date_exit": "2017-08-02 03:58:04",
		"date_first": "2018-12-11 06:33:29",
		"date_recent": "2019-04-07 10:23:51",
		"url": "https://capco.com/"
	},
	{
		"name": "Shelby J. Hopper",
		"phone": "1-254-924-7200",
		"email": "tincidunt@insodaleselit.com",
		"company": "Nullam Corporation",
		"date_entry": "2017-08-29 19:16:24",
		"org_num": "983162 4888",
		"address_1": "246-7548 Aenean Rd.",
		"city": "Tumba",
		"zip": "3354",
		"geo": "-14.49597, 67.0092",
		"pan": "491634 1349746001",
		"pin": "3825",
		"id": 14,
		"status": "read",
		"fee": "$29.68",
		"guid": "510F094C-4D91-36A4-7332-72F820EE748F",
		"date_exit": "2018-01-12 06:45:58",
		"date_first": "2018-04-20 04:18:19",
		"date_recent": "2018-07-24 19:36:02",
		"url": "https://capco.com/"
	},
	{
		"name": "Sierra H. Delgado",
		"phone": "1-290-220-9835",
		"email": "est.arcu.ac@eu.ca",
		"company": "Lectus Ante Dictum LLP",
		"date_entry": "2017-08-24 15:55:21",
		"org_num": "423540 7550",
		"address_1": "Ap #805-9403 Dictum Rd.",
		"city": "Grand Rapids",
		"zip": "65576",
		"geo": "8.32786, 59.42351",
		"pan": "4024007150408",
		"pin": "2106",
		"id": 15,
		"status": "expired",
		"fee": "$87.57",
		"guid": "8BFA123D-C2A3-D50E-7894-E3D7B926EC3E",
		"date_exit": "2018-06-24 14:02:28",
		"date_first": "2018-06-02 07:59:48",
		"date_recent": "2018-02-25 06:28:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Dolan N. Landry",
		"phone": "1-547-350-2344",
		"email": "In@Nullaegetmetus.net",
		"company": "Aliquam Industries",
		"date_entry": "2018-02-18 05:39:27",
		"org_num": "593177 8731",
		"address_1": "Ap #459-7814 Mollis. St.",
		"city": "Valéncia",
		"zip": "45-585",
		"geo": "-65.36877, 175.00928",
		"pan": "448568 3375285144",
		"pin": "2353",
		"id": 16,
		"status": "read",
		"fee": "$81.79",
		"guid": "26334C88-3972-4451-657D-2E9C47C8EFD4",
		"date_exit": "2017-08-02 21:30:05",
		"date_first": "2018-02-28 23:46:38",
		"date_recent": "2018-02-17 02:29:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Arthur S. Francis",
		"phone": "945-3710",
		"email": "ante.dictum.mi@cubiliaCurae.com",
		"company": "Mauris Eu Elit Consulting",
		"date_entry": "2018-04-07 15:08:46",
		"org_num": "119015 2635",
		"address_1": "Ap #208-4656 Etiam St.",
		"city": "Hornsea",
		"zip": "37944-128",
		"geo": "22.97085, -85.64245",
		"pan": "453909 7748776752",
		"pin": "5621",
		"id": 17,
		"status": "expired",
		"fee": "$50.81",
		"guid": "F1B1F9CF-1CC6-B1E3-2742-19E998AD4B01",
		"date_exit": "2018-03-18 01:25:52",
		"date_first": "2017-05-09 21:51:10",
		"date_recent": "2018-08-28 12:55:30",
		"url": "https://capco.com/"
	},
	{
		"name": "Bree Q. Fletcher",
		"phone": "1-453-266-6143",
		"email": "dictum.Proin@ac.net",
		"company": "Dolor Fusce Feugiat Foundation",
		"date_entry": "2018-04-27 18:50:52",
		"org_num": "387890 3099",
		"address_1": "753-7748 Eleifend Road",
		"city": "Conchalí",
		"zip": "50608",
		"geo": "-80.70902, 87.66861",
		"pan": "4556 2023 6271 7185",
		"pin": "9211",
		"id": 18,
		"status": "unread",
		"fee": "$1.17",
		"guid": "946BE5AD-5E19-CBCB-4BBA-F36ACABC9E85",
		"date_exit": "2018-03-30 08:09:03",
		"date_first": "2018-05-10 19:13:18",
		"date_recent": "2017-06-12 23:07:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Tara L. Randall",
		"phone": "1-756-131-8285",
		"email": "Donec.est@adipiscingfringillaporttitor.co.uk",
		"company": "Neque Industries",
		"date_entry": "2019-02-24 19:01:45",
		"org_num": "839120 2242",
		"address_1": "P.O. Box 404, 8748 Proin Rd.",
		"city": "Puri",
		"zip": "F11 1QV",
		"geo": "40.77799, 26.31455",
		"pan": "4485518054357782",
		"pin": "5709",
		"id": 19,
		"status": "expired",
		"fee": "$65.59",
		"guid": "245058CF-6248-57DD-5B76-E04DF5FA26B9",
		"date_exit": "2018-07-10 23:33:14",
		"date_first": "2017-11-21 03:37:14",
		"date_recent": "2018-08-22 04:41:41",
		"url": "https://capco.com/"
	},
	{
		"name": "Bernard G. Gordon",
		"phone": "913-8978",
		"email": "justo@nonenimcommodo.edu",
		"company": "Malesuada Ltd",
		"date_entry": "2018-03-23 19:24:53",
		"org_num": "434925 1696",
		"address_1": "P.O. Box 749, 8393 Nulla St.",
		"city": "Venlo",
		"zip": "4851",
		"geo": "10.06234, 27.11222",
		"pan": "4716143985932",
		"pin": "9323",
		"id": 20,
		"status": "expired",
		"fee": "$63.76",
		"guid": "5F97467A-1F1C-0468-D459-4F3A224990B5",
		"date_exit": "2018-12-24 06:27:27",
		"date_first": "2017-07-04 03:01:42",
		"date_recent": "2019-02-28 08:08:25",
		"url": "https://capco.com/"
	},
	{
		"name": "Karleigh D. Blevins",
		"phone": "1-314-525-5009",
		"email": "leo@varius.edu",
		"company": "Risus Quisque Libero Ltd",
		"date_entry": "2018-05-01 01:02:38",
		"org_num": "217819 6016",
		"address_1": "Ap #526-5585 Et Av.",
		"city": "Wörgl",
		"zip": "23936",
		"geo": "46.7678, -147.73657",
		"pan": "4485263600008",
		"pin": "3260",
		"id": 21,
		"status": "expired",
		"fee": "$95.77",
		"guid": "25E4112F-0BB0-DD0F-28D6-B4E7C092EA73",
		"date_exit": "2018-10-23 14:52:05",
		"date_first": "2018-10-23 04:33:59",
		"date_recent": "2018-10-18 08:39:18",
		"url": "https://capco.com/"
	},
	{
		"name": "Yolanda F. Church",
		"phone": "262-2209",
		"email": "id@Maurisvestibulum.ca",
		"company": "Eget Metus Foundation",
		"date_entry": "2018-01-15 13:44:45",
		"org_num": "898109 0510",
		"address_1": "6361 Malesuada Road",
		"city": "Villers-sur-Semois",
		"zip": "0301 AZ",
		"geo": "83.58517, 71.11121",
		"pan": "4833055792147",
		"pin": "9771",
		"id": 22,
		"status": "unread",
		"fee": "$10.11",
		"guid": "0089191D-A2DC-9C48-E959-08FA0D07E46D",
		"date_exit": "2017-11-08 18:11:04",
		"date_first": "2017-10-03 14:41:24",
		"date_recent": "2019-03-20 09:07:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Barbara W. Pace",
		"phone": "1-412-281-4994",
		"email": "hendrerit@cursusa.org",
		"company": "Tristique Ac Consulting",
		"date_entry": "2017-08-07 17:48:40",
		"org_num": "607974 7173",
		"address_1": "P.O. Box 402, 6720 Ante. Ave",
		"city": "Hope",
		"zip": "72843",
		"geo": "45.13924, -49.63812",
		"pan": "4929340738164763",
		"pin": "1831",
		"id": 23,
		"status": "expired",
		"fee": "$38.52",
		"guid": "6EBB4569-FBBB-8423-4502-C964EC6E7DFA",
		"date_exit": "2018-04-22 12:47:18",
		"date_first": "2017-05-07 06:08:18",
		"date_recent": "2018-01-22 09:07:38",
		"url": "https://capco.com/"
	},
	{
		"name": "Rama V. Calhoun",
		"phone": "1-958-140-5373",
		"email": "Vestibulum@elementum.co.uk",
		"company": "Nonummy Ac Feugiat LLP",
		"date_entry": "2019-03-31 11:38:00",
		"org_num": "374325 7390",
		"address_1": "P.O. Box 889, 6923 Suspendisse Road",
		"city": "Belo Horizonte",
		"zip": "ZE32 8JP",
		"geo": "-25.9387, -127.62608",
		"pan": "453 24422 75398 801",
		"pin": "4772",
		"id": 24,
		"status": "expired",
		"fee": "$41.15",
		"guid": "0447C1D7-94B2-2332-D36D-01255720E9E9",
		"date_exit": "2018-04-05 17:22:06",
		"date_first": "2019-04-02 14:46:07",
		"date_recent": "2019-01-14 14:54:48",
		"url": "https://capco.com/"
	},
	{
		"name": "Noel H. Rasmussen",
		"phone": "247-6833",
		"email": "Nunc.commodo@magna.edu",
		"company": "Mauris Suspendisse Aliquet LLP",
		"date_entry": "2017-11-25 04:54:09",
		"org_num": "975778 6695",
		"address_1": "Ap #737-2938 Ac, Rd.",
		"city": "Sheikhupura",
		"zip": "68820",
		"geo": "66.07405, -136.82797",
		"pan": "4539131021779",
		"pin": "2253",
		"id": 25,
		"status": "expired",
		"fee": "$62.93",
		"guid": "B7D55C40-E068-C19E-444B-28C8AEB379C0",
		"date_exit": "2017-04-14 23:00:33",
		"date_first": "2018-01-24 06:11:23",
		"date_recent": "2019-03-06 01:14:27",
		"url": "https://capco.com/"
	},
	{
		"name": "Cadman N. Chase",
		"phone": "666-3900",
		"email": "diam@massa.org",
		"company": "Quam A Felis Foundation",
		"date_entry": "2018-10-05 07:48:14",
		"org_num": "117464 4896",
		"address_1": "Ap #833-3438 Arcu Av.",
		"city": "Lamorteau",
		"zip": "231984",
		"geo": "-38.19223, -10.35843",
		"pan": "4929 4944 8654 9343",
		"pin": "8339",
		"id": 26,
		"status": "read",
		"fee": "$77.76",
		"guid": "73FCF756-0D07-D5A0-B80D-39138FAF0B22",
		"date_exit": "2018-10-04 00:08:36",
		"date_first": "2018-01-19 20:40:35",
		"date_recent": "2018-02-13 14:55:49",
		"url": "https://capco.com/"
	},
	{
		"name": "Quinlan B. Hunt",
		"phone": "632-6590",
		"email": "Nulla.interdum@Suspendisseeleifend.com",
		"company": "Malesuada Integer Ltd",
		"date_entry": "2018-11-21 14:55:51",
		"org_num": "116466 3351",
		"address_1": "Ap #316-6862 Et Avenue",
		"city": "Waret-l'Ev que",
		"zip": "550980",
		"geo": "-53.58203, -92.27178",
		"pan": "4716513439627",
		"pin": "7192",
		"id": 27,
		"status": "unread",
		"fee": "$81.16",
		"guid": "9DC323E4-754D-E481-5489-145B95774A1B",
		"date_exit": "2018-12-14 06:39:11",
		"date_first": "2018-03-03 09:05:38",
		"date_recent": "2018-05-04 01:58:36",
		"url": "https://capco.com/"
	},
	{
		"name": "Beck X. Trevino",
		"phone": "1-932-127-1163",
		"email": "Nam@milacinia.ca",
		"company": "Dictum Consulting",
		"date_entry": "2018-02-10 21:38:56",
		"org_num": "418638 5136",
		"address_1": "328 Velit. Av.",
		"city": "Lions Bay",
		"zip": "U0M 3HR",
		"geo": "14.08592, 100.39917",
		"pan": "4716 758 25 2230",
		"pin": "3619",
		"id": 28,
		"status": "unread",
		"fee": "$98.62",
		"guid": "DE2ACEDA-E2E4-77AD-B281-8DA63D09BDA0",
		"date_exit": "2019-03-02 13:45:37",
		"date_first": "2017-04-26 19:45:55",
		"date_recent": "2018-11-28 07:52:07",
		"url": "https://capco.com/"
	},
	{
		"name": "Alana X. Ayers",
		"phone": "253-8857",
		"email": "non.nisi@pede.net",
		"company": "Cras Associates",
		"date_entry": "2018-09-20 23:59:55",
		"org_num": "229157 8223",
		"address_1": "864-8856 Egestas, Ave",
		"city": "Tonk",
		"zip": "27529",
		"geo": "-81.91883, 77.05566",
		"pan": "4556419462863",
		"pin": "1266",
		"id": 29,
		"status": "expired",
		"fee": "$90.46",
		"guid": "C40FA58D-8F3D-FAE1-4995-1BCBCAD29F9E",
		"date_exit": "2019-04-08 08:27:44",
		"date_first": "2018-08-27 01:50:17",
		"date_recent": "2018-11-06 23:19:03",
		"url": "https://capco.com/"
	},
	{
		"name": "Clarke B. Carver",
		"phone": "1-627-525-6714",
		"email": "Nullam@tempusrisusDonec.net",
		"company": "Dolor Egestas Rhoncus LLC",
		"date_entry": "2018-08-02 13:32:46",
		"org_num": "882721 8135",
		"address_1": "P.O. Box 295, 9095 Vestibulum St.",
		"city": "Marystown",
		"zip": "Y77 5GA",
		"geo": "57.21318, -40.91017",
		"pan": "4024007138049",
		"pin": "9788",
		"id": 30,
		"status": "expired",
		"fee": "$43.07",
		"guid": "4CBC1132-440A-4884-7D96-6C029EF49A89",
		"date_exit": "2019-03-22 01:35:33",
		"date_first": "2018-07-15 21:27:43",
		"date_recent": "2018-07-06 06:59:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Amy K. Joyner",
		"phone": "1-798-733-9787",
		"email": "Fusce.feugiat@Duis.ca",
		"company": "Diam Pellentesque Habitant Corp.",
		"date_entry": "2017-09-11 21:49:14",
		"org_num": "584371 1796",
		"address_1": "P.O. Box 404, 5382 Scelerisque St.",
		"city": "Portland",
		"zip": "72946",
		"geo": "2.40858, 86.51181",
		"pan": "4642 5917 8780 7878",
		"pin": "9981",
		"id": 31,
		"status": "read",
		"fee": "$36.57",
		"guid": "4FC21ED7-5E4E-F665-1F5F-7CEDDC4BFD9C",
		"date_exit": "2018-12-13 08:50:47",
		"date_first": "2018-06-30 16:22:05",
		"date_recent": "2018-07-12 12:28:13",
		"url": "https://capco.com/"
	},
	{
		"name": "Wilma T. Norton",
		"phone": "1-660-792-8032",
		"email": "lectus.justo@miacmattis.com",
		"company": "Id Enim Curabitur LLP",
		"date_entry": "2018-09-25 04:37:14",
		"org_num": "543123 2312",
		"address_1": "7857 Feugiat St.",
		"city": "Ely",
		"zip": "0184 BP",
		"geo": "50.09184, -162.80975",
		"pan": "4485 634 76 6801",
		"pin": "5372",
		"id": 32,
		"status": "expired",
		"fee": "$97.95",
		"guid": "26B3BF4E-BB82-BFEE-1FEF-C837B280FB5D",
		"date_exit": "2018-06-28 00:11:02",
		"date_first": "2018-03-25 16:25:12",
		"date_recent": "2017-09-23 16:18:49",
		"url": "https://capco.com/"
	},
	{
		"name": "Judith D. Schneider",
		"phone": "1-563-851-1043",
		"email": "ipsum.non.arcu@acmi.co.uk",
		"company": "Lectus Nullam Ltd",
		"date_entry": "2018-11-24 20:09:33",
		"org_num": "212721 5719",
		"address_1": "325-1812 Neque Avenue",
		"city": "Motta Visconti",
		"zip": "41217",
		"geo": "42.53392, -67.74805",
		"pan": "453 95719 66108 484",
		"pin": "7983",
		"id": 33,
		"status": "expired",
		"fee": "$0.81",
		"guid": "877BDDAE-042C-C77B-0035-C546861DE697",
		"date_exit": "2017-12-01 15:15:27",
		"date_first": "2018-04-21 01:37:56",
		"date_recent": "2018-11-19 02:34:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Kenyon L. Mercado",
		"phone": "422-7204",
		"email": "dapibus@non.org",
		"company": "Donec Elementum Company",
		"date_entry": "2017-09-02 00:12:39",
		"org_num": "495111 8779",
		"address_1": "P.O. Box 248, 5452 Fusce St.",
		"city": "Saint-Dié-des-Vosges",
		"zip": "71510",
		"geo": "-88.85202, 152.76461",
		"pan": "4485 549 67 7010",
		"pin": "1671",
		"id": 34,
		"status": "expired",
		"fee": "$13.12",
		"guid": "EE8E5A46-3065-70E8-1A4A-30D159135F74",
		"date_exit": "2017-04-17 23:51:32",
		"date_first": "2018-01-11 06:26:33",
		"date_recent": "2017-11-26 05:01:41",
		"url": "https://capco.com/"
	},
	{
		"name": "Jarrod J. Parks",
		"phone": "190-2964",
		"email": "elit.sed.consequat@Vestibulumaccumsan.net",
		"company": "Orci Foundation",
		"date_entry": "2018-01-21 02:43:21",
		"org_num": "425301 4080",
		"address_1": "957-9194 Sem, Avenue",
		"city": "Squillace",
		"zip": "518028",
		"geo": "-29.06609, -83.66727",
		"pan": "4539773840850006",
		"pin": "6594",
		"id": 35,
		"status": "expired",
		"fee": "$85.10",
		"guid": "88BCE5B6-7775-2AD1-0F19-58B13C29AAE1",
		"date_exit": "2017-11-07 06:08:23",
		"date_first": "2018-01-16 02:25:43",
		"date_recent": "2018-09-04 09:53:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Vanna O. Dixon",
		"phone": "544-7104",
		"email": "et.malesuada.fames@bibendumfermentummetus.org",
		"company": "Malesuada Malesuada Integer PC",
		"date_entry": "2018-12-05 20:00:55",
		"org_num": "737851 4488",
		"address_1": "Ap #233-9090 Vel Street",
		"city": "Linkebeek",
		"zip": "21278",
		"geo": "-43.87927, -41.54631",
		"pan": "4485134778579",
		"pin": "8891",
		"id": 36,
		"status": "unread",
		"fee": "$0.28",
		"guid": "2B005998-2CF8-E94B-93C5-E7EBCB8FE65D",
		"date_exit": "2018-01-30 03:36:39",
		"date_first": "2019-03-17 18:09:46",
		"date_recent": "2019-03-01 02:40:41",
		"url": "https://capco.com/"
	},
	{
		"name": "Joseph K. Cameron",
		"phone": "234-1220",
		"email": "Aliquam.erat.volutpat@ideratEtiam.co.uk",
		"company": "Nisi Sem Semper Ltd",
		"date_entry": "2018-12-06 20:10:28",
		"org_num": "394287 7683",
		"address_1": "Ap #801-1379 Et Ave",
		"city": "Nancy",
		"zip": "10417",
		"geo": "-69.83574, 5.64284",
		"pan": "455 62428 61129 029",
		"pin": "5146",
		"id": 37,
		"status": "read",
		"fee": "$97.88",
		"guid": "726C2E2D-F2DB-218F-B95E-63206B1F2582",
		"date_exit": "2018-12-30 21:30:54",
		"date_first": "2017-11-20 00:35:30",
		"date_recent": "2019-03-06 23:19:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Sydnee A. Holden",
		"phone": "1-795-613-5979",
		"email": "sodales.elit.erat@pellentesque.co.uk",
		"company": "Vel Arcu Eu Company",
		"date_entry": "2018-06-04 11:40:27",
		"org_num": "242175 7689",
		"address_1": "Ap #240-8327 Dapibus Rd.",
		"city": "Polpenazze del Garda",
		"zip": "431585",
		"geo": "-76.46627, -101.21237",
		"pan": "4024 0071 9942 1446",
		"pin": "3867",
		"id": 38,
		"status": "expired",
		"fee": "$8.10",
		"guid": "14F83F52-ACB6-90F9-F8D3-BEDF2BD37243",
		"date_exit": "2017-08-18 18:24:22",
		"date_first": "2018-08-22 19:41:45",
		"date_recent": "2018-07-24 02:25:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Yasir D. Spence",
		"phone": "1-820-716-1392",
		"email": "sapien.gravida@necurna.edu",
		"company": "Nullam Ut Incorporated",
		"date_entry": "2017-10-24 06:50:04",
		"org_num": "767182 1754",
		"address_1": "Ap #560-6972 Consequat Road",
		"city": "Scandriglia",
		"zip": "16183",
		"geo": "9.99945, -44.47648",
		"pan": "4556887255047433",
		"pin": "4967",
		"id": 39,
		"status": "unread",
		"fee": "$6.88",
		"guid": "97794309-72A4-700F-0487-31CE80CDEE26",
		"date_exit": "2018-05-20 09:40:47",
		"date_first": "2018-02-17 00:30:49",
		"date_recent": "2017-05-31 01:36:39",
		"url": "https://capco.com/"
	},
	{
		"name": "Emmanuel X. Bruce",
		"phone": "1-648-628-8155",
		"email": "velit.justo.nec@commodo.org",
		"company": "Auctor Odio Consulting",
		"date_entry": "2018-02-08 15:51:02",
		"org_num": "127875 9541",
		"address_1": "417-3815 Aliquam Rd.",
		"city": "Crotta d'Adda",
		"zip": "92859",
		"geo": "-43.46105, 141.06322",
		"pan": "4649 075 31 4286",
		"pin": "7814",
		"id": 40,
		"status": "expired",
		"fee": "$6.05",
		"guid": "6EC183E9-816C-51AE-3615-54A54611C860",
		"date_exit": "2018-02-18 06:20:57",
		"date_first": "2017-12-27 03:33:04",
		"date_recent": "2019-01-30 22:34:23",
		"url": "https://capco.com/"
	},
	{
		"name": "Maxine G. Donaldson",
		"phone": "230-1574",
		"email": "malesuada.vel.convallis@elit.com",
		"company": "Ante Ipsum Primis Corporation",
		"date_entry": "2018-08-07 09:18:21",
		"org_num": "863890 5482",
		"address_1": "P.O. Box 880, 3322 Tempor Rd.",
		"city": "Renlies",
		"zip": "32958",
		"geo": "-48.47999, 18.74918",
		"pan": "4916 897 86 3265",
		"pin": "2847",
		"id": 41,
		"status": "unread",
		"fee": "$82.31",
		"guid": "8C2CAD26-5472-2615-D012-2B4EF87B0FE6",
		"date_exit": "2019-03-14 00:46:05",
		"date_first": "2018-04-24 21:11:37",
		"date_recent": "2017-11-13 00:22:40",
		"url": "https://capco.com/"
	},
	{
		"name": "Jelani O. Rosario",
		"phone": "1-353-555-1537",
		"email": "aliquet.lobortis.nisi@lacusMaurisnon.org",
		"company": "Mauris Associates",
		"date_entry": "2018-09-20 15:05:33",
		"org_num": "613401 7018",
		"address_1": "700-8900 Senectus St.",
		"city": "Ganganagar",
		"zip": "TD9H 0YU",
		"geo": "68.78899, 61.84349",
		"pan": "492 96204 71590 682",
		"pin": "4606",
		"id": 42,
		"status": "expired",
		"fee": "$89.82",
		"guid": "C1B78EAB-E072-BADA-F516-76151297F2DA",
		"date_exit": "2019-03-15 20:09:55",
		"date_first": "2018-02-25 00:25:45",
		"date_recent": "2018-11-14 21:50:48",
		"url": "https://capco.com/"
	},
	{
		"name": "Yvette W. Hahn",
		"phone": "377-7087",
		"email": "commodo@adipiscingenim.net",
		"company": "Ante Limited",
		"date_entry": "2017-08-22 22:18:43",
		"org_num": "562122 9664",
		"address_1": "6331 Pharetra, Rd.",
		"city": "Cerreto di Spoleto",
		"zip": "16614",
		"geo": "-55.59197, 162.33939",
		"pan": "4024007167531788",
		"pin": "8970",
		"id": 43,
		"status": "unread",
		"fee": "$35.89",
		"guid": "0D4734CA-0AD8-ABA8-B86B-D79B1C4EBC8A",
		"date_exit": "2018-02-03 11:58:33",
		"date_first": "2018-10-03 14:30:22",
		"date_recent": "2018-01-10 04:24:34",
		"url": "https://capco.com/"
	},
	{
		"name": "Neil Y. Smith",
		"phone": "1-454-293-2459",
		"email": "interdum.Nunc.sollicitudin@pedeNuncsed.org",
		"company": "Suspendisse Sagittis Limited",
		"date_entry": "2018-02-05 02:11:50",
		"org_num": "626423 5802",
		"address_1": "817-209 Velit Ave",
		"city": "Parauapebas",
		"zip": "846688",
		"geo": "-29.63516, 55.95271",
		"pan": "4916955661643",
		"pin": "9433",
		"id": 44,
		"status": "read",
		"fee": "$89.01",
		"guid": "512BA67F-7DD4-BE15-010C-E28A2835EC88",
		"date_exit": "2018-10-30 00:22:13",
		"date_first": "2018-07-10 11:30:03",
		"date_recent": "2017-09-14 19:21:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Ori R. Slater",
		"phone": "1-989-512-3961",
		"email": "dictum@placeratCrasdictum.edu",
		"company": "Ut Corporation",
		"date_entry": "2017-08-28 15:13:45",
		"org_num": "205215 5070",
		"address_1": "419-3456 Nullam St.",
		"city": "Campbellton",
		"zip": "323585",
		"geo": "81.53341, 146.64832",
		"pan": "453288 6041586679",
		"pin": "8630",
		"id": 45,
		"status": "read",
		"fee": "$20.51",
		"guid": "015336AE-9E29-3C4A-BA7F-AC16019DD288",
		"date_exit": "2018-05-19 18:11:04",
		"date_first": "2017-04-13 06:56:44",
		"date_recent": "2019-02-03 03:15:52",
		"url": "https://capco.com/"
	},
	{
		"name": "Macon O. Robinson",
		"phone": "1-504-866-2821",
		"email": "tortor@Nullasempertellus.com",
		"company": "Nascetur Limited",
		"date_entry": "2017-09-10 13:34:51",
		"org_num": "942473 6990",
		"address_1": "P.O. Box 343, 9071 Nunc Ave",
		"city": "Argyle",
		"zip": "8604 GC",
		"geo": "68.88995, -53.09688",
		"pan": "4485886872711",
		"pin": "8433",
		"id": 46,
		"status": "expired",
		"fee": "$19.57",
		"guid": "C49165B2-26B0-12A3-35C8-89EA63410AD7",
		"date_exit": "2019-03-25 19:29:36",
		"date_first": "2019-02-15 02:09:52",
		"date_recent": "2018-10-24 01:58:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Ebony G. Harper",
		"phone": "1-860-983-9360",
		"email": "sagittis@estNunc.co.uk",
		"company": "Etiam Gravida Limited",
		"date_entry": "2017-05-17 14:45:24",
		"org_num": "354366 8259",
		"address_1": "6559 Aliquam Av.",
		"city": "Abolens",
		"zip": "5619",
		"geo": "32.24293, 20.12909",
		"pan": "4916642169919",
		"pin": "1664",
		"id": 47,
		"status": "expired",
		"fee": "$88.77",
		"guid": "C7622634-E2AD-EACC-BFCB-6D632A24389E",
		"date_exit": "2019-04-09 07:55:43",
		"date_first": "2019-01-13 19:06:15",
		"date_recent": "2017-06-22 20:29:09",
		"url": "https://capco.com/"
	},
	{
		"name": "Driscoll B. Guzman",
		"phone": "1-766-394-2130",
		"email": "Donec@Nunc.org",
		"company": "Dui Quis Incorporated",
		"date_entry": "2017-07-12 11:39:09",
		"org_num": "972949 6373",
		"address_1": "177-2244 Sed St.",
		"city": "Kalisz",
		"zip": "31518",
		"geo": "-22.81713, -5.29922",
		"pan": "4485026490929",
		"pin": "9124",
		"id": 48,
		"status": "read",
		"fee": "$11.39",
		"guid": "F119CEE2-953D-4168-3CC8-60EC7A802520",
		"date_exit": "2018-09-17 21:37:46",
		"date_first": "2018-10-28 05:07:43",
		"date_recent": "2018-02-16 17:51:56",
		"url": "https://capco.com/"
	},
	{
		"name": "Kasimir W. Hurley",
		"phone": "1-571-666-0041",
		"email": "Sed.diam@Naminterdum.co.uk",
		"company": "Sit Amet Company",
		"date_entry": "2018-05-19 04:10:52",
		"org_num": "359386 4931",
		"address_1": "7636 Nisi Rd.",
		"city": "Buizingen",
		"zip": "33447",
		"geo": "85.44347, -118.52641",
		"pan": "4539481681768",
		"pin": "9790",
		"id": 49,
		"status": "read",
		"fee": "$90.82",
		"guid": "82851919-5859-96F9-EA78-6A34FC65367F",
		"date_exit": "2019-01-18 09:48:44",
		"date_first": "2019-01-11 12:02:13",
		"date_recent": "2018-02-09 01:15:16",
		"url": "https://capco.com/"
	},
	{
		"name": "Hayden M. Henson",
		"phone": "836-9329",
		"email": "auctor.velit.Aliquam@famesac.org",
		"company": "Etiam Bibendum Fermentum Foundation",
		"date_entry": "2017-12-01 18:00:42",
		"org_num": "253735 6160",
		"address_1": "Ap #389-4463 A St.",
		"city": "Grande Prairie",
		"zip": "10814",
		"geo": "-10.31013, -152.69732",
		"pan": "4716178155567",
		"pin": "4416",
		"id": 50,
		"status": "unread",
		"fee": "$3.86",
		"guid": "1CCA38CD-DD95-B169-0E8E-639CA8913C37",
		"date_exit": "2018-10-11 19:11:08",
		"date_first": "2018-05-27 18:03:43",
		"date_recent": "2019-03-29 17:38:36",
		"url": "https://capco.com/"
	},
	{
		"name": "Ross Q. Boyle",
		"phone": "457-5079",
		"email": "quis.diam.luctus@Maecenasliberoest.org",
		"company": "Lacus Vestibulum Inc.",
		"date_entry": "2018-08-02 19:17:28",
		"org_num": "168421 1590",
		"address_1": "Ap #590-3571 Aliquet Road",
		"city": "Delitzsch",
		"zip": "70505",
		"geo": "64.48178, -127.61076",
		"pan": "434836 6747572004",
		"pin": "5614",
		"id": 51,
		"status": "read",
		"fee": "$22.04",
		"guid": "72D64929-FED1-03C3-41F3-283A22EB33B2",
		"date_exit": "2019-03-28 02:17:55",
		"date_first": "2017-05-13 11:58:34",
		"date_recent": "2018-10-07 17:37:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Dora E. Webster",
		"phone": "1-810-480-0199",
		"email": "rutrum.eu.ultrices@sedtortorInteger.co.uk",
		"company": "Magna Industries",
		"date_entry": "2017-06-10 05:24:54",
		"org_num": "639625 2584",
		"address_1": "P.O. Box 630, 1656 Eu, St.",
		"city": "Swan Hill",
		"zip": "691775",
		"geo": "69.3288, -50.52428",
		"pan": "4485212061815",
		"pin": "3933",
		"id": 52,
		"status": "read",
		"fee": "$55.75",
		"guid": "1B96B1E4-26CA-8BE3-343C-23966BF3B5CA",
		"date_exit": "2017-06-06 09:01:01",
		"date_first": "2017-05-31 04:15:25",
		"date_recent": "2017-08-10 18:14:12",
		"url": "https://capco.com/"
	},
	{
		"name": "Austin N. Bush",
		"phone": "1-540-576-4177",
		"email": "Aliquam.ornare.libero@lectusrutrum.ca",
		"company": "Fringilla Institute",
		"date_entry": "2017-09-18 06:28:45",
		"org_num": "748163 9818",
		"address_1": "3247 Sagittis. Road",
		"city": "Isola di Capo Rizzuto",
		"zip": "6784",
		"geo": "32.51958, 40.62025",
		"pan": "453952 4709261524",
		"pin": "7797",
		"id": 53,
		"status": "expired",
		"fee": "$50.19",
		"guid": "905096C8-4176-AAE9-7A24-7DF478090C9A",
		"date_exit": "2018-05-11 19:36:56",
		"date_first": "2017-06-25 00:20:58",
		"date_recent": "2018-11-25 16:34:01",
		"url": "https://capco.com/"
	},
	{
		"name": "Britanni Z. Acevedo",
		"phone": "1-700-497-7844",
		"email": "nec.luctus.felis@nonummyacfeugiat.net",
		"company": "Nulla Corp.",
		"date_entry": "2017-05-07 10:10:02",
		"org_num": "086932 4616",
		"address_1": "P.O. Box 819, 1452 Ut, Avenue",
		"city": "Red Deer",
		"zip": "3580",
		"geo": "-0.09168, 95.28444",
		"pan": "4024007186278528",
		"pin": "8425",
		"id": 54,
		"status": "unread",
		"fee": "$6.69",
		"guid": "4F6F2D38-1D5F-EFE5-C39F-AB9DA9E350FD",
		"date_exit": "2018-07-20 18:49:05",
		"date_first": "2018-04-17 05:01:16",
		"date_recent": "2018-05-09 15:42:35",
		"url": "https://capco.com/"
	},
	{
		"name": "Dane N. Benson",
		"phone": "1-874-139-9993",
		"email": "massa.lobortis.ultrices@odioauctorvitae.ca",
		"company": "Lorem Tristique Aliquet Consulting",
		"date_entry": "2019-02-22 11:25:37",
		"org_num": "085368 9552",
		"address_1": "3548 Consequat Road",
		"city": "Natales",
		"zip": "57-357",
		"geo": "-56.12449, 46.93794",
		"pan": "4916290069684",
		"pin": "8406",
		"id": 55,
		"status": "expired",
		"fee": "$87.01",
		"guid": "B8C9CFB7-70CF-D0EA-EF70-50E1327E8EC4",
		"date_exit": "2019-02-07 00:15:17",
		"date_first": "2017-09-15 15:11:08",
		"date_recent": "2018-10-22 00:51:23",
		"url": "https://capco.com/"
	},
	{
		"name": "Brenda H. Sutton",
		"phone": "679-6100",
		"email": "amet.ornare@duiFusce.net",
		"company": "Proin Corporation",
		"date_entry": "2018-03-06 17:17:23",
		"org_num": "148827 3259",
		"address_1": "477-8099 Sed Rd.",
		"city": "Hamburg",
		"zip": "946607",
		"geo": "-26.16387, -42.55545",
		"pan": "4532730834877269",
		"pin": "2293",
		"id": 56,
		"status": "read",
		"fee": "$94.62",
		"guid": "9AD75465-1153-410E-9F54-A1D73F99DC4A",
		"date_exit": "2019-04-09 21:11:23",
		"date_first": "2017-09-09 20:42:25",
		"date_recent": "2019-03-28 19:49:29",
		"url": "https://capco.com/"
	},
	{
		"name": "Cassandra Y. Soto",
		"phone": "1-212-497-6766",
		"email": "non.lacinia@ligulaAeneangravida.com",
		"company": "Integer Sem Elit PC",
		"date_entry": "2018-10-24 01:13:30",
		"org_num": "833481 8302",
		"address_1": "Ap #447-652 Blandit St.",
		"city": "Caplan",
		"zip": "Y1V 1T8",
		"geo": "38.885, 10.09071",
		"pan": "491077 860101 8981",
		"pin": "5009",
		"id": 57,
		"status": "expired",
		"fee": "$18.41",
		"guid": "A9B992C5-4FEB-8124-D770-83DF03DD2C66",
		"date_exit": "2018-09-21 00:42:24",
		"date_first": "2017-07-23 00:22:15",
		"date_recent": "2017-12-18 10:18:53",
		"url": "https://capco.com/"
	},
	{
		"name": "Kathleen M. Thompson",
		"phone": "1-247-401-6519",
		"email": "sodales.at.velit@nostraper.net",
		"company": "Diam At Consulting",
		"date_entry": "2018-09-19 21:27:12",
		"org_num": "937503 7992",
		"address_1": "P.O. Box 635, 5794 Posuere Street",
		"city": "Tours",
		"zip": "68594",
		"geo": "-17.39265, 46.0728",
		"pan": "4556 918 42 1709",
		"pin": "8038",
		"id": 58,
		"status": "expired",
		"fee": "$45.65",
		"guid": "D6C0F659-8F01-1744-19C7-7847D48682FF",
		"date_exit": "2018-12-23 20:40:47",
		"date_first": "2017-04-10 19:09:16",
		"date_recent": "2018-12-12 20:24:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Xander F. Moon",
		"phone": "778-7411",
		"email": "semper.erat.in@nonummyipsum.co.uk",
		"company": "Risus Nulla Eget Limited",
		"date_entry": "2017-11-01 09:30:13",
		"org_num": "386196 2805",
		"address_1": "680-9242 Id, Rd.",
		"city": "Harbour Grace",
		"zip": "57797",
		"geo": "77.20275, 132.76313",
		"pan": "4556077759188",
		"pin": "4936",
		"id": 59,
		"status": "read",
		"fee": "$35.60",
		"guid": "58EBAB5F-F27A-B22A-5DB1-EC0C5AA2205D",
		"date_exit": "2018-04-26 11:01:25",
		"date_first": "2018-06-29 16:54:07",
		"date_recent": "2017-09-11 05:28:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Lois D. Mckee",
		"phone": "1-538-390-1465",
		"email": "vehicula@eleifend.ca",
		"company": "Fusce Mi Institute",
		"date_entry": "2018-07-25 00:28:23",
		"org_num": "652885 1782",
		"address_1": "Ap #606-5165 Ornare Rd.",
		"city": "Szczecin",
		"zip": "1452",
		"geo": "-55.15675, -97.16988",
		"pan": "471 68865 57380 275",
		"pin": "5214",
		"id": 60,
		"status": "read",
		"fee": "$24.02",
		"guid": "D5AAC864-430F-D62A-4001-D9219A2AFACC",
		"date_exit": "2018-02-06 23:00:18",
		"date_first": "2017-06-08 21:39:10",
		"date_recent": "2017-08-10 10:36:34",
		"url": "https://capco.com/"
	},
	{
		"name": "Jescie D. Santiago",
		"phone": "1-314-751-3799",
		"email": "dolor.egestas@euismodenim.ca",
		"company": "Duis Ac Arcu Institute",
		"date_entry": "2019-02-10 12:07:13",
		"org_num": "183934 3819",
		"address_1": "Ap #910-5029 Orci, St.",
		"city": "São João de Meriti",
		"zip": "G2 9EJ",
		"geo": "-61.60688, -11.57447",
		"pan": "471662 576078 6583",
		"pin": "8412",
		"id": 61,
		"status": "unread",
		"fee": "$78.05",
		"guid": "5838B55B-282E-11A2-278F-A3EE5B19A481",
		"date_exit": "2018-11-29 19:24:24",
		"date_first": "2018-12-17 06:53:08",
		"date_recent": "2017-05-20 01:09:04",
		"url": "https://capco.com/"
	},
	{
		"name": "Xander Y. Hebert",
		"phone": "514-8850",
		"email": "Donec.elementum.lorem@tortordictum.net",
		"company": "Phasellus Fermentum LLP",
		"date_entry": "2018-01-02 17:03:27",
		"org_num": "393083 0678",
		"address_1": "Ap #150-2322 A, Rd.",
		"city": "Olmué",
		"zip": "68003",
		"geo": "-19.78078, 79.01399",
		"pan": "4974316293416",
		"pin": "9501",
		"id": 62,
		"status": "read",
		"fee": "$93.84",
		"guid": "8400AAAB-9EAC-2250-4914-25AF1F359D58",
		"date_exit": "2017-09-12 09:03:45",
		"date_first": "2018-02-18 03:24:25",
		"date_recent": "2017-06-30 17:22:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Derek U. Koch",
		"phone": "931-5885",
		"email": "ultrices@risus.ca",
		"company": "Cursus Purus Nullam LLP",
		"date_entry": "2018-06-17 09:25:41",
		"org_num": "809855 6205",
		"address_1": "Ap #922-2019 Fusce Rd.",
		"city": "Mathura",
		"zip": "26963",
		"geo": "27.49486, 134.27596",
		"pan": "4916468813848",
		"pin": "4514",
		"id": 63,
		"status": "unread",
		"fee": "$44.45",
		"guid": "488C300F-412A-FF97-C9F8-86FCCCB584D6",
		"date_exit": "2019-03-05 03:20:54",
		"date_first": "2018-10-28 07:58:32",
		"date_recent": "2017-06-13 01:29:51",
		"url": "https://capco.com/"
	},
	{
		"name": "Mason N. Watson",
		"phone": "583-5924",
		"email": "Sed@neque.co.uk",
		"company": "Orci In Consequat Consulting",
		"date_entry": "2017-04-29 02:20:53",
		"org_num": "236336 8214",
		"address_1": "P.O. Box 471, 9235 Dis Avenue",
		"city": "Ternat",
		"zip": "908085",
		"geo": "-76.56637, 172.04797",
		"pan": "4722104322727",
		"pin": "7314",
		"id": 64,
		"status": "unread",
		"fee": "$2.07",
		"guid": "596CFDE6-CB7B-B289-0B02-20F4FDB50B20",
		"date_exit": "2018-01-05 17:03:32",
		"date_first": "2018-09-14 03:35:23",
		"date_recent": "2017-05-13 05:45:10",
		"url": "https://capco.com/"
	},
	{
		"name": "Caesar D. Marsh",
		"phone": "740-3332",
		"email": "imperdiet.non@Donec.org",
		"company": "Molestie Tellus Aenean LLP",
		"date_entry": "2018-01-23 06:29:12",
		"org_num": "312608 0583",
		"address_1": "P.O. Box 736, 6579 Cursus Rd.",
		"city": "Wallasey",
		"zip": "61023-159",
		"geo": "-19.03992, -15.42891",
		"pan": "453 23214 80295 780",
		"pin": "6432",
		"id": 65,
		"status": "read",
		"fee": "$84.29",
		"guid": "BDFD879C-9521-A493-15B8-06B7856921F8",
		"date_exit": "2018-12-03 03:21:32",
		"date_first": "2018-04-08 03:36:28",
		"date_recent": "2017-06-22 05:18:58",
		"url": "https://capco.com/"
	},
	{
		"name": "Joelle W. Chapman",
		"phone": "1-239-365-6824",
		"email": "Sed.malesuada.augue@Phasellusvitaemauris.org",
		"company": "Donec Corp.",
		"date_entry": "2018-07-25 19:12:00",
		"org_num": "195361 9200",
		"address_1": "P.O. Box 404, 6805 Quisque St.",
		"city": "Gressoney-La-Trinitè",
		"zip": "XR93 3HK",
		"geo": "80.61713, 115.48715",
		"pan": "453288 3428799132",
		"pin": "3411",
		"id": 66,
		"status": "read",
		"fee": "$99.44",
		"guid": "E31FBF88-346D-B7F2-74EE-9D14390FA029",
		"date_exit": "2018-06-10 06:09:44",
		"date_first": "2018-12-13 23:04:33",
		"date_recent": "2018-04-15 21:52:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Irma Y. Potter",
		"phone": "725-6522",
		"email": "mus.Proin@acrisusMorbi.org",
		"company": "Mi Lorem Vehicula Associates",
		"date_entry": "2018-12-13 07:35:43",
		"org_num": "222541 6169",
		"address_1": "P.O. Box 417, 7266 Id, Road",
		"city": "Broken Arrow",
		"zip": "66580-874",
		"geo": "56.71346, -119.82764",
		"pan": "4745400087549089",
		"pin": "4160",
		"id": 67,
		"status": "read",
		"fee": "$24.94",
		"guid": "416EE70F-689A-84B2-2AE1-8801BD56BE39",
		"date_exit": "2018-10-29 21:39:42",
		"date_first": "2018-08-07 19:26:17",
		"date_recent": "2018-06-25 05:26:30",
		"url": "https://capco.com/"
	},
	{
		"name": "Erich T. Lara",
		"phone": "1-690-673-4637",
		"email": "libero.Morbi@Donecnibhenim.ca",
		"company": "Parturient Company",
		"date_entry": "2018-07-21 02:52:37",
		"org_num": "502820 4724",
		"address_1": "P.O. Box 390, 1356 Parturient Av.",
		"city": "Seydişehir",
		"zip": "37122",
		"geo": "-26.58601, 55.54108",
		"pan": "4532150859625",
		"pin": "9041",
		"id": 68,
		"status": "unread",
		"fee": "$55.76",
		"guid": "BB179257-7A29-CD52-067D-0E80E0830024",
		"date_exit": "2018-01-22 21:27:29",
		"date_first": "2018-02-27 12:10:03",
		"date_recent": "2018-04-10 05:13:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Colby H. Pearson",
		"phone": "660-6842",
		"email": "cursus@Integereulacus.co.uk",
		"company": "Mauris Sapien Foundation",
		"date_entry": "2018-10-07 20:42:04",
		"org_num": "864731 2456",
		"address_1": "4596 Euismod Street",
		"city": "Rocca Massima",
		"zip": "18256",
		"geo": "20.66971, 127.81109",
		"pan": "4556423260060060",
		"pin": "2640",
		"id": 69,
		"status": "expired",
		"fee": "$32.41",
		"guid": "F632C6BB-74C6-6D78-BCD6-E83C8B904BA4",
		"date_exit": "2018-01-17 18:56:11",
		"date_first": "2018-02-25 12:39:45",
		"date_recent": "2017-04-20 04:48:59",
		"url": "https://capco.com/"
	},
	{
		"name": "Eve L. Shields",
		"phone": "450-7180",
		"email": "vel.lectus.Cum@purusaccumsaninterdum.org",
		"company": "Urna Suscipit Nonummy Consulting",
		"date_entry": "2019-01-07 03:54:28",
		"org_num": "217429 6596",
		"address_1": "P.O. Box 669, 6275 Vitae Avenue",
		"city": "Aieta",
		"zip": "44271",
		"geo": "43.06866, -41.21979",
		"pan": "453985 724943 5962",
		"pin": "4087",
		"id": 70,
		"status": "expired",
		"fee": "$0.40",
		"guid": "2DE6879B-72F4-1445-74F1-559FE49B59CD",
		"date_exit": "2017-12-10 09:01:46",
		"date_first": "2018-07-06 08:12:04",
		"date_recent": "2019-02-08 01:06:13",
		"url": "https://capco.com/"
	},
	{
		"name": "Mannix F. Crosby",
		"phone": "518-6295",
		"email": "ut.pellentesque.eget@eulacusQuisque.co.uk",
		"company": "Vel Quam Dignissim Ltd",
		"date_entry": "2017-12-20 07:54:41",
		"org_num": "678722 1578",
		"address_1": "P.O. Box 660, 9248 Mauris Street",
		"city": "Cinisi",
		"zip": "KI0 3JN",
		"geo": "-35.14459, -36.38795",
		"pan": "4929 222 67 0453",
		"pin": "3405",
		"id": 71,
		"status": "expired",
		"fee": "$31.29",
		"guid": "05DCD344-4869-20D7-A005-2FFBAAE24E9E",
		"date_exit": "2017-12-04 05:05:55",
		"date_first": "2018-02-09 01:42:08",
		"date_recent": "2018-06-19 04:08:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Dominic W. Hansen",
		"phone": "604-0999",
		"email": "ac.orci@antedictumcursus.co.uk",
		"company": "Dictum Eu Incorporated",
		"date_entry": "2019-01-23 12:57:48",
		"org_num": "373565 5239",
		"address_1": "508-6784 Eros. St.",
		"city": "Anchorage",
		"zip": "8582",
		"geo": "62.4581, -60.75526",
		"pan": "4539555386483015",
		"pin": "5642",
		"id": 72,
		"status": "read",
		"fee": "$68.39",
		"guid": "28FDCB13-833E-2DF4-B7D7-32C4F9402112",
		"date_exit": "2018-09-18 00:08:57",
		"date_first": "2017-09-09 12:12:39",
		"date_recent": "2017-08-25 08:47:28",
		"url": "https://capco.com/"
	},
	{
		"name": "Sonia R. Nielsen",
		"phone": "1-437-411-1338",
		"email": "nibh.Aliquam.ornare@ametconsectetuer.com",
		"company": "Diam Limited",
		"date_entry": "2017-06-21 21:08:14",
		"org_num": "349045 6955",
		"address_1": "P.O. Box 193, 3331 Duis Rd.",
		"city": "Solre-sur-Sambre",
		"zip": "877223",
		"geo": "-27.7735, 56.48663",
		"pan": "4417540207240",
		"pin": "7810",
		"id": 73,
		"status": "expired",
		"fee": "$16.09",
		"guid": "762075D9-D617-F818-974E-3083CAD23513",
		"date_exit": "2018-02-27 05:53:15",
		"date_first": "2018-12-12 10:43:33",
		"date_recent": "2017-10-30 21:18:51",
		"url": "https://capco.com/"
	},
	{
		"name": "Imelda O. Ruiz",
		"phone": "1-864-976-7071",
		"email": "orci@orciDonecnibh.ca",
		"company": "Nec Ltd",
		"date_entry": "2017-04-25 01:28:46",
		"org_num": "003500 3029",
		"address_1": "5540 Etiam Road",
		"city": "Ergani",
		"zip": "70557",
		"geo": "77.7855, 156.61055",
		"pan": "4024007138718",
		"pin": "5152",
		"id": 74,
		"status": "expired",
		"fee": "$48.64",
		"guid": "ACA60028-24D4-2F31-1A5C-858AB6C92307",
		"date_exit": "2017-08-31 13:26:22",
		"date_first": "2017-12-03 14:11:45",
		"date_recent": "2019-03-22 22:53:12",
		"url": "https://capco.com/"
	},
	{
		"name": "Morgan H. Davenport",
		"phone": "1-550-395-6439",
		"email": "Nullam.enim@pedeultrices.net",
		"company": "Dui Augue Eu LLP",
		"date_entry": "2018-03-11 06:04:23",
		"org_num": "036036 2701",
		"address_1": "P.O. Box 330, 2410 Aliquam Avenue",
		"city": "Villingen-Schwennin",
		"zip": "6946 EU",
		"geo": "-32.05054, 122.01961",
		"pan": "4539163713061",
		"pin": "7612",
		"id": 75,
		"status": "read",
		"fee": "$3.28",
		"guid": "7048EC29-2E1D-6715-46F4-00EABA1C6E89",
		"date_exit": "2018-08-01 23:54:09",
		"date_first": "2019-03-02 01:57:41",
		"date_recent": "2018-05-21 00:23:02",
		"url": "https://capco.com/"
	},
	{
		"name": "Acton Y. Mckinney",
		"phone": "558-6918",
		"email": "Integer.aliquam@egestasa.edu",
		"company": "Facilisis Limited",
		"date_entry": "2017-11-06 20:23:08",
		"org_num": "105598 9683",
		"address_1": "651-7648 Eleifend Rd.",
		"city": "Wardin",
		"zip": "59770",
		"geo": "-5.50214, -42.24173",
		"pan": "453931 8025539295",
		"pin": "8687",
		"id": 76,
		"status": "read",
		"fee": "$64.55",
		"guid": "DC9F67BB-B3B3-D298-A557-FFFE0269406B",
		"date_exit": "2017-10-11 17:10:41",
		"date_first": "2018-10-18 12:45:31",
		"date_recent": "2017-07-13 13:13:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Maggie W. Hooper",
		"phone": "1-231-140-3173",
		"email": "velit@Phasellus.com",
		"company": "Risus LLP",
		"date_entry": "2017-07-25 03:30:30",
		"org_num": "318371 4785",
		"address_1": "Ap #515-4886 Felis, Road",
		"city": "Pogliano Milanese",
		"zip": "8338",
		"geo": "-24.46516, -94.13605",
		"pan": "4929745171635634",
		"pin": "8941",
		"id": 77,
		"status": "unread",
		"fee": "$72.58",
		"guid": "B85AA20E-C71C-A7F3-9A6C-8E0368880FEC",
		"date_exit": "2018-08-05 07:48:10",
		"date_first": "2018-09-28 13:49:43",
		"date_recent": "2017-06-11 00:55:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Cruz D. Poole",
		"phone": "1-482-936-3978",
		"email": "ornare.lectus@mifelis.co.uk",
		"company": "Tellus Incorporated",
		"date_entry": "2018-10-04 18:51:18",
		"org_num": "666184 3455",
		"address_1": "Ap #179-6710 Ante. Ave",
		"city": "Langford",
		"zip": "80481",
		"geo": "-56.66945, 107.55731",
		"pan": "4716497036803",
		"pin": "8080",
		"id": 78,
		"status": "expired",
		"fee": "$18.78",
		"guid": "9CD2B2AB-BE9C-F51F-94BF-051545881D7E",
		"date_exit": "2017-06-07 19:26:07",
		"date_first": "2017-12-18 10:08:52",
		"date_recent": "2018-04-13 20:58:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Basil I. Solis",
		"phone": "276-8191",
		"email": "Proin.sed.turpis@Fuscediam.ca",
		"company": "Vulputate Eu Corp.",
		"date_entry": "2017-09-13 09:20:01",
		"org_num": "085508 3077",
		"address_1": "1706 Maecenas Rd.",
		"city": "Poitiers",
		"zip": "8931",
		"geo": "-10.98978, 179.10961",
		"pan": "4916 0482 9658 7052",
		"pin": "2815",
		"id": 79,
		"status": "expired",
		"fee": "$16.62",
		"guid": "ADB3D9E1-83E5-BFC0-167F-B0D29B20A6AC",
		"date_exit": "2018-02-23 21:34:22",
		"date_first": "2018-05-23 23:20:45",
		"date_recent": "2017-05-11 15:51:41",
		"url": "https://capco.com/"
	},
	{
		"name": "Odette F. Head",
		"phone": "449-0567",
		"email": "vulputate.mauris@massa.org",
		"company": "Nullam Associates",
		"date_entry": "2017-05-28 07:22:09",
		"org_num": "399896 2660",
		"address_1": "1545 Elementum, Road",
		"city": "Albury",
		"zip": "52809",
		"geo": "-73.51958, 64.91308",
		"pan": "453295 1293555325",
		"pin": "6479",
		"id": 80,
		"status": "expired",
		"fee": "$69.19",
		"guid": "C309BE09-1F61-2523-BAC8-50898FD5E802",
		"date_exit": "2018-09-29 03:57:40",
		"date_first": "2019-02-17 03:51:25",
		"date_recent": "2018-04-15 13:22:50",
		"url": "https://capco.com/"
	},
	{
		"name": "Hashim X. Bender",
		"phone": "380-6730",
		"email": "Nullam.velit.dui@ante.edu",
		"company": "Eleifend Foundation",
		"date_entry": "2017-11-04 16:55:44",
		"org_num": "523169 0099",
		"address_1": "P.O. Box 216, 2889 Mus. Road",
		"city": "San Benedetto del Tronto",
		"zip": "71454",
		"geo": "-23.09439, -6.63951",
		"pan": "4539718447724260",
		"pin": "5791",
		"id": 81,
		"status": "unread",
		"fee": "$66.31",
		"guid": "AF54BEFB-EBF7-F6F0-3007-80F071540517",
		"date_exit": "2019-01-19 09:59:27",
		"date_first": "2018-05-11 17:27:35",
		"date_recent": "2018-06-11 05:57:17",
		"url": "https://capco.com/"
	},
	{
		"name": "Ahmed V. Chang",
		"phone": "1-981-915-0860",
		"email": "Curabitur.consequat@Maecenasmalesuadafringilla.edu",
		"company": "Odio Incorporated",
		"date_entry": "2017-06-10 21:02:45",
		"org_num": "248971 9845",
		"address_1": "4817 Enim, St.",
		"city": "Gboko",
		"zip": "77775",
		"geo": "45.51013, -52.95319",
		"pan": "4771496654296",
		"pin": "7089",
		"id": 82,
		"status": "unread",
		"fee": "$85.75",
		"guid": "A1111D8D-7DB8-92A3-B7FD-D5EA9BB9D82D",
		"date_exit": "2017-06-11 22:49:27",
		"date_first": "2018-01-13 15:54:45",
		"date_recent": "2018-03-04 01:11:19",
		"url": "https://capco.com/"
	},
	{
		"name": "Jacob H. Bowers",
		"phone": "1-545-963-0915",
		"email": "Sed.molestie.Sed@sed.net",
		"company": "Nullam Suscipit Est Associates",
		"date_entry": "2017-07-21 18:29:50",
		"org_num": "012603 0279",
		"address_1": "165-9487 Imperdiet Road",
		"city": "De Haan",
		"zip": "48411",
		"geo": "-71.88729, 9.59999",
		"pan": "4485202183058",
		"pin": "2662",
		"id": 83,
		"status": "expired",
		"fee": "$60.30",
		"guid": "4E6EDDBA-BA43-05FB-C954-15E17163422A",
		"date_exit": "2018-07-30 11:44:24",
		"date_first": "2019-02-02 11:50:44",
		"date_recent": "2018-01-31 08:18:32",
		"url": "https://capco.com/"
	},
	{
		"name": "Gray E. Boyle",
		"phone": "1-226-243-0406",
		"email": "eu.sem.Pellentesque@quam.com",
		"company": "Erat Industries",
		"date_entry": "2018-08-13 07:32:41",
		"org_num": "749573 6725",
		"address_1": "Ap #498-7289 Tellus. Rd.",
		"city": "Pontevedra",
		"zip": "86-838",
		"geo": "-77.83223, -47.7693",
		"pan": "402 40071 49534 660",
		"pin": "7444",
		"id": 84,
		"status": "unread",
		"fee": "$57.05",
		"guid": "B95469D7-44B5-18D3-C6AB-2ACCD2416AF9",
		"date_exit": "2018-01-01 19:21:51",
		"date_first": "2017-11-15 07:44:40",
		"date_recent": "2017-08-14 08:32:52",
		"url": "https://capco.com/"
	},
	{
		"name": "Sebastian N. Hardin",
		"phone": "969-2509",
		"email": "ligula@elementumpurus.edu",
		"company": "Massa Rutrum PC",
		"date_entry": "2017-04-10 23:08:54",
		"org_num": "684875 9343",
		"address_1": "Ap #190-5575 Felis Rd.",
		"city": "La Serena",
		"zip": "2203",
		"geo": "65.46391, -92.53011",
		"pan": "453938 9599159232",
		"pin": "2455",
		"id": 85,
		"status": "unread",
		"fee": "$4.39",
		"guid": "3B26D56E-8099-1D40-5ED9-5DBBF606D98D",
		"date_exit": "2017-12-15 16:21:37",
		"date_first": "2017-12-06 22:25:19",
		"date_recent": "2017-04-17 20:38:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Oprah S. Moore",
		"phone": "1-604-968-8803",
		"email": "quis@Quisquepurussapien.ca",
		"company": "Quisque Tincidunt Foundation",
		"date_entry": "2018-12-04 13:07:32",
		"org_num": "244151 0118",
		"address_1": "5263 Erat, Avenue",
		"city": "Basingstoke",
		"zip": "69788-593",
		"geo": "-56.34309, -42.79643",
		"pan": "4485988693403",
		"pin": "5624",
		"id": 86,
		"status": "unread",
		"fee": "$53.77",
		"guid": "62109474-E5EB-F884-24AC-DCF3FCED8298",
		"date_exit": "2018-08-29 16:07:35",
		"date_first": "2017-06-30 05:26:57",
		"date_recent": "2018-01-23 17:59:42",
		"url": "https://capco.com/"
	},
	{
		"name": "Renee F. Peters",
		"phone": "568-2182",
		"email": "tristique@ut.co.uk",
		"company": "Luctus Et Ultrices Associates",
		"date_entry": "2019-04-06 21:57:30",
		"org_num": "793583 2217",
		"address_1": "4864 Ut, Rd.",
		"city": "Corroy-le-Ch‰teau",
		"zip": "88-380",
		"geo": "-3.97933, 163.93003",
		"pan": "4929325887962",
		"pin": "6284",
		"id": 87,
		"status": "expired",
		"fee": "$6.07",
		"guid": "18DF2B96-AA4B-3ED9-94FA-68CEDF13026E",
		"date_exit": "2018-08-29 06:44:59",
		"date_first": "2018-06-20 00:49:54",
		"date_recent": "2018-08-23 14:54:08",
		"url": "https://capco.com/"
	},
	{
		"name": "Preston A. Deleon",
		"phone": "1-275-644-3915",
		"email": "ante.Nunc@intempuseu.net",
		"company": "In Condimentum Donec LLC",
		"date_entry": "2018-08-08 04:15:41",
		"org_num": "537303 9642",
		"address_1": "2756 Egestas Rd.",
		"city": "Fino Mornasco",
		"zip": "9239 HV",
		"geo": "48.75276, -61.26536",
		"pan": "4024007119064730",
		"pin": "5071",
		"id": 88,
		"status": "expired",
		"fee": "$5.91",
		"guid": "DDE271DE-9CFC-F081-4D00-649B6C9FEC6C",
		"date_exit": "2018-11-26 11:30:36",
		"date_first": "2018-12-05 15:24:22",
		"date_recent": "2017-12-06 11:49:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Kibo G. Shepard",
		"phone": "423-7846",
		"email": "condimentum.Donec@Aeneaneuismod.com",
		"company": "Sapien Gravida LLP",
		"date_entry": "2018-09-07 03:54:10",
		"org_num": "322760 3648",
		"address_1": "P.O. Box 747, 7133 Vivamus St.",
		"city": "Nerem",
		"zip": "14520",
		"geo": "-0.14, 34.43068",
		"pan": "4556841485441",
		"pin": "9783",
		"id": 89,
		"status": "unread",
		"fee": "$34.96",
		"guid": "CAE8F2DB-A0B1-4FA5-C96C-ECA3CDF9D74F",
		"date_exit": "2018-06-30 05:27:40",
		"date_first": "2018-07-03 10:45:31",
		"date_recent": "2017-12-19 16:35:27",
		"url": "https://capco.com/"
	},
	{
		"name": "Uma D. Cannon",
		"phone": "1-346-979-4830",
		"email": "metus.sit@mattisIntegereu.ca",
		"company": "Ac Corp.",
		"date_entry": "2018-08-31 03:14:30",
		"org_num": "017394 0800",
		"address_1": "P.O. Box 931, 1033 Fringilla Rd.",
		"city": "Nuneaton",
		"zip": "13964",
		"geo": "26.10457, -173.78336",
		"pan": "4556564424189",
		"pin": "4111",
		"id": 90,
		"status": "expired",
		"fee": "$4.06",
		"guid": "6E7861B8-60F1-4B82-2A61-9DDE1F7ADC68",
		"date_exit": "2019-02-28 21:05:40",
		"date_first": "2017-07-05 17:25:39",
		"date_recent": "2018-03-17 14:12:33",
		"url": "https://capco.com/"
	},
	{
		"name": "Gemma J. Farley",
		"phone": "1-654-607-4628",
		"email": "Ut@laciniaSed.org",
		"company": "Nunc PC",
		"date_entry": "2018-09-14 19:49:05",
		"org_num": "357175 5895",
		"address_1": "678 Purus, Ave",
		"city": "NeuprŽ",
		"zip": "9283",
		"geo": "21.44061, 170.60693",
		"pan": "492953 1527961530",
		"pin": "7102",
		"id": 91,
		"status": "read",
		"fee": "$31.04",
		"guid": "BCCB4713-5041-0948-104D-E328468BA2BD",
		"date_exit": "2017-10-05 23:53:08",
		"date_first": "2018-05-28 18:53:00",
		"date_recent": "2018-10-03 10:25:00",
		"url": "https://capco.com/"
	},
	{
		"name": "Louis T. Bailey",
		"phone": "1-426-565-1142",
		"email": "vel.venenatis.vel@consectetueradipiscingelit.org",
		"company": "Orci Phasellus Dapibus Incorporated",
		"date_entry": "2017-08-23 03:15:58",
		"org_num": "723342 2950",
		"address_1": "7202 Augue St.",
		"city": "Warrnambool",
		"zip": "598444",
		"geo": "13.58613, 42.08657",
		"pan": "4628018676997568",
		"pin": "3367",
		"id": 92,
		"status": "read",
		"fee": "$13.29",
		"guid": "4BEE639B-5201-A39B-D38C-6BA6E1D17D41",
		"date_exit": "2018-10-04 12:40:06",
		"date_first": "2017-05-27 17:28:31",
		"date_recent": "2018-01-17 05:42:43",
		"url": "https://capco.com/"
	},
	{
		"name": "Carol D. Anthony",
		"phone": "1-595-794-4138",
		"email": "et.arcu@pede.ca",
		"company": "Pharetra Sed Hendrerit Foundation",
		"date_entry": "2017-10-29 02:23:19",
		"org_num": "635409 9928",
		"address_1": "917-6924 Nisi St.",
		"city": "Natales",
		"zip": "UX1 3PK",
		"geo": "55.1128, -106.27258",
		"pan": "4485709133259",
		"pin": "2246",
		"id": 93,
		"status": "unread",
		"fee": "$88.17",
		"guid": "B5E2DA05-D970-EFBD-D9D1-62BA855137E7",
		"date_exit": "2018-08-29 18:08:46",
		"date_first": "2018-01-17 15:39:57",
		"date_recent": "2018-08-17 10:14:52",
		"url": "https://capco.com/"
	},
	{
		"name": "Tiger O. Jackson",
		"phone": "447-2567",
		"email": "a@ametmassaQuisque.ca",
		"company": "Sodales At Foundation",
		"date_entry": "2017-04-16 16:39:18",
		"org_num": "427828 0005",
		"address_1": "1775 Dictum Av.",
		"city": "Grimbergen",
		"zip": "90580",
		"geo": "-8.82563, 6.4759",
		"pan": "4024 007 12 0484",
		"pin": "1511",
		"id": 94,
		"status": "read",
		"fee": "$42.98",
		"guid": "FB2E5881-DE8C-9016-0F89-19A1283A5C0C",
		"date_exit": "2018-10-08 02:05:28",
		"date_first": "2018-03-08 10:45:34",
		"date_recent": "2019-01-11 23:35:11",
		"url": "https://capco.com/"
	},
	{
		"name": "Risa I. Burks",
		"phone": "1-684-320-4267",
		"email": "ac.nulla.In@nullaIntincidunt.org",
		"company": "Ut Limited",
		"date_entry": "2017-10-03 08:03:00",
		"org_num": "014104 0709",
		"address_1": "8103 Netus Street",
		"city": "Wansin",
		"zip": "4850",
		"geo": "-18.843, -45.22327",
		"pan": "4556982742865",
		"pin": "1637",
		"id": 95,
		"status": "unread",
		"fee": "$83.51",
		"guid": "D1366260-B5FF-DAEC-D1BE-E5F8B9DC6997",
		"date_exit": "2017-05-28 13:40:07",
		"date_first": "2017-11-08 09:41:55",
		"date_recent": "2018-11-02 04:15:33",
		"url": "https://capco.com/"
	},
	{
		"name": "Zahir B. Park",
		"phone": "910-3695",
		"email": "Nunc.ut@arcuSed.co.uk",
		"company": "Aliquam Associates",
		"date_entry": "2018-12-20 00:21:10",
		"org_num": "246719 9978",
		"address_1": "3724 Accumsan St.",
		"city": "Noorderwijk",
		"zip": "915627",
		"geo": "59.05108, 134.28023",
		"pan": "453932 8502557330",
		"pin": "6842",
		"id": 96,
		"status": "expired",
		"fee": "$5.78",
		"guid": "E8DF66C2-7D16-825E-51DB-B6AA939D16A7",
		"date_exit": "2019-03-24 02:51:42",
		"date_first": "2018-03-19 22:53:11",
		"date_recent": "2018-02-01 10:44:23",
		"url": "https://capco.com/"
	},
	{
		"name": "Castor B. Malone",
		"phone": "1-375-258-3313",
		"email": "vulputate.eu@massa.com",
		"company": "Duis Inc.",
		"date_entry": "2017-07-16 06:01:40",
		"org_num": "215853 5829",
		"address_1": "P.O. Box 755, 4699 Metus. Rd.",
		"city": "Viddalba",
		"zip": "7812",
		"geo": "-34.29477, 154.838",
		"pan": "4711802243608",
		"pin": "7351",
		"id": 97,
		"status": "unread",
		"fee": "$96.43",
		"guid": "9F151AC1-E121-CD66-9EAB-789609346B80",
		"date_exit": "2018-10-02 04:16:09",
		"date_first": "2018-09-24 18:11:53",
		"date_recent": "2018-02-21 21:26:51",
		"url": "https://capco.com/"
	},
	{
		"name": "Hillary A. Vazquez",
		"phone": "762-4961",
		"email": "nulla@euodio.ca",
		"company": "Tincidunt Inc.",
		"date_entry": "2018-06-30 04:55:28",
		"org_num": "004941 9807",
		"address_1": "531-1368 Duis Avenue",
		"city": "Dalbeattie",
		"zip": "426435",
		"geo": "-29.67378, 64.84605",
		"pan": "460173 241523 3652",
		"pin": "4669",
		"id": 98,
		"status": "read",
		"fee": "$64.09",
		"guid": "5C78B30F-325B-9FBE-A960-FA5CD5857CBF",
		"date_exit": "2018-04-08 07:05:10",
		"date_first": "2018-11-23 11:19:26",
		"date_recent": "2017-10-14 04:52:53",
		"url": "https://capco.com/"
	},
	{
		"name": "Byron Z. Barron",
		"phone": "1-590-269-5179",
		"email": "eleifend.nec@consectetuermauris.edu",
		"company": "Risus Institute",
		"date_entry": "2017-08-20 12:19:44",
		"org_num": "868311 2315",
		"address_1": "Ap #766-6483 Nisi St.",
		"city": "Hamburg",
		"zip": "2376",
		"geo": "82.58963, -152.27571",
		"pan": "491607 655988 0674",
		"pin": "5859",
		"id": 99,
		"status": "read",
		"fee": "$61.85",
		"guid": "8C41D9C0-64B1-E175-8E27-B15070ACDAC9",
		"date_exit": "2019-02-16 02:46:42",
		"date_first": "2018-05-22 16:19:23",
		"date_recent": "2018-05-29 10:47:26",
		"url": "https://capco.com/"
	},
	{
		"name": "Camille E. Rios",
		"phone": "1-139-373-0425",
		"email": "eu.accumsan@eget.org",
		"company": "Ante Bibendum LLC",
		"date_entry": "2018-05-24 04:14:25",
		"org_num": "028081 0797",
		"address_1": "Ap #454-6621 Litora Rd.",
		"city": "Vancouver",
		"zip": "6074",
		"geo": "25.60275, -106.45466",
		"pan": "4916358554420510",
		"pin": "9791",
		"id": 100,
		"status": "unread",
		"fee": "$15.73",
		"guid": "1E7C9E95-B9E5-045C-29AC-23609D2AA7BB",
		"date_exit": "2018-01-23 04:21:18",
		"date_first": "2019-03-13 00:42:24",
		"date_recent": "2018-09-16 09:46:10",
		"url": "https://capco.com/"
	},
	{
		"name": "Thane E. Tyler",
		"phone": "1-134-534-4368",
		"email": "Integer.id.magna@Proinvelarcu.ca",
		"company": "Semper Et Inc.",
		"date_entry": "2018-12-21 08:44:48",
		"org_num": "952589 3351",
		"address_1": "P.O. Box 482, 8731 Aliquam Av.",
		"city": "Osorno",
		"zip": "60113",
		"geo": "-53.06115, -11.06845",
		"pan": "492930 105704 9571",
		"pin": "2024",
		"id": 1,
		"status": "unread",
		"fee": "$50.63",
		"guid": "EA7B126B-218E-5257-9803-372AC7148ABE",
		"date_exit": "2018-06-28 04:53:12",
		"date_first": "2019-01-03 03:36:36",
		"date_recent": "2018-07-13 04:49:21",
		"url": "https://capco.com/"
	},
	{
		"name": "Raven F. Contreras",
		"phone": "1-428-604-5976",
		"email": "mi.pede@Integer.org",
		"company": "Mauris Ut PC",
		"date_entry": "2018-10-23 22:10:18",
		"org_num": "866252 1270",
		"address_1": "P.O. Box 483, 5187 Quam Avenue",
		"city": "Ribeirão Preto",
		"zip": "K3V 2B7",
		"geo": "-37.42092, -86.20074",
		"pan": "4225476719041",
		"pin": "3849",
		"id": 2,
		"status": "expired",
		"fee": "$16.77",
		"guid": "B8E001B9-0384-A68F-438F-4EA48BFE7BBC",
		"date_exit": "2018-11-09 01:22:43",
		"date_first": "2018-03-05 10:04:07",
		"date_recent": "2018-05-23 01:44:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Cynthia V. Wolfe",
		"phone": "309-9705",
		"email": "quis@risusDonec.org",
		"company": "Morbi Accumsan Laoreet Industries",
		"date_entry": "2018-05-15 01:36:09",
		"org_num": "744424 5471",
		"address_1": "617-782 Euismod St.",
		"city": "South Perth",
		"zip": "5543",
		"geo": "1.62379, -112.95794",
		"pan": "4485397384172",
		"pin": "4364",
		"id": 3,
		"status": "unread",
		"fee": "$75.51",
		"guid": "4717DCD6-9788-7709-1AB4-E02C06168923",
		"date_exit": "2018-04-21 14:57:06",
		"date_first": "2017-04-19 11:48:17",
		"date_recent": "2017-07-21 17:08:38",
		"url": "https://capco.com/"
	},
	{
		"name": "Tate V. Mejia",
		"phone": "1-282-433-1161",
		"email": "Quisque.purus.sapien@Donec.edu",
		"company": "Quis Diam Pellentesque Company",
		"date_entry": "2017-10-24 03:09:13",
		"org_num": "728148 5149",
		"address_1": "Ap #258-7474 Magna. Av.",
		"city": "Borlänge",
		"zip": "3099",
		"geo": "-67.24606, -7.24289",
		"pan": "4024007107747",
		"pin": "7867",
		"id": 4,
		"status": "expired",
		"fee": "$16.35",
		"guid": "A5C3C15F-53B4-5804-ABBE-18772C8DE384",
		"date_exit": "2018-11-21 05:26:29",
		"date_first": "2018-05-19 11:25:27",
		"date_recent": "2019-01-10 20:53:38",
		"url": "https://capco.com/"
	},
	{
		"name": "Lucas N. Vaughan",
		"phone": "972-5415",
		"email": "dignissim.tempor@dictumauguemalesuada.com",
		"company": "Lacus Aliquam Rutrum Consulting",
		"date_entry": "2019-02-04 21:58:41",
		"org_num": "394266 7217",
		"address_1": "P.O. Box 825, 1059 Risus Street",
		"city": "Mangalore",
		"zip": "4143",
		"geo": "9.43847, -69.08281",
		"pan": "471672 311323 8194",
		"pin": "5664",
		"id": 5,
		"status": "expired",
		"fee": "$37.65",
		"guid": "D9901389-CDE7-ECEF-641F-6E96EA409C04",
		"date_exit": "2018-05-13 21:23:22",
		"date_first": "2017-11-07 07:30:31",
		"date_recent": "2017-06-17 04:13:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Lois H. Conway",
		"phone": "248-4381",
		"email": "aliquet.Phasellus@pharetrautpharetra.co.uk",
		"company": "Sagittis Industries",
		"date_entry": "2018-08-26 01:19:13",
		"org_num": "919296 0921",
		"address_1": "998-3059 Orci. Av.",
		"city": "Belém",
		"zip": "4795",
		"geo": "-73.98118, 110.1939",
		"pan": "4916669124392462",
		"pin": "8673",
		"id": 6,
		"status": "expired",
		"fee": "$56.02",
		"guid": "D00DB981-37F0-45AA-06DF-AE6C8F86A854",
		"date_exit": "2018-11-06 12:36:44",
		"date_first": "2017-05-15 04:04:21",
		"date_recent": "2018-06-09 07:09:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Theodore N. Sampson",
		"phone": "1-975-124-2385",
		"email": "ac@vestibulum.net",
		"company": "Nec Malesuada PC",
		"date_entry": "2018-09-24 22:23:47",
		"org_num": "015570 1444",
		"address_1": "174-8176 Sit Avenue",
		"city": "Villers-sur-Semois",
		"zip": "61-252",
		"geo": "60.87168, 107.10928",
		"pan": "4929948711938",
		"pin": "5870",
		"id": 7,
		"status": "expired",
		"fee": "$56.81",
		"guid": "687D7893-F4D9-5878-9234-A39467FEA350",
		"date_exit": "2017-11-17 05:30:24",
		"date_first": "2018-07-26 18:21:09",
		"date_recent": "2018-07-24 16:48:09",
		"url": "https://capco.com/"
	},
	{
		"name": "Neve C. Shaffer",
		"phone": "346-2151",
		"email": "interdum.Nunc.sollicitudin@quamPellentesque.ca",
		"company": "Interdum Ligula Ltd",
		"date_entry": "2017-10-17 04:48:46",
		"org_num": "599395 3297",
		"address_1": "P.O. Box 767, 2167 Nulla Rd.",
		"city": "Aligarh",
		"zip": "96427",
		"geo": "49.8645, -64.00032",
		"pan": "4024 0071 9051 0965",
		"pin": "4562",
		"id": 8,
		"status": "expired",
		"fee": "$6.67",
		"guid": "D46C51EE-77C1-8E4A-1574-143D9BCB7CF3",
		"date_exit": "2018-10-16 21:02:00",
		"date_first": "2017-07-05 22:17:53",
		"date_recent": "2019-04-03 03:21:27",
		"url": "https://capco.com/"
	},
	{
		"name": "Dennis F. Wallace",
		"phone": "795-4012",
		"email": "magnis@dapibusidblandit.edu",
		"company": "Mauris PC",
		"date_entry": "2018-10-02 02:27:03",
		"org_num": "983398 9768",
		"address_1": "Ap #126-4125 Odio. Av.",
		"city": "Strathcona County",
		"zip": "61934",
		"geo": "-73.22619, 117.24218",
		"pan": "4630330424094606",
		"pin": "5497",
		"id": 9,
		"status": "expired",
		"fee": "$83.35",
		"guid": "1A936D85-D9AB-6A1A-E05C-F275B69A6701",
		"date_exit": "2017-11-17 04:14:31",
		"date_first": "2017-10-04 08:54:49",
		"date_recent": "2017-05-27 02:33:29",
		"url": "https://capco.com/"
	},
	{
		"name": "April D. Mitchell",
		"phone": "341-1490",
		"email": "sapien.Cras.dolor@arcuAliquam.co.uk",
		"company": "Eu Company",
		"date_entry": "2017-08-19 01:30:08",
		"org_num": "084792 7316",
		"address_1": "Ap #237-9496 A, Rd.",
		"city": "Palmiano",
		"zip": "254137",
		"geo": "5.94443, -17.4977",
		"pan": "4929588089965499",
		"pin": "3985",
		"id": 10,
		"status": "read",
		"fee": "$67.68",
		"guid": "CD56D493-70F2-9FB2-DC60-1E6E6971BE83",
		"date_exit": "2017-08-09 02:09:27",
		"date_first": "2017-08-09 01:18:44",
		"date_recent": "2018-07-26 00:04:04",
		"url": "https://capco.com/"
	},
	{
		"name": "Miranda P. Butler",
		"phone": "455-0956",
		"email": "lacus.Cras@ligula.com",
		"company": "Ornare Lectus Justo Foundation",
		"date_entry": "2019-02-03 07:18:36",
		"org_num": "052442 6665",
		"address_1": "Ap #772-9498 Sed St.",
		"city": "Calder",
		"zip": "941376",
		"geo": "-65.26347, -14.39066",
		"pan": "448 56842 11807 299",
		"pin": "3310",
		"id": 11,
		"status": "read",
		"fee": "$83.83",
		"guid": "FA792990-BDDD-57D2-E87C-178470F4470E",
		"date_exit": "2017-10-18 18:34:26",
		"date_first": "2017-07-04 04:10:30",
		"date_recent": "2018-01-09 19:22:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Michael U. Payne",
		"phone": "1-819-727-2115",
		"email": "egestas.lacinia.Sed@molestietortornibh.net",
		"company": "Imperdiet Corp.",
		"date_entry": "2017-11-18 20:25:16",
		"org_num": "523837 5298",
		"address_1": "Ap #144-9187 Ut Av.",
		"city": "East Kilbride",
		"zip": "50819",
		"geo": "11.19956, 171.955",
		"pan": "4716648565916528",
		"pin": "4703",
		"id": 12,
		"status": "read",
		"fee": "$91.48",
		"guid": "EC520BA7-CBE2-6475-98AC-32A39793BDD6",
		"date_exit": "2018-07-18 14:33:34",
		"date_first": "2017-05-07 09:49:51",
		"date_recent": "2017-05-21 20:17:02",
		"url": "https://capco.com/"
	},
	{
		"name": "Lee Q. Hill",
		"phone": "1-976-719-7300",
		"email": "Cum.sociis@lectusNullamsuscipit.co.uk",
		"company": "Quisque Porttitor Corporation",
		"date_entry": "2017-04-17 10:19:22",
		"org_num": "966340 9788",
		"address_1": "218-5468 Eu Road",
		"city": "Sylvan Lake",
		"zip": "K3T 6KN",
		"geo": "72.588, 72.67634",
		"pan": "4716991582161",
		"pin": "7353",
		"id": 13,
		"status": "read",
		"fee": "$23.91",
		"guid": "C2018B3B-B305-D07D-61E1-72CB4D44DD53",
		"date_exit": "2017-09-14 15:09:15",
		"date_first": "2017-11-28 09:11:16",
		"date_recent": "2018-10-30 15:51:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Kelly G. William",
		"phone": "1-986-873-5466",
		"email": "odio.auctor@vitaesodalesnisi.co.uk",
		"company": "Sagittis Placerat Cras Corporation",
		"date_entry": "2018-02-21 07:51:23",
		"org_num": "282429 3167",
		"address_1": "734-1182 Sapien. Rd.",
		"city": "Opoeteren",
		"zip": "109842",
		"geo": "22.29355, 137.58574",
		"pan": "4556496602778599",
		"pin": "1246",
		"id": 14,
		"status": "read",
		"fee": "$4.74",
		"guid": "156C497D-70E3-F6E7-CD3F-36305E2F9C68",
		"date_exit": "2019-04-10 03:53:41",
		"date_first": "2019-01-07 23:09:53",
		"date_recent": "2017-09-28 19:33:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Beau T. Kennedy",
		"phone": "1-968-664-3405",
		"email": "Donec.porttitor.tellus@tellusAeneanegestas.net",
		"company": "Dui Cum Foundation",
		"date_entry": "2018-12-05 22:58:30",
		"org_num": "602125 9319",
		"address_1": "334-2825 Sem St.",
		"city": "Springdale",
		"zip": "N8W 9E3",
		"geo": "46.81814, -47.24019",
		"pan": "455607 591196 8701",
		"pin": "8924",
		"id": 15,
		"status": "read",
		"fee": "$22.78",
		"guid": "4659441C-41A0-5D28-3508-FED45F5E964A",
		"date_exit": "2018-01-16 18:17:16",
		"date_first": "2018-10-19 07:16:53",
		"date_recent": "2019-02-20 22:24:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Branden L. Wise",
		"phone": "700-0507",
		"email": "Nullam@mollis.com",
		"company": "Bibendum Ullamcorper Institute",
		"date_entry": "2018-07-25 02:25:30",
		"org_num": "826424 4115",
		"address_1": "Ap #839-5370 A, St.",
		"city": "Groß-Gerau",
		"zip": "6868",
		"geo": "-45.7282, 141.33395",
		"pan": "4716273528912769",
		"pin": "5710",
		"id": 16,
		"status": "expired",
		"fee": "$64.69",
		"guid": "E58701DD-0C6C-AA29-3387-AA15B3F3FABC",
		"date_exit": "2018-04-02 23:53:04",
		"date_first": "2018-10-07 06:35:30",
		"date_recent": "2018-05-22 20:53:04",
		"url": "https://capco.com/"
	},
	{
		"name": "Ferris I. Drake",
		"phone": "1-420-747-2565",
		"email": "lacinia.mattis.Integer@Vestibulumante.net",
		"company": "Iaculis Odio Nam Company",
		"date_entry": "2018-05-04 07:29:43",
		"org_num": "222602 5167",
		"address_1": "618-6198 Nam Av.",
		"city": "SŽlange",
		"zip": "02617",
		"geo": "80.70656, 61.0522",
		"pan": "4929 264 87 6448",
		"pin": "1696",
		"id": 17,
		"status": "expired",
		"fee": "$78.10",
		"guid": "DC70EF7F-D02D-3654-3358-DD58BDB9A01B",
		"date_exit": "2017-07-13 07:36:40",
		"date_first": "2017-09-09 21:16:34",
		"date_recent": "2017-12-30 21:53:56",
		"url": "https://capco.com/"
	},
	{
		"name": "Scott B. Thomas",
		"phone": "1-670-947-4612",
		"email": "et.ultrices@Nullam.org",
		"company": "Arcu Vel Industries",
		"date_entry": "2018-03-11 21:45:15",
		"org_num": "603166 8210",
		"address_1": "341-9727 Dignissim Rd.",
		"city": "Wittenberg",
		"zip": "1067",
		"geo": "-13.53057, -60.05074",
		"pan": "4485837642629431",
		"pin": "6061",
		"id": 18,
		"status": "expired",
		"fee": "$72.73",
		"guid": "7404E72F-F39C-871E-52DE-A2F136E089D5",
		"date_exit": "2018-12-06 16:21:51",
		"date_first": "2018-04-27 22:33:15",
		"date_recent": "2017-12-15 17:13:59",
		"url": "https://capco.com/"
	},
	{
		"name": "Mia K. Marquez",
		"phone": "791-2436",
		"email": "tellus@sed.ca",
		"company": "Egestas Duis Limited",
		"date_entry": "2019-03-26 08:11:57",
		"org_num": "559908 9181",
		"address_1": "P.O. Box 475, 500 Quis Street",
		"city": "Shivapuri",
		"zip": "11753-017",
		"geo": "-11.97852, -161.08947",
		"pan": "4916168728871211",
		"pin": "9392",
		"id": 19,
		"status": "read",
		"fee": "$87.72",
		"guid": "4AD4DC0C-E1C7-2AE6-C876-0D02377341B8",
		"date_exit": "2018-05-25 16:01:02",
		"date_first": "2017-09-26 12:46:55",
		"date_recent": "2017-09-16 20:55:52",
		"url": "https://capco.com/"
	},
	{
		"name": "Yael L. Chapman",
		"phone": "1-732-592-4889",
		"email": "sagittis@mattisornare.net",
		"company": "Rutrum Industries",
		"date_entry": "2018-01-19 23:48:54",
		"org_num": "632079 4610",
		"address_1": "Ap #614-5013 Mauris Avenue",
		"city": "Kapiti",
		"zip": "66818",
		"geo": "-75.96604, 106.24049",
		"pan": "471625 0779868072",
		"pin": "3779",
		"id": 20,
		"status": "expired",
		"fee": "$73.18",
		"guid": "01187276-88A1-016D-273E-B6861F4C1AF5",
		"date_exit": "2018-08-24 13:50:54",
		"date_first": "2018-02-20 17:28:55",
		"date_recent": "2018-05-04 14:34:02",
		"url": "https://capco.com/"
	},
	{
		"name": "Susan D. Peck",
		"phone": "1-844-446-0043",
		"email": "senectus@nislelementumpurus.com",
		"company": "Donec Luctus Aliquet Associates",
		"date_entry": "2017-10-08 04:14:16",
		"org_num": "797171 9229",
		"address_1": "P.O. Box 908, 2753 Nunc St.",
		"city": "Ashoknagar-Kalyangarh",
		"zip": "61103",
		"geo": "-49.6162, 149.2417",
		"pan": "4156409857535",
		"pin": "3169",
		"id": 21,
		"status": "unread",
		"fee": "$53.02",
		"guid": "5754C929-5A9A-B790-514A-EDA6C4584FCC",
		"date_exit": "2017-11-21 05:53:06",
		"date_first": "2017-08-16 16:36:24",
		"date_recent": "2017-08-03 07:40:38",
		"url": "https://capco.com/"
	},
	{
		"name": "Jade P. Vinson",
		"phone": "1-757-397-6589",
		"email": "dolor.dolor@orcisem.org",
		"company": "Facilisis Facilisis Incorporated",
		"date_entry": "2019-02-22 00:08:53",
		"org_num": "663650 6153",
		"address_1": "8199 Orci. St.",
		"city": "Springfield",
		"zip": "18-957",
		"geo": "-13.55517, 78.24998",
		"pan": "4532685446265693",
		"pin": "7430",
		"id": 22,
		"status": "expired",
		"fee": "$40.34",
		"guid": "3AF8C1A9-52DA-2651-45DB-69FB005A2B09",
		"date_exit": "2018-09-09 22:46:59",
		"date_first": "2018-05-01 10:20:28",
		"date_recent": "2018-08-20 08:59:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Porter K. Byers",
		"phone": "1-594-965-3543",
		"email": "diam@Cum.ca",
		"company": "Et Incorporated",
		"date_entry": "2018-08-03 20:52:55",
		"org_num": "347911 1332",
		"address_1": "P.O. Box 556, 2935 Erat Av.",
		"city": "Pollein",
		"zip": "16130",
		"geo": "43.45998, 160.55457",
		"pan": "4997201131227",
		"pin": "8639",
		"id": 23,
		"status": "expired",
		"fee": "$43.69",
		"guid": "DD0544B8-C8A9-71F1-8B61-02CB25D30766",
		"date_exit": "2018-01-20 02:00:22",
		"date_first": "2017-06-07 05:17:17",
		"date_recent": "2019-02-25 15:07:48",
		"url": "https://capco.com/"
	},
	{
		"name": "Deborah H. Roberts",
		"phone": "395-4096",
		"email": "arcu@aliquetmetus.ca",
		"company": "Vestibulum Ante Ipsum Associates",
		"date_entry": "2018-04-29 07:26:31",
		"org_num": "403085 6845",
		"address_1": "7285 Adipiscing Av.",
		"city": "Varena",
		"zip": "35321",
		"geo": "14.89986, -111.37896",
		"pan": "4485149386594171",
		"pin": "6087",
		"id": 24,
		"status": "unread",
		"fee": "$88.73",
		"guid": "5B2E36AA-8108-DB85-F1B7-11DFC1B48912",
		"date_exit": "2017-06-13 01:51:43",
		"date_first": "2017-10-10 05:40:09",
		"date_recent": "2018-06-28 10:59:40",
		"url": "https://capco.com/"
	},
	{
		"name": "Candice L. Dale",
		"phone": "746-0716",
		"email": "magna@atliberoMorbi.net",
		"company": "Tincidunt Dui Augue Consulting",
		"date_entry": "2019-03-18 04:15:22",
		"org_num": "942216 2397",
		"address_1": "Ap #403-9908 Vestibulum Road",
		"city": "Narbolia",
		"zip": "26244-740",
		"geo": "-23.62186, -131.54654",
		"pan": "4556 4193 9798 1327",
		"pin": "1304",
		"id": 25,
		"status": "unread",
		"fee": "$94.75",
		"guid": "2C5DC9E5-F161-D194-984F-69B40B285462",
		"date_exit": "2017-11-03 12:09:03",
		"date_first": "2018-12-08 09:46:16",
		"date_recent": "2018-09-24 22:28:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Aurora U. Castaneda",
		"phone": "1-131-837-7829",
		"email": "elementum.purus@velarcueu.co.uk",
		"company": "Eget PC",
		"date_entry": "2017-05-08 05:48:57",
		"org_num": "013176 6040",
		"address_1": "P.O. Box 749, 8405 Magna Rd.",
		"city": "Bocchigliero",
		"zip": "10117",
		"geo": "-11.92192, 10.99772",
		"pan": "4532238977019",
		"pin": "6766",
		"id": 26,
		"status": "read",
		"fee": "$13.77",
		"guid": "DCCFD53A-B552-6ADD-472B-2B444B4B5B5B",
		"date_exit": "2018-08-27 08:03:25",
		"date_first": "2018-01-24 17:42:39",
		"date_recent": "2018-11-05 22:05:43",
		"url": "https://capco.com/"
	},
	{
		"name": "Len A. Black",
		"phone": "716-7169",
		"email": "vel@orci.net",
		"company": "Vitae Odio Corp.",
		"date_entry": "2017-09-01 16:59:19",
		"org_num": "387704 7468",
		"address_1": "9152 Nunc. Rd.",
		"city": "Conca Casale",
		"zip": "3149",
		"geo": "5.66008, -120.1377",
		"pan": "4539667351574",
		"pin": "2101",
		"id": 27,
		"status": "unread",
		"fee": "$55.05",
		"guid": "9A957584-8B07-10F6-F9BF-B1951598F3D1",
		"date_exit": "2018-07-11 08:45:10",
		"date_first": "2018-11-18 12:51:45",
		"date_recent": "2019-01-06 02:33:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Clark U. Boone",
		"phone": "1-588-724-7025",
		"email": "facilisis.non@in.org",
		"company": "Magna Company",
		"date_entry": "2018-10-31 15:32:17",
		"org_num": "894547 9494",
		"address_1": "Ap #997-8945 Mi Avenue",
		"city": "İskenderun",
		"zip": "76-804",
		"geo": "63.0077, -13.95792",
		"pan": "4716451119546",
		"pin": "5294",
		"id": 28,
		"status": "read",
		"fee": "$39.63",
		"guid": "0D45F52B-8CA9-53FE-FE8F-4AAAB7FBD50C",
		"date_exit": "2018-09-18 11:52:12",
		"date_first": "2018-04-04 23:42:17",
		"date_recent": "2019-01-14 16:09:44",
		"url": "https://capco.com/"
	},
	{
		"name": "Allistair W. Salas",
		"phone": "1-381-612-5670",
		"email": "sit.amet.dapibus@acsemut.com",
		"company": "Diam Luctus Limited",
		"date_entry": "2017-06-09 13:33:08",
		"org_num": "448691 3405",
		"address_1": "Ap #856-8980 Etiam Av.",
		"city": "Gentinnes",
		"zip": "4312",
		"geo": "-2.51634, -63.28788",
		"pan": "4109470626396",
		"pin": "7913",
		"id": 29,
		"status": "expired",
		"fee": "$54.34",
		"guid": "D6C3B4DA-FD69-6F94-6C0F-11E4AB619FA4",
		"date_exit": "2017-05-11 03:05:27",
		"date_first": "2018-08-27 01:29:27",
		"date_recent": "2017-07-11 03:31:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Upton Z. Drake",
		"phone": "544-6896",
		"email": "scelerisque.neque.sed@viverraDonectempus.edu",
		"company": "Sagittis Felis Foundation",
		"date_entry": "2018-09-12 19:57:58",
		"org_num": "334957 5716",
		"address_1": "1112 Feugiat. St.",
		"city": "Meeuwen",
		"zip": "21949",
		"geo": "-35.76023, 111.46609",
		"pan": "4485758415532",
		"pin": "1631",
		"id": 30,
		"status": "expired",
		"fee": "$6.55",
		"guid": "DEB0E74C-995A-9E47-DCF1-7D04ED37741E",
		"date_exit": "2017-12-17 16:35:43",
		"date_first": "2018-02-07 01:32:11",
		"date_recent": "2018-11-23 10:25:07",
		"url": "https://capco.com/"
	},
	{
		"name": "Garth U. Sullivan",
		"phone": "546-7521",
		"email": "neque.et@senectuset.com",
		"company": "Accumsan Sed Industries",
		"date_entry": "2017-05-25 19:45:43",
		"org_num": "216569 8453",
		"address_1": "930-971 Donec Street",
		"city": "Chestermere",
		"zip": "66531",
		"geo": "-27.91759, 142.55679",
		"pan": "4929 438 19 0676",
		"pin": "8220",
		"id": 31,
		"status": "read",
		"fee": "$96.43",
		"guid": "5DB5E0BC-BC5C-F31D-7C14-14F31763ED33",
		"date_exit": "2019-01-21 14:31:48",
		"date_first": "2018-12-28 04:53:07",
		"date_recent": "2018-01-25 12:29:18",
		"url": "https://capco.com/"
	},
	{
		"name": "Clare I. Fischer",
		"phone": "1-962-462-3329",
		"email": "feugiat.placerat.velit@ligula.ca",
		"company": "In At Institute",
		"date_entry": "2018-12-19 09:48:21",
		"org_num": "405762 7517",
		"address_1": "995-4871 Iaculis St.",
		"city": "Mühlheim am Main",
		"zip": "71912-317",
		"geo": "3.21425, -177.34098",
		"pan": "4532204286546426",
		"pin": "5094",
		"id": 32,
		"status": "expired",
		"fee": "$9.84",
		"guid": "B0883D7D-36A2-5D79-9E06-26007EBC7799",
		"date_exit": "2018-09-07 23:59:44",
		"date_first": "2017-09-08 07:18:31",
		"date_recent": "2018-05-16 14:09:50",
		"url": "https://capco.com/"
	},
	{
		"name": "Hammett V. Hinton",
		"phone": "713-3904",
		"email": "diam.Sed.diam@velit.edu",
		"company": "Nullam Nisl Consulting",
		"date_entry": "2018-02-11 09:29:52",
		"org_num": "876304 5484",
		"address_1": "7779 Nascetur Av.",
		"city": "Whitchurch-Stouffville",
		"zip": "12314",
		"geo": "-46.80645, 46.3895",
		"pan": "4716965831226122",
		"pin": "3585",
		"id": 33,
		"status": "expired",
		"fee": "$45.18",
		"guid": "C13A0AEF-9E6D-3E01-E2BF-69756510950B",
		"date_exit": "2018-10-17 14:40:07",
		"date_first": "2018-10-08 22:00:03",
		"date_recent": "2019-02-04 01:51:29",
		"url": "https://capco.com/"
	},
	{
		"name": "Dolan C. Grant",
		"phone": "1-681-476-2855",
		"email": "nibh.Aliquam.ornare@molestiesodales.co.uk",
		"company": "Mauris Limited",
		"date_entry": "2018-07-29 07:35:10",
		"org_num": "664947 1155",
		"address_1": "240-9489 Curabitur Rd.",
		"city": "Puente Alto",
		"zip": "182767",
		"geo": "-12.08562, -150.21849",
		"pan": "4646 280 58 4687",
		"pin": "4581",
		"id": 34,
		"status": "read",
		"fee": "$21.08",
		"guid": "C4AD5BBF-826D-EA40-B695-74595BBF969B",
		"date_exit": "2017-09-21 20:36:12",
		"date_first": "2018-12-11 15:06:49",
		"date_recent": "2018-09-29 18:22:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Colette Z. Love",
		"phone": "765-1677",
		"email": "Curabitur.dictum@neceleifendnon.ca",
		"company": "Ultrices Mauris Ipsum Corp.",
		"date_entry": "2018-10-24 04:47:15",
		"org_num": "826990 9928",
		"address_1": "934-7879 Morbi Street",
		"city": "Neath",
		"zip": "22-306",
		"geo": "10.14325, 142.71056",
		"pan": "4313675492360",
		"pin": "4848",
		"id": 35,
		"status": "expired",
		"fee": "$14.35",
		"guid": "784CC43C-65E6-5C0D-A97E-F8B2B6180A33",
		"date_exit": "2017-05-04 20:40:49",
		"date_first": "2018-03-15 14:22:31",
		"date_recent": "2017-05-01 12:41:07",
		"url": "https://capco.com/"
	},
	{
		"name": "Lynn T. Cohen",
		"phone": "981-4003",
		"email": "tincidunt.adipiscing@Aliquamerat.ca",
		"company": "Pellentesque Tellus Sem Associates",
		"date_entry": "2017-05-05 06:58:10",
		"org_num": "033113 5590",
		"address_1": "P.O. Box 298, 3671 Nunc Ave",
		"city": "Ville de Maniwaki",
		"zip": "644345",
		"geo": "44.0211, 147.29553",
		"pan": "4485381485659965",
		"pin": "1377",
		"id": 36,
		"status": "expired",
		"fee": "$35.35",
		"guid": "4052004C-CD37-E0B8-CBF4-B2A1D4DF7EBE",
		"date_exit": "2017-10-29 05:26:30",
		"date_first": "2017-07-08 00:57:25",
		"date_recent": "2019-01-24 23:32:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Evan G. Combs",
		"phone": "652-1626",
		"email": "nisi.Aenean.eget@arcu.co.uk",
		"company": "Dui Institute",
		"date_entry": "2019-01-28 08:44:20",
		"org_num": "848739 0299",
		"address_1": "114-4954 Tincidunt, St.",
		"city": "Rimbey",
		"zip": "F57 4MZ",
		"geo": "-84.54466, -102.24473",
		"pan": "4669034269066",
		"pin": "6164",
		"id": 37,
		"status": "unread",
		"fee": "$1.26",
		"guid": "C7775DCA-440A-D24E-3206-E8D1480DDDEE",
		"date_exit": "2018-11-21 10:35:52",
		"date_first": "2018-10-18 03:19:29",
		"date_recent": "2017-04-14 04:02:29",
		"url": "https://capco.com/"
	},
	{
		"name": "Leah T. Shaw",
		"phone": "1-124-353-6649",
		"email": "Curae.Donec@egestasblandit.org",
		"company": "Ornare Facilisis Eget Corp.",
		"date_entry": "2017-08-02 14:20:07",
		"org_num": "585919 7344",
		"address_1": "P.O. Box 157, 9851 Leo. St.",
		"city": "Aligarh",
		"zip": "1541",
		"geo": "-61.0173, 179.15427",
		"pan": "455 61999 76269 167",
		"pin": "5133",
		"id": 38,
		"status": "read",
		"fee": "$4.38",
		"guid": "35BD37E7-5ED9-E1B6-431E-8FCD42B54105",
		"date_exit": "2018-08-06 22:34:35",
		"date_first": "2017-06-16 07:58:00",
		"date_recent": "2018-02-13 16:12:56",
		"url": "https://capco.com/"
	},
	{
		"name": "Simon E. Mason",
		"phone": "359-0229",
		"email": "est.Nunc@Morbiaccumsan.edu",
		"company": "Eget Incorporated",
		"date_entry": "2017-12-21 11:34:15",
		"org_num": "684805 9991",
		"address_1": "168-8518 Mollis. Street",
		"city": "Baie-Saint-Paul",
		"zip": "16354",
		"geo": "-51.80239, 149.4608",
		"pan": "4556601009361135",
		"pin": "9854",
		"id": 39,
		"status": "unread",
		"fee": "$41.56",
		"guid": "6F99E413-B3D2-FEBF-FE54-F14AD35E6549",
		"date_exit": "2017-09-26 09:25:42",
		"date_first": "2018-06-03 17:51:03",
		"date_recent": "2018-09-23 20:07:00",
		"url": "https://capco.com/"
	},
	{
		"name": "Britanney L. Cole",
		"phone": "1-707-441-5750",
		"email": "elit.Etiam.laoreet@nequeseddictum.co.uk",
		"company": "Egestas Lacinia Foundation",
		"date_entry": "2018-12-14 17:13:08",
		"org_num": "585103 9130",
		"address_1": "983-9851 Massa Ave",
		"city": "Kozan",
		"zip": "633467",
		"geo": "89.95139, 121.44949",
		"pan": "4485 050 41 7681",
		"pin": "2272",
		"id": 40,
		"status": "expired",
		"fee": "$40.31",
		"guid": "F0113FC7-DA5D-6DF4-3146-EE2924143EA9",
		"date_exit": "2017-07-25 19:04:08",
		"date_first": "2018-08-13 06:28:56",
		"date_recent": "2017-08-04 18:50:17",
		"url": "https://capco.com/"
	},
	{
		"name": "Mallory V. Trujillo",
		"phone": "966-7134",
		"email": "arcu@vestibulum.net",
		"company": "Ullamcorper Corporation",
		"date_entry": "2018-02-21 08:09:58",
		"org_num": "232291 9420",
		"address_1": "Ap #561-8755 A, Road",
		"city": "Tours",
		"zip": "A0E 0M0",
		"geo": "64.66892, 136.70147",
		"pan": "4024007112242",
		"pin": "1220",
		"id": 41,
		"status": "unread",
		"fee": "$71.57",
		"guid": "3193183B-ACD2-2D11-4E5E-AC6E09CC390E",
		"date_exit": "2018-03-11 16:50:52",
		"date_first": "2017-04-25 23:50:54",
		"date_recent": "2017-12-20 14:57:53",
		"url": "https://capco.com/"
	},
	{
		"name": "Amela E. Dominguez",
		"phone": "699-9219",
		"email": "Maecenas.mi.felis@consectetuer.com",
		"company": "Amet Orci Ut Consulting",
		"date_entry": "2018-06-20 08:53:58",
		"org_num": "126921 9729",
		"address_1": "P.O. Box 150, 4313 Posuere, Rd.",
		"city": "Mataró",
		"zip": "34047",
		"geo": "32.80545, -6.7467",
		"pan": "471631 102656 8376",
		"pin": "7519",
		"id": 42,
		"status": "unread",
		"fee": "$47.11",
		"guid": "8A7FD425-897E-864E-9023-9EE98BC63113",
		"date_exit": "2019-02-18 16:13:43",
		"date_first": "2019-02-19 04:34:15",
		"date_recent": "2017-09-17 15:37:43",
		"url": "https://capco.com/"
	},
	{
		"name": "Trevor G. Serrano",
		"phone": "1-705-728-5762",
		"email": "molestie.pharetra.nibh@vehiculaaliquetlibero.com",
		"company": "Eu Placerat Eget Incorporated",
		"date_entry": "2017-05-29 07:59:33",
		"org_num": "645030 2366",
		"address_1": "6037 Elit Av.",
		"city": "Sambreville",
		"zip": "98394-624",
		"geo": "-62.55718, 143.22267",
		"pan": "4827855413995",
		"pin": "1860",
		"id": 43,
		"status": "expired",
		"fee": "$65.49",
		"guid": "C22CC250-BBCC-5BEE-94CD-E1A80834E82D",
		"date_exit": "2019-02-05 00:46:19",
		"date_first": "2017-11-28 22:21:09",
		"date_recent": "2018-06-28 03:50:46",
		"url": "https://capco.com/"
	},
	{
		"name": "Vaughan U. Mccray",
		"phone": "1-821-104-8667",
		"email": "erat.in@montesnascetur.co.uk",
		"company": "Tempor Associates",
		"date_entry": "2017-11-18 23:36:17",
		"org_num": "353972 4702",
		"address_1": "9858 Dictum. St.",
		"city": "Cimolais",
		"zip": "5303",
		"geo": "-78.11614, 88.37911",
		"pan": "4024007111129",
		"pin": "2715",
		"id": 44,
		"status": "expired",
		"fee": "$2.08",
		"guid": "BC9CE243-3DDC-B8C0-3443-7D6098EEBA0B",
		"date_exit": "2018-11-28 09:43:59",
		"date_first": "2018-09-12 15:24:33",
		"date_recent": "2017-09-27 08:24:36",
		"url": "https://capco.com/"
	},
	{
		"name": "Akeem Q. Vaughn",
		"phone": "1-481-604-5726",
		"email": "molestie@anteipsum.org",
		"company": "Odio Associates",
		"date_entry": "2017-07-10 00:13:54",
		"org_num": "424611 3353",
		"address_1": "Ap #455-9826 Massa. Rd.",
		"city": "Uddevalla",
		"zip": "18926",
		"geo": "33.08219, 77.97271",
		"pan": "4554 593 39 0240",
		"pin": "3646",
		"id": 45,
		"status": "unread",
		"fee": "$32.82",
		"guid": "7385FFA7-12E6-EE2C-A283-9BAF7F5BA9B6",
		"date_exit": "2018-09-24 04:12:57",
		"date_first": "2019-02-27 11:35:18",
		"date_recent": "2017-07-22 23:21:26",
		"url": "https://capco.com/"
	},
	{
		"name": "Derek N. Bishop",
		"phone": "1-165-295-0801",
		"email": "libero@orciin.co.uk",
		"company": "Enim Nunc Consulting",
		"date_entry": "2018-10-14 15:18:48",
		"org_num": "595887 1054",
		"address_1": "P.O. Box 410, 5961 Erat, Av.",
		"city": "Matlock",
		"zip": "77281",
		"geo": "-33.90168, -16.96542",
		"pan": "4716778310182",
		"pin": "9177",
		"id": 46,
		"status": "expired",
		"fee": "$87.07",
		"guid": "5157921D-0C3E-89C2-D96D-DFFE21B1C3EB",
		"date_exit": "2018-05-23 08:29:39",
		"date_first": "2017-08-16 07:37:20",
		"date_recent": "2018-10-11 14:56:05",
		"url": "https://capco.com/"
	},
	{
		"name": "Barrett W. Ellis",
		"phone": "1-617-452-3033",
		"email": "egestas@idantedictum.net",
		"company": "Arcu Incorporated",
		"date_entry": "2017-08-20 07:35:35",
		"org_num": "128885 1023",
		"address_1": "P.O. Box 193, 1909 Enim Avenue",
		"city": "Telfs",
		"zip": "917870",
		"geo": "48.78417, -178.65954",
		"pan": "4556 2841 2172 4272",
		"pin": "9937",
		"id": 47,
		"status": "unread",
		"fee": "$44.46",
		"guid": "50755BFC-BE9B-BFC3-E1AA-E764045A5E52",
		"date_exit": "2018-11-25 13:51:53",
		"date_first": "2017-05-25 04:58:29",
		"date_recent": "2018-01-25 16:28:04",
		"url": "https://capco.com/"
	},
	{
		"name": "Evangeline H. Tyler",
		"phone": "236-9463",
		"email": "elit.Aliquam.auctor@nuncestmollis.edu",
		"company": "Et Malesuada Fames Foundation",
		"date_entry": "2017-09-08 18:45:25",
		"org_num": "456139 0842",
		"address_1": "Ap #489-6296 Semper Road",
		"city": "Ashbourne",
		"zip": "9003 BZ",
		"geo": "-29.716, -175.7295",
		"pan": "4532907037277",
		"pin": "4685",
		"id": 48,
		"status": "expired",
		"fee": "$55.58",
		"guid": "A91F452D-DC9A-6488-459C-F6ABB780CF22",
		"date_exit": "2017-06-01 16:26:10",
		"date_first": "2017-10-01 00:09:20",
		"date_recent": "2018-01-07 07:01:23",
		"url": "https://capco.com/"
	},
	{
		"name": "Gavin P. Reese",
		"phone": "637-6196",
		"email": "ante.dictum@cursuspurus.edu",
		"company": "Montes Associates",
		"date_entry": "2017-05-05 11:14:56",
		"org_num": "667965 3433",
		"address_1": "Ap #693-3243 Egestas Av.",
		"city": "Kearney",
		"zip": "59-889",
		"geo": "39.26772, 136.03497",
		"pan": "4556124837714",
		"pin": "5111",
		"id": 49,
		"status": "read",
		"fee": "$83.93",
		"guid": "C0971921-DCBB-4774-9DD9-F93E58847880",
		"date_exit": "2018-05-11 04:00:31",
		"date_first": "2018-02-08 04:29:00",
		"date_recent": "2017-10-11 09:06:36",
		"url": "https://capco.com/"
	},
	{
		"name": "Cassandra Z. Franco",
		"phone": "1-467-252-7200",
		"email": "consequat.auctor.nunc@quis.ca",
		"company": "Dui In Consulting",
		"date_entry": "2018-11-12 10:58:44",
		"org_num": "409660 8288",
		"address_1": "165-1029 Vivamus Avenue",
		"city": "Berg",
		"zip": "5850 HO",
		"geo": "-71.1821, -3.5015",
		"pan": "4716830485490160",
		"pin": "3274",
		"id": 50,
		"status": "read",
		"fee": "$83.99",
		"guid": "7F107AE8-B99F-DD9F-E004-3826F2288445",
		"date_exit": "2018-04-23 05:53:31",
		"date_first": "2017-09-19 23:00:25",
		"date_recent": "2018-04-04 13:55:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Hedda T. Hudson",
		"phone": "889-7356",
		"email": "commodo.at.libero@nequeet.co.uk",
		"company": "Neque Vitae Corporation",
		"date_entry": "2018-03-24 21:31:23",
		"org_num": "868306 7063",
		"address_1": "Ap #766-5355 Facilisis St.",
		"city": "Huissen",
		"zip": "4860",
		"geo": "40.04685, -39.18313",
		"pan": "4024007163699183",
		"pin": "2658",
		"id": 51,
		"status": "expired",
		"fee": "$11.15",
		"guid": "D9038B68-AB3E-6835-67CE-0BCB7C05FD71",
		"date_exit": "2018-02-02 16:55:49",
		"date_first": "2018-07-13 03:12:36",
		"date_recent": "2018-10-26 09:55:04",
		"url": "https://capco.com/"
	},
	{
		"name": "Ivor S. Floyd",
		"phone": "379-3308",
		"email": "ac.mattis@sitametmassa.org",
		"company": "Dictum Cursus LLC",
		"date_entry": "2017-12-25 01:19:31",
		"org_num": "993384 4343",
		"address_1": "355-9439 Cursus. Rd.",
		"city": "Colbún",
		"zip": "83752",
		"geo": "-11.01027, -57.23728",
		"pan": "4916570002025",
		"pin": "4342",
		"id": 52,
		"status": "unread",
		"fee": "$21.53",
		"guid": "AA0B212F-D361-0CCD-D900-7E806383FC7D",
		"date_exit": "2018-01-07 07:25:25",
		"date_first": "2018-05-19 19:37:21",
		"date_recent": "2018-11-23 23:10:20",
		"url": "https://capco.com/"
	},
	{
		"name": "Hop K. Gray",
		"phone": "1-731-671-3132",
		"email": "dolor.Fusce@acrisusMorbi.com",
		"company": "Consectetuer Ipsum LLP",
		"date_entry": "2017-10-23 00:08:11",
		"org_num": "273745 2991",
		"address_1": "Ap #547-2015 Sed Street",
		"city": "Hapur",
		"zip": "3808",
		"geo": "-34.74658, 113.24494",
		"pan": "4539345753654",
		"pin": "7269",
		"id": 53,
		"status": "expired",
		"fee": "$12.43",
		"guid": "0BCD5E14-E0F0-4E39-905E-F52B835E33A0",
		"date_exit": "2017-06-08 21:57:42",
		"date_first": "2019-01-22 13:27:43",
		"date_recent": "2017-07-23 09:29:50",
		"url": "https://capco.com/"
	},
	{
		"name": "Tiger L. Bullock",
		"phone": "1-421-770-4107",
		"email": "non.justo@acipsumPhasellus.ca",
		"company": "Magnis Dis Parturient Incorporated",
		"date_entry": "2019-01-30 09:53:02",
		"org_num": "679608 2664",
		"address_1": "7076 Dolor Rd.",
		"city": "Garbsen",
		"zip": "27-156",
		"geo": "-23.95161, -65.07432",
		"pan": "471 69115 31104 086",
		"pin": "9806",
		"id": 54,
		"status": "expired",
		"fee": "$69.49",
		"guid": "889E166D-3CFD-FC97-575A-1D001B934D84",
		"date_exit": "2017-11-30 22:10:20",
		"date_first": "2018-12-02 11:16:45",
		"date_recent": "2017-05-04 05:52:47",
		"url": "https://capco.com/"
	},
	{
		"name": "Doris G. Moss",
		"phone": "500-5006",
		"email": "diam@mauriserateget.co.uk",
		"company": "Tellus Sem LLC",
		"date_entry": "2018-08-10 12:28:20",
		"org_num": "493478 2584",
		"address_1": "223 Amet, Av.",
		"city": "Viersel",
		"zip": "41417",
		"geo": "79.0903, 73.89144",
		"pan": "4556351353716",
		"pin": "6488",
		"id": 55,
		"status": "read",
		"fee": "$63.62",
		"guid": "B0FE8E6E-DBA3-796C-2306-9A37BF0FC42C",
		"date_exit": "2017-06-23 20:08:44",
		"date_first": "2019-01-17 00:21:27",
		"date_recent": "2018-05-07 19:41:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Moana O. Michael",
		"phone": "1-283-626-8440",
		"email": "lorem.Donec@semper.edu",
		"company": "Vehicula Pellentesque Corp.",
		"date_entry": "2017-08-11 04:45:58",
		"org_num": "757254 2194",
		"address_1": "7896 Integer Av.",
		"city": "West Jordan",
		"zip": "47923",
		"geo": "17.57737, -91.33174",
		"pan": "4485416185161811",
		"pin": "1507",
		"id": 56,
		"status": "read",
		"fee": "$38.94",
		"guid": "DCC02977-988E-D689-E9B3-C326DD459438",
		"date_exit": "2019-02-02 19:21:59",
		"date_first": "2017-08-16 18:42:26",
		"date_recent": "2017-10-18 10:12:08",
		"url": "https://capco.com/"
	},
	{
		"name": "Mark E. Oliver",
		"phone": "1-382-378-8478",
		"email": "adipiscing.enim@augueSedmolestie.com",
		"company": "Non Enim Commodo Ltd",
		"date_entry": "2017-06-13 14:42:49",
		"org_num": "342677 3358",
		"address_1": "P.O. Box 701, 3241 Nec, Street",
		"city": "Gagliano del Capo",
		"zip": "70700",
		"geo": "-12.08534, 6.61484",
		"pan": "4778 1990 0621 9812",
		"pin": "1175",
		"id": 57,
		"status": "expired",
		"fee": "$41.68",
		"guid": "BBE0F8DB-53E6-FEEA-8EE2-BD22B6B26DD2",
		"date_exit": "2018-08-17 07:57:08",
		"date_first": "2018-05-26 19:51:16",
		"date_recent": "2017-08-07 16:28:30",
		"url": "https://capco.com/"
	},
	{
		"name": "Honorato C. Galloway",
		"phone": "681-3928",
		"email": "nec.enim.Nunc@scelerisque.org",
		"company": "Lorem Vitae Odio PC",
		"date_entry": "2017-10-21 21:25:38",
		"org_num": "122265 5597",
		"address_1": "Ap #989-2400 Cras Rd.",
		"city": "Temuka",
		"zip": "468367",
		"geo": "82.10811, -23.18985",
		"pan": "4485051163474",
		"pin": "7837",
		"id": 58,
		"status": "read",
		"fee": "$19.59",
		"guid": "B9F9010F-A9AA-6036-AC27-801A164D5DB5",
		"date_exit": "2017-05-31 13:08:14",
		"date_first": "2017-07-20 18:27:16",
		"date_recent": "2018-02-13 12:48:08",
		"url": "https://capco.com/"
	},
	{
		"name": "Doris D. Calhoun",
		"phone": "276-1707",
		"email": "dui.Cum.sociis@congueturpis.co.uk",
		"company": "Tristique Neque Venenatis Industries",
		"date_entry": "2018-08-04 11:19:41",
		"org_num": "488295 3591",
		"address_1": "175-8510 Id, Avenue",
		"city": "Pontboset",
		"zip": "0925 AZ",
		"geo": "-64.91126, 148.93122",
		"pan": "453978 631401 6607",
		"pin": "1763",
		"id": 59,
		"status": "read",
		"fee": "$93.77",
		"guid": "712CC448-1A82-C3F3-721E-C8B450F9D046",
		"date_exit": "2017-10-28 06:31:58",
		"date_first": "2018-03-13 11:36:13",
		"date_recent": "2018-07-15 20:39:16",
		"url": "https://capco.com/"
	},
	{
		"name": "Alyssa P. Zamora",
		"phone": "325-0062",
		"email": "Integer.sem@ligulaelitpretium.edu",
		"company": "Orci Ut Sagittis Associates",
		"date_entry": "2017-12-01 04:02:05",
		"org_num": "945490 3106",
		"address_1": "P.O. Box 701, 1998 Orci Rd.",
		"city": "Lake Cowichan",
		"zip": "11974",
		"geo": "-34.14854, -145.29612",
		"pan": "4556423762973513",
		"pin": "9082",
		"id": 60,
		"status": "read",
		"fee": "$77.78",
		"guid": "375391C8-78D3-E70F-CC46-8D2B15933EC5",
		"date_exit": "2018-10-22 17:04:00",
		"date_first": "2018-07-09 11:27:09",
		"date_recent": "2017-04-15 01:52:43",
		"url": "https://capco.com/"
	},
	{
		"name": "Byron J. Contreras",
		"phone": "1-231-158-5187",
		"email": "nibh.dolor.nonummy@sitamet.co.uk",
		"company": "Montes Corporation",
		"date_entry": "2018-06-22 11:14:36",
		"org_num": "915609 1960",
		"address_1": "7022 Orci. Ave",
		"city": "Gagliato",
		"zip": "51896",
		"geo": "49.87693, -119.48274",
		"pan": "4916287939300024",
		"pin": "8986",
		"id": 61,
		"status": "read",
		"fee": "$17.47",
		"guid": "5CAC388B-7813-037D-72DA-A9D823F2AAF1",
		"date_exit": "2018-08-11 11:41:44",
		"date_first": "2018-07-07 21:51:32",
		"date_recent": "2018-04-15 04:52:03",
		"url": "https://capco.com/"
	},
	{
		"name": "Octavia G. Torres",
		"phone": "615-1429",
		"email": "ut.quam.vel@sit.net",
		"company": "Dolor Consulting",
		"date_entry": "2018-03-15 16:44:20",
		"org_num": "003667 2038",
		"address_1": "P.O. Box 466, 6717 Dis Rd.",
		"city": "Bellefontaine",
		"zip": "3174",
		"geo": "-15.79544, -53.60625",
		"pan": "4539017355302668",
		"pin": "6515",
		"id": 62,
		"status": "unread",
		"fee": "$47.17",
		"guid": "383C77FA-B818-3BD3-76F0-678DC55184C3",
		"date_exit": "2018-12-08 23:33:25",
		"date_first": "2018-02-07 10:36:50",
		"date_recent": "2017-09-13 17:49:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Savannah B. Schneider",
		"phone": "445-2748",
		"email": "lectus.rutrum.urna@disparturientmontes.net",
		"company": "Libero Mauris Aliquam Ltd",
		"date_entry": "2018-11-09 00:28:19",
		"org_num": "622378 3306",
		"address_1": "P.O. Box 871, 2422 Elementum, St.",
		"city": "Orilla",
		"zip": "6482",
		"geo": "73.31113, -108.73681",
		"pan": "402400 710116 0082",
		"pin": "6889",
		"id": 63,
		"status": "read",
		"fee": "$5.23",
		"guid": "C0AB6F6A-0E65-2136-8FDC-0198A55D6D6E",
		"date_exit": "2018-12-27 02:05:13",
		"date_first": "2018-10-30 10:39:48",
		"date_recent": "2017-05-08 04:53:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Astra Q. Solomon",
		"phone": "403-6549",
		"email": "nisi.dictum.augue@lectus.net",
		"company": "Donec Nibh Enim LLP",
		"date_entry": "2019-03-19 19:07:29",
		"org_num": "392853 9307",
		"address_1": "885-1224 Montes, Rd.",
		"city": "Guildford",
		"zip": "356711",
		"geo": "17.88474, 173.28805",
		"pan": "4916890646956",
		"pin": "3707",
		"id": 64,
		"status": "expired",
		"fee": "$53.72",
		"guid": "271CA21A-EAE8-0944-9467-AC2AFC7F3850",
		"date_exit": "2018-05-02 14:51:28",
		"date_first": "2017-07-09 15:30:39",
		"date_recent": "2018-02-01 05:32:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Aphrodite O. Lott",
		"phone": "501-1756",
		"email": "amet.lorem.semper@arcu.ca",
		"company": "Morbi Inc.",
		"date_entry": "2017-05-22 06:43:01",
		"org_num": "424527 9015",
		"address_1": "565-7206 Tellus. Rd.",
		"city": "Gdynia",
		"zip": "1962 DG",
		"geo": "-24.3953, 143.60445",
		"pan": "4929047977687",
		"pin": "6629",
		"id": 65,
		"status": "read",
		"fee": "$26.98",
		"guid": "716FE41E-6E6A-ABBF-F50D-AA106126D00A",
		"date_exit": "2019-03-26 16:31:45",
		"date_first": "2017-07-09 01:04:12",
		"date_recent": "2018-12-13 02:29:46",
		"url": "https://capco.com/"
	},
	{
		"name": "Devin U. Jackson",
		"phone": "1-126-752-1000",
		"email": "in@liberoet.com",
		"company": "Nec Ante Industries",
		"date_entry": "2018-09-13 04:32:33",
		"org_num": "114728 8037",
		"address_1": "239-2206 In St.",
		"city": "Carahue",
		"zip": "12868",
		"geo": "47.27752, -43.17151",
		"pan": "4067002086845805",
		"pin": "4858",
		"id": 66,
		"status": "read",
		"fee": "$44.38",
		"guid": "D8C99AB7-72CA-76DA-E3C5-AA6FF7818D16",
		"date_exit": "2018-02-24 10:02:38",
		"date_first": "2018-03-05 09:07:39",
		"date_recent": "2018-06-17 22:45:29",
		"url": "https://capco.com/"
	},
	{
		"name": "Beck N. Cole",
		"phone": "802-3806",
		"email": "commodo.tincidunt@vulputateposuerevulputate.co.uk",
		"company": "Quis Massa Mauris Corporation",
		"date_entry": "2019-04-09 02:13:31",
		"org_num": "095560 7122",
		"address_1": "Ap #990-9937 Quam Avenue",
		"city": "Arviat",
		"zip": "29691",
		"geo": "76.98803, 127.60055",
		"pan": "4532613383098",
		"pin": "8470",
		"id": 67,
		"status": "expired",
		"fee": "$62.78",
		"guid": "89094E3C-D61A-8C2F-03FC-4FDBA10F2E15",
		"date_exit": "2019-04-01 11:53:36",
		"date_first": "2018-05-13 21:51:43",
		"date_recent": "2018-06-14 15:07:08",
		"url": "https://capco.com/"
	},
	{
		"name": "Georgia X. Morris",
		"phone": "1-162-496-0267",
		"email": "nec.mauris.blandit@mifelis.ca",
		"company": "Mollis Vitae Limited",
		"date_entry": "2017-06-13 01:06:04",
		"org_num": "772652 7380",
		"address_1": "182-6716 Magnis Ave",
		"city": "Pettineo",
		"zip": "77539-814",
		"geo": "-45.89149, 71.66428",
		"pan": "4556525515398",
		"pin": "7040",
		"id": 68,
		"status": "read",
		"fee": "$81.81",
		"guid": "3022FA88-DBAE-2DB2-8871-CADAEBAD857B",
		"date_exit": "2018-03-22 13:51:23",
		"date_first": "2018-02-26 16:33:26",
		"date_recent": "2018-11-14 01:33:24",
		"url": "https://capco.com/"
	},
	{
		"name": "Gabriel R. Alston",
		"phone": "1-607-922-7931",
		"email": "Suspendisse.sagittis.Nullam@malesuadavel.co.uk",
		"company": "Diam Nunc Ullamcorper Industries",
		"date_entry": "2017-06-23 11:27:27",
		"org_num": "917819 8959",
		"address_1": "645-5812 Amet Street",
		"city": "Schaarbeek",
		"zip": "1409",
		"geo": "-24.03188, -60.5568",
		"pan": "4539787493213742",
		"pin": "2742",
		"id": 69,
		"status": "unread",
		"fee": "$37.91",
		"guid": "49652C81-671D-408F-A6B9-ABF82192B817",
		"date_exit": "2018-05-15 06:17:00",
		"date_first": "2018-11-14 12:19:50",
		"date_recent": "2018-07-07 16:04:58",
		"url": "https://capco.com/"
	},
	{
		"name": "Martha A. Glover",
		"phone": "652-8933",
		"email": "nascetur.ridiculus@Praesentluctus.net",
		"company": "Lobortis LLC",
		"date_entry": "2017-08-28 02:48:31",
		"org_num": "713960 0113",
		"address_1": "5877 Eleifend Street",
		"city": "Moliterno",
		"zip": "77313",
		"geo": "22.32663, -165.64308",
		"pan": "4539293613025",
		"pin": "2852",
		"id": 70,
		"status": "read",
		"fee": "$6.44",
		"guid": "B8554FAB-87CA-2465-F832-C6ADBA3F08CE",
		"date_exit": "2017-10-19 20:00:35",
		"date_first": "2018-04-25 02:32:58",
		"date_recent": "2017-11-23 17:54:57",
		"url": "https://capco.com/"
	},
	{
		"name": "Kermit Y. Odonnell",
		"phone": "1-827-625-4664",
		"email": "cubilia@estNunc.com",
		"company": "Erat Volutpat LLC",
		"date_entry": "2018-06-10 14:53:16",
		"org_num": "828175 9863",
		"address_1": "573-1299 Suspendisse St.",
		"city": "Stirling",
		"zip": "9459",
		"geo": "-81.25275, 6.27661",
		"pan": "448 56986 80236 517",
		"pin": "9726",
		"id": 71,
		"status": "unread",
		"fee": "$84.02",
		"guid": "0F0CAEC5-0895-A727-13E6-F59ECBE018C0",
		"date_exit": "2018-04-02 18:20:19",
		"date_first": "2017-11-15 22:08:13",
		"date_recent": "2018-07-30 19:30:22",
		"url": "https://capco.com/"
	},
	{
		"name": "Lucas U. Maynard",
		"phone": "242-1379",
		"email": "at@egettinciduntdui.ca",
		"company": "Id Nunc Corp.",
		"date_entry": "2017-06-06 00:23:22",
		"org_num": "035159 1078",
		"address_1": "5770 In Avenue",
		"city": "Nieuwenrode",
		"zip": "25-900",
		"geo": "10.23493, 65.83107",
		"pan": "4411379072676771",
		"pin": "7713",
		"id": 72,
		"status": "read",
		"fee": "$64.81",
		"guid": "352AB50A-3D3D-CCC6-DB4C-4C62F537E29B",
		"date_exit": "2017-06-29 04:45:48",
		"date_first": "2018-12-28 09:08:42",
		"date_recent": "2018-02-04 15:13:07",
		"url": "https://capco.com/"
	},
	{
		"name": "Lars W. Parks",
		"phone": "935-2936",
		"email": "erat@Integeraliquamadipiscing.com",
		"company": "Ac Incorporated",
		"date_entry": "2017-09-27 11:51:18",
		"org_num": "602241 6850",
		"address_1": "7781 Risus. Road",
		"city": "Orléans",
		"zip": "12597",
		"geo": "-81.48301, -156.55994",
		"pan": "4532 551 23 2091",
		"pin": "8362",
		"id": 73,
		"status": "expired",
		"fee": "$51.46",
		"guid": "10D0A215-2412-4B25-587F-FB35AEAED05E",
		"date_exit": "2018-02-24 13:51:56",
		"date_first": "2018-01-09 22:42:36",
		"date_recent": "2017-05-31 03:52:41",
		"url": "https://capco.com/"
	},
	{
		"name": "Signe Y. Kinney",
		"phone": "1-645-265-0883",
		"email": "mattis@Pellentesquetincidunt.org",
		"company": "Ridiculus Mus Aenean Limited",
		"date_entry": "2018-12-08 03:02:42",
		"org_num": "193590 4225",
		"address_1": "8087 Ultrices, Street",
		"city": "Licantén",
		"zip": "85267-975",
		"geo": "7.98681, -32.75626",
		"pan": "453250 345110 6761",
		"pin": "9010",
		"id": 74,
		"status": "expired",
		"fee": "$91.01",
		"guid": "E7165931-93D2-70DF-6A3D-F5EFB8D8278D",
		"date_exit": "2019-01-20 00:45:58",
		"date_first": "2017-06-16 23:59:51",
		"date_recent": "2018-12-17 03:27:39",
		"url": "https://capco.com/"
	},
	{
		"name": "Marshall U. Sampson",
		"phone": "791-1312",
		"email": "libero.Morbi.accumsan@malesuadaid.com",
		"company": "Tincidunt Ltd",
		"date_entry": "2018-08-17 14:29:24",
		"org_num": "209085 0534",
		"address_1": "Ap #137-5365 Ipsum St.",
		"city": "Chapecó",
		"zip": "0099",
		"geo": "-77.57761, -133.11967",
		"pan": "4929618200527",
		"pin": "5066",
		"id": 75,
		"status": "read",
		"fee": "$39.82",
		"guid": "FD69697D-1627-834E-C3A3-7D289A2BE596",
		"date_exit": "2018-06-26 00:01:26",
		"date_first": "2018-01-13 23:58:40",
		"date_recent": "2018-10-01 22:16:02",
		"url": "https://capco.com/"
	},
	{
		"name": "Jackson X. Bishop",
		"phone": "1-997-856-2960",
		"email": "eget@nislQuisque.co.uk",
		"company": "In At Incorporated",
		"date_entry": "2018-07-21 23:29:47",
		"org_num": "033456 9480",
		"address_1": "Ap #409-3978 Nisi Av.",
		"city": "East Gwillimbury",
		"zip": "09-118",
		"geo": "80.67464, 77.67675",
		"pan": "4612792348783931",
		"pin": "7441",
		"id": 76,
		"status": "unread",
		"fee": "$13.52",
		"guid": "FB8F7392-4EDE-40ED-2D4D-5CDDA08639A0",
		"date_exit": "2017-05-24 10:55:21",
		"date_first": "2017-05-28 03:08:37",
		"date_recent": "2018-09-08 15:38:58",
		"url": "https://capco.com/"
	},
	{
		"name": "Brenda S. Ortega",
		"phone": "1-923-179-9352",
		"email": "Integer.urna.Vivamus@tortornibh.ca",
		"company": "Amet Industries",
		"date_entry": "2018-04-07 13:14:20",
		"org_num": "856563 0889",
		"address_1": "919-9859 Proin Street",
		"city": "Bear",
		"zip": "40-197",
		"geo": "-42.7156, 61.09142",
		"pan": "4916567299477",
		"pin": "1190",
		"id": 77,
		"status": "expired",
		"fee": "$33.24",
		"guid": "9E00D33E-C294-9A46-6C93-847F6DBB7985",
		"date_exit": "2017-05-28 09:07:18",
		"date_first": "2018-03-26 11:36:16",
		"date_recent": "2018-11-15 09:07:45",
		"url": "https://capco.com/"
	},
	{
		"name": "Jorden Q. Valenzuela",
		"phone": "925-6823",
		"email": "Duis.risus@quama.ca",
		"company": "Amet Consectetuer Adipiscing Inc.",
		"date_entry": "2017-12-12 20:26:46",
		"org_num": "643545 9208",
		"address_1": "287-3448 Lobortis Rd.",
		"city": "Woutersbrakel",
		"zip": "21010",
		"geo": "-27.15914, 111.72454",
		"pan": "4485312225773",
		"pin": "8073",
		"id": 78,
		"status": "unread",
		"fee": "$54.22",
		"guid": "F8290122-BEB8-6DC8-49E9-595C2872073C",
		"date_exit": "2017-05-30 10:13:43",
		"date_first": "2019-03-24 02:20:00",
		"date_recent": "2018-08-19 07:07:03",
		"url": "https://capco.com/"
	},
	{
		"name": "Fredericka M. Arnold",
		"phone": "1-158-224-0885",
		"email": "Phasellus.elit.pede@magnis.ca",
		"company": "Nunc Company",
		"date_entry": "2017-06-24 03:54:44",
		"org_num": "374509 6275",
		"address_1": "537 A Avenue",
		"city": "Gbongan",
		"zip": "05736",
		"geo": "-59.5924, -116.6638",
		"pan": "4485 732 39 5677",
		"pin": "4870",
		"id": 79,
		"status": "unread",
		"fee": "$90.75",
		"guid": "43EA2CE8-3BF2-8DDA-30CE-3BCE989C0835",
		"date_exit": "2017-04-20 16:51:40",
		"date_first": "2017-11-23 02:04:20",
		"date_recent": "2017-08-04 13:10:35",
		"url": "https://capco.com/"
	},
	{
		"name": "Marshall N. Floyd",
		"phone": "1-893-498-1104",
		"email": "velit.Quisque.varius@eros.com",
		"company": "Donec Consectetuer Incorporated",
		"date_entry": "2019-02-03 19:09:14",
		"org_num": "199983 3955",
		"address_1": "4149 Elit. Road",
		"city": "Primavera",
		"zip": "40-289",
		"geo": "0.60969, 98.36595",
		"pan": "4916950625324810",
		"pin": "8576",
		"id": 80,
		"status": "unread",
		"fee": "$89.78",
		"guid": "6E38C6BF-0924-589E-45DC-23CEE6F5FF28",
		"date_exit": "2018-10-08 01:34:12",
		"date_first": "2018-10-25 17:25:18",
		"date_recent": "2018-08-23 12:36:13",
		"url": "https://capco.com/"
	},
	{
		"name": "Anika J. Short",
		"phone": "269-1949",
		"email": "ipsum.cursus@odio.com",
		"company": "Elit Pellentesque PC",
		"date_entry": "2018-07-31 04:33:21",
		"org_num": "015651 4994",
		"address_1": "163-1745 Nunc St.",
		"city": "Montgomery",
		"zip": "492356",
		"geo": "76.94731, -56.0914",
		"pan": "4929 4464 4840 8356",
		"pin": "4089",
		"id": 81,
		"status": "expired",
		"fee": "$77.28",
		"guid": "1AF6926A-7286-2B85-72E1-2275E7A1241B",
		"date_exit": "2017-07-08 04:59:47",
		"date_first": "2018-05-11 00:37:56",
		"date_recent": "2017-09-10 10:16:27",
		"url": "https://capco.com/"
	},
	{
		"name": "Aidan G. Berger",
		"phone": "1-255-168-7107",
		"email": "eleifend.vitae.erat@tempuslorem.net",
		"company": "Enim PC",
		"date_entry": "2018-07-16 07:05:46",
		"org_num": "163603 2904",
		"address_1": "P.O. Box 425, 8282 Luctus Avenue",
		"city": "Rezé",
		"zip": "41853",
		"geo": "-4.23796, -22.84879",
		"pan": "4716998986936",
		"pin": "4099",
		"id": 82,
		"status": "unread",
		"fee": "$93.08",
		"guid": "EF0EF47E-4B06-A2D3-1A1A-B37CFEFD370E",
		"date_exit": "2018-04-08 15:52:15",
		"date_first": "2018-03-27 17:20:38",
		"date_recent": "2018-08-02 00:44:09",
		"url": "https://capco.com/"
	},
	{
		"name": "Charissa V. Miles",
		"phone": "1-331-289-8368",
		"email": "ipsum.nunc.id@nequevenenatis.ca",
		"company": "Ultricies Ligula Limited",
		"date_entry": "2017-10-28 04:07:22",
		"org_num": "272130 3697",
		"address_1": "Ap #480-3838 Vestibulum St.",
		"city": "Treppo Carnico",
		"zip": "9339",
		"geo": "83.93123, 25.70657",
		"pan": "4916821671172",
		"pin": "6186",
		"id": 83,
		"status": "unread",
		"fee": "$48.80",
		"guid": "54FC0A04-0091-ACD9-3E91-1FAB44C6ECAD",
		"date_exit": "2019-01-09 12:41:25",
		"date_first": "2018-01-04 20:00:42",
		"date_recent": "2018-05-01 19:21:57",
		"url": "https://capco.com/"
	},
	{
		"name": "Honorato S. Guerra",
		"phone": "365-7845",
		"email": "nec.luctus@Phasellusat.com",
		"company": "Neque Non Institute",
		"date_entry": "2018-01-29 06:06:12",
		"org_num": "656751 7187",
		"address_1": "Ap #426-5741 Gravida. Rd.",
		"city": "Alajuela",
		"zip": "70-964",
		"geo": "-13.8097, 103.92769",
		"pan": "4929739980478",
		"pin": "3814",
		"id": 84,
		"status": "expired",
		"fee": "$85.28",
		"guid": "0F900D90-0551-DA78-DA67-060279249F02",
		"date_exit": "2018-11-18 13:34:12",
		"date_first": "2017-11-19 13:19:08",
		"date_recent": "2017-12-01 17:00:48",
		"url": "https://capco.com/"
	},
	{
		"name": "Iola R. Stark",
		"phone": "1-142-190-7336",
		"email": "montes.nascetur.ridiculus@orciconsectetuereuismod.co.uk",
		"company": "Pede Cum LLC",
		"date_entry": "2018-02-19 13:58:44",
		"org_num": "484467 7619",
		"address_1": "Ap #673-5337 Pede, Avenue",
		"city": "Londerzeel",
		"zip": "331292",
		"geo": "28.63512, -144.29914",
		"pan": "4863606578356",
		"pin": "8747",
		"id": 85,
		"status": "read",
		"fee": "$87.67",
		"guid": "975D942A-9A5F-0D15-27A6-B729DF20EA01",
		"date_exit": "2017-11-23 00:27:37",
		"date_first": "2019-01-27 10:03:40",
		"date_recent": "2018-11-14 17:58:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Xandra E. Armstrong",
		"phone": "1-608-174-2093",
		"email": "ridiculus.mus.Donec@arcuimperdiet.org",
		"company": "Eu Ligula PC",
		"date_entry": "2018-04-26 22:56:08",
		"org_num": "444691 6696",
		"address_1": "P.O. Box 456, 2155 Nascetur Av.",
		"city": "Algeciras",
		"zip": "5474",
		"geo": "-4.04564, -9.76458",
		"pan": "4521312185512366",
		"pin": "5834",
		"id": 86,
		"status": "unread",
		"fee": "$81.12",
		"guid": "B41AC386-38D2-5D59-37AA-CEE330CE99E8",
		"date_exit": "2018-06-21 02:49:54",
		"date_first": "2018-08-13 16:14:18",
		"date_recent": "2018-03-17 02:51:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Seth R. Potts",
		"phone": "1-114-129-2716",
		"email": "dictum.eu@nonummyultricies.net",
		"company": "Dictum Sapien Aenean Limited",
		"date_entry": "2018-02-18 16:58:45",
		"org_num": "293955 9254",
		"address_1": "1316 Risus. St.",
		"city": "Beverlo",
		"zip": "07319-412",
		"geo": "-80.50511, 150.80422",
		"pan": "4929985568688",
		"pin": "6544",
		"id": 87,
		"status": "unread",
		"fee": "$36.17",
		"guid": "DF5D9371-ACC3-0118-5389-89A6C26CF133",
		"date_exit": "2018-10-10 08:04:41",
		"date_first": "2019-03-24 16:06:57",
		"date_recent": "2018-01-24 05:56:14",
		"url": "https://capco.com/"
	},
	{
		"name": "Quinn L. Obrien",
		"phone": "457-9587",
		"email": "ipsum@ametrisus.org",
		"company": "Libero Corporation",
		"date_entry": "2017-05-02 08:13:23",
		"org_num": "292681 2641",
		"address_1": "P.O. Box 959, 3974 Amet Rd.",
		"city": "New Glasgow",
		"zip": "29650",
		"geo": "-54.83371, -75.98068",
		"pan": "4556997541922",
		"pin": "3622",
		"id": 88,
		"status": "read",
		"fee": "$63.49",
		"guid": "A50B488A-FD66-87B2-AE4F-B5FE158073B3",
		"date_exit": "2019-03-28 16:23:37",
		"date_first": "2017-10-03 02:39:11",
		"date_recent": "2018-07-10 21:01:32",
		"url": "https://capco.com/"
	},
	{
		"name": "Melyssa O. Rollins",
		"phone": "739-4637",
		"email": "vestibulum.nec.euismod@euismodenim.edu",
		"company": "Sem Ut Dolor Corp.",
		"date_entry": "2018-10-16 08:00:21",
		"org_num": "192895 7958",
		"address_1": "5346 Ut, St.",
		"city": "Melilla",
		"zip": "3781",
		"geo": "-66.59307, -104.06078",
		"pan": "4024 0071 8583 2580",
		"pin": "2205",
		"id": 89,
		"status": "expired",
		"fee": "$42.61",
		"guid": "F6D9B4B7-B718-DACB-750F-94B9228825EF",
		"date_exit": "2019-01-03 22:57:23",
		"date_first": "2018-01-07 03:00:44",
		"date_recent": "2017-05-03 19:49:25",
		"url": "https://capco.com/"
	},
	{
		"name": "Tallulah R. Davenport",
		"phone": "1-736-670-5945",
		"email": "ante.Vivamus.non@elitdictumeu.ca",
		"company": "Penatibus Et Magnis Associates",
		"date_entry": "2017-12-25 05:25:27",
		"org_num": "036520 4346",
		"address_1": "Ap #686-4033 Id, St.",
		"city": "Bamberg",
		"zip": "04913",
		"geo": "12.94275, -77.33064",
		"pan": "448570 102130 5387",
		"pin": "5577",
		"id": 90,
		"status": "unread",
		"fee": "$69.42",
		"guid": "2C9ECB6F-2B44-0CD4-FFCD-70119DE8E20F",
		"date_exit": "2017-06-11 14:49:00",
		"date_first": "2018-02-14 20:19:11",
		"date_recent": "2017-11-21 18:48:34",
		"url": "https://capco.com/"
	},
	{
		"name": "Sylvia C. Erickson",
		"phone": "280-2309",
		"email": "vel.nisl@in.edu",
		"company": "Ipsum Nunc Id Foundation",
		"date_entry": "2018-03-02 12:16:26",
		"org_num": "943033 9102",
		"address_1": "P.O. Box 435, 1529 Metus. Street",
		"city": "Marburg",
		"zip": "55460",
		"geo": "-60.20237, 115.02418",
		"pan": "4024007117902",
		"pin": "1407",
		"id": 91,
		"status": "unread",
		"fee": "$25.83",
		"guid": "B473F9B2-4106-480E-D978-715983F3B41B",
		"date_exit": "2018-05-15 08:50:31",
		"date_first": "2018-11-10 13:33:16",
		"date_recent": "2017-06-03 06:48:40",
		"url": "https://capco.com/"
	},
	{
		"name": "Addison E. Solomon",
		"phone": "597-1470",
		"email": "Fusce.aliquet@ultricesposuere.net",
		"company": "Id Ante Foundation",
		"date_entry": "2018-11-03 04:33:51",
		"org_num": "604582 5384",
		"address_1": "P.O. Box 613, 4203 Aliquet Rd.",
		"city": "Renlies",
		"zip": "K4 2YY",
		"geo": "-70.388, -80.19044",
		"pan": "4929293371742",
		"pin": "2506",
		"id": 92,
		"status": "read",
		"fee": "$25.83",
		"guid": "A4A18177-C78E-FB50-39EA-9DEFEBBC9BB8",
		"date_exit": "2019-01-13 13:03:33",
		"date_first": "2018-03-05 09:29:43",
		"date_recent": "2017-07-31 18:12:17",
		"url": "https://capco.com/"
	},
	{
		"name": "Kaden Q. Collier",
		"phone": "577-7384",
		"email": "Sed.nunc@aodiosemper.com",
		"company": "Quis LLP",
		"date_entry": "2017-06-06 15:24:41",
		"org_num": "817468 7023",
		"address_1": "P.O. Box 217, 9444 Elit, Av.",
		"city": "Wageningen",
		"zip": "5125",
		"geo": "-8.34104, 4.99297",
		"pan": "4485033154573361",
		"pin": "5360",
		"id": 93,
		"status": "unread",
		"fee": "$1.05",
		"guid": "E2C35E13-3176-E8F9-D348-FE88AA817931",
		"date_exit": "2018-03-14 02:13:00",
		"date_first": "2017-07-31 15:24:25",
		"date_recent": "2017-09-11 09:55:19",
		"url": "https://capco.com/"
	},
	{
		"name": "Blaine N. May",
		"phone": "632-5148",
		"email": "faucibus@erat.org",
		"company": "Nunc Corporation",
		"date_entry": "2018-10-21 07:42:20",
		"org_num": "447448 4559",
		"address_1": "113-9036 Tempus Ave",
		"city": "Las Vegas",
		"zip": "54628-898",
		"geo": "36.32288, 13.24225",
		"pan": "4539360868080375",
		"pin": "1995",
		"id": 94,
		"status": "read",
		"fee": "$44.08",
		"guid": "52BF16B4-6946-A209-8D8D-DD3551D03E65",
		"date_exit": "2017-08-22 03:55:07",
		"date_first": "2017-11-25 09:09:30",
		"date_recent": "2019-03-15 09:28:40",
		"url": "https://capco.com/"
	},
	{
		"name": "Howard M. Stein",
		"phone": "100-3235",
		"email": "sit.amet@porta.net",
		"company": "Velit Quisque Varius Foundation",
		"date_entry": "2018-01-13 02:28:41",
		"org_num": "648978 0103",
		"address_1": "Ap #332-8282 Tellus Street",
		"city": "Celle",
		"zip": "41861",
		"geo": "83.45538, 22.30225",
		"pan": "4539 131 75 2795",
		"pin": "9652",
		"id": 95,
		"status": "expired",
		"fee": "$28.68",
		"guid": "8D2A78F1-9B97-8B62-BF32-71CA2A3FDC48",
		"date_exit": "2018-05-16 09:08:23",
		"date_first": "2017-12-12 08:45:05",
		"date_recent": "2017-11-29 05:12:54",
		"url": "https://capco.com/"
	},
	{
		"name": "Brendan X. Steele",
		"phone": "1-682-839-0560",
		"email": "amet@lobortis.org",
		"company": "Tempus Non Limited",
		"date_entry": "2018-09-02 10:51:50",
		"org_num": "895378 7127",
		"address_1": "6166 Gravida Street",
		"city": "Lives-sur-Meuse",
		"zip": "68109-715",
		"geo": "-60.7043, 54.03347",
		"pan": "491633 7637708927",
		"pin": "8636",
		"id": 96,
		"status": "unread",
		"fee": "$88.20",
		"guid": "62A26C19-E1C9-C404-CA5F-88781608358A",
		"date_exit": "2018-01-17 18:55:03",
		"date_first": "2017-10-02 10:54:02",
		"date_recent": "2018-11-06 09:14:14",
		"url": "https://capco.com/"
	},
	{
		"name": "Cecilia Z. Valencia",
		"phone": "363-1770",
		"email": "Cum.sociis.natoque@aliquetmolestie.com",
		"company": "Odio Semper Cursus Corporation",
		"date_entry": "2017-04-16 01:36:02",
		"org_num": "718993 6979",
		"address_1": "8555 Ridiculus Avenue",
		"city": "Sittard",
		"zip": "52326-322",
		"geo": "39.00823, -148.14094",
		"pan": "4716359076155990",
		"pin": "3240",
		"id": 97,
		"status": "unread",
		"fee": "$68.62",
		"guid": "76AFF842-CCBB-0172-422D-701920170165",
		"date_exit": "2017-06-15 00:28:06",
		"date_first": "2017-04-28 14:43:16",
		"date_recent": "2018-11-23 09:30:38",
		"url": "https://capco.com/"
	},
	{
		"name": "Olivia X. Pennington",
		"phone": "109-0869",
		"email": "sociis.natoque@sedduiFusce.co.uk",
		"company": "Nam Porttitor LLP",
		"date_entry": "2018-08-26 03:27:27",
		"org_num": "229511 4298",
		"address_1": "P.O. Box 624, 8549 Sem. Road",
		"city": "Ercilla",
		"zip": "3913",
		"geo": "5.60381, -9.68539",
		"pan": "4916 595 56 4447",
		"pin": "5939",
		"id": 98,
		"status": "unread",
		"fee": "$72.45",
		"guid": "63A69656-ECA9-91CB-5D85-6DD0DD40EE3A",
		"date_exit": "2018-12-18 19:37:32",
		"date_first": "2017-08-27 10:43:08",
		"date_recent": "2019-03-04 20:21:55",
		"url": "https://capco.com/"
	},
	{
		"name": "Vivien F. Lawson",
		"phone": "541-0880",
		"email": "sed.consequat@scelerisquesed.net",
		"company": "Sagittis Nullam Vitae Associates",
		"date_entry": "2018-02-05 05:49:12",
		"org_num": "902166 3704",
		"address_1": "P.O. Box 843, 6886 Tellus Road",
		"city": "West Valley City",
		"zip": "9136",
		"geo": "-32.64919, -6.93157",
		"pan": "492906 6342799278",
		"pin": "6708",
		"id": 99,
		"status": "unread",
		"fee": "$67.51",
		"guid": "390340AD-677F-42E2-569E-42E7D212DCAC",
		"date_exit": "2017-04-14 10:08:38",
		"date_first": "2019-03-06 05:29:21",
		"date_recent": "2018-04-06 22:30:38",
		"url": "https://capco.com/"
	},
	{
		"name": "September Y. Mcguire",
		"phone": "847-2227",
		"email": "consequat.auctor@ipsumleo.edu",
		"company": "Nisl Company",
		"date_entry": "2018-09-04 09:05:12",
		"org_num": "583449 4410",
		"address_1": "9585 Tellus Av.",
		"city": "Hohen Neuendorf",
		"zip": "45522",
		"geo": "-40.70446, -140.92439",
		"pan": "4556586831502",
		"pin": "5510",
		"id": 100,
		"status": "expired",
		"fee": "$92.66",
		"guid": "5DEAD309-75DF-8A3D-8E2F-89D63278851B",
		"date_exit": "2017-10-11 08:55:43",
		"date_first": "2018-08-05 04:33:46",
		"date_recent": "2018-07-25 10:03:28",
		"url": "https://capco.com/"
	}
]
 `;
    }
}


/***/ }),

/***/ "./src/app/Interceptors/CapcoFakeEndPoint.intcerptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/Interceptors/CapcoFakeEndPoint.intcerptor.ts ***!
  \**************************************************************/
/*! exports provided: CapcoFakeEndPointInterceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcoFakeEndPointInterceptors", function() { return CapcoFakeEndPointInterceptors; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _CapcoSampleData_capcosampledata_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CapcoSampleData/capcosampledata.data */ "./src/app/CapcoSampleData/capcosampledata.data.ts");




class CapcoFakeEndPointInterceptors {
    constructor() {
    }
    intercept(request, next) {
        let samplepapco = new _CapcoSampleData_capcosampledata_data__WEBPACK_IMPORTED_MODULE_3__["Capcosampledata"]();
        // tslint:disable-next-line: prefer-const
        let capcosampledata = samplepapco.getcapcosampledata() || [];
        if (request.url.endsWith('/capcoapi/sampledata') && request.method === 'GET') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: capcosampledata }));
        }
        if (request.url.endsWith('/capcoapi/submit') && request.method === 'POST') {
            // tslint:disable-next-line: prefer-const
            let newcapco = request.body;
            capcosampledata.push(newcapco);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: capcosampledata }));
        }
        return next.handle(request);
    }
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
/* harmony import */ var _capcoComponents_copco_table_copco_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capcoComponents/copco-table/copco-table.component */ "./src/app/capcoComponents/copco-table/copco-table.component.ts");




const routes = [
    { path: '', component: _capcoComponents_copco_table_copco_table_component__WEBPACK_IMPORTED_MODULE_3__["CopcoTableComponent"] }
];
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
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n:host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\np {\n  margin: 0;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar img {\n  margin: 0 16px;\n}\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n.content {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n.card svg.material-icons path {\n  fill: #888;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small {\n  height: 16px;\n  width: 168px;\n}\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card span {\n  margin-left: 60px;\n}\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na:hover {\n  color: #125699;\n}\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter a {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n.terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2hhaWxlZGVtaXNzaWUvRG9jdW1lbnRzL0NvcGNvVGFibGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWQ7RUFDRSwwSkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FERUo7QUNDRTs7Ozs7O0VBTUUsYUFBQTtBREVKO0FDQ0U7RUFDRSxTQUFBO0FERUo7QUNDRTtFQUNFLE9BQUE7QURFSjtBQ0NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0U7RUFDRSxjQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7QURFSjtBQ0NFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBREVKO0FDQ0U7RUFDRSxpQkFBQTtBREVKO0FDQ0U7RUFDRSxVQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLGVBQUE7QURFSjtBQ0NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QURFSjtBQ0NFO0VBQ0UsZUFBQTtBREVKO0FDQ0U7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7QURFSjtBQ0NFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREVKO0FDQ0U7RUFDRSxpQkFBQTtBREVKO0FDQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURFSjtBQ0NFOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0NFO0VBQ0UsY0FBQTtBREVKO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBREVKO0FDQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NFO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QURFSjtBQ0NFO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBREVKO0FDQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FERUo7QUNDRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMElBQUE7QURFSjtBQ0NFO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURFSjtBQ0VFLHNCQUFBO0FBQ0E7RUFFRTs7SUFFRSxXQUFBO0VEQUo7O0VDR0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFREFKOztFQ0dFO0lBQ0UsaUJBQUE7RURBSjs7RUNHRTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFREFKO0FBQ0Y7QUNHRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IC04cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM2OTY3Njc7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgd2lkdGg6IDE5MjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXG4udGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufSIsIiAgOmhvc3Qge1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB9XG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICAudG9vbGJhciB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogLThweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50b29sYmFyIGltZyB7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cblxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDMycHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBzdmcubWF0ZXJpYWwtaWNvbnMge1xuICAgIGhlaWdodDogMjRweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gIC5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiAjODg4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxuXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoYmxhY2ssIDAuMzUpO1xuICB9XG5cbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtMTBweDtcbiAgICB0b3A6IC0yNHB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxODBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gIH1cblxuICBhLFxuICBhOnZpc2l0ZWQsXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTk3NmQyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMTI1Njk5O1xuICB9XG5cbiAgLnRlcm1pbmFsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XG4gIH1cblxuICAudGVybWluYWw6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XG4gICAgY29sb3I6ICNjMmMzYzQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICB0ZXh0LWluZGVudDogNHB4O1xuICB9XG5cbiAgLnRlcm1pbmFsIHByZSB7XG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluayB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbiAgfVxuXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XG4gICAgY29sb3I6ICMyNDI5MmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XG4gIH1cblxuICAuZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0uNWVtO1xuICB9XG5cbiAgLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5cbiAgc3ZnI2Nsb3VkcyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogLTE2MHB4O1xuICAgIGxlZnQ6IC0yMzBweDtcbiAgICB6LWluZGV4OiAtMTA7XG4gICAgd2lkdGg6IDE5MjBweDtcbiAgfVxuXG5cbiAgLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxuICAgIC50ZXJtaW5hbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gICAgfVxuXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgICByaWdodDogMTIwcHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICB9XG4iXX0= */");

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'CopcoTable';
    }
};
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _capcoComponents_copco_table_copco_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capcoComponents/copco-table/copco-table.component */ "./src/app/capcoComponents/copco-table/copco-table.component.ts");
/* harmony import */ var _capcoService_capcoSampledataservice_capco_sample_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./capcoService/capcoSampledataservice/capco-sample.service */ "./src/app/capcoService/capcoSampledataservice/capco-sample.service.ts");
/* harmony import */ var _Interceptors_CapcoFakeEndPoint_intcerptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Interceptors/CapcoFakeEndPoint.intcerptor */ "./src/app/Interceptors/CapcoFakeEndPoint.intcerptor.ts");
/* harmony import */ var _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./capcoService/capcopagingservice/pager-service.service */ "./src/app/capcoService/capcopagingservice/pager-service.service.ts");
/* harmony import */ var _capcoComponents_capco_pager_capco_pager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./capcoComponents/capco-pager/capco-pager.component */ "./src/app/capcoComponents/capco-pager/capco-pager.component.ts");
/* harmony import */ var _capcoPipes_power_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./capcoPipes/power.pipe */ "./src/app/capcoPipes/power.pipe.ts");
/* harmony import */ var _capcoPipes_ellipsis_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./capcoPipes/ellipsis/ellipsis.pipe */ "./src/app/capcoPipes/ellipsis/ellipsis.pipe.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _capcoComponents_copco_table_copco_table_component__WEBPACK_IMPORTED_MODULE_7__["CopcoTableComponent"],
            _capcoComponents_capco_pager_capco_pager_component__WEBPACK_IMPORTED_MODULE_11__["CapcoPagerComponent"],
            _capcoPipes_power_pipe__WEBPACK_IMPORTED_MODULE_12__["PowerPipe"],
            _capcoPipes_ellipsis_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_13__["EllipsisPipe"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        providers: [
            _capcoService_capcoSampledataservice_capco_sample_service__WEBPACK_IMPORTED_MODULE_8__["CapcoSampleService"],
            _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_10__["CapcoPagerService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                useClass: _Interceptors_CapcoFakeEndPoint_intcerptor__WEBPACK_IMPORTED_MODULE_9__["CapcoFakeEndPointInterceptors"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/capcoComponents/capco-pager/capco-pager.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/capcoComponents/capco-pager/capco-pager.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagersizeselector {\n  margin-left: 10px;\n  height: 35px;\n}\n\n.pager {\n  margin-left: 10px;\n}\n\n.pager li {\n  margin: 0 5px;\n}\n\n.pagersize {\n  float: left;\n  font-weight: bold;\n  font-size: medium;\n  margin-right: 20px;\n  margin-top: 2px;\n}\n\n.capcopageselector {\n  height: 50px;\n  border-style: solid;\n  border-width: 1px;\n  padding: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWlsZWRlbWlzc2llL0RvY3VtZW50cy9Db3Bjb1RhYmxlL3NyYy9hcHAvY2FwY29Db21wb25lbnRzL2NhcGNvLXBhZ2VyL2NhcGNvLXBhZ2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXBjb0NvbXBvbmVudHMvY2FwY28tcGFnZXIvY2FwY28tcGFnZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FER0U7RUFDRSxhQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NhcGNvQ29tcG9uZW50cy9jYXBjby1wYWdlci9jYXBjby1wYWdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlcnNpemVzZWxlY3Rvclxue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnBhZ2Vye1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuXG4gIC5wYWdlciBsaXtcbiAgICBtYXJnaW46IDAgNXB4O1xuICB9XG5cbi5wYWdlcnNpemV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOm1lZGl1bTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbi5jYXBjb3BhZ2VzZWxlY3RvcntcbiAgICBoZWlnaHQ6IDUwcHg7O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuIiwiLnBhZ2Vyc2l6ZXNlbGVjdG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnBhZ2VyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5wYWdlciBsaSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5wYWdlcnNpemUge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLmNhcGNvcGFnZXNlbGVjdG9yIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/capcoComponents/capco-pager/capco-pager.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/capcoComponents/capco-pager/capco-pager.component.ts ***!
  \**********************************************************************/
/*! exports provided: CapcoPagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcoPagerComponent", function() { return CapcoPagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../capcoService/capcopagingservice/pager-service.service */ "./src/app/capcoService/capcopagingservice/pager-service.service.ts");



let CapcoPagerComponent = class CapcoPagerComponent {
    constructor(pagerService) {
        this.pagerService = pagerService;
        this.capcoPageSizes = [10, 25, 50, 100, 300];
        pagerService.capcoPager.subscribe(pager => {
            this.capcoPager = pager;
        });
    }
    ngOnInit() {
        this.selectedPageSize = this.capcoPageSizes[0];
        this.updatecapcoPage(1);
    }
    setcapcoPage(pagenumber) {
        if (pagenumber < 1 || pagenumber > this.capcoPager.totalPagesCount) {
            return;
        }
        this.updatecapcoPage(pagenumber);
    }
    updatecapcoPage(pagenumber) {
        this.pagerService.configurePager(this.totalcapcosampledata, pagenumber, this.selectedPageSize);
    }
    setPagesize(pagesize) {
        this.selectedPageSize = pagesize;
        this.updatecapcoPage(1);
    }
};
CapcoPagerComponent.ctorParameters = () => [
    { type: _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_2__["CapcoPagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CapcoPagerComponent.prototype, "totalcapcosampledata", void 0);
CapcoPagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-capco-pager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./capco-pager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/capco-pager/capco-pager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./capco-pager.component.scss */ "./src/app/capcoComponents/capco-pager/capco-pager.component.scss")).default]
    })
], CapcoPagerComponent);



/***/ }),

/***/ "./src/app/capcoComponents/copco-table/copco-table.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/capcoComponents/copco-table/copco-table.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".caplohamletdiv {\n  width: 1200px;\n  height: 500px;\n  overflow: auto;\n  position: relative;\n}\n\nthead th {\n  padding: 10px;\n}\n\n.fixeddiv::after {\n  content: \"\";\n  display: block;\n}\n\n.fixed_header {\n  width: 100%;\n  border: 2px;\n  height: 450;\n  border-width: 2px;\n}\n\ntable, th, td {\n  border: 1px solid black;\n}\n\nth {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  background-color: gray;\n}\n\ntfoot td {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0px;\n}\n\ntr th:nth-child(1) {\n  width: 120px;\n  z-index: 6;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0px;\n  top: 0px;\n}\n\ntr td:nth-child(1) {\n  width: 120px;\n  background-color: gray;\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0px;\n}\n\n.pager {\n  width: 100%;\n  position: relative;\n  bottom: 0px;\n  z-index: 10;\n  /* margin-top:5px; */\n}\n\n.pagerfooter {\n  margin: auto;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYWlsZWRlbWlzc2llL0RvY3VtZW50cy9Db3Bjb1RhYmxlL3NyYy9hcHAvY2FwY29Db21wb25lbnRzL2NvcGNvLXRhYmxlL2NvcGNvLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXBjb0NvbXBvbmVudHMvY29wY28tdGFibGUvY29wY28tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSx1QkFBQTtBQ0RGOztBRElBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFdBQUE7QUNERjs7QURLQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDRkE7O0FETUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtBQ0hGOztBRE1BO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0hBOztBRE1BO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEEiLCJmaWxlIjoic3JjL2FwcC9jYXBjb0NvbXBvbmVudHMvY29wY28tdGFibGUvY29wY28tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FwbG9oYW1sZXRkaXZ7XG4gIHdpZHRoOjEyMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3c6YXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50aGVhZCB0aHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuXG4uZml4ZWRkaXY6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmZpeGVkX2hlYWRlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMnB4O1xuICBoZWlnaHQ6IDQ1MDs7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG50YWJsZSwgdGgsIHRke1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGh7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDowcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbnRmb290IHRke1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206MHB4O1xufVxuXG5cbnRyIHRoOm50aC1jaGlsZCgxKXtcbndpZHRoOiAxMjBweDtcbnotaW5kZXg6IDY7XG5wb3NpdGlvbjogc3RpY2t5O1xubGVmdDowcHg7XG50b3A6MHB4O1xufVxuXG5cbnRyIHRkOm50aC1jaGlsZCgxKXtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OjBweDtcbn1cblxuLnBhZ2Vye1xud2lkdGg6IDEwMCU7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5ib3R0b206MHB4O1xuei1pbmRleDogMTA7XG4vKiBtYXJnaW4tdG9wOjVweDsgKi9cbn1cblxuLnBhZ2VyZm9vdGVye1xubWFyZ2luOiBhdXRvO1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4iLCIuY2FwbG9oYW1sZXRkaXYge1xuICB3aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50aGVhZCB0aCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5maXhlZGRpdjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpeGVkX2hlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweDtcbiAgaGVpZ2h0OiA0NTA7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbnRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG59XG5cbnRmb290IHRkIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbnRyIHRoOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgei1pbmRleDogNjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxudHIgdGQ6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5wYWdlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAxMDtcbiAgLyogbWFyZ2luLXRvcDo1cHg7ICovXG59XG5cbi5wYWdlcmZvb3RlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/capcoComponents/copco-table/copco-table.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/capcoComponents/copco-table/copco-table.component.ts ***!
  \**********************************************************************/
/*! exports provided: CopcoTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopcoTableComponent", function() { return CopcoTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capcoService_capcoSampledataservice_capco_sample_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../capcoService/capcoSampledataservice/capco-sample.service */ "./src/app/capcoService/capcoSampledataservice/capco-sample.service.ts");
/* harmony import */ var _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../capcoService/capcopagingservice/pager-service.service */ "./src/app/capcoService/capcopagingservice/pager-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CopcoTableComponent = class CopcoTableComponent {
    constructor(sampleservice, pagerService) {
        this.sampleservice = sampleservice;
        this.pagerService = pagerService;
        this.columns = ['name', 'phone', 'email',
            'company', 'date_entry', 'org_num', 'address_1',
            'city', 'zip', 'geo', 'pan', 'pin', 'id', 'status', 'fee', 'guid',
            'date_exit', 'date_first', 'date_recent', 'url'];
        pagerService.capcoPager.subscribe(pager => {
            this.capcoPager = pager;
            this.selectedSampledata = this.capcoAllsampledata.slice(this.capcoPager.activepageIndex, this.capcoPager.currentendIndex + 1);
        });
    }
    ngOnInit() {
        this.loadcapcoAllsampledata();
    }
    loadcapcoAllsampledata() {
        this.sampleservice.getcapcosampledata().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((capcodata) => capcodata)).subscribe((sampledata) => {
            this.capcoAllsampledata = sampledata;
            this.totalcapcosampledata = this.capcoAllsampledata.length;
        });
    }
    submit(selectedItem) {
        this.sampleservice.submitcapcosampledata(selectedItem);
        console.log(selectedItem.id + '  ' + selectedItem.status);
    }
};
CopcoTableComponent.ctorParameters = () => [
    { type: _capcoService_capcoSampledataservice_capco_sample_service__WEBPACK_IMPORTED_MODULE_2__["CapcoSampleService"] },
    { type: _capcoService_capcopagingservice_pager_service_service__WEBPACK_IMPORTED_MODULE_3__["CapcoPagerService"] }
];
CopcoTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copco-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copco-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/capcoComponents/copco-table/copco-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./copco-table.component.scss */ "./src/app/capcoComponents/copco-table/copco-table.component.scss")).default]
    })
], CopcoTableComponent);



/***/ }),

/***/ "./src/app/capcoPipes/ellipsis/ellipsis.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/capcoPipes/ellipsis/ellipsis.pipe.ts ***!
  \******************************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EllipsisPipe = class EllipsisPipe {
    transform(value, brace) {
        return brace[0] + value + brace[1];
    }
};
EllipsisPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'ellipsis'
    })
], EllipsisPipe);



/***/ }),

/***/ "./src/app/capcoPipes/power.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/capcoPipes/power.pipe.ts ***!
  \******************************************/
/*! exports provided: PowerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerPipe", function() { return PowerPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PowerPipe = class PowerPipe {
    transform(base, exponent) {
        return Math.pow(base, isNaN(exponent) ? 1 : exponent);
    }
};
PowerPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'power'
    })
], PowerPipe);



/***/ }),

/***/ "./src/app/capcoService/capcoSampledataservice/capco-sample.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/capcoService/capcoSampledataservice/capco-sample.service.ts ***!
  \*****************************************************************************/
/*! exports provided: CapcoSampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcoSampleService", function() { return CapcoSampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CapcoSampleService = class CapcoSampleService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.capcosampledata = [];
    }
    getcapcosampledata() {
        let url = 'http://localhost:5000/capcoapi/sampledata';
        return this.httpclient.get(url);
    }
    submitcapcosampledata(capconew) {
        // tslint:disable-next-line: prefer-const
        let url = 'http://localhost:5000/capcoapi/submit';
        return this.httpclient.post(url, { parm: capconew });
    }
};
CapcoSampleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CapcoSampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CapcoSampleService);



/***/ }),

/***/ "./src/app/capcoService/capcopagingservice/pager-service.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/capcoService/capcopagingservice/pager-service.service.ts ***!
  \**************************************************************************/
/*! exports provided: CapcoPagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapcoPagerService", function() { return CapcoPagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CapcoPagerService = class CapcoPagerService {
    constructor() {
        this.capcoPager = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    configurePager(totalsampledata, activepage = 1, selectedPageSize = 5) {
        // tslint:disable-next-line: prefer-const
        let totalPages = Math.ceil(totalsampledata / selectedPageSize);
        // tslint:disable-next-line: prefer-const
        let startcapcoIndex = (activepage - 1) * selectedPageSize;
        // tslint:disable-next-line: prefer-const
        let endcapcoIndex = Math.min(startcapcoIndex + selectedPageSize - 1, totalsampledata);
        let currentcapcoPager = 
        // tslint:disable-next-line: one-line
        {
            // tslint:disable-next-line: object-literal-shorthand
            totalsampledata: totalsampledata,
            // tslint:disable-next-line: object-literal-shorthand
            activepage: activepage,
            selectedPagesize: selectedPageSize,
            totalPagesCount: totalPages,
            activepageIndex: startcapcoIndex,
            currentendIndex: endcapcoIndex
        };
        this.capcoPager.next(currentcapcoPager);
    }
};
CapcoPagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CapcoPagerService);



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
    production: false,
    navbarBackgroundColor: 'blue'
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

module.exports = __webpack_require__(/*! /Users/hailedemissie/Documents/CopcoTable/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
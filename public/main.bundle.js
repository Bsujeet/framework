webpackJsonp([1,4],{

/***/ 1000:
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"col-sm-10 col-md-6 col-lg-4 offset-sm-1 offset-md-3 offset-lg-4\">\r\n  <md-card-title>\r\n    <h4>VM Creation Form</h4>\r\n  </md-card-title>\r\n  <md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmcreationForm\" (ngSubmit)=\"onSubmit(vmcreationForm.value)\" [hidden]=\"submitted\">\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Type\" formControlName=\"type\" id=\"type\" readonly>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"Operation\" formControlName=\"operation\" (ngModelChange)=\"onOperationChange($event)\" required class=\"col-12\">\r\n          <md-option *ngFor=\"let operat of operationList\" value=\"{{operat.value}}\">\r\n            {{ operat.name }}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n  <template form-host></template>\r\n</md-card>\r\n"

/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmcreationForm\" (ngSubmit)=\"onSubmit(vmcreationForm.value)\" [hidden]=\"submitted\">\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Name\" formControlName=\"Name\" id=\"Name\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <textarea cols=\"40\" rows=\"5\" mdInput placeholder=\"Description\" formControlName=\"description\" id=\"description\" required></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"VM Name\" formControlName=\"vmName\" id=\"vmName\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"Operating System\" formControlName=\"os\" required class=\"col-12\">\r\n          <md-option *ngFor=\"let os of osList\" value=\"{{os.version}}\">\r\n            {{ os.name }}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Disk Size (GB)\" formControlName=\"storage\" id=\"diskSize\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"CPU Core\" formControlName=\"cores\" id=\"cpuCore\" required class=\"col-12\">\r\n          <md-option value=\"1\">1</md-option>\r\n          <md-option value=\"2\">2</md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Memory (MB)\" formControlName=\"memory\" id=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-card-actions class=\"col-12\">\r\n          <button type=\"submit\" md-raised-button class=\"my-success-btn\" color=\"primary\">Create</button>\r\n          <button type=\"button\" md-raised-button class=\"my-cancel-btn\" (click)=\"backToHome()\">Cancel</button>\r\n        </md-card-actions>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "<md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmeditForm\" (ngSubmit)=\"onSubmit(vmeditForm.value)\" [hidden]=\"submitted\" >\r\n      \r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"VM Name\" formControlName=\"vmName\" (change)=\"onVMChange($event)\" required class=\"col-12\" [(ngModel)]=\"vm\">\r\n          <md-option *ngFor=\"let vm of vmList\" value=\"{{vm.requestId}}\">\r\n            {{ vm.vmName + ' VM ID: ' + vm.vmId}}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Name\" formControlName=\"Name\" id=\"Name\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <textarea cols=\"40\" rows=\"5\" mdInput placeholder=\"Description\" formControlName=\"description\" id=\"description\" required></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Disk Size (GB)\" formControlName=\"storage\" id=\"diskSize\"  required>          \r\n        </md-input-container>\r\n      </div>\r\n      <!--<div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Increase Disk Size (GB)\" formControlName=\"storage_inc\" id=\"diskSizeInc\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>-->\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"CPU Core\" formControlName=\"cores\" id=\"cpuCore\" required class=\"col-12\">\r\n          <md-option value=\"1\">1</md-option>\r\n          <md-option value=\"2\">2</md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Memory (MB)\" formControlName=\"memory\" id=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-card-actions class=\"col-12\">\r\n          <button type=\"submit\" md-raised-button class=\"my-success-btn\"  color=\"primary\">Create</button>\r\n          <button type=\"button\" md-raised-button class=\"my-cancel-btn\" (click)=\"backToHome()\">Cancel</button>\r\n        </md-card-actions>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<p>\n  construction works!\n</p>\n"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"col-10 offset-1 justify-content-xs-center\">\n      <md-card class=\"col-sx-12 col-sm-12 col-md-6 col-lg-4 \" *ngFor=\"let i of chartData\"> <!--class=\"col-sx-5 col-sm-5 col-md-4 col-lg-4 \"-->\n        <md-card-title>\n          <h3>{{i.name |uppercase}}</h3>\n        </md-card-title>\n        <md-card-content>\n          <div style=\"display: block\">\n            <canvas baseChart [datasets]=\"i.datasets\" [labels]=\"i.label\" [chartType]=\"i.chart\" [colors]=\"colorsOverride\" (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n        </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<p>\n   {{data.message}}\n</p>\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float:right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<p>\n   {{data.message}}\n</p>\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float:right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\r\n    <md-toolbar color=\"primary\" class=\"col-12\">\r\n        <md-icon (click)=\"sidenav.toggle()\" class=\"spacing pointer\">menu</md-icon>\r\n        <span class=\"header-title\">Datacenter Management Framework</span>\r\n        <span class=\"example-fill-remaining-space\"></span>\r\n        <span class=\"for-desktop after-bar\">Welcome {{User}}</span>\r\n        <span class=\"for-desktop pointer\" (click)=\"logout()\">Logout</span>\r\n    </md-toolbar>\r\n</div>\r\n<div class=\"row rest-content\">\r\n    <md-sidenav-container>\r\n        <md-sidenav #sidenav mode=\"side\" opened=\"showHideMenu()\" class=\"col-sx-3 col-sm-3 col-md-auto col-lg-auto border-left-0\"> <!--class=\"col-sx-3 col-sm-3 col-md-3 col-lg-2 border-left-0\"-->\r\n            <!-- sidenav content -->\r\n            <app-nav [sidenav]=\"sidenav\"></app-nav>\r\n        </md-sidenav>\r\n        <!-- primary content -->\r\n        <div class=\"col-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </md-sidenav-container>\r\n</div>"

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "<p>\n  inventory works!\n</p>\n"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <md-toolbar color=\"primary\" class=\"col-12\">\n    <h5>Datacenter Management Framework</h5>\n  </md-toolbar>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-10 col-md-6 col-lg-4 offset-sm-1 offset-md-3 offset-lg-4\">\n    <md-card class=\"login-wrapper\">\n      <md-card-header>        \n        <md-card-title ><h5 style=\"text-align: center\"> Datacenter Management Framework </h5></md-card-title>\n      </md-card-header>\n      <hr>\n      <md-card-content>\n        <form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onlogin()\" novalidate>\n          <div class=\"form-group\">\n            <md-input-container class=\"col-12\">\n              <input mdInput placeholder=\"UserName\" type=\"text\" formControlName=\"userId\" required />\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"col-12\">\n              <input mdInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" required />\n            </md-input-container>\n          </div>\n          <div class=\"form-group\">\n            <span [ngClass]=\"{'error':!InVisible,'active':!InVisible}\">\n          {{result}}\n        </span>\n          </div>\n          <div class=\"form-group\">\n            <md-card-actions class=\"col-12\">\n              <button md-raised-button type=\"submit\" class=\"my-success-btn\" color=\"primary\">LOG IN</button>\n            </md-card-actions>\n          </div>\n        </form>\n      </md-card-content>\n    </md-card>\n  </div>\n</div>"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-sidenav-focus-trap\">\n  <div class=\"cdk-focus-trap-content\">\n    <nav class=\"main\">\n      <ul>\n        <li class=\"for-mobile\"><span>Welcome {{User}}</span></li>\n        <li *ngFor=\"let list of links\">\n          <a *ngIf=\"list.submenu==undefined \" [routerLink]=\"[list.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"sidenav.close()\"><i class=\"material-icons list-icons\">{{list.icon}}</i>{{list.name}}</a>\n          <nav class=\"sub\" *ngIf=\"list.submenu!=undefined\">\n            <h6 *ngIf=\"list.submenu!=undefined\" (click)=\"submenu($event)\">{{list.name}}<i class=\"material-icons\" [hidden]=\"shown\">&#xE315;</i><i class=\"material-icons\" [hidden]=\"!shown\">&#xE313;</i></h6>\n            <ul [hidden]=\"shown\">\n              <li *ngFor=\"let menu of list.submenu\"><a [routerLink]=\"[menu.path]\" (click)=\"sidenav.close();submenu($event)\"><i class=\"material-icons list-icons\">{{menu.icon}}</i>{{menu.name}}</a></li>\n            </ul>\n          </nav>\n        </li>\n        <li class=\"for-mobile\"><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"material-icons list-icons\">power_settings_new</i>Logout</a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n<!--(click)=\"sidenav.close()\"-->"

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<ng2-smart-table  [settings]=\"settings\" [source]=\"parameters\" ></ng2-smart-table>\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float: right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\"> \r\n  <md-card class=\"col-10 offset-1\">\r\n    <md-card-title>\r\n      <h2>Requests</h2>\r\n    </md-card-title>\r\n    <md-card-content>\r\n      <button type=\"button\" md-raised-button class=\"my-success-btn\" (click)=\"addNewRequest()\"  color=\"primary\">New / Edit</button>\r\n      <hr>\r\n      <ng2-smart-table class=\"table table-striped table-responsive\" [settings]=\"settings\" [source]=\"data\" (infoColumn)=\"onUserRowSelect($event)\" (edit)=\"onEdit($event)\" ></ng2-smart-table>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ 1015:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<md-card class=\"col-10 offset-1\">\n  <md-card-title>\n    <h2>Resouces</h2>\n  </md-card-title>\n  <md-card-content>\n        <ng2-smart-table class=\"table table-responsive\" [settings]=\"settings\" [source]=\"data\" (infoColumn)=\"onUserRowSelect($event)\"></ng2-smart-table>\n  </md-card-content>\n</md-card>\n</div>"

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

module.exports = "<p>\n  {{data.message}}\n</p>\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float: right\" (click)=\"dialogRef.close()\">Ok</button>"

/***/ }),

/***/ 1269:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(654);


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorDialogComponent = (function () {
    function ErrorDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
    };
    ErrorDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-dialog',
            template: __webpack_require__(1008),
            styles: [__webpack_require__(977)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, Object])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
    var _a;
}());
//# sourceMappingURL=error-dialog.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PopUpDialogComponent = (function () {
    function PopUpDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.settings = {
            columns: {
                name: {
                    title: "Name"
                },
                value: {
                    title: "Values"
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: true
            },
            hideSubHeader: true,
            hideHeader: false
        };
        var parameter = [], localdata = [], additionalInfo = {};
        additionalInfo = this.data.additionalInfo || "";
        localdata = this.data.info;
        for (var i = 0; i < localdata.length; i++) {
            var propName = localdata[i].name;
            if (propName == "storage") {
                propName = propName + " (GB)";
            }
            else if (propName == "memory") {
                propName = propName + " (MB)";
            }
            parameter.push({
                "name": propName.toUpperCase(),
                "value": localdata[i].value || localdata[i].qty,
            });
        }
        if (additionalInfo && additionalInfo != null) {
            for (var prop in additionalInfo) {
                parameter.push({ "name": prop, "value": additionalInfo[prop] });
            }
        }
        this.parameters = parameter;
    }
    PopUpDialogComponent.prototype.ngOnInit = function () {
    };
    PopUpDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pop-up-dialog',
            template: __webpack_require__(1013),
            styles: [__webpack_require__(982)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, Object])
    ], PopUpDialogComponent);
    return PopUpDialogComponent;
    var _a;
}());
//# sourceMappingURL=pop-up-dialog.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SuccessDialogComponent = (function () {
    function SuccessDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SuccessDialogComponent.prototype.ngOnInit = function () {
    };
    SuccessDialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-success-dialog',
            template: __webpack_require__(1016),
            styles: [__webpack_require__(985)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, Object])
    ], SuccessDialogComponent);
    return SuccessDialogComponent;
    var _a;
}());
//# sourceMappingURL=success-dialog.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_dialog_dialog_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_error_dialog_error_dialog_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommonService = (function () {
    // visible:boolean = true;
    function CommonService(http, router, dialog) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.baseUrl = "";
        // Observable string sources
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this.navFlag = false;
    }
    CommonService.prototype.setUserName = function (name) {
        this.userName = name;
    };
    CommonService.prototype.getUserName = function () {
        if (!this.userName) {
            return this.userName = window.sessionStorage.getItem('username');
        }
        else {
            return this.userName;
        }
    };
    CommonService.prototype.setToken = function (token) {
        this.token = token;
    };
    CommonService.prototype.getToken = function () {
        if (!this.token) {
            return this.token = window.sessionStorage.getItem('token');
        }
        else {
            return this.token;
        }
    };
    CommonService.prototype.postService = function (url, data) {
        if (url.indexOf('login') == -1) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('x-access-token', this.getToken());
            headers.append('username', this.getUserName());
            headers.append('Content-Type', 'application/json');
            return this.http.post(this.baseUrl + url, data, { headers: headers }).map(function (res) { return res.json(); });
        }
        return this.http.post(this.baseUrl + url, data).map(function (res) { return res.json(); });
    };
    CommonService.prototype.getService = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.getToken());
        headers.append('username', this.getUserName());
        return this.http.get(this.baseUrl + url, { headers: headers }).map(function (res) { return res.json(); });
    };
    CommonService.prototype.deleteService = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.getToken());
        headers.append('username', this.getUserName());
        return this.http.delete(this.baseUrl + url, { headers: headers }).map(function (res) { return res.json(); });
    };
    CommonService.prototype.updateService = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-access-token', this.getToken());
        headers.append('username', this.getUserName());
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + url, data, { headers: headers }).map(function (res) { return res.json(); });
    };
    CommonService.prototype.getBrowserInfo = function () {
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browserName = navigator.appName;
        var fullVersion = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;
        // In Opera 15+, the true version is after "OPR/" 
        if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 4);
        }
        else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
            browserName = "Opera";
            fullVersion = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
            browserName = "Microsoft Internet Explorer";
            fullVersion = nAgt.substring(verOffset + 5);
        }
        else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
            browserName = "Chrome";
            fullVersion = nAgt.substring(verOffset + 7);
        }
        else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
            browserName = "Safari";
            fullVersion = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf("Version")) != -1)
                fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
            browserName = "Firefox";
            fullVersion = nAgt.substring(verOffset + 8);
        }
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/'))) {
            browserName = nAgt.substring(nameOffset, verOffset);
            fullVersion = nAgt.substring(verOffset + 1);
            if (browserName.toLowerCase() == browserName.toUpperCase()) {
                browserName = navigator.appName;
            }
        }
        // trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        if ((ix = fullVersion.indexOf(" ")) != -1)
            fullVersion = fullVersion.substring(0, ix);
        majorVersion = parseInt('' + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }
        return {
            'browserName': browserName,
            'fullVersion': fullVersion,
            'majorVersion': majorVersion,
            'appName': navigator.appName,
            'userAgent': navigator.userAgent
        };
    };
    //Not Included Yet 
    CommonService.prototype.tokenExpiryCheck = function () {
        var expiry = new Date(window.sessionStorage.getItem('expiry_in'));
        if (expiry && this.compareDates(expiry)) {
            return false; //token is not expired
        }
        return true; // token has been expired 
    };
    CommonService.prototype.compareDates = function (expiry) {
        var created = new Date();
        if ((expiry.getFullYear() >= created.getFullYear()) && (expiry.getMonth() >= created.getMonth()) && (expiry.getDay() >= created.getDay())) {
            return true; //token is not expired
        }
        return false; // token has been expired
    };
    // Service message commands
    CommonService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    //function used to send data from one component to anoher
    CommonService.prototype.sendData = function (data) { this.data = data; };
    //function used to recieve data wich was sent by sendData method
    CommonService.prototype.recievData = function () { return this.data; };
    //Method used to check the user is loggedin or not and redirect respectivley 
    CommonService.prototype.isLoggedIn = function () {
        var pathName = window.location.pathname;
        if (window.sessionStorage) {
            this.userDetails = window.sessionStorage.getItem('token');
        }
        if (this.userDetails == "undefined" || this.userDetails == null || this.userDetails == "") {
            this.router.navigate(["/login"]);
            return false;
        }
        else {
            return true;
        }
    };
    CommonService.prototype.onlogout = function () {
        var _this = this;
        /* this.deleteService('/api/v1/login').subscribe(
           data => {
             if (data.success) {
               let storage = window.sessionStorage;
               storage.setItem('token', '');
               storage.setItem('expiry_in', '');
               storage.setItem('username', '');
               return data;
             }
     
           },
           err => {
             if(!err.status){
               return err;
             }
            },
           () => { });*/
        this.deleteService('/api/v1/login').subscribe(function (data) {
            if (data.status) {
                var storage = window.sessionStorage;
                storage.setItem('token', '');
                storage.setItem('expiry_in', '');
                storage.setItem('username', '');
                _this.router.navigateByUrl('/login');
            }
        }, function (err) {
            var res = JSON.parse(err._body);
            if (!res.status) {
                var storage = window.sessionStorage;
                storage.setItem('token', '');
                storage.setItem('expiry_in', '');
                storage.setItem('username', '');
                _this.showDialog("" + err.status + " " + res.message + " ");
            }
        }, function () { });
    };
    CommonService.prototype.showDialog = function (err) {
        var _this = this;
        var res = JSON.parse(err._body);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__component_dialog_dialog_component__["a" /* DialogComponent */], {
            data: {
                message: "Error : " + err.status + " " + res.message
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigateByUrl('/login');
        });
    };
    CommonService.prototype.ShowErrorDialog = function (err) {
        console.log(err);
        var res = JSON.parse(err._body);
        var dialogErrRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__component_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                message: "Error : " + err.status + " " + res.message
            }
        });
    };
    CommonService.prototype.onCancel = function () {
        this.router.navigateByUrl('/');
    };
    CommonService.prototype.setStorage = function (key, value) {
        this.removeStorage(key);
        window.sessionStorage.setItem(key, value);
    };
    CommonService.prototype.getStorage = function (key) {
        return window.sessionStorage.getItem(key);
    };
    CommonService.prototype.removeStorage = function (key) {
        window.sessionStorage.removeItem(key);
    };
    CommonService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */]) === 'function' && _c) || Object])
    ], CommonService);
    return CommonService;
    var _a, _b, _c;
}());
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_services__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateVmComponent = (function () {
    function CreateVmComponent(formService) {
        this.formService = formService;
    }
    CreateVmComponent.prototype.ngOnInit = function () {
        this.vmForms = this.formService.getForms();
    };
    CreateVmComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-vm',
            template: "<div>\n                  <add-forms [vmForms]=\"vmForms\"></add-forms>\n               </div>",
            styles: [__webpack_require__(492)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_services__["a" /* FormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__form_services__["a" /* FormService */]) === 'function' && _a) || Object])
    ], CreateVmComponent);
    return CreateVmComponent;
    var _a;
}());
//# sourceMappingURL=create-vm.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormDirective = (function () {
    function FormDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    FormDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[form-host]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _a) || Object])
    ], FormDirective);
    return FormDirective;
    var _a;
}());
//# sourceMappingURL=form.directive.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_create_vm_form_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_edit_vm_form_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vm_forms__ = __webpack_require__(860);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormService = (function () {
    function FormService() {
    }
    FormService.prototype.getForms = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_3__vm_forms__["a" /* VMForms */](__WEBPACK_IMPORTED_MODULE_1__form_create_vm_form_component__["a" /* CreateVMFormComponent */], { name: 'Bombasto', bio: 'Brave as they come' }),
            new __WEBPACK_IMPORTED_MODULE_3__vm_forms__["a" /* VMForms */](__WEBPACK_IMPORTED_MODULE_2__form_edit_vm_form_component__["a" /* EditVMFormComponent */], null),
        ];
    };
    FormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], FormService);
    return FormService;
}());
//# sourceMappingURL=form.services.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateVMFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateVMFormComponent = (function () {
    function CreateVMFormComponent(_fb, router, CS, dialog) {
        this._fb = _fb;
        this.router = router;
        this.CS = CS;
        this.dialog = dialog;
        this.osList = [{ name: 'Ubuntu 8', version: 'ubuntu-8.04-desktop-amd64.iso' },
            { name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' },
            { name: 'CentOS 7', version: 'CentOS-7-x86_64-Minimal-1611.iso' },
            { name: 'Windows Server 64bit', version: '8250.0WIN8_X64_SERVER.ISO' }];
        this.vmcreationForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            type: ['VM', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            operation: ['CREATE', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            os: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        });
    }
    CreateVMFormComponent.prototype.ngOnInit = function () {
        console.log("Create Page on init this executes first");
    };
    CreateVMFormComponent.prototype.showDialog = function (msg) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */], {
            data: {
                message: msg
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.CS.router.navigateByUrl('home/requests');
        });
    };
    CreateVMFormComponent.prototype.showErrorDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                message: msg
            }
        });
    };
    CreateVMFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = this.vmcreationForm.value;
        this.formdata = { name: model.Name, description: model.description, type: model.type, operation: model.operation, parameters: [{ name: "vmName", value: model.vmName, type: "STRING" }, { name: "cores", value: model.cores, type: "NUMBER" }, { name: "memory", value: model.memory, type: "NUMBER" }, { name: "storage", value: model.storage, type: "NUMBER" }, { name: "os", value: model.os, type: "STRING" }] };
        this.CS.postService('/api/v1/request', this.formdata).subscribe(function (data) {
            var str = new String(data.message);
            _this.Res = data;
            if (_this.Res.status) {
                _this.showDialog(_this.Res.data.status == "SAVED" ? "Request has been saved successfully." : _this.Res.data.status);
                _this.vmcreationForm.reset();
                _this.CS.removeStorage("createvm");
            }
        }, function (err) {
            var res = JSON.parse(err._body);
            if (!res.status) {
                console.log(err);
                _this.showErrorDialog(" " + res.message + " ");
            }
        }, function () { });
    };
    CreateVMFormComponent.prototype.backToHome = function () {
        this.CS.removeStorage("createvm");
        this.router.navigateByUrl('home/requests');
    };
    CreateVMFormComponent.prototype.onlyNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CreateVMFormComponent.prototype, "data", void 0);
    CreateVMFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1002)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _d) || Object])
    ], CreateVMFormComponent);
    return CreateVMFormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=create-vm-form.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVMFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditVMFormComponent = (function () {
    function EditVMFormComponent(_fb, router, CS, dialog) {
        this._fb = _fb;
        this.router = router;
        this.CS = CS;
        this.dialog = dialog;
        this.vmeditForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.checkNaN])],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        });
        this.storageErr = this.vmeditForm.controls["storage"];
    }
    EditVMFormComponent.prototype.checkNaN = function (fieldControl) {
        return !isNaN(fieldControl.value) ? null : { notA: true };
    };
    EditVMFormComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EditVMFormComponent.prototype.getData = function () {
        var _this = this;
        this.CS.getService('/api/v1/requests/resources/edit').subscribe(function (data) {
            var str = new String(data.msg);
            var success = data.success;
            var DataArray;
            var paramArray = {};
            var final = [];
            if (data.status) {
                _this.vmList = data.data;
            }
            else if (!status && (str.includes("Failed to authenticate token") || str.includes("no token found"))) {
                _this.CS.onlogout();
            }
        }, function (err) { console.log(err); }, function () { });
    };
    EditVMFormComponent.prototype.onVMChange = function (event) {
        var _this = this;
        this.selectedVM = event;
        this.CS.getService('/api/v1/requests/resources/' + this.selectedVM.value).subscribe(function (data) {
            if (data.status) {
                var invt = {};
                var finalObj = void 0;
                var tempObj = {};
                tempObj = data.data;
                for (var props in tempObj["inventory_items"]) {
                    var temp = tempObj["inventory_items"][props];
                    var prop_name = temp["name"] == "cpu" ? "cores" : temp["name"];
                    invt[prop_name] = temp["qty"].toString();
                }
                var tto = {
                    Name: "",
                    description: "",
                    vmName: _this.selectedVM.value
                };
                finalObj = Object.assign(tto, invt);
                _this.vmeditForm.setValue(finalObj);
            }
        }, function (err) { console.log(err); }, function () { });
    };
    EditVMFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = this.vmeditForm.value;
        var currentVM = {};
        for (var prop in this.vmList) {
            var vm = this.vmList[prop];
            if (vm.requestId == this.selectedVM.value) {
                currentVM = vm;
            }
        }
        this.formdata = {
            name: model.Name,
            description: model.description,
            type: 'VM',
            operation: 'UPDATE',
            parameters: [
                {
                    name: "vmName",
                    value: currentVM["vmName"],
                    type: "STRING"
                },
                {
                    name: "resourceId",
                    value: currentVM["requestId"],
                    type: "STRING"
                },
                {
                    name: "vm_Id",
                    value: currentVM["vmId"],
                    type: "NUMBER"
                },
                {
                    name: "cores",
                    value: model.cores,
                    type: "NUMBER"
                },
                {
                    name: "memory",
                    value: model.memory,
                    type: "NUMBER"
                }, {
                    name: "storage",
                    value: model.storage /*diskSize*/,
                    type: "NUMBER"
                },
                {
                    name: "vm_node",
                    value: currentVM["vmNode"],
                    type: "STRING"
                }
            ]
        };
        this.CS.postService('/api/v1/request', this.formdata).subscribe(function (data) {
            var str = new String(data.message);
            _this.Res = data;
            if (_this.Res.status) {
                _this.showDialog(_this.Res.data.status);
                _this.vmeditForm.reset();
            }
        }, function (err) {
            var res = JSON.parse(err._body);
            if (!res.status) {
                console.log(err);
                _this.showErrorDialog(" " + res.message + " ");
            }
        });
    };
    EditVMFormComponent.prototype.backToHome = function () {
        this.CS.removeStorage("createvm");
        this.router.navigateByUrl('home/requests');
    };
    EditVMFormComponent.prototype.showDialog = function (msg) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */], {
            data: {
                message: " " + msg
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.CS.router.navigateByUrl('home/requests');
        });
    };
    EditVMFormComponent.prototype.showErrorDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                message: msg
            }
        });
    };
    EditVMFormComponent.prototype.onlyNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], EditVMFormComponent.prototype, "data", void 0);
    EditVMFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1003)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === 'function' && _d) || Object])
    ], EditVMFormComponent);
    return EditVMFormComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=edit-vm-form.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(1004),
            styles: [__webpack_require__(973)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(CS) {
        this.CS = CS;
        /* "#68B6DD","#FED403"*/
        this.colorsOverride = [{
                backgroundColor: [
                    "#ECEAEB",
                    "#3F51B5"
                ],
                hoverBackgroundColor: [
                    "#ECEAEB",
                    "#3F51B5"
                ]
            }];
        this.chartData = [];
        this.count = [1, 2, 3, 4, 5];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CS.getService('/api/v1/requests/inventory').subscribe(function (data) {
            _this.drawChart(data.data);
        }, function (err) {
            if (err.status == 401) {
                _this.CS.showDialog(err);
            }
            else {
                _this.CS.ShowErrorDialog(err);
            }
        }, function () { });
    };
    DashboardComponent.prototype.drawChart = function (data) {
        var labels;
        var dataArr;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var props = data_1[_i];
            var temp = {};
            labels = [], dataArr = [];
            for (var prop in props) {
                switch (prop) {
                    case "name":
                        temp["name"] = props[prop];
                        break;
                    case "available_qty":
                    case "used_qty":
                        /* case "total_qty":*/
                        labels.push(prop);
                        dataArr.push(props[prop]);
                        break;
                }
            }
            this.datasets = [
                {
                    data: dataArr,
                    backgroundColor: [
                        "#f8cb00",
                        "#F86C6B"
                    ],
                    hoverBackgroundColor: [
                        "#F9D533",
                        "#FA9797"
                    ]
                }];
            temp["label"] = labels;
            //temp["data"] = dataArr;
            temp["datasets"] = this.datasets;
            temp["chart"] = "doughnut";
            this.chartData.push(temp);
        }
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(1006),
            styles: [__webpack_require__(975)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DialogComponent = (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(1007),
            styles: [__webpack_require__(976)]
        }),
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === 'function' && _a) || Object, Object])
    ], DialogComponent);
    return DialogComponent;
    var _a;
}());
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(CS, router, dialog) {
        this.CS = CS;
        this.router = router;
        this.dialog = dialog;
        this.height = window.innerHeight;
    }
    HomeComponent.prototype.onResize = function (event) {
        this.height = window.innerHeight;
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.User = this.CS.getUserName();
    };
    HomeComponent.prototype.logout = function () {
        this.CS.onlogout();
    };
    HomeComponent.prototype.showHideMenu = function () {
        return false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(1009),
            styles: [__webpack_require__(978)],
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__(1010),
            styles: [__webpack_require__(979)]
        }), 
        __metadata('design:paramtypes', [])
    ], InventoryComponent);
    return InventoryComponent;
}());
//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(_fb, CS, router) {
        this._fb = _fb;
        this.CS = CS;
        this.router = router;
        this.InVisible = true;
        this.userAgent = this.CS.getBrowserInfo();
        this.loginForm = this._fb.group({
            userId: '',
            password: '',
            userAgent: [this.userAgent, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]]
        });
        //this.CS.isLoggedIn();
    }
    LoginComponent.prototype.onlogin = function () {
        var _this = this;
        this.CS.postService('/api/v1/login', this.loginForm.value).subscribe(function (data) { _this.loginResult(data); }, function (err) {
            console.log(err);
            _this.loginResult(err);
        }, function () { });
    };
    LoginComponent.prototype.loginResult = function (data) {
        if (data.status) {
            var storage = window.sessionStorage;
            storage.setItem('token', data["data"].token);
            storage.setItem('expiry_in', (new Date(data["data"].expiry * 1000).toLocaleString()));
            storage.setItem('username', this.loginForm.value["userId"]);
            this.CS.setUserName(this.loginForm.value["userId"]);
            this.CS.token = data["data"].token;
            this.router.navigateByUrl('/home');
        }
        else {
            this.result = data.msg;
            this.InVisible = false;
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(1011),
            styles: [__webpack_require__(980)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pop_up_dialog_pop_up_dialog_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__request_data__ = __webpack_require__(864);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RequestComponent = (function () {
    function RequestComponent(CS, dialog, DS, element) {
        var _this = this;
        this.CS = CS;
        this.dialog = dialog;
        this.DS = DS;
        this.element = element;
        //data: LocalDataSource;
        this.data = __WEBPACK_IMPORTED_MODULE_6__request_data__["a" /* requestData */].data;
        this.data = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["LocalDataSource"]();
        this.settings = {
            edit: {
                confirmSave: true
            },
            columns: {
                type: {
                    title: 'Type'
                },
                operation: {
                    title: 'Operation'
                },
                name: {
                    title: 'Name'
                },
                description: {
                    title: 'Description'
                },
                status: {
                    title: 'Status'
                },
                createdOn: {
                    title: 'Created On',
                    sortDirection: 'desc'
                },
                Actions: {
                    title: 'Info',
                    type: 'html',
                    valuePrepareFunction: function (value) { return _this.DS.bypassSecurityTrustHtml('<i appInfo class="material-icons pointer" >info</i>'); },
                    filter: false
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: true
            },
            mode: 'external',
        };
    }
    RequestComponent.prototype.getData = function () {
        var _this = this;
        this.CS.getService('/api/v1/request').subscribe(function (data) {
            var DataArray;
            if (data.status) {
                DataArray = data.data;
                _this.data.load(DataArray);
            }
        }, function (err) {
            console.log(err);
            if (err.status == 401) {
                _this.CS.showDialog(err);
            }
            else {
                _this.CS.ShowErrorDialog(err);
            }
        }, function () { });
    };
    RequestComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    RequestComponent.prototype.onEdit = function (event) {
        this.CS.sendData(event.data);
        this.CS.router.navigateByUrl('home/create-vm');
    };
    RequestComponent.prototype.addNewRequest = function () {
        this.CS.router.navigateByUrl('home/create-vm');
    };
    RequestComponent.prototype.onUserRowSelect = function (event) {
        this.showPopup(event.data.parameters);
    };
    RequestComponent.prototype.showPopup = function (data) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */], {
            data: {
                info: data
            }
        });
    };
    RequestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(1014),
            styles: [__webpack_require__(983)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* DomSanitizer */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object])
    ], RequestComponent);
    return RequestComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=request.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_up_dialog_pop_up_dialog_component__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResourcesComponent = (function () {
    function ResourcesComponent(CS, dialog, DS, element) {
        var _this = this;
        this.CS = CS;
        this.dialog = dialog;
        this.DS = DS;
        this.element = element;
        this.invt = {};
        this.input = '<i class="material-icons pointer" (click)="onUserRowSelect()">info</i>';
        this.settings = {
            columns: {
                type: {
                    title: "Type",
                    editable: false
                },
                name: {
                    title: "Name",
                    editable: false
                },
                userId: {
                    title: "User Id",
                    editable: false
                },
                createdAt: {
                    title: "Created At",
                    sortDirection: 'desc'
                },
                status: {
                    title: "Status",
                    editable: false
                },
                Actions: {
                    title: 'Info',
                    type: 'html',
                    valuePrepareFunction: function (value) { return _this.DS.bypassSecurityTrustHtml('<i appInfo class="material-icons pointer" >info</i>'); },
                    filter: false
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            pager: {
                display: true,
                perPage: 10
            }, edit: {
                confirmSave: true
            }
        };
        this.data = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["LocalDataSource"]();
    }
    ResourcesComponent.prototype.getResourceList = function () {
        var _this = this;
        this.CS.getService('/api/v1/requests/resources').subscribe(function (data) {
            _this.data.load(data.data);
        }, function (err) {
            if (err.status == 401) {
                _this.CS.showDialog(err);
            }
            else {
                _this.CS.ShowErrorDialog(err);
            }
        });
    };
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getResourceList();
    };
    ResourcesComponent.prototype.onUserRowSelect = function (event) {
        var data = event.data;
        this.showPopup(data.inventory_items, data.additionalInfo);
    };
    ResourcesComponent.prototype.showPopup = function (data, additionalInfo) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */], {
            data: {
                info: data,
                additionalInfo: additionalInfo
            }
        });
    };
    ResourcesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(1015),
            styles: [__webpack_require__(984)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["e" /* DomSanitizer */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object])
    ], ResourcesComponent);
    return ResourcesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthgaurdService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthgaurdService = (function () {
    function AuthgaurdService(CS, router) {
        this.CS = CS;
        this.router = router;
    }
    AuthgaurdService.prototype.canActivate = function () {
        return this.CS.isLoggedIn();
    };
    AuthgaurdService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthgaurdService);
    return AuthgaurdService;
    var _a, _b;
}());
//# sourceMappingURL=authgaurd.service.js.map

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 653:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 653;


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(866);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1000),
            styles: [__webpack_require__(986)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(869);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_route__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(857);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_home_home_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_VM_create_vm_create_vm_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_about_about_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_common_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_nav_nav_component__ = __webpack_require__(863);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_dashboard_dashboard_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_request_request_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_resources_resources_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_dialog_dialog_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_inventory_inventory_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_construction_construction_component__ = __webpack_require__(862);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_success_dialog_success_dialog_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_pop_up_dialog_pop_up_dialog_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_authgaurd_service__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_error_dialog_error_dialog_component__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_info_directive__ = __webpack_require__(865);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_VM_create_vm_vmoperation_form_component__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__component_VM_create_vm_form_create_vm_form_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_VM_create_vm_form_edit_vm_form_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_VM_create_vm_form_directive__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_VM_create_vm_form_services__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_VM_create_vm_create_vm_component__["a" /* CreateVmComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_request_request_component__["a" /* RequestComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_resources_resources_component__["a" /* ResourcesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__component_dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_construction_construction_component__["a" /* ConstructionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_26__component_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_info_directive__["a" /* InfoDirective */], __WEBPACK_IMPORTED_MODULE_28__component_VM_create_vm_vmoperation_form_component__["a" /* VMOperationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_29__component_VM_create_vm_form_create_vm_form_component__["a" /* CreateVMFormComponent */],
                __WEBPACK_IMPORTED_MODULE_30__component_VM_create_vm_form_edit_vm_form_component__["a" /* EditVMFormComponent */],
                __WEBPACK_IMPORTED_MODULE_31__component_VM_create_vm_form_directive__["a" /* FormDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_route__["a" /* ROUTING */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["Ng2SmartTableModule"]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_20__component_dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_23__component_success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */], __WEBPACK_IMPORTED_MODULE_24__component_pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */], __WEBPACK_IMPORTED_MODULE_26__component_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], __WEBPACK_IMPORTED_MODULE_29__component_VM_create_vm_form_create_vm_form_component__["a" /* CreateVMFormComponent */], __WEBPACK_IMPORTED_MODULE_30__component_VM_create_vm_form_edit_vm_form_component__["a" /* EditVMFormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_25__service_authgaurd_service__["a" /* AuthgaurdService */], __WEBPACK_IMPORTED_MODULE_32__component_VM_create_vm_form_services__["a" /* FormService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_home_home_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_about_about_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_VM_create_vm_create_vm_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_request_request_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_resources_resources_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_inventory_inventory_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_authgaurd_service__ = __webpack_require__(478);
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTING; });










var ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__component_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__service_authgaurd_service__["a" /* AuthgaurdService */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__component_about_about_component__["a" /* AboutComponent */] },
            { path: 'create-vm', component: __WEBPACK_IMPORTED_MODULE_4__component_VM_create_vm_create_vm_component__["a" /* CreateVmComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'requests', component: __WEBPACK_IMPORTED_MODULE_6__component_request_request_component__["a" /* RequestComponent */] },
            { path: 'resource', component: __WEBPACK_IMPORTED_MODULE_7__component_resources_resources_component__["a" /* ResourcesComponent */] },
            { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_8__component_inventory_inventory_component__["a" /* InventoryComponent */] },
            { path: '**', redirectTo: 'home', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__["a" /* LoginComponent */] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var ROUTING = __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(ROUTES);
//export const routComponents=[HomeComponent,AboutComponent,LoginComponent,CreateVmComponent]; 
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMForms; });
var VMForms = (function () {
    function VMForms(component, data) {
        this.component = component;
        this.data = data;
    }
    return VMForms;
}());
//# sourceMappingURL=vm.forms.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_directive__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VMOperationFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VMOperationFormComponent = (function () {
    function VMOperationFormComponent(_componentFactoryResolver, _fb) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._fb = _fb;
        this.currentFormIndex = -1;
        this.operationList = [{ name: 'Create', value: 'CREATE' },
            { name: 'Edit', value: 'UPDATE' }];
        this.vmcreationForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            type: ['VM', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            operation: ['CREATE', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            os: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required],
        });
    }
    VMOperationFormComponent.prototype.ngAfterContentInit = function () {
        this.loadComponent(0);
    };
    VMOperationFormComponent.prototype.ngAfterViewInit = function () {
        // For Now Nothing to do here 
    };
    VMOperationFormComponent.prototype.ngOnDestroy = function () {
        // For Now Nothing to do here 
    };
    VMOperationFormComponent.prototype.loadComponent = function (_index) {
        var index = _index;
        //this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        this.currentFormIndex = index;
        var adItem = this.vmForms[this.currentFormIndex];
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);
        var viewContainerRef = this.formHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = adItem.data;
    };
    VMOperationFormComponent.prototype.onOperationChange = function (event) {
        var selectedOperation = event;
        switch (selectedOperation) {
            case "CREATE":
                this.loadComponent(0);
                break;
            case "UPDATE":
                this.loadComponent(1);
                break;
            default:
                console.log("Throw Error");
                break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], VMOperationFormComponent.prototype, "vmForms", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */]) === 'function' && _a) || Object)
    ], VMOperationFormComponent.prototype, "formHost", void 0);
    VMOperationFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-forms',
            template: __webpack_require__(1001),
            styles: [__webpack_require__(492)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* FormBuilder */]) === 'function' && _c) || Object])
    ], VMOperationFormComponent);
    return VMOperationFormComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=vmoperation-form.component.js.map

/***/ }),

/***/ 862:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConstructionComponent = (function () {
    function ConstructionComponent() {
    }
    ConstructionComponent.prototype.ngOnInit = function () {
    };
    ConstructionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-construction',
            template: __webpack_require__(1005),
            styles: [__webpack_require__(974)]
        }), 
        __metadata('design:paramtypes', [])
    ], ConstructionComponent);
    return ConstructionComponent;
}());
//# sourceMappingURL=construction.component.js.map

/***/ }),

/***/ 863:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(CS) {
        this.CS = CS;
        this.sideNav = true;
        this.links = [
            { name: 'Home', path: '/home', icon: 'home' },
            { name: 'Requests', path: 'requests', icon: 'screen_share' },
            { name: 'Resource', path: 'resource', icon: /*'desktop_windows'*/ 'important_devices' },
            { name: 'About Us', path: 'about', icon: 'group' },
            { name: 'Contact Us', path: 'contact', icon: 'local_phone' }
        ];
        this.shown = true;
    }
    NavComponent.prototype.submenu = function (evt) {
        this.shown = !this.shown;
    };
    NavComponent.prototype.openList = function () {
        this.showNav = !this.showNav;
    };
    NavComponent.prototype.onResize = function (sidenav) {
        if (window.innerWidth == 840) {
            sidenav.close();
        }
    };
    NavComponent.prototype.ngOnInit = function () {
        this.User = this.CS.getUserName();
    };
    NavComponent.prototype.logout = function () {
        this.CS.onlogout();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "sidenav", void 0);
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(1012),
            styles: [__webpack_require__(981)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
/** {
        name: 'VM', path: "create-vm", submenu: [
          { path: "create-vm", name: "Create" },
          { path: "Monitor", name: "Monitor" },
          { path: "list", name: "List" }
        ]
      },*/
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestData; });
var requestData = {
    "status": true,
    "data": [
        {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        }, {
            "_id": "58dcaa5f6e764d0ac43bdd4c",
            "resourceId": "58dcaa5f6e764d0ac43bdd52",
            "jobId": "58dcaa5f6e764d0ac43bdd5c",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd51"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd50"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4f"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa5f6e764d0ac43bdd4e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa5f6e764d0ac43bdd4d"
                }
            ],
            "createdOn": "2017-03-30T06:49:03.842Z"
        },
        {
            "_id": "58dcaa7a6e764d0ac43bdd77",
            "resourceId": "58dcaa7a6e764d0ac43bdd7d",
            "jobId": "58dcaa7a6e764d0ac43bdd87",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM001",
                    "type": "STRING",
                    "_id": "58dcaa7a6e764d0ac43bdd7c"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dcaa7a6e764d0ac43bdd7b"
                },
                {
                    "name": "memory",
                    "value": "1024",
                    "type": "NUMBER",
                    "_id": "58dcaa7a6e764d0ac43bdd7a"
                },
                {
                    "name": "storage",
                    "value": "30",
                    "type": "NUMBER",
                    "_id": "58dcaa7a6e764d0ac43bdd79"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dcaa7a6e764d0ac43bdd78"
                }
            ],
            "createdOn": "2017-03-30T06:49:30.242Z"
        },
        {
            "_id": "58dce31cf8b2a8201803172a",
            "resourceId": "58dce31cf8b2a82018031730",
            "jobId": "58dce31cf8b2a8201803173a",
            "name": "NeeleshVM001",
            "type": "VM",
            "operation": "UPDATE",
            "description": "Edit Operation",
            "requestedBy": "admin1",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vm_Id",
                    "value": "111",
                    "type": "NUMBER",
                    "_id": "58dce31cf8b2a8201803172f"
                },
                {
                    "name": "vm_node",
                    "value": "pve",
                    "type": "STRING",
                    "_id": "58dce31cf8b2a8201803172e"
                },
                {
                    "name": "cores",
                    "value": "2",
                    "type": "NUMBER",
                    "_id": "58dce31cf8b2a8201803172d"
                },
                {
                    "name": "memory",
                    "value": "512",
                    "type": "NUMBER",
                    "_id": "58dce31cf8b2a8201803172c"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58dce31cf8b2a8201803172b"
                }
            ],
            "createdOn": "2017-03-30T10:51:08.321Z"
        },
        {
            "_id": "58dd05a455112423308fa978",
            "resourceId": "58dd05a455112423308fa97e",
            "jobId": "58dd05a455112423308fa988",
            "name": "Neelesh",
            "type": "VM",
            "operation": "CREATE",
            "description": "vm 0003",
            "requestedBy": "admin",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "vm0003",
                    "type": "STRING",
                    "_id": "58dd05a455112423308fa97d"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58dd05a455112423308fa97c"
                },
                {
                    "name": "memory",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58dd05a455112423308fa97b"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58dd05a455112423308fa97a"
                },
                {
                    "name": "os",
                    "value": "8250.0WIN8_X64_SERVER.ISO",
                    "type": "STRING",
                    "_id": "58dd05a455112423308fa979"
                }
            ],
            "createdOn": "2017-03-30T13:18:28.542Z"
        },
        {
            "_id": "58dd06b255112423308fa9a4",
            "resourceId": "58dd06b255112423308fa9aa",
            "jobId": "58dd06b255112423308fa9b4",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM333",
                    "type": "STRING",
                    "_id": "58dd06b255112423308fa9a9"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58dd06b255112423308fa9a8"
                },
                {
                    "name": "memory",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58dd06b255112423308fa9a7"
                },
                {
                    "name": "storage",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58dd06b255112423308fa9a6"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58dd06b255112423308fa9a5"
                }
            ],
            "createdOn": "2017-03-30T13:22:58.928Z"
        },
        {
            "_id": "58ddec5849cab51a14a2c451",
            "resourceId": "58ddec5849cab51a14a2c457",
            "jobId": "58ddec5849cab51a14a2c461",
            "name": "Neelesh1",
            "type": "VM",
            "operation": "CREATE",
            "description": "Neelesh 1 Desc",
            "requestedBy": "admin",
            "status": "FAILED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "Neelesh1",
                    "type": "STRING",
                    "_id": "58ddec5849cab51a14a2c456"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddec5849cab51a14a2c455"
                },
                {
                    "name": "memory",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58ddec5849cab51a14a2c454"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58ddec5849cab51a14a2c453"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58ddec5849cab51a14a2c452"
                }
            ],
            "createdOn": "2017-03-31T05:42:48.104Z"
        },
        {
            "_id": "58ddf8e549cab51a14a2c47c",
            "resourceId": "58ddf8e549cab51a14a2c482",
            "jobId": "58ddf8e649cab51a14a2c48c",
            "name": "Neelesh2",
            "type": "VM",
            "operation": "CREATE",
            "description": "Neelesh 2 VM ",
            "requestedBy": "admin",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "Neelesh2",
                    "type": "STRING",
                    "_id": "58ddf8e549cab51a14a2c481"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddf8e549cab51a14a2c480"
                },
                {
                    "name": "memory",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58ddf8e549cab51a14a2c47f"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58ddf8e549cab51a14a2c47e"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58ddf8e549cab51a14a2c47d"
                }
            ],
            "createdOn": "2017-03-31T06:36:21.975Z"
        },
        {
            "_id": "58ddfa6a1266f413580faad5",
            "resourceId": "58ddfa6a1266f413580faadb",
            "jobId": "58ddfa6b1266f413580faae5",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM123",
                    "type": "STRING",
                    "_id": "58ddfa6a1266f413580faada"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfa6a1266f413580faad9"
                },
                {
                    "name": "memory",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfa6a1266f413580faad8"
                },
                {
                    "name": "storage",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfa6a1266f413580faad7"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58ddfa6a1266f413580faad6"
                }
            ],
            "createdOn": "2017-03-31T06:42:50.920Z"
        },
        {
            "_id": "58ddfb2e1266f413580fab00",
            "resourceId": "58ddfb2e1266f413580fab06",
            "jobId": "58ddfb2e1266f413580fab10",
            "name": "New VM Request for DCMF",
            "type": "VM",
            "operation": "CREATE",
            "description": "This VM will be created throught Datacenter Management Wrokflow",
            "requestedBy": "admin1",
            "status": "SAVED",
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "VM123",
                    "type": "STRING",
                    "_id": "58ddfb2e1266f413580fab05"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfb2e1266f413580fab04"
                },
                {
                    "name": "memory",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfb2e1266f413580fab03"
                },
                {
                    "name": "storage",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfb2e1266f413580fab02"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58ddfb2e1266f413580fab01"
                }
            ],
            "createdOn": "2017-03-31T06:46:06.266Z"
        },
        {
            "_id": "58ddfb9a1266f413580fab2b",
            "resourceId": "58ddfb9a1266f413580fab31",
            "jobId": "58ddfb9a1266f413580fab3b",
            "name": "neelesh 3",
            "type": "VM",
            "operation": "CREATE",
            "description": "neelesh 3",
            "requestedBy": "admin",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vmName",
                    "value": "neelesh3",
                    "type": "STRING",
                    "_id": "58ddfb9a1266f413580fab30"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58ddfb9a1266f413580fab2f"
                },
                {
                    "name": "memory",
                    "value": "16",
                    "type": "NUMBER",
                    "_id": "58ddfb9a1266f413580fab2e"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58ddfb9a1266f413580fab2d"
                },
                {
                    "name": "os",
                    "value": "ubuntu-14.04.1-server-amd64.iso",
                    "type": "STRING",
                    "_id": "58ddfb9a1266f413580fab2c"
                }
            ],
            "createdOn": "2017-03-31T06:47:54.063Z"
        },
        {
            "_id": "58de0d35376b75290cbaee86",
            "resourceId": "58de0d35376b75290cbaee8c",
            "jobId": "58de0d35376b75290cbaee96",
            "name": "neelesh 3",
            "type": "VM",
            "operation": "UPDATE",
            "description": "neelesh 3",
            "requestedBy": "admin",
            "status": "SUCCEEDED", "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vm_Id",
                    "value": "113",
                    "type": "NUMBER",
                    "_id": "58de0d35376b75290cbaee8b"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58de0d35376b75290cbaee8a"
                },
                {
                    "name": "memory",
                    "value": "32",
                    "type": "NUMBER",
                    "_id": "58de0d35376b75290cbaee89"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58de0d35376b75290cbaee88"
                },
                {
                    "name": "vm_node",
                    "value": "pve",
                    "type": "STRING",
                    "_id": "58de0d35376b75290cbaee87"
                }
            ],
            "createdOn": "2017-03-31T08:03:01.675Z"
        },
        {
            "_id": "58de0e60573be60384b1a047",
            "resourceId": "58de0e60573be60384b1a04d",
            "jobId": "58de0e60573be60384b1a057",
            "name": "neelesh 3",
            "type": "VM",
            "operation": "UPDATE",
            "description": "neelesh 3",
            "requestedBy": "admin",
            "status": "SUCCEEDED",
            "info": '<i (click)="onUserRowSelect(row) class="material-icons pointer"  >info</i>',
            "__v": 0,
            "parameters": [
                {
                    "name": "vm_Id",
                    "value": "113",
                    "type": "NUMBER",
                    "_id": "58de0e60573be60384b1a04c"
                },
                {
                    "name": "cores",
                    "value": "1",
                    "type": "NUMBER",
                    "_id": "58de0e60573be60384b1a04b"
                },
                {
                    "name": "memory",
                    "value": "32",
                    "type": "NUMBER",
                    "_id": "58de0e60573be60384b1a04a"
                },
                {
                    "name": "storage",
                    "value": "10",
                    "type": "NUMBER",
                    "_id": "58de0e60573be60384b1a049"
                },
                {
                    "name": "vm_node",
                    "value": "pve",
                    "type": "STRING",
                    "_id": "58de0e60573be60384b1a048"
                }
            ],
            "createdOn": "2017-03-31T08:08:00.644Z"
        }
    ]
};
//# sourceMappingURL=request-data.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoDirective = (function () {
    function InfoDirective(el, render) {
        this.el = el;
        this.render = render;
        render.listen(el.nativeElement, 'click', function (event) {
            // Do something with 'event'
            console.log(event);
            return window.confirm('Are you sure you want to do this?');
        });
    }
    InfoDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appInfo]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], InfoDirective);
    return InfoDirective;
    var _a, _b;
}());
//# sourceMappingURL=info.directive.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "md-card {\n  float: left;\n  margin: 5px auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "md-sidenav-container {\n  padding: 10px 0px 30px;\n  height: 100%;\n  width: 100%; }\n\nmd-sidenav {\n  padding: 0px; }\n\nmd-card {\n  margin: 5px; }\n\n.header {\n  height: 64px; }\n\n.rest-content {\n  height: calc(100% - 64px); }\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.spacing {\n  margin: 0px 10px 0px 0px; }\n\n.after-bar:after {\n  content: \"|\";\n  display: inline-block;\n  padding: 0 10px; }\n\nrouter-outlet {\n  width: 100%; }\n\n@media (max-width: 767px) {\n  .header-title {\n    font-size: 17px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "md-card {\n  margin-top: 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".mat-sidenav-focus-trap {\n  height: 100%; }\n\n.mat-sidenav-focus-trap > .cdk-focus-trap-content {\n  box-sizing: border-box;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\ndiv {\n  display: block; }\n\nnav ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\nli {\n  display: list-item;\n  text-align: -webkit-match-parent;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  margin: 0;\n  padding: 0;\n  border-color: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.54); }\n\nh6 {\n  display: block;\n  font-size: 1.17em;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  font-weight: bold; }\n\nnav h6, material-icons {\n  border: none;\n  font-size: 1.17em;\n  letter-spacing: 1px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.32);\n  color: #fff; }\n\nnav ul li > a, span {\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 47px;\n  text-decoration: none;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  padding: 0 16px;\n  position: relative; }\n\nnav ul li > a:hover {\n  background: #fafafa;\n  color: primary; }\n\na {\n  text-decoration: none;\n  color: #000; }\n\n.active {\n  border-left: 5px solid #f00; }\n\n.for-mobile {\n  display: none; }\n\n.list-icons {\n  vertical-align: middle;\n  padding: 0 5px 5px 0; }\n\n@media (max-width: 767px) {\n  .for-mobile {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "ng2-smart-table {\n  min-width: 350px; }\n\ntable {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".example-margin {\n  margin: 0 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "router-outlet{\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 493,
	"./af.js": 493,
	"./ar": 500,
	"./ar-dz": 494,
	"./ar-dz.js": 494,
	"./ar-kw": 495,
	"./ar-kw.js": 495,
	"./ar-ly": 496,
	"./ar-ly.js": 496,
	"./ar-ma": 497,
	"./ar-ma.js": 497,
	"./ar-sa": 498,
	"./ar-sa.js": 498,
	"./ar-tn": 499,
	"./ar-tn.js": 499,
	"./ar.js": 500,
	"./az": 501,
	"./az.js": 501,
	"./be": 502,
	"./be.js": 502,
	"./bg": 503,
	"./bg.js": 503,
	"./bn": 504,
	"./bn.js": 504,
	"./bo": 505,
	"./bo.js": 505,
	"./br": 506,
	"./br.js": 506,
	"./bs": 507,
	"./bs.js": 507,
	"./ca": 508,
	"./ca.js": 508,
	"./cs": 509,
	"./cs.js": 509,
	"./cv": 510,
	"./cv.js": 510,
	"./cy": 511,
	"./cy.js": 511,
	"./da": 512,
	"./da.js": 512,
	"./de": 515,
	"./de-at": 513,
	"./de-at.js": 513,
	"./de-ch": 514,
	"./de-ch.js": 514,
	"./de.js": 515,
	"./dv": 516,
	"./dv.js": 516,
	"./el": 517,
	"./el.js": 517,
	"./en-au": 518,
	"./en-au.js": 518,
	"./en-ca": 519,
	"./en-ca.js": 519,
	"./en-gb": 520,
	"./en-gb.js": 520,
	"./en-ie": 521,
	"./en-ie.js": 521,
	"./en-nz": 522,
	"./en-nz.js": 522,
	"./eo": 523,
	"./eo.js": 523,
	"./es": 525,
	"./es-do": 524,
	"./es-do.js": 524,
	"./es.js": 525,
	"./et": 526,
	"./et.js": 526,
	"./eu": 527,
	"./eu.js": 527,
	"./fa": 528,
	"./fa.js": 528,
	"./fi": 529,
	"./fi.js": 529,
	"./fo": 530,
	"./fo.js": 530,
	"./fr": 533,
	"./fr-ca": 531,
	"./fr-ca.js": 531,
	"./fr-ch": 532,
	"./fr-ch.js": 532,
	"./fr.js": 533,
	"./fy": 534,
	"./fy.js": 534,
	"./gd": 535,
	"./gd.js": 535,
	"./gl": 536,
	"./gl.js": 536,
	"./gom-latn": 537,
	"./gom-latn.js": 537,
	"./he": 538,
	"./he.js": 538,
	"./hi": 539,
	"./hi.js": 539,
	"./hr": 540,
	"./hr.js": 540,
	"./hu": 541,
	"./hu.js": 541,
	"./hy-am": 542,
	"./hy-am.js": 542,
	"./id": 543,
	"./id.js": 543,
	"./is": 544,
	"./is.js": 544,
	"./it": 545,
	"./it.js": 545,
	"./ja": 546,
	"./ja.js": 546,
	"./jv": 547,
	"./jv.js": 547,
	"./ka": 548,
	"./ka.js": 548,
	"./kk": 549,
	"./kk.js": 549,
	"./km": 550,
	"./km.js": 550,
	"./kn": 551,
	"./kn.js": 551,
	"./ko": 552,
	"./ko.js": 552,
	"./ky": 553,
	"./ky.js": 553,
	"./lb": 554,
	"./lb.js": 554,
	"./lo": 555,
	"./lo.js": 555,
	"./lt": 556,
	"./lt.js": 556,
	"./lv": 557,
	"./lv.js": 557,
	"./me": 558,
	"./me.js": 558,
	"./mi": 559,
	"./mi.js": 559,
	"./mk": 560,
	"./mk.js": 560,
	"./ml": 561,
	"./ml.js": 561,
	"./mr": 562,
	"./mr.js": 562,
	"./ms": 564,
	"./ms-my": 563,
	"./ms-my.js": 563,
	"./ms.js": 564,
	"./my": 565,
	"./my.js": 565,
	"./nb": 566,
	"./nb.js": 566,
	"./ne": 567,
	"./ne.js": 567,
	"./nl": 569,
	"./nl-be": 568,
	"./nl-be.js": 568,
	"./nl.js": 569,
	"./nn": 570,
	"./nn.js": 570,
	"./pa-in": 571,
	"./pa-in.js": 571,
	"./pl": 572,
	"./pl.js": 572,
	"./pt": 574,
	"./pt-br": 573,
	"./pt-br.js": 573,
	"./pt.js": 574,
	"./ro": 575,
	"./ro.js": 575,
	"./ru": 576,
	"./ru.js": 576,
	"./sd": 577,
	"./sd.js": 577,
	"./se": 578,
	"./se.js": 578,
	"./si": 579,
	"./si.js": 579,
	"./sk": 580,
	"./sk.js": 580,
	"./sl": 581,
	"./sl.js": 581,
	"./sq": 582,
	"./sq.js": 582,
	"./sr": 584,
	"./sr-cyrl": 583,
	"./sr-cyrl.js": 583,
	"./sr.js": 584,
	"./ss": 585,
	"./ss.js": 585,
	"./sv": 586,
	"./sv.js": 586,
	"./sw": 587,
	"./sw.js": 587,
	"./ta": 588,
	"./ta.js": 588,
	"./te": 589,
	"./te.js": 589,
	"./tet": 590,
	"./tet.js": 590,
	"./th": 591,
	"./th.js": 591,
	"./tl-ph": 592,
	"./tl-ph.js": 592,
	"./tlh": 593,
	"./tlh.js": 593,
	"./tr": 594,
	"./tr.js": 594,
	"./tzl": 595,
	"./tzl.js": 595,
	"./tzm": 597,
	"./tzm-latn": 596,
	"./tzm-latn.js": 596,
	"./tzm.js": 597,
	"./uk": 598,
	"./uk.js": 598,
	"./ur": 599,
	"./ur.js": 599,
	"./uz": 601,
	"./uz-latn": 600,
	"./uz-latn.js": 600,
	"./uz.js": 601,
	"./vi": 602,
	"./vi.js": 602,
	"./x-pseudo": 603,
	"./x-pseudo.js": 603,
	"./yo": 604,
	"./yo.js": 604,
	"./zh-cn": 605,
	"./zh-cn.js": 605,
	"./zh-hk": 606,
	"./zh-hk.js": 606,
	"./zh-tw": 607,
	"./zh-tw.js": 607
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 990;


/***/ })

},[1269]);
//# sourceMappingURL=main.bundle.js.map
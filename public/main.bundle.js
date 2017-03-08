webpackJsonp([0,4],{

/***/ 1018:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(438);


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(48);
//import { DataTransferService } from './service/data-transfer.service';
var common_service_1 = __webpack_require__(93);
var AppComponent = (function () {
    // @ViewChild(CreateVMComponent) VMC:CreateVMComponent;
    function AppComponent(router, /*private DT: DataTransferService,*/ CS) {
        var _this = this;
        this.router = router;
        this.CS = CS;
        this.showNav = true;
        this.open = false;
        /*this.DT.changeEmitted$.subscribe(text => {
            this.InVisible = text.visible;
        });*/
        this.router.events.subscribe(function (data) {
            _this.UserName = window.sessionStorage.getItem('username') || "User";
            var visibleFlag = _this.CS.recievData() || false;
            (visibleFlag !== false) ? _this.InVisible = visibleFlag.visible : _this.InVisible = visibleFlag;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.InVisible = false;
    };
    AppComponent.prototype.toggleClass = function () {
        this.showNav = !this.showNav;
    };
    AppComponent.prototype.onlogout = function () {
        var _this = this;
        this.CS.deleteService('/api/v1/login').subscribe(function (data) {
            if (data.status) {
                console.log(data);
                var storage = window.sessionStorage;
                storage.setItem('token', '');
                storage.setItem('expiry_in', '');
                storage.setItem('username', '');
                _this.router.navigateByUrl('/login');
            }
        }, function (err) { console.log(err); }, function () { });
    };
    AppComponent.prototype.onCancel = function () {
        //this.VMC.redirectToHome()
        this.open = false; // for create VM component
        this.router.navigateByUrl('/');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(744),
            styles: [__webpack_require__(738)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/app.component.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(236);
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    AuthService.prototype.authenticateNow = function (usercreds) {
        var _this = this;
        var headers = new http_1.Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        this.http.post('http://localhost:4200/authenticate', creds, { headers: headers }).subscribe(function (data) {
            if (data.json().success) {
                window.localStorage.setItem('auth_key', data.json().token);
                _this.isAuthenticated = true;
            }
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/service/auth.service.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 437;


/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(575);
var platform_browser_dynamic_1 = __webpack_require__(530);
var core_1 = __webpack_require__(1);
var environment_1 = __webpack_require__(574);
var _1 = __webpack_require__(572);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=D:/Datacenter/src/src/src/main.js.map

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = __webpack_require__(120);
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(75);
var http_1 = __webpack_require__(236);
var clarity_angular_1 = __webpack_require__(576);
var app_component_1 = __webpack_require__(174);
var app_routing_1 = __webpack_require__(561);
var forms_2 = __webpack_require__(75);
var auth_service_1 = __webpack_require__(368);
var common_service_1 = __webpack_require__(93);
//import {DataTransferService} from './service/data-transfer.service'; 
var ng2_pagination_1 = __webpack_require__(732);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_1.routComponents
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule, forms_2.ReactiveFormsModule,
                http_1.HttpModule, ng2_pagination_1.Ng2PaginationModule,
                clarity_angular_1.ClarityModule.forRoot(),
                app_routing_1.ROUTING
            ],
            providers: [auth_service_1.AuthService, common_service_1.CommonService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/app.module.js.map

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var router_1 = __webpack_require__(48);
var about_component_1 = __webpack_require__(565);
var home_component_1 = __webpack_require__(567);
var createVM_component_1 = __webpack_require__(563);
var login_component_1 = __webpack_require__(568);
var forgotpw_component_1 = __webpack_require__(566);
var Notfound_component_1 = __webpack_require__(570);
var signup_component_1 = __webpack_require__(569);
var underConstruction_component_1 = __webpack_require__(571);
var monitor_component_1 = __webpack_require__(564);
exports.ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'createVM', component: createVM_component_1.CreateVMComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'monitor', component: monitor_component_1.MonitorComponent },
    { path: 'login/forgotpw', component: forgotpw_component_1.ForgotPasswordComponent },
    { path: 'login/signup', component: signup_component_1.SignupComponent },
    { path: '**', component: Notfound_component_1.PageNotFound, pathMatch: 'full' }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
exports.routComponents = [about_component_1.AboutComponent, home_component_1.HomeComponent, createVM_component_1.CreateVMComponent, login_component_1.LoginComponent, forgotpw_component_1.ForgotPasswordComponent, Notfound_component_1.PageNotFound, signup_component_1.SignupComponent, underConstruction_component_1.UnderConstruction, monitor_component_1.MonitorComponent];
//# sourceMappingURL=D:/Datacenter/src/src/src/app/app.routing.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(48);
var AuthManager = (function () {
    function AuthManager(router) {
        this.router = router;
    }
    AuthManager.prototype.CanActivate = function (next, state) {
        if (window.localStorage.getItem('auth_key'))
            return true;
        console.log('You must be logged in');
        this.router.navigate(['/login']);
        return false;
    };
    AuthManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AuthManager);
    return AuthManager;
    var _a;
}());
exports.AuthManager = AuthManager;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/authmanager.js.map

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(75);
var router_1 = __webpack_require__(48);
//import { DataTransferService } from '../../../service/data-transfer.service';
var common_service_1 = __webpack_require__(93);
var app_component_1 = __webpack_require__(174);
var CreateVMComponent = (function () {
    function CreateVMComponent(_fb, router /*, private DT: DataTransferService*/, CS, AC) {
        this._fb = _fb;
        this.router = router;
        this.CS = CS;
        this.AC = AC;
        this.cancelFlag = true;
        this.osList = [{ name: 'Ubuntu 8', version: 'ubuntu-8.04-desktop-amd64.iso' },
            { name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' },
            { name: 'CentOS 7', version: 'CentOS-7-x86_64-Minimal-1611.iso' },
            { name: 'Windows Server 64bit', version: '8250.0WIN8_X64_SERVER.ISO' }];
        this.vmcreationForm = this._fb.group({
            Name: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
            type: ['VM', forms_1.Validators.required],
            operation: ['CREATE', [forms_1.Validators.required]],
            vmName: ['', forms_1.Validators.required],
            OS: ['', forms_1.Validators.required],
            diskSize: ['', forms_1.Validators.required],
            cpuCore: ['1', forms_1.Validators.required],
            Memory: ['', forms_1.Validators.required],
        });
    }
    CreateVMComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.vmcreationForm);
        var model = this.vmcreationForm.value;
        /* this.formdata = {
             "name": model.Name,
             "description": model.description,
             "type": model.type,
             "operation": model.operation,
             "parameters": [
                 {
                     "name": "vmName",
                     "value": model.vmName,
                     "type": "STRING"
                 },
                 {
                     "name": "cores",
                     "value": model.cpuCore,
                     "type": "NUMBER"
                 },
                 {
                     "name": "memory",
                     "value": model.Memory,
                     "type": "NUMBER"
                 },
                 {
                     "name": "storage",
                     "value": model.diskSize,
                     "type": "NUMBER"
                 },
                 {
                     "name": "os",
                     "value": model.OS,
                     "type": "STRING"
                 }
 
             ]
         }*/
        this.formdata = { name: model.Name, description: model.description, type: model.type, operation: model.operation, parameters: [{ name: "vmName", value: model.vmName, type: "STRING" }, { name: "cores", value: model.cpuCore, type: "NUMBER" }, { name: "memory", value: model.Memory, type: "NUMBER" }, { name: "storage", value: model.diskSize, type: "NUMBER" }, { name: "os", value: model.OS, type: "STRING" }] };
        console.log(this.formdata);
        this.CS.postService('/api/v1/request', this.formdata).subscribe(function (data) {
            var str = new String(data.message);
            _this.Res = data;
            if (_this.Res.status) {
                _this.vmcreationForm.reset();
            }
            else if (str.indexOf("Failed to authenticate token") > -1) {
                //this.AC.onlogout();
                _this.cancelFlag = false;
            }
            else if (!_this.Res.status) {
                _this.cancelFlag = true;
            }
            _this.AC.open = true;
            _this.AC.modelMsg = "Request Saved Successfully...";
            _this.CS.emitChange(_this.cancelFlag);
        }, function (err) {
            console.log(err);
        }, function () { });
    };
    CreateVMComponent.prototype.redirectToHome = function () {
        this.AC.open = false;
        if (this.cancelFlag) {
            if (this.Res.result == "Request saved") {
                this.AC.onCancel();
            }
            else {
                console.log("Error in Form");
            }
        }
        else {
            this.AC.onlogout();
        }
    };
    CreateVMComponent.prototype.ngOnInit = function () {
        /* this.CS.getService('/api/getOS').subscribe(
            data=>{this.osList=data},
            err=>{console.log(err)},
            ()=>{});*/
        //     this.CS.isLoggedIn();
    };
    CreateVMComponent.prototype.ngOnDestroy = function () {
    };
    CreateVMComponent.prototype.onlyNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    CreateVMComponent = __decorate([
        core_1.Component({
            // styleUrls: ['../app/styles.css'],
            template: __webpack_require__(745)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _c) || Object, (typeof (_d = typeof app_component_1.AppComponent !== 'undefined' && app_component_1.AppComponent) === 'function' && _d) || Object])
    ], CreateVMComponent);
    return CreateVMComponent;
    var _a, _b, _c, _d;
}());
exports.CreateVMComponent = CreateVMComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/VM/create/createVM.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var MonitorComponent = (function () {
    function MonitorComponent() {
        /*this.CS.getService('').subscribe(
          data=>{this.MonitorList=data},
          err=>{console.log(err)},
          ()=>{ }
        );*/
    }
    MonitorComponent.prototype.ngOnInit = function () {
    };
    MonitorComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(746),
            styles: [__webpack_require__(739)]
        }), 
        __metadata('design:paramtypes', [])
    ], MonitorComponent);
    return MonitorComponent;
}());
exports.MonitorComponent = MonitorComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/VM/monitor/monitor.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__(1);
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__(740)],
            template: __webpack_require__(747)
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/about/about.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(75);
var router_1 = __webpack_require__(48);
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ForgotPasswordComponent.prototype.onlogin = function (model) {
        //this.forgotPwdfrm.reset();
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotPwdfrm = this.formBuilder.group({
            Email: 'Please Enter UR Email'
        });
    };
    ForgotPasswordComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/');
    };
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            // styleUrls: ['./login.component.scss'],
            template: __webpack_require__(748)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/forgotpw/forgotpw.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var core_1 = __webpack_require__(1);
//import { DataTransferService } from '../../service/data-transfer.service';
var router_1 = __webpack_require__(48);
var common_service_1 = __webpack_require__(93);
var app_component_1 = __webpack_require__(174);
var HomeComponent = (function () {
    function HomeComponent(route, /*private DT: DataTransferService,*/ CS, AC) {
        this.route = route;
        this.CS = CS;
        this.AC = AC;
        this.Requestdata = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.UserCommonObj = this.CS.recievData();
        this.CS.isLoggedIn();
        this.CS.sendData({ visible: false });
        this.onRefresh();
    };
    HomeComponent.prototype.onRefresh = function () {
        var _this = this;
        this.CS.getService('/api/v1/request').subscribe(function (data) {
            var str = new String(data.msg);
            var success = data.success;
            var DataArray;
            var paramArray = {};
            var final = [];
            if (data.status) {
                _this.refresh_time = new Date();
                _this.Requestdata = [];
                DataArray = data.data;
                for (var i = 0; i < DataArray.length; i++) {
                    var props = "parameter_" + i;
                    paramArray[props] = DataArray[i].parameters;
                    var tempObj = {};
                    for (var j = 0; j < paramArray[props].length; j++) {
                        tempObj[paramArray[props][j].name] = paramArray[props][j].value;
                    }
                    tempObj["id"] = i + 1;
                    _this.Requestdata.push(tempObj);
                }
            }
            else if (!status && (str.includes("Failed to authenticate token") || str.includes("no token found")) /*(str.indexOf("Failed to authenticate token")>-1||str.indexOf("no token found"))*/) {
                _this.AC.onlogout();
            }
        }, function (err) { console.log(err); }, function () { });
    };
    HomeComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__(741)],
            template: __webpack_require__(749)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _b) || Object, (typeof (_c = typeof app_component_1.AppComponent !== 'undefined' && app_component_1.AppComponent) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/home/home.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(75);
var router_1 = __webpack_require__(48);
var common_service_1 = __webpack_require__(93);
//import { DataTransferService } from '../../service/data-transfer.service';
__webpack_require__(270);
var LoginComponent = (function () {
    function LoginComponent(_fb, CS, 
        /*private DT: DataTransferService,*/
        router) {
        this._fb = _fb;
        this.CS = CS;
        this.router = router;
        this.userAgent = this.CS.getBrowserInfo();
        this.loginForm = this._fb.group({
            userId: '',
            password: '',
            userAgent: [this.userAgent, [forms_1.Validators.required]]
        });
        this.CS.sendData({ visible: true });
        this.CS.isLoggedIn();
    }
    LoginComponent.prototype.onlogin = function () {
        var _this = this;
        this.CS.postService('/api/v1/login', this.loginForm.value).subscribe(function (data) { _this.loginResult(data); }, function (err) { console.log(err); }, function () { });
    };
    LoginComponent.prototype.loginResult = function (data) {
        if (data.status) {
            var storage = window.sessionStorage;
            storage.setItem('token', data["data"].token);
            storage.setItem('expiry_in', (new Date(data["data"].expiry * 1000).toLocaleString()));
            storage.setItem('username', this.loginForm.value["userId"]);
            this.InVisible = false;
            this.router.navigateByUrl('/home');
        }
        else if (!data.status) {
            this.result = data.msg;
            this.InVisible = true;
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            styles: [__webpack_require__(742)],
            template: __webpack_require__(750)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/login/login.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(75);
var router_1 = __webpack_require__(48);
var signup_model_1 = __webpack_require__(573);
var common_service_1 = __webpack_require__(93);
__webpack_require__(270);
var SignupComponent = (function () {
    function SignupComponent(_fb, router, CS) {
        this._fb = _fb;
        this.router = router;
        this.CS = CS;
    }
    SignupComponent.prototype.onSubmit = function (model) {
        var _this = this;
        this.formdata = new signup_model_1.signupModel(model.username, model.email, model.password);
        this.CS.postService('http://172.17.163.56:3000/signup', this.formdata).subscribe(function (data) { _this.Res = data; }, function (err) { console.log(err); }, function () { });
    };
    SignupComponent.prototype.onCancel = function () {
        this.router.navigateByUrl('/');
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this._fb.group({
            email: ['', [forms_1.Validators.required]],
            username: ['', [forms_1.Validators.required]],
            password: ['', [forms_1.Validators.required]]
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            // styleUrls: ['./login.component.scss'],
            template: __webpack_require__(751)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof common_service_1.CommonService !== 'undefined' && common_service_1.CommonService) === 'function' && _c) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b, _c;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/signup/signup.component.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var PageNotFound = (function () {
    function PageNotFound() {
    }
    PageNotFound = __decorate([
        core_1.Component({
            template: "<h1>404 Page not Found...</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFound);
    return PageNotFound;
}());
exports.PageNotFound = PageNotFound;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/underConstruction/Notfound.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var UnderConstruction = (function () {
    function UnderConstruction() {
    }
    UnderConstruction = __decorate([
        core_1.Component({
            template: "<h1>This Page is under construction</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], UnderConstruction);
    return UnderConstruction;
}());
exports.UnderConstruction = UnderConstruction;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/component/underConstruction/underConstruction.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(174));
__export(__webpack_require__(560));
__export(__webpack_require__(562));
__export(__webpack_require__(368));
//# sourceMappingURL=D:/Datacenter/src/src/src/app/index.js.map

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var signupModel = (function () {
    function signupModel(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    return signupModel;
}());
exports.signupModel = signupModel;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/model/signup.model.js.map

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=D:/Datacenter/src/src/src/environments/environment.js.map

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(590);
__webpack_require__(583);
__webpack_require__(579);
__webpack_require__(585);
__webpack_require__(584);
__webpack_require__(582);
__webpack_require__(581);
__webpack_require__(589);
__webpack_require__(578);
__webpack_require__(577);
__webpack_require__(587);
__webpack_require__(580);
__webpack_require__(588);
__webpack_require__(586);
__webpack_require__(591);
__webpack_require__(1016);
//# sourceMappingURL=D:/Datacenter/src/src/src/polyfills.js.map

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

module.exports = ".clr-icon.clr-clarity-logo {\n  background-image: url(../images/clarity_logo.svg); }\n\n.bars {\n  color: #fafafa;\n  margin-top: 12px; }\n\n.header-actions {\n  /* .logout:before{\r\n    content:\"|\";\r\n    padding-right: 15px;\r\n\r\n  }*/ }\n  .header-actions a {\n    font-size: 16px;\n    font-weight: 400;\n    font-family: Metropolis, \"Avenir Next\", \"Helvetica Neue\", Arial, sans-serif;\n    letter-spacing: .01em;\n    color: #fafafa;\n    line-height: 60px;\n    text-decoration: none;\n    margin-right: 1rem;\n    position: relative; }\n\n.main-container {\n  background: #fff; }\n  .main-container .content-area {\n    overflow-y: inherit; }\n\n.visible, .mobile-tab {\n  display: none; }\n\n@media (max-width: 767px) {\n  .header {\n    display: inherit; }\n    .header .branding {\n      padding: 0 5px; }\n  .desktop {\n    display: none; }\n  .mobile-tab {\n    display: block; } }\n"

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

module.exports = ".refresh {\n  font-size: 22px;\n  float: right;\n  display: block;\n  clear: both;\n  padding-bottom: 10px; }\n  .refresh span {\n    font-size: 12px;\n    padding-left: 5px; }\n\ntr:nth-child(even) {\n  background: #D9E4EA; }\n\ntd, th {\n  text-align: left; }\n"

/***/ }),

/***/ 742:
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  background: none; }\n  .login-wrapper .login {\n    margin: 0 auto; }\n    .login-wrapper .login:after {\n      display: none; }\n    .login-wrapper .login .login-group .btn {\n      margin-top: 20px; }\n"

/***/ }),

/***/ 744:
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\r\n  <clr-header>\r\n    <button class=\"navbar-toggler hidden-md-up bars\" [ngClass]=\"{'visible': InVisible,'clr-nav-level-1':showNav}\" type=\"button\" (click)=\"toggleClass();\">&#9776;</button>\r\n    <div class=\"branding\">\r\n      <a  class=\"nav-link\">\r\n        <span class=\"clr-icon clr-clarity-logo\"></span>\r\n        <span class=\"title desktop\">Datacenter Management Framework</span>\r\n        <span class=\"title mobile-tab\">DCMF</span>\r\n      </a>\r\n    </div>\r\n    <div class=\"header-actions\">\r\n          <a  [routerLink]=\"['/login']\" [ngClass]=\"{'visible': !InVisible}\">Login </a>\r\n          <a  [routerLink]=\"['/home']\" [ngClass]=\"{'visible': InVisible}\" >Welcome {{UserName}} </a>\r\n          <a  [ngClass]=\"{'visible': InVisible}\" class=\"logout\" (click)=\"onlogout()\">Logout</a> \r\n    </div>\r\n  </clr-header>\r\n  \r\n  <div class=\"content-container\">\r\n    <div class=\"content-area\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <nav class=\"sidenav\" [ngClass]=\"{'visible': InVisible,'clr-nav-level-1':showNav}\">\r\n    <section class=\"sidenav-content\">\r\n      <a class=\"nav-link\"  [routerLink]=\"['/home']\" [class.active]=\"router.url==='/home' || router.url==='/'\">Home</a>\r\n      <a class=\"nav-link\"  [routerLink]=\"['/about']\" [class.active]=\"router.url==='/about'\">About</a>\r\n      <section class=\"nav-group collapsible\">\r\n        <input id=\"tab2\" type=\"checkbox\">\r\n        <label for=\"tab2\">VM</label>\r\n        <ul class=\"nav-list\">\r\n            <li><a class=\"nav-link\"  [routerLink]=\"['/createVM']\" [class.active]=\"router.url==='/createVM'\">Create VM</a></li>\r\n            <li><a class=\"nav-link\" routerlinkactive=\"active\"[routerLink]=\"['/monitor']\" [class.active]=\"router.url==='/monitor'\">Monitor</a></li>          \r\n        </ul>\r\n      </section>\r\n    </section>\r\n  </nav>\r\n</div>\r\n</clr-main-container>\r\n\r\n<clr-modal [(clrModalOpen)]=\"open\">\r\n  <h3 class=\"modal-title\">Information </h3>\r\n  <div class=\"modal-body\">\r\n    <p>{{modelMsg}}</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCancel()\">Ok</button>\r\n  </div>\r\n</clr-modal>\r\n\r\n"

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

module.exports = "<h1>VM Creation Form</h1>\r\n<form   class=\"form\" [formGroup]=\"vmcreationForm\" (ngSubmit)=\"onSubmit(vmcreationForm.value)\" [hidden]=\"submitted\">\r\n    <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n            <label for=\"Name\">Name</label>\r\n            <label for=\"Name\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('Name').invalid\r\n                    && (vmcreationForm.get('Name').dirty || vmcreationForm.get('Name').touched)\">\r\n                <input type=\"text\" id=\"Name\"   placeholder=\"Enter  name\" formControlName=\"Name\" required>\r\n                <span class=\"tooltip-content\">\r\n                    Name is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea id=\"description\" rows=\"5\" formControlName=\"description\" required></textarea>\r\n        </div>\r\n        <!--<div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <label for=\"description\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('description').invalid\r\n                    && (vmcreationForm.get('description').dirty || vmcreationForm.get('description').touched)\">\r\n                <textarea id=\"description\"  formControlName=\"description\" rows=\"5\" required ></textarea>\r\n                <span class=\"tooltip-content\">\r\n                    Description is Required.\r\n                </span>\r\n            </label>\r\n        </div> -->\r\n        <div class=\"form-group\">\r\n            <label for=\"type\">Type</label>\r\n            <label for=\"type\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('type').invalid\r\n                    && (vmcreationForm.get('type').dirty || vmcreationForm.get('type').touched)\">\r\n                <input type=\"text\" id=\"type\" formControlName=\"type\" readonly>\r\n                <span class=\"tooltip-content\">\r\n                    Type is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"operation\">Operation</label>\r\n            <label for=\"operation\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('operation').invalid\r\n                    && (vmcreationForm.get('operation').dirty || vmcreationForm.get('operation').touched)\">\r\n                <input type=\"text\" id=\"operation\" formControlName=\"operation\" readonly>\r\n                <span class=\"tooltip-content\">\r\n                    Operation is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"vmName\">VM Name</label>\r\n            <label for=\"vmName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('vmName').invalid\r\n                    && (vmcreationForm.get('vmName').dirty || vmcreationForm.get('vmName').touched)\">\r\n                <input type=\"text\" id=\"vmName\"   placeholder=\"Enter VM name\" formControlName=\"vmName\" required>\r\n                <span class=\"tooltip-content\">\r\n                    VM Name is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"OS\">Operating System</label>\r\n            <label for=\"OS\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('OS').invalid\r\n                    && (vmcreationForm.get('OS').dirty || vmcreationForm.get('OS').touched)\">\r\n               \r\n                <div class=\"select form-control\">\r\n                    <select id=\"exampleSelect1\" value=\"osList[0]\" formControlName=\"OS\" >\r\n                        <option *ngFor=\"let os of osList\" value=\"{{os.version}}\">{{os.name}}</option>\r\n                    </select>\r\n                </div>\r\n                \r\n                <span class=\"tooltip-content\">\r\n                    Operating System Name is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"diskSize\">Disk Size (GB) </label>\r\n            <label for=\"diskSize\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('diskSize').invalid\r\n                    && (vmcreationForm.get('diskSize').dirty || vmcreationForm.get('diskSize').touched)\">\r\n                <input type=\"text\" id=\"diskSize\"  placeholder=\"Enter Disk Size in GBs\" formControlName=\"diskSize\" (keypress)=\"onlyNumberKey($event)\"  required>\r\n                <span class=\"tooltip-content\">\r\n                    Disk Size is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"cpuCore\">CPU Core</label>\r\n            <label for=\"cpuCore\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('cpuCore').invalid\r\n                    && (vmcreationForm.get('cpuCore').dirty || vmcreationForm.get('cpuCore').touched)\">\r\n              \r\n           \r\n            <div class=\"select\">\r\n                <select id=\"cpuCore\" formControlName=\"cpuCore\">\r\n                    <option>1</option>\r\n                    <option>2</option>                    \r\n                </select>\r\n            </div>\r\n       \r\n                <span class=\"tooltip-content\">\r\n                    CPU Core is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Memory\">Memory (MB) </label>\r\n            <label for=\"Memory\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\" [class.invalid]=\"vmcreationForm.get('Memory').invalid\r\n                    && (vmcreationForm.get('Memory').dirty || vmcreationForm.get('Memory').touched)\">\r\n                <input type=\"text\" id=\"Memory\"  placeholder=\"Enter Memory \" formControlName=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n                <span class=\"tooltip-content\">\r\n                    Memory is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"hidden\" id=\"type\" value=\"CREATE\" formControlName=\"type\" />\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"redirectToHome()\">Cancel</button>\r\n    </section>\r\n</form>"

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

module.exports = "<clr-stack-view>\r\n    <clr-stack-header>Monitor VM</clr-stack-header>\r\n\r\n    <clr-stack-block [clrSbExpanded]=\"true\">\r\n        <clr-stack-label>Name - Name</clr-stack-label>\r\n        <clr-stack-content>VM ID - ID</clr-stack-content>\r\n         <clr-stack-block>\r\n            <clr-stack-label>Disk Usage</clr-stack-label>\r\n            <clr-stack-content>Sub-content 2</clr-stack-content>\r\n        </clr-stack-block>\r\n         <clr-stack-block>\r\n            <clr-stack-label>Memory Usage</clr-stack-label>\r\n            <clr-stack-content>Sub-content 2</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>CPU Usage</clr-stack-label>\r\n            <clr-stack-content>Sub-content 2</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Up Time</clr-stack-label>\r\n            <clr-stack-content>Sub-content 2</clr-stack-content>\r\n        </clr-stack-block>\r\n    </clr-stack-block>\r\n\r\n    <clr-stack-block >\r\n        <clr-stack-label>Label 2</clr-stack-label>\r\n        <clr-stack-content>Content 2</clr-stack-content>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Sub-label 3</clr-stack-label>\r\n            <clr-stack-content>Sub-content 3</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Sub-label 4</clr-stack-label>\r\n            <clr-stack-content>Sub-content 4</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Sub-label 5</clr-stack-label>\r\n            <clr-stack-content>Sub-content 5</clr-stack-content>\r\n        </clr-stack-block>\r\n    </clr-stack-block>\r\n\r\n    <clr-stack-block>\r\n        <clr-stack-label>Label 3</clr-stack-label>\r\n        <clr-stack-content>Content 3</clr-stack-content>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Sub-label 6</clr-stack-label>\r\n            <clr-stack-content>Sub-content 6</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Sub-label 7</clr-stack-label>\r\n            <clr-stack-content>Sub-content 7</clr-stack-content>\r\n        </clr-stack-block>\r\n    </clr-stack-block>\r\n"

/***/ }),

/***/ 747:
/***/ (function(module, exports) {

module.exports = "<!--\r\n  ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\r\n  ~ This software is released under MIT license.\r\n  ~ The full license information can be found in LICENSE in the root directory of this project.\r\n  -->\r\n<!--<p>This is a page to help demonstrate routing.</p>\r\n<button class=\"btn btn-primary\" (click)=\"open = true\">Show modal</button>\r\n<clr-modal [(clrModalOpen)]=\"open\">\r\n  <h3 class=\"modal-title\">I have a nice title</h3>\r\n  <div class=\"modal-body\">\r\n    <p>But not much to say...</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline\" (click)=\"open = false\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"open = false\">Ok</button>\r\n  </div>\r\n</clr-modal>-->\r\n\r\n<p>This is the framework used for creating and managing VMs. Its a workflow based framework.</p>"

/***/ }),

/***/ 748:
/***/ (function(module, exports) {

module.exports = "<div class=\"forgotpw\">\r\n    <p>Enter your email address to get the link for password reset</p>\r\n    <form class=\"login\" [formGroup]=\"forgotPwdfrm\" (ngSubmit)=\"onlogin(forgotPwdfrm.value)\">\r\n      <label> Email </label> \r\n    <input type=\"email\" formControlName=\"Email\" id=\"email\" />\r\n    <div class=\"button\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Confirm</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n    </div>\r\n    </form>    \r\n</div>\r\n\r\n    \r\n    \r\n"

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<!--\r\n  ~ Copyright (c) 2016 VMware, Inc. All Rights Reserved.\r\n  ~ This software is released under MIT license.\r\n  ~ The full license information can be found in LICENSE in the root directory of this project.\r\n  -->\r\n\r\n<!--<clr-stack-view>\r\n    <clr-stack-header>List of Requests</clr-stack-header>\r\n    <clr-stack-block *ngFor=\"let re of Requestdata;let i = index\">\r\n        <clr-stack-label>Request ID - {{re.id}}</clr-stack-label>\r\n        <clr-stack-label>Request Type - {{re.type}}</clr-stack-label>\r\n        <clr-stack-label>Request Status - {{re.status}}</clr-stack-label>\r\n        <clr-stack-block>\r\n            <clr-stack-label>Memory</clr-stack-label>\r\n            <clr-stack-content>{{re.data[0].Memory}}</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>cpuCore</clr-stack-label>\r\n            <clr-stack-content>{{re.data[0].cpuCore}}</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>diskSize</clr-stack-label>\r\n            <clr-stack-content>{{re.data[0].diskSize}}</clr-stack-content>\r\n        </clr-stack-block>\r\n        <clr-stack-block>\r\n            <clr-stack-label>vmName</clr-stack-label>\r\n            <clr-stack-content>{{re.data[0].vmName}}</clr-stack-content>\r\n        </clr-stack-block>\r\n    </clr-stack-block>\r\n</clr-stack-view> -->\r\n<h1> List of Requests</h1> \r\n<pagination-controls (pageChange)=\"p = $event\" *ngIf=\"count>10\"></pagination-controls>\r\n<div class=\"refresh\">\r\n    <button (click)=\"onRefresh()\"> &#x21bb;</button><span>{{refresh_time | date:\"medium\"}}</span></div>\r\n<table class=\"table table-responsive\">\r\n    <thead>\r\n        <tr>\r\n            <th>ID</th>\r\n            <th>vmName</th>           \r\n            <th>Memory</th>\r\n            <th>cpuCore</th>\r\n            <th>diskSize</th>\r\n            <th>OS</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let re of Requestdata | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n            <td>{{re.id}}</td>\r\n            <td>{{re.vmName}}</td>          \r\n            <td>{{re.memory}}</td>\r\n            <td>{{re.cores}}</td>\r\n            <td>{{re.storage}}</td>\r\n            <td>{{re.os}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"count==0\">\r\n            <td colspan=\"7\">No data found</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\r\n    \r\n    <form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onlogin(loginForm.value)\">\r\n        <label class=\"title\">\r\n            Company Name<span class=\"trademark\">&#8482;</span>\r\n            Product Name&#174;\r\n        </label>\r\n        <div class=\"login-group\">\r\n            <!--<div class=\"auth-source select\">\r\n                <select id=\"login-auth-source-1\" formControlName=\"UserType\">\r\n                    <option>Local Users</option>\r\n                    <option>Administrator</option>\r\n                </select>\r\n            </div>-->\r\n                <input class=\"username\" type=\"text\" id=\"login_username\" placeholder=\"Username\" formControlName=\"userId\" required/>\r\n                <input class=\"password\" type=\"password\" id=\"login_password\" placeholder=\"Password\" formControlName=\"password\"  required/>\r\n                <input type=\"hidden\" id=\"userAgent\" formControlName=\"userAgent\"/>\r\n  \r\n            <div class=\"checkbox\">\r\n                <input type=\"checkbox\" id=\"rememberme\">\r\n                <label for=\"rememberme\">\r\n                    Remember me\r\n                </label>\r\n            </div>\r\n            <div  [ngClass]=\"{'visible': !InVisible,error :InVisible,active :InVisible}\">\r\n                {{result}} \r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">LOG IN</button>\r\n            <a [routerLink]=\"['signup']\" class=\"signup\">Sign up for an account</a>\r\n            <a [routerLink]=\"['forgotpw']\" class=\"signup\">Forgot Password?</a>\r\n        </div>\r\n    </form>     \r\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<h1>SignUp Form</h1>\r\n<form class=\"form\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit(signupForm.value)\" [hidden]=\"submitted\">\r\n    <section class=\"form-block\">\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">E-Mail</label>\r\n            <label for=\"email\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\"\r\n            [class.invalid]=\"signupForm.get('email').invalid\r\n                    && (signupForm.get('email').dirty || signupForm.get('email').touched)\">\r\n                <input type=\"email\" id=\"email\"   placeholder=\"Enter email address\" formControlName=\"email\" required>\r\n                <span class=\"tooltip-content\">\r\n                    Email is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">User Name</label>\r\n            <label for=\"username\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\"\r\n            [class.invalid]=\"signupForm.get('username').invalid\r\n                    && (signupForm.get('username').dirty || signupForm.get('username').touched)\">\r\n                <input type=\"text\" id=\"username\" placeholder=\"Enter User name\" formControlName=\"username\" required>\r\n                <span class=\"tooltip-content\">\r\n                    User Name is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <label for=\"password\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-md\"\r\n            [class.invalid]=\"signupForm.get('password').invalid\r\n                    && (signupForm.get('password').dirty || signupForm.get('password').touched)\">\r\n                <input type=\"password\" id=\"password\"  placeholder=\"Enter Password\" formControlName=\"password\" required>\r\n                <span class=\"tooltip-content\">\r\n                    Password is Required.\r\n                </span>\r\n            </label>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" >Create an Account</button>\r\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"onCancel()\">Cancel</button>\r\n    </section>\r\n</form>"

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(236);
var Subject_1 = __webpack_require__(11);
var router_1 = __webpack_require__(48);
__webpack_require__(270);
var CommonService = (function () {
    function CommonService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = "http://localhost:3000";
        // Observable string sources
        this.emitChangeSource = new Subject_1.Subject();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this.navFlag = false;
    }
    CommonService.prototype.postService = function (url, data) {
        if (url.indexOf('login') == -1) {
            var headers = new http_1.Headers();
            headers.append('x-access-token', window.sessionStorage.getItem('token'));
            headers.append('username', window.sessionStorage.getItem('username'));
            headers.append('Content-Type', 'application/json');
            return this.http.post(this.baseUrl + url, data, { headers: headers }).map(function (res) { return res.json(); });
        }
        return this.http.post(this.baseUrl + url, data).map(function (res) { return res.json(); });
    };
    CommonService.prototype.getService = function (url) {
        var headers = new http_1.Headers();
        headers.append('x-access-token', window.sessionStorage.getItem('token'));
        headers.append('username', window.sessionStorage.getItem('username'));
        return this.http.get(this.baseUrl + url, { headers: headers }).map(function (res) { return res.json(); });
    };
    CommonService.prototype.deleteService = function (url) {
        var headers = new http_1.Headers();
        headers.append('x-access-token', window.sessionStorage.getItem('token'));
        headers.append('username', window.sessionStorage.getItem('username'));
        return this.http.delete(this.baseUrl + url, { headers: headers }).map(function (res) { return res.json(); });
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
            this.userToken = window.sessionStorage.getItem('token');
            if (this.tokenExpiryCheck()) {
                this.router.navigateByUrl('/login');
            }
            else {
                if (pathName.indexOf('login') > -1) {
                    this.router.navigateByUrl('/home');
                }
                else {
                    this.router.navigateByUrl(pathName);
                }
            }
        }
    };
    CommonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], CommonService);
    return CommonService;
    var _a, _b;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=D:/Datacenter/src/src/src/app/service/common.service.js.map

/***/ })

},[1018]);
//# sourceMappingURL=main.bundle.map
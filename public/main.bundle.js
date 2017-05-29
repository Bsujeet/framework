webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_services__ = __webpack_require__(104);
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
    return CreateVmComponent;
}());
CreateVmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-vm',
        template: "<div>\n                  <add-forms [vmForms]=\"vmForms\"></add-forms>\n               </div>",
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_services__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__form_services__["a" /* FormService */]) === "function" && _a || Object])
], CreateVmComponent);

var _a;
//# sourceMappingURL=create-vm.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return FormDirective;
}());
FormDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[form-host]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object])
], FormDirective);

var _a;
//# sourceMappingURL=form.directive.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_create_vm_form_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_edit_vm_form_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_delete_vm_form_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vm_forms__ = __webpack_require__(328);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormService = (function () {
    function FormService() {
    }
    FormService.prototype.getForms = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_4__vm_forms__["a" /* VMForms */](__WEBPACK_IMPORTED_MODULE_1__form_create_vm_form_component__["a" /* CreateVMFormComponent */], { name: 'Bombasto', bio: 'Brave as they come' }),
            new __WEBPACK_IMPORTED_MODULE_4__vm_forms__["a" /* VMForms */](__WEBPACK_IMPORTED_MODULE_2__form_edit_vm_form_component__["a" /* EditVMFormComponent */], null),
            new __WEBPACK_IMPORTED_MODULE_4__vm_forms__["a" /* VMForms */](__WEBPACK_IMPORTED_MODULE_3__form_delete_vm_form_component__["a" /* DeleteVMFormComponent */], null)
        ];
    };
    return FormService;
}());
FormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FormService);

//# sourceMappingURL=form.services.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__(39);
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
        /* this.osList = [{ name: 'Ubuntu 8', version: 'ubuntu-8.04-desktop-amd64.iso' },
         { name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' },
         { name: 'CentOS 7', version: 'CentOS-7-x86_64-Minimal-1611.iso' },
         { name: 'Windows Server 64bit', version: '8250.0WIN8_X64_SERVER.ISO' }];*/
        this.osList = [{ name: 'Ubuntu 14', version: 'ubuntu-14.04.1-server-amd64.iso' }];
        this.vmcreationForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            type: ['VM', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            operation: ['CREATE', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            // operation: ['CLONE', [Validators.required]],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            os: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
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
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                message: msg
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(msg);
            if (msg.trim() == 'Invalid token! Please login again.') {
                _this.CS.onlogout();
            }
        });
    };
    CreateVMFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = this.vmcreationForm.value;
        this.formdata = { name: model.Name, description: model.description, type: model.type, operation: model.operation, parameters: [{ name: "vm_name", value: model.vmName, type: "STRING" }, { name: "cores", value: model.cores, type: "NUMBER" }, { name: "memory", value: model.memory, type: "NUMBER" }, { name: "storage", value: model.storage, type: "NUMBER" }, { name: "os", value: model.os, type: "STRING" }] };
        // this.CS.postService('/api/v1/request', this.formdata).subscribe(
        this.CS.postService('/api/v1/request/clonevm', this.formdata).subscribe(function (data) {
            var str = new String(data.message);
            _this.Res = data;
            if (_this.Res.status) {
                _this.showDialog(_this.Res.data.status == "SAVED" ? "Request has been successfully submitted." : _this.Res.data.status);
                // this.vmcreationForm.reset();
                _this.CS.removeStorage("createvm");
            }
        }, function (err) {
            var res = JSON.parse(err._body);
            if (!res.status) {
                console.log(err);
                _this.showErrorDialog(" " + res.message + " ");
            }
        });
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
    return CreateVMFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CreateVMFormComponent.prototype, "data", void 0);
CreateVMFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(484)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], CreateVMFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create-vm-form.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteVMFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeleteVMFormComponent = (function () {
    function DeleteVMFormComponent(_fb, router, CS, dialog) {
        this._fb = _fb;
        this.router = router;
        this.CS = CS;
        this.dialog = dialog;
        //let val2Control = this._fb.control({value:'', disabled: true}, Validators.required);
        this.vmdeleteForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            /*storage: ['', Validators.compose([Validators.required, this.checkNaN])],
            cores: ['', Validators.required],
            memory: ['', Validators.required],*/
            storage: this._fb.control({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, this.checkNaN])),
            cores: this._fb.control({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required),
            memory: this._fb.control({ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required)
            /*storage_inc: ['', Validators.required]*/
        });
        this.storageErr = this.vmdeleteForm.controls["storage"];
    }
    DeleteVMFormComponent.prototype.checkNaN = function (fieldControl) {
        return !isNaN(fieldControl.value) ? null : { notA: true };
    };
    DeleteVMFormComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DeleteVMFormComponent.prototype.getData = function () {
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
    DeleteVMFormComponent.prototype.onVMChange = function (event) {
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
                _this.finalObject = finalObj;
                _this.vmdeleteForm.setValue(finalObj);
            }
        }, function (err) { console.log(err); }, function () { });
    };
    DeleteVMFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var model = this.vmdeleteForm.value;
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
            operation: 'DELETE',
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
                    //value: model.cores,
                    value: this.finalObject.cores,
                    type: "NUMBER"
                },
                {
                    name: "memory",
                    // value: model.memory,
                    value: this.finalObject.memory,
                    type: "NUMBER"
                }, {
                    name: "storage",
                    //value: model.storage/*diskSize*/,
                    value: this.finalObject.storage,
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
                _this.showDialog(_this.Res.data.status == "SAVED" ? "Request has been successfully submitted." : _this.Res.data.status);
                // this.vmdeleteForm.reset();
            }
        }, function (err) {
            var res = JSON.parse(err._body);
            if (!res.status) {
                console.log(err);
                _this.showErrorDialog(" " + res.message + " ");
            }
        });
    };
    DeleteVMFormComponent.prototype.backToHome = function () {
        this.CS.removeStorage("createvm");
        this.router.navigateByUrl('home/requests');
    };
    DeleteVMFormComponent.prototype.showDialog = function (msg) {
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
    DeleteVMFormComponent.prototype.showErrorDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], {
            data: {
                message: msg
            }
        });
    };
    DeleteVMFormComponent.prototype.onlyNumberKey = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    return DeleteVMFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DeleteVMFormComponent.prototype, "data", void 0);
DeleteVMFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(485)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], DeleteVMFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=delete-vm-form.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__success_dialog_success_dialog_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error_dialog_error_dialog_component__ = __webpack_require__(39);
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
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, this.checkNaN])],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
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
                _this.showDialog(_this.Res.data.status == "SAVED" ? "Request has been successfully submitted." : _this.Res.data.status);
                // this.vmeditForm.reset();
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
    return EditVMFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditVMFormComponent.prototype, "data", void 0);
EditVMFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(486)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_common_service__["a" /* CommonService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], EditVMFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-vm-form.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(487),
        styles: [__webpack_require__(454)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
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
    /* "#68B6DD","#FED403"*/
    function DashboardComponent(CS) {
        this.CS = CS;
        this.graphColor = {
            'Cpu': { 'color': ['#337f59', '#39cca4'], 'hover': ['#3a9673', '#41e2b7'] },
            'Memory': { 'color': ['#b7473e', '#f05b4f'], 'hover': ['#b25f59', '#f98f86'] },
            'Storage': { 'color': ['#6d3287', '#cb87d7'], 'hover': ['#986fab', '#e2bce9'] }
        };
        this.options = {
            cutoutPercentage: 75
        };
        this.chartData = [];
        this.count = [1, 2, 3, 4, 5];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"].pluginService.register({
            beforeDraw: function (chart) {
                var percent = ((chart.config.data.datasets["0"].data["0"]) / ((chart.config.data.datasets["0"].data["0"]) + (chart.config.data.datasets["0"].data["1"]))) * 100;
                var percent2 = percent.toFixed(0);
                var width = chart.chart.width, height = chart.chart.height, ctx = chart.chart.ctx;
                ctx.restore();
                var fontSize = (height / 114).toFixed(2);
                ctx.font = fontSize + "em sans-serif";
                ctx.textBaseline = 'middle';
                var text = percent2 + '%', textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / (1.8);
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        });
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
                        temp["name"] = this.humanize(props[prop]);
                        break;
                    case "available_qty":
                    case "used_qty":
                        /* case "total_qty":*/
                        labels.push(this.humanize(prop));
                        dataArr.push(props[prop]);
                        break;
                }
            }
            var colorsOverride = [{
                    backgroundColor: [
                        this.graphColor[temp["name"]].color[0],
                        this.graphColor[temp["name"]].color[1]
                    ],
                    hoverBackgroundColor: [
                        this.graphColor[temp["name"]].hover[0],
                        this.graphColor[temp["name"]].hover[1]
                    ]
                }];
            this.datasets = [
                {
                    data: dataArr
                }
            ];
            this.Captalize(labels);
            temp["label"] = labels;
            //temp["data"] = dataArr;
            temp["datasets"] = this.datasets;
            temp["chart"] = "doughnut";
            temp["color"] = colorsOverride;
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
    DashboardComponent.prototype.Captalize = function (str) {
        //  this.Captalize(prop.replace(/[-!$%^&*()_+|~=`{}\[\]: ";'<>?,.\/]/,' '))
        // let str1=str.split(' ');
        console.log(str);
        // return str.charAt(0).toUpperCase() + str.slice(1);
    };
    ;
    DashboardComponent.prototype.humanize = function (str) {
        var frags = str.split('_');
        for (var i = 0; i < frags.length; i++) {
            frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
        }
        return frags.join(' ');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(489),
        styles: [__webpack_require__(456)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(17);
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
    return DialogComponent;
}());
DialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dialog',
        template: __webpack_require__(490),
        styles: [__webpack_require__(457)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], DialogComponent);

var _a;
//# sourceMappingURL=dialog.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_common_service__ = __webpack_require__(18);
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
        this.notify = 0;
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
    HomeComponent.prototype.onNotify = function (event) {
        // debugger;
        console.log(event);
        this.notify = parseInt(event) || 0;
    };
    HomeComponent.prototype.clearNotification = function () {
        this.notify = 0;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(492),
        styles: [__webpack_require__(459)],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return InventoryComponent;
}());
InventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__(493),
        styles: [__webpack_require__(460)]
    }),
    __metadata("design:paramtypes", [])
], InventoryComponent);

//# sourceMappingURL=inventory.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(258);
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
            userId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            userAgent: [this.userAgent, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]]
        });
    }
    LoginComponent.prototype.onlogin = function () {
        var _this = this;
        this.CS.postService('/api/v1/login', this.loginForm.value).subscribe(function (data) { _this.loginResult(data); }, function (err) {
            console.log(err);
            _this.loginResult(err);
        }, function () { });
    };
    LoginComponent.prototype.loginResult = function (data) {
        if (data.status == true) {
            var storage = window.sessionStorage;
            storage.setItem('token', data["data"].token);
            storage.setItem('expiry_in', (new Date(data["data"].expiry * 1000).toLocaleString()));
            storage.setItem('username', this.loginForm.value["userId"]);
            this.CS.setUserName(this.loginForm.value["userId"]);
            this.CS.token = data["data"].token;
            this.router.navigateByUrl('/home');
        }
        else if (data.status == false) {
            this.result = data.msg;
            this.InVisible = false;
        }
        else if (!isNaN(data.status)) {
            console.log("Server Not Responding...");
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(494),
        styles: [__webpack_require__(461)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(17);
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
    return PopUpDialogComponent;
}());
PopUpDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pop-up-dialog',
        template: __webpack_require__(497),
        styles: [__webpack_require__(464)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], PopUpDialogComponent);

var _a;
//# sourceMappingURL=pop-up-dialog.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_requestfilter_pipe__ = __webpack_require__(119);
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
    function RequestComponent(CS, dialog, DS, element, pipe) {
        this.CS = CS;
        this.dialog = dialog;
        this.DS = DS;
        this.element = element;
        this.pipe = pipe;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { prop: 'operation' },
            { prop: 'description' },
            { prop: 'requestedBy' },
            { prop: 'status' },
            { prop: 'type' }
        ];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
    }
    RequestComponent.prototype.getData = function () {
        var _this = this;
        this.CS.getService('/api/v1/request').subscribe(function (data) {
            var DataArray;
            if (data.status) {
                _this.data = data.data;
                // Default selection of row
                // this.selected = [this.data[0]];
                _this.page(_this.offset, _this.limit);
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
    RequestComponent.prototype.page = function (offset, limit) {
        this.count = this.data.length;
        var start = offset * limit;
        var end = start + limit;
        var rows = this.rows.slice();
        //Add Units in storage and Memory
        for (var i = start; i < end - 1; i++) {
            rows[i] = this.data[i];
            if (rows[i]) {
                for (var j = 0; j < rows[i].parameters.length; j++) {
                    if (rows[i].parameters[j].name === 'memory') {
                        rows[i].parameters[j].value = rows[i].parameters[j].value + ' MB';
                    }
                    if (rows[i].parameters[j].name === 'storage') {
                        rows[i].parameters[j].value = rows[i].parameters[j].value + ' GB';
                    }
                }
            }
        }
        this.rows = rows;
    };
    RequestComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    RequestComponent.prototype.onPage = function (event) {
        this.page(event.offset, event.limit);
    };
    RequestComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    RequestComponent.prototype.onDetailToggle = function (event) {
        //console.log('Detail Toggled', event);
    };
    RequestComponent.prototype.addNewRequest = function () {
        this.CS.router.navigateByUrl('/home/create-vm');
    };
    RequestComponent.prototype.getRowHeight = function (row) { return row.height; };
    return RequestComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
    __metadata("design:type", Object)
], RequestComponent.prototype, "table", void 0);
RequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-request',
        template: __webpack_require__(498),
        styles: [__webpack_require__(465)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_requestfilter_pipe__["a" /* RequestfilterPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_requestfilter_pipe__["a" /* RequestfilterPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_requestfilter_pipe__["a" /* RequestfilterPipe */]) === "function" && _e || Object])
], RequestComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=request.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pop_up_dialog_pop_up_dialog_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_resourcefilter_pipe__ = __webpack_require__(120);
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


//import { LocalDataSource } from 'ng2-smart-table';




var ResourcesComponent = (function () {
    //data: LocalDataSource;
    /*invt = {};
    input: string = '<i class="material-icons pointer" (click)="onUserRowSelect()">info</i>';
    settings = {
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
          valuePrepareFunction: (value) => { return this.DS.bypassSecurityTrustHtml('<i appInfo class="material-icons pointer" >info</i>') },
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
    data:any;*/
    function ResourcesComponent(CS, dialog, DS, element, pipe) {
        this.CS = CS;
        this.dialog = dialog;
        this.DS = DS;
        this.element = element;
        this.pipe = pipe;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { prop: 'operation' },
            { prop: 'description' },
            { prop: 'requestedBy' },
            { prop: 'status' },
            { prop: 'type' }
        ];
        this.count = 0;
        this.offset = 0;
        this.limit = 10;
        // this.data = new LocalDataSource();
    }
    ResourcesComponent.prototype.getResourceList = function () {
        var _this = this;
        this.CS.getService('/api/v1/requests/resources').subscribe(function (data) {
            //  this.data.load(data.data);
            _this.data = data.data;
            // Default selection of row
            // this.selected = [this.data[0]];
            _this.page(_this.offset, _this.limit);
        }, function (err) {
            if (err.status == 401) {
                _this.CS.showDialog(err);
            }
            else {
                _this.CS.ShowErrorDialog(err);
            }
        });
    };
    ResourcesComponent.prototype.page = function (offset, limit) {
        this.count = this.data.length;
        var start = offset * limit;
        var end = start + limit;
        var rows = this.rows.slice();
        for (var i = start; i < end; i++) {
            rows[i] = this.data[i];
            var obj = [];
            for (var key in rows[i]) {
                if (rows[i].hasOwnProperty(key)) {
                    var element = rows[i][key];
                    if (key === 'inventory_items') {
                        for (var key in rows[i]['inventory_items']) {
                            if (rows[i]['inventory_items'][key].name === 'cpu') {
                                var obj1 = {};
                                obj1['name'] = this.pipe.transform([rows[i]['inventory_items'][key].name]);
                                obj1['qty'] = rows[i]['inventory_items'][key].qty;
                                obj.push(obj1);
                            }
                            else {
                                var obj1 = {};
                                obj1['name'] = this.pipe.transform([rows[i]['inventory_items'][key].name]);
                                obj1['qty'] = rows[i]['inventory_items'][key].qty + " " + rows[i]['inventory_items'][key].measure;
                                obj.push(obj1);
                            }
                        }
                    }
                    if (key === 'additionalInfo') {
                        for (var key1 in rows[i]['additionalInfo']) {
                            var obj1 = {};
                            obj1['name'] = this.pipe.transform([key1]);
                            obj1['qty'] = rows[i]['additionalInfo'][key1];
                            obj.push(obj1);
                        }
                    }
                }
                rows[i]['parameters'] = obj;
            }
        }
        this.rows = rows;
    };
    ResourcesComponent.prototype.ngOnInit = function () {
        this.getResourceList();
    };
    ResourcesComponent.prototype.onUserRowSelect = function (event) {
        var data = event.data;
        this.showPopup(data.inventory_items, data.additionalInfo);
    };
    ResourcesComponent.prototype.showPopup = function (data, additionalInfo) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */], {
            data: {
                info: data,
                additionalInfo: additionalInfo
            }
        });
    };
    ResourcesComponent.prototype.toggleExpandRow = function (row) {
        this.table.rowDetail.toggleExpandRow(row);
    };
    ResourcesComponent.prototype.onDetailToggle = function (event) {
        //console.log('Detail Toggled', event);
    };
    return ResourcesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTable'),
    __metadata("design:type", Object)
], ResourcesComponent.prototype, "table", void 0);
ResourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resources',
        template: __webpack_require__(499),
        styles: [__webpack_require__(466)],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_resourcefilter_pipe__["a" /* ResourcefilterPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_resourcefilter_pipe__["a" /* ResourcefilterPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_resourcefilter_pipe__["a" /* ResourcefilterPipe */]) === "function" && _e || Object])
], ResourcesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service__ = __webpack_require__(18);
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
    return AuthgaurdService;
}());
AuthgaurdService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service__["a" /* CommonService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthgaurdService);

var _a, _b;
//# sourceMappingURL=authgaurd.service.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(750);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(CS) {
        this.CS = CS;
        // Our localhost address that we set in our server code
        this.url = 'http://localhost:3000';
    }
    SocketService.prototype.sendMessage = function (message) {
        // Make sure the "add-message" is written here because this is referenced in on() in our server
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url, {
                'multiplex': false,
                query: 'token=' +
                    _this.CS.getToken()
            });
            _this.socket.on('notification', function (data) {
                // console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_service__["a" /* CommonService */]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestfilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RequestfilterPipe = (function () {
    function RequestfilterPipe() {
    }
    RequestfilterPipe.prototype.transform = function (value, args) {
        console.log(value);
        switch (value) {
            case 'cores': {
                value = 'Cores';
                break;
            }
            case 'os': {
                value = 'Operating System';
                break;
            }
            case 'memory': {
                value = 'Memory';
                break;
            }
            case 'vm_name': {
                value = 'VM Name';
                break;
            }
            case 'vmName': {
                value = 'VM Name';
                break;
            }
            case 'resourceId': {
                value = 'Resource ID';
                break;
            }
            case 'vm_Id': {
                value = 'VM ID';
                break;
            }
            case 'vm_node': {
                value = 'VM Node';
                break;
            }
            case 'storage': {
                value = 'Storage';
                break;
            }
            default:
                break;
        }
        return value;
    };
    return RequestfilterPipe;
}());
RequestfilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'requestfilter'
    })
], RequestfilterPipe);

//# sourceMappingURL=requestfilter.pipe.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcefilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourcefilterPipe = (function () {
    function ResourcefilterPipe() {
    }
    ResourcefilterPipe.prototype.transform = function (value, args) {
        switch (value[0]) {
            case 'cpu': {
                value = 'CPU';
                break;
            }
            case 'memory': {
                value = 'Memory';
                break;
            }
            case 'loginPassword': {
                value = 'Login Password';
                break;
            }
            case 'loginUserName': {
                value = 'Login UserName';
                break;
            }
            case 'vmIP': {
                value = 'IP';
                break;
            }
            case 'vmNode': {
                value = 'Node';
                break;
            }
            case 'vmId': {
                value = 'ID';
                break;
            }
            case 'storage': {
                value = 'Storage';
                break;
            }
            default:
                break;
        }
        return value;
    };
    return ResourcefilterPipe;
}());
ResourcefilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'resourcefilter'
    })
], ResourcefilterPipe);

//# sourceMappingURL=resourcefilter.pipe.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_dialog_dialog_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_error_dialog_error_dialog_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(258);
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
    return CommonService;
}());
CommonService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], CommonService);

var _a, _b, _c;
//# sourceMappingURL=common.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 317;


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(334);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(482),
        styles: [__webpack_require__(468)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_chart_js__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_route__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_login_login_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_VM_create_vm_create_vm_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_about_about_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_common_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_nav_nav_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_dashboard_dashboard_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__component_request_request_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_resources_resources_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_dialog_dialog_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_inventory_inventory_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_construction_construction_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__component_success_dialog_success_dialog_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__component_pop_up_dialog_pop_up_dialog_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_authgaurd_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__component_error_dialog_error_dialog_component__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_info_directive__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__component_VM_create_vm_vmoperation_form_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__component_VM_create_vm_form_create_vm_form_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__component_VM_create_vm_form_edit_vm_form_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__component_VM_create_vm_form_delete_vm_form_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__component_VM_create_vm_form_directive__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__component_VM_create_vm_form_services__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__component_notification_notification_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__service_socket_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_resourcefilter_pipe__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_requestfilter_pipe__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { Ng2SmartTableModule } from 'ng2-smart-table';


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__component_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__component_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__component_VM_create_vm_create_vm_component__["a" /* CreateVmComponent */],
            __WEBPACK_IMPORTED_MODULE_16__component_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__component_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_19__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__component_request_request_component__["a" /* RequestComponent */],
            __WEBPACK_IMPORTED_MODULE_21__component_resources_resources_component__["a" /* ResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__component_dialog_dialog_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_23__component_inventory_inventory_component__["a" /* InventoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24__component_construction_construction_component__["a" /* ConstructionComponent */],
            __WEBPACK_IMPORTED_MODULE_25__component_success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__component_pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__component_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_29__shared_info_directive__["a" /* InfoDirective */], __WEBPACK_IMPORTED_MODULE_30__component_VM_create_vm_vmoperation_form_component__["a" /* VMOperationFormComponent */],
            __WEBPACK_IMPORTED_MODULE_31__component_VM_create_vm_form_create_vm_form_component__["a" /* CreateVMFormComponent */],
            __WEBPACK_IMPORTED_MODULE_32__component_VM_create_vm_form_edit_vm_form_component__["a" /* EditVMFormComponent */],
            __WEBPACK_IMPORTED_MODULE_33__component_VM_create_vm_form_delete_vm_form_component__["a" /* DeleteVMFormComponent */],
            __WEBPACK_IMPORTED_MODULE_34__component_VM_create_vm_form_directive__["a" /* FormDirective */],
            __WEBPACK_IMPORTED_MODULE_36__component_notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_38__shared_resourcefilter_pipe__["a" /* ResourcefilterPipe */],
            __WEBPACK_IMPORTED_MODULE_39__shared_requestfilter_pipe__["a" /* RequestfilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_route__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_datatable__["NgxDatatableModule"]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_22__component_dialog_dialog_component__["a" /* DialogComponent */], __WEBPACK_IMPORTED_MODULE_25__component_success_dialog_success_dialog_component__["a" /* SuccessDialogComponent */], __WEBPACK_IMPORTED_MODULE_26__component_pop_up_dialog_pop_up_dialog_component__["a" /* PopUpDialogComponent */], __WEBPACK_IMPORTED_MODULE_28__component_error_dialog_error_dialog_component__["a" /* ErrorDialogComponent */], __WEBPACK_IMPORTED_MODULE_31__component_VM_create_vm_form_create_vm_form_component__["a" /* CreateVMFormComponent */], __WEBPACK_IMPORTED_MODULE_32__component_VM_create_vm_form_edit_vm_form_component__["a" /* EditVMFormComponent */], __WEBPACK_IMPORTED_MODULE_33__component_VM_create_vm_form_delete_vm_form_component__["a" /* DeleteVMFormComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__service_common_service__["a" /* CommonService */], __WEBPACK_IMPORTED_MODULE_27__service_authgaurd_service__["a" /* AuthgaurdService */], __WEBPACK_IMPORTED_MODULE_35__component_VM_create_vm_form_services__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_37__service_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_home_home_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_about_about_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_login_login_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_VM_create_vm_create_vm_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_dashboard_dashboard_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_request_request_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_resources_resources_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_inventory_inventory_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_authgaurd_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* unused harmony export ROUTING */










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
var ROUTING = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(ROUTES);
//export const routComponents=[HomeComponent,AboutComponent,LoginComponent,CreateVmComponent]; 
//# sourceMappingURL=app.route.js.map

/***/ }),

/***/ 328:
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

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_directive__ = __webpack_require__(103);
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
            { name: 'Edit', value: 'UPDATE' },
            { name: 'Delete', value: 'DELETE' }];
        this.vmcreationForm = this._fb.group({
            Name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            type: ['VM', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            operation: ['CREATE', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]],
            vmName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            os: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            storage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            cores: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            memory: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
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
            case "DELETE":
                this.loadComponent(2);
                break;
            default:
                console.log("Throw Error");
                break;
        }
    };
    return VMOperationFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], VMOperationFormComponent.prototype, "vmForms", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__form_directive__["a" /* FormDirective */]) === "function" && _a || Object)
], VMOperationFormComponent.prototype, "formHost", void 0);
VMOperationFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-forms',
        template: __webpack_require__(483),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormBuilder */]) === "function" && _c || Object])
], VMOperationFormComponent);

var _a, _b, _c;
//# sourceMappingURL=vmoperation-form.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return ConstructionComponent;
}());
ConstructionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-construction',
        template: __webpack_require__(488),
        styles: [__webpack_require__(455)]
    }),
    __metadata("design:paramtypes", [])
], ConstructionComponent);

//# sourceMappingURL=construction.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_common_service__ = __webpack_require__(18);
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
            { name: 'About Us', path: 'about', icon: 'group' } /*,
            { name: 'Contact Us', path: 'contact', icon:'local_phone' }*/
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
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavComponent.prototype, "sidenav", void 0);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(495),
        styles: [__webpack_require__(462)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_common_service__["a" /* CommonService */]) === "function" && _a || Object])
], NavComponent);

var _a;
/** {
        name: 'VM', path: "create-vm", submenu: [
          { path: "create-vm", name: "Create" },
          { path: "Monitor", name: "Monitor" },
          { path: "list", name: "List" }
        ]
      },*/
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_socket_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = (function () {
    function NotificationComponent(socket) {
        this.socket = socket;
        this.notification = [];
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tempObj = { "dataToSend": { "_id": "58fed1649e5f6e1b9835fe0d", "resourceId": "58fed1649e5f6e1b9835fe15", "jobId": "58fed1649e5f6e1b9835fe1f", "name": "sdg", "type": "VM", "operation": "UPDATE", "description": "sdfg", "requestedBy": "admin", "status": "SUCCEEDED", "__v": 0, "parameters": [{ "name": "vmName", "value": "lkjlh", "type": "STRING", "_id": "58fed1649e5f6e1b9835fe14" }, { "name": "resourceId", "value": "58fde7f79e5f6e1b9835fd74", "type": "STRING", "_id": "58fed1649e5f6e1b9835fe13" }, { "name": "vm_Id", "value": "135", "type": "NUMBER", "_id": "58fed1649e5f6e1b9835fe12" }, { "name": "cores", "value": "1", "type": "NUMBER", "_id": "58fed1649e5f6e1b9835fe11" }, { "name": "memory", "value": "514", "type": "NUMBER", "_id": "58fed1649e5f6e1b9835fe10" }, { "name": "storage", "value": "10", "type": "NUMBER", "_id": "58fed1649e5f6e1b9835fe0f" }, { "name": "vm_node", "value": "pve", "type": "STRING", "_id": "58fed1649e5f6e1b9835fe0e" }], "createdOn": "2017-04-25T04:32:36.383Z" }, };
        this.tt = [{ operation: "UPDATE", status: "SUCCEEDED", type: "VM", vmName: "lkjlh", vm_Id: "135" }, { operation: "CREATE", status: "FAILED", type: "VM", vmName: "lkjlh", vm_Id: "136" }];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var note = JSON.parse(window.sessionStorage.getItem('notification'));
        var finalObj = {}; //_.assign({},{ type: Obj.type, operation: Obj.operation, status: Obj.status },this.findProp(Obj.parameters, ['vmName', 'vm_Id']));  
        if (note != null && note != undefined && note.length > 0) {
            this.notification = note;
            this.notify.emit(this.notification.length);
        }
        this.connection = this.socket.getMessages().subscribe(function (message) {
            try {
                if (message != null && message != " " && message != undefined) {
                    // message = JSON.parse(message); //error on this line while parsing the data send from socket
                    var Obj = message.dataToSendNew;
                    finalObj = __WEBPACK_IMPORTED_MODULE_2_lodash__["assign"]({}, { type: Obj.type, operation: Obj.operation, status: Obj.status, vm_Id: Obj.vm_Id });
                    _this.notification.push(finalObj);
                    _this.notification.reverse();
                    _this.notify.emit(_this.notification.length);
                    window.sessionStorage.setItem('notification', JSON.stringify(_this.notification));
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    };
    NotificationComponent.prototype.findProp = function (Obj, key) {
        try {
            var tempObj = {};
            var _loop_1 = function (i) {
                var temp = __WEBPACK_IMPORTED_MODULE_2_lodash__["find"](Obj, function (o) {
                    return o.name == key[i];
                });
                tempObj[temp['name']] = temp['value'];
            };
            for (var i = 0; i < key.length; i++) {
                _loop_1(i);
            }
            return tempObj;
        }
        catch (err) {
            console.log(err);
        }
    };
    return NotificationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], NotificationComponent.prototype, "notify", void 0);
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__(496),
        styles: [__webpack_require__(463)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], NotificationComponent);

var _a, _b;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return InfoDirective;
}());
InfoDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appInfo]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], InfoDirective);

var _a, _b;
//# sourceMappingURL=info.directive.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(17);
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
    return ErrorDialogComponent;
}());
ErrorDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-dialog',
        template: __webpack_require__(491),
        styles: [__webpack_require__(458)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], ErrorDialogComponent);

var _a;
//# sourceMappingURL=error-dialog.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-card {\n  float: left;\n  margin: 5px auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-sidenav-container {\n  padding: 10px 0px 30px;\n  height: 100%;\n  width: 100%; }\n\nmd-sidenav {\n  padding: 0px; }\n\nmd-card {\n  margin: 5px; }\n\n.header {\n  height: 64px; }\n\n.rest-content {\n  height: calc(100% - 64px); }\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.spacing {\n  margin: 0px 10px 0px 0px; }\n\n.after-bar:after {\n  /* content: \"|\";*/\n  display: inline-block;\n  padding: 0 10px; }\n\nrouter-outlet {\n  width: 100%; }\n\n.dynamic-user, .separator {\n  vertical-align: middle; }\n\n.notification {\n  line-height: 0; }\n\n@media (max-width: 767px) {\n  .header-title {\n    font-size: 17px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "md-card {\n  margin-top: 1.5rem; }\n\n.error {\n  color: #D50000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".mat-sidenav-focus-trap {\n  height: 100%; }\n\n.mat-sidenav-focus-trap > .cdk-focus-trap-content {\n  box-sizing: border-box;\n  height: 100%;\n  overflow-y: auto;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\ndiv {\n  display: block; }\n\nnav ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\nli {\n  display: list-item;\n  text-align: -webkit-match-parent;\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n  margin: 0;\n  padding: 0;\n  border-color: rgba(0, 0, 0, 0.06);\n  color: rgba(0, 0, 0, 0.54); }\n\nh6 {\n  display: block;\n  font-size: 1.17em;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  font-weight: bold; }\n\nnav h6, material-icons {\n  border: none;\n  font-size: 1.17em;\n  letter-spacing: 1px;\n  line-height: 24px;\n  text-transform: uppercase;\n  font-weight: 400;\n  margin: 0;\n  padding: 0 16px;\n  background: rgba(0, 0, 0, 0.32);\n  color: #fff; }\n\nnav ul li > a, span {\n  box-sizing: border-box;\n  display: block;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 47px;\n  text-decoration: none;\n  transition: all .3s;\n  padding: 0 16px;\n  position: relative;\n  border-left: 5px solid #DCE2E2; }\n\nnav ul li > a:hover:not(.active) {\n  background: #fafafa;\n  color: primary;\n  border-left: 5px solid #008000 !important; }\n\nnav ul li > a {\n  text-decoration: none;\n  color: #000; }\n\n.active {\n  border-left: 5px solid #f00 !important;\n  background: #fafafa !important; }\n\n.for-mobile {\n  display: none; }\n\n.list-icons {\n  vertical-align: middle;\n  padding: 0 5px 5px 0; }\n\n@media (max-width: 767px) {\n  .for-mobile {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "div.notification, .notify_container {\n  font-size: 0.865rem;\n  margin: 0px;\n  padding: 0px;\n  /*border-left: 5px solid #F86C6B;*/ }\n\n.notify {\n  height: 50px;\n  margin: 3px auto;\n  position: relative;\n  padding: 0px; }\n\n.red {\n  background: #990000; }\n\n.green {\n  background: #567F6C; }\n\n.notify-icon {\n  height: 100%;\n  /* background: #4CAF50;*/\n  display: inline-block;\n  margin: 0px;\n  padding: 0px; }\n\n.center-icon {\n  font-size: 2rem;\n  display: inline-block;\n  position: relative;\n  top: 20%;\n  left: 19%;\n  color: #f2f2f2; }\n\n.notify_content {\n  display: inline-block;\n  margin: 0px;\n  padding: 0px; }\n\np {\n  color: #f2f2f2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "ng2-smart-table {\n  min-width: 350px; }\n\ntable {\n  border: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".example-margin {\n  margin: 0 10px; }\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.innerContent {\n  width: 91.45%;\n  list-style: none;\n  display: block;\n  box-sizing: content-box;\n  margin: 0px auto; }\n\n.innerContent li {\n  display: inline-block;\n  margin: 5px 0px;\n  text-align: center;\n  padding: 0px 15px;\n  border-left: 1px solid #4383b9; }\n\n.innerContent li:last-child {\n  border-right: 1px solid #4383b9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, ".example-margin {\n  margin: 0 10px; }\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.innerContent {\n  width: 91.45%;\n  list-style: none;\n  display: block;\n  box-sizing: content-box;\n  margin: 0px auto; }\n\n.innerContent li {\n  display: inline-block;\n  /*margin: 1rem;*/\n  margin: 5px 0px;\n  text-align: center;\n  padding: 0px 15px;\n  border-left: 1px solid #4383b9; }\n\n.innerContent li:last-child {\n  border-right: 1px solid #4383b9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "router-outlet {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 141,
	"./af.js": 141,
	"./ar": 148,
	"./ar-dz": 142,
	"./ar-dz.js": 142,
	"./ar-kw": 143,
	"./ar-kw.js": 143,
	"./ar-ly": 144,
	"./ar-ly.js": 144,
	"./ar-ma": 145,
	"./ar-ma.js": 145,
	"./ar-sa": 146,
	"./ar-sa.js": 146,
	"./ar-tn": 147,
	"./ar-tn.js": 147,
	"./ar.js": 148,
	"./az": 149,
	"./az.js": 149,
	"./be": 150,
	"./be.js": 150,
	"./bg": 151,
	"./bg.js": 151,
	"./bn": 152,
	"./bn.js": 152,
	"./bo": 153,
	"./bo.js": 153,
	"./br": 154,
	"./br.js": 154,
	"./bs": 155,
	"./bs.js": 155,
	"./ca": 156,
	"./ca.js": 156,
	"./cs": 157,
	"./cs.js": 157,
	"./cv": 158,
	"./cv.js": 158,
	"./cy": 159,
	"./cy.js": 159,
	"./da": 160,
	"./da.js": 160,
	"./de": 163,
	"./de-at": 161,
	"./de-at.js": 161,
	"./de-ch": 162,
	"./de-ch.js": 162,
	"./de.js": 163,
	"./dv": 164,
	"./dv.js": 164,
	"./el": 165,
	"./el.js": 165,
	"./en-au": 166,
	"./en-au.js": 166,
	"./en-ca": 167,
	"./en-ca.js": 167,
	"./en-gb": 168,
	"./en-gb.js": 168,
	"./en-ie": 169,
	"./en-ie.js": 169,
	"./en-nz": 170,
	"./en-nz.js": 170,
	"./eo": 171,
	"./eo.js": 171,
	"./es": 173,
	"./es-do": 172,
	"./es-do.js": 172,
	"./es.js": 173,
	"./et": 174,
	"./et.js": 174,
	"./eu": 175,
	"./eu.js": 175,
	"./fa": 176,
	"./fa.js": 176,
	"./fi": 177,
	"./fi.js": 177,
	"./fo": 178,
	"./fo.js": 178,
	"./fr": 181,
	"./fr-ca": 179,
	"./fr-ca.js": 179,
	"./fr-ch": 180,
	"./fr-ch.js": 180,
	"./fr.js": 181,
	"./fy": 182,
	"./fy.js": 182,
	"./gd": 183,
	"./gd.js": 183,
	"./gl": 184,
	"./gl.js": 184,
	"./gom-latn": 185,
	"./gom-latn.js": 185,
	"./he": 186,
	"./he.js": 186,
	"./hi": 187,
	"./hi.js": 187,
	"./hr": 188,
	"./hr.js": 188,
	"./hu": 189,
	"./hu.js": 189,
	"./hy-am": 190,
	"./hy-am.js": 190,
	"./id": 191,
	"./id.js": 191,
	"./is": 192,
	"./is.js": 192,
	"./it": 193,
	"./it.js": 193,
	"./ja": 194,
	"./ja.js": 194,
	"./jv": 195,
	"./jv.js": 195,
	"./ka": 196,
	"./ka.js": 196,
	"./kk": 197,
	"./kk.js": 197,
	"./km": 198,
	"./km.js": 198,
	"./kn": 199,
	"./kn.js": 199,
	"./ko": 200,
	"./ko.js": 200,
	"./ky": 201,
	"./ky.js": 201,
	"./lb": 202,
	"./lb.js": 202,
	"./lo": 203,
	"./lo.js": 203,
	"./lt": 204,
	"./lt.js": 204,
	"./lv": 205,
	"./lv.js": 205,
	"./me": 206,
	"./me.js": 206,
	"./mi": 207,
	"./mi.js": 207,
	"./mk": 208,
	"./mk.js": 208,
	"./ml": 209,
	"./ml.js": 209,
	"./mr": 210,
	"./mr.js": 210,
	"./ms": 212,
	"./ms-my": 211,
	"./ms-my.js": 211,
	"./ms.js": 212,
	"./my": 213,
	"./my.js": 213,
	"./nb": 214,
	"./nb.js": 214,
	"./ne": 215,
	"./ne.js": 215,
	"./nl": 217,
	"./nl-be": 216,
	"./nl-be.js": 216,
	"./nl.js": 217,
	"./nn": 218,
	"./nn.js": 218,
	"./pa-in": 219,
	"./pa-in.js": 219,
	"./pl": 220,
	"./pl.js": 220,
	"./pt": 222,
	"./pt-br": 221,
	"./pt-br.js": 221,
	"./pt.js": 222,
	"./ro": 223,
	"./ro.js": 223,
	"./ru": 224,
	"./ru.js": 224,
	"./sd": 225,
	"./sd.js": 225,
	"./se": 226,
	"./se.js": 226,
	"./si": 227,
	"./si.js": 227,
	"./sk": 228,
	"./sk.js": 228,
	"./sl": 229,
	"./sl.js": 229,
	"./sq": 230,
	"./sq.js": 230,
	"./sr": 232,
	"./sr-cyrl": 231,
	"./sr-cyrl.js": 231,
	"./sr.js": 232,
	"./ss": 233,
	"./ss.js": 233,
	"./sv": 234,
	"./sv.js": 234,
	"./sw": 235,
	"./sw.js": 235,
	"./ta": 236,
	"./ta.js": 236,
	"./te": 237,
	"./te.js": 237,
	"./tet": 238,
	"./tet.js": 238,
	"./th": 239,
	"./th.js": 239,
	"./tl-ph": 240,
	"./tl-ph.js": 240,
	"./tlh": 241,
	"./tlh.js": 241,
	"./tr": 242,
	"./tr.js": 242,
	"./tzl": 243,
	"./tzl.js": 243,
	"./tzm": 245,
	"./tzm-latn": 244,
	"./tzm-latn.js": 244,
	"./tzm.js": 245,
	"./uk": 246,
	"./uk.js": 246,
	"./ur": 247,
	"./ur.js": 247,
	"./uz": 249,
	"./uz-latn": 248,
	"./uz-latn.js": 248,
	"./uz.js": 249,
	"./vi": 250,
	"./vi.js": 250,
	"./x-pseudo": 251,
	"./x-pseudo.js": 251,
	"./yo": 252,
	"./yo.js": 252,
	"./zh-cn": 253,
	"./zh-cn.js": 253,
	"./zh-hk": 254,
	"./zh-hk.js": 254,
	"./zh-tw": 255,
	"./zh-tw.js": 255
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
webpackContext.id = 475;


/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"col-sm-10 col-md-8 col-lg-8 offset-sm-1 offset-md-2 offset-lg-2\">\r\n  <md-card-title>\r\n    <h4>VM Operation</h4>\r\n  </md-card-title>\r\n  <md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmcreationForm\" (ngSubmit)=\"onSubmit(vmcreationForm.value)\" [hidden]=\"submitted\">\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Type\" formControlName=\"type\" id=\"type\" readonly>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"Operation\" formControlName=\"operation\" (ngModelChange)=\"onOperationChange($event)\" required class=\"col-12\">\r\n          <md-option *ngFor=\"let operat of operationList\" value=\"{{operat.value}}\">\r\n            {{ operat.name }}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n  <template form-host></template>\r\n</md-card>\r\n"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmcreationForm\" (ngSubmit)=\"onSubmit(vmcreationForm.value)\" [hidden]=\"submitted\">\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Request Title\" formControlName=\"Name\" id=\"Name\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <textarea cols=\"40\" rows=\"5\" mdInput placeholder=\"Description\" formControlName=\"description\" id=\"description\" required></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"VM Name\" formControlName=\"vmName\" id=\"vmName\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"Operating System\" formControlName=\"os\" required class=\"col-12\">\r\n          <md-option *ngFor=\"let os of osList\" value=\"{{os.version}}\">\r\n            {{ os.name }}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Disk Size (GB)\" formControlName=\"storage\" id=\"diskSize\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"CPU Core\" formControlName=\"cores\" id=\"cpuCore\" required class=\"col-12\">\r\n          <md-option value=\"1\">1</md-option>\r\n          <md-option value=\"2\">2</md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Memory (MB)\" formControlName=\"memory\" id=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-card-actions class=\"col-12\">\r\n          <button type=\"submit\" md-raised-button class=\"my-success-btn\" color=\"primary\">Create</button>\r\n          <button type=\"button\" md-raised-button class=\"my-cancel-btn\" (click)=\"backToHome()\">Cancel</button>\r\n        </md-card-actions>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmdeleteForm\" (ngSubmit)=\"onSubmit(vmdeleteForm.value)\" [hidden]=\"submitted\" >\r\n      \r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"VM Name\" formControlName=\"vmName\" (change)=\"onVMChange($event)\" required class=\"col-12\" [(ngModel)]=\"vm\">\r\n          <md-option *ngFor=\"let vm of vmList\" value=\"{{vm.requestId}}\">\r\n            {{ vm.vmName + ' VM ID: ' + vm.vmId}}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Request Title\" formControlName=\"Name\" id=\"Name\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <textarea cols=\"40\" rows=\"5\" mdInput placeholder=\"Description\" formControlName=\"description\" id=\"description\" required></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Disk Size (GB)\" formControlName=\"storage\" id=\"diskSize\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <!--<div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Increase Disk Size (GB)\" formControlName=\"storage_inc\" id=\"diskSizeInc\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>-->\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"CPU Core\" formControlName=\"cores\" id=\"cpuCore\" required class=\"col-12\">\r\n          <md-option value=\"1\">1</md-option>\r\n          <md-option value=\"2\">2</md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Memory (MB)\" formControlName=\"memory\" id=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-card-actions class=\"col-12\">\r\n          <button type=\"submit\" md-raised-button class=\"my-success-btn\" color=\"primary\">Delete</button>\r\n          <button type=\"button\" md-raised-button class=\"my-cancel-btn\" (click)=\"backToHome()\">Cancel</button>\r\n        </md-card-actions>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<md-card-content>\r\n    <form class=\"create-vm-form\" [formGroup]=\"vmeditForm\" (ngSubmit)=\"onSubmit(vmeditForm.value)\" [hidden]=\"submitted\" >\r\n      \r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"VM Name\" formControlName=\"vmName\" (change)=\"onVMChange($event)\" required class=\"col-12\" [(ngModel)]=\"vm\">\r\n          <md-option *ngFor=\"let vm of vmList\" value=\"{{vm.requestId}}\">\r\n            {{ vm.vmName + ' VM ID: ' + vm.vmId}}\r\n          </md-option>\r\n        </md-select>\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Name\" formControlName=\"Name\" id=\"Name\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <textarea cols=\"40\" rows=\"5\" mdInput placeholder=\"Description\" formControlName=\"description\" id=\"description\" required></textarea>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Disk Size (GB)\" formControlName=\"storage\" id=\"diskSize\"  required>          \r\n        </md-input-container>\r\n      </div>\r\n      <!--<div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Increase Disk Size (GB)\" formControlName=\"storage_inc\" id=\"diskSizeInc\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>-->\r\n      <div class=\"form-group\">\r\n        <md-select placeholder=\"CPU Core\" formControlName=\"cores\" id=\"cpuCore\" required class=\"col-12\">\r\n          <md-option value=\"1\">1</md-option>\r\n          <md-option value=\"2\">2</md-option>\r\n        </md-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-input-container class=\"col-12\">\r\n          <input mdInput placeholder=\"Memory (MB)\" formControlName=\"memory\" id=\"Memory\" (keypress)=\"onlyNumberKey($event)\" required>\r\n        </md-input-container>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <md-card-actions class=\"col-12\">\r\n          <button type=\"submit\" md-raised-button class=\"my-success-btn\"  color=\"primary\">Create</button>\r\n          <button type=\"button\" md-raised-button class=\"my-cancel-btn\" (click)=\"backToHome()\">Cancel</button>\r\n        </md-card-actions>\r\n      </div>\r\n    </form>\r\n  </md-card-content>\r\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n  <h3> Challenge</h3>\r\n  <p>For any enterprise the competitive advantage is deeply rooted into its ability to rapidly innovate its products and services and provide ever increasing efficiency for its solutions. To deliver on this enterprises are heavily dependent on the its IT operations.\r\nKey to the above goal is to provide enterprise users a quick and rapid access to IT resources and provide easy to use ways to obtain those IT resources in a very short turn around time.\r\n\r\nThe manual data centers of the past were slow moving operations. Enterprise departments would have lead times of several weeks before the IT teams could design architect and finally deliver the solutions required and requested. This would require entire life cycle for including procurement, physical placement to wiring up to be executed manually for each new service request. Consequently the users/departments or employees would always over-provision the their data centers only to waste most of the resources for future needs just to avoid getting delayed by new requirements and losing competitive edge in the market.</p>\r\n\r\n<p>Another side effect of the massive manual operations is that the process is inherently prone to human errors. The resource tracking, be it software resources or hardware resources would involve large spreadsheets recording the location, owner information. And the only way to trace it back to actual location is by using some kind of stickers or physical labels on the data center floor.</p>\r\n\r\n<p>Inherently lot of this information simply remains un-updated. Errors creep in and many costly resources get lost in the thin air. \r\n\r\nDe-provisioning becomes the most leaky part of the process since tracing and removing the hardware becomes equally costly and time consuming and is not done immediately when needed but rather only when it’s absolutely unavoidable. The manual process of de-provisioning also leaves out complex work-flows of transferring the re-usable software/resource licenses as well as physical hardware causing enterprises to issue new purchases even when there are plenty of idle resources lying around in their data centers \r\n\r\nThe enterprises need a platform where users no longer have to worry about placement, procurement installation or security.</p>\r\n\r\n<p>TBD: Add virtualization and cloud trends and challenges</p>\r\n\r\n<p>The challenge of today’s data centers is to build an infrastructure where all components viz servers, operating systems, security layers (firewalls, identity management), storage and networking are automated and are fully managed by software defined core.</p>\r\n<p>While achieving the goal following design requirements must be met.</p>\r\n<ul>\r\n  <li>Location agnostic: System must let geographically diverse locations be served without any operational impact to the end user. </li>\r\n  <li>Flexibility : The system must support pre-built configurations as well as must allow creation of custom setups and configurations with same ease of use</li>\r\n  <li>Minimal or reduced Total Cost of Operation as well as cost saving : The total cost of operations must be less than the traditional approach. In all unused resources should be easily reused/reclaimed giving further cost reduction.</li>\r\n  <li>Secure : Services provisioned must be have authentication and accounting at all levels. It also must allow users/departments to gain fine grained control over access with same ease of use and rapid provisioning without needing to go back to IT teams or going through a manual process </li>\r\n</ul>\r\n\r\n<h3>Solution</h3>\r\n\r\n<p>To cater to this vast horizontal landscape of automation requirements ITP has created a central solution architecture in which all consumers of IT services will get a single console access to request and track all the required resources in running of a typical enterprise operations</p>\r\n\r\n<h4>Features</h4>\r\n<ul>\r\n  <li>Abstracted Business logic: The key part of the automation core is business logic where all the entities required to carry out the requested operations are abstracted out. The abstractions are modeled and customized to each specific requirements of the end enterprise. All the relationships and flows to provision as well as de-provision a particular resource are stored in a backend database. The module also tightly integrates with Identity Management and Point Security systems allowing fine grained access control and monitoring. Separating out the resource abstraction from implementation of the resource provisioning process and flows gives a unique agility and flexibility. The whole architecture can be seamlessly adapted to vast majority of enterprise datacenter operational and end user requirements.</li>\r\n  <li>High Availability:  The Automation Core stores its entire state as well as the rulebook and abstraction models into a backend high availability database. Enabling the HA and serviceability of the whole automation stack. </li>\r\n  <li>Front Ends: The core API allows a fully reactive and multiple frontends to be implemented. Webapp and mobile frontends are pre designed and can be quickly adapted to variety of end user scenarios.</li>\r\n  <li>Adaption of existing technologies: The datacenters of today already deploy number of IT technologies that give various often overlapping capabilities. The south bound interface of the core is where individual jobs are implemented. This module also follows similar philosophy of abstracting out the individual tasks and implementation of the tasks is then customized and adapted to include capabilities of existing technologies. If a particular capability e.g. complete server/storage provisioning over vRA/vRO already exists a simple wrapper can be implemented to take full advantage.</li>\r\n  <li>Monitoring and Logging: TBD</li>\r\n  <li>Security: TBD </li>\r\n</ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  construction works!\r\n</p>\r\n"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 col-sm-12 col-lg-4 col-xs-12\"  *ngFor=\"let i of chartData\">\r\n        <md-card style='width:100%;'>\r\n          <!--class=\"col-sx-5 col-sm-5 col-md-4 col-lg-4 \"-->\r\n          <md-card-title>\r\n            <h3>{{i.name }}</h3>\r\n          </md-card-title>\r\n          <md-card-content>\r\n            <div style=\"display: block\">\r\n              <canvas baseChart [datasets]=\"i.datasets\" [options]=\"options\" [labels]=\"i.label\" [chartType]=\"i.chart\" [colors]=\"i.color\"\r\n                (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n\r\n            </div>\r\n          </md-card-content>\r\n        </md-card>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = "<p>\r\n   {{data.message}}\r\n</p>\r\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float:right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>"

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<p>\r\n   {{data.message}}\r\n</p>\r\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float:right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\r\n    <md-toolbar color=\"primary\" class=\"col-12\">\r\n        <!-- <md-icon (click)=\"sidenav.toggle()\" class=\"spacing pointer\">menu</md-icon> -->\r\n        <span class=\"header-title\">Datacenter Management Framework</span>\r\n        <span class=\"example-fill-remaining-space\"></span>\r\n        <span class=\"for-desktop after-bar\">Welcome </span>\r\n        <!-- <span class=\"for-desktop pointer\" (click)=\"logout()\">Logout</span>-->\r\n        <span md-icon-button [mdMenuTriggerFor]=\"appMenu\" class=\"for-desktop pointer\" style=\"margin: 0px 10px;\"><span class=\"dynamic-user\">{{\" \"+User}}</span><md-icon class=\"separator\">more_vert</md-icon> </span>\r\n        <span class=\"pointer notification\" (click)=\"end.toggle(); clearNotification();\"><i class=\"material-icons\" *ngIf=\"notify==0\">notifications_none</i><i class=\"material-icons\" *ngIf=\"notify>0\">notifications</i></span>\r\n    </md-toolbar>\r\n    <md-menu #appMenu=\"mdMenu\" [overlapTrigger]=\"false\">\r\n        <button md-menu-item> My Profile </button>\r\n        <button md-menu-item  (click)=\"logout()\"> Logout </button>\r\n    </md-menu>\r\n</div>\r\n<div class=\"row rest-content\" >\r\n    <md-sidenav-container>\r\n        <md-sidenav #sidenav mode=\"side\" opened=\"true\" class=\"col-sx-3 col-sm-3 col-md-3 col-lg-3 col-xl-2 border-left-0\">\r\n            <!--class=\"col-sx-3 col-sm-3 col-md-3 col-lg-2 border-left-0\"-->\r\n            <!-- sidenav content -->\r\n            <app-nav [sidenav]=\"sidenav\"></app-nav>\r\n        </md-sidenav>\r\n        <md-sidenav  #end mode=\"over\" align=\"end\" class=\"col-sx-3 col-sm-3 col-md-3 col-lg-2 col-xl-2 border-left-0\">\r\n            <!--class=\"col-sx-3 col-sm-3 col-md-3 col-lg-2 border-left-0\"-->\r\n            <!-- sidenav content -->\r\n            <app-notification (notify)=\"onNotify($event)\" ></app-notification>\r\n        </md-sidenav>\r\n        <!-- primary content -->\r\n        <div class=\"col\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </md-sidenav-container>\r\n</div>"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  inventory works!\r\n</p>\r\n"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <md-toolbar color=\"primary\" class=\"col-12\">\r\n    <h5>Datacenter Management Framework</h5>\r\n  </md-toolbar>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-10 col-md-8 col-lg-4 offset-sm-1 offset-md-2 offset-lg-4\">\r\n    <md-card class=\"login-wrapper\">\r\n      <md-card-header>        \r\n        <md-card-title ><h5 style=\"text-align: center\"> Datacenter Management Framework </h5></md-card-title>\r\n      </md-card-header>\r\n      <hr>\r\n      <md-card-content>\r\n        <form class=\"login\" [formGroup]=\"loginForm\" (ngSubmit)=\"onlogin()\" novalidate>\r\n          <div class=\"form-group\">\r\n            <md-input-container class=\"col-12\">\r\n              <input mdInput placeholder=\"UserName\" type=\"text\" formControlName=\"userId\" required />            \r\n            </md-input-container>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <md-input-container class=\"col-12\">\r\n              <input mdInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" required />\r\n            </md-input-container>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <span [ngClass]=\"{'error':!InVisible}\">\r\n          {{result}}\r\n        </span>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <md-card-actions class=\"col-12\">\r\n              <button md-raised-button type=\"submit\" class=\"my-success-btn\" [disabled]=\"!loginForm.valid\" color=\"primary\">LOG IN</button>\r\n            </md-card-actions>\r\n          </div>\r\n        </form>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-sidenav-focus-trap\">\r\n  <div class=\"cdk-focus-trap-content\">\r\n    <nav class=\"main\">\r\n      <ul>\r\n        <li class=\"for-mobile\"><span>Welcome {{User}}</span></li>\r\n        <li *ngFor=\"let list of links\">\r\n          <a *ngIf=\"list.submenu==undefined \" [routerLink]=\"[list.path]\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><i class=\"material-icons list-icons\">{{list.icon}}</i>{{list.name}}</a>\r\n          <nav class=\"sub\" *ngIf=\"list.submenu!=undefined\">\r\n            <h6 *ngIf=\"list.submenu!=undefined\" (click)=\"submenu($event)\">{{list.name}}<i class=\"material-icons\" [hidden]=\"shown\">&#xE315;</i><i class=\"material-icons\" [hidden]=\"!shown\">&#xE313;</i></h6>\r\n            <ul [hidden]=\"shown\">\r\n              <li *ngFor=\"let menu of list.submenu\"><a [routerLink]=\"[menu.path]\" (click)=\"sidenav.close();submenu($event)\"><i class=\"material-icons list-icons\">{{menu.icon}}</i>{{menu.name}}</a></li>\r\n            </ul>\r\n          </nav>\r\n        </li>\r\n        <li class=\"for-mobile\"><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"material-icons list-icons\">power_settings_new</i>Logout</a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n<!--(click)=\"sidenav.close()\"-->"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12 notification\">\r\n    <div *ngFor=\"let notify of notification\" class=\"col-12 notify_container\">\r\n        <!--Success Notification-->\r\n        <div class=\"col-12 notify\" [ngClass]= \"{ 'green': notify.status == 'SUCCEEDED' ,'red': notify.status == 'FAILED'}\">\r\n            <div class=\"col-2 notify-icon\">\r\n                <i class=\"material-icons center-icon\" *ngIf=\"notify.status=='SUCCEEDED'\" >check</i>\r\n                <i class=\"material-icons center-icon\" *ngIf=\"notify.status=='FAILED'\" >close</i>\r\n            </div>\r\n            <div class=\"col-8\" class=\"notify_content\">\r\n                <div>\r\n                    <p *ngIf=\"notify.status=='SUCCEEDED'\">{{notify.operation}} Successfully. VM ID : {{notify.vm_Id}}</p>\r\n                    <p *ngIf=\"notify.status=='FAILED'\">{{notify.operation}} FAILED. VM ID : {{notify.vm_Id}}</p>\r\n                </div>\r\n            </div>\r\n        </div>        \r\n    </div>\r\n</div>"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<!--<ng2-smart-table  [settings]=\"settings\" [source]=\"parameters\" ></ng2-smart-table>-->\r\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float: right\" (click)=\"dialogRef.close()\" color=\"primary\">OK</button>\r\n"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h2 style=\"display:inline-block\">Requests</h2>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n      <button style=\"float:right\" type=\"button\" md-raised-button class=\"pull-right\" (click)=\"addNewRequest()\" color=\"primary\">Create Request</button>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n  <!--<md-card class=\"col-10 offset-1\">\r\n    <md-card-title>\r\n      <h2 style=\"display:inline-block\">Requests</h2>\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n      <button style=\"float:right\" type=\"button\" md-raised-button class=\"pull-right\" (click)=\"addNewRequest()\" color=\"primary\">Create Request</button>\r\n    </md-card-title>-->\r\n    <!--<md-card-content>-->\r\n      <div>\r\n        <ngx-datatable #myTable\r\n         class=\"material expandable\"\r\n          [columnMode]=\"'force'\"\r\n          [externalPaging]=\"true\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"getRowHeight\"\r\n          [offset]=\"offset\"\r\n          [limit]=\"limit\"\r\n          [count]=\"count\"\r\n          [rows]=\"rows\"\r\n          [columns]=\"columns\"\r\n          [selected]=\"selected\"\r\n          [selectionType]=\"'single'\"\r\n          [sorts]=\"[]\"\r\n          (page)='onPage($event)'>\r\n          <ngx-datatable-row-detail \r\n           [rowHeight]=\"getRowHeight\"\r\n           #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n            <ng-template let-row=\"row\" ngx-datatable-row-detail-template>\r\n              <div>\r\n                <ul class=\"innerContent\">\r\n                  <li *ngFor=\"let rowObj of row['parameters']\">{{(rowObj[\"name\"] | requestfilter) +\" : \"+ rowObj[\"value\"]}}</li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-row-detail>\r\n\r\n          <!--Column Template-->\r\n          <!-- Column Templates -->\r\n          <ngx-datatable-column  [width]=\"80\" [resizeable]=\"false\"\r\n          [sortable]=\"false\"\r\n          [draggable]=\"false\"\r\n          [canAutoResize]=\"false\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span [class.icon-right]=\"!row.$$expanded\" [class.icon-down]=\"row.$$expanded\" class=\"pointer\" title=\"Expand/Collapse Row\"\r\n                (click)=\"toggleExpandRow(row)\">\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>       \r\n          <ngx-datatable-column name=\"Name\" [width]=\"250\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.name}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Operation\" [width]=\"100\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Description\" [width]=\"300\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Requested By\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.requestedBy}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Status\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.status}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Created At\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.createdOn |date}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          \r\n        </ngx-datatable>\r\n      </div>\r\n      </div>\r\n    <!--</md-card-content>-->\r\n  <!--</md-card>-->\r\n</div>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <h2 style=\"display:inline-block\">Resouces</h2>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n       <div>\r\n         <ngx-datatable #myTable\r\n         class=\"material expandable\"\r\n          [columnMode]=\"'force'\"\r\n          [externalPaging]=\"true\"\r\n          [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\"\r\n          [rowHeight]=\"getRowHeight\"\r\n          [offset]=\"offset\"\r\n          [limit]=\"limit\"\r\n          [count]=\"count\"\r\n          [rows]=\"rows\" \r\n          [columns]=\"columns\"\r\n          [selected]=\"selected\"\r\n          [selectionType]=\"'single'\"\r\n          [sorts]=\"[]\"\r\n          (page)='onPage($event)'>\r\n          <ngx-datatable-row-detail \r\n           [rowHeight]=\"getRowHeight\"\r\n           #myDetailRow (toggle)=\"onDetailToggle($event)\">\r\n            <ng-template let-row=\"row\" ngx-datatable-row-detail-template>\r\n              <div>\r\n                <ul class=\"innerContent\">\r\n                  <li *ngFor=\"let rowObj of row['parameters']\">{{rowObj[\"name\"] +\" : \"+ rowObj[\"qty\"]}}</li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-row-detail>\r\n\r\n          <ngx-datatable-column  [width]=\"80\" [resizeable]=\"false\"\r\n          [sortable]=\"false\"\r\n          [draggable]=\"false\"\r\n          [canAutoResize]=\"false\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span [class.icon-right]=\"!row.$$expanded\" [class.icon-down]=\"row.$$expanded\" class=\"pointer\" title=\"Expand/Collapse Row\"\r\n                (click)=\"toggleExpandRow(row)\">\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>       \r\n          <ngx-datatable-column name=\"Name\" [width]=\"250\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.name}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Type\" [width]=\"300\">\r\n            <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n              {{row.type}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Requested By\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.userId}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Status\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.status}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Created At\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              {{row.createdAt |date}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n       </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{data.message}}\r\n</p>\r\n<button type=\"button\" md-button class=\"my-cancel-btn\" style=\"float: right\" (click)=\"dialogRef.close()\">Ok</button>"

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(17);
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
    return SuccessDialogComponent;
}());
SuccessDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-success-dialog',
        template: __webpack_require__(500),
        styles: [__webpack_require__(467)]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], SuccessDialogComponent);

var _a;
//# sourceMappingURL=success-dialog.component.js.map

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ })

},[762]);
//# sourceMappingURL=main.bundle.js.map
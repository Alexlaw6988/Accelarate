System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.errors = [];
                    this.errorIndex = [];
                    this.filter = "All";
                    this.singlePicker = {
                        singleDatePicker: true,
                        showDropdowns: true,
                        opens: "left"
                    };
                }
                AppComponent.prototype.singleSelect = function (value, index, property) {
                    this.results[index][property] = value.start;
                };
                AppComponent.prototype.logError = function (i, err) {
                    var rowIndex = i + 1;
                    var error = "Row# " + rowIndex + ": " + err;
                    if (this.errors.indexOf(error) == -1) {
                        this.errors.push(error);
                    }
                    if (this.errorIndex.indexOf(i) == -1) {
                        this.errorIndex.push(i);
                        this.results[i].error = true;
                    }
                };
                AppComponent.prototype.removeError = function (i, err) {
                    var rowIndex = i + 1;
                    var error = "Row# " + rowIndex + ": " + err;
                    var index = this.errors.indexOf(error);
                    var eindex = this.errorIndex.indexOf(i);
                    if (index != -1) {
                        this.errors.splice(index, 1);
                    }
                    if (eindex != -1) {
                        this.errorIndex.splice(eindex, 1);
                        this.results[i].error = false;
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.results = [{
                            "eqpInit": "test1",
                            "eqpNumb": "a1256",
                            "wbNum": 78654,
                            "wbDate": "11/1/2017",
                            "org": "testorg",
                            "dest": "testdest",
                            "amount": "200.."
                        },
                        {
                            "eqpInit": "test",
                            "eqpNumb": 5612,
                            "wbNum": 78546,
                            "wbDate": "10/8/2017",
                            "org": "testorg",
                            "dest": "testdest",
                            "amount": "823.01a"
                        },
                        {
                            "eqpInit": "test",
                            "eqpNumb": 41256,
                            "wbNum": 278654,
                            "wbDate": "11/8/2017",
                            "org": "testorg",
                            "dest": "testdest",
                            "amount": ".340"
                        }, {
                            "eqpInit": "test",
                            "eqpNumb": 12526,
                            "wbNum": 718654,
                            "wbDate": "12/1/2017",
                            "org": "testorg",
                            "dest": "testdest",
                            "amount": 400
                        }, {
                            "eqpInit": "test",
                            "eqpNumb": 'a13256',
                            "wbNum": 786524,
                            "wbDate": "11/4/2017",
                            "org": "testorg",
                            "dest": "testdest",
                            "amount": 2200
                        }];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/component/appComponent/view/app.component.html',
                        styleUrls: ['./app/component/appComponent/css/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

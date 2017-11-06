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
                    this.formcontrols = [];
                    this.singlePicker = {
                        singleDatePicker: true,
                        showDropdowns: true,
                        opens: "left"
                    };
                }
                AppComponent.prototype.validateInput = function () {
                    var Alphabet_REGEXP = "[a-zA-Z]+";
                    var Number_REGEXP = "[0-9]+";
                    var Decimal_REGEXP = "^[0-9]+(\.[0-9]+)?$";
                    var rowIndex = i + 1;
                    for (var i = 0; i <= this.results.length; i++) {
                        if (this.results[i]) {
                            if (!this.results[i]["eqpInit"]) {
                                this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
                            }
                            if (!this.results[i]["eqpNumb"]) {
                                this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
                            }
                            console.log(this.results[i]);
                        }
                    }
                };
                AppComponent.prototype.singleSelect = function (value, index, property) {
                    this.results[index][property] = value.start;
                };
                AppComponent.prototype.test = function (form, i) {
                    if (!this.formcontrols.indexOf(form)) {
                        var rowIndex = i + 1;
                        this.formcontrols.push(form);
                        if (form && form.invalid && rowIndex >= 1) {
                            this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
                        }
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    //this.errors = ["error1","error2","error3","error1","error2","error3"];
                    this.results = [{
                            "eqpInit": "",
                            "eqpNumb": "a1256",
                            "wbNum": 78654,
                            "wbDate": "11/1/2017",
                            "org": "testorg1",
                            "dest": "testdest1",
                            "amount": "200.."
                        },
                        {
                            "eqpInit": "test",
                            "eqpNumb": 5612,
                            "wbNum": 78546,
                            "wbDate": "10/8/2017",
                            "org": "testorg2",
                            "dest": "testdest2",
                            "amount": "823.01a"
                        },
                        {
                            "eqpInit": "test",
                            "eqpNumb": 41256,
                            "wbNum": 278654,
                            "wbDate": "11/8/2017",
                            "org": "testorg3",
                            "dest": "testdest3",
                            "amount": ".340"
                        }, {
                            "eqpInit": "test",
                            "eqpNumb": 12526,
                            "wbNum": 718654,
                            "wbDate": "12/1/2017",
                            "org": "testorg4",
                            "dest": "testdest4",
                            "amount": 400
                        }, {
                            "eqpInit": "test",
                            "eqpNumb": 13256,
                            "wbNum": 786524,
                            "wbDate": "11/4/2017",
                            "org": "testorg5",
                            "dest": "testdest5",
                            "amount": 2200
                        }];
                    this.validateInput();
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

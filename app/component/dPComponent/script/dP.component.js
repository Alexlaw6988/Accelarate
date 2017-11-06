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
    var dPComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            dPComponent = (function () {
                function dPComponent() {
                    this.DateSelectionChanged = new core_1.EventEmitter();
                    this.singlePicker = {
                        singleDatePicker: true,
                        showDropdowns: true,
                        opens: "left"
                    };
                    this.eventLog = '';
                }
                dPComponent.prototype.ngOnInit = function () {
                    this.singleDate = this.singleDate ? this.singleDate : Date.now();
                    console.log(this.singleDate);
                };
                dPComponent.prototype.selectedDate = function (value, dateInput) {
                    dateInput.start = value.start;
                    dateInput.end = value.end;
                };
                dPComponent.prototype.singleSelect = function (value) {
                    this.singleDate = value.start;
                };
                dPComponent.prototype.applyDate = function (value, dateInput) {
                    dateInput.start = value.start;
                    dateInput.end = value.end;
                };
                dPComponent.prototype.calendarEventsHandler = function (e) {
                    console.log(e);
                    this.eventLog += '\nEvent Fired: ' + e.event.type;
                };
                dPComponent.prototype.onSingleDateChange = function () {
                    this.DateSelectionChanged.emit(this.singleDate);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], dPComponent.prototype, "singleDate", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], dPComponent.prototype, "DateSelectionChanged", void 0);
                dPComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dp',
                        templateUrl: './app/component/dPComponent/view/dP.component.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], dPComponent);
                return dPComponent;
            }());
            exports_1("dPComponent", dPComponent);
        }
    }
});

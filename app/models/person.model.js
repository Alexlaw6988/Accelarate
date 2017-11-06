System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var equipment;
    return {
        setters:[],
        execute: function() {
            equipment = (function () {
                function equipment(eqpInit, eqpNumb, wbNum, wbDate, org, dest, amount) {
                    this.eqpInit = eqpInit;
                    this.eqpNumb = eqpNumb;
                    this.wbNum = wbNum;
                    this.wbDate = wbDate;
                    this.org = org;
                    this.dest = dest;
                    this.amount = amount;
                }
                return equipment;
            }());
            exports_1("equipment", equipment);
        }
    }
});

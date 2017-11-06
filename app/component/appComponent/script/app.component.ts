import { Component, OnInit } from '@angular/core';
import { equipment } from 'app/models/equipment';
import { Daterangepicker } from 'ng2-daterangepicker';
import * as moment from 'moment';


@Component({
    selector: 'my-app',
    templateUrl: './app/component/appComponent/view/app.component.html',
    styleUrls: ['./app/component/appComponent/css/app.component.css']
})
export class AppComponent {
    public results: equipment[];
    public errors: string[] = [];
    public formcontrols = [];

    public singlePicker = {
        singleDatePicker: true,
        showDropdowns: true,
        opens: "left"
    }

    public validateInput() {
        let Alphabet_REGEXP: string = "[a-zA-Z]+";
        let Number_REGEXP: string = "[0-9]+";
        let Decimal_REGEXP: string = "^[0-9]+(\.[0-9]+)?$";
        let rowIndex = i + 1;

        for (var i = 0; i <= this.results.length; i++) {
            if (this.results[i]) {
                if (!this.results[i]["eqpInit"]) {// && !Alphabet_REGEXP.test(this.results[i]["eqpInit"])) {
                    this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
                }
                if (!this.results[i]["eqpNumb"]) {// && !Number_REGEXP.test(this.results[i]["eqpNumb"])) {
                    this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
                }
                console.log(this.results[i]);
            }

        }

    }

    public singleSelect(value: any, index: number, property: string) {
        this.results[index][property] = value.start
    }
    public test(form: any, i: number) {
        
        if (!this.formcontrols.indexOf(form)) {
            let rowIndex = i + 1;
            this.formcontrols.push(form);
            if (form && form.invalid && rowIndex >= 1) {
                this.errors.push("Row# " + rowIndex + ": Invalid Eqp Init");
            }
        }
    }
    ngOnInit() {

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
    }




}
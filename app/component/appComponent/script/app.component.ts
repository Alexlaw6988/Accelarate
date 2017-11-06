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
    public errorIndex = [];
    public filter = "All";
    public singlePicker = {
        singleDatePicker: true,
        showDropdowns: true,
        opens: "left"
    }

    public singleSelect(value: any, index: number, property: string) {
        this.results[index][property] = value.start
    }

    
    public logError(i: number, err: string): void {
        let rowIndex = i + 1;
        let error = "Row# " + rowIndex + ": " + err;
        if (this.errors.indexOf(error) == -1) {
            this.errors.push(error);
        }
        if (this.errorIndex.indexOf(i) == -1) {
            this.errorIndex.push(i);
            this.results[i].error = true;
        }
        
    }
    public removeError(i: number, err: string): void {
        let rowIndex = i + 1;
        let error = "Row# " + rowIndex + ": " + err;
        let index = this.errors.indexOf(error);
        let eindex = this.errorIndex.indexOf(i);
        if (index != -1) {
            this.errors.splice(index,1);
        }
        if (eindex != -1) {
            this.errorIndex.splice(eindex, 1);
            this.results[i].error = false;
        }
       
    }
    ngOnInit() {

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
        
    }




}
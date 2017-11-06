import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Daterangepicker } from 'ng2-daterangepicker';
import * as moment from 'moment';

@Component({
    selector: 'my-dp',
    templateUrl: './app/component/dPComponent/view/dP.component.html',
})

export class dPComponent{
@Input() singleDate;

@Output() 
DateSelectionChanged : EventEmitter <string> = new EventEmitter <string>();
public singlePicker = {
      singleDatePicker: true,
      showDropdowns: true,
      opens: "left"
    }   
    public eventLog = '';
  ngOnInit() {
        this.singleDate = this.singleDate ? this.singleDate :Date.now();
		console.log(this.singleDate);
    }
private selectedDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }
    
    private singleSelect(value: any) {
        this.singleDate = value.start;
    }

    private applyDate(value: any, dateInput: any) {
        dateInput.start = value.start;
        dateInput.end = value.end;
    }

    public calendarEventsHandler(e:any) {
        console.log(e);
        this.eventLog += '\nEvent Fired: ' + e.event.type;
    }
	
	onSingleDateChange(){
	this.DateSelectionChanged.emit(this.singleDate);
	}
}
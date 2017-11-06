import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from '/app/component/appComponent/script/app.component';
import {DatepickerModule} from 'ng2-bootstrap';
import {Daterangepicker} from 'ng2-daterangepicker';
import { DatePipe } from '@angular/common'


@NgModule({
    imports: [BrowserModule, FormsModule, DatepickerModule.forRoot(),Daterangepicker],
	providers: [DatePipe],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


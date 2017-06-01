import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/SharedModule';
import { SimpleTableComponent } from './simple-table/simple-table.component';


@NgModule({
    declarations: [
        AppComponent,
        SimpleTableComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

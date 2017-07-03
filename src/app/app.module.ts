import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/SharedModule';
import { SimpleTableComponent } from './simple-table/simple-table.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpModule, Http } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        SimpleTableComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (http) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
                deps: [Http],
            }
        }),
        HttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

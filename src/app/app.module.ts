import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/SharedModule';
import { SimpleTableComponent } from './simple-table/simple-table.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpModule, Http } from '@angular/http';

export function httpFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
                useFactory: httpFactory,
                deps: [Http],
            }
        }),
        HttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

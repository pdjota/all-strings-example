/**
 * NOTE: Since version 2.0.0-beta-3 Material does not support an entire module. Each component needs to be added
 * explicitly to the project. This module aims to include those components so it is transparent for the application.
 * Also includes the modules from Covalent
 */

import { NgModule } from '@angular/core';
import {
    MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdMenuModule, MdProgressSpinnerModule,
    MdToolbarModule
} from '@angular/material';
import {
    CovalentCommonModule, CovalentDataTableModule, CovalentExpansionPanelModule,
    CovalentLayoutModule,
} from '@covalent/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdMenuModule,
        MdButtonModule,
        MdInputModule,
        MdProgressSpinnerModule,
        CovalentExpansionPanelModule,
        CovalentDataTableModule,
        CovalentLayoutModule,
        CovalentCommonModule,
        BrowserAnimationsModule,
    ],
    exports: [
        MdToolbarModule,
        MdIconModule,
        MdCardModule,
        MdMenuModule,
        MdButtonModule,
        MdInputModule,
        MdProgressSpinnerModule,
        CovalentExpansionPanelModule,
        CovalentDataTableModule,
        CovalentLayoutModule,
        CovalentCommonModule,
        BrowserAnimationsModule,
    ]
})
export class MaterialWrapperModule {
}

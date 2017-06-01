import { NgModule } from '@angular/core';
import { MaterialWrapperModule } from './MaterialWrapperModule';

@NgModule({
    imports: [
        MaterialWrapperModule,
    ],
    exports: [
        MaterialWrapperModule,
    ]
})
export class SharedModule { }

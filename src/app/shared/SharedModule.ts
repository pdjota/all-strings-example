import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialWrapperModule } from './MaterialWrapperModule';

@NgModule({
    imports: [
        MaterialWrapperModule,
        TranslateModule,
    ],
    exports: [
        MaterialWrapperModule,
        TranslateModule,
    ]
})
export class SharedModule { }

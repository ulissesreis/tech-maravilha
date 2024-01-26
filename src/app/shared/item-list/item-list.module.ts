
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemListComponent } from '../../shared/item-list/item-list.component';

//  Estou deixando component AS module, porque um modulo shared com outros componentes poderia aumentar o tamanho do bundle.
//  A ideia é importar somente o que for usar...

@NgModule({
    declarations: [
        ItemListComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ItemListComponent,
    ]
})
export class ItemListModule { }

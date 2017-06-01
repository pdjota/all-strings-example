import { Component } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
    basicData = [
        { sku: '1011-2', item: 'Paper', price: 320 },
        { sku: '1011-0', item: 'Rocks', price: 475 },
        { sku: '1011-4', item: 'Spock', price: 500 },
    ];

    columns: ITdDataTableColumn[] = [
        { name: 'sku', label: 'SKU #' },
        { name: 'item', label: 'Item name' },
        { name: 'price', label: 'Price (EUR)', numeric: true, format: v => v.toFixed(2) },
        { name: 'date', label: 'Date' }
    ];
}

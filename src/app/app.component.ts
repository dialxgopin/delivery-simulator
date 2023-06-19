import { Component, ViewChild } from '@angular/core';
import { ProductGridComponent } from './products/product-grid/product-grid.component';
import { ProductPanel } from './model/pruduct-panel';
import { PRODUCTS } from './products-default';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: ProductPanel[] = PRODUCTS;
}

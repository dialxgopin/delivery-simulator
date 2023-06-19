import { Component, Input } from '@angular/core';
import { ProductPanel } from 'src/app/model/pruduct-panel';
import { PRODUCTS } from 'src/app/products-default';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {

  @Input()
  products!: ProductPanel[];
  
}

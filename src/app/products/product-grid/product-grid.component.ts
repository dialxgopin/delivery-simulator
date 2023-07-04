import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/pruduct';
import { PRODUCTS } from 'src/app/products-default';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductGridComponent {

  @Input()
  products!: Product[];
  
}

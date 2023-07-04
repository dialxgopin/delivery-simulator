import { Component } from '@angular/core';
import { Product } from 'src/app/model/pruduct';
import { PRODUCTS } from 'src/app/products-default';

@Component({
  selector: 'app-product-explorer',
  templateUrl: './product-explorer.component.html',
  styleUrls: ['./product-explorer.component.scss']
})
export class ProductExplorerComponent {
  products: Product[] = PRODUCTS;
}

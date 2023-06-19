import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CartService } from '../cart/cart.service';



@NgModule({
  declarations: [
    ProductPanelComponent,
    ProductGridComponent
  ],
  exports: [
    ProductGridComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ]
})
export class ProductsModule { }

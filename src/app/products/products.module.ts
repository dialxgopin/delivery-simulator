import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPanelComponent } from './product-panel/product-panel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { CartService } from '../cart/cart.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductExplorerComponent } from './product-explorer/product-explorer.component';

@NgModule({
  declarations: [
    ProductPanelComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductExplorerComponent
  ],
  exports: [
    ProductExplorerComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CartService
  ]
})
export class ProductsModule { }

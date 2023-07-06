import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductsModule } from '../products/products.module';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { SubtotalComponent } from './subtotal/subtotal.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    SubtotalComponent
  ],
  exports: [
    ShoppingListComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    SearchBarComponent
  ]
})
export class CartModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductExplorerComponent } from './products/product-explorer/product-explorer.component';
import { ShoppingListComponent } from './cart/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: ProductExplorerComponent },
  { path: 'cart', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

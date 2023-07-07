import { Component } from '@angular/core';
import { Product } from 'src/app/model/pruduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.updateSubtotal();
  }

  private updateSubtotal() {
    this.cartService.updateSubtotal(
      this.cartService.calculateSubtotal(this.cart)
    );
  }

  onCartEvent(cart: Product[]) {
    this.cart = cart;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/model/pruduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input()
  product!: Product;

  @Output()
  cartEvent = new EventEmitter<Product[]>();

  constructor(private cartService: CartService) { }

  decrement() {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.product.quantity--;
    if (this.product.quantity <= 0) {
      cart = cart.filter(item => item.id !== this.product.id);
    } else {
      cart = this.cartService.updateQuantity(this.product, cart);
    }
    this.cartEvent.emit(cart);
    this.updateCalculations(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  increment() {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.product.quantity++;
    cart = this.cartService.updateQuantity(this.product, cart);
    this.cartEvent.emit(cart);
    this.updateCalculations(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private updateCalculations(cart: Product[]) {
    this.cartService.updateTotalProducts(cart);
    this.cartService.updateSubtotal(
      this.cartService.calculateSubtotal(cart)
    );
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/model/pruduct';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss']
})
export class ProductPanelComponent {

  @Input()
  product!: Product;

  cart: Product[] = [];

  constructor(private cartService: CartService) { }

  onAddToCart() {
    this.cart = this.addToBag(this.product);
    this.updateCalculations();
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private addToBag(product: Product): Product[] {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.findIndex(item => item.id === product.id) === -1) {
      product.quantity = 0;
      cart.push(this.product);
    }
    return cart;
  }

  private updateCalculations() {
    this.product.quantity++;
    this.cart = this.cartService.updateQuantity(this.product, this.cart);
    this.cartService.updateTotalProducts(this.cart);
    this.cartService.updateSubtotal(
      this.cartService.calculateSubtotal(this.cart)
    );
  }
}

import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductPanel } from 'src/app/model/pruduct-panel';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.scss']
})
export class ProductPanelComponent {
  
  @Input()
  product!: ProductPanel;
  cart: ProductPanel[] = [];

  constructor(private cartService: CartService) {}

  onAddToCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cart.push(this.product);
    this.cartService.updateItems(this.cart.length);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}

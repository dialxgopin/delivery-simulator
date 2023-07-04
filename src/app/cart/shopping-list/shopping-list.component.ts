import { Component } from '@angular/core';
import { Product } from 'src/app/model/pruduct';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  cart: Product[] = [];

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}

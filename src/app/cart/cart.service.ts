import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../model/pruduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<number>(0);

  private subtotalSubject =  new BehaviorSubject<number>(0);

  items$ = this.itemsSubject.asObservable();

  subtotal$ = this.subtotalSubject.asObservable();

  constructor() {
    const savedItems: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.itemsSubject.next(savedItems.length);
  }

  updateItems(count: number) {
    this.itemsSubject.next(count);
  }

  updateSubtotal(amount: number) {
    this.subtotalSubject.next(amount);
  }

  calculateSubtotal(cart: Product[]): number {
    let subtotal: number = 0;
    cart.forEach(item => subtotal += item.price * item.quantity);
    subtotal = parseFloat(subtotal.toFixed(2));
    return subtotal;
  }
}

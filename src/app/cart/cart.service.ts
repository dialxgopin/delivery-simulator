import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsSubject = new BehaviorSubject<number>(0);

  items$ = this.itemsSubject.asObservable();

  constructor() {
    const savedItems: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    this.itemsSubject.next(savedItems.length);
  }

  updateItems(count: number) {
    this.itemsSubject.next(count);
  }
}

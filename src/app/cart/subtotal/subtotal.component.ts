import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent {

  subtotal$: Observable<number>;

  constructor(private cartService: CartService) {
    this.subtotal$ = this.cartService.subtotal$;
  }

}

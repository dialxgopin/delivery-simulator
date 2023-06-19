import { Component } from '@angular/core';
import { ProductPanel } from 'src/app/model/pruduct-panel';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inbox-notification',
  templateUrl: './inbox-notification.component.html',
  styleUrls: ['./inbox-notification.component.scss']
})
export class InboxNotificationComponent {

  cart: ProductPanel[] = [];
  items: number = 0;
  subscription: Subscription;

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.items$.subscribe(
      items => {
        this.items = items;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

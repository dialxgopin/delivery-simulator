import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/model/pruduct';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-button-notification',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './button-notification.component.html',
  styleUrls: ['./button-notification.component.scss']
})
export class ButtonNotificationComponent {

  cart: Product[] = [];
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

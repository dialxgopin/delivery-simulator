import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNotificationComponent } from '../cart/button-notification/button-notification.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, ButtonNotificationComponent, RouterLinkWithHref],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from '../cart/cart.module';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, CartModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
}

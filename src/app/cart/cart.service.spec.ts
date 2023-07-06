import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Product } from '../model/pruduct';

describe('CartService', () => {
  let service: CartService;

  const PRODUCTS: Product[] = [
    {
      "id": "1",
      "imageLocation": "/assets/images/products/bananas.jpeg",
      "price": 1.99,
      "measurement": "lb",
      "name": "Bananas",
      "quantity": 2
    },
    {
      "id": "2",
      "imageLocation": "/assets/images/products/couch.jpeg",
      "price": 299,
      "measurement": "ea",
      "name": "Couch",
      "quantity": 1
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate subtotal', () => {
    expect(service.calculateSubtotal(PRODUCTS)).toBe(302.98);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListComponent } from './shopping-list.component';
import { ProductsModule } from 'src/app/products/products.module';
import { SubtotalComponent } from '../subtotal/subtotal.component';
import { Product } from 'src/app/model/pruduct';

describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

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
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent, SubtotalComponent],
      imports: [ProductsModule]
    });
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the list when CartEvent emmits', () => {
    component.onCartEvent(PRODUCTS);
    fixture.detectChanges();
    expect(component.cart).toHaveSize(PRODUCTS.length);
    const listElement: HTMLElement = fixture.nativeElement;
    const renderedProducts = listElement.querySelectorAll('.list-item');
    expect(renderedProducts.length).toBe(PRODUCTS.length);
  });
});

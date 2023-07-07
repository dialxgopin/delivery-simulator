import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { Product } from 'src/app/model/pruduct';
import { PRODUCTS } from 'src/app/products-default';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  const product: Product = PRODUCTS[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    localStorage.removeItem('cart');
    component.product = product;
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('cart');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement the quantity of the product', () => {
    product.quantity = 2;
    component.decrement();
    expect(component.product.quantity).toBe(1);
  });

  it('should remove the product when the quantity is equal or less than zero', () => {
    product.quantity = 1;
    localStorage.setItem('cart', JSON.stringify([product]));
    component.decrement();
    let cart: Product[] =  JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cart).toHaveSize(0);
  });

  it('should increment the quantity of the product', () => {
    product.quantity = 2;
    component.increment();
    expect(component.product.quantity).toBe(3);
  });
});

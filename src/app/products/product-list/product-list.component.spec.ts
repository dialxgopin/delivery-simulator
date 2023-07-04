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
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

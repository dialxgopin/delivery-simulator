import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponent } from './product-grid.component';
import { ProductPanelComponent } from '../product-panel/product-panel.component';
import { PRODUCTS } from 'src/app/products-default';

describe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGridComponent, ProductPanelComponent]
    });
    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all provided products', () => {
    component.products = PRODUCTS;
    fixture.detectChanges();
    const productGridElement: HTMLElement = fixture.nativeElement;
    const products = productGridElement.querySelectorAll('.grid-product .panel');
    expect(products.length).toBe(PRODUCTS.length);
  });
});

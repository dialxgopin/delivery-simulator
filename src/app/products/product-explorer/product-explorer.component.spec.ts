import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExplorerComponent } from './product-explorer.component';
import { PRODUCTS } from 'src/app/products-default';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from 'src/app/model/pruduct';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { ProductPanelComponent } from '../product-panel/product-panel.component';

describe('ProductExplorerComponent', () => {
  let component: ProductExplorerComponent;
  let fixture: ComponentFixture<ProductExplorerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductExplorerComponent,
        ProductGridComponent,
        ProductPanelComponent
      ]
    });
    fixture = TestBed.createComponent(ProductExplorerComponent);
    component = fixture.componentInstance;
    localStorage.removeItem('cart');
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem('cart');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment items in cart by clicking Add to cart in one product', () => {
    const fixture = TestBed.createComponent(ProductExplorerComponent);
    let component: ProductExplorerComponent = fixture.componentInstance;
    component.products = PRODUCTS;
    fixture.detectChanges();
    const compiled: DebugElement = fixture.debugElement;
    const buttonDebug = compiled.query(By.css(".add-to-cart-button"));
    const button = buttonDebug.nativeElement;
    button.click();
    fixture.detectChanges();
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cart.length).toBe(1);
    expect(cart.at(0)?.quantity).toBe(1);
  });

  it('add twice a product to the cart increases their quantity', () => {
    const fixture = TestBed.createComponent(ProductExplorerComponent);
    let component: ProductExplorerComponent = fixture.componentInstance;
    component.products = PRODUCTS;
    fixture.detectChanges();
    const compiled: DebugElement = fixture.debugElement;
    const buttonDebug = compiled.query(By.css(".add-to-cart-button"));
    const button = buttonDebug.nativeElement;
    button.click();
    button.click();
    fixture.detectChanges();
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cart.length).toBe(1);
    expect(cart.at(0)?.quantity).toBe(2);
  });
});

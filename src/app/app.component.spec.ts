import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PRODUCTS } from './products-default';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, SearchBarComponent, ProductsModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should increment items in cart by clicking Add to cart in one product', () => {
    localStorage.removeItem('cart');
    const fixture = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.componentInstance;
    component.products = PRODUCTS;
    fixture.detectChanges();
    const compiled: DebugElement = fixture.debugElement;
    const buttonDebug = compiled.query(By.css(".add-to-cart-button"));
    const button = buttonDebug.nativeElement;
    button.click();
    fixture.detectChanges();
    const items = compiled.query(By.css(".search-bar button span")).nativeElement;
    expect(items.textContent).toEqual('1');
  });
});

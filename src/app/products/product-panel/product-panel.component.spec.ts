import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPanelComponent } from './product-panel.component';
import { PRODUCTS } from 'src/app/products-default';
import { Product } from 'src/app/model/pruduct';

describe('ProductPanelComponent', () => {
  let component: ProductPanelComponent;
  let fixture: ComponentFixture<ProductPanelComponent>;
  const product: Product = PRODUCTS[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPanelComponent]
    });
    fixture = TestBed.createComponent(ProductPanelComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render product image', () => {
    const panelElement: HTMLElement = fixture.nativeElement;
    const panel =  panelElement.querySelector('.panel');
    const image = panel?.querySelector('img');
    expect(image?.src).toContain(product.imageLocation);
  });

  it('should render product price', () => {
    const panelElement: HTMLElement = fixture.nativeElement;
    const panel =  panelElement.querySelector('.panel');
    const price = panel?.querySelector('.price');
    expect(price?.textContent).toContain(product.price);
  });

  it('should render product measurement', () => {
    const panelElement: HTMLElement = fixture.nativeElement;
    const panel =  panelElement.querySelector('.panel');
    const measurement = panel?.querySelector('.measurement');
    expect(measurement?.textContent).toContain(product.measurement);
  });

  it('should render product name', () => {
    const panelElement: HTMLElement = fixture.nativeElement;
    const panel =  panelElement.querySelector('.panel');
    const name = panel?.querySelectorAll('div span')[2];
    expect(name?.textContent).toBe(product.name);
  });
});

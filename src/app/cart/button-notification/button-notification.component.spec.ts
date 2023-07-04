import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNotificationComponent } from './button-notification.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ButtonNotificationComponent', () => {
  let component: ButtonNotificationComponent;
  let fixture: ComponentFixture<ButtonNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonNotificationComponent, RouterTestingModule]
    });
    fixture = TestBed.createComponent(ButtonNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

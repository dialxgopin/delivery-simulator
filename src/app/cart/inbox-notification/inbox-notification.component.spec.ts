import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxNotificationComponent } from './inbox-notification.component';

describe('InboxNotificationComponent', () => {
  let component: InboxNotificationComponent;
  let fixture: ComponentFixture<InboxNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InboxNotificationComponent]
    });
    fixture = TestBed.createComponent(InboxNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

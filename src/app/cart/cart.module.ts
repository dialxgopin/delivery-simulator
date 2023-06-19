import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxNotificationComponent } from './inbox-notification/inbox-notification.component';

@NgModule({
  declarations: [
    InboxNotificationComponent
  ],
  exports: [
    InboxNotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }

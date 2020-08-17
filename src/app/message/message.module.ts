import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MessageComponent],
  imports: [
  SharedModule,
  RouterModule.forChild([
    { path: 'message',
    component: MessageComponent,
  outlet:'popup' }
  ])
  ]
})
export class MessageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsInActionRoutingModule } from './rxjs-in-action-routing.module';
import { RxjsInActionComponent } from './rxjs-in-action.component';


@NgModule({
  declarations: [RxjsInActionComponent],
  imports: [
    CommonModule,
    RxjsInActionRoutingModule
  ]
})
export class RxjsInActionModule { }

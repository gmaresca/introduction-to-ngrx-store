import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsInActionRoutingModule } from './rxjs-in-action-routing.module';
import { RxjsInActionComponent } from './rxjs-in-action.component';
import { Chapter2Component } from './chapter2/chapter2.component';


@NgModule({
  declarations: [RxjsInActionComponent, Chapter2Component],
  imports: [
    CommonModule,
    RxjsInActionRoutingModule
  ]
})
export class RxjsInActionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsInActionRoutingModule } from './rxjs-in-action-routing.module';
import { RxjsInActionComponent } from './rxjs-in-action.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';


@NgModule({
  declarations: [
    RxjsInActionComponent,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component],
  imports: [
    CommonModule,
    RxjsInActionRoutingModule
  ]
})
export class RxjsInActionModule { }

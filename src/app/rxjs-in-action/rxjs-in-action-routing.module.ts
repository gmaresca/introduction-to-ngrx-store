import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsInActionComponent } from './rxjs-in-action.component';

const routes: Routes = [{ path: '', component: RxjsInActionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsInActionRoutingModule { }

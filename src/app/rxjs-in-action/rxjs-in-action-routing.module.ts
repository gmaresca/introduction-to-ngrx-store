import { Chapter2Component } from './chapter2/chapter2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsInActionComponent } from './rxjs-in-action.component';

const routes: Routes = [{
	path: '', component: RxjsInActionComponent,
	children: [
		{ path: 'chapter2', component: Chapter2Component }
	]
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RxjsInActionRoutingModule { }

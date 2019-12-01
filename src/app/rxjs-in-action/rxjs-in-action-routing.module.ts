import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsInActionComponent } from './rxjs-in-action.component';

const routes: Routes = [{
	path: '', component: RxjsInActionComponent,
	children: [
		{ path: 'chapter2', component: Chapter2Component },
		{ path: 'chapter3', component: Chapter3Component },
		{ path: 'chapter4', component: Chapter4Component }
	]
}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RxjsInActionRoutingModule { }

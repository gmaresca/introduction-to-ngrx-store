import { SimpleshoppingComponent } from './store/simpleshopping/simpleshopping.component';
import { HomeComponent } from './home/home.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{ path: 'home', component: HomeComponent },
	{ path: 'mycounter', component: MyCounterComponent },
	{ path: 'shopping', component: SimpleshoppingComponent },
	{
		path: 'rxjs',
		loadChildren: () => import('./rxjs-in-action/rxjs-in-action.module').then(m => m.RxjsInActionModule)
	}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { RxjsInActionModule } from './rxjs-in-action/rxjs-in-action.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping.reducer';


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './my-counter/counter.reducers';
import { HomeComponent } from './home/home.component';
import { SimpleshoppingComponent } from './store/simpleshopping/simpleshopping.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    HomeComponent,
    SimpleshoppingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      count: counterReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    RxjsInActionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

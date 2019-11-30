import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from '../models/app-state.model';
import { ShoppingItem } from '../models/shopping-item.model';
import { AddItemAction, DeleteItemAction } from '../actions/shopping.actions';

@Component({
  selector: 'app-simpleshopping',
  templateUrl: './simpleshopping.component.html',
  styleUrls: ['./simpleshopping.component.scss']
})
export class SimpleshoppingComponent implements OnInit {
  shoppingItems: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }

  addItem() {
  this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}

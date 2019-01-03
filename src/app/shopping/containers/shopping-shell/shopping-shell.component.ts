import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Shoppinglist } from '../../shoppinglist';

import * as fromShoppingList from './../../state';
import * as shoppingListActions from '../../state/shoppinglist.actions';


@Component({
  selector: 'app-shopping-shell',
  templateUrl: './shopping-shell.component.html',
  styleUrls: ['./shopping-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingShellComponent implements OnInit {

  shoppingList$: Observable<Shoppinglist[]>;
  errorMsg$: Observable<string>;
  selectedItem$: Observable<Shoppinglist>;
  

  constructor(private store: Store<fromShoppingList.State>) { }

  ngOnInit() {   
    this.store.dispatch(new shoppingListActions.Load());
   
    this.shoppingList$ =  this.store.pipe(select(fromShoppingList.getShoppingList));
    this.selectedItem$ = this.store.pipe(select(fromShoppingList.getshoppingListItem));
    this.errorMsg$ = this.store.pipe(select(fromShoppingList.getError));
  }  

  itemSelected(item: Shoppinglist) : void  {
    this.store.dispatch(new shoppingListActions.LoadCurrentShoppingListItem(item));
  }
}

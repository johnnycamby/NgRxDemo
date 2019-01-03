import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shoppinglist } from '../../shoppinglist';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  pageTitle = 'Shopping List';

  @Input() errorMsg: string;
  @Input() shoppingList: Shoppinglist[];
  @Input() selectedItem: Shoppinglist;
  @Output() selected = new EventEmitter<Shoppinglist>();

  itemSelected(item: Shoppinglist) {
    this.selected.emit(item);
  }  
}

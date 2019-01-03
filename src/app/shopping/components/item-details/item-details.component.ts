import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Shoppinglist } from '../../shoppinglist';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit , OnChanges, OnDestroy{
 
 
  @Input() selectedItem: Shoppinglist;

  shoppingList: Shoppinglist | null;

  isActive = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedItem){
      const shoppingListItem: any = changes.selectedItem.currentValue as Shoppinglist;
      this.displayItemDetails(shoppingListItem);
    }
  }
  
  ngOnDestroy(): void {
    this.isActive = false;
  }

  displayItemDetails(shoppingListItem: Shoppinglist | null): void {
    this.shoppingList = shoppingListItem;
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingShellComponent } from './containers/shopping-shell/shopping-shell.component';

import { reducer } from './state/shoppinglist.reducer';
import { ShoppingListEffects } from './state/shoppinglist.effects';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingShellComponent }
];

@NgModule({
  imports: [
    CommonModule,
    InputsModule,
    DropDownsModule,
    GridModule,
    ButtonsModule,
    RouterModule.forChild(shoppingRoutes),    
    StoreModule.forFeature('shoppingList', reducer),
    EffectsModule.forFeature([ShoppingListEffects])
  ],
  declarations: [ShoppingListComponent, ShoppingShellComponent, ItemDetailsComponent]
})
export class ShoppingModule { 

  constructor() {}

  // automapper mappings
}

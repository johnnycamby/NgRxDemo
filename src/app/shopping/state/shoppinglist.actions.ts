import { Action } from "@ngrx/store";
import { Shoppinglist } from "../shoppinglist";



// --- Types -------------
export enum ShoppingListActionTypes {
    Load = '[ShoppingList] Load ',
    LoadSuccessful = '[ShoppingList] Load successful',
    LoadFailed = '[ShoppingList] Load failed',

    LoadCurrentShoppingListItem = '[ShoppingList] Load Current ShoppingList Item',

    UpdateShoppingListItem = '[ShoppingList] Update Item',
    UpdateShoppingListItemSuccessful = '[ShoppingList] Update Item Successful',
    UpdateShoppingListItemFailed = '[ShoppingList] Update Item Failed',

    CreateShoppingListItem = '[ShoppingList] Create Item',
    CreateShoppingListItemSuccessful = '[ShoppingList] Create Item Successful',
    CreateShoppingListItemFailed = '[ShoppingList] Create Item Failed',
    DeleteShoppingListItem = '[ShoppingList] Delete Item',
    DeleteShoppingListItemSuccessful = '[ShoppingList] Delete Item Successful',
    DeleteShoppingListItemFailed = '[ShoppingList] Delete Item Failed',

    InitializeShoppingListItem = '[ShoppingListItem] Initialize Shopping List Item'
}

// ---- Action Creators -----

// no payload since it has no data
export class Load implements Action {
    readonly type = ShoppingListActionTypes.Load;
}

export class LoadSuccessful implements Action {
    readonly type = ShoppingListActionTypes.LoadSuccessful;

    constructor(public payload: Shoppinglist[]) { }
}

export class LoadCurrentShoppingListItem implements Action {
    readonly type = ShoppingListActionTypes.LoadCurrentShoppingListItem;

    constructor(public payload: Shoppinglist) {}
}

export class LoadFailed implements Action {
    readonly type = ShoppingListActionTypes.LoadFailed;

    constructor(public payload: string) { }
}

export class UpdateShoppingListItem implements Action {
    readonly type = ShoppingListActionTypes.UpdateShoppingListItem;

    constructor(public payload: Shoppinglist) { }
}

export class UpdateShoppingListItemSuccessful implements Action {
    readonly type = ShoppingListActionTypes.UpdateShoppingListItemSuccessful;

    constructor(public payload: Shoppinglist) { }
}

export class UpdateShoppingListItemFailed implements Action {
    readonly type = ShoppingListActionTypes.UpdateShoppingListItemFailed;

    constructor(public payload: string) { }
}

export class CreateShoppingListItem implements Action {
    readonly type = ShoppingListActionTypes.CreateShoppingListItem;
  
    constructor(public payload: Shoppinglist) { }
  }
  
  export class CreateShoppingListItemSuccessful implements Action {
    readonly type = ShoppingListActionTypes.CreateShoppingListItemSuccessful;
  
    constructor(public payload: Shoppinglist) { }
  }
  
  export class CreateShoppingListItemFailed implements Action {
    readonly type = ShoppingListActionTypes.CreateShoppingListItemFailed;
  
    constructor(public payload: string) { }
  }
  
  export class DeleteShoppingListItem implements Action {
    readonly type = ShoppingListActionTypes.DeleteShoppingListItem;
  
    constructor(public payload: number) { }
  }
  
  export class DeleteShoppingListItemSuccessful implements Action {
    readonly type = ShoppingListActionTypes.DeleteShoppingListItemSuccessful;
  
    constructor(public payload: number) { }
  }
  
  export class DeleteShoppingListItemFailed implements Action {
    readonly type = ShoppingListActionTypes.DeleteShoppingListItemFailed;
  
    constructor(public payload: string) { }
  }

  export class InitializeShoppingListItem implements Action {
    readonly type = ShoppingListActionTypes.InitializeShoppingListItem;

    // No need for a payload coz the reducer for ths Action l'l define and initialized CurrentItem & since no payload one leave out the constructor define as
    // typescript provides a default constructor
}


// Single union Type to represent all action creators
export type ShoppingListActions =
    Load | LoadSuccessful | LoadFailed | LoadCurrentShoppingListItem |
    UpdateShoppingListItem | UpdateShoppingListItemSuccessful | UpdateShoppingListItemFailed |
    CreateShoppingListItem | CreateShoppingListItemSuccessful | CreateShoppingListItemFailed |
    DeleteShoppingListItem | DeleteShoppingListItemSuccessful | DeleteShoppingListItemFailed |
    InitializeShoppingListItem;
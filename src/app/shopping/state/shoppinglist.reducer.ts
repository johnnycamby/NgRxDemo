import { Shoppinglist } from "../shoppinglist";
import { ShoppingListActions, ShoppingListActionTypes } from "./shoppinglist.actions";


export interface ShoppingListState {
    shoppingList: Shoppinglist[];
    shoppingListItemId: number | null; // use an Id so there no 2 copies of an Item in the Store
    error: string;
}

//--- Initialize State ------
const initialShoppingListState: ShoppingListState = {
    shoppingList: [],
    shoppingListItemId: null,
    error: ''
}

// ------ Reducer --------------
export function reducer(state = initialShoppingListState, action: ShoppingListActions): ShoppingListState {

    switch (action.type) {

        case ShoppingListActionTypes.LoadSuccessful:
            return {
                ...state, // first spread the existing state thus make a copy of the state then apply changes to the copy
                shoppingList: action.payload,
                error: ''
            };

        case ShoppingListActionTypes.LoadFailed:
            return {
                ...state,
                shoppingList: [],
                error: action.payload
            };

        case ShoppingListActionTypes.UpdateShoppingListItemSuccessful:
            const updatedItems = state.shoppingList.map(item => action.payload.eklId ? action.payload : item);
            return {
                ...state,
                shoppingList: updatedItems,
                shoppingListItemId: action.payload.eklId,
                error: ''
            }

        case ShoppingListActionTypes.UpdateShoppingListItemFailed:
            return {
                ...state,
                error: action.payload
            }

        case ShoppingListActionTypes.InitializeShoppingListItem:
            return {
                ...state,
                shoppingListItemId: 0
            }

        // After a create, the currentProduct is the new product.
        case ShoppingListActionTypes.CreateShoppingListItem:
            return {
                ...state,
                shoppingList: [...state.shoppingList, action.payload],
                shoppingListItemId: action.payload.eklId,
                error: ''
            };

        case ShoppingListActionTypes.CreateShoppingListItemFailed:
            return {
                ...state,
                error: action.payload
            };

        // After a delete, the currentProduct is null.
        case ShoppingListActionTypes.DeleteShoppingListItem:
            return {
                ...state,
                shoppingList: state.shoppingList.filter(item => item.eklId !== action.payload),
                shoppingListItemId: null,
                error: ''
            };

        case ShoppingListActionTypes.DeleteShoppingListItemFailed:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
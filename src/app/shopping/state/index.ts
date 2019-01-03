import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromRoot from '../../state/app.state';
import * as fromShoppinglist from './shoppinglist.reducer'

// ---- States ------------
// coz of Lazyloading the ShoppingListModule
export interface State extends fromRoot.State {
    shoppingList: fromShoppinglist.ShoppingListState;
}

// ----- Selectors -------
export const getShoppingListFeatureState = createFeatureSelector<fromShoppinglist.ShoppingListState>('shoppingList');

export const getshoppingListItemId = createSelector(getShoppingListFeatureState, state => state.shoppingListItemId);

// Selector Composition using encapsulation thus defining a selector for each bit of state & compose the selectors so that the structure of the Store can be chnaged over time
// with minimal impact on the code.
// NB:
// When building Selectors define one for each bit of state that is accessed from the Store & compose them as needed by the components & services
export const getshoppingListItem = createSelector(getShoppingListFeatureState,
    getshoppingListItemId,
    (state, shoppingListItemId) => {
        if (shoppingListItemId === 0) { //new Item
            return {
                sortId: 0,
                eklId: 0,
                fullName: '',
                bez: '',
                sysChangeDat: '',
                countPos: 0,
                anzahlArtAus: 0,
                anzahlBEDirty: 0,
                vKLId: 0,
                eklArtID: 0,
                mitMenge: 0,
                turnus: 0
            };
        }
        else {
            return shoppingListItemId ? state.shoppingList.find(shlItem => shlItem.eklId === shoppingListItemId) : null;
        }
    });

export const getShoppingList = createSelector(getShoppingListFeatureState, state => state.shoppingList);
export const getError = createSelector(getShoppingListFeatureState, state => state.error);

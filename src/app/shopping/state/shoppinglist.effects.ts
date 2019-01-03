
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as shoppingListActions from '../state/shoppinglist.actions';
import { Shoppinglist } from '../shoppinglist';
import { ShoppingService } from '../shopping.service';



@Injectable()
export class ShoppingListEffects {

    constructor(private actions$: Actions, private shoppingService: ShoppingService) { }

    @Effect()
    loadShoppingList$: Observable<Action> = this.actions$.pipe(
        ofType(shoppingListActions.ShoppingListActionTypes.Load),
        mergeMap((action: shoppingListActions.Load) => this.shoppingService.getShoppingList()
            .pipe(map((shoppingList: Shoppinglist[]) => (new shoppingListActions.LoadSuccessful(shoppingList))),
                catchError(err => of(new shoppingListActions.LoadFailed(err))))));

    @Effect()
    updateShoppingListItem$: Observable<Action> = this.actions$.pipe(
        ofType(shoppingListActions.ShoppingListActionTypes.UpdateShoppingListItem),
        map((action: shoppingListActions.UpdateShoppingListItem) => action.payload),
        mergeMap((shoppingListItem: Shoppinglist) => this.shoppingService.updateItem(shoppingListItem).pipe(
            map((updatedItem: Shoppinglist) => (new shoppingListActions.UpdateShoppingListItemSuccessful(updatedItem))),
            catchError(err => of(new shoppingListActions.UpdateShoppingListItemFailed(err))))));

    @Effect()
    createProduct$: Observable<Action> = this.actions$.pipe(
        ofType(shoppingListActions.ShoppingListActionTypes.CreateShoppingListItem),
        map((action: shoppingListActions.CreateShoppingListItem) => action.payload),
        mergeMap((newItem: Shoppinglist) =>
            this.shoppingService.createItem(newItem).pipe(
                map((newItem: Shoppinglist) => (new shoppingListActions.CreateShoppingListItemSuccessful(newItem))),
                catchError(err => of(new shoppingListActions.CreateShoppingListItemFailed(err)))
            )
        )
    );

    @Effect()
    deleteProduct$: Observable<Action> = this.actions$.pipe(
        ofType(shoppingListActions.ShoppingListActionTypes.DeleteShoppingListItem),
        map((action: shoppingListActions.DeleteShoppingListItem) => action.payload),
        mergeMap((shlID: number) =>
            this.shoppingService.deleteItem(shlID).pipe(
                map(() => (new shoppingListActions.DeleteShoppingListItemSuccessful(shlID))),
                catchError(err => of(new shoppingListActions.DeleteShoppingListItemFailed(err)))
            )
        )
    );
}
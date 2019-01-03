import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shoppinglist } from './shoppinglist';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private actionUrl = 'http://localhost:27810/api/shoppinglist/'
  mid: any = 9997;

  constructor(private http: HttpClient) { }

  getShoppingList(): Observable<Shoppinglist[]> {
    return this.http.get<Shoppinglist[]>(this.actionUrl + this.mid);
  }

  deleteItem(shlID: number): any {
    throw new Error("Method not implemented.");
  }
  createItem(newItem: Shoppinglist): any {
    throw new Error("Method not implemented.");
  }
  updateItem(shoppingListItem: Shoppinglist): any {
    throw new Error("Method not implemented.");
  }
}

import {Component, EventEmitter} from 'angular2/core';
import {iListItem} from './list-item';
import {ShoppingListService} from "./shopping-list.service";


@Component ({
    selector: 'my-shopping-list-item',
    template: `

        <div>
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div>
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>
        <button (click)="onDelete()">Delete item</button>
    
    `,
    styles: [`
    
    
    `],
    directives: [],
    inputs: ['item'],
    outputs: ['itemDeleted']
})

export class ShoppingListItemComponent
{
    item = {name: '', amount:0};
    itemDeleted = new EventEmitter<iListItem>();

    constructor(private _shoppingListService: ShoppingListService){}


    onDelete(){
        // this.itemDeleted.emit(this.item);

        this._shoppingListService.deleteItem(this.item);
        this.itemDeleted.emit(null);
    }
}

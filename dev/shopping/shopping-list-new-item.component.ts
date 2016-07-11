import {Component, EventEmitter} from 'angular2/core';
import {ShoppingListService} from "./shopping-list.service";


@Component ({
    selector: 'my-shopping-list-new-item',
    template: `
        <div>
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div>
            <label for="item-amt">Amount</label>
            <input type="text" id="item-amt" [(ngModel)]="item.amount">
        </div>
        <button (click)="onClick()">Add item</button>
    
    `,
    styles: [`
    
    
    `],
    directives: [],
    inputs: [],
    // outputs: ['itemAdded']
    outputs: []
})

export class ShoppingListNewItemComponent
{
    item = {name: '', amount:0};
    // itemAdded = new EventEmitter<{name:string, amount:number}>();

    constructor(private _shoppingListService: ShoppingListService){}

    onClick(){
        // this.itemAdded.emit(this.item);

        // this created two way data binding, --> pass only the values, not the object
        // this._shoppingListService.insertItem(this.item);


        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    }
}

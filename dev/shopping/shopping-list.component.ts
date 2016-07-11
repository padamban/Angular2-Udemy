import {Component, OnInit} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {iListItem} from './list-item';
import {ShoppingListService} from './shopping-list.service';


@Component ({
    selector: 'my-shopping-list',
    template: `
        <hr>
        <section>
            <h4>New item</h4>
            <!--<my-shopping-list-new-item (itemAdded)="onItemAdded($event)"></my-shopping-list-new-item>-->
            <my-shopping-list-new-item ></my-shopping-list-new-item>
        </section>
        <hr>
        <section>
            <h3>My List</h3>
            <div>
                <ul>
                    <li *ngFor="#item of listItems"
                        (click)="onSelect(item)"
                    > {{item.name}}  ({{item.amount}}) </li>
                </ul>
                
            </div>
        </section> 
        <hr>
        <section *ngIf="selectedItem != null">
            Edit Items
            <!--<my-shopping-list-item [item]="selectedItem" (itemDeleted)="onRemove($event)" ></my-shopping-list-item>-->
            <my-shopping-list-item [item]="selectedItem" (itemDeleted)="onRemove()" ></my-shopping-list-item>

        </section> 
    `,
    styles: [`
    
    
    `],
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    inputs: [],
    outputs: [],
    providers: [ShoppingListService]
})

export class ShoppingListComponent implements OnInit
{
    // listItems = new Array<{name:string, amount:number}>();
    // selectedItem: {name:string, amount:number};

    // listItems = new Array<iListItem>();
    listItems: Array<iListItem>;
    selectedItem: iListItem;

    constructor(
        private _shoppingListService: ShoppingListService
    ){};

    ngOnInit():any{
        this.listItems = this._shoppingListService.getItems();
    }


    onSelect(item: iListItem){
        this.selectedItem = item;
    }



    onRemove(item: iListItem) {
        this.selectedItem=null;
    }

    // onItemAdded(item: iListItem){
    //     // passing only the inner data, and not the object... to avoid two way data binding
    //     this.listItems.push({name:item.name, amount:item.amount});
    // }


}

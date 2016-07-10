import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {iListItem} from './list-item';


@Component ({
    selector: 'my-shopping-list',
    template: `
        <hr>
        <section>
            <h4>New item</h4>
            <my-shopping-list-new-item (itemAdded)="onItemAdded($event)"></my-shopping-list-new-item>
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
            <my-shopping-list-item [item]="selectedItem" (itemDeleted)="onRemove($event)" ></my-shopping-list-item>

        </section> 
    `,
    styles: [`
    
    
    `],
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
    inputs: [],
    outputs: []
})

export class ShoppingListComponent
{
    // listItems = new Array<{name:string, amount:number}>();
    // selectedItem: {name:string, amount:number};

    listItems = new Array<iListItem>();
    selectedItem: iListItem;

    onItemAdded(item: iListItem){
        // passing only the inner data, and not the object... to avoid two way data binding
        this.listItems.push({name:item.name, amount:item.amount});
    }

    onSelect(item: iListItem){
        this.selectedItem = item;
    }

    onRemove(item: iListItem) {
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem=null;
    }


}

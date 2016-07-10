import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';


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
                    <li *ngFor="#item of listItems"> {{item.name}}  ({{item.amount}}) </li>
                </ul>
                
            </div>
        </section> 
        <hr>
        <section>
            Edit Items
        </section> 
    `,
    styles: [`
    
    
    `],
    directives: [ShoppingListNewItemComponent],
    inputs: [],
    outputs: []
})

export class ShoppingListComponent
{
    listItems = new Array<{name:string, amount:number}>();

    onItemAdded(item: {name:string, amount:number}){
        // passing only the inner data, and not the object... to avoid two way data binding
        this.listItems.push({name:item.name, amount:item.amount});
    }
}

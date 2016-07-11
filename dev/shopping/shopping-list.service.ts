import {Injectable} from 'angular2/core';
import {iListItem} from './list-item';
import {shopping_list} from "./mock-shopping-list";


@Injectable()

export class ShoppingListService{
    getItems(){
        return shopping_list;
    }
    
    insertItem(item: iListItem){
        shopping_list.push(item);
    }
    deleteItem(item: iListItem){
        shopping_list.splice(shopping_list.indexOf(item), 1);
    }

}
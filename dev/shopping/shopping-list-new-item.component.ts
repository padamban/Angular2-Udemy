import {Component, EventEmitter, OnInit} from 'angular2/core';
import {ShoppingListService} from "./shopping-list.service";
import {ControlGroup, FormBuilder, Validators, Control} from "angular2/common";


@Component ({
    selector: 'my-shopping-list-new-item',
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="item-name">Name</label>
                <input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
            </div>
            <div>
                <label for="item-amt">Amount</label>
                <input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
            </div>
            <button type="submit"  [disabled]="!myForm.valid">Add item</button>
        </form>


       
    
    `,
    styles: [`
    
    
    `],
    directives: [],
    inputs: [],
    // outputs: ['itemAdded']
    outputs: []
})

export class ShoppingListNewItemComponent implements OnInit
{
    myForm: ControlGroup;
    item = {name: '', amount:0};

    // itemAdded = new EventEmitter<{name:string, amount:number}>();
    // constructor(private _shoppingListService: ShoppingListService){}

    constructor(
        private _shoppingListService: ShoppingListService,
        private _formBuilder: FormBuilder
    ){}

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'itemName': ['', Validators.required],
            'itemAmount': ['', Validators.compose([
                Validators.required,
                greaterThanZero
            ])],
        })
    }

    onSubmit(){
        // this.itemAdded.emit(this.item);
        // this created two way data binding, --> pass only the values, not the object
        // this._shoppingListService.insertItem(this.item);

        this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
    

    }
}

// Custom validator
function greaterThanZero(control:Control):{[s: string]:boolean}{
    if(control.value <= 0){
        return {notEnoug:true};
    }
}
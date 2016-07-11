
import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component ({
    selector: "my-C2",
    template: `
        <h4>Hello C2</h4>
        <button (click)="onNavigate()"> Take me to Component 1 </button>
    `
})

export class C2Component {
    constructor(private _router:Router){}

    onNavigate(){
        this._router.navigate(['Comp1', {source: 'Component 2'}]);
    }
}
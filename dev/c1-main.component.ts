
import {Component} from 'angular2/core';
import {Router} from "angular2/router";

@Component ({
    selector: "my-C1main",
    template: `
   
        <h4>Hello Main</h4>
    `
})

export class Comp1MainComponent {
    constructor(private _router:Router){}

    onNavigate(){
        this._router.navigate(['Comp1', {source: 'Component 2'}]);
    }
}
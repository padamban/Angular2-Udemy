
import {Component} from 'angular2/core';
import {Router, CanDeactivate, ComponentInstruction} from "angular2/router";

@Component ({
    selector: "my-C2",
    template: `
        <h4>Hello C2</h4>
        <button (click)="onNavigate()"> Take me to Component 1 </button>
    `
})

export class C2Component implements CanDeactivate{
    constructor(private _router:Router){}

    onNavigate(){
        this._router.navigate(['Comp1', {source: 'Component 2'}]);
    }


    routerCanDeactivate(nextInstruction: ComponentInstruction, prevInstruction:ComponentInstruction):any {
        return confirm("Sure?");
    }
}
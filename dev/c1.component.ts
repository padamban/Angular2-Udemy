
import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {Comp1SubComponent} from "./c1-sub.component";
import {Comp1MainComponent} from "./c1-main.component";

@Component ({
    selector: "my-C1",
    template: `
        <h4>Hello C1</h4>
        <div>
            Came from: {{source}}
        </div> 
        <div>
            Optional parameter: {{optional}}
        </div>
        <br>
        <div><a [routerLink]="['Comp1Main']">Main</a></div>
        <div><a [routerLink]="['Comp1Sub']">Sub</a></div>

        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', name:'Comp1Main', component: Comp1MainComponent, useAsDefault:true},
    {path: '/subroute', name:'Comp1Sub', component: Comp1SubComponent}
])

export class C1Component implements OnInit{
    source:string;
    optional:string;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit():any{
        this.source = this._routeParams.get('source');
        this.optional = this._routeParams.get('optional');
    }
}
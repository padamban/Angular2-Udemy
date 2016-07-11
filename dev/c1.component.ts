
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component ({
    selector: "my-C1",
    template: `
        <h4>Hello C1</h4>
        <div>
            Came from: {{source}}
        </div>

    `
})

export class C1Component implements OnInit{
    source:string;

    constructor(private _routeParams: RouteParams) {}

    ngOnInit():any{
        this.source = this._routeParams.get('source');
    }
}
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {C1Component} from "./c1.component";
import {C2Component} from "./c2.component";

@Component({
    selector: 'my-app',
    template: `
            <header>
                <ul>
                    <li><a [routerLink]="['Comp1', {source:'AppComponent', optional: 'This is optional'}]">Component 1</a></li>
                    <li><a [routerLink]="['Comp2']">Component 2</a></li>
</ul>
</header>
            <!-- it can be only one router outlets in one file-->
           <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
                    // parameter
    {path:'/component-1/:source', name:'Comp1', component: C1Component},
    {path:'/component-2', name:'Comp2', component: C2Component}
])

export class AppComponent {

}
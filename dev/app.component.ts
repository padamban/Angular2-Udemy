import {Component} from 'angular2/core';
import {TestComponent} from "./test.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>App (root) component</h1>
        <p>Here comes the child component...</p>
        <my-test></my-test>
        `,
    directives: [TestComponent], // for declaring all costum componenets
})
export class AppComponent {

}
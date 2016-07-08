import {Component} from 'angular2/core';
import {Input} from 'angular2/core';


@Component({
    selector: 'my-propertyBinding',
    template: `
        <h2>This is the child component.</h2>
        <p>Hey {{propName}}, you are {{age}} years old. And you are {{gender}}.</p>
        
    `,
    inputs: ['propName', 'age:propAge']
})

export class PropertyBindingComponent {
    propName = '';                      // the element property name must be the same as the variable name
    age = '';                           // used as an alias, this is the way we can have different element property name
    @Input('propGender') gender = '';   // with Input decorator, maybe it is easier to see witch input is binded
}

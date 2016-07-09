import {Component} from 'angular2/core';
import {AttributeDirectivesComponent} from './attribute-directives.component';
import {StructuralDirectivesComponent} from './structural-directives.component';

@Component({
    selector: 'my-app',
    template: `
            <h2>Attribute directives</h2>
            <my-attribute-directives></my-attribute-directives> 
            
            <br>
            
            <h2>Structural directives</h2>
            <my-structural-directives></my-structural-directives>
        `,
    directives: [AttributeDirectivesComponent, StructuralDirectivesComponent]
})
export class AppComponent {

}
import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component ({
    selector: 'my-attribute-directives',
    template: `
        <div myHighlight [highlightColor]="'red'" >
            Highlight me
        </div>
        <br>
        <br>
        <div myHighlight [highlightColor]="'yellow'">
            Highlight me too
        </div>        
    `,
    styles: [`
    
    
    `],
    directives: [HighlightDirective],
    inputs: [],
    outputs: []
})

export class AttributeDirectivesComponent
{

}

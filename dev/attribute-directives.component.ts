import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component ({
    selector: 'my-attribute-directives',
    template: `
        <br>
        <br>
        <div myHighlight [highlightColor]="'red'" >
            Highlight me
        </div>
        <br>
        <br>
        <div myHighlight [highlightColor]="'yellow'">
            Highlight me too
        </div>    
        <br>
        <br>
        <div myHighlight >
            Highlight me too too
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


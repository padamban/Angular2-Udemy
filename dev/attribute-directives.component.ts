import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component ({
    selector: 'my-attribute-directives',
    template: `
        <br>
        <div myHighlight [highlightColor]="'red'" >
            Highlight me
        </div>
        <br>
        <div myHighlight [highlightColor]="'yellow'">
            Highlight me too
        </div>    
        <br>
        <div myHighlight >
            Highlight me too too
        </div>  
        <br><br><br>
    `,
    directives:[HighlightDirective]
})

export class AttributeDirectivesComponent
{

}


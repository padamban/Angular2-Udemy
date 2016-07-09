import {Component} from 'angular2/core';


@Component ({
    selector: 'my-structural-directives',
    template: `
        <section class="directive">
            
            <div>
                Enter a number higher than 10: 
                <input type="text" #number (keyup)="0">
            </div>
            <br>
            
            <h4>*ngIf</h4>
            <div *ngIf="number.value > 10" >Number is greater than 10.</div>
            
            <br><br>
            
       
    
    `,
    styles: [``],
    directives: [],
    inputs: [],
    outputs: []
})

export class StructuralDirectivesComponent
{

}

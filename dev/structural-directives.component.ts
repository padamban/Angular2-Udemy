import {Component} from 'angular2/core';
import {UnlessDirective} from './unless.directive';


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
            
            
            
            <h4>*ngFor</h4>
            <div >
                <!-- maybe '#...' will be 'let ...' in the future-->
                <ul *ngFor="#item of list">
                    <li>{{item}}</li>
                </ul>
                <br>
                <ul *ngFor="#item of list, #i=index">
                    <li>{{i+1}} {{item}}</li>
                </ul>
            </div>
            
            
            
            <br><br>
            
            
            <h4>[ngSwitch]</h4>
            <!--It uses squere brakets because it doesnt changes the DOM, ... the * signals change in the DOM-->
            <div >
                Enter red, blue or green:           
                <input type="text" #color (keyup)="0">   <!-- dummy event to update the ui-->
                <br>
                <div [ngSwitch]="color.value">
                   <template [ngSwitchWhen]="'red'"> The color is RED.</template>
                   <template [ngSwitchWhen]="'blue'"> The color is BLUE.</template>
                   <template [ngSwitchWhen]="'green'"> The color is GREEN.</template>
                   <template ngSwitchDefault> Don't know that color.</template>
                </div>
            </div>
            
            
            <br><br>
            
            
            <h4>Making a custom directive: *myUnless</h4>
            <div >
                 Enter true or false: 
                 <input type="text" #condition (keyup)="0">
            </div>
            <div *myUnless="condition.value != 'false'">
                 Showed because it is FALSE. 
                 
            </div>   
            
        </section>
        
        
    `,
    directives: [UnlessDirective]
})


export class StructuralDirectivesComponent
{
    list = ['Apple', 'Milk', 'Bread', 'Egg'];
}

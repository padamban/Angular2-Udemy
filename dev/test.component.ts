import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'; //life cycle phase hook..
import {Test2Component} from './test2.component';

@Component({  // curly braces -> javascript object
    selector: 'my-test',
    template:`
                 My test component, {{testVariable}} <br><br>
                Enable button: 
                <span [class.answer-yes]="inputElement.value === 'yes'">Yes</span> 
                <!--<span [class.answer-yes]="true">Yes</span> -->
                or 
                <span [class.answer-no]="inputElement.value === 'no'">No</span>
                ?<br>
                <input type="text" #inputElement (keyup)="0"> <!-- #variableName -> bounds the input field-->
                <button [disabled]="inputElement.value !== 'yes'"> Button</button> <!-- angular 2 attribute directive []-->
                <!--()events, []changing the element-->
                <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>
                <br><br>
                <my-test2>hello</my-test2>
                hello
            `,
    styleUrls: ['src/css/test.component.css'],
    directives: [Test2Component]
})


export class TestComponent implements OnInit{
    testVariable = 'my variable';
    // name = 'John Travolta';
    name:string; // declared, without a value

    ngOnInit():any{
        this.name = 'John Travolta';
        return null;
    }

}
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        hello <br>
        
        <!--STING INTERPOLATION--> <br><br>STING INTERPOLATION<br>
        {{StringInterpolation}} <br>
        {{1 == 1}} <br>
        {{varName}} <br>
        {{onTest()}} <br>
        <input type="text" value="{{varName}}" class="{{'red'}}"> <br>
        
        <!--PROPERTY BINDING--> <br><br>PROPERTY BINDING<br>
        <input type="text" [value]="varName" [ngClass]="'red'"> <br> 
        <input type="text" [value]="varName" [ngClass]="'red'"> <br> 
        <input type="text" [value]="varName" [ngClass]="{blue:true}" [disabled]="1===1" > <br> 
        
        <!--EVENT BINDING--> <br><br>EVENT BINDING<br>
        <input type="text" #inputElement (keyup)="onKeyupTest(inputElement.value)"> <br> 
        <p>{{varValues}}</p>
        
        <!-- TWO WAY BINDING--> <br><br>TWO WAY BINDING<br>
        <input type="text" [(ngModel)]="varSurname"> <br> 
        <input type="text" [value]="varSurname"> <br> 
        <p>{{varSurname}}</p>
        `,
    styles: [`
        .red{
            background-color: #f54747;
            color: #5e001f;
        }  
        .blue{
            background-color: #00cc99;
            color: #0000AA;
        }
    `]
})
export class AppComponent {
    varName = "Joe";
    varSurname = "Joe";
    varValues = "";

    onTest(){
        return "function";
    }

    onKeyupTest(value: string){
        this.varValues += value + ' | ';
    }
}

// DATA BINDING /////////////////////////////////////////////////
//
//  Unidirectional
//    Changing the element:
//      {{}}    STRING INTERPOLATION, to manipulate the dom
//      []      PROPERTY BINDING, to a default property or a angular directive (angular 2 specific)
//    Reacting to changes in the element
//      ()      EVENT BINDING
//
//
//  Bidirectional
//      [()]    TWO WAY BINDING, allways uses ngModel
//                      ngModel: automatically changes the specified variable in other places where it was
//                          string interpolated or property binded
//

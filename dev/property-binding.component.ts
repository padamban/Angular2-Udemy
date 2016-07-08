import {Component} from 'angular2/core';
import {Input} from 'angular2/core';
import {EventEmitter} from 'angular2/core';


@Component({
    selector: 'my-propertyBinding',
    template: `
        <!--DATA COMMING IN-->
        <h2>This is the child component.</h2>
        <p>Hey Parent {{propName}}, you are {{age}} years old. And you are {{gender}}.</p>
       
       
        <!--DATA GOING OUT-->
        <p>
            Do you like 
            <input type="text" (keyup)="onLikeChanged(like.value)" #like>  <!-- like.value  =  $event.target.value -->
            ?
        </p> 
    `,
    inputs: ['propName', 'age:propAge'],
    outputs: ['likeChangedEE']
})

export class PropertyBindingComponent {

    propName = '';                      // the element property name must be the same as the variable name
    age = '';                           // used as an alias, this is the way we can have different element property name
    @Input('propGender') gender = '';   // with Input decorator, maybe it is easier to see witch input is binded



    likeChangedEE = new EventEmitter<string>(); //check the string value of 'myLike' for changes
    onLikeChanged(myLike: string){
        this.likeChangedEE.emit(myLike);
    }

}
// more info: udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/4523258





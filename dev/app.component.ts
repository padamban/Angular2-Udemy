import {Component} from 'angular2/core';
import {PropertyBindingComponent} from './property-binding.component';


@Component({
    selector: 'my-app',
    template: `
        <section class="parent">
            <h1>App (root) component</h1>
            <p>Here comes the child component...</p><br>
            
                        
            <!--DATA GOING TO CHILD-->
            <input type="text" [(ngModel)]="varName">
            <input type="text" [(ngModel)]="varAge">
            <input type="text" [(ngModel)]="varGender">
            
            
            <section class="child">
                <my-propertyBinding 
                    [propName]="varName"
                    [propAge]="varAge"
                    [propGender]="varGender"
                    
                    
                    (likeChangedEE)="varLike=$event"
                     
                     
                ></my-propertyBinding>
            </section>
            
            
                      
            <!--DATA COMING FROM CHILD-->
            <p>No I don't like {{varLike}}</p>
            
        </section>
        `,
    styles:[
        `
            .parent {
                border: 1px solid black;
                background-color: #B8B8B8;
                padding:10px;
            }
            .child{
                border: 1px solid #5e001f;
                background-color: #fc8c84;
                padding:10px;
            }
        `
    ],
    directives: [PropertyBindingComponent]
})
export class AppComponent {
    varName = 'Joe';
    varAge = '34';
    varGender = 'male';

    varLike = '...';
//    
}



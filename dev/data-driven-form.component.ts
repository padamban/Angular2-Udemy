import {Component, OnInit} from "angular2/core"
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";

@Component({
    selector: "my-data-driven",
    template:`
        <h4> Sign-up form (data driven)</h4>
                <!-- over rides the template driven approach-->
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(f)">
            
            <label for="mail">Mail</label> <br>
            <input [ngFormControl]="myForm.controls['email']"  type="text" id="mail" required #myMail="ngForm">  <!-- required:  HTML5 stuff for modern browsers-->
            <span *ngIf="!myMail.valid">Not valid!</span> <br>
            
            <label for="password">Password</label> <br>
            <input [ngFormControl]="myForm.controls['pw']" type="text" id="password" required #myPw="ngForm"> 
            <span *ngIf="!myPw.valid">Not valid!</span> <br>
           
            <label for="confirm-password">Confirm</label> <br>
            <input [ngFormControl]="myForm.controls['pwconf']" type="text" id="confirm-password" required #myPwconf="ngForm"> 
            <span *ngIf="!myPwconf.valid">Not valid!</span> <br>

            <button type="submit" >Submit</button> <br>
        </form>
        <div>
             <h2> Congratulations!</h2>  <br>
             <div>Mail: {{user.email}}</div>   <br>
             <div>Password: {{user.pw}}</div>   <br>
        
        </div>
        `

})


// advantage: creation of custom validation logic
export class DataDrivenFormComponent implements OnInit{
    myForm: ControlGroup;
    user = {email:'', pw:'' };
    constructor(private _formBuilder: FormBuilder) {}

    onSubmit(form){
        console.log(this.myForm);

        // this.user.email = this.myForm.value['mail'];
        // this.user.password = this.myForm.controls['pw'].value;

        this.user = this.myForm.value;
        console.log( this.myForm.value);
    }

    ngOnInit():any{
        this.myForm = this._formBuilder.group({
            //defult value, validation logic
            'email':['', Validators.required],
            // 'pw':['', Validators.required],
            'pw':['', Validators.compose([
                Validators.required,
                hasNumbers
            ])],
            'pwconf':['', Validators.required],
        });
    }
}

function hasNumbers(control: Control):{[s:string]:boolean}{
    if(!control.value.match('\\d+')){
        return {noNumbers: true};
    }
}
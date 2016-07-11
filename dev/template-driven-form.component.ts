import {Component} from "angular2/core"

@Component({
    selector: "my-template-driven",
    template:`
        <h2> Sign-up form </h2>
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            
            <label for="mail">Mail</label> <br>
            <input  ngControl="email" type="text" id="mail" required #email="ngForm">  <!-- required:  HTML5 stuff for modern browsers-->
            <span *ngIf="!email.valid">Not valid!</span> <br>
            
            <label for="password">Password</label> <br>
            <input ngControl="pw" type="text" id="password" required #pw="ngForm"> 
            <span *ngIf="!pw.valid">Not valid!</span> <br>
           
            <label for="confirm-password">Confirm</label> <br>
            <input ngControl="pw-conf" type="text" id="confirm-password" required #pwconf="ngForm"> 
            <span *ngIf="!pwconf.valid">Not valid!</span> <br>

            <button type="submit" [disabled]="!f.valid || pw.value !== pwconf.value">Submit</button> <br>
        </form>
        <div>
             <h2> Congratulations!</h2>  <br>
             <div>Mail: {{user.mail}}</div>   <br>
             <div>Password: {{user.password}}</div>   <br>
        
        </div>
        `

})

export class TemplateDrivenFormComponent{
    user = {mail:'', password:'' };

    onSubmit(form){
        this.user.mail = form.value['email'];
        this.user.password = form.controls['pw'].value;
        // console.log(user);

        // console.log(form);
        // console.log(form.value);



    }


}
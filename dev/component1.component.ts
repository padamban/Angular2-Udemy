import {Component} from 'angular2/core'
import {LoggingService} from './services/logging.service'
import {CalculatorService} from './services/calculator.service'


@Component ({
    selector: 'my-component1',
    template: `
        <div>
            <h1>Logging Service</h1>
             <input type="text" #message>
             <button (click)="onLog(message.value)">Send</button>
        </div>
         <div>
            <h1>Calculator Service</h1>
             <p>Add or multiply two numbers:</p>
             <input type="text" #num1>
             <input type="text" #num2>
             <br>
             <button (click)="onAdd(num1.value, num2.value)">Add</button>
             <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
             <br>
             <p>Result: {{result}}</p>
         </div>
       
      
        
    `,
    providers: [CalculatorService] // if you want an own instance
    // providers: [LoggingService] // if you want an own instance
})

export class Component1Component
{
    result:string;
    //injection happends with the constructor
    constructor(
        private _loggingService: LoggingService,
        private _calculatorService: CalculatorService
    ){}

    onLog(message:string) {
        this._loggingService.log(message)
    }

    onMultiply(num1:number, num2:number){
        this.result = '' + this._calculatorService.multiply(+num1, +num2);

    }
    onAdd(num1:number, num2:number){
                    //convert  to string            //convert to number
        this.result = '' + this._calculatorService.add(+num1, +num2);
    }
}

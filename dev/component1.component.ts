import {Component} from 'angular2/core'
import {LoggingService} from './services/logging.service'


@Component ({
    selector: 'my-component1',
    template: `
        <input type="text" #message>
        <button (click)="onLog(message.value)">Send</button>
      
        
    `,
    // providers: [LoggingService] // if you want an own instance
})

export class Component1Component
{
    //injection happends with the constructor
    constructor(private _loggingService: LoggingService){}

    onLog(message:string) {
        this._loggingService.log(message)
    }
}

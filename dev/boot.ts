///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {LoggingService} from "./services/logging.service";


                        // set the providers(services) here
                        // all child can use this instance
bootstrap(AppComponent, [LoggingService]);
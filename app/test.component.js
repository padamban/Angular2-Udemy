System.register(['angular2/core', './test2.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test2_component_1;
    var TestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test2_component_1_1) {
                test2_component_1 = test2_component_1_1;
            }],
        execute: function() {
            TestComponent = (function () {
                function TestComponent() {
                    this.testVariable = 'my variable';
                }
                TestComponent.prototype.ngOnInit = function () {
                    this.name = 'John Travolta';
                    return null;
                };
                TestComponent = __decorate([
                    core_1.Component({
                        selector: 'my-test',
                        template: "\n                 My test component, {{testVariable}} <br><br>\n                Enable button: \n                <span [class.answer-yes]=\"inputElement.value === 'yes'\">Yes</span> \n                <!--<span [class.answer-yes]=\"true\">Yes</span> -->\n                or \n                <span [class.answer-no]=\"inputElement.value === 'no'\">No</span>\n                ?<br>\n                <input type=\"text\" #inputElement (keyup)=\"0\"> <!-- #variableName -> bounds the input field-->\n                <button [disabled]=\"inputElement.value !== 'yes'\"> Button</button> <!-- angular 2 attribute directive []-->\n                <!--()events, []changing the element-->\n                <span [style.color]=\"inputElement.value === 'yes' ? 'red' : ''\">{{name}}</span>\n                <br><br>\n                <my-test2>hello</my-test2>\n                hello\n            ",
                        styleUrls: ['src/css/test.component.css'],
                        directives: [test2_component_1.Test2Component]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TestComponent);
                return TestComponent;
            }());
            exports_1("TestComponent", TestComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUNJLGlCQUFZLEdBQUcsYUFBYSxDQUFDO2dCQVNqQyxDQUFDO2dCQUxHLGdDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7b0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBL0JMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFNBQVM7d0JBQ25CLFFBQVEsRUFBQyx1M0JBZUE7d0JBQ1QsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7d0JBQ3pDLFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7cUJBQy9CLENBQUM7O2lDQUFBO2dCQWFGLG9CQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCx5Q0FVQyxDQUFBIiwiZmlsZSI6InRlc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7IC8vbGlmZSBjeWNsZSBwaGFzZSBob29rLi5cclxuaW1wb3J0IHtUZXN0MkNvbXBvbmVudH0gZnJvbSAnLi90ZXN0Mi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7ICAvLyBjdXJseSBicmFjZXMgLT4gamF2YXNjcmlwdCBvYmplY3RcclxuICAgIHNlbGVjdG9yOiAnbXktdGVzdCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgICAgICAgICAgTXkgdGVzdCBjb21wb25lbnQsIHt7dGVzdFZhcmlhYmxlfX0gPGJyPjxicj5cclxuICAgICAgICAgICAgICAgIEVuYWJsZSBidXR0b246IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzLmFuc3dlci15ZXNdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPlllczwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICA8IS0tPHNwYW4gW2NsYXNzLmFuc3dlci15ZXNdPVwidHJ1ZVwiPlllczwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgICAgICBvciBcclxuICAgICAgICAgICAgICAgIDxzcGFuIFtjbGFzcy5hbnN3ZXItbm9dPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAnbm8nXCI+Tm88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA/PGJyPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2lucHV0RWxlbWVudCAoa2V5dXApPVwiMFwiPiA8IS0tICN2YXJpYWJsZU5hbWUgLT4gYm91bmRzIHRoZSBpbnB1dCBmaWVsZC0tPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPiBCdXR0b248L2J1dHRvbj4gPCEtLSBhbmd1bGFyIDIgYXR0cmlidXRlIGRpcmVjdGl2ZSBbXS0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSgpZXZlbnRzLCBbXWNoYW5naW5nIHRoZSBlbGVtZW50LS0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJydcIj57e25hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgICA8bXktdGVzdDI+aGVsbG88L215LXRlc3QyPlxyXG4gICAgICAgICAgICAgICAgaGVsbG9cclxuICAgICAgICAgICAgYCxcclxuICAgIHN0eWxlVXJsczogWydzcmMvY3NzL3Rlc3QuY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW1Rlc3QyQ29tcG9uZW50XVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgdGVzdFZhcmlhYmxlID0gJ215IHZhcmlhYmxlJztcclxuICAgIC8vIG5hbWUgPSAnSm9obiBUcmF2b2x0YSc7XHJcbiAgICBuYW1lOnN0cmluZzsgLy8gZGVjbGFyZWQsIHdpdGhvdXQgYSB2YWx1ZVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55e1xyXG4gICAgICAgIHRoaXMubmFtZSA9ICdKb2huIFRyYXZvbHRhJztcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

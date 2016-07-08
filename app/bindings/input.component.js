System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submittedEE = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    // JS: regular expression as object
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    console.log("on submit");
                    this.submittedEE.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n        <h1>Your details, please...</h1>\n        <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n    ",
                        styles: [
                            " \n            button {\n                padding: 4px 8px;\n                border: 1px solid #ccc;\n                background-color: transparent;\n                border-radius: 3px;\n                cursor: default;\n            }\n            button:not([disabled]) {\n                cursor:pointer;\n            }\n            button:not([disabled]):hover {\n                background-color: #f54747;\n                color: white;\n            }\n        "
                        ],
                        inputs: ['myself'],
                        outputs: ['submittedEE']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTRDQTtnQkFBQTtvQkFDSSxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztvQkFDN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQTZCLENBQUM7Z0JBc0JoRSxDQUFDO2dCQXBCRyxnQ0FBTyxHQUFQO29CQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO3dCQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDekIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDMUIsQ0FBQztvQkFDK0IsbUNBQW1DO29CQUNuRSxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3pCLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFoRUw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsVUFBVTt3QkFDbkIsUUFBUSxFQUFDLGtuQkFlUjt3QkFDRCxNQUFNLEVBQUM7NEJBQ0gsaWRBZUM7eUJBQ0o7d0JBQ0QsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO3dCQUNsQixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQzNCLENBQUM7O2tDQUFBO2dCQTZCRixxQkFBQztZQUFELENBMUJBLEFBMEJDLElBQUE7WUExQkQsMkNBMEJDLENBQUEiLCJmaWxlIjoiYmluZGluZ3MvaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidteS1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGgxPllvdXIgZGV0YWlscywgcGxlYXNlLi4uPC9oMT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XHJcbiAgICAgICAgPGRpdj5WYWxpZDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIHN0eWxlczpbXHJcbiAgICAgICAgYCBcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTQ3NDc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgXHJcbiAgICBdLFxyXG4gICAgaW5wdXRzOiBbJ215c2VsZiddLFxyXG4gICAgb3V0cHV0czogWydzdWJtaXR0ZWRFRSddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcclxuICAgIG15c2VsZiA9IHtuYW1lOiAnJywgYWdlOiAnJ307XHJcbiAgICBpc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgc3VibWl0dGVkRUUgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOnN0cmluZywgYWdlOnN0cmluZ30+KCk7XHJcblxyXG4gICAgb25LZXl1cCgpe1xyXG4gICAgICAgIGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKUzogcmVndWxhciBleHByZXNzaW9uIGFzIG9iamVjdFxyXG4gICAgICAgIGlmICggdGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib24gc3VibWl0XCIpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkRUUuZW1pdCh0aGlzLm15c2VsZik7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

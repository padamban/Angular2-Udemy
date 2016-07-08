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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '...', age: '...' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmedEE = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmedEE.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n        <h1>You submited the following details. Is this correct?</h1>\n        <p>Your name is {{myself.name}}, and you are age is {{myself.age}}.</p><br>\n        <p>If not: change it and confirm...</p>\n         <div>\n            <label for=\"name\">Your Name</label>\n            <input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n        </div>\n        <div>\n            <label for=\"age\">Your Age</label>\n            <input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n        </div>\n        <br>\n        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>\n        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>\n        <br>\n        <button [disabled]=\"!isValid\" (click)=\"onConfirm($event)\">Submit</button>\n    ",
                        styles: [
                            " \n            button {\n                padding: 4px 8px;\n                border: 1px solid #ccc;\n                background-color: transparent;\n                border-radius: 3px;\n                cursor: default;\n            }\n            button:not([disabled]) {\n                cursor:pointer;\n            }\n            button:not([disabled]):hover {\n                background-color: #f54747;\n                color: white;\n            }\n        "
                        ],
                        inputs: ['myself'],
                        outputs: ['confirmedEE']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBK0NBO2dCQUFBO29CQUNJLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBQyxDQUFDO29CQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBNkIsQ0FBQztnQkFvQmhFLENBQUM7Z0JBbEJHLGtDQUFPLEdBQVA7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7d0JBQ2pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN6QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDO29CQUNELG1DQUFtQztvQkFDbkMsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQzFELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUN4QixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUN6QixDQUFDO2dCQUNMLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBbEVMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLFlBQVk7d0JBQ3JCLFFBQVEsRUFBQyw2eEJBaUJSO3dCQUNELE1BQU0sRUFBQzs0QkFDSCxpZEFlQzt5QkFDSjt3QkFDRCxNQUFNLEVBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ2pCLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsQ0FBQzs7b0NBQUE7Z0JBNEJGLHVCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCwrQ0F3QkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9jb25maXJtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbXktY29uZmlybScsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGgxPllvdSBzdWJtaXRlZCB0aGUgZm9sbG93aW5nIGRldGFpbHMuIElzIHRoaXMgY29ycmVjdD88L2gxPlxyXG4gICAgICAgIDxwPllvdXIgbmFtZSBpcyB7e215c2VsZi5uYW1lfX0sIGFuZCB5b3UgYXJlIGFnZSBpcyB7e215c2VsZi5hZ2V9fS48L3A+PGJyPlxyXG4gICAgICAgIDxwPklmIG5vdDogY2hhbmdlIGl0IGFuZCBjb25maXJtLi4uPC9wPlxyXG4gICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLm5hbWVcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImFnZVwiPllvdXIgQWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhZ2VcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5hZ2VcIiAoa2V5dXApPVwib25LZXl1cCgpXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxkaXY+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XHJcbiAgICAgICAgPGRpdj5WYWxpZDoge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzVmFsaWRcIiAoY2xpY2spPVwib25Db25maXJtKCRldmVudClcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6W1xyXG4gICAgICAgIGAgXHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU0NzQ3O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYFxyXG4gICAgXSxcclxuICAgIGlucHV0czpbJ215c2VsZiddLFxyXG4gICAgb3V0cHV0czogWydjb25maXJtZWRFRSddXHJcbn0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50e1xyXG4gICAgbXlzZWxmID0ge25hbWU6ICcuLi4nLCBhZ2U6ICcuLi4nfTtcclxuICAgIGlzRmlsbGVkID0gZmFsc2U7XHJcbiAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICBjb25maXJtZWRFRSA9IG5ldyBFdmVudEVtaXR0ZXI8e25hbWU6c3RyaW5nLCBhZ2U6c3RyaW5nfT4oKTtcclxuXHJcbiAgICBvbktleXVwKCl7XHJcbiAgICAgICAgaWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBKUzogcmVndWxhciBleHByZXNzaW9uIGFzIG9iamVjdFxyXG4gICAgICAgIGlmICggdGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbmZpcm0oKXtcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZEVFLmVtaXQodGhpcy5teXNlbGYpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

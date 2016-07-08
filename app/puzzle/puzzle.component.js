System.register(['angular2/core'], function(exports_1, context_1) {
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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    // this.switch1Number = 1;
                    // this.switch2Number = 0;
                    // this.switch3Number = 1;
                    // this.switch4Number = 1;
                    console.log(this.switch1Number, this.switch2Number, this.switch3Number, this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        templateUrl: 'dev/puzzle/puzzle.component.html',
                        styleUrls: ['dev/puzzle/puzzle.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQUE7Z0JBd0JBLENBQUM7Z0JBbEJHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQywwQkFBMEI7b0JBQzFCLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwwQkFBMEI7b0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQ1AsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FDckIsQ0FBQTtnQkFDTCxDQUFDO2dCQTNCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxXQUFXO3dCQUNyQixXQUFXLEVBQUUsa0NBQWtDO3dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztxQkFDakQsQ0FBQzs7bUNBQUE7Z0JBMEJGLHNCQUFDO1lBQUQsQ0F4QkEsQUF3QkMsSUFBQTtZQXhCRCw2Q0F3QkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2Rldi9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydkZXYvcHV6emxlL3B1enpsZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBzd2l0Y2gxTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gyTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XHJcbiAgICBzd2l0Y2g0TnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnN3aXRjaDFOdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICB0aGlzLnN3aXRjaDROdW1iZXIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIC8vIHRoaXMuc3dpdGNoMU51bWJlciA9IDE7XHJcbiAgICAgICAgLy8gdGhpcy5zd2l0Y2gyTnVtYmVyID0gMDtcclxuICAgICAgICAvLyB0aGlzLnN3aXRjaDNOdW1iZXIgPSAxO1xyXG4gICAgICAgIC8vIHRoaXMuc3dpdGNoNE51bWJlciA9IDE7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoMU51bWJlcixcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyLFxyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaDNOdW1iZXIsXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoNE51bWJlclxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

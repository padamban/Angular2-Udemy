import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';


@Directive ({
    selector: '[myHighlight]', // not related to data binding
    inputs: ['highlightColor'],
    host: {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()'
    }

})

export class HighlightDirective implements OnInit{
    private _defaultColor = 'green';
    highlightColor:string;

    constructor(
        private _elRef:ElementRef,
        private _renderer:Renderer
    ){}


    ngOnInit():any {
        // this._elRef.nativeElement.style.backgroundColor = (this.highlightColor || this._defaultColor);

        // using renderer is more optimized, but it is not working for me
        // this._renderer.setElementStyle(this._elRef, 'background-color', this._defaultColor);
    }

    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string){
        this._elRef.nativeElement.style.backgroundColor = color ;
    }

}

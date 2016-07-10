import {Directive, TemplateRef, ViewContainerRef} from 'angular2/core'


@Directive ({
    selector: '[myUnless]',    // will be attached with *, this is just the declaration
    inputs: ['myUnless']
})

export class UnlessDirective
{
    //_templateRef      --> gives the inner content/text of the attached element
    //_vewContainerRef  --> place where we want to insert in the DOM
    constructor(private _templateRef: TemplateRef, private _vewContainerRef:ViewContainerRef){};

    set myUnless(condition: boolean){
        if (!condition){
            this._vewContainerRef.createEmbeddedView(this._templateRef);
        }else{
            this._vewContainerRef.clear();
        }
    }


}

import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    templateUrl: 'dev/puzzle/puzzle.component.html',
    styleUrls: ['dev/puzzle/puzzle.component.css']
})

export class PuzzleComponent implements OnInit{
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;

    ngOnInit(){
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());
        // this.switch1Number = 1;
        // this.switch2Number = 0;
        // this.switch3Number = 1;
        // this.switch4Number = 1;
        console.log(
            this.switch1Number,
            this.switch2Number,
            this.switch3Number,
            this.switch4Number
        )
    }


}
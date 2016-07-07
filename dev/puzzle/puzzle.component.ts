import {Component} from 'angular2/core';

@Component({
    selector: 'my-puzzle',
    templateUrl: 'dev/puzzle/puzzle.component.html',
    styleUrls: ['dev/puzzle/puzzle.component.css']
})

export class PuzzleComponent {
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;
}
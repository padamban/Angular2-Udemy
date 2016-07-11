import {Pipe, PipeTransform} from "angular2/core";
import {iListItem} from "./shopping/list-item";



@Pipe({
    name:'myFilter'
})
export class FilterPipe implements PipeTransform {
    transform(value: iListItem[], args:string[]):any{
        if (value.length === 0){ return value; }

        let resultArray = [];
        for (let item of value){
            if (item.name.match('^.*' + args[0] + '.*$')){
                resultArray.push(item);
            }
        }
        return resultArray;
    }
}
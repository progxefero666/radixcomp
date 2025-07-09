//src\common\util\modelhelper.ts

import { Option } from "@/common/model/option";
import { TOption, TSelection } from "@/radix/types";

/**
 *  class ModelHelper.getListFromTOptions
 *      provides utility methods to work with model data.
 */
export class ModelHelper {

    public static getOptionsFromList(collection: string[]): Option[] {
        const options: Option[] = [];

        for (const item of collection) {
            const option = new Option(item,item,null,null,null);
            options.push(option);
        }
        return options;
    }

    public static getListFromOptions(collection: Option[]): string[] {
        const options: string[] = [];

        for (const item of collection) {
            const option = item.text; 
            options.push(option);
        }
        return options;
    }    

    public static getListFromTOptions(collection: TOption[]): string[] {
        const options: string[] = [];

        for (const item of collection) {
            const option = item.name; 
            options.push(option);
        }
        return options;
    } 

    public static getElementIndex(collection: Option[],findValue:string): number {
        let index:number = -1;
        if (collection == null || collection.length === 0) {
            return index;
        }
        for (let itemIdx=0;itemIdx<collection.length;itemIdx++) {
            if (collection[itemIdx].id == findValue) {
                index = itemIdx;
                break;
            }
        }
        return index;
    }

    public static getTOptionIndex(collection: TOption[],findValue:string): number {
        let index:number = -1;
        if (collection == null || collection.length === 0) {
            return index;
        }
        for (let itemIdx=0;itemIdx<collection.length;itemIdx++) {
            if (collection[itemIdx].name == findValue) {
                index = itemIdx;
                break;
            }
        }
        return index;
    }    
    //options:TOption[];
    

    public static getListFromTSelection(tselection:TSelection): string[] {
        const list: string[] = [];
        for (const item of tselection.items) {
            list.push(item.id);
        }
        return list;
    }   

    
}// end class
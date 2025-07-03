//src\common\util\modelhelper.ts

import { Option } from "@/common/model/option";

/**
 *  class ModelHelper.getElementIndex
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
    
    
}// end class
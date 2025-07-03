//src\common\util\stringshelper.ts

import { AppConstants } from "@/app_front/appconstants";

/**
 * class StringsHelper.getElementIndex
 */
export class StringsHelper {
    
    //public static readonly SEPARATOR: string = " : ";

    public static equals = (valueA:string,valueB:string|null) => {
        if ((valueB !== null) && 
            (valueB === valueA)) {
            return true;
        }
        return false;
    };

    public static getElementIndex(collection: string[],findValue:string): number {
        let index:number = -1;
        if (collection == null || collection.length === 0) {
            return index;
        }
        for (let itemIdx=0;itemIdx<collection.length;itemIdx++) {
            if (collection[itemIdx] == findValue) {
                index = itemIdx;
                break;
            }
        }
        return index;
    }
    



}//end class
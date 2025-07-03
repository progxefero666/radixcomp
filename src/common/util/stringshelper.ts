//src\common\util\stringshelper.ts

import { AppConstants } from "@/app_front/appconstants";

/**
 * class ShowAlerts.show
 */
export class StringsHelper {
    
    //public static readonly SEPARATOR: string = " : ";

    static getElementIndex(collection: string[]): number {
        let index:number = -1;
        if (collection == null || collection.length === 0) {
            return index;
        }
        for (let itemIdx=0;itemIdx<collection.length;itemIdx++) {
            if (collection[itemIdx] === AppConstants.NOT_DEF) {
                index = itemIdx;
                break;
            }
        }
        return index;
    }
    



}//end class
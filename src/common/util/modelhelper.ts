//src\common\util\modelhelper.ts

import { Option } from "@/common/model/option";

/**
 *  class ModelHelper.getOptionsFromList
 *      provides utility methods to work with model data.
 */
export class ModelHelper {

    public static getOptionsFromList(listStrings: string[]): Option[] {
        const options: Option[] = [];

        for (const item of listStrings) {
            const option = new Option(item,item,null,null,null);
            options.push(option);
        }
        return options;
    }

    public static getListFromOptions(listStrings: Option[]): string[] {
        const options: string[] = [];

        for (const item of listStrings) {
            const option = item.id; 
            options.push(option);
        }
        return options;
    }    

}// end class
//src\common\util\stringshelper.ts

import { AppConstants } from "@/app_front/appconstants";
import { CodeGenConfig } from "@/codegen/cgconfig";

/**
 * class StringsHelper.capitalize
 */
export class StringsHelper {
    
    public static readonly SEP_DP: string = " : ";
    public static readonly SEP_EQUAL: string = " : ";
    public static readonly TAB_4:string = "    ";

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
    
    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static getTabsSpace(countTabs:number): string {
        return CodeGenConfig.TAB_4.repeat(countTabs);
    }

    public static applyTabsToStringBlock(text:string,countTabs:number): string {

        //calculate total identation characters
        let spaceApply:string = "";
        for (let idx=0;idx<countTabs;idx++) {
            spaceApply += CodeGenConfig.TAB_4;
        }

        // apply indentation to each line
        const lines = text.split('\n');
        for (let idx=0;idx<lines.length;idx++) {
            lines[idx] = spaceApply + lines[idx];
        }
  
        return lines.join('\n');
    }
    
    //CodeGenHelper.getStringsJoined
    public static getStringsJoined(values:string[]): string {
        let result: string = "";
        for (let itemIdx=0;itemIdx<values.length;itemIdx++) {
            result+= values[itemIdx];
            if(itemIdx<(values.length-1)) {
                result+= "|";
            }
        }
        return result;   
    }
    



}//end class
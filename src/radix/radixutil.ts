//src\radix\radixutil.ts

import { Option } from "@/common/model/option";

/**
 * RadixUtil is a utility class for Radix components.
 * RadixUtil.getArrayChar
 */
export class RadixUtil {

    public static getArrayChar(char:string, count:number): string[] {
        let arr: string[] = [];
        for(let i=0; i<count; i++) {
            arr.push(char);
        }   
        return arr;
    }
    
}//end class
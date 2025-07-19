
import { useEffect, useRef, useState } from "react";
import { Box,Flex,Text,Grid,Button,IconButton,Tabs} from "@radix-ui/themes";
import { Keyvalue } from "@/common/model/keyvalue";


// template class
//............................................................................
/**
 * class __$Template$__
 */
export class __$Template$__ {
    
    public static readonly DEF: string = "n";

    public field_0: number;
    public field_1: string;
    public field_2: boolean;

    constructor(field_0: number, field_1: string, field_2: boolean) {
        this.field_0 = field_0;
        this.field_1 = field_1;
        this.field_2 = field_2;
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }
    
}//end class

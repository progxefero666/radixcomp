
import { useEffect, useRef, useState } from "react";
import { Box,Flex,Text,Grid,Button,IconButton,Tabs} from "@radix-ui/themes";
import { Keyvalue } from "@/common/model/keyvalue";

// template function
//............................................................................


const _f0_ = async (field_0:string, field_1:boolean) => {   
    
};//end 


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

/*
     new Pattern("^%","%^","/icons/uno"),  
        new Pattern("^¡","¡^","/icons/dos"),
        new Pattern("^<",">^","/icons/tres"),
        new Pattern("^[","]^","/icons/cuatro"),
        new Pattern("^+","+^","/icons/cinco"),
        new Pattern("*^","*^","/icons/seis"),        
        new Pattern("^-","^-","/icons/siete"),
        new Pattern("^:",":^","/icons/ocho")
*/

export class templates {

public static funct_void: string =
`const function_void = (f0:string,f1:boolean) => {

};//end`;

}//end class
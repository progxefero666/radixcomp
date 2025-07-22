//src\codegen\forms\cgformtemp.ts


/**
 * Class CodeGen Form Field Tempaltes
 *    - For One Table Entity
 *    - Use Model Table Definition
 */
export class CodeGenFormTemp {

    public static fieldInputTempRef:string  = `useRef<HTMLInputElement>(null);`;	
    public static fieldSelectTempRef:string = `useRef<HTMLSelectElement>(null);`;

    public static TEMP_TEXT = 
        `<XInputText
            name  		= "_name_"
            label 		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled}
            maxlen 		= {_maxlen_} />`;
    
    public static TEMP_TEXTAREA =
        `<XInputTextArea
            name  		= "_name_"
            label 		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled}
            maxlen 		= {_maxlen_} />`;

    public static TEMP_CHECK = 
        `<InputCheck
            name  		= "_name_"
            label 		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled} />`;


    public static TEMP_SELECT = 
        `<InputSelect	
            name  		= "_name_"
            label		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled} 
            collection 	= {[]} />`;
    
    public static TEMP_NUMBER = 
        `<XInputNumber
            name  		= "_name_"
            label 		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled}
            step 		= {1}	
            isdecimal	= {_isdecimal_}
            format 		= {"_format"} />`;

    public static TEMP_DATE = 
        `<XInputDate
            name  		= "_name_"
            label 		= "_Name_"
            ref 		= {_name_Ref}
            value 		= {_table_._name_}
            readonly	= {readonly}
            disabled	= {disabled} />`;

}//end class

/*
    public static genStatesOld(): string {
        let result: string = `const [inputValues, setInputValues] = \n` +
                CgConfig.TAB_4 + "useState<Map<string,any>>(new Map<string,any>());";
        result += CgConfig.RETx2;
        return result;
    };//end

    public static genUseEffectOld(jsonTable: string): string {
        const jsonCollection = JSON.parse(jsonTable);

        let array_result =  CgConfig.TAB_4 +"const map = new Map<string, any>();"+ CgConfig.RET;
        for (let idx = 0; idx < jsonCollection.fields.length;idx++) {
            if(!jsonCollection.fields[idx].pk) {
                let value: string = "";
                if(jsonCollection.fields[idx].type === XForms.FT_COLLECTION) {
                    value = "collection[0]";
                }
                else if(jsonCollection.fields[idx].type === XForms.FT_CHECK) {
                    value = "false";
                }                
                else {
                    value = "null";
                }
                array_result += CgConfig.TAB_4 +`map.set("` + 
                                jsonCollection.fields[idx].name + `",item.` +
                                jsonCollection.fields[idx].name + ` || ` +
                                value + `);`;
                if( idx < jsonCollection.fields.length - 1) {
                    array_result += CgConfig.CHAR_COMMA;            
                }
                array_result += CgConfig.RET;
            }
        }
        array_result += CgConfig.TAB_4 +`setInputValues(map);`;

             
        let result =  XForms.t_useEffect_start + CgConfig.RET;
        result += array_result+ CgConfig.RET;
        result += XForms.t_useEffect_end + CgConfig.RET;        
        return CodeGenHelper.applyTabsToStringBlock(result,1);
    };//end
    //............................................................................

*/
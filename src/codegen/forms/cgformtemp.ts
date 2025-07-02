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
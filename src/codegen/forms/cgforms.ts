//src\codegen\forms\cgforms.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenConfig } from "@/codegen/kernel/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";


/**
 * 
 */
export class CodeGenForms {

    public static fieldInputTempRef:string  = `useRef<HTMLInputElement>(null);`;	
    public static fieldSelectTempRef:string = `useRef<HTMLSelectElement>(null);`;

    //public static state_disabled:string  = `const [disabled, setDisabled] = useState<boolean>(false);`;
    //public static state_readonly:string  = `const [readonly, setReadonly] = useState<boolean>(false);`;

    public static createForm = (modelTable:ModelTable) => {

        modelTable.fields.forEach((field) => {
            if (!field.pk && !field.fk) {
                console.log(`Normal field Key: ${field.name} (${field.type})`);
            }
            else {
                if (field.pk) {
                    console.log(`Primary Key: ${field.name} (${field.type})`);
                }
                else  {
                    console.log(`Foreign Key: ${field.name} (${field.type})`);
                    if (field.relations) {
                        field.relations.forEach((relation) => {
                            console.log(`Relation: ${relation.table} -> ${relation.field}`);
                        });
                    }
                }
            }
        });//end for

    }//end createForm

}//end class

/*


const [disabled, setDisabled] = useState<boolean>(false);
const [readonly, setReadonly] = useState<boolean>(false);

<XInputText
	name  		= "_name_"
	label 		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled}
	maxlen 		= {_maxlen_} />

<XInputTextArea
	name  		= "_name_"
	label 		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled}
	maxlen 		= {_maxlen_} />
	
<XInputDate
	name  		= "_name_"
	label 		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled} />
	
<InputCheck
	name  		= "_name_"
	label 		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled} />
	
<InputSelect	
	name  		= "_name_"
	label		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled} 
	collection 	= {[]} />
	
<XInputNumber
	name  		= "_name_"
	label 		= "_Name_"
	ref 		= {_name_Ref}
	value 		= {_table_._name_}
	readonly	= {readonly}
	disabled	= {disabled}
	step 		= {1}	
	isdecimal	= {_isdecimal_}
	format 		= {"_format"} />


*/
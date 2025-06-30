//src\codegen\forms\cgforms.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenConfig } from "@/codegen/kernel/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";


/**
 * 
 */
export class CodeGenForms {

    //const proglanguageRef = useRef<HTMLSelectElement>(null);        
    //const nameRef = useRef<HTMLInputElement>(null);

    /*
        <XInputText name="path" ref={pathRef} label="path"
                value={app.apppath} maxlen={AppDef.PATH_MAXLEN}
                readonly={readonly} disabled={disabled} />

        <InputSelect name="type" ref={typeRef} inline={true}
            label="Type"
            collection={apptypes}
            value={app.apptype}
            readonly={readonly} disabled={disabled} />    

        <InputCheck name="usedocker" ref={usedockerRef} inline={true}
            label="use docker"
            defaultvalue={app.usedocker!}
            readonly={readonly} disabled={disabled} />  

            <TextArea value={value} style={areaStyle}  size={size}            
            placeholder={placeholder}
            onChange={(e) => {if(onsubmmit) {onsubmmit(e.target.value);}}}
            variant={variant}  color={color} radius={radius}
            disabled={input_disabled} />                   
                             
    */
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
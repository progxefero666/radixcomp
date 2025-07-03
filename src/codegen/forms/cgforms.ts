//src\codegen\forms\cgforms.ts

import { ModelTable, ModelField, Relation } from "@/codegen/kernel/cgmodel";
import { CodeGenConfig } from "@/codegen/cgconfig";
import { CodeGenHelper } from "@/codegen/kernel/cghelper";
import { CodeGenSqlHelper } from "@/codegen/kernel/cgsqlhelper";


/*
File: src\radix\radixconstants.ts
export enum CONTROL_TYPES {
    TEXT     = "text",
    CHECKBOX = "checkbox",
    EMAIL    = "email",
    NUMBER   = "number",
    DATE     = "date",    
    RANGE    = "range",
    URL      = "url",
    COLOR    = "color",
    PASSWORD = "password",    
    SEARCH   = "search",
    FILE     = "file"   
}
- FormControl attributtes:
  .............................
	"required"
	"disabled"
	"readOnly"
	"placeholder"
	"maxLength"
	"minLength"
	"min"
	"max"
	"step"
	"pattern"
	"accept"
	"multiple"
*/

/**
 * class CodeGen Forms
 */
export class CodeGenForms {

	public static createForm(jsonModelTable:string): string {
		let code:string = "";
		return code;
	}
 

	public static createField(jsonModelTable:string): string {
		let code:string = "";
		return code;
	}
 
	
}//end class


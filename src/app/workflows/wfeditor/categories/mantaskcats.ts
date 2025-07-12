//src\app\workflows\wfeditor\categories\mantasscats.ts

import { CtrlCollectionByKey } from "@/common/mancollection";
import { DB_COLL_CMD, DB_ITEM_CMD } from "@/db/dboperations";
import { Taskcategory, TypeTaskcategory } from "@/db/model/taskcategory";

export class ManagerServers extends CtrlCollectionByKey<TypeTaskcategory> {

    constructor(){
        super();
    }
    public execOp = (id: string,item:Taskcategory): boolean => {
        let result = false;

        if (id == DB_ITEM_CMD.INSERT) {
            result = super.insert(item!);
        }
        else if (id == DB_ITEM_CMD.UPDATE) {
            result = super.update(item.id,item)
        }
        return result;
    }//end 

    public execOpCollection = (opId: string,id?:number): boolean => {
        let result = false;


        if (opId == DB_ITEM_CMD.DELETE) {
            result = super.delete(id!);
        } 

        else if (opId == DB_COLL_CMD.DELETE_ALL) {
            result = super.deleteAll();
        }
        
        return result;
    }//end 

    

}//end class
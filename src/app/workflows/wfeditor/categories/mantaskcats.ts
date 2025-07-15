//src\app\workflows\wfeditor\categories\mantasscats.ts

import { ManagerCollectionById } from "@/common/manager/mancollection";
import { DB_COLL_CMD, DB_ITEM_CMD } from "@/common/database/dbkernel";
import { Taskcategory, TypeTaskcategory } from "@/db/model/taskcategory";

export class ManagerTaskcategories extends ManagerCollectionById<Taskcategory> {

    constructor(collection: Taskcategory[]) {
        super(collection);
    }

    public execOp = (id: string,item:Taskcategory): boolean => {
        
        alert(item.id);

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
        else if (opId == DB_ITEM_CMD.MOVEUP) {
            super.moveUp(id!);
        }        
        else if (opId == DB_ITEM_CMD.MOVEDOWN) {
            super.moveDown(id!);
        }            
        return result;
    }//end 

    

}//end class
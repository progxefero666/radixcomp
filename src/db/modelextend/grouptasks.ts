//src\db\modelextend\grouptasks.ts


/**
 * class GroupTasks
 */
export class GroupTasks {

    public index: number;
    public tasksindex: number[] = [];

    constructor(index: number,tasksindex: number[]) {
        this.index = index;
        this.tasksindex = tasksindex;
    }
    
}//end class
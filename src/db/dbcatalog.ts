//src\db\dbcatalog.ts

//.................................................................................................
// Database Catalog
//.................................................................................................

export enum DbTables {
    proglanguage    = "proglanguage",
    tasktype        = "tasktype",
    workflow        = "workflow",
    taskcategory    = "taskcategory",
    task            = "task"
}

export type TypeTableMap = {
    proglanguage:   DbTables.proglanguage;
    tasktype:   DbTables.tasktype;
    workflow:   DbTables.workflow;
    taskgroup: DbTables.taskcategory;
    task:       DbTables.task;
};

export const DB_TABLES: TypeTableMap = {
    proglanguage:   DbTables.proglanguage,
    tasktype:   DbTables.tasktype,
    workflow:   DbTables.workflow,
    taskgroup: DbTables.taskcategory,
    task:       DbTables.task
};
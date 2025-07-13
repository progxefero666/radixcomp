//src\db\dbcatalog.ts
export enum DbTables {
    codelang    = "codelang",
    tasktype    = "tasktype",
    workflow    = "workflow",
    taskcategory  = "taskcategory",
    task        = "task",
    apptype     = "apptype",
    application = "application"
}

export type TypeTableMap = {
    codeLang:   DbTables.codelang;
    tasktype:   DbTables.tasktype;
    workflow:   DbTables.workflow;
    taskgroup: DbTables.taskcategory;
    task:       DbTables.task;
    apptype:    DbTables.apptype;
    application:DbTables.application;
};

export const DB_TABLES: TypeTableMap = {
    codeLang:   DbTables.codelang,
    tasktype:   DbTables.tasktype,
    workflow:   DbTables.workflow,
    taskgroup: DbTables.taskcategory,
    task:       DbTables.task,
    apptype:    DbTables.apptype,
    application:DbTables.application,
};
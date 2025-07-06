//src\db\dbesquema.ts

// tables types and models

export enum DbTables {
    codelang    = "codelang",
    tasktype    = "tasktype",
    workflow    = "workflow",
    task        = "task",
    apptype     = "apptype",
    application = "application"
}

export type TypeTableMap = {
    codeLang:   DbTables.codelang;
    tasktype:   DbTables.tasktype;
    workflow:   DbTables.workflow;
    task:       DbTables.task;
    apptype:    DbTables.apptype;
    application:DbTables.application;
};

export const DB_TABLES: TypeTableMap = {
    codeLang:   DbTables.codelang,
    tasktype:   DbTables.tasktype,
    workflow:   DbTables.workflow,
    task:       DbTables.task,
    apptype:    DbTables.apptype,
    application:DbTables.application,
};

/**
 * class DbEsquema.tables
 */
export class DbEsquema {

    public static readonly TABLES_MAP: TypeTableMap;

    public static readonly tables: string[] = [
        DbTables.codelang as string,
        DbTables.tasktype as string,
        DbTables.workflow as string,
        DbTables.task as string,
        DbTables.apptype as string,
        DbTables.application as string 
    ];

}//end class


/*
type TypeTable = "codelang" | "tasktype" | "workflow" | "task" | "apptype" | "application";

export type TypeTableMap = {
    codeLang:   "codelang";
    tasktype:   "tasktype";
    workflow:   "workflow";
    task:       "task";
    apptype:    "apptype";
    application:"application";
};

export async function GetAllRows<T extends keyof TableMap>(table: T): Promise<string> {
  const prisma = new PrismaClient();

  let result: TableMap[T][];

  switch (table) {
    case 'codeLang':
      result = await prisma.codeLang.findMany();
      break;
    case 'otraTabla':
      result = await prisma.otraTabla.findMany();
      break;
    default:
      throw new Error('Tabla no soportada');
  }

  return JsonResponse.success(OpUtil.getOpName(table, DbOperations.GET_ALL), result).toJson();
}

*/
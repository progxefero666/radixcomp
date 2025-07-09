//src\db\dbesquema.ts

// tables types and models

export enum DbTables {
    codelang    = "codelang",
    tasktype    = "tasktype",
    workflow    = "workflow",
    taskgroup  = "taskgroup",
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
 * !!! Dummy Collection for use in case 
 * of not use db table apptype.ts !!!
 *   source: src\db\model\apptype.ts: 
 */
export enum Application_Types {
    localhibrid = "local-hibrid",
    localserver = "local-server",
    localfront  = "local-front",
    localdocker = "local-docker",
    cloudfront  = "cloud-front",
    cloudserver = "cloud-server",
    cloudhibrid = "cloud-hibrid",
    clouddocker = "cloud-docker"
}

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

export enum DATABASE_TYPES {
    postgresql = 'postgresql-x64-17',
    mysql = 'mysql-8.0',
    mongodb = 'mongodb-7.0',
    redis = 'redis-7.2',
    qdrant = 'qdrant-1.7',
    chromadb = 'chroma-0.4',
    sqlite = 'sqlite-3.44',
    mariadb = 'mariadb-11.2'
}

export enum SERVICES_TYPES {
    database = "database",
    aimotor = "aimotor",
    aiagent = "aiagent",
    aiassistant = "aiassistant"
}


/*

interface DatabaseConfig {
    type: string;
    name: string;
    user: string;
    password: string;
    serviceUrl: string;
    servicePort: string;
}


export function DatabaseConfig() {
    const [config, setConfig] = useState<DatabaseConfig>({
        type: 'postgresql-x64-17',
        name: 'iadatabase',
        user: 'postgres',
        password: 'admin',
        serviceUrl: '127.0.0.1',
        servicePort: '5432'
    });

    const [testingConnection, setTestingConnection] = useState(false);
*/

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
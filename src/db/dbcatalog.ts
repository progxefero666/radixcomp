//src\db\dbcatalog.ts


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

//export class DbCatalog {}
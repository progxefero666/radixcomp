//src\sqlgen\sqlgenidutil.ts

export class SqlUserUtil {
    
    public static getSqlCheckExistUserRow(table: string): string {
        const strSql = `SELECT 1 FROM ${table} WHERE userid = ?`;
        return strSql;
    }

    public static getSqlCountUserRows(table: string): string {
        const strSql = `SELECT COUNT(*) FROM ${table} WHERE userid = ?`;
        return strSql;
    }

    public static getSqlCountAllUserTables(tables: string[]): string[] {
        const res: string[] = new Array(tables.length);
        for (let idx = 0; idx < tables.length; idx++) {
            res[idx] = SqlUserUtil.getSqlCountUserRows(tables[idx]);
        }
        return res;
    }

    public static getSqlDeleteUserTable(table: string): string {
        const strBuilder: string[] = [];
        strBuilder.push('DELETE FROM ');
        strBuilder.push(table);
        strBuilder.push(' WHERE userid = ?');
        return strBuilder.join('');
    }

    public static getSqlDeleteAllUserTable(tables: string[]): string[] {
        const res: string[] = new Array(tables.length);
        for (let idx = 0; idx < tables.length; idx++) {
            res[idx] = SqlUserUtil.getSqlDeleteUserTable(tables[idx]);
        }
        return res;
    }

}//end class
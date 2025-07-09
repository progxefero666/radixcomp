//src\sqlgen\sqlgenutil.ts

export class SqlGenUtil {
    
    private static getArrayParamsString(count: number): string {
        const strBuilder: string[] = [];
        strBuilder.push('(');
        for (let idx = 0; idx < count - 1; idx++) {
            strBuilder.push('?,');
        }
        strBuilder.push('?)');
        return strBuilder.join('');
    }

    private static getArrayFieldsUpdateString(fieldNames: string[]): string {
        const strBuilder: string[] = [];
        for (let idx = 0; idx < fieldNames.length - 1; idx++) {
            strBuilder.push(fieldNames[idx]);
            strBuilder.push('=?,');
        }
        strBuilder.push(fieldNames[fieldNames.length - 1]);
        strBuilder.push('=?');
        return strBuilder.join('');
    }

    private static getArrayFieldsString(fieldNames: string[]): string {
        const strBuilder: string[] = [];
        strBuilder.push('(');
        for (let idx = 0; idx < fieldNames.length - 1; idx++) {
            strBuilder.push(fieldNames[idx]);
            strBuilder.push(',');
        }
        strBuilder.push(fieldNames[fieldNames.length - 1]);
        strBuilder.push(')');
        return strBuilder.join('');
    }

    public static getInsertFields(fieldNames: string[]): string[] {
        return fieldNames.slice(1, fieldNames.length);
    }

    public static getUpdateFields(fieldNames: string[]): string[] {
        return fieldNames.slice(2, fieldNames.length);
    }

    public static getSqlInsert(table: string, fieldNames: string[]): string {
        const strBuilder: string[] = [];
        strBuilder.push('INSERT INTO ');
        strBuilder.push(table);
        strBuilder.push(' ');
        strBuilder.push(SqlGenUtil.getArrayFieldsString(fieldNames));
        strBuilder.push(' VALUES  ');
        strBuilder.push(SqlGenUtil.getArrayParamsString(fieldNames.length));
        return strBuilder.join('');
    }

    public static getSqlDelete(table: string): string {
        const strBuilder: string[] = [];
        strBuilder.push('DELETE FROM ');
        strBuilder.push(table);
        strBuilder.push(' WHERE id = ?');
        return strBuilder.join('');
    }

    public static getSqlUpdate(table: string, fieldNames: string[]): string {
        const strBuilder: string[] = [];
        strBuilder.push('UPDATE ');
        strBuilder.push(table);
        strBuilder.push(' SET ');
        strBuilder.push(SqlGenUtil.getArrayFieldsUpdateString(fieldNames));
        strBuilder.push(' WHERE id=?');
        return strBuilder.join('');
    }

    public static getSqlDownload(table: string): string {
        const strBuilder: string[] = [];
        strBuilder.push('SELECT mimetype,content FROM ');
        strBuilder.push(table);
        strBuilder.push(' WHERE id=?');
        return strBuilder.join('');
    }

    public static getSqlCheckExistRowById(table: string): string {
        const strSql = `SELECT 1 FROM ${table} WHERE id = ?`;
        return strSql;
    }
}
// src\common\decorators\decfield.ts
import "reflect-metadata";

function field(options: {
    ftype: string,
	name: string,
    generated?: boolean,
    required?: boolean,
	minlen?: number,
    maxlen?: number,
    pk?: boolean,
    fk?: boolean,
    table?: string,
    tableId: string,
    tableName: string
}) {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata("field", options, target, propertyKey);
    };
}
// src\common\decorators\decfield.ts

import "reflect-metadata";
import { TFieldDecorator } from "@/common/types";


export const field = (options: TFieldDecorator) => {
    return (target: any, propertyKey: string) => {
        Reflect.defineMetadata("field", options, target, propertyKey);
    };
};

export const defaultValue = (value: any) =>{
    return function (target: any, propertyKey: string) {
        target[propertyKey] = value;
    };
}

/*
// FUNCIÓN SEPARADA - para extraer metadatos después
export const getFieldsMetadata = (instance: any): any[] => {
    const fieldsMetadata: any[] = Object.getOwnPropertyNames(instance).map(prop => ({
        name: prop,
        ...Reflect.getMetadata("field", instance, prop)
    }));
    return fieldsMetadata;
};
*/
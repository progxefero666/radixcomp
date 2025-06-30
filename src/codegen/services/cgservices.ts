//src\app_front\codegen\cgservices.ts


export const TEMP_APICLIIMPORTS = `
import { CancelablePromise, OpenAPI } from "@/client";
import { request as __request } from '@/client/core/request';
import { HttpConst } from "@/codegen/kernel/cgconfig";`;
 
export const TEMP_APICLISERVICE = `
import { _Table_ } from "@/client/models/_Table_";

/**
 * class FastApi Client Db Table Service 
 *  Based on OpenAPI generated code
 */
export class _Table_Service {

    /**
     * Get all
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/',
        });
    }
    
    /**
     * insert
     * @param requestBody
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static insert(requestBody:_Table_):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_POST,
            url: '/api/_table_/',
            body: requestBody,
            mediaType: HttpConst.CONTENT_TYPE_JSON,
            errors: {422: \`Validation Error\`}
        });
    }

    /**
     * Update
     * @param id
     * @param requestBody
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static update(id:number,requestBody:_Table_): CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_PUT,
            url: '/api/_table_/{id}',
            path: {'id': id},
            body: requestBody,
            mediaType: HttpConst.CONTENT_TYPE_JSON,
            errors: {422: \`Validation Error\`}
        });
    }

    /**
     * Delete
     * @param id
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static delete(id:number):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_DELETE,
            url: '/api/_table_/{id}',
            path: {'id': id},
            errors: {422: \`Validation Error\`}
        });
    }

    /**
     * Get
     * @param id
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static get(id:number):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/{id}',
            path: {'id': id},
            errors: {422: \`Validation Error\`}
        });
    }

    /**
     * Get by name
     * @param name
     * @returns Task Successful Response
     * @throws ApiError
     */    
    public static getByName(name:string):CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/name/{name}',
            path: {'name':name},
            errors: {422: \`Validation Error\`}
        });
    }
        
    /**
     * Get by other field
     * @param name
     * @returns Task Successful Response
     * @throws ApiError
     */    
    public static getByOther(other:string):CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/other/{other}',
            path: {'other':other},
            errors: {422: \`Validation Error\`}
        });
    }
       
}`;

/**
 * # Class: CodeGenServices
 * 
 * # Info
 *      - Author: Ignacio Sánchez Ramírez
 *      - Date: 2023-10-01
 *      
 * # Description
 *      - Generates files content for FastAapi Db 
 */
import { ModelTable } from "@/codegen/kernel/cgmodel";
import { CodeGenHelper } from "../kernel/cghelper";


export class CodeGenServices {

    /**
     * # Description
     *      - Generates FastAapi Db table client service 
     *        for the given table model name.
     *      - Use TEMPLATE_APICLI_SERVICE string template
     *      - Name of the class is generated in Pascal case format:
     *          Class (Table.name)Service
     *      - Name of the item in api paths is generated in lower case
     * 
     * # Example for table user : 
     *      - Class name: UserService in Pascal case
     *      - Item in api paths name: user in lower case
     * # Usage
     *      - param tableModel The model of the table for which to generate the service.
     *      - returns The content of the service class as a string.
     */
    public static genFileContentServiceClass(tableModel:ModelTable,includeImports:boolean): string {
        const className = CodeGenHelper.capitalize(tableModel.name);
        const pathName  = CodeGenHelper.uncapitalize(tableModel.name);

        //TEMP_APICLIIMPORTS
        let content: string = includeImports ? TEMP_APICLIIMPORTS : "";
        content += TEMP_APICLISERVICE;
        content = content.replace(/_Table_/g, className);
        content = content.replace(/_table_/g, pathName);
        return content
    }
    
    public static genFileContentArrayServiceClass(tableModels:ModelTable[]): string {
        let separator: string = "\n\n";

        let content: string = TEMP_APICLIIMPORTS;
        content += separator;
        for(const table of tableModels) {
           content += CodeGenServices.genFileContentServiceClass(table,false);
           content += separator;
        }
        return content;
    }

}//end class
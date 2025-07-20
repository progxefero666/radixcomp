//table_application.ts

/**
 * Db Table Entity Class Application
 **/
export class Application {

    public id:          number|null = null;;
    public apptype_id:  number;
    public codelang_id: number;
    public name:        string;
    public description: string|null = null;
    public repository:  string|null = null;
    public author:      string|null = null;
    public osystem:     string|null = null;
    public appurl:      string|null = null;
    public apppath:     string|null = null;
    public localdev:    boolean = true;
    public usedocker:   boolean = false;
    public controluser:boolean = false;
    public useui:       boolean = false;
    public useagents:   boolean = false;
    public consumedb:   boolean = false;
    public updated:     Date;

    constructor(id:number|null,
                apptype_id:number,
                codelang_id:number,
                name:string,
                description:string|null,
                repository:string|null,
                author:string|null,
                osystem:string|null,    
                appurl:string|null,
                apppath:string|null,
                localdev:boolean,usedocker:boolean,controluser:boolean,
                useui:boolean,useagents:boolean,consumedb:boolean,
                updated:Date ) {

        this.id = id;
        this.apptype_id = apptype_id;
        this.codelang_id = codelang_id;
        this.name = name;
        this.description = description;
        this.repository = repository;
        this.author = author;
        this.osystem = osystem;
        this.appurl = appurl;
        this.apppath = apppath;
        this.localdev = localdev;
        this.usedocker = usedocker;
        this.controluser = controluser;
        this.useui = useui;
        this.useagents = useagents;
        this.consumedb = consumedb;
        this.updated = updated;
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number  {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public maxlen(fieldName: string): number  {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "apptype_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "codelang_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 50;
        }
        if (fieldName === "description") {
            return 255;
        }
        if (fieldName === "repository") {
            return 250;
        }
        if (fieldName === "author") {
            return 100;
        }
        if (fieldName === "osystem") {
            return 100;
        }
        if (fieldName === "appurl") {
            return 500;
        }
        if (fieldName === "apppath") {
            return 500;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Application entity
 */
export type TypeApplication = {
    id: number;
    apptype_id: number;
    codelang_id: number;
    anname: string;
    description: string;
    repository: string;
    author: string;
    osystem: string;
    appurl: string;
    apppath: string;
    localdev: boolean;
    usedocker: boolean;
    controlusers: boolean;
    useui: boolean;
    useagents: boolean;
    consumedb: boolean;
    consumeapi: boolean;
    consumeai: boolean;
    exposedb: boolean;
    exposeapi: boolean;
    updated: Date;
};

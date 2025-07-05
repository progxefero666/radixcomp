//src\db\model\application.ts

/**
 * Class Application
 * Represents a Application entity with various properties and methods.
 * 
 * @class Application
 */
export class Application {

    public id: number | null = null;
    public apptype_id: number | null = null;
    public codelang_id: number | null = null;
    public name: string = "undefined";
    public description: string = "undefined";
    public repository: string = "undefined";
    public author: string = "undefined";
    public osystem: string = "undefined";
    public appurl: string = "undefined";
    public apppath: string = "undefined";
    public localdev: boolean = false;
    public usedocker: boolean = false;
    public controlusers: boolean = false;
    public useui: boolean = false;
    public useagents: boolean = false;
    public consumedb: boolean = false;
    public consumeapi: boolean = false;
    public consumeai: boolean = false;
    public exposedb: boolean = false;
    public exposeapi: boolean = false;
    public updated: Date = new Date();

    constructor(id: number | null,
                apptype_id: number | null,
                codelang_id: number | null,
                name: string,
                description: string,
                repository: string,
                author: string,
                osystem: string,
                appurl: string,
                apppath: string,
                localdev: boolean,
                usedocker: boolean,
                controlusers: boolean,
                useui: boolean,
                useagents: boolean,
                consumedb: boolean,
                consumeapi: boolean,
                consumeai: boolean,
                exposedb: boolean,
                exposeapi: boolean,
                updated: Date) {

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
        this.controlusers = controlusers;
        this.useui = useui;
        this.useagents = useagents;
        this.consumedb = consumedb;
        this.consumeapi = consumeapi;
        this.consumeai = consumeai;
        this.exposedb = exposedb;
        this.exposeapi = exposeapi;
        this.updated = updated;
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number | null {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public maxlen(fieldName: string): number | null {
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
    id: number | null;
    apptype_id: number | null;
    codelang_id: number | null;
    name: string;
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

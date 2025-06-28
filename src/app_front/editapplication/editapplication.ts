//src\app_front\editapplication\editapplication.ts


/**
 * class AppEditor
 */
export class AppEditor {

}//end class

/**
 * class AppDef {

 */
export class AppDef {
    //creationdate?: string;
    //updatedate?: string;

    public static readonly NAME_MAXLEN = 50;
    public static readonly REFERENCE_MAXLEN = 50;
    public static readonly AUTHOR_MAXLEN = 100;
    public static readonly OSSYSTEM_MAXLEN = 100;
    public static readonly URL_MAXLEN = 500;
    public static readonly PATH_MAXLEN = 500;
    public static readonly DESCRIPTION_MAXLEN = 255;

    public static readonly fdef_localdev:boolean   = false;
    public static readonly fdef_usedocker:boolean   = false;
    public static readonly fdef_controlusers:boolean= false;
    public static readonly fdef_useui:boolean       = false;
    public static readonly fdef_useagents:boolean   = false;
    public static readonly fdef_consumedb:boolean   = false;
    public static readonly fdef_consumeapi:boolean  = false;
    public static readonly fdef_consumeai:boolean   = false;
    public static readonly fdef_exposedb:boolean    = false;
    public static readonly fdef_exposeapi:boolean   = false;
    
}//end class


/*

export class Application {

    public id: number | null = null;
    public name: string = "undefined";
    public reference: string = "undefined";
    public author: string = "undefined";
    public apptype: string = "undefined";
    public proglanguage: string = "undefined";
    public osystem: string = "undefined";
    public appurl: string = "undefined";
    public apppath: string = "undefined";
    public localdev: boolean = false;
    public usedocker: boolean = false;
    public creationdate: Date = new Date();
    public updatedate: Date = new Date();
    public description: string = "undefined";
    public controlusers: boolean = false;
    public useui: boolean = false;
    public useagents: boolean = false;
    public consumedb: boolean = false;
    public consumeapi: boolean = false;
    public consumeai: boolean = false;
    public exposedb: boolean = false;
    public exposeapi: boolean = false;

    constructor(id: number | null,
                name: string,
                reference: string,
                author: string,
                apptype: string,
                proglanguage: string,
                osystem: string,
                appurl: string,
                apppath: string,
                localdev: boolean,
                usedocker: boolean,
                creationdate: Date,
                updatedate: Date,
                description: string,
                controlusers: boolean,
                useui: boolean,
                useagents: boolean,
                consumedb: boolean,
                consumeapi: boolean,
                consumeai: boolean,
                exposedb: boolean,
                exposeapi: boolean) {

        this.id = id;
        this.name = name;
        this.reference = reference;
        this.author = author;
        this.apptype = apptype;
        this.proglanguage = proglanguage;
        this.osystem = osystem;
        this.appurl = appurl;
        this.apppath = apppath;
        this.localdev = localdev;
        this.usedocker = usedocker;
        this.creationdate = creationdate;
        this.updatedate = updatedate;
        this.description = description;
        this.controlusers = controlusers;
        this.useui = useui;
        this.useagents = useagents;
        this.consumedb = consumedb;
        this.consumeapi = consumeapi;
        this.consumeai = consumeai;
        this.exposedb = exposedb;
        this.exposeapi = exposeapi;
    }

    public minlen(fieldName: string): number | null {
        return 0;
    }

    public maxlen(fieldName: string): number | null {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 50;
        }
        if (fieldName === "reference") {
            return 50;
        }
        if (fieldName === "author") {
            return 100;
        }
        if (fieldName === "apptype") {
            return 50;
        }
        if (fieldName === "proglanguage") {
            return 50;
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
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

*/
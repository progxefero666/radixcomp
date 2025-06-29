//src\app_front\manapplications\manappsacfg.ts

import { Option } from "@/common/model/option";

/**
 * class ManAppsCfg
 */
export class AppEditorCfg {

    public static readonly SECTION_MAIN: Option = new Option
        ("main", "Main", null,null,null);

    public static readonly SECTION_DOCS: Option = new Option
        ("docs", "Documents",  null,null,null);

    public static readonly SECTION_TASKS: Option
        = new Option("task", "Tasks",  null,null,null);

    public static readonly SECTIONS: Option[]=[
        AppEditorCfg.SECTION_MAIN,
        AppEditorCfg.SECTION_DOCS,
        AppEditorCfg.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Option = AppEditorCfg.SECTIONS[0];

}//end class


/*
"name",         "text"
"apptype",      "text"
"proglanguage", "text" 
"apppath",      "text"
"consumedb",    "boolean"
"consumeapi",   "boolean"
"exposedb",     "boolean"
"exposeapi",    "boolean"

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
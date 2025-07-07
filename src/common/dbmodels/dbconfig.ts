//src\common\dbmodels\dbconfig.ts

import { DbUtil } from "@/db/dbutils";

/**
 * class DbConfigUtil
 */
/**
 * Class DbConfig
 */
export class DbConfig {

    public motor: string;
    public version: string|null;
    public name: string;
    public username: string;
    public userpassword: string;
    public host: string;
    public port: number;
    public url: string;
    public security: boolean = false;
    
    constructor(name:string,motor:string,version:string|null,
                username:string,userpassword:string,
                host:string,port:number,security:boolean|null) {

        this.name = name;
        this.motor = motor;
        this.version = version ?? null;        
        this.username = username;
        this.userpassword = userpassword;
        this.host = host;
        this.port = port;
        this.security = security ?? false;

        this.url = DbUtil.getDbUrl(
            this.name,this.motor,
            this.host,this.port,
            this.username,this.userpassword);
    }

}//end class DbConfig
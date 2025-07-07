//src\common\dbmodels\dbconfig.ts

/**
 * class DbConfigUtil
 */
export class DbConfigUtil {

    public static getDbUrl(name:string,motor:string,
                           host:string,port:number,                           
                           username:string,userpassword:string): string {
        let url: string = motor+"://"
            .concat(username).concat(":").concat(userpassword)
            .concat("@").concat(host).concat(":").concat(String(port))
            .concat("/").concat(name);
        return url;
    }

}//end class 

/**
 * Class DbConfig
 */
export class DbConfig {

    public motor: string;
    public version: string = "postgresql";
    public name: string;
    public username: string;
    public userpassword: string;
    public host: string;
    public port: number;
    public url: string;
    public useSSL: boolean = false;
    

    constructor(name:string,
                motor:string,
                username:string,
                userpassword:string,
                host:string,
                port:number,
                useSSL:boolean|null) {

        this.name = name;
        this.username = username;
        this.userpassword = userpassword;
        this.host = host;
        this.port = port;
        this.useSSL = useSSL ?? false; // Default to false if not provided
        this.motor = motor;
        this.url = `postgresql://${this.username}:${this.userpassword}@${this.host}:${this.port}/${this.name}`;
    }

}//end class DbConfig
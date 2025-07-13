//src\app\db\kernel\dbconfig.ts

const getDbUrl = (name: string, motor: string,
    host: string, port: number,
    username: string, userpassword: string): string => {
    let url: string = motor + "://"
        .concat(username).concat(":").concat(userpassword)
        .concat("@").concat(host).concat(":").concat(String(port))
        .concat("/").concat(name);
    return url;
}

/**
 * Class DbConfig
 */
export class DbConfig {

    public motor: string;
    public version: string | null;
    public name: string;
    public username: string;
    public userpassword: string;
    public host: string;
    public port: number;
    public url: string;
    public security: boolean = false;

    constructor(name: string, motor: string, version: string | null,
        username: string, userpassword: string,
        host: string, port: number, security: boolean | null) {

        this.name = name;
        this.motor = motor;
        this.version = version ?? null;
        this.username = username;
        this.userpassword = userpassword;
        this.host = host;
        this.port = port;
        this.security = security ?? false;

        this.url = getDbUrl(
            this.name, this.motor,
            this.host, this.port,
            this.username, this.userpassword);
    }

}//end class DbConfig
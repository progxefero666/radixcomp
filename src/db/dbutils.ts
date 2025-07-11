//import {DbUtil} "@/db/dbutils"



/**
 * class DbUtil
 */
export class DbUtil {

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

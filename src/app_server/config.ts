"user server";

import path from "path";

/**
 * class AppServerConfig.getAppRootFolder()
 */
export default class ServerConfig {
    
    public static ENV_DEV:string         = "development";
    public static ENV_PROD:string        = "production";
    public static SUBFOLDER_DATA: string = "data";

    public static getRootPath():string {//env:string
        const ROOTFOLDER_DEV: string = "C:\\claudeapps\\nextapps\\aigenerator\\public"; 
        const ROOTFOLDER_PROD:string = "/var/www/aigenerator";
        const environment:string = process.env.NODE_ENV;
        console.log(environment);
        if(environment === ServerConfig.ENV_DEV){return ROOTFOLDER_DEV;}
        else                            {return ROOTFOLDER_PROD;}
    }
    public static FOLDER_ROOT:string = ServerConfig.getRootPath();

    public static XEFERODB_PATH =  path
        .join(ServerConfig.FOLDER_ROOT,ServerConfig.SUBFOLDER_DATA);
   
}//end class

//ServerConfig.ENV_DEV
//ServerReader.getXeferoDbPath
export class ServerReader {

    public static getXeferoDbPath(fname:string):string {
        return path.join(ServerConfig.XEFERODB_PATH, fname);
    }

    public static getFilePath(fname:string):string {
        return path.join(ServerConfig.XEFERODB_PATH, fname);
    }

    /*
    static async readDoc(userId: number): Promise<string> {
        const filePath: string = ServerPaths.getToolDocPath(userId);
        const fileContent: string = await SystemFileUtil.readFile(filePath);
        const toolData: VfaVideo = JSON.parse(fileContent);
        return toolData;
    }
    */
}//end class


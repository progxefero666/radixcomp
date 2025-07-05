
import path from "path";

/**
 * class AppServerConfig.getAppRootFolder()
 */
export default class ServerConfig {
    
    public static ENV_DEV:string         = "development";
    public static ENV_PROD:string        = "production";
    public static ROOTFOLDER_DEV: string = "C:\\claudeapps\\nextapps\\aigenerator\\public"; 
    public static ROOTFOLDER_PROD:string = "C:\\claudeapps\\nextapps\\aigenerator\\public"; 
    //static ROOTFOLDER_PROD:string ="/nextapps/data";
    //dbsquema.sql

    public static getRootFolderPath(env:string):string {
         //const env:string = process.env.NODE_ENV;
        if(env === ServerConfig.ENV_DEV){return ServerConfig.ROOTFOLDER_DEV;}
        else                            {return ServerConfig.ROOTFOLDER_PROD;}
    }

    //public static ROOT_FOLDER:string = ServerPaths.getRootFolderPath(process.env.NODE_ENV);
    public static FOLDER_ROOT:string = ServerConfig.getRootFolderPath(ServerConfig.ENV_DEV);
    public static SUBFOLDER_DATA =  path.join(ServerConfig.FOLDER_ROOT,"data");

    public static XEFERODB_PATH =  path.join(ServerConfig.FOLDER_ROOT,"data");

}//end class

//ServerReader.getXeferoDbPath
export class ServerReader {

    public static getXeferoDbPath(fname:string):string {
        return path.join(ServerConfig.XEFERODB_PATH, fname);
    }

    public static getFilePath(fname:string):string {
        return path.join(ServerConfig.SUBFOLDER_DATA, fname);
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


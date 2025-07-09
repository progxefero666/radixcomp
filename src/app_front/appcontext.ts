// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/context/sessionstorage";
import { Device } from "@/common/model/device";

import { Codelang } from "@/db/model/codelang";

export class AppContext {

    static DB_ESQUEMA:string  = "dbsquema";
    static CODE_LANGS:string  = "codelangs";

    public static isUserLogin(): boolean {
       return StorageService.exist(AppContext.DB_ESQUEMA);
    }
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppContext.DB_ESQUEMA,sql_script);
    }
    public static readDbSquema(): string {
        if(!StorageService.exist(AppContext.DB_ESQUEMA)){
            return "undefined"; 
        }
        return StorageService.read(AppContext.DB_ESQUEMA)!;
    }

    public static saveCodelangs(collection:Codelang[]): void {
        const json = JSON.stringify(collection,null,4  );
        StorageService.save(AppContext.CODE_LANGS,json);
    }

    public static readCodelangs(): string {
        if(!StorageService.exist(AppContext.CODE_LANGS)){
            return "undefined"; 
        }
        return StorageService.read(AppContext.CODE_LANGS)!;
    }
} //end class

    /*.........................................................................
    static USERID:string  = "userid";
    public static isUserLogin(): boolean {
       return StorageService.exist(AppContext.USERID);
    }
    public static saveUserId(userid: number): void {
        StorageService.save(AppContext.USERID,userid.toString());
    }
    public static readUserId(): number {
        const str = StorageService.read(AppContext.USERID);
        return Number(str);
    }
    .........................................................................*/

    /*.........................................................................
    static DEVICE:string  = "device";
    public static isDeviceCharged(): boolean {
        return StorageService.exist(AppContext.DEVICE);
    }    
    public static saveUserDevice(device: Device): void {
        StorageService.save(AppContext.DEVICE,device.getJsonString());
    }
    public static readUserDevice(): Device {
        const device =  StorageService.read(AppContext.DEVICE);
        if(device){return Device.fromJson(device??null);}
        else {return new Device();}       
    }
    .........................................................................*/
// File: src/app/appstorage.service.ts

import { StorageService } from "@/common/context/sessionstorage";
import { Device } from "@/common/model/device";

import { Codelang } from "@/db/model/codelang";

export class AppMemmory {

    static NOT_FOUND:string  = "not_found";

    static DB_ESQUEMA:string  = "dbsquema";
    static CODE_LANGS:string  = "codelangs";

    public static isUserLogin(): boolean {
       return StorageService.exist(AppMemmory.DB_ESQUEMA);
    }
    public static saveDbSquema(sql_script: string): void {
        StorageService.save(AppMemmory.DB_ESQUEMA,sql_script);
    }
    public static readDbSquema(): string {
        if(!StorageService.exist(AppMemmory.DB_ESQUEMA)){
            return AppMemmory.NOT_FOUND; 
        }
        return StorageService.read(AppMemmory.DB_ESQUEMA)!;
    }

    public static saveCodelangs(collection:Codelang[]): void {
        const json = JSON.stringify(collection,null,4  );
        StorageService.save(AppMemmory.CODE_LANGS,json);
    }

    public static readCodelangs(): string {
        if(!StorageService.exist(AppMemmory.CODE_LANGS)){
            return AppMemmory.NOT_FOUND; 
        }
        return StorageService.read(AppMemmory.CODE_LANGS)!;
    }

} //end class

    /*.........................................................................
    static DEVICE:string  = "device";
    public static isDeviceCharged(): boolean {
        return StorageService.exist(AppContext.DEVICE);
    }    
    public static saveDevice(device: Device): void {
        StorageService.save(AppContext.DEVICE,device.getJsonString());
    }
    public static readDevice(): Device {
        const device =  StorageService.read(AppContext.DEVICE);
        if(device){return Device.fromJson(device??null);}
        else {return new Device();}       
    }
    .........................................................................*/
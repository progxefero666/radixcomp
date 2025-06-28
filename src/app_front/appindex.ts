//src\app_front\manapplications\manappscfg.ts


import { Agent } from "@/client";
import { Application } from "@/client/models/Application";
import { ProgLanguage } from "@/client/models/ProgLanguage";
import { Server } from "@/client/models/Server";
import { Service } from "@/client/models/Service";
import { AgentsService } from "@/client/service/AgentsService";
import { ApplicationsService } from "@/client/service/ApplicationsService";
import { ProgLangCodeService } from "@/client/service/ProglanguagesService";
import { ServersService } from "@/client/service/ServersService";
import { ServicesService } from "@/client/service/ServicesService";
import { Option } from "@/common/model/option";


/**
 * Manager Common Collections
 */
export class AppIndex {

    public applications: Application[] = [];
    public agents:   Agent[]   = [];
    public services: Service[] = [];
    public servers:  Server[]  = [];
    
    constructor() {
        //this.loadApplications();
        //this.loadServices();
        //this.loadServers();
        //this.loadAgents();     
    }

    public async loadApplications(): Promise<boolean> {
        try {
           this.applications = await ApplicationsService.getAll();
        }
        catch (error) {
            alert('List app loaded error: ' + error);
            console.error('List app loaded error:', error);
            return false;
        }        
        finally {
            return true
        }
    }

    public async loadServices() {
        try {
           this.services = await ServicesService.getAll();
        }
        catch (error) {
            alert('List services loaded error: ' + error);
            console.error('List app loaded error:', error);
        }        
    }    

    public async loadServers() {
        try {
           this.servers = await ServersService.getAll();
        }
        catch (error) {
            alert('List servers loaded error: ' + error);
            console.error('List app loaded error:', error);
        }        
    }    

    public async loadAgents() {
        try {
           this.agents = await AgentsService.getAll();
        }
        catch (error) {
            console.error('List agents loaded error:', error);
        }        
    }    

    public outputConsole() {
        console.log(this.applications);
        console.log(this.services);
        console.log(this.servers);
        //console.log(this.agents);
    }

}//end class




//src\app_front\manapplications\manappscfg.ts


import { Option } from "@/common/model/option";


/**
 * Manager Common Collections
 */
export class AppIndex {

    /*
    public applications: Application[] = [];
    public agents:   Agent[]   = [];
    public services: Service[] = [];
    public servers:  Server[]  = [];
    */
    constructor() {
        //this.loadApplications();
        //this.loadServices();
        //this.loadServers();
        //this.loadAgents();     
    }

    public async loadInitCollections(): Promise<boolean> {
        /*
                try {
           this.applications = await ApplicationsService.getAll();
           this.services = await ServicesService.getAll();
           this.servers = await ServersService.getAll();
           //this.agents = await AgentsService.getAll();
        }
        catch (error) {
            alert('List app loaded error: ' + error);
            //console.error('List app loaded error:', error);
            return false;
        }        
        finally {
            return true
        } 
        */
       return true;
    }

    public outputConsole() {
        //console.log(this.applications);
        //console.log(this.services);
        //console.log(this.servers);
        //console.log(this.agents);
    }

}//end class




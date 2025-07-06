//src\app\index\render\rendertables.tsx

import { Button, Box, Text, Flex, Separator, IconButton } from "@radix-ui/themes";
import { Application } from "@/db/model/application";
import ContCollapsible from "@/radix/container/collapsible";
import { BarButtonsCfg } from "@/common/modelui/barbuttonscfg";
import { BARCFG_DELETE_OPEN } from "@/app_front/ui/appbars";

/**
 * 
 * @param apps 
 * @returns 
 */
export const renderTableApplications = (apps: Application[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {apps.map((app, index) => (
                <div key={index.toString()}>                  
                </div>
            ))}
        </>
    )
}//end jsx render

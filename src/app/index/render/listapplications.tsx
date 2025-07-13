//src\app\index\render\listapplications.tsx

import { Button, Box, Text, Flex, Separator, IconButton } from "@radix-ui/themes";
import { Application } from "@/db/model/application";
import ContCollapsible from "@/radix/container/collap";
import { BarButtonsCfg } from "@/radix/models/barbuttonscfg";
import { BARCFG_DELETE_OPEN } from "@/radix/appbars";

export const ListApplications = (apps: Application[]) => {
    const barConfig: BarButtonsCfg = BARCFG_DELETE_OPEN;
    return (
        <>
            {apps.map((app, index) => (
                <ContCollapsible id={index} key={index.toString()}
                    barbuttonscfg={barConfig}
                    title={app.name}
                    intro={app.repository!}
                    opened={false}>
                    {/* children */}
                    <Text size="2">
                        {app.description}
                    </Text>
                </ContCollapsible>
            ))}
        </>
    )
}//end jsx render


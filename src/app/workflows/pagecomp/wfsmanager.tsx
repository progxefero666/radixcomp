//src\app\workflows\pagecomp\wfmain.tsx

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { BARCFG_ADD_IMPORT } from "@/radix/appbars";

import { parseResponseCollection } from "@/common/parsers/javascriptparser";
import { DB_ITEM_CMD, DB_ITEM_CMD_TEXT, DbOps } from "@/common/database/dbkernel";
import { Workflow } from "@/db/model/workflow";
import { DbTables } from "@/db/dbcatalog";
import { getAllByTable } from "@/db/services/generic/serviceread";
import {CardWorkflowMin} from "../cards/cardwfmin";

import { AppMemmory } from "@/front/appmemory";
import { AppWorkflowsConfig } from "@/front/appworkflows";
import { ThemeButtonsStyle, ThemeIconsStyle } from "@/radix/radixtheme";

const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: '1px solid rgb(167, 176, 188)',
    borderRight: '1px solid rgb(125, 134, 145)',
};

// const appRef = useRef<AppWorkflows>(null);
interface CompProps {
    section: string;
    //codelangs:Codelang[]|null;
    showwfpreview: (workflow: Workflow) => void;
}
export function WorkflowsManager({ section, showwfpreview }: CompProps) {
    const router = useRouter();
    const [ready, setReady] = useState<boolean>(false);
    const [workflows, setWorkflows] = useState<Workflow[] | null>(null);


    const barButtonsCfg = BARCFG_ADD_IMPORT;
    useEffect(() => {
        if (ready) { return; }
        const init = async () => {
            const response = await getAllByTable(DbTables.workflow);
            if (response === null) { return false; }

            const collection: Workflow[] | null = parseResponseCollection<Workflow>(response);
            if (collection == null) { return; }

            setWorkflows(collection);
            setReady(true);
        };
        init();

    }, []);

    const onFilterchange = (value: string) => {
    };

    const execImport = () => {
    };//end


    const onBarButtonClick = (command: string) => {
        
        if (command == DB_ITEM_CMD.INSERT) {
            //alert("insert");
            //DialogFieldText
            AppMemmory.saveWorkflowId(Number(DbOps.NEW_ROW_ID));
            router.push("/workflows/wfeditor");
            return;
        }
        else if (command == DB_ITEM_CMD.IMPORT) {
            //alert("import");
            return;
        }

    }//end

    const execWfItemCardOperation = (itemIndex: number, action: string) => {

        if (action == DB_ITEM_CMD.SELECT) {
            showwfpreview(workflows![itemIndex]);
            return;
        }
        else if (action == DB_ITEM_CMD.DELETE) {

            return;
        }
        else if (action == DB_ITEM_CMD.OPEN) {
            AppMemmory.saveWorkflowId(workflows![itemIndex].id);
            router.push("/workflows/wfeditor");
            return;
        }

    }


    const renderManWorkflows = () => {
        if (workflows == null || workflows.length == 0) {
            return (
                <Text size="2" color="gray">not defined</Text>
            );
        }

        return (
            <>
                {workflows.map((workflow, index) => (
                    <Box key={index.toString()}>
                        <CardWorkflowMin
                            index={index}
                            workflow={workflow}
                            callback={execWfItemCardOperation} />
                    </Box>
                ))}
            </>
        )
    }

    //AppMemmory.saveWorkflowId(workflows![itemIndex].id);
    const renderTasktypes = () => {

        if (workflows == null || workflows.length == 0) {
            return (
                <Text size="2" color="gray">not defined</Text>
            );
        }
        return (
            <>
                {workflows!.map((workflow, index) => (
                    <Box key={index.toString()}>
                        <CardWorkflowMin
                            index={index}
                            workflow={workflow}
                            callback={execWfItemCardOperation} />
                    </Box>
                ))}
            </>
        )
    }

    return (
        <Flex width="100%" direction="column" px="3" py="3" gapY="2" style={mainContentStyle} >

            {/* header */}
            <Flex direction="row" justify="between" align="center" >
                <TextField.Root placeholder="Search workflows…" size="2"
                    onChange={(e) => { onFilterchange(e.target.value); }} >
                    <TextField.Slot>
                        <MagnifyingGlassIcon width={ThemeIconsStyle.DEF_HEIGHT}
                                             height={ThemeIconsStyle.DEF_WIDTH} />
                    </TextField.Slot>
                </TextField.Root>
                <Flex direction="row" align="center" gapX="2" >

                    <Button variant="solid" color={ThemeButtonsStyle.COLOR_IMPORT}
                        size={ThemeButtonsStyle.BTN_DEF_SIZE} onClick={() => execImport()}  >
                        {DB_ITEM_CMD_TEXT.IMPORT}
                    </Button>
                </Flex>
            </Flex>

            {/*body */}
            {section == AppWorkflowsConfig.MOD_SECTIONS.MANAGER_WORKFLOWS.id ? renderManWorkflows() : null}
            {section == AppWorkflowsConfig.MOD_SECTIONS.MANAGER_TASKTYPES.id ? renderTasktypes() : null}
        </Flex>
    );

}//end component


/*
    {section==WorkflowsConfig.SC_TASKTYPES.id ? renderTaskTypes() : null}
    {section==WorkflowsConfig.SC_WORKFLOW_SQL.id ? renderSql() : null}
    {section==WorkflowsConfig.SC_WORKFLOW_JSON.id ? renderJson() : null}

    const renderTaskTypes = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderTaskTypes
                </p>
            );
        }
    }

    const renderSql = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderSql
                </p>
            );
        }
    }

    const renderJson = () => {
        if(section==WorkflowsConfig.SC_WORKFLOWS.id) {
            return (
                <p>
                    renderJson
                </p>
            );
        }
    }

*/
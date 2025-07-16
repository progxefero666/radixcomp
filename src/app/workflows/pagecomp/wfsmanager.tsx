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
import { getAllRows } from "@/db/services/generic/serviceread";
import {CardWorkflowMin} from "../cards/cardwfmin";

import { AppMemmory } from "@/front/appmemory";
import { AppWorkflows, AppWorkflowsConfig, AppWorkflowsCreator, AppWorkflowsCrud, AppWorkflowsReader } from "@/front/appworkflows";
import { ThemeButtonsStyle, ThemeIconsStyle } from "@/radix/radixtheme";
import { DialogFieldText } from "@/radix/form/dlgfieldtext";
import { TInputText } from "@/radix/radixtypes";
import { TKeyvalue } from "@/common/types";
import { Codelang } from "@/db/model/codelang";
import { Tasktype } from "@/db/model/tasktype";

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
    showwfpreview: (id:number) => void;
}
export function WorkflowsManager({ section, showwfpreview }: CompProps) {
    const router = useRouter();
    const [ready, setReady] = useState<boolean>(false);

    const [codelangs, setCodelangs] = useState<Codelang[]>([]);
    const [tasktypes, setTasktypes] = useState<Tasktype[]>([]);    
    const [workflows, setWorkflows] = useState<Workflow[]>([]);


    const barButtonsCfg = BARCFG_ADD_IMPORT;
    useEffect(() => {
        if (ready) { return; }
        const init = async () => {

            setCodelangs(parseResponseCollection<Codelang>
                    (await getAllRows(DbTables.codelang))!);

            setTasktypes(parseResponseCollection<Tasktype>
                    (await getAllRows(DbTables.tasktype))!);

            const response = await getAllRows(DbTables.workflow);
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

    const execNew = async (inputName: TKeyvalue) => {
        const existName:boolean = await AppWorkflowsReader.existWorkflow(inputName.value!);
        if(existName){return alert("Workflow name in use.");}
        const workflowId:number|null = await AppWorkflowsCreator
            .createCompleteWorkflow(inputName.value!,codelangs,tasktypes);
        if(workflowId!== null) {
            AppMemmory.saveWorkflowId(workflowId);
            router.push("/workflows/wfeditor");
        }   
    };//end

    const execDelete = async (id: number) => {
        const result:boolean = await AppWorkflowsCrud.delete_workflow(id);
        if(!result) {
            alert("Error deleting workflow.");
            return;
        }
        alert("Workflow deleted success.");
        const workflowIndex:number =  AppWorkflows.getWorkflowIndex(workflows,id);
        const act_workflows:Workflow[] = workflows;
        act_workflows.splice(workflowIndex,1);
        setWorkflows(act_workflows);        
    };//end

    const execItemOperation = (id:number,action:string) => {
        if (action == DB_ITEM_CMD.DELETE) {
            execDelete(id);
        }       
        else if (action == DB_ITEM_CMD.OPEN) {
            AppMemmory.saveWorkflowId(id);
            router.push("/workflows/wfeditor");
            return;
        }         
        else if (action == DB_ITEM_CMD.SELECT) {
            showwfpreview(id);
            return;
        }
    };//end

    const renderManWorkflows = () => {
        if (workflows == null || workflows.length == 0) {
            return (<Text size="2" color="gray">not defined</Text>);
        }
        return (
            <>
                {workflows.map((workflow, index) => (
                    <Box key={index.toString()}>
                        <CardWorkflowMin
                            index={index}
                            workflow={workflow}
                            callback={execItemOperation} />
                    </Box>
                ))}
            </>
        )
    };//end

    //AppMemmory.saveWorkflowId(workflows![itemIndex].id);
    const renderTasktypes = () => {
        if (workflows == null || workflows.length == 0) 
            {return (<Text size="2" color="gray">not defined</Text>);}
        return (
            <>
                {workflows!.map((workflow, index) => (
                    <Box key={index.toString()}>
                        <CardWorkflowMin
                            index={index}
                            workflow={workflow}
                            callback={execItemOperation} />
                    </Box>
                ))}
            </>
        )
    };//end

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
                    
                    <DialogFieldText buttontext="New" title="New workflow" 
                                     item={AppWorkflows.DLG_WK_NAME_INPUT} onsave={execNew}/>
                    
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
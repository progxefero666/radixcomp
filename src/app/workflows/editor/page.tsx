//src\app\workflows\editor\page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Grid, Flex, Text } from "@radix-ui/themes";

import { WorkflowsConfig } from "@/app/workflows/config";

import { SecondBar } from "@/app/workflows/pagecomp/secondbar";
import { Codelang } from "@/db/model/codelang";
import { getAllByTable } from "@/db/services/generic/srvreadcmcollection";
import { DbTables } from "@/db/dbcatalog";
import { parseCollection } from "@/common/parsers/javascriptparser";



/**
 * @returns Page Workflows Editor
 * This component is the main entry point for the workflow editor.
 */
export default function WorkFlowEditor() {

    return (
        <Grid height="100vh" rows="auto 1fr" columns="16% 68% 16%" >


        </Grid>
    );
}


/*
//import { Header } from "@/app/workflows/pagecomp/header";
//import { PrimaryBar } from "@/app/workflows/pagecomp/primarybar";
//import { MainContent } from "@/app/workflows/pagecomp/body";
            <Flex gridColumn="1/4" gridRow="1" >
                <Header codelangs={null}
                    section={WorkflowsConfig.MODULES[0].id} />
            </Flex>

            <Flex gridColumn="1" gridRow="2" >
                <PrimaryBar section={WorkflowsConfig.MODULES[0].id}
                    onselection={() => { }} />
            </Flex>

            <Flex gridColumn="2" gridRow="2" >
                <MainContent codelangs={null} section={WorkflowsConfig.MODULES[0].id} />
            </Flex>

            <Flex gridColumn="3" gridRow="2" >
            <SecondBar />
            </Flex>
*/
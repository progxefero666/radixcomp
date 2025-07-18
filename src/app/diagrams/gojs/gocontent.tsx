//src\app\diagrams\page\maincontent.tsx

import React, { useState, useEffect } from "react";
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";


import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';


import { ButtonsStyle } from "@/radix/radixtheme";

const mainContentStyle = {
    background: 'rgb(56, 56, 56)',
    borderTop: 'none',
    borderBottom: 'none',
    borderLeft: '1px solid rgb(167, 176, 188)',
    borderRight: '1px solid rgb(125, 134, 145)',
};


function initDiagram() {
    // set your license key here before 
    // creating the diagram: go.Diagram.licenseKey = "...";
    // 'undoManager.maxHistoryLength': 0, 

    const diagram = new go.Diagram({
        'undoManager.isEnabled': true,
        'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
        model: new go.GraphLinksModel({
            linkKeyProperty: 'key'
        })
    });

    // define a simple Node template
    diagram.nodeTemplate = new go.Node('Auto')
        .bindTwoWay('location', 'loc', go.Point.parse, go.Point.stringify)
        .add(new go.Shape('RoundedRectangle', { name: 'SHAPE', fill: 'white', strokeWidth: 0 }).bind('fill', 'color'),
            new go.TextBlock({ margin: 8, editable: true }).bindTwoWay('text'));

    return diagram;
};

interface CompProps {
    value?: string;
}
export function GojsContent({ value }: CompProps) {


    const handleModelChange = (changes: any) => {
        alert('GoJS model changed!');
    }
    
    useEffect(() => {

    }, []);

    return (
        <Flex width="100%" direction="column" px="3" py="2" style={mainContentStyle} >
            
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName='diagram-component'
                nodeDataArray={[
                    { key: 0, text: 'Alpha', color: 'lightblue', loc: '0 0' },
                    { key: 1, text: 'Beta', color: 'orange', loc: '150 0' },
                    { key: 2, text: 'Gamma', color: 'lightgreen', loc: '0 150' },
                    { key: 3, text: 'Delta', color: 'pink', loc: '150 150' }
                ]}
                linkDataArray={[
                    { key: -1, from: 0, to: 1 },
                    { key: -2, from: 0, to: 2 },
                    { key: -3, from: 1, to: 1 },
                    { key: -4, from: 2, to: 3 },
                    { key: -5, from: 3, to: 0 }
                ]}
                onModelChange={handleModelChange}
            />
        </Flex>
    );

}//end PrimaryBar

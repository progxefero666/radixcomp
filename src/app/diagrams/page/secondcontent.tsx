//src\app\diagrams\page\secondcontent.tsx

//src\app\diagrams\page\maincontent.tsx

import { useState, useEffect, useRef } from "react";
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";
import { ThemeButtonsStyle } from "@/radix/radixtheme";
import { DiagramCanvas } from "../xefero/diagramcanvas";

const secondContentStyle = {
    background: 'rgb(56, 56, 56)',
    border: '1px solid rgb(167, 176, 188)',
};

const canvasStyle = {
    background: 'rgba(0, 0, 0, 1)',
    padding: '0',
};


let ctrlCanvas:DiagramCanvas| null = null;
interface CompProps {
    value?: string;
}
export function SecondContent({value}: CompProps) {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);


    useEffect(() => {
        if(!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        ctrlCanvas = new DiagramCanvas(ctx!,{width:400,height:400}, "#000000");
        test();
    }, []);    


    const test = () => {
        ctrlCanvas?.render_a({x: 200, y: 200}, "red");
    }

    return (
        <Flex width="100%" direction="column" px="3" py="2" style={secondContentStyle} >
            <canvas ref={canvasRef}
                    width="400" height="400"
                    style={canvasStyle} />
        </Flex>
    );

}//end PrimaryBar

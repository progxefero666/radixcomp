//src\app\diagrams\page\secondcontent.tsx

//src\app\diagrams\page\maincontent.tsx

import { useState, useEffect, useRef } from "react";
import { Box, Grid, Flex, Text, Button, Link, TextField } from "@radix-ui/themes";
import { DiagramCanvas } from "../xefero/diagramcanvas";
import { ImageLoader } from "@/graph2d/util/imageloader";

import ball from "../../../../public/shapes/ball.png";


const secondContentStyle = {
    background: 'rgb(56, 56, 56)',
    border: '1px solid rgb(167, 176, 188)',
};
const canvasStyle = {
    background: 'rgba(0, 0, 0, 1)',
    padding: '0',
};
interface CompProps {
    value?: string;
}
export function SecondContent({value}: CompProps) {

    const [ready, setReady] = useState<boolean>(false);
    const ctrlCanvas = useRef<DiagramCanvas | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const init = async () => {
             
        const ctx = canvasRef.current!.getContext('2d');
        ctrlCanvas.current = new DiagramCanvas(ctx!,{width:400,height:400}, "#000000");    
  
        setReady(true);
        test();
    };

    useEffect(() => {
        if(ready){return;}
        if(!canvasRef.current) return;
        init();        
    },);    


    const test = async () => {
        const imageBitmap = await ImageLoader.getImageBitmap(ball.src);   
        ctrlCanvas.current?.render_a(imageBitmap);
    }

    return (
        <Flex width="100%" direction="column" px="3" py="2" style={secondContentStyle} >
            <canvas ref={canvasRef}
                    width="400" height="400"
                    style={canvasStyle} />
        </Flex>
    );

}//end PrimaryBar

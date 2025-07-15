//src\graph2d\canvaspaint.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";
import { Line2d } from "@/graph2d/model/line2d";
import { Rectangle2d } from "@/graph2d/model/rectangle2d";
import { ShapeCylinder } from "@/graph2d/shapes/shapecylinder"


/**
 * class Canvas Painter Connections
 * constructor(ctx:CanvasRenderingContext2D,dimension:Dim2d,backcolor:string) 
 */
export class CvPaintConnections {

    public ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    };//end


}//end class


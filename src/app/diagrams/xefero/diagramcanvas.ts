//src\app\diagrams\xefero\diagramcanvas.ts

import { CanvasPainter } from "@/graph2d/canvaspaint";
import { Dim2d, Point2d } from "@/graph2d/types2d";

/**
 * DiagramCanvas class
 */
export class DiagramCanvas {

    public ctx: CanvasRenderingContext2D;
    public dim: Dim2d;
    public backcolor: string;
    public center: Point2d = { x: 0, y: 0 };
    public painter:CanvasPainter;

    constructor(ctx: CanvasRenderingContext2D, dimension: Dim2d, backcolor: string) {
        this.ctx = ctx;
        this.dim = dimension;
        this.backcolor = backcolor;
        this.center.x = Math.floor(this.dim.width / 2);
        this.center.y = Math.floor(this.dim.height / 2);
        this.painter = new CanvasPainter(ctx, dimension, backcolor);
    };//end
    
}//end class
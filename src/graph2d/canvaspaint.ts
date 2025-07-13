//src\graph2d\canvaspaint.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";


/**
 * CanvasPainter class
 */
export class CanvasPainter {

    public static readonly POINT_RADIUS = 2;

    public ctx: CanvasRenderingContext2D;
    public dim: Dim2d;
    public backcolor: string;
    public center: Point2d = { x: 0, y: 0 };

    constructor(ctx:CanvasRenderingContext2D,dimension:Dim2d,backcolor:string) {
        this.ctx = ctx;
        this.dim = dimension;
        this.backcolor = backcolor;
        this.center.x = Math.floor(this.dim.width/2);
        this.center.y = Math.floor(this.dim.height/2);
    };//end

    public drawPoint(center: Point2d,color: string) {
        this.ctx.beginPath();
        this.ctx.arc(center.x,center.y,CanvasPainter.POINT_RADIUS, 0, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();        
    }//end

    public drawCf(center: Point2d,radius: number,color: string) {
        this.ctx.beginPath();
        this.ctx.arc(center.x,center.y, radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();        
    }//end
    
    
}//end class
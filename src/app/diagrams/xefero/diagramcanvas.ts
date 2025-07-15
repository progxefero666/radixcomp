//src\app\diagrams\xefero\diagramcanvas.ts

import { CanvasPainter } from "@/graph2d/canvaspaint";
import { ShapeCylinder } from "@/graph2d/shape/shapecylinder";
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
    
    public clear() {
        this.ctx.clearRect(0, 0, this.dim.width, this.dim.height);
    };

    public render_a(imgbitmap:ImageBitmap) {
        
        const position: Point2d = {x:200,y:200};
        this.painter.drawImageBitmap(imgbitmap, position,1);
        
        const cylinder: ShapeCylinder = new ShapeCylinder(position,{width:70,height:100},"blue");
        this.painter.drawShapeCylinder(cylinder);
    };

    public render_b() {

        const position: Point2d = {x:200,y:200};
        const cylinder: ShapeCylinder = new ShapeCylinder(position,{width:70,height:100},"blue");
        this.painter.drawShapeCylinder(cylinder);
    };


    public render_c() {
        const position: Point2d = {x:200,y:200};
        const color: string = "blue";
        this.painter.drawHalfEllipse(position, 50, 20,false, color);
    };


}//end class
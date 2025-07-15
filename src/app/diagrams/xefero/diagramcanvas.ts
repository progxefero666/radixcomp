//src\app\diagrams\xefero\diagramcanvas.ts

import { CanvasPainter } from "@/graph2d/cvpaint";
import { CanvasShapesPainter } from "@/graph2d/cvpaintshapes";
import { ShapeCylinder } from "@/graph2d/shapes/shapecylinder";
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
    public paintershapes:CanvasShapesPainter;

    constructor(ctx: CanvasRenderingContext2D, dimension: Dim2d, backcolor: string) {
        this.ctx = ctx;
        this.dim = dimension;
        this.backcolor = backcolor;
        this.center.x = Math.floor(this.dim.width / 2);
        this.center.y = Math.floor(this.dim.height / 2);
        this.painter = new CanvasPainter(ctx, dimension, backcolor);
        this.paintershapes = new CanvasShapesPainter(ctx);
    };//end
    
    public clear() {
        this.ctx.clearRect(0, 0, this.dim.width, this.dim.height);
    };

    public render_a() {
        
        const position: Point2d = {x:200,y:200};        
        const cylinder: ShapeCylinder = new ShapeCylinder(position,{width:70,height:70},"blue","white");
        this.paintershapes.drawCylinder(cylinder);
    };

    public render_b(imgbitmap:ImageBitmap) {
        const position: Point2d = {x:200,y:200};
        this.painter.drawImageBitmap(imgbitmap, position,1);
    };



}//end class
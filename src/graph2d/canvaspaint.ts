//src\graph2d\canvaspaint.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";
import { Line2d } from "@/graph2d/model/line2d";
import { Rectangle2d } from "@/graph2d/model/rectangle2d";
import { ShapeCylinder } from "@/graph2d/shape/shapecylinder"


/**
 * class CanvasPainter
 * constructor(ctx:CanvasRenderingContext2D,dimension:Dim2d,backcolor:string) 
 */
export class CanvasPainter {

    public static readonly POINT_RADIUS: number = 2;
    public static readonly ROTATION_NONE: number = 0;

    public ctx: CanvasRenderingContext2D;
    public dim: Dim2d;
    public backcolor: string;
    public center: Point2d = { x: 0, y: 0 };

    constructor(ctx: CanvasRenderingContext2D, dimension: Dim2d, backcolor: string) {
        this.ctx = ctx;
        this.dim = dimension;
        this.backcolor = backcolor;
        this.center.x = Math.floor(this.dim.width / 2);
        this.center.y = Math.floor(this.dim.height / 2);
    };//end

    public fillback(color: string) {
        this.ctx.fillStyle = this.backcolor;
        this.ctx.fillRect(0, 0, this.dim.width, this.dim.height);
    }

    // points
    //.................................................................................    

    public fillPointSmall(point: Point2d, color: string) {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }//end    

    public fillPoint(point: Point2d, color: string) {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, CanvasPainter.POINT_RADIUS, 0, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }//end

    public dfillPoints(points: Point2d[], color: string) {
        this.ctx.fillStyle = color;
        for (const point of points) {
            this.fillPoint(point, color);
        }
    }//end

    public drawPointsColors(points: Point2d[], colors: string[]) {
        for (let idx = 0; idx < points.length; idx++) {
            this.fillPoint(points[idx], colors[idx]);
        }
    }//end

    // circunferences
    //.................................................................................        
    public drawCf(center: Point2d, radius: number, color: string) {
        this.ctx.beginPath();
        this.ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }//end

    // lines
    //.................................................................................    

    public drawLine(pointA: Point2d, pointB: Point2d, strokeColor: string) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = strokeColor;
        this.ctx.beginPath();
        this.ctx.moveTo(pointA.x, pointA.y);
        this.ctx.lineTo(pointB.x, pointB.y);
        this.ctx.closePath();
        this.ctx.stroke();
    }//end

    public drawLine2d(line2d: Line2d, color: string) {
        this.drawLine(line2d.point_0, line2d.point_1, color);
    };//end

    // rectangles
    //.................................................................................

    public drawRect(point: Point2d, dim: Dim2d, color: string) {
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(point.x, point.y, dim.width, dim.height);
        this.ctx.stroke();
    };//end

    public fillRect(point: Point2d, dim: Dim2d, color: string) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(point.x, point.y, dim.width, dim.height);
    };//end

    public drawRectangle(rect2d: Rectangle2d) {
        this.drawRect(rect2d.position, rect2d.dim, rect2d.color);
    };//end

    // polygons
    //.................................................................................
    public drawPolygon(points: Point2d[], color: string) {
        if (points.length < 3) return;
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.closePath();
        this.ctx.stroke();
    };//end

    public fillPolygon(points: Point2d[], color: string) {
        if (points.length < 3) return;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.closePath();
        this.ctx.fill();
    };//end   

    public drawfillPolygon(points: Point2d[], backcolor: string, bordercolor: string) {
        if (points.length < 3) return;
        this.ctx.fillStyle = backcolor;
        this.ctx.strokeStyle = bordercolor;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    };//end 

    // elipses
    //.................................................................................

    public drawEllipse(position: Point2d, width: number, height: number,
        startAngle: number, endAngle: number,
        color: string) {
        this.ctx.beginPath();
        this.ctx.ellipse(position.x, position.y, width, height, CanvasPainter.ROTATION_NONE, startAngle, Math.PI * 2);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    };//end

    public drawHalfEllipse(position: Point2d, width: number, height: number, ccw: boolean, color: string) {
        this.ctx.beginPath();
        if (ccw) {
            this.ctx.ellipse(position.x, position.y,
                width, height, CanvasPainter.ROTATION_NONE,
                0, Math.PI, false);
        }
        else {
            this.ctx.ellipse(position.x, position.y, width,
                height, CanvasPainter.ROTATION_NONE,
                Math.PI, 0, true);
        }
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    };//end

    // curves
    //.................................................................................

    public drawCurve2D(point: Point2d, radius: number,
        startAngle: number, endAngle: number,
        color: string,
        counterclockwise: boolean) {
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, radius, startAngle, endAngle, counterclockwise);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();
    };//end 
    public drawShapeCylinder(shape: ShapeCylinder) {

        //.................................................................................  
        // step 1: draw main figure              
        //................................................................................. 
        this.ctx.beginPath();
       
        this.ctx.moveTo(shape.ellipseXCenter - shape.radiusX, shape.ellipseUpYCenter);
        this.ctx.ellipse(shape.ellipseXCenter,shape.ellipseUpYCenter,
                         shape.radiusX,shape.radiusY,0,Math.PI,0,true);       
        this.ctx.lineTo(shape.ellipseXCenter + shape.radiusX, shape.ellipseDownYCenter);
        this.ctx.ellipse(shape.ellipseXCenter,shape.ellipseDownYCenter,
                         shape.radiusX,shape.radiusY,0,0,Math.PI,false );

        this.ctx.lineTo(shape.ellipseXCenter - shape.radiusX, shape.ellipseUpYCenter);
        this.ctx.closePath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = shape.color;
        this.ctx.stroke();
        //.................................................................................    

        //.................................................................................  
        // step 2: draw ellipse up
        //.................................................................................  
        this.ctx.beginPath();
       
        this.ctx.moveTo(shape.ellipseXCenter - shape.radiusX, shape.ellipseUpYCenter);
        this.ctx.ellipse(shape.ellipseXCenter,shape.ellipseUpYCenter,
                         shape.radiusX,shape.radiusY,0,Math.PI,0,true);       

        this.ctx.ellipse(shape.ellipseXCenter,shape.ellipseUpYCenter,
                         shape.radiusX,shape.radiusY,0,0,Math.PI,false);       
        this.ctx.closePath();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();                         
        //................................................................................. 

    };//end


    // shapes   
    //.................................................................................
    /*
    public drawShapeCylinderOld(shape:ShapeCylinder){
    
         //.................................................................................  
        // step 1: draw main figure
        //.................................................................................  
        this.ctx.beginPath();
        this.ctx.moveTo(shape.rectPoints[0].x,shape.rectPoints[0].y);             
           
        this.ctx.bezierCurveTo(
            shape.ellipseUpRefPoints[0].x,shape.ellipseUpRefPoints[0].y,
            shape.ellipseUpRefPoints[1].x,shape.ellipseUpRefPoints[1].y,
            shape.rectPoints[1].x,shape.rectPoints[1].y);

        this.ctx.lineTo(shape.rectPoints[2].x,shape.rectPoints[2].y);

        this.ctx.bezierCurveTo(
            shape.ellipseDownRefPoints[0].x,shape.ellipseDownRefPoints[0].y,
            shape.ellipseDownRefPoints[1].x,shape.ellipseDownRefPoints[1].y,
            shape.rectPoints[3].x,shape.rectPoints[3].y);

        this.ctx.lineTo(shape.rectPoints[0].x,shape.rectPoints[0].y);

        this.ctx.lineWidth = 1; 
        this.ctx.strokeStyle = shape.color; 
        this.ctx.stroke();
        this.ctx.closePath();

         //.................................................................................  
        // step 2: draw ellipse up
        //.................................................................................          
        let drawEllipseUp:boolean = false;
            if (drawEllipseUp) {
            
            this.ctx.beginPath();
            this.ctx.moveTo(shape.rectPoints[0].x,shape.rectPoints[0].y);             
            
            this.ctx.bezierCurveTo(
                shape.ellipseUpRefPoints[0].x,shape.ellipseUpRefPoints[0].y,
                shape.ellipseUpRefPoints[1].x,shape.ellipseUpRefPoints[1].y,
                shape.rectPoints[1].x,shape.rectPoints[1].y);    
                
            this.ctx.bezierCurveTo(
                shape.ellipseUpRefPoints[2].x,shape.ellipseUpRefPoints[2].y,
                shape.ellipseUpRefPoints[3].x,shape.ellipseUpRefPoints[3].y,
                shape.rectPoints[0].x,shape.rectPoints[0].y);          
                
            this.ctx.lineWidth = 1; 
            this.ctx.strokeStyle = "green"; 
            this.ctx.stroke();
            this.ctx.closePath();          
        }  
         //.................................................................................  

    };//end 

    */

    public drawImageBitmap(img: ImageBitmap, pointxy: Point2d, alpha: number): void {
        this.ctx.globalAlpha = alpha;
        this.ctx.drawImage(img, pointxy.x, pointxy.y, img.width, img.height);
        this.ctx.globalAlpha = alpha;
    }//end

    public drawImageBitmapDim(img: ImageBitmap, pointxy: Point2d, dimension: Dim2d, alpha: number): void {
        this.ctx.globalAlpha = alpha;
        this.ctx.drawImage(img, pointxy.x, pointxy.y, dimension.width, dimension.height);
        this.ctx.globalAlpha = 1;
    }//end


    public drawMemoryImagen(objectURL: string, pointxy: Point2d, dimension: Dim2d) {
        const img = new Image();
        if (objectURL) {
            img.src = objectURL;
            img.onload = () => {
                this.ctx.drawImage(img, pointxy.x, pointxy.y, dimension.width, dimension.height);
            };
        }
    }//end

}//end class

/*
    public drawShapeCylinder(shape:ShapeCylinder){
    
        this.ctx.beginPath();

        this.ctx.moveTo(shape.rectPoints[0].x,shape.rectPoints[0].y);             
           
        //this.ctx.lineTo(shape.rectPoints[1].x,shape.rectPoints[1].y);  
        this.ctx.bezierCurveTo(
            shape.ellipseUpRefPoints[0].x,shape.ellipseUpRefPoints[0].y,
            shape.ellipseUpRefPoints[1].x,shape.ellipseUpRefPoints[1].y,
            shape.rectPoints[1].x,shape.rectPoints[1].y);

        this.ctx.lineTo(shape.rectPoints[2].x,shape.rectPoints[2].y);                             
        this.ctx.bezierCurveTo(
            shape.ellipseDownRefPoints[0].x,shape.ellipseDownRefPoints[0].y,
            shape.ellipseDownRefPoints[1].x,shape.ellipseDownRefPoints[1].y,
            shape.rectPoints[3].x,shape.rectPoints[3].y);
        this.ctx.lineTo(shape.rectPoints[0].x,shape.rectPoints[0].y);

        this.ctx.lineWidth = 1; 
        this.ctx.strokeStyle = shape.color; 
        this.ctx.stroke();
        this.ctx.closePath();

    };//end 
*/
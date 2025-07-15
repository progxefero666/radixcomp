//src\graph2d\shape\shapecylinder.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";
import { init } from "next/dist/compiled/webpack/webpack";
import { ShapeUtil } from "../util/shapeutil";


/**
 * ShapeCylinder class
 * Represents a cylinder shape in 2D space.
 */
export class ShapeCylinder {

    public position: Point2d;
    public dim: Dim2d;
    public color: string;
    public halfDimY: number = 0;

    public rectPoints: Point2d[] = [];

    public ellipsesCenter: Point2d[] = [];
    public ellipseARefPoint: Point2d[] = [];
    public ellipseDownRefPoint: Point2d[] = [];

    constructor(position:Point2d,dim:Dim2d,color:string) {
        this.position = position;
        this.dim = dim;
        this.color = color;
        
        this.halfDimY   = Math.floor(this.dim.height / 2);
        this.rectPoints = ShapeUtil.getRectPoints(this.position, this.dim);

        this.ellipsesCenter[0] = {x: position.x, y: position.y - this.halfDimY};
        this.ellipsesCenter[1] = {x: position.x, y: position.y + this.halfDimY};

        //y end = ± (4*radius)/3;

        const sizeCalcY:number = this.dim.width / 5

        this.ellipseARefPoint[0] = {
            x: this.ellipsesCenter[0].x, 
            y: this.ellipsesCenter[0].y + sizeCalcY
        };
        
        this.ellipseDownRefPoint[0] = {
            x: this.ellipsesCenter[1].x, 
            y: this.ellipsesCenter[1].y + sizeCalcY
        };

    
    };//end


}//end class
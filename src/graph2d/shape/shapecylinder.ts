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

    public rectPoints: Point2d[] = [];
    public ellipsesCenter: Point2d[] = [];

    public ellipsesRefPoint: Point2d[] = [];

    public ellipsesDim: Dim2d= {width: 0, height: 0};

    constructor(position:Point2d,dim:Dim2d,color:string) {
        this.position = position;
        this.dim = dim;
        this.color = color;

        this.rectPoints = ShapeUtil.getRectPoints(this.position, this.dim);

        this.ellipsesDim.width = this.dim.width;
        this.ellipsesDim.height = Math.floor(this.ellipsesDim.width / 5);
        this.ellipsesCenter[0] = {x: position.x, y: position.y - this.dim.height / 2};
        this.ellipsesCenter[1] = {x: position.x, y: position.y + this.dim.height / 2};

        //y end = ± (4*radius)/3;
        this.ellipsesRefPoint[0] = {
            x: this.ellipsesCenter[0].x, 
            y: this.ellipsesCenter[0].y - (this.ellipsesDim.height*2)
        };
        
        this.ellipsesRefPoint[1] = {
            x: this.ellipsesCenter[1].x, 
            y: this.ellipsesCenter[1].y - (this.ellipsesDim.height*2)
        };

    };//end


}//end class
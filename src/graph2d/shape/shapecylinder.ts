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
    public ellipsesDim: Dim2d= {width: 0, height: 0};

    constructor(position:Point2d,dim:Dim2d,color:string) {
        this.position = position;
        this.dim = dim;
        this.color = color;
        this.rectPoints = ShapeUtil.getRectPoints(position, dim);
        this.ellipsesDim.width = dim.width;
        this.ellipsesDim.height = Math.floor(this.ellipsesDim.width / 5);

        this.ellipsesCenter.push({x: position.x, y: position.y - dim.height / 2});
        this.ellipsesCenter.push({x: position.x, y: position.y + dim.height / 2});
    };//end


}//end class
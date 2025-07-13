//src\graph2d\shape\shapecylinder.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";


/**
 * ShapeCylinder class
 * Represents a cylinder shape in 2D space.
 */
export class ShapeCylinder {

    public position: Point2d;
    public dim: Dim2d;
    public color: string;

    constructor(position:Point2d,dim:Dim2d,color:string) {
        this.position = position;
        this.dim = dim;
        this.color = color;
    }

}//end class
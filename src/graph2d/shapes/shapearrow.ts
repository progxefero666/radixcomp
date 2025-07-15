//src\graph2d\shape\shapearrow.ts


import { Dim2d, Point2d } from "@/graph2d/types2d";
import { ShapeUtil } from "../util/shapeutil";
import { Shape } from "@/graph2d/shapes/shape";

/**
 * Shape: Cylinder
 * class: ShapeCylinder
 * public darkColor: string = "#1c1e20ff"; 
 */
export class ShapeArrow extends Shape {

    public target:Point2d = {x:0,y:0};

    constructor(position:Point2d,dim:Dim2d,fillColor:string,strokeColor:string,target:Point2d) {
        super(position,dim,fillColor,strokeColor);
        this.target = target;
        this.calculateElements();
    };

    public calculateElements() {

    };

}//end class
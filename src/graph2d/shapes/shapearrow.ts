//src\graph2d\shape\shapearrow.ts


import { Dim2d, Point2d } from "@/graph2d/types2d";
import { ShapeUtil } from "../util/shapeutil";
import { Shape } from "@/graph2d/shapes/shape";
import { XMath2d } from "@/common/math/xmath2d";

/**
 * Shape: Cylinder
 * class: ShapeCylinder
 * public darkColor: string = "#1c1e20ff"; 
 */
export class ShapeArrow extends Shape {

    public static readonly DEF_HEAD_LEN: number = 10;
    public static readonly DEF_HEAD_FACTOR: number = 7;

    public target:Point2d;
    public width:number;
    public angle:number;
    public headLen:number    = ShapeArrow.DEF_HEAD_LEN;
    public headFactor:number = ShapeArrow.DEF_HEAD_FACTOR;

    constructor(position:Point2d,dim:Dim2d|null,fillColor:string,strokeColor:string,target:Point2d,width:number) {
        super(position,dim,fillColor,strokeColor);
        this.target = target;
        this.width = width;
        this.angle = XMath2d.getPointsAngleInPlain(this.position, this.target);
        this.calculateElements();
    };

    public calculateElements() {
        
                                 
    };

}//end class
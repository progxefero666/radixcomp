//src\graph2d\shape\shapecylinder.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";

import { ShapeUtil } from "@/graph2d/util/shapeutil";
import { XMath } from "@/common/math/xmath";


/**
 * ShapeCylinder class
 * Represents a cylinder shape in 2D space.
 */
export class ShapeCylinder {

    public static readonly INCLIN_PERCENT: number = 30; // 20% of the width

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

        
        this.ellipsesRefPoint[0] = {
            x: this.ellipsesCenter[0].x, 
            y: this.ellipsesCenter[0].y + (this.ellipsesDim.height*2)
        };
        
        this.ellipsesRefPoint[1] = {
            x: this.ellipsesCenter[1].x, 
            y: this.ellipsesCenter[1].y + (this.ellipsesDim.height*2)
        };

    };//end

    public init() {
        this.rectPoints = ShapeUtil.getRectPoints(this.position,this.dim);     

        //y end = ± (4*radius)/3;
        this.ellipsesDim.width = this.dim.width;
        const radiusBase:number = this.dim.width / 2;
        const sizeCalcY:number = XMath.getValueOfPercent(radiusBase, ShapeCylinder.INCLIN_PERCENT);
    };//end

}//end class
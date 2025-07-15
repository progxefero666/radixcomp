//src\graph2d\shape\shapecylinder.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";
import { init } from "next/dist/compiled/webpack/webpack";
import { ShapeUtil } from "../util/shapeutil";
import { XMath } from "@/common/math/xmath";


/**
 * ShapeCylinder class
 * Represents a cylinder shape in 2D space.
 * y end = ± (4*radius)/3;
 */
export class ShapeCylinder {

    public static readonly INCLIN_PERCENT: number = 60;

    public position: Point2d;
    public dim: Dim2d;
    public color: string;
    public halfDimY: number = 0;

    public rectPoints: Point2d[] = [];

    public ellipsesCenter: Point2d[] = [];
    public ellipseUpRefPoints: Point2d[] = [];
    public ellipseDownRefPoints: Point2d[] = [];

    constructor(position: Point2d, dim: Dim2d, color: string) {
        this.position = position;
        this.dim = dim;
        this.color = color;
        this.init();
    };//end

    public init() {

        this.halfDimY = Math.floor(this.dim.height / 2);
        this.rectPoints = ShapeUtil.getRectPoints(this.position, this.dim);

        this.ellipsesCenter[0]={x:this.position.x,y:this.position.y-this.halfDimY};
        this.ellipsesCenter[1]={x:this.position.x,y:this.position.y+this.halfDimY};

        const radiusBase:number = Math.floor(this.dim.width / 2);
        const sizeCalcX:number  = Math.floor(radiusBase / 4);
        const sizeCalcY:number = XMath
            .getValueOfPercent(radiusBase, ShapeCylinder.INCLIN_PERCENT);     
   

        this.ellipseUpRefPoints[0] = {
            x: this.ellipsesCenter[0].x - sizeCalcX,
            y: this.ellipsesCenter[0].y + sizeCalcY
        };
        this.ellipseUpRefPoints[1] = {
            x: this.ellipsesCenter[0].x + sizeCalcX,
            y: this.ellipsesCenter[0].y + sizeCalcY
        };

        this.ellipseUpRefPoints[2] = {
            x: this.ellipsesCenter[0].x + sizeCalcX,
            y: this.ellipsesCenter[0].y - sizeCalcY
        };
        this.ellipseUpRefPoints[3] = {
            x: this.ellipsesCenter[0].x - sizeCalcX,
            y: this.ellipsesCenter[0].y - sizeCalcY
        };


        this.ellipseDownRefPoints[0] = {
            x: this.ellipsesCenter[1].x + sizeCalcX,
            y: this.ellipsesCenter[1].y + sizeCalcY
        };

        this.ellipseDownRefPoints[1] = {
            x: this.ellipsesCenter[1].x - sizeCalcX,
            y: this.ellipsesCenter[1].y + sizeCalcY
        };        

        this.ellipseDownRefPoints[0] = {
            x: this.ellipsesCenter[1].x - sizeCalcX,
            y: this.ellipsesCenter[1].y - sizeCalcY
        };

        this.ellipseDownRefPoints[1] = {
            x: this.ellipsesCenter[1].x + sizeCalcX,
            y: this.ellipsesCenter[1].y - sizeCalcY
        };        
    };//end

}//end class
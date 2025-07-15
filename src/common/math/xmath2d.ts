//src\common\math\xmath.ts


import { Dim2d, Point2d } from "@/graph2d/types2d";

/**
 * class XMath2d.getPointsAngleInPlain
 */
export class XMath2d {

    public static readonly ROTATION_0: number = 0;
 
    public static getPointsAngleInPlain(point_0:Point2d,point_1:Point2d): number {
        return Math.atan2(
            (point_1.y-point_0.y),
            (point_1.x-point_0.x));  
    }

}//end class
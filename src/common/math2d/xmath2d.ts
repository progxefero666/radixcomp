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
    };//end

    public static getPointsDistance(pointA: Point2d, pointB: Point2d): number {
        const dx = pointA.x - pointB.x;
        const dy = pointA.y - pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    };//end

    public static getCenterPoint(point_0:Point2d,point_1:Point2d): Point2d {
        const x = (point_0.x + point_1.x) / 2;
        const y = (point_0.y + point_1.y) / 2;
        return { x, y };
    }

    /*
    public static getCenterPointOld(point_0:Point2d,point_1:Point2d): Point2d {
        let coordX = 0;
        let coordY = 0;
        if(point_1.x>=point_0.x){coordX = point_0.x + ((point_1.x-point_0.x)/2);}
        else {coordX = point_1.x + ((point_0.x-point_1.x)/2);}        
        if(point_1.y>=point_0.y){coordY = point_0.y + ((point_1.y-point_0.y)/2);}
        else {coordY = point_1.y + ((point_0.y-point_1.y)/2);}        
        return {x:coordX,y:coordY};
    };*/


}//end class
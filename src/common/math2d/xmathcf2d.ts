//src\common\math\xmath.ts


import { Dim2d, Point2d } from "@/graph2d/types2d";

/**
 * class XMath2d.getPointsAngleInPlain
 */
export class XMathCircunf2d {

    public static getCfPoint(centro: Point2d, radio: number, anguloRadianes: number): Point2d {
        return {
            x: centro.x + (radio * Math.cos(anguloRadianes)),
            y: centro.y + (radio * Math.sin(anguloRadianes))
        };
    };//end

    public static getCfPoints(center: Point2d, radius: number, countPoints: number): Point2d[] {
        const angleStep = (2 * Math.PI) / countPoints;
        const points: Point2d[] = [];
        for (let i = 0; i < countPoints; i++) {
            const angle = i * angleStep;
            const point = {
                x: center.x + radius * Math.cos(angle),
                y: center.y + radius * Math.sin(angle)
            }
            points.push(point);
        }
        return points;
    };//end
    

}//end class
//src\graph2d\model\line2d.ts

import { Point2d } from "@/graph2d/types2d";

export class Line2d {

    public color: string = "#ffffffff";
    public point_0: Point2d;
    public point_1: Point2d;
    

    constructor(start:Point2d,end:Point2d,color:string) {
        this.point_0 = start;
        this.point_1 = end;
        this.color = color;
    }

    public length(): number {
        const dx = this.point_1.x - this.point_0.x;
        const dy = this.point_1.y - this.point_0.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public midpoint(): Point2d {
        return {
            x: (this.point_0.x + this.point_1.x) / 2,
            y: (this.point_0.y + this.point_1.y) / 2
        };
    }
}
//src\graph2d\shape\shapecylinder.ts

import { Dim2d, Point2d } from "@/graph2d/types2d";
import { init } from "next/dist/compiled/webpack/webpack";
import { ShapeUtil } from "../util/shapeutil";
import { XMath } from "@/common/math/xmath";
import { Graph2d } from "../graph2d";
// src\graph2d\shape\shapecylinder.ts

// src\graph2d\shape\shapecylinder.ts
// src\graph2d\shape\shapecylinder.ts

// src\graph2d\shape\shapecylinder.ts

// src\graph2d\shape\shapecylinder.ts

export class ShapeCylinder {

    public position: Point2d;
    public dim: Dim2d;
    public color: string;
    public halfDimY: number = 0;
    public radiusX: number = 0;
    public radiusY: number = 0;

    public rectPoints: Point2d[] = [];

    public ellipseXCenter: number = 0;
    public ellipseUpYCenter: number = 0;
    public ellipseDownYCenter: number = 0;

    constructor(position: Point2d, dim: Dim2d, color: string) {
        this.position = position;
        this.dim = dim;
        this.color = color;
        this.halfDimY = Math.floor(this.dim.height / 2);
        this.radiusX = Math.floor(this.dim.width / 2);
        this.radiusY = Math.floor(this.dim.width * 0.2); 
        this.calculateElements();
    };

    public calculateElements() {
        this.rectPoints = ShapeUtil.getRectPoints(this.position, this.dim);
        this.ellipseXCenter     = this.position.x;
        this.ellipseUpYCenter   = this.position.y - this.halfDimY;
        this.ellipseDownYCenter = this.position.y + this.halfDimY;
    };

}//end class
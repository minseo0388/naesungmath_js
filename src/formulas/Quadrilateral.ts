
export class Quadrilateral {
    static parallelogramArea({ baseSide, height }: { baseSide?: number, height?: number }): number {
        if (baseSide !== undefined && height !== undefined) return baseSide * height;
        throw new Error("Insufficient parameters");
    }
    static rectangleArea({ width, height }: { width?: number, height?: number }): number {
        if (width !== undefined && height !== undefined) return width * height;
        throw new Error("Insufficient parameters");
    }
    static rectangleDiagonal({ width, height }: { width?: number, height?: number }): number {
        if (width !== undefined && height !== undefined) return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        throw new Error("Insufficient parameters");
    }
    static rectanglePerimeter({ width, height }: { width?: number, height?: number }): number {
        if (width !== undefined && height !== undefined) return 2 * (width + height);
        throw new Error("Insufficient parameters");
    }
    static rhombusArea({ diagonal1, diagonal2 }: { diagonal1?: number, diagonal2?: number }): number {
        if (diagonal1 !== undefined && diagonal2 !== undefined) return 0.5 * diagonal1 * diagonal2;
        throw new Error("Insufficient parameters");
    }
    static squareArea(side?: number): number {
        if (side !== undefined) return Math.pow(side, 2);
        throw new Error("Insufficient parameters");
    }
    static trapezoidArea({ topSide, bottomSide, height }: { topSide?: number, bottomSide?: number, height?: number }): number {
        if (topSide !== undefined && bottomSide !== undefined && height !== undefined)
            return 0.5 * (topSide + bottomSide) * height;
        throw new Error("Insufficient parameters");
    }
}

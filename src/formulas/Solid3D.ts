
export class Solid3D {
    static coneArea({ radius, height }: { radius?: number, height?: number }): number {
        if (radius !== undefined && height !== undefined) {
            return Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius));
        }
        throw new Error("Insufficient parameters");
    }

    static coneVolume({ radius, height }: { radius?: number, height?: number }): number {
        if (radius !== undefined && height !== undefined) {
            return (1.0 / 3.0) * Math.PI * Math.pow(radius, 2) * height;
        }
        throw new Error("Insufficient parameters");
    }

    static cubeArea(side: number): number {
        return 6 * Math.pow(side, 2);
    }

    static cubeVolume(side: number): number {
        return Math.pow(side, 3);
    }

    static cuboidArea({ length, width, height }: { length: number, width: number, height: number }): number {
        return 2 * (length * width + width * height + height * length);
    }

    static cuboidDiagonal({ length, width, height }: { length: number, width: number, height: number }): number {
        return Math.sqrt(length * length + width * width + height * height);
    }

    static cuboidVolume({ length, width, height }: { length: number, width: number, height: number }): number {
        return length * width * height;
    }

    static cylinderArea({ radius, height }: { radius?: number, height?: number }): number {
        if (radius !== undefined && height !== undefined) {
            return (2 * Math.PI * radius * height) + (2 * Math.PI * radius * radius);
        }
        throw new Error("Insufficient parameters");
    }

    static cylinderVolume({ radius, height }: { radius?: number, height?: number }): number {
        if (radius !== undefined && height !== undefined) {
            return Math.PI * Math.pow(radius, 2) * height;
        }
        throw new Error("Insufficient parameters");
    }

    static sphereArea(radius: number): number {
        return 4 * Math.PI * Math.pow(radius, 2);
    }

    static sphereVolume(radius: number): number {
        return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);
    }

    static squarePyramidArea({ baseSide, height, slantEdge }: { baseSide?: number, height?: number, slantEdge?: number }): number {
        if (baseSide !== undefined && slantEdge !== undefined) {
            return (baseSide * Math.sqrt(4 * slantEdge * slantEdge - baseSide * baseSide)) + (baseSide * baseSide);
        }
        if (baseSide !== undefined && height !== undefined) {
            return (baseSide * Math.sqrt(4 * height * height + baseSide * baseSide)) + (baseSide * baseSide);
        }
        throw new Error("Insufficient parameters");
    }

    static squarePyramidHeight({ baseSide, slantEdge }: { baseSide?: number, slantEdge?: number }): number {
        if (baseSide !== undefined && slantEdge !== undefined) {
            return Math.sqrt(slantEdge * slantEdge - (baseSide * baseSide) / 2.0);
        }
        throw new Error("Insufficient parameters");
    }

    static squarePyramidVolume({ baseSide, height, slantEdge }: { baseSide?: number, height?: number, slantEdge?: number }): number {
        if (baseSide !== undefined && height !== undefined) {
            return (1.0 / 3.0) * Math.pow(baseSide, 2) * height;
        }
        if (baseSide !== undefined && slantEdge !== undefined) {
            return (1.0 / 3.0) * baseSide * baseSide * Math.sqrt(slantEdge * slantEdge - (baseSide * baseSide) / 2.0);
        }
        throw new Error("Insufficient parameters");
    }

    static tetrahedronArea(side: number): number {
        return Math.sqrt(3) * Math.pow(side, 2);
    }

    static tetrahedronHeight(side: number): number {
        return Math.sqrt(2.0 / 3.0) * side;
    }

    static tetrahedronVolume(side: number): number {
        return (Math.sqrt(2) / 12.0) * Math.pow(side, 3);
    }

    static triangularPyramidVolume({ baseArea, height }: { baseArea?: number, height?: number }): number {
        if (baseArea !== undefined && height !== undefined) {
            return (1.0 / 3.0) * baseArea * height;
        }
        throw new Error("Insufficient parameters");
    }
}

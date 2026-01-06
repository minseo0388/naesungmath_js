
export class Circle {
    static arcLength({ radius, angle }: { radius?: number, angle?: number }): number {
        if (radius !== undefined && angle !== undefined) return 2 * Math.PI * radius * (angle / 360.0);
        throw new Error("Insufficient parameters");
    }
    static area(radius?: number): number {
        if (radius !== undefined) return Math.PI * Math.pow(radius, 2);
        throw new Error("Insufficient parameters");
    }
    static perimeter(radius?: number): number {
        if (radius !== undefined) return 2 * Math.PI * radius;
        throw new Error("Insufficient parameters");
    }
    static sectorAngle({ radius, arcLength }: { radius?: number, arcLength?: number }): number {
        if (radius !== undefined && arcLength !== undefined) return (arcLength * 180.0) / (Math.PI * radius);
        throw new Error("Insufficient parameters");
    }
    static sectorArea({ radius, angle }: { radius?: number, angle?: number }): number {
        if (radius !== undefined && angle !== undefined) return Math.PI * Math.pow(radius, 2) * (angle / 360.0);
        throw new Error("Insufficient parameters");
    }
}


export class AnalyticGeometry {
    static centerGravity(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): [number, number] {
        return [(x1 + x2 + x3) / 3.0, (y1 + y2 + y3) / 3.0];
    }

    static eccentricity(a: number, b: number): number {
        if (a === 0) throw new Error("Divide by zero");
        return Math.sqrt(1 - Math.pow(b, 2) / Math.pow(a, 2));
    }

    static ellipseArea(a: number, b: number): number {
        return Math.PI * a * b;
    }

    static isInRange(value: number, min: number, max: number): boolean {
        return value >= min && value <= max;
    }
}

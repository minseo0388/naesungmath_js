
export class Polygon {
    static area(n: number, sideLength: number): number {
        return (n * Math.pow(sideLength, 2)) / (4 * Math.tan(Math.PI / n));
    }
    static diagonalCount(n: number): number {
        return n * (n - 3) / 2;
    }
    static eulerTheorem(v: number, e: number, f: number): boolean {
        return (v - e + f) === 2;
    }
    static hexagonArea(side: number): number {
        return (3 * Math.sqrt(3) * Math.pow(side, 2)) / 2;
    }
    static interiorAngleDeg(n: number): number {
        return 180 * (n - 2) / n;
    }
    static interiorAngleRad(n: number): number {
        return Math.PI * (n - 2) / n;
    }
    static interiorAngleSumDeg(n: number): number {
        return 180 * (n - 2);
    }
    static interiorAngleSumRad(n: number): number {
        return Math.PI * (n - 2);
    }
    static pentagonArea(side: number): number {
        return (Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2)) / 4;
    }
    static pentagonDiagonal(side: number): number {
        return (1 + Math.sqrt(5)) / 2 * side;
    }
    static pentagonHeight(side: number): number {
        return (Math.sqrt(5 + 2 * Math.sqrt(5)) * side) / 2;
    }
}

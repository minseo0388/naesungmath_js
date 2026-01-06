
export class Trigonometry {
    static degreeToRad(deg: number): number {
        return deg * (Math.PI / 180);
    }
    static radToDegree(rad: number): number {
        return rad * (180 / Math.PI);
    }
}

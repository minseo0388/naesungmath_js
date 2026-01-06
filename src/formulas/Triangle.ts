
export class Triangle {
    static area({
        baseSide, height,
        sideA, sideB, sideC, angle,
        equilateralSide,
        circumRadius, inRadius
    }: {
        baseSide?: number, height?: number,
        sideA?: number, sideB?: number, sideC?: number, angle?: number,
        equilateralSide?: number,
        circumRadius?: number, inRadius?: number
    }): number {
        if (baseSide !== undefined && height !== undefined) {
            return 0.5 * baseSide * height;
        }
        if (sideA !== undefined && sideB !== undefined && angle !== undefined) {
            return 0.5 * sideA * sideB * Math.sin(angle);
        }
        if (equilateralSide !== undefined) {
            return (Math.sqrt(3) / 4.0) * Math.pow(equilateralSide, 2);
        }
        if (sideA !== undefined && sideB !== undefined && sideC !== undefined && circumRadius === undefined && inRadius === undefined) {
            const a = sideA, b = sideB, c = sideC;
            const cosTheta = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
            const sinTheta = Math.sqrt(1 - Math.pow(cosTheta, 2));
            return (a * b * sinTheta) / 2.0;
        }
        if (circumRadius !== undefined && sideA !== undefined && sideB !== undefined && sideC !== undefined) {
            return (sideA * sideB * sideC) / (4 * circumRadius);
        }
        if (inRadius !== undefined && sideA !== undefined && sideB !== undefined && sideC !== undefined) {
            return (sideA + sideB + sideC) / 2.0 * inRadius;
        }
        throw new Error("Insufficient parameters");
    }

    static equilateralHeight(side: number): number {
        return (Math.pow(3, 0.5) / 2.0) * side;
    }

    static pythagoras(a: number, b: number): number {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
}

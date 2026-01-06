
export class Equation {
    static cubicRoots(a: number, b: number, c: number, d: number): number {
        // term1 = 2b^3 - 9abc + 27a^2d
        const term1 = 2 * Math.pow(b, 3) - (9 * a * b * c) + (27 * Math.pow(a, 2) * d);
        // term2 = b^2 - 3ac
        const term2 = Math.pow(b, 2) - 3 * a * c;
        const discriminantRoot = Math.pow(Math.pow(term1, 2) - 4 * Math.pow(term2, 3), 0.5);

        const x = Math.pow(0.5 * (term1 + discriminantRoot), 1.0 / 3.0);
        const y = Math.pow(0.5 * (term1 - discriminantRoot), 1.0 / 3.0);

        return -(b / (3 * a)) - ((1.0 / (3 * a)) * x) - ((1.0 / (3 * a)) * y);
    }

    static newton(f: (x: number) => number, count: number, initx: number = 2): number {
        function diff(func: (x: number) => number, x: number, density: number = 5): number {
            const dx = 2 * Math.pow(10, -density);
            const dy = func(x + Math.pow(10, -density)) - func(x - Math.pow(10, -density));
            return dy / dx;
        }

        let x_curr = initx;
        for (let i = 0; i < count; i++) {
            x_curr = x_curr - f(x_curr) / diff(f, x_curr);
        }
        return x_curr;
    }

    static quadraticRoots(a: number, b: number, c: number): [number, number] {
        const discriminant = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
        const x1 = (-b + discriminant) / (2 * a);
        const x2 = (-b - discriminant) / (2 * a);
        return [x1, x2];
    }

    static rootAndCoefficient(a: number, b: number, c: number, type: number): number | null {
        if (type === 1) return -(b / a);
        if (type === 2) return (b / c);
        return null;
    }
}

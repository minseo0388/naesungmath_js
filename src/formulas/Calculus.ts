
import { BasicMath } from './BasicMath';

export class Calculus {
    static diff(f: (x: number) => number, x: number, h: number = 1e-5): number {
        return (f(x + h) - f(x)) / h;
    }

    static infiniteSeries(type: number, x: number = 0): number {
        if (type === 4) return 1.0 / (1.0 - x);
        if (type === 1) return 2.0;
        if (type === 2) return 2.0 / 3.0;
        if (type === 3) return Math.exp(x);
        return 0;
    }

    static integral(f: (x: number) => number, start: number, end: number, density: number = 100): number {
        const step = (end - start) / density;
        let area = 0;
        for (let i = 0; i < density; i++) {
            const val = start + i * step;
            area += f(val) * step;
        }
        return area;
    }

    static maclaurin(f: (x: number) => number, x: number, n: number): number {
        return Calculus.taylor(f, x, 0, n);
    }

    static sigma(start: number, end: number, func: (i: number) => number): number {
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += func(i);
        }
        return sum;
    }

    static sigmaCubed(n: number): number {
        return Math.pow(n * (n + 1) / 2, 2);
    }

    static sigmaSquared(n: number): number {
        return n * (n + 1) * (2 * n + 1) / 6.0;
    }

    static taylor(f: (x: number) => number, x: number, a: number, n: number): number {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += (Calculus.diffN(f, a, i) / BasicMath.factorial(i)) * Math.pow(x - a, i);
        }
        return sum;
    }

    private static diffN(f: (x: number) => number, x: number, n: number): number {
        if (n === 0) return f(x);
        if (n === 1) return Calculus.diff(f, x);
        const h = 1e-4;
        return (Calculus.diffN(f, x + h, n - 1) - Calculus.diffN(f, x - h, n - 1)) / (2 * h);
    }
}

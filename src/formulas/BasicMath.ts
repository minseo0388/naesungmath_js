
export class BasicMath {
    static add(a: number, b: number): number { return a + b; }
    static divide(a: number, b: number): number {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
    static factorial(n: number): number {
        if (n < 0) throw new Error("Undefined for negative numbers");
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    }
    static gcd(a: number, b: number): number {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return Math.abs(a);
    }
    static minus(a: number, b: number): number { return a - b; }
    static multiply(a: number, b: number): number { return a * b; }
    static plus(a: number, b: number): number { return a + b; }
    static pow(a: number, b: number): number { return Math.pow(a, b); }
    static round(a: number): number { return Math.round(a); }
    static sqrt(a: number): number { return Math.sqrt(a); }
    static subtract(a: number, b: number): number { return a - b; }
}

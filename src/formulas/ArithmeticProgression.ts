export class ArithmeticProgression {
    static solve(params: {
        a?: number;
        d?: number;
        n?: number;
        an?: number;
        s?: number;
    }): { a: number; d: number; n: number; an: number; s: number } {
        const { a, d, n, an, s } = params;

        // Count provided values
        const provided = [a, d, n, an, s].filter(v => v !== undefined).length;
        if (provided < 3) {
            throw new Error('At least 3 values must be provided');
        }

        let result = { ...params } as { a: number; d: number; n: number; an: number; s: number };

        // Solve based on combinations
        // Case 1: a, d, n given
        if (a !== undefined && d !== undefined && n !== undefined) {
            result.a = a;
            result.d = d;
            result.n = n;
            result.an = a + (n - 1) * d;
            result.s = (n * (a + result.an)) / 2;
            return result;
        }

        // Case 2: a, d, an given
        if (a !== undefined && d !== undefined && an !== undefined) {
            result.a = a;
            result.d = d;
            result.an = an;
            result.n = ((an - a) / d) + 1;
            result.s = (result.n * (a + an)) / 2;
            return result;
        }

        // Case 3: a, n, an given
        if (a !== undefined && n !== undefined && an !== undefined) {
            result.a = a;
            result.n = n;
            result.an = an;
            result.d = (an - a) / (n - 1);
            result.s = (n * (a + an)) / 2;
            return result;
        }

        // Case 4: d, n, an given
        if (d !== undefined && n !== undefined && an !== undefined) {
            result.d = d;
            result.n = n;
            result.an = an;
            result.a = an - (n - 1) * d;
            result.s = (n * (result.a + an)) / 2;
            return result;
        }

        // Add more cases as needed
        throw new Error('Unable to solve with the provided combination of values');
    }
}

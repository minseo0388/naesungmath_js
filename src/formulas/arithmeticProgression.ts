
export interface APSolution {
    a?: number;
    d?: number;
    n?: number;
    an?: number;
    s?: number;
}

export class ArithmeticProgression {
    static solve({ a, d, n, an, s }: APSolution): APSolution {
        // Limit iterations to prevent infinite loops if logic is flawed
        let changed = true;
        let loopCount = 0;

        // Clone to avoid side effects on input
        let res: APSolution = { a, d, n, an, s };

        while (changed && loopCount < 5) {
            changed = false;

            // Standard formulas
            if (res.an === undefined && res.a !== undefined && res.n !== undefined && res.d !== undefined) {
                res.an = res.a + (res.n - 1) * res.d;
                changed = true;
            }

            if (res.s === undefined && res.n !== undefined && res.a !== undefined && res.an !== undefined) {
                res.s = res.n * (res.a + res.an) / 2;
                changed = true;
            }

            if (res.s === undefined && res.n !== undefined && res.a !== undefined && res.d !== undefined) {
                res.s = res.n * (2 * res.a + (res.n - 1) * res.d) / 2;
                changed = true;
            }

            // Inverses
            if (res.a === undefined && res.an !== undefined && res.n !== undefined && res.d !== undefined) {
                res.a = res.an - (res.n - 1) * res.d;
                changed = true;
            }

            if (res.d === undefined && res.an !== undefined && res.a !== undefined && res.n !== undefined) {
                res.d = (res.an - res.a) / (res.n - 1);
                changed = true;
            }

            if (res.n === undefined && res.an !== undefined && res.a !== undefined && res.d !== undefined) {
                res.n = (res.an - res.a) / res.d + 1;
                changed = true;
            }

            if (res.n === undefined && res.s !== undefined && res.a !== undefined && res.an !== undefined) {
                res.n = (2 * res.s) / (res.a + res.an);
                changed = true;
            }

            loopCount++;
        }

        return res;
    }
}

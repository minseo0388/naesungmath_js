
export interface GPSolution {
    a?: number;
    r?: number;
    n?: number;
    an?: number;
    s?: number;
    infinitySum?: number;
}

export class GeometricProgression {
    static solve({ a, r, n, an, s, infinitySum }: GPSolution): GPSolution {
        let changed = true;
        let loopCount = 0;
        let res: GPSolution = { a, r, n, an, s, infinitySum };

        while (changed && loopCount < 5) {
            changed = false;

            if (res.an === undefined && res.a !== undefined && res.r !== undefined && res.n !== undefined) {
                res.an = res.a * Math.pow(res.r, res.n);
                changed = true;
            }
            if (res.s === undefined && res.a !== undefined && res.r !== undefined && res.n !== undefined) {
                if (res.r !== 1) {
                    res.s = res.a * (1 - Math.pow(res.r, res.n)) / (1 - res.r);
                    changed = true;
                }
            }
            if (res.infinitySum === undefined && res.a !== undefined && res.r !== undefined) {
                if (res.r > -1 && res.r < 1) {
                    res.infinitySum = res.a / (1 - res.r);
                    changed = true;
                }
            }
            if (res.a === undefined && res.an !== undefined && res.r !== undefined && res.n !== undefined) {
                res.a = res.an / Math.pow(res.r, res.n);
                changed = true;
            }

            loopCount++;
        }
        return res;
    }
}

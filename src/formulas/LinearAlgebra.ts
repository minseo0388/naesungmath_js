
export class LinearAlgebra {
    static add(matrixA: number[][], matrixB: number[][]): number[][] {
        const rows = matrixA.length;
        const cols = matrixA[0].length;
        const result: number[][] = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++)
                result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
        return result;
    }

    static determinant(matrix: number[][]): number {
        const n = matrix.length;
        if (n === 1) return matrix[0][0];
        if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

        let det = 0;
        for (let p = 0; p < n; p++) {
            det += Math.pow(-1, p) * matrix[0][p] * LinearAlgebra.determinant(LinearAlgebra.subMatrix(matrix, 0, p));
        }
        return det;
    }

    static gaussian(matrix: number[][]): number[][] {
        // Placeholder as per C# source
        return matrix;
    }

    static cramer(matrix: number[][], constants: number[]): number[] {
        const det = LinearAlgebra.determinant(matrix);
        if (det === 0) throw new Error("Determinant is zero");

        const n = matrix.length;
        const res: number[] = [];

        for (let i = 0; i < n; i++) {
            // Replace column i with constants
            const modified = matrix.map(row => [...row]);
            for (let j = 0; j < n; j++) modified[j][i] = constants[j];
            res.push(LinearAlgebra.determinant(modified) / det);
        }
        return res;
    }

    static identity(n: number): number[][] {
        const result: number[][] = [];
        for (let i = 0; i < n; i++) {
            result[i] = new Array(n).fill(0);
            result[i][i] = 1;
        }
        return result;
    }

    static inverse(matrix: number[][]): number[][] {
        const det = LinearAlgebra.determinant(matrix);
        // JS epsilon diff logic if needed, but keeping simple
        if (Math.abs(det) < 1e-9) throw new Error("Matrix is singular");

        const n = matrix.length;
        const result: number[][] = [];
        for (let i = 0; i < n; i++) {
            result[i] = [];
            for (let j = 0; j < n; j++) {
                result[i][j] = Math.pow(-1, i + j) * LinearAlgebra.determinant(LinearAlgebra.subMatrix(matrix, i, j)) / det;
            }
        }
        return LinearAlgebra.transpose(result);
    }

    static multiply(matrixA: number[][], matrixB: number[][]): number[][] {
        const rowsA = matrixA.length;
        const colsA = matrixA[0].length;
        const colsB = matrixB[0].length;
        const result: number[][] = [];
        for (let i = 0; i < rowsA; i++) {
            result[i] = new Array(colsB).fill(0);
            for (let j = 0; j < colsB; j++) {
                for (let k = 0; k < colsA; k++)
                    result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
        return result;
    }

    static multiplyScalar(matrix: number[][], k: number): number[][] {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const result: number[][] = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++)
                result[i][j] = matrix[i][j] * k;
        }
        return result;
    }

    static normalize(vector: number[]): number[] {
        let sum = 0;
        for (const v of vector) sum += v * v;
        const mag = Math.sqrt(sum);
        return vector.map(v => v / mag);
    }

    static outerProduct(u: number[], v: number[]): number[][] {
        const n = u.length;
        const m = v.length;
        const result: number[][] = [];
        for (let i = 0; i < n; i++) {
            result[i] = [];
            for (let j = 0; j < m; j++)
                result[i][j] = u[i] * v[j];
        }
        return result;
    }

    static randomVector(length: number): number[] {
        const v = [];
        for (let i = 0; i < length; i++) v.push(Math.random());
        return v;
    }

    static sqrtDotProduct(u: number[], v: number[]): number {
        let dot = 0;
        for (let i = 0; i < u.length; i++) dot += u[i] * v[i];
        return Math.sqrt(dot);
    }

    static subtract(matrixA: number[][], matrixB: number[][]): number[][] {
        const rows = matrixA.length;
        const cols = matrixA[0].length;
        const result: number[][] = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++)
                result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
        return result;
    }

    static trace(matrix: number[][]): number {
        let trace = 0;
        for (let i = 0; i < matrix.length; i++) trace += matrix[i][i];
        return trace;
    }

    static transpose(matrix: number[][]): number[][] {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const result: number[][] = [];
        for (let i = 0; i < cols; i++) {
            result[i] = [];
            for (let j = 0; j < rows; j++)
                result[i][j] = matrix[j][i];
        }
        return result;
    }

    private static subMatrix(matrix: number[][], rowToRemove: number, colToRemove: number): number[][] {
        const n = matrix.length;
        const result: number[][] = [];
        for (let i = 0, ni = 0; i < n; i++) {
            if (i === rowToRemove) continue;
            result[ni] = [];
            for (let j = 0, nj = 0; j < n; j++) {
                if (j === colToRemove) continue;
                result[ni][nj] = matrix[i][j];
                nj++;
            }
            ni++;
        }
        return result;
    }
}

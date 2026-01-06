import { ArithmeticProgression, GeometricProgression } from './formulas';

function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function verifyAP() {
    console.log("Verifying Arithmetic Progression...");

    // Case 1: Find an
    let res1 = ArithmeticProgression.solve({ a: 1, d: 2, n: 5 }); // 1, 3, 5, 7, 9
    assert(res1.an === 9, `Expected an=9, got ${res1.an}`);
    console.log("[PASS] AP Find an");

    // Case 2: Find sum
    let res2 = ArithmeticProgression.solve({ a: 1, d: 1, n: 10 }); // 1..10
    assert(res2.s === 55, `Expected s=55, got ${res2.s}`);
    console.log("[PASS] AP Find s");

    // Case 3: Inverse Find a
    let res3 = ArithmeticProgression.solve({ an: 10, d: 1, n: 10 }); // 1..10
    assert(res3.a === 1, `Expected a=1, got ${res3.a}`);
    console.log("[PASS] AP Find a");
}

function verifyGP() {
    console.log("Verifying Geometric Progression...");

    // Case 1: Find an
    let res1 = GeometricProgression.solve({ a: 2, r: 3, n: 3 }); // C# logic: a * r^n -> 2 * 27 = 54
    assert(res1.an === 54, `Expected an=54, got ${res1.an}`);
    console.log("[PASS] GP Find an");

    // Case 2: Find sum
    let res2 = GeometricProgression.solve({ a: 1, r: 2, n: 3 }); // 1, 2, 4 -> sum 7
    assert(res2.s === 7, `Expected s=7, got ${res2.s}`);
    console.log("[PASS] GP Find s");

    // Case 3: Inverse Find a
    let res3 = GeometricProgression.solve({ an: 54, r: 3, n: 3 });
    assert(res3.a === 2, `Expected a=2, got ${res3.a}`);
    console.log("[PASS] GP Find a");
}

try {
    verifyAP();
    verifyGP();
    console.log("All JS Refactored Tests Passed!");
} catch (e) {
    console.error("Verification Failed:", e);
    throw e; // Let node exit with error
}

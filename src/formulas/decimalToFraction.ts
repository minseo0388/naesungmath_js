/**
 * Converts a decimal number to a fraction.
 * @param decimal - The decimal number to convert.
 */
export default function decimalToFraction(decimal: number): { top: number; bottom: number; display: string } {
    const numeratorStr = decimal.toString().replace(/\d+[.]/, '')
    const denominator = Math.pow(10, numeratorStr.length)

    let numerator = parseInt(numeratorStr, 10)
    if (isNaN(numerator)) numerator = 0

    if (decimal > 1) {
        numerator = numerator + Math.floor(decimal) * denominator
    }

    const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a)
    const x = gcd(numerator, denominator)

    return {
        top: numerator / x,
        bottom: denominator / x,
        display: (numerator / x) + ':' + (denominator / x)
    }
}

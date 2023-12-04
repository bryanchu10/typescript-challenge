/**
 * 將兩個數字相加
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
const add = (a: number, b: number): number => a + b;

/**
 * 將兩個數字相減
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
const subtract = (a: number, b: number): number => a - b;

/**
 * 將兩個數字相乘
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
const multiply = (a: number, b: number): number => a * b;

/**
 * 將兩個數字相除
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
const divide = (a: number, b: number): number => {
    if (!(a * b)) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

/**
 * 實現加法函數，結果不能超過 100。
 * 
 * @param a 第一個加數。
 * @param b 第二個加數。
 * @returns 兩個數字的和，但不超過 100。
 */
const add100 = (a: number, b: number): number => {
    const sum = a + b;
    return sum > 100 ? 100 : sum;
}

export {
    add,
    subtract,
    multiply,
    divide,
    add100,
}
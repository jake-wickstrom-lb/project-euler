import { Problem, Strategy } from "../Problem";
const title: string = "Rounded Square Roots";
const description: string = "\nWe define the rounded-square-root of a positive integer n as the square root of n rounded to the nearest integer.\n\nThe following procedure (essentially Heron's method adapted to integer arithmetic) finds the rounded-square-root of n:\nLet d be the number of digits of the number n.\nIf d is odd, set $x_0 = 2 \\times 10^{(d-1)/2}$.\nIf d is even, set $x_0 = 7 \\times 10^{(d-2)/2}$.\nRepeat:\n$$x_{k+1} = \\Biggl\\lfloor{\\dfrac{x_k + \\lceil{n / x_k}\\rceil}{2}}\\Biggr\\rfloor$$\n\nuntil $x_{k+1} = x_k$.\nAs an example, let us find the rounded-square-root of n = 4321.n has 4 digits, so $x_0 = 7 \\times 10^{(4-2)/2} = 70$.\n$$x_1 = \\Biggl\\lfloor{\\dfrac{70 + \\lceil{4321 / 70}\\rceil}{2}}\\Biggr\\rfloor = 66\\\\\nx_2 = \\Biggl\\lfloor{\\dfrac{66 + \\lceil{4321 / 66}\\rceil}{2}}\\Biggr\\rfloor = 66$$\n\nSince $x_2 = x_1$, we stop here.\nSo, after just two iterations, we have found that the rounded-square-root of 4321 is 66 (the actual square root is 65.7343137\u2026).\n\nThe number of iterations required when using this method is surprisingly low.\nFor example, we can find the rounded-square-root of a 5-digit integer (10,000 \u2264 n \u2264 99,999) with an average of 3.2102888889 iterations (the average value was rounded to 10 decimal places).\n\nUsing the procedure described above, what is the average number of iterations required to find the rounded-square-root of a 14-digit number (1013 \u2264 n < 1014)?\nGive your answer rounded to 10 decimal places.\n\nNote: The symbols $\\lfloor x \\rfloor$ and $\\lceil x \\rceil$ represent the floor function and ceiling function respectively.\n\n";
const index: number = 255;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

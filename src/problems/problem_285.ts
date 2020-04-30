import { Problem, Strategy } from "../Problem";
const title: string = "Pythagorean odds";
const description: string = "\nAlbert chooses a positive integer k, then two real numbers a, b are randomly chosen in the interval [0,1] with uniform distribution.\nThe square root of the sum (k\u00B7a+1)2\u2009+\u2009(k\u00B7b+1)2 is then computed and rounded to the nearest integer. If the result is equal to k, he scores k points; otherwise he scores nothing.\n\nFor example, if k\u2009=\u20096, a\u2009=\u20090.2 and b\u2009=\u20090.85, then (k\u00B7a+1)2\u2009+\u2009(k\u00B7b+1)2\u2009=\u200942.05.\nThe square root of 42.05 is 6.484... and when rounded to the nearest integer, it becomes 6.\nThis is equal to k, so he scores 6 points.\n\nIt can be shown that if he plays 10 turns with k\u2009=\u20091, k\u2009=\u20092, ..., k\u2009=\u200910, the expected value of his total score, rounded to five decimal places, is 10.20914.\n\nIf he plays 105 turns with k\u2009=\u20091, k\u2009=\u20092, k\u2009=\u20093, ..., k\u2009=\u2009105, what is the expected value of his total score, rounded to five decimal places?\n";
const index: number = 285;
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

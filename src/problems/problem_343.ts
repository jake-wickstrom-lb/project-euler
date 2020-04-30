import { Problem, Strategy } from "../Problem";
const title: string = "Fractional Sequences";
const description: string = "\nFor any positive integer k, a finite sequence ai of fractions xi/yi is defined by:\na1 = 1/k and\nai = (xi-1+1)/(yi-1-1) reduced to lowest terms for i>1.\nWhen ai reaches some integer n, the sequence stops. (That is, when yi=1.)\nDefine f(k) = n. \nFor example, for k = 20:\n\n\n\n1/20 \u2192 2/19 \u2192 3/18 = 1/6 \u2192 2/5 \u2192 3/4 \u2192 4/3 \u2192 5/2 \u2192 6/1 = 6\n\n\n\nSo f(20) = 6.\n\n\n\nAlso f(1) = 1, f(2) = 2, f(3) = 1 and \u2211\u2009f(k3) = 118937 for 1 \u2264 k \u2264 100.\n\n\n\nFind \u2211\u2009f(k3) for 1 \u2264 k \u2264 2\u00D7106.\n\n";
const index: number = 343;
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

import { Problem, Strategy } from "../Problem";
const title: string = "Counting Digits";
const description: string = "\nStarting from zero the natural numbers are written down in base 10 like this:\n\n0 1 2 3 4 5 6 7 8 9 10 11 12....\n\nConsider the digit d=1. After we write down each number n, we will update the number of ones that have occurred and call this number f(n,1). The first values for f(n,1), then, are as follows:\n\nnf(n,1)\n00\n11\n21\n31\n41\n51\n61\n71\n81\n91\n102\n114\n125\n\nNote that f(n,1) never equals 3.\n\nSo the first two solutions of the equation f(n,1)=n are n=0 and n=1. The next solution is n=199981.\nIn the same manner the function f(n,d) gives the total number of digits d that have been written down after the number n has been written.\n\nIn fact, for every digit d \u2260 0, 0 is the first solution of the equation f(n,d)=n.\nLet s(d) be the sum of all the solutions for which f(n,d)=n.\n\nYou are given that s(1)=22786974071.\nFind  \u2211\u2009s(d) for 1 \u2264 d \u2264 9.\nNote: if, for some n, f(n,d)=n\n for more than one value of d this value of n is counted again for every value of d for which f(n,d)=n.\n";
const index: number = 156;
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

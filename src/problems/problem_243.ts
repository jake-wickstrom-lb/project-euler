import { Problem, Strategy } from "../Problem";
const title: string = "Resilience";
const description: string = "\n \nA positive fraction whose numerator is less than its denominator is called a proper fraction.\nFor any denominator, d, there will be d\u22121 proper fractions; for example, with d\u2009=\u200912:1/12 , 2/12 , 3/12 , 4/12 , 5/12 , 6/12 , 7/12 , 8/12 , 9/12 , 10/12 , 11/12 .\n\n\nWe shall call a fraction that cannot be cancelled down a resilient fraction.\nFurthermore we shall define the resilience of a denominator, R(d), to be the ratio of its proper fractions that are resilient; for example, R(12) = 4/11 .\nIn fact, d\u2009=\u200912 is the smallest denominator having a resilience R(d) < 4/10 .\n\nFind the smallest denominator d, having a resilience R(d) < 15499/94744 .\n\n";
const index: number = 243;
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

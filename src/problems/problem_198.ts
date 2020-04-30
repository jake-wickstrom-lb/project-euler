import { Problem, Strategy } from "../Problem";
const title: string = "Ambiguous Numbers";
const description: string = "\nA best approximation to a real number $x$ for the denominator bound $d$ is a rational number $\\frac r s$ (in reduced form) with $s \\le d$, so that any rational number $\\frac p q$ which is closer to $x$ than $\\frac r s$ has $q > d$.\n\nUsually the best approximation to a real number is uniquely determined for all denominator bounds. However, there are some exceptions, e.g. $\\frac 9 {40}$ has the two best approximations $\\frac 1 4$ and $\\frac 1 5$ for the denominator bound $6$.\nWe shall call a real number $x$ ambiguous, if there is at least one denominator bound for which $x$ possesses two best approximations. Clearly, an ambiguous number is necessarily rational.\n\nHow many ambiguous numbers $x=\\frac p q, 0 < x < \\frac 1 {100}$, are there whose denominator $q$ does not exceed $10^8$?\n";
const index: number = 198;
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

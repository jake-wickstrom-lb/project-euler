import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Best Approximations";
const description: string = "\nLet $x$ be a real number.\nA best approximation to $x$ for the denominator bound $d$ is a rational number $\\frac r s $  in reduced form, with $s \\le d$, such that any rational number which is closer to $x$ than $\\frac r s$ has a denominator larger than $d$:\n\n $|\\frac p q -x | < |\\frac r s -x| \\Rightarrow q > d$\n\n\nFor example, the best approximation to $\\sqrt {13}$ for the denominator bound 20 is $\\frac {18} 5$ and the best approximation to $\\sqrt {13}$ for the denominator bound 30 is $\\frac {101}{28}$.\n\nFind the sum of all denominators of the best approximations to $\\sqrt n$ for the denominator bound $10^{12}$, where $n$ is not a perfect square and $ 1 < n \\le 100000$. \n";
const index: number = 192;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);

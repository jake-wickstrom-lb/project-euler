import { Problem, Strategy } from "../Problem";
const title: string = "A huge binomial coefficient";
const description: string = "\n\nThe binomial coefficient $\\displaystyle{\\binom{10^{18}}{10^9}}$ is a number with more than 9 billion ($9\\times 10^9$) digits.\n\n\nLet $M(n,k,m)$ denote the binomial coefficient $\\displaystyle{\\binom{n}{k}}$ modulo $m$.\n\n\nCalculate $\\displaystyle{\\sum M(10^{18},10^9,p\\cdot q\\cdot r)}$ for $1000\\lt p\\lt q\\lt r\\lt 5000$ and $p$,$q$,$r$ prime.\n\n\n\n\n\n";
const index: number = 365;
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

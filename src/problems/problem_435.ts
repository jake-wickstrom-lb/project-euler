import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Polynomials of Fibonacci numbers";
const description: string = "\nThe Fibonacci numbers $\\{f_n, n \\ge 0\\}$ are defined recursively as $f_n = f_{n-1} + f_{n-2}$ with base cases $f_0 = 0$ and $f_1 = 1$.\nDefine the polynomials $\\{F_n, n \\ge 0\\}$ as $F_n(x) = \\displaystyle{\\sum_{i=0}^n f_i x^i}$.\nFor example, $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$, and $F_7(11) = 268\\,357\\,683$.\nLet $n = 10^{15}$. Find the sum $\\displaystyle{\\sum_{x=0}^{100} F_n(x)}$ and give your answer modulo $1\\,307\\,674\\,368\\,000 \\ (= 15!)$.\n\n\n";
const index: number = 435;
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

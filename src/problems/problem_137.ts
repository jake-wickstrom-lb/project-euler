import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Fibonacci golden nuggets";
const description: string = "\nConsider the infinite polynomial series $A_F(x) = x F_1 + x^2 F_2 + x^3 F_3 + \\dots$, where $F_k$ is the $k$th term in the Fibonacci sequence: $1, 1, 2, 3, 5, 8, \\dots$; that is, $F_k = F_{k-1} + F_{k-2}$, $F_1 = 1$ and $F_2 = 1$.\nFor this problem we shall be interested in values of $x$ for which $A_F(x)$ is a positive integer.\n\nSurprisingly$\\begin{align*} \nA_F(\\tfrac{1}{2})\n &= (\\tfrac{1}{2})\\times 1 + (\\tfrac{1}{2})^2\\times 1 + (\\tfrac{1}{2})^3\\times 2 + (\\tfrac{1}{2})^4\\times 3 + (\\tfrac{1}{2})^5\\times 5 + \\cdots \\\\ \n &= \\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{2}{8} + \\tfrac{3}{16} + \\tfrac{5}{32} + \\cdots \\\\\n &= 2\n\\end{align*}$\n\n\nThe corresponding values of x for the first five natural numbers are shown below.\n\n$x$$A_F(x)$\n$\\sqrt{2}-1$1\n$\\tfrac{1}{2}$2\n$\\frac{\\sqrt{13}-2}{3}$3\n$\\frac{\\sqrt{89}-5}{8}$4\n$\\frac{\\sqrt{34}-3}{5}$5\n\nWe shall call $A_F(x)$ a golden nugget if $x$ is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.\nFind the 15th golden nugget.\n";
const index: number = 137;
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

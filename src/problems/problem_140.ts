import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Modified Fibonacci golden nuggets";
const description: string = "\nConsider the infinite polynomial series $A_G(x) = x G_1 + x^2 G_2 + x^3 G_3 + \\cdots$, where $G_k$ is the $k$th term of the second order recurrence relation $G_k = G_{k-1} + G_{k-2}$, $G_1 = 1$ and $G_2 = 4$; that is, $1, 4, 5, 9, 14, 23, \\dots$ .\nFor this problem we shall be concerned with values of $x$ for which $A_G(x)$ is a positive integer.\nThe corresponding values of $x$ for the first five natural numbers are shown below.\n\n$x$$A_G(x)$\n$\\frac{\\sqrt{5}-1}{4}$1\n$\\tfrac{2}{5}$2\n$\\frac{\\sqrt{22}-2}{6}$3\n$\\frac{\\sqrt{137}-5}{14}$4\n$\\tfrac{1}{2}$5\n\nWe shall call $A_G(x)$ a golden nugget if $x$ is rational, because they become increasingly rarer; for example, the 20th golden nugget is 211345365.\nFind the sum of the first thirty golden nuggets.\n\n";
const index: number = 140;
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

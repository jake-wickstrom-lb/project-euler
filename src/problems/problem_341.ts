import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Golomb's self-describing sequence";
const description: string = "\nThe Golomb's self-describing sequence $(G(n))$ is the only nondecreasing sequence of natural numbers such that $n$ appears exactly $G(n)$ times in the sequence. The values of $G(n)$ for the first few $n$ are\n\n\n\\[\n\\begin{matrix}\nn & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \\ldots \\\\\nG(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5 & 5 & 6 & 6 & 6 & 6 & \\ldots\n\\end{matrix}\n\\]\n\n\nYou are given that $G(10^3) = 86$, $G(10^6) = 6137$.\nYou are also given that $\\sum G(n^3) = 153506976$ for $1 \\le n \\lt 10^3$.\n\nFind $\\sum G(n^3)$ for $1 \\le n \\lt 10^6$.\n\n\n";
const index: number = 341;
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

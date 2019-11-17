import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Diophantine reciprocals I";
const description: string = "\nIn the following equation x, y, and n are positive integers.\n$$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{n}$$\nFor n = 4 there are exactly three distinct solutions:\n$$\\begin{align}\n\\dfrac{1}{5} + \\dfrac{1}{20} &= \\dfrac{1}{4}\\\\\n\\dfrac{1}{6} + \\dfrac{1}{12} &= \\dfrac{1}{4}\\\\\n\\dfrac{1}{8} + \\dfrac{1}{8} &= \\dfrac{1}{4}\n\\end{align}\n$$\n\nWhat is the least value of n for which the number of distinct solutions exceeds one-thousand?\nNOTE: This problem is an easier version of Problem 110; it is strongly advised that you solve this one first.\n";
const index: number = 108;
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

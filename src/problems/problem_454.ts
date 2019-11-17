import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Diophantine reciprocals III";
const description: string = "\nIn the following equation x, y, and n are positive integers.\n$$\\dfrac{1}{x} + \\dfrac{1}{y} = \\dfrac{1}{n}$$\nFor a limit L we define F(L) as the number of solutions which satisfy x < y \u2264 L.\n\nWe can verify that F(15) = 4 and F(1000) = 1069.\nFind F(1012).\n";
const index: number = 454;
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

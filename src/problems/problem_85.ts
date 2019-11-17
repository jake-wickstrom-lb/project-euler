import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Counting rectangles";
const description: string = "\nBy counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:\n\n\nAlthough there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.\n\n";
const index: number = 85;
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

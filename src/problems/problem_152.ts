import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Writing 1/2 as a sum of inverse squares";
const description: string = "\nThere are several ways to write the number 1/2 as a sum of inverse squares using distinct integers.\nFor instance, the numbers {2,3,4,5,7,12,15,20,28,35} can be used:\n$$\\begin{align}\\dfrac{1}{2} &= \\dfrac{1}{2^2} + \\dfrac{1}{3^2} + \\dfrac{1}{4^2} + \\dfrac{1}{5^2} +\\\\\n&\\quad \\dfrac{1}{7^2} + \\dfrac{1}{12^2} + \\dfrac{1}{15^2} + \\dfrac{1}{20^2} +\\\\\n&\\quad \\dfrac{1}{28^2} + \\dfrac{1}{35^2}\\end{align}$$\nIn fact, only using integers between 2 and 45 inclusive, there are exactly three ways to do it, the remaining two being: {2,3,4,6,7,9,10,20,28,35,36,45} and {2,3,4,6,7,9,12,15,28,30,35,36,45}.\nHow many ways are there to write the number 1/2 as a sum of inverse squares using distinct integers between 2 and 80 inclusive?\n";
const index: number = 152;
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

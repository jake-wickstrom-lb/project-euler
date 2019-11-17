import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Geometric triangles";
const description: string = "\nLet us define a geometric triangle as an integer sided triangle with sides a \u2264 b \u2264 c so that its sides form a geometric progression, i.e. b2\u00A0=\u00A0a\u00A0\u00B7\u00A0c\u00A0.\u00A0 \n\nAn example of such a geometric triangle is the triangle with sides a = 144, b = 156 and c = 169.\n\nThere are 861805 geometric triangles with perimeter \u2264 106 .\n\nHow many geometric triangles exist with perimeter \u2264 2.5\u00B71013 ?\n\n";
const index: number = 370;
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

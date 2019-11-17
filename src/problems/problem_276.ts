import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Primitive Triangles";
const description: string = "\nConsider the triangles with integer sides a, b and c with a \u2264 b \u2264 c.\nAn integer sided triangle (a,b,c) is called primitive if  gcd(a,b,c)=1. \nHow many primitive integer sided triangles exist with a perimeter not exceeding 10 000 000?\n\n\n\n\n\n\n";
const index: number = 276;
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

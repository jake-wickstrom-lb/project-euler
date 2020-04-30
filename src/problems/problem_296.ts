import { Problem, Strategy } from "../Problem";
const title: string = "Angular Bisector and Tangent";
const description: string = "\n\nGiven is an integer sided triangle ABC with BC \u2264 AC \u2264 AB.k is the angular bisector of angle ACB.m is the tangent at C to the circumscribed circle of ABC.n is a line parallel to m through B.\nThe intersection of n and k is called E.\n\n\n\nHow many triangles ABC with a perimeter not exceeding 100 000 exist such that BE has integral length?\n\n\n\n";
const index: number = 296;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

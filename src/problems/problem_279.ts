import { Problem, Strategy } from "../Problem";
const title: string = "Triangles with integral sides and an integral angle ";
const description: string = "\n\nHow many triangles are there with integral sides, at least one integral angle (measured in degrees), and a perimeter that does not exceed 108?\n\n\n\n";
const index: number = 279;
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

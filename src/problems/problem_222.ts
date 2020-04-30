import { Problem, Strategy } from "../Problem";
const title: string = "Sphere Packing";
const description: string = "\nWhat is the length of the shortest pipe, of internal radius 50mm, that can fully contain 21 balls of radii 30mm, 31mm, ..., 50mm?\n\nGive your answer in micrometres (10-6 m) rounded to the nearest integer.\n";
const index: number = 222;
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

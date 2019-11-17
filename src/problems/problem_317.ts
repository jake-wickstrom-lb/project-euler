import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Firecracker";
const description: string = "\n\nA firecracker explodes at a height of 100 m above level ground. It breaks into a large number of very small fragments, which move in every direction; all of them have the same initial velocity of 20 m/s.\n\n\nWe assume that the fragments move without air resistance, in a uniform gravitational field with g=9.81 m/s2.\n\n\nFind the volume (in m3) of the region through which the fragments move before reaching the ground. \nGive your answer rounded to four decimal places.\n\n\n\n\n";
const index: number = 317;
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

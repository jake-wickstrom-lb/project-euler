import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Triominoes";
const description: string = "\nA triomino is a shape consisting of three squares joined via the edges.\nThere are two basic forms:\n\n\n\nIf all possible orientations are taken into account there are six:\n\n\n\nAny n by m grid for which nxm is divisible by 3 can be tiled with triominoes.\nIf we consider tilings that can be obtained by reflection or rotation from another tiling as different there are 41 ways a 2 by 9 grid can be  tiled with triominoes:\n\n\n\nIn how many ways can a 9 by 12 grid be tiled in this way by triominoes?\n";
const index: number = 161;
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

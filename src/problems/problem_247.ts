import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Squares under a hyperbola";
const description: string = "\nConsider the region constrained by 1 \u2264 x and 0 \u2264 y \u2264 1/x.\n\nLet S1 be the largest square that can fit under the curve.\nLet S2 be the largest square that fits in the remaining area, and so on. \nLet the index of Sn be the pair (left, below) indicating the number of squares to the left of Sn and the number of squares below Sn.\n\n\n\n\nThe diagram shows some such squares labelled by number. \nS2 has one square to its left and none below, so the index of S2 is (1,0).\nIt can be seen that the index of S32 is (1,1) as is the index of S50. \n50 is the largest n for which the index of Sn is (1,1).\n\n\nWhat is the largest n for which the index of Sn is (3,3)?\n\n\n\n";
const index: number = 247;
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

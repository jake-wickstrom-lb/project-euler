import { Problem, Strategy } from "../Problem";
const title: string = "Distinct Lines";
const description: string = "\n\nConsider all lattice points (a,b,c) with 0 \u2264 a,b,c \u2264 N.\n\n\nFrom the origin O(0,0,0) all lines are drawn to the other lattice points.\nLet D(N) be the number of distinct such lines.\n\n\nYou are given that D(1 000 000) = 831909254469114121.\n\nFind D(1010). Give as your answer the first nine digits followed by the last nine digits.\n\n\n\n\n";
const index: number = 388;
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

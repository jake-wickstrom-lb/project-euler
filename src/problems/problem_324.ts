import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Building a tower";
const description: string = "\nLet f(n) represent the number of ways one can fill a 3\u00D73\u00D7n tower with blocks of 2\u00D71\u00D71. You're allowed to rotate the blocks in any way you like; however, rotations, reflections etc of the tower itself are counted as distinct.\nFor example (with q = 100000007) :f(2) = 229,f(4) = 117805,f(10) mod q = 96149360,f(103) mod q = 24806056,f(106) mod q = 30808124.\n\nFind f(1010000) mod 100000007.\n";
const index: number = 324;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Lattice points on a circle";
const description: string = "\nLet f(N) be the number of points with integer coordinates that are on a circle passing through (0,0), (N,0),(0,N), and (N,N).\nIt can be shown that f(10000)\u2009=\u200936.\n\nWhat is the sum of all positive integers N\u2009\u2264\u20091011 such that f(N)\u2009=\u2009420\u2009?\n";
const index: number = 233;
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

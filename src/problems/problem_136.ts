import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Singleton difference";
const description: string = "\nThe positive integers, x, y, and z, are consecutive terms of an arithmetic progression. Given that n is a positive integer, the equation, x2 \u2212 y2 \u2212 z2 = n, has exactly one solution when n = 20:\n132 \u2212 102 \u2212 72 = 20\nIn fact there are twenty-five values of n below one hundred for which the equation has a unique solution.\nHow many values of n less than fifty million have exactly one solution?\n\n";
const index: number = 136;
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

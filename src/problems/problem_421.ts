import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Prime factors of n15+1";
const description: string = "\n\nNumbers of the form n15+1 are composite for every integer n > 1.\nFor positive integers n and m let s(n,m) be defined as the sum of the distinct prime factors of n15+1 not exceeding m.\n\nE.g. 215+1 = 3\u00D73\u00D711\u00D7331.\nSo s(2,10) = 3 and s(2,1000) = 3+11+331 = 345.\n\nAlso 1015+1 = 7\u00D711\u00D713\u00D7211\u00D7241\u00D72161\u00D79091.\nSo s(10,100) = 31 and s(10,1000) = 483.\nFind \u2211\u2009s(n,108) for 1 \u2264 n \u2264 1011.\n\n\n";
const index: number = 421;
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

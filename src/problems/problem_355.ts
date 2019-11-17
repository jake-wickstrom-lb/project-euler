import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Maximal coprime subset";
const description: string = "\n\nDefine Co(n) to be the maximal possible sum of a set of mutually co-prime elements from {1,\u00A02,\u00A0...,\u00A0n}. For example Co(10) is 30 and hits that maximum on the subset {1,\u00A05,\u00A07,\u00A08,\u00A09}.\n\n\n\nYou are given that Co(30) = 193 and Co(100) = 1356. \n\n\nFind Co(200000).\n\n\n";
const index: number = 355;
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

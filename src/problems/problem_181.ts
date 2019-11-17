import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Investigating in how many ways objects of two different colours can be grouped";
const description: string = "\nHaving three black objects B and one white object W they can be grouped in 7 ways like this:\n(BBBW)(B,BBW)(B,B,BW)(B,B,B,W)\n(B,BB,W)(BBB,W)(BB,BW)\nIn how many ways can sixty black objects B and forty white objects W be  thus grouped?\n";
const index: number = 181;
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

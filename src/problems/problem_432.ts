import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Totient sum";
const description: string = "\n\nLet S(n,m) = \u2211\u03C6(n \u00D7 i) for 1 \u2264 i \u2264 m. (\u03C6 is Euler's totient function)\nYou are given that S(510510,106 )= 45480596821125120. \n\n\nFind S(510510,1011).\nGive the last 9 digits of your answer.\n\n\n";
const index: number = 432;
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

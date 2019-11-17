import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Top Dice";
const description: string = "\nThere are 1111 ways in which five 6-sided dice (sides numbered 1 to 6) can be rolled so that the top three sum to 15. Some examples are:\n\n\nD1,D2,D3,D4,D5 = 4,3,6,3,5\n\nD1,D2,D3,D4,D5 = 4,3,3,5,6\n\nD1,D2,D3,D4,D5 = 3,3,3,6,6\n\nD1,D2,D3,D4,D5 = 6,6,3,3,3\n\nIn how many ways can twenty 12-sided dice (sides numbered 1 to 12) be rolled so that the top ten sum to 70?\n";
const index: number = 240;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Platonic Dice";
const description: string = "\n\nAn unbiased single 4-sided die is thrown and its value, T, is noted.T unbiased 6-sided dice are thrown and their scores are added together. The sum, C, is noted.C unbiased 8-sided dice are thrown and their scores are added together. The sum, O, is noted.O unbiased 12-sided dice are thrown and their scores are added together. The sum, D, is noted.D unbiased 20-sided dice are thrown and their scores are added together. The sum, I, is noted.\nFind the variance of I, and give your answer rounded to 4 decimal places.\n\n";
const index: number = 389;
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

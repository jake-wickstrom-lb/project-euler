import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Coin partitions";
const description: string = "\nLet p(n) represent the number of different ways in which n coins can be separated into piles. For example, five coins can be separated into piles in exactly seven different ways, so p(5)=7.\n\nOOOOO\nOOOO\u00A0 \u00A0O\nOOO\u00A0 \u00A0OO\nOOO\u00A0 \u00A0O\u00A0 \u00A0O\nOO\u00A0 \u00A0OO\u00A0 \u00A0O\nOO\u00A0 \u00A0O\u00A0 \u00A0O\u00A0 \u00A0O\nO\u00A0 \u00A0O\u00A0 \u00A0O\u00A0 \u00A0O\u00A0 \u00A0O\n\nFind the least value of n for which p(n) is divisible by one million.\n\n";
const index: number = 78;
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

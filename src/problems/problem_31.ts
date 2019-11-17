import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Coin sums";
const description: string = "\n\nIn England the currency is made up of pound, \u00A3, and pence, p, and there are eight coins in general circulation:\n1p, 2p, 5p, 10p, 20p, 50p, \u00A31 (100p) and \u00A32 (200p).\nIt is possible to make \u00A32 in the following way:\n1\u00D7\u00A31 + 1\u00D750p + 2\u00D720p + 1\u00D75p + 1\u00D72p + 3\u00D71p\nHow many different ways can \u00A32 be made using any number of coins?\n\n";
const index: number = 31;
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

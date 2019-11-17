import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Ordered radicals";
const description: string = "\nThe radical of n, rad(n), is the product of the distinct prime factors of n. For example, 504 = 23 \u00D7 32 \u00D7 7, so rad(504) = 2 \u00D7 3 \u00D7 7 = 42.\nIf we calculate rad(n) for 1 \u2264 n \u2264 10, then sort them on rad(n), and sorting on n if the radical values are equal, we get:\nUnsorted\n\u00A0\nSorted\nn\nrad(n)\n\nn\nrad(n)\nk\n11\n\u00A0\n111\n22\n\u00A0\n222\n33\n\u00A0\n423\n42\n\u00A0\n824\n55\n\u00A0\n335\n66\n\u00A0\n936\n77\n\u00A0\n557\n82\n\u00A0\n668\n93\n\u00A0\n779\n1010\n\u00A0\n101010\nLet E(k) be the kth element in the sorted n column; for example, E(4) = 8 and E(6) = 9.\nIf rad(n) is sorted for 1 \u2264 n \u2264 100000, find E(10000).\n\n";
const index: number = 124;
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

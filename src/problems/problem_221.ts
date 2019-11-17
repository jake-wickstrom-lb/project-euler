import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Alexandrian Integers";
const description: string = "\nWe shall call a positive integer A an \"Alexandrian integer\", if there exist integers p, q, r such that:\n\n\n      A = p \u00B7 q \u00B7 r \u00A0\u00A0\u00A0and\u00A0\u00A0\n   \n   \n      1A\n   =\n   \n      1p\n   +\n   \n      1q\n   +\n   \n      1r\nFor example, 630 is an Alexandrian integer (p\u00A0=\u00A05, q\u00A0=\u00A0\u22127, r\u00A0=\u00A0\u221218).\nIn fact, 630 is the 6th Alexandrian integer,  the first 6 Alexandrian integers being: 6, 42, 120, 156, 420 and 630.\n\nFind the 150000th Alexandrian integer.\n";
const index: number = 221;
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

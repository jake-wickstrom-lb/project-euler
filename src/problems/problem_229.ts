import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Four Representations using Squares";
const description: string = "\nConsider the number 3600. It is very special, because\n\n3600 = 482 + \u00A0\u00A0 \u00A0362\n3600 = 202 + 2\u00D7402\n3600 = 302 + 3\u00D7302\n3600 = 452 + 7\u00D7152\n\nSimilarly, we find that 88201 = 992 + 2802 = 2872 + 2\u00D7542 = 2832 + 3\u00D7522 = 1972 + 7\u00D7842.\n\nIn 1747, Euler proved which numbers are representable as a sum of two squares.\nWe are interested in the numbers n which admit representations of all of the following four types:\n\nn = a12 + \u00A0 b12n = a22 + 2 b22n = a32 + 3 b32n = a72 + 7 b72,\n\nwhere the ak and bk are positive integers.\n\nThere are 75373 such numbers that do not exceed 107.\n\nHow many such numbers are there that do not exceed 2\u00D7109?\n";
const index: number = 229;
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

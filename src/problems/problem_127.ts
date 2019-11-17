import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "abc-hits";
const description: string = "\nThe radical of n, rad(n), is the product of distinct prime factors of n. For example, 504 = 23 \u00D7 32 \u00D7 7, so rad(504) = 2 \u00D7 3 \u00D7 7 = 42.\nWe shall define the triplet of positive integers (a, b, c) to be an abc-hit if:\nGCD(a, b) = GCD(a, c) = GCD(b, c) = 1\na < b\na + b = c\nrad(abc) < c\nFor example, (5, 27, 32) is an abc-hit, because:\nGCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1\n5 < 27\n5 + 27 = 32\nrad(4320) = 30 < 32\nIt turns out that abc-hits are quite rare and there are only thirty-one abc-hits for c < 1000, with \u2211c = 12523.\nFind \u2211c for c < 120000.\n\n";
const index: number = 127;
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

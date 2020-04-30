import { Problem, Strategy } from "../Problem";
const title: string = "Strong Repunits";
const description: string = "\n\nThe number 7 is special, because 7 is 111 written in base 2, and 11 written in base 6 (i.e. 710 = 116 = 1112). In other words, 7 is a repunit in at least two bases b > 1. \n\n\nWe shall call a positive integer with this property a strong repunit. It can be verified that there are 8 strong repunits below 50:  {1,7,13,15,21,31,40,43}. Furthermore, the sum of all strong repunits below 1000 equals 15864.\n\nFind the sum of all strong repunits below 1012.\n\n\n\n";
const index: number = 346;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

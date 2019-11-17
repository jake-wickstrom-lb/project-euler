import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Totient permutation";
const description: string = "\nEuler's Totient function, \u03C6(n) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, \u03C6(9)=6.The number 1 is considered to be relatively prime to every positive number, so \u03C6(1)=1. \nInterestingly, \u03C6(87109)=79180, and it can be seen that 87109 is a permutation of 79180.\nFind the value of n, 1 < n < 107, for which \u03C6(n) is a permutation of n and the ratio n/\u03C6(n) produces a minimum.\n\n";
const index: number = 70;
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

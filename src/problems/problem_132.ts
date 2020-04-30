import { Problem, Strategy } from "../Problem";
const title: string = "Large repunit factors";
const description: string = "\nA number consisting entirely of ones is called a repunit. We shall define R(k) to be a repunit of length k.\nFor example, R(10) = 1111111111 = 11\u00D741\u00D7271\u00D79091, and the sum of these prime factors is 9414.\nFind the sum of the first forty prime factors of R(109).\n\n";
const index: number = 132;
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

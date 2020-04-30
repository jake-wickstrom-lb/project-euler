import { Problem, Strategy } from "../Problem";
const title: string = "Modular Cubes, part 2";
const description: string = "\n\nFor a positive number n, define C(n) as the number of the integers x, for which 1<x<n andx3\u22611 mod n.\n\n\nWhen n=91, there are 8 possible values for x, namely : 9, 16, 22, 29, 53, 74, 79, 81.\nThus, C(91)=8.\n\nFind the sum of the positive numbers n\u22641011 for which C(n)=242.\n";
const index: number = 272;
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

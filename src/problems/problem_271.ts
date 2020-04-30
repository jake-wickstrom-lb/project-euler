import { Problem, Strategy } from "../Problem";
const title: string = "Modular Cubes, part 1";
const description: string = "\n\nFor a positive number n, define S(n) as the sum of the integers x, for which 1<x<n andx3\u22611 mod n.\n\n\nWhen n=91, there are 8 possible values for x, namely : 9, 16, 22, 29, 53, 74, 79, 81.\nThus, S(91)=9+16+22+29+53+74+79+81=363.\n\nFind S(13082761331670030).\n\n\n";
const index: number = 271;
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

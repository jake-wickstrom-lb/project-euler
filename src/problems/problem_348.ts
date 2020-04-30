import { Problem, Strategy } from "../Problem";
const title: string = "Sum of a square and a cube";
const description: string = "\nMany numbers can be expressed as the sum of a square and a cube. Some of them in more than one way.\n\nConsider the palindromic numbers that can be expressed as the sum of a square and a cube, both greater than 1, in exactly 4 different ways.\nFor example, 5229225 is a palindromic number and it can be expressed in exactly 4 different ways:\n22852 + 203\n22232 + 663\n18102 + 1253\n11972 + 1563\n \nFind the sum of the five smallest such palindromic numbers.\n\n";
const index: number = 348;
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

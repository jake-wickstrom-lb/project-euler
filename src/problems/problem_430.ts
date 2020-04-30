import { Problem, Strategy } from "../Problem";
const title: string = "Range flips";
const description: string = "\nN disks are placed in a row, indexed 1 to N from left to right.\nEach disk has a black side and white side. Initially all disks show their white side.\n\nAt each turn, two, not necessarily distinct, integers A and B between 1 and N (inclusive) are chosen uniformly at random.\nAll disks with an index from A to B (inclusive) are flipped.\n\nThe following example shows the case N = 8. At the first turn A = 5 and B = 2, and at the second turn A = 4 and B = 6.\n\n\n\nLet E(N, M) be the expected number of disks that show their white side after M turns.\nWe can verify that E(3, 1) = 10/9, E(3, 2) = 5/3, E(10, 4) \u2248 5.157 and E(100, 10) \u2248 51.893.\n\nFind E(1010, 4000).\nGive your answer rounded to 2 decimal places behind the decimal point.\n";
const index: number = 430;
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

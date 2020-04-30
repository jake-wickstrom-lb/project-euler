import { Problem, Strategy } from "../Problem";
const title: string = "Semidivisible numbers";
const description: string = "\nFor an integer n \u2265 4, we define the lower prime square root of n, denoted by lps(n), as the largest prime \u2264 \u221An and the upper prime square root of n, ups(n), as the smallest prime \u2265 \u221An.\nSo, for example, lps(4) = 2 = ups(4), lps(1000) = 31, ups(1000) = 37.\nLet us call an integer n \u2265 4 semidivisible, if one of lps(n) and ups(n) divides n, but not both.\n\nThe sum of the semidivisible numbers not exceeding 15 is 30, the numbers are 8, 10 and 12. 15 is not semidivisible because it is a multiple of both lps(15) = 3 and ups(15) = 5.\nAs a further example, the sum of the 92 semidivisible numbers up to 1000 is 34825.\n\nWhat is the sum of all semidivisible numbers not exceeding 999966663333 ?\n";
const index: number = 234;
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

import { Problem, Strategy } from "../Problem";
const title: string = "Sum of digits - experience #23";
const description: string = "\n\nFor a positive integer k, define d(k) as the sum of the digits of k in its usual decimal representation.\nThus d(42) = 4+2 = 6.\n\n\nFor a positive integer n, define S(n) as the number of positive integers k < 10n with the following properties :\nk is divisible by 23 and\nd(k) = 23.\n\nYou are given that S(9) = 263626 and S(42) = 6377168878570056.\n\n\nFind S(1112) and give your answer mod 109.\n\n\n";
const index: number = 294;
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

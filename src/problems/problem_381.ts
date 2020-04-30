import { Problem, Strategy } from "../Problem";
const title: string = "(prime-k) factorial";
const description: string = "\n\nFor a prime p let S(p) = (\u2211\u2009(p-k)!) mod(p) for 1 \u2264 k \u2264 5.\n\n\nFor example, if p=7,\n(7-1)! + (7-2)! + (7-3)! + (7-4)! + (7-5)! = 6! + 5! + 4! + 3! + 2! = 720+120+24+6+2 = 872. \nAs 872 mod(7) = 4, S(7) = 4.\n\n\nIt can be verified that \u2211\u2009S(p) = 480 for 5 \u2264 p < 100.\n\n\nFind \u2211\u2009S(p) for 5 \u2264 p < 108.\n\n\n\n\n";
const index: number = 381;
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

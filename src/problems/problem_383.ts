import { Problem, Strategy } from "../Problem";
const title: string = "Divisibility comparison between factorials";
const description: string = "\n\nLet f5(n) be the largest integer x for which 5x divides n.\nFor example, f5(625000) = 7.\n\n\n\nLet T5(n) be the number of integers i which satisfy f5((2\u00B7i-1)!) < 2\u00B7f5(i!) and 1 \u2264 i \u2264 n.\nIt can be verified that T5(103) = 68 and T5(109) = 2408210.\n\n\n\nFind T5(1018).\n\n";
const index: number = 383;
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

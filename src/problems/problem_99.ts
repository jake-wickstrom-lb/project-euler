import { Problem, Strategy } from "../Problem";
const title: string = "Largest exponential";
const description: string = "\nComparing two numbers written in index form like 211 and 37 is not difficult, as any calculator would confirm that 211 = 2048 < 37 = 2187.\nHowever, confirming that 632382518061 > 519432525806 would be much more difficult, as both numbers contain over three million digits.\nUsing base_exp.txt (right click and 'Save Link/Target As...'), a 22K text file containing one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.\nNOTE: The first two lines in the file represent the numbers in the example given above.\n\n";
const index: number = 99;
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

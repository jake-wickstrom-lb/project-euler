import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Bitwise-OR operations on random integers";
const description: string = "\nLet y0, y1, y2,... be a sequence of random unsigned 32 bit integers\n(i.e. 0 \u2264 yi < 232, every value equally likely).\nFor the sequence xi the following recursion is given:x0 = 0 and\nxi = xi-1| yi-1, for i > 0. ( | is the bitwise-OR operator)\nIt can be seen that eventually there will be an index N such that xi = 232 -1 (a bit-pattern of all ones) for all i \u2265 N.\n\nFind the expected value of N. \nGive your answer rounded to 10 digits after the decimal point.\n";
const index: number = 323;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);

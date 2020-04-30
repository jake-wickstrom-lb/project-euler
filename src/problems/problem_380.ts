import { Problem, Strategy } from "../Problem";
const title: string = "Amazing Mazes!";
const description: string = "\n\nAn m\u00D7n maze is an m\u00D7n rectangular grid with walls placed between grid cells such that there is exactly one path from the top-left square to any other square. The following are examples of a 9\u00D712 maze and a 15\u00D720 maze:\n\n\n\n\nLet C(m,n) be the number of distinct m\u00D7n mazes. Mazes which can be formed by rotation and reflection from another maze are considered distinct.\n\n\nIt can be verified that C(1,1) = 1, C(2,2) = 4, C(3,4) = 2415, and C(9,12) = 2.5720e46 (in scientific notation rounded to 5 significant digits).\nFind C(100,500) and write your answer in scientific notation rounded to 5 significant digits.\n\n\nWhen giving your answer, use a lowercase e to separate mantissa and exponent.\nE.g. if the answer is 1234567891011 then the answer format would be 1.2346e12.\n\n \n\n\n\n\n";
const index: number = 380;
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

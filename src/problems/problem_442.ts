import { Problem, Strategy } from "../Problem";
const title: string = "Eleven-free integers";
const description: string = "\nAn integer is called eleven-free if its decimal expansion does not contain any substring representing a power of 11 except 1.\n\nFor example, 2404 and 13431 are eleven-free, while 911 and 4121331 are not.\n\nLet E(n) be the nth positive eleven-free integer. For example, E(3) = 3, E(200) = 213 and E(500\u00A0000) = 531563.\n\nFind E(1018).\n\n";
const index: number = 442;
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

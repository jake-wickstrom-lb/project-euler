import { Problem, Strategy } from "../Problem";
const title: string = "Cyclic paths on Sierpi\u0144ski graphs";
const description: string = "\n- A Sierpi\u0144ski graph of order-1 (S1) is an equilateral triangle.\n- Sn+1 is obtained from Sn by positioning three copies of Sn so that every pair of copies has one common corner.\n\n\n\n\nLet C(n) be the number of cycles that pass exactly once through all the vertices of Sn.\nFor example, C(3) = 8 because eight such cycles can be drawn on S3, as shown below:\n\n\n\n\nIt can also be verified that :\nC(1) = C(2) = 1\nC(5) = 71328803586048\nC(10 000) mod 108 = 37652224\nC(10 000) mod 138 = 617720485\n\nFind C(C(C(10 000))) mod 138.\n\n\n\n";
const index: number = 312;
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

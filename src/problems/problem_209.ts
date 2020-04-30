import { Problem, Strategy } from "../Problem";
const title: string = "Circular Logic";
const description: string = "\nA k-input binary truth table is a map from k input bits\n(binary digits, 0 [false] or 1 [true]) to 1 output bit. For example, the 2-input binary truth tables for the logical AND and XOR functions are:\n\nx\ny\nx AND y\n000010100111\n\n\nx\ny\nx XOR y\n000011101110\n\n\nHow many 6-input binary truth tables, \u03C4, satisfy the formula\n\n\u03C4(a, b, c, d, e, f) AND \u03C4(b, c, d, e, f, a XOR (b AND c)) = 0\nfor all 6-bit inputs (a, b, c, d, e, f)?\n\n";
const index: number = 209;
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

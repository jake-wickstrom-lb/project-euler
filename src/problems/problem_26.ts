import { Problem, Strategy } from "../Problem";
const title: string = "Reciprocal cycles";
const description: string = "\n\nA unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:\n\n1/2=\u00A00.5\n1/3=\u00A00.(3)\n1/4=\u00A00.25\n1/5=\u00A00.2\n1/6=\u00A00.1(6)\n1/7=\u00A00.(142857)\n1/8=\u00A00.125\n1/9=\u00A00.(1)\n1/10=\u00A00.1\n\nWhere 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.\nFind the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.\n\n";
const index: number = 26;
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

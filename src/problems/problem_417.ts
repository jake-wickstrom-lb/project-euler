import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Reciprocal cycles II";
const description: string = "\nA unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:\n\n1/2=\u00A00.5\n1/3=\u00A00.(3)\n1/4=\u00A00.25\n1/5=\u00A00.2\n1/6=\u00A00.1(6)\n1/7=\u00A00.(142857)\n1/8=\u00A00.125\n1/9=\u00A00.(1)\n1/10=\u00A00.1\n\nWhere 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.\n\nUnit fractions whose denominator has no other prime factors than 2 and/or 5 are not considered to have a recurring cycle.\nWe define the length of the recurring cycle of those unit fractions as 0. \n\n\nLet L(n) denote the length of the recurring cycle of 1/n.\nYou are given that \u2211\u2009L(n) for 3 \u2264 n \u2264 1 000 000 equals 55535191115.\n\n\nFind \u2211\u2009L(n) for 3 \u2264 n \u2264 100 000 000.\n";
const index: number = 417;
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

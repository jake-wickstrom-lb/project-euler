import { Problem, Strategy } from "../Problem";
const title: string = "Concealed Square";
const description: string = "\nFind the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0, where each \u201C_\u201D is a single digit.\n";
const index: number = 206;
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

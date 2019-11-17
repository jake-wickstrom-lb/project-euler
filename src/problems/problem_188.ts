import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The hyperexponentiation of a number";
const description: string = "\nThe hyperexponentiation or tetration of a number a by a positive integer b, denoted by a\u2191\u2191b or ba, is recursively defined by:\na\u2191\u21911 = a,\na\u2191\u2191(k+1) = a(a\u2191\u2191k).\n\nThus we have e.g. 3\u2191\u21912 = 33 = 27, hence 3\u2191\u21913 = 327 = 7625597484987 and 3\u2191\u21914 is roughly 103.6383346400240996*10^12.\nFind the last 8 digits of 1777\u2191\u21911855.\n";
const index: number = 188;
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

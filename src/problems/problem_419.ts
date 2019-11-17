import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Look and say sequence";
const description: string = "\n\nThe look and say sequence goes 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...\nThe sequence starts with 1 and all other members are obtained by describing the previous member in terms of consecutive digits.\nIt helps to do this out loud:\n1 is 'one one' \u2192 11\n11 is 'two ones' \u2192 21\n21 is 'one two and one one' \u2192 1211 \n1211 is 'one one, one two and two ones' \u2192 111221\n111221 is 'three ones, two twos and one one' \u2192 312211\n...\n\n\nDefine A(n), B(n) and C(n) as the number of ones, twos and threes in the n'th element of the sequence respectively.\nOne can verify that A(40) = 31254, B(40) = 20259 and C(40) = 11625.\n\n\nFind A(n), B(n) and C(n) for n = 1012. \nGive your answer modulo 230 and separate your values for A, B and C by a comma. \nE.g. for n = 40 the answer would be 31254,20259,11625\n\n\n\n";
const index: number = 419;
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

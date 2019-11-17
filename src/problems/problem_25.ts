import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "1000-digit Fibonacci number";
const description: string = "\nThe Fibonacci sequence is defined by the recurrence relation:\nFn = Fn\u22121 + Fn\u22122, where F1 = 1 and F2 = 1.\nHence the first 12 terms will be:\nF1 = 1\nF2 = 1\nF3 = 2\nF4 = 3\nF5 = 5\nF6 = 8\nF7 = 13\nF8 = 21\nF9 = 34\nF10 = 55\nF11 = 89\nF12 = 144\nThe 12th term, F12, is the first term to contain three digits.\nWhat is the index of the first term in the Fibonacci sequence to contain 1000 digits?\n\n";
const index: number = 25;
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

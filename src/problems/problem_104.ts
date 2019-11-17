import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Pandigital Fibonacci ends";
const description: string = "\n\nThe Fibonacci sequence is defined by the recurrence relation:\nFn = Fn\u22121 + Fn\u22122, where F1 = 1 and F2 = 1.\nIt turns out that F541, which contains 113 digits, is the first Fibonacci number for which the last nine digits are 1-9 pandigital (contain all the digits 1 to 9, but not necessarily in order). And F2749, which contains 575 digits, is the first Fibonacci number for which the first nine digits are 1-9 pandigital.\nGiven that Fk is the first Fibonacci number for which the first nine digits AND the last nine digits are 1-9 pandigital, find k.\n\n";
const index: number = 104;
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

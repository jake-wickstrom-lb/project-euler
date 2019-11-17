import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Reflexive Position";
const description: string = "\n\nLet's call S the (infinite) string that is made by concatenating the consecutive positive integers (starting from 1)  written down in base 10. \nThus, S = 1234567891011121314151617181920212223242...\n\n\nIt's easy to see that any number will show up an infinite number of times in S.\n\n\nLet's call f(n) the starting position of the nth occurrence of n in S. \nFor example, f(1)=1, f(5)=81, f(12)=271 and f(7780)=111111365.\n\n\nFind \u2211\u2009f(3k) for 1\u2264k\u226413.\n\n\n";
const index: number = 305;
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

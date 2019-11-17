import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Longest Collatz sequence";
const description: string = "\nThe following iterative sequence is defined for the set of positive integers:\nn \u2192 n/2 (n is even)n \u2192 3n + 1 (n is odd)\nUsing the rule above and starting with 13, we generate the following sequence:\n13 \u2192 40 \u2192 20 \u2192 10 \u2192 5 \u2192 16 \u2192 8 \u2192 4 \u2192 2 \u2192 1\nIt can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.\nWhich starting number, under one million, produces the longest chain?\nNOTE: Once the chain starts the terms are allowed to go above one million.\n\n";
const index: number = 14;
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

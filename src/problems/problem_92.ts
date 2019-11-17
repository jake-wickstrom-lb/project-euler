import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Square digit chains";
const description: string = "\n\nA number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.\nFor example,\n44 \u2192 32 \u2192 13 \u2192 10 \u2192 1 \u2192 1\n85 \u2192 89 \u2192 145 \u2192 42 \u2192 20 \u2192 4 \u2192 16 \u2192 37 \u2192 58 \u2192 89\nTherefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.\nHow many starting numbers below ten million will arrive at 89?\n\n";
const index: number = 92;
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

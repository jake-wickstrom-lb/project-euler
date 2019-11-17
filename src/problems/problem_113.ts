import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Non-bouncy numbers";
const description: string = "\n\nWorking from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.\nSimilarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.\nWe shall call a positive integer that is neither increasing nor decreasing a \"bouncy\" number; for example, 155349.\nAs n increases, the proportion of bouncy numbers below n increases such that there are only 12951 numbers below one-million that are not bouncy and only 277032 non-bouncy numbers below 1010.\nHow many numbers below a googol (10100) are not bouncy?\n\n";
const index: number = 113;
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

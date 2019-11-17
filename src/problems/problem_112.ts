import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Bouncy numbers";
const description: string = "\nWorking from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.\nSimilarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.\nWe shall call a positive integer that is neither increasing nor decreasing a \"bouncy\" number; for example, 155349.\nClearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.\nSurprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.\nFind the least number for which the proportion of bouncy numbers is exactly 99%.\n\n";
const index: number = 112;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Strong Achilles Numbers";
const description: string = "\n\nA positive integer n is powerful if p2 is a divisor of n for every prime factor p in n.\n\n\nA positive integer n is a perfect power if n can be expressed as a power of another positive integer.\n\n\nA positive integer n is an Achilles number if n is powerful but not a perfect power. For example, 864 and 1800 are Achilles numbers: 864 = 25\u00B733 and 1800 = 23\u00B732\u00B752.\n\n\nWe shall call a positive integer S a Strong Achilles number if both S and \u03C6(S) are Achilles numbers.1\nFor example, 864 is a Strong Achilles number: \u03C6(864) = 288 = 25\u00B732. However, 1800 isn't a Strong Achilles number because: \u03C6(1800) = 480 = 25\u00B731\u00B751.\n\nThere are 7 Strong Achilles numbers below 104 and 656 below 108.\n\n\nHow many Strong Achilles numbers are there below 1018?\n\n\n1 \u03C6 denotes Euler's totient function.\n\n\n\n\n\n\n";
const index: number = 302;
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

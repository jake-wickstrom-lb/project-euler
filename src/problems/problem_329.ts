import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Prime Frog";
const description: string = "\nSusan has a prime frog.\nHer frog is jumping around over 500 squares numbered 1 to 500.\nHe can only jump one square to the left or to the right, with equal probability, and he cannot jump outside the range [1;500].(if it lands at either end, it automatically jumps to the only available square on the next move.)\n\n\nWhen he is on a square with a prime number on it, he croaks 'P' (PRIME) with probability 2/3 or 'N' (NOT PRIME) with probability 1/3 just before jumping to the next square.\nWhen he is on a square with a number on it that is not a prime he croaks 'P' with probability 1/3 or 'N' with probability 2/3 just before jumping to the next square.\n\n\nGiven that the frog's starting position is random with the same probability for every square, and given that she listens to his first 15 croaks, what is the probability that she hears the sequence PPPPNNPPPNPPNPN?\n\nGive your answer as a fraction p/q in reduced form.\n\n";
const index: number = 329;
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

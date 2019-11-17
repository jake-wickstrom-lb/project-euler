import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Prime cube partnership";
const description: string = "\nThere are some prime values, p, for which there exists a positive integer, n, such that the expression n3 + n2p is a perfect cube.\nFor example, when p = 19, 83 + 82\u00D719 = 123.\nWhat is perhaps most surprising is that for each prime with this property the value of n is unique, and there are only four such primes below one-hundred.\nHow many primes below one million have this remarkable property?\n\n";
const index: number = 131;
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

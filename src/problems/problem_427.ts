import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "n-sequences";
const description: string = "\nA sequence of integers S = {si} is called an n-sequence if it has n elements and each element si satisfies 1 \u2264 si \u2264 n. Thus there are nn distinct n-sequences in total.\nFor example, the sequence S = {1, 5, 5, 10, 7, 7, 7, 2, 3, 7} is a 10-sequence.\n\nFor any sequence S, let L(S) be the length of the longest contiguous subsequence of S with the same value.\nFor example, for the given sequence S above, L(S) = 3, because of the three consecutive 7's.\n\nLet f(n) = \u2211 L(S) for all n-sequences S.\n\nFor example, f(3) = 45, f(7) = 1403689 and f(11) = 481496895121.\n\nFind f(7\u00A0500\u00A0000) mod 1\u00A0000\u00A0000\u00A0009.\n\n\n";
const index: number = 427;
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

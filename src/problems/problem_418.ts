import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Factorisation triples";
const description: string = "\n\nLet n be a positive integer. An integer triple (a, b, c) is called a factorisation triple of n if: 1 \u2264 a \u2264 b \u2264 c\n a\u00B7b\u00B7c = n.\n\nDefine f(n) to be a + b + c for the factorisation triple (a, b, c) of n which minimises c / a. One can show that this triple is unique.\n\n\nFor example, f(165) = 19, f(100100) = 142 and f(20!) = 4034872.\n\n\nFind f(43!).\n\n";
const index: number = 418;
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

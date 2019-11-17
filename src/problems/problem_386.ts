import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Maximum length of an antichain";
const description: string = "\nLet n be an integer and S(n) be the set of factors of n.\n\nA subset A of S(n) is called an antichain of S(n) if A contains only one element or if none of the elements of A divides any of the other elements of A.\n\nFor example: S(30) = {1, 2, 3, 5, 6, 10, 15, 30}\n{2, 5, 6} is not an antichain of S(30).\n{2, 3, 5} is an antichain of S(30).\n\nLet N(n) be the maximum length of an antichain of S(n).\n\nFind \u2211\u2009N(n) for 1 \u2264 n \u2264 108\n";
const index: number = 386;
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

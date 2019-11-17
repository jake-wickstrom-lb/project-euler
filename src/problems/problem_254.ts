import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sums of Digit Factorials";
const description: string = "\nDefine f(n) as the sum of the factorials of the digits of n. For example, f(342) = 3! + 4! + 2! = 32.\n\nDefine sf(n) as the sum of the digits of f(n). So sf(342) = 3 + 2 = 5.\n\nDefine g(i) to be the smallest positive integer n such that sf(n) = i. Though sf(342) is 5, sf(25) is also 5, and it can be verified that g(5) is 25.\n\nDefine sg(i) as the sum of the digits of g(i). So sg(5) = 2 + 5 = 7.\n\nFurther, it can be verified that g(20) is 267 and \u2211\u2009sg(i) for 1 \u2264 i \u2264 20 is 156.\n\nWhat is \u2211\u2009sg(i) for 1 \u2264 i \u2264 150?\n";
const index: number = 254;
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

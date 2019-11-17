import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Factorial trailing digits";
const description: string = "\nFor any N, let f(N) be the last five digits before the trailing zeroes in N!.\nFor example,\n9! = 362880 so f(9)=36288\n10! = 3628800 so f(10)=36288\n20! = 2432902008176640000 so f(20)=17664\nFind f(1,000,000,000,000)\n";
const index: number = 160;
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

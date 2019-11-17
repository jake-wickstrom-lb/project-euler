import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Primonacci";
const description: string = "\n\nFor any positive integer n the function next_prime(n) returns the smallest prime p  such that p>n.\n\n\nThe sequence a(n) is defined by:\na(1)=next_prime(1014) and a(n)=next_prime(a(n-1)) for n>1.\n\n\nThe fibonacci sequence f(n) is defined by:\nf(0)=0, f(1)=1 and f(n)=f(n-1)+f(n-2) for n>1.\n\n\nThe sequence b(n) is defined as f(a(n)).\n\n\nFind \u2211\u2009b(n) for 1\u2264n\u2264100 000. \nGive your answer mod 1234567891011. \n\n\n\n\n\n";
const index: number = 304;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Sum of squares of divisors";
const description: string = "\n\nThe divisors of 6 are 1,2,3 and 6.\nThe sum of the squares of these numbers is 1+4+9+36=50.\n\n\nLet sigma2(n) represent the sum of the squares of the divisors of n.\nThus sigma2(6)=50.\n\nLet SIGMA2 represent the summatory function of sigma2, that is SIGMA2(n)=\u2211\u2009sigma2(i) for i=1 to n.\nThe first 6 values of SIGMA2 are: 1,6,16,37,63 and 113.\n\n\nFind SIGMA2(1015) modulo 109. \n\n";
const index: number = 401;
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

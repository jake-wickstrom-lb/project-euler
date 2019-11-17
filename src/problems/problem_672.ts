import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "One more one";
const description: string = "\nConsider the following process that can be applied recursively to any positive integer $n$:\n\nif $n = 1$ do nothing and the process stops,\nif $n$ is divisible by 7 divide it by 7,\notherwise add 1.\n\nDefine $g(n)$ to be the number of 1's that must be added before the process ends. For example:\n$125\\xrightarrow{\\scriptsize{+1}} 126\\xrightarrow{\\scriptsize{\\div 7}} 18\\xrightarrow{\\scriptsize{+1}} 19\\xrightarrow{\\scriptsize{+1}} 20\\xrightarrow{\\scriptsize{+1}} 21\\xrightarrow{\\scriptsize{\\div 7}} 3\\xrightarrow{\\scriptsize{+1}} 4\\xrightarrow{\\scriptsize{+1}} 5\\xrightarrow{\\scriptsize{+1}} 6\\xrightarrow{\\scriptsize{+1}} 7\\xrightarrow{\\scriptsize{\\div 7}} 1$.\nEight 1's are added so $g(125) = 8$. Similarly $g(1000) = 9$ and $g(10000) = 21$.\nDefine $S(N) = \\sum_{n=1}^{N} g(n)$ and $H(K) = S\\left(\\frac{7^K-1}{11}\\right)$. You are given $H(10) = 690409338$.\nFind $H(10^9)$ modulo $1\\,117\\,117\\,717$.\n";
const index: number = 672;
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

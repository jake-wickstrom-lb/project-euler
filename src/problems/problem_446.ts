import { Problem, Strategy } from "../Problem";
const title: string = "Retractions B";
const description: string = "\n\nFor every integer $n>1$, the family of functions $f_{n,a,b}$ is defined \nby  \n$f_{n,a,b}(x)\\equiv a x + b \\mod n\\,\\,\\, $ for $a,b,x$ integer and  $0< a <n, 0 \\le b < n,0 \\le x < n$. \n\nWe will call $f_{n,a,b}$ a retraction if $\\,\\,\\, f_{n,a,b}(f_{n,a,b}(x)) \\equiv f_{n,a,b}(x) \\mod n \\,\\,\\,$ for every $0 \\le x < n$.\nLet $R(n)$ be the number of retractions for $n$.\n\n\n$\\displaystyle F(N)=\\sum_{n=1}^NR(n^4+4)$.  \n$F(1024)=77532377300600$.\n\nFind $F(10^7)$.\nGive your answer modulo $1\\,000\\,000\\,007$.\n\n";
const index: number = 446;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

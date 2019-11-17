import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Retractions A";
const description: string = "\n\nFor every integer $n>1$, the family of functions $f_{n,a,b}$ is defined \nby  \n$f_{n,a,b}(x)\\equiv a x + b \\mod n\\,\\,\\, $ for $a,b,x$ integer and  $0< a <n, 0 \\le b < n,0 \\le x < n$. \n\nWe will call $f_{n,a,b}$ a retraction if $\\,\\,\\, f_{n,a,b}(f_{n,a,b}(x)) \\equiv f_{n,a,b}(x) \\mod n \\,\\,\\,$ for every $0 \\le x < n$.\nLet $R(n)$ be the number of retractions for $n$.\n\n\nYou are given that\n$\\displaystyle \\sum_{k=1}^{99\\,999} R(\\binom {100\\,000} k)  \\equiv 628701600 \\mod 1\\,000\\,000\\,007$.\n \nFind $\\displaystyle \\sum_{k=1}^{9\\,999\\,999} R(\\binom {10\\,000\\,000} k)$.\nGive your answer modulo $1\\,000\\,000\\,007$.\n\n\n\n";
const index: number = 445;
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

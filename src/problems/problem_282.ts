import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The Ackermann function";
const description: string = "\n$\\def\\htmltext#1{\\style{font-family:inherit;}{\\text{#1}}}$\n\nFor non-negative integers $m$, $n$, the Ackermann function $A(m,n)$ is defined as follows:\n\n$$\nA(m,n) = \\cases{\nn+1 &$\\htmltext{ if  }m=0$\\cr\nA(m-1,1) &$\\htmltext{ if   }m>0 \\htmltext{  and  } n=0$\\cr\nA(m-1,A(m,n-1)) &$\\htmltext{ if   }m>0 \\htmltext{  and  } n>0$\\cr\n}$$\n\n\nFor example $A(1,0) = 2$, $A(2,2) = 7$ and $A(3,4) = 125$.\n\n\nFind $\\displaystyle\\sum_{n=0}^6 A(n,n)$ and give your answer mod $14^8$.\n";
const index: number = 282;
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

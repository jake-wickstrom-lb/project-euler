import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Linear Combinations of Semiprimes";
const description: string = "\n\nGiven the values of integers $1 < a_1 < a_2 < \\dots < a_n$, consider the linear combination\n$q_1 a_1+q_2 a_2 + \\dots + q_n a_n=b$, using only integer values $q_k \\ge 0$. \n\n\nNote that for a given set of $a_k$, it may be that not all values of $b$ are possible.\nFor instance, if $a_1=5$ and $a_2=7$, there are no $q_1 \\ge 0$ and $q_2 \\ge 0$ such that $b$ could be \n$1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18$ or $23$.\n\nIn fact, $23$ is the largest impossible value of $b$ for $a_1=5$ and $a_2=7$. We therefore call $f(5, 7) = 23$. Similarly, it can be shown that $f(6, 10, 15)=29$ and $f(14, 22, 77) = 195$.\n\n\nFind $\\displaystyle \\sum f( p\\, q,p \\, r, q \\, r)$, where $p$, $q$ and $r$ are prime numbers and $p < q < r < 5000$.\n\n\n\n";
const index: number = 278;
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

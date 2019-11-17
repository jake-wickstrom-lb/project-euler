import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "A weird recurrence relation";
const description: string = "\n\nThe function $f$ is defined for all positive integers as follows:\n$f(1)=1$\n$f(3)=3$\n$f(2n)=f(n)$\n$f(4n + 1)=2f(2n + 1) - f(n)$\n$f(4n + 3)=3f(2n + 1) - 2f(n)$\n\nThe function $S(n)$ is defined as $\\sum_{i=1}^{n}f(i)$.\n$S(8)=22$ and $S(100)=3604$.\nFind $S(3^{37})$. Give the last 9 digits of your answer.\n\n\n";
const index: number = 463;
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

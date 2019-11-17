import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Triangles with non rational sides and integral area";
const description: string = "\nConsider the triangle with sides $\\sqrt 5$, $\\sqrt {65}$ and $\\sqrt {68}$.\nIt can be shown that this triangle has area $9$.\n\n$S(n)$ is the sum of the areas of  all triangles with sides $\\sqrt{1+b^2}$, $\\sqrt {1+c^2}$ and $\\sqrt{b^2+c^2}\\,$ (for positive integers $b$ and $c$) that have an integral area not exceeding $n$.\n\nThe example triangle has $b=2$ and $c=8$.\n\n$S(10^6)=18018206$.\n\nFind $S(10^{10})$.\n";
const index: number = 390;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "2011 nines";
const description: string = "\n\nConsider the real number $\\sqrt 2 + \\sqrt 3$.\nWhen we calculate the even powers of $\\sqrt 2 + \\sqrt 3$\nwe get:\n$(\\sqrt 2 + \\sqrt 3)^2 = 9.898979485566356 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^4 = 97.98979485566356 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^6 = 969.998969071069263 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^8 = 9601.99989585502907 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^{10} = 95049.999989479221 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^{12} = 940897.9999989371855 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^{14} = 9313929.99999989263 \\dots $\n$(\\sqrt 2 + \\sqrt 3)^{16} = 92198401.99999998915 \\dots $\n\nIt looks as if the number of consecutive nines at the beginning of the fractional part of these powers is non-decreasing.\nIn fact it can be proven that the fractional part of $(\\sqrt 2 + \\sqrt 3)^{2 n}$ approaches $1$ for large $n$.\n\n\nConsider all real numbers of the form $\\sqrt p + \\sqrt q$ with $p$ and $q$ positive integers and $p < q$, such that the fractional part \nof $(\\sqrt p + \\sqrt q)^{ 2 n}$ approaches $1$ for large $n$.\n\n\nLet $C(p,q,n)$ be the number of consecutive nines at the beginning of the fractional part of $(\\sqrt p + \\sqrt q)^{ 2 n}$.\n\n\nLet $N(p,q)$ be the minimal value of $n$ such that $C(p,q,n) \\ge 2011$.\n\n\nFind $\\displaystyle \\sum N(p,q) \\,\\, \\text{ for } p+q \\le 2011$.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n";
const index: number = 318;
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

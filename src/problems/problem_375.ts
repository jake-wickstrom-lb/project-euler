import { Problem, Strategy } from "../Problem";
const title: string = "Minimum of subsequences";
const description: string = "\nLet $S_n$ be an integer sequence produced with the following pseudo-random number generator:\n\\[\n\\begin{equation}\n\\begin{split}\nS_0 & = 290797 \\\\\nS_{n+1} & = S_n^2 \\bmod 50515093\n\\end{split}\n\\end{equation}\n\\]\n\n\nLet $A(i, j)$ be the minimum of the numbers $S_i, S_{i+1}, \\ldots, S_j$ for $i\\le j$.\nLet $M(N) = \\sum A(i, j)$ for $1 \\le i \\le j \\le N$.\nWe can verify that $M(10) = 432256955$ and $M(10\\,000) = 3264567774119$.\n\n\nFind $M(2\\,000\\,000\\,000)$.\n\n";
const index: number = 375;
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

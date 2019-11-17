import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Palindromic sequences";
const description: string = "\n\nGiven an irrational number $\\alpha$, let $S_\\alpha(n)$ be the sequence $S_\\alpha(n)=\\lfloor {\\alpha \\cdot n} \\rfloor - \\lfloor {\\alpha \\cdot (n-1)} \\rfloor$ for $n \\ge 1$. \n($\\lfloor ... \\rfloor$ is the floor-function.)\n\n\nIt can be proven that for any irrational $\\alpha$ there exist infinitely many values of $n$ such that the subsequence $ \\{S_\\alpha(1),S_\\alpha(2)...S_\\alpha(n) \\} $ is palindromic.\n\nThe first 20 values of $n$  that give a palindromic subsequence for $\\alpha = \\sqrt{31}$ are:\n1, 3, 5, 7, 44, 81, 118, 273, 3158, 9201, 15244, 21287, 133765, 246243, 358721, 829920, 9600319, 27971037, 46341755, 64712473.\n\nLet $H_g(\\alpha)$ be the sum of the first $g$ values of $n$  for which the corresponding subsequence is palindromic.\nSo $H_{20}(\\sqrt{31})=150243655$.\n\nLet $T=\\{2,3,5,6,7,8,10,...,1000\\}$ be the set of positive integers, not exceeding 1000, excluding perfect squares.\nCalculate the sum of $H_{100}(\\sqrt \\beta)$ for  $\\beta \\in T$. Give the last 15 digits of your answer.\n\n\n";
const index: number = 656;
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

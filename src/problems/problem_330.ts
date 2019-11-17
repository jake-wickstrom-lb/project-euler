import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Euler's Number";
const description: string = "\nAn infinite sequence of real numbers a(n) is defined for all integers n as follows:\n$$a(n) = \\begin{cases}\n1 & n \\lt 0\\\\\n\\sum \\limits_{i = 1}^{\\infty}{\\dfrac{a(n - i)}{i!}} & n \\ge 0\n\\end{cases}$$\n\nFor example,a(0) = \n    11!\n    +\n    12!\n    +\n    13!\n    + ... = e \u2212 1 \na(1) = \n    e \u2212 11!\n    +\n    12!\n    +\n    13!\n    + ... = 2e \u2212 3 \na(2) = \n    2e \u2212 31!\n    +\n    e \u2212 12!\n    +\n    13!\n    + ... =\n    72\n    e \u2212 6 \n\nwith e = 2.7182818... being Euler's constant.\n\n\nIt can be shown that a(n) is of the form \n    \n    A(n) e + B(n)n!\n    for integers A(n) and B(n). \n    \nFor example a(10) = \n    \n    328161643 e \u2212 65269448610!\n    .\n\nFind A(109) + B(109) and give your answer mod 77 777 777.\n\n\n\n\n";
const index: number = 330;
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

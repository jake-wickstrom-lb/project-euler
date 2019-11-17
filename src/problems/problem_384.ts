import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Rudin-Shapiro sequence";
const description: string = "\nDefine the sequence a(n) as the number of adjacent pairs of ones in the binary expansion of n (possibly overlapping).\nE.g.: a(5) = a(1012) = 0, a(6) = a(1102) = 1, a(7) = a(1112) = 2\n\nDefine the sequence b(n) = (-1)a(n).\nThis sequence is called the Rudin-Shapiro sequence.\nAlso consider the summatory sequence of b(n): $s(n) = \\sum \\limits_{i = 0}^{n} {b(i)}$.\n\nThe first couple of values of these sequences are:\nn\u00A0 \u00A0 \u00A0 \u00A0 0 \u00A0 \u00A0 1 \u00A0 \u00A0 2 \u00A0 \u00A0 3 \u00A0 \u00A0 4 \u00A0 \u00A0 5 \u00A0 \u00A0 6 \u00A0 \u00A0 7\na(n) \u00A0 \u00A0 0 \u00A0 \u00A0 0 \u00A0 \u00A0 0 \u00A0 \u00A0 1 \u00A0 \u00A0 0 \u00A0 \u00A0 0 \u00A0 \u00A0 1 \u00A0 \u00A0 2\nb(n) \u00A0 \u00A0 1 \u00A0 \u00A0 1 \u00A0 \u00A0 1 \u00A0 \u00A0-1 \u00A0 \u00A0 1 \u00A0 \u00A0 1 \u00A0 \u00A0-1 \u00A0 \u00A0 1\ns(n) \u00A0 \u00A0 1 \u00A0 \u00A0 2 \u00A0 \u00A0 3 \u00A0 \u00A0 2 \u00A0 \u00A0 3 \u00A0 \u00A0 4 \u00A0 \u00A0 3 \u00A0 \u00A0 4\n\nThe sequence s(n) has the remarkable property that all elements are positive and every positive integer k occurs exactly k times.\n\nDefine g(t,c), with 1 \u2264 c \u2264 t, as the index in s(n) for which t occurs for the c'th time in s(n).\nE.g.: g(3,3) = 6, g(4,2) = 7 and g(54321,12345) = 1220847710.\n\nLet F(n) be the fibonacci sequence defined by:\nF(0)=F(1)=1 and\nF(n)=F(n-1)+F(n-2) for n>1.\n\nDefine GF(t)=g(F(t),F(t-1)).\n\nFind $\\sum$\u2009GF(t) for 2\u2264t\u226445.\n";
const index: number = 384;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Freefarea";
const description: string = "\nLet $S$ be the set consisting of the four letters $\\{\\texttt{`A'},\\texttt{`E'},\\texttt{`F'},\\texttt{`R'}\\}$.\nFor $n\\ge 0$, let $S^*(n)$ denote the set of words of length $n$ consisting of letters belonging to $S$.\nWe designate the words $\\texttt{FREE}, \\texttt{FARE}, \\texttt{AREA}, \\texttt{REEF}$ as keywords.\n\nLet $f(n)$ be the number of words in $S^*(n)$ that contains all four keywords exactly once.\n\nThis first happens for $n=9$, and indeed there is a unique 9 lettered word that contain each of the keywords once: $\\texttt{FREEFAREA}$\nSo, $f(9)=1$.\n\nYou are also given that $f(15)=72863$.\n\nFind $f(30)$.\n\n";
const index: number = 679;
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

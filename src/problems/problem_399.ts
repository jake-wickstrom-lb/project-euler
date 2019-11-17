import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Squarefree Fibonacci Numbers";
const description: string = "\n\nThe first 15 fibonacci numbers are:\n1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.\nIt can be seen that 8 and 144 are not squarefree: 8 is divisible by 4 and 144 is divisible by 4 and by 9. \nSo the first 13 squarefree fibonacci numbers are:\n1,1,2,3,5,13,21,34,55,89,233,377 and 610.\n\n\nThe 200th squarefree fibonacci number is:\n971183874599339129547649988289594072811608739584170445.\nThe last sixteen digits of this number are: 1608739584170445 and in scientific notation this number can be written as 9.7e53.\n\n\nFind the 100 000 000th squarefree fibonacci number.\nGive as your answer its last sixteen digits followed by a comma followed by the number in scientific notation (rounded to one digit after the decimal point).\nFor the 200th squarefree number the answer would have been: 1608739584170445,9.7e53\n\n\n\nNote: \nFor this problem, assume that for every prime p, the first fibonacci number divisible by p is not divisible by p2 (this is part of Wall's conjecture). This has been verified for primes \u2264 3\u00B71015, but has not been proven in general.\n\nIf it happens that the conjecture is false, then the accepted answer to this problem isn't guaranteed to be the 100 000 000th squarefree fibonacci number, rather it represents only a lower bound for that number.\n\n\n\n\n\n";
const index: number = 399;
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

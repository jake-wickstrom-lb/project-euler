import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Lychrel numbers";
const description: string = "\nIf we take 47, reverse and add, 47 + 74 = 121, which is palindromic.\nNot all numbers produce palindromes so quickly. For example,\n349 + 943 = 1292,\n1292 + 2921 = 4213\n4213 + 3124 = 7337\nThat is, 349 took three iterations to arrive at a palindrome.\nAlthough no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).\nSurprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.\nHow many Lychrel numbers are there below ten-thousand?\nNOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.\n";
const index: number = 55;
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

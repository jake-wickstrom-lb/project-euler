import { Problem, Strategy } from "../Problem";
const title: string = "Totient maximum";
const description: string = "\n\nEuler's Totient function, \u03C6(n) [sometimes called the phi function], is used to determine the number of numbers less than n which are relatively prime to n. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, \u03C6(9)=6.\n\nn\nRelatively Prime\n\u03C6(n)\nn/\u03C6(n)\n2\n1\n1\n2\n3\n1,2\n2\n1.5\n4\n1,3\n2\n2\n5\n1,2,3,4\n4\n1.25\n6\n1,5\n2\n3\n7\n1,2,3,4,5,6\n6\n1.1666...\n8\n1,3,5,7\n4\n2\n9\n1,2,4,5,7,8\n6\n1.5\n10\n1,3,7,9\n4\n2.5\n\nIt can be seen that n=6 produces a maximum n/\u03C6(n) for n \u2264 10.\nFind the value of n \u2264 1,000,000 for which n/\u03C6(n) is a maximum.\n\n";
const index: number = 69;
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

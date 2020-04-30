import { Problem, Strategy } from "../Problem";
const title: string = "Counting fractions in a range";
const description: string = "\nConsider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.\nIf we list the set of reduced proper fractions for d \u2264 8 in ascending order of size, we get:\n1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8\nIt can be seen that there are 3 fractions between 1/3 and 1/2.\nHow many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d \u2264 12,000?\n\n\n";
const index: number = 73;
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

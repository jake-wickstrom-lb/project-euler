import { Problem, Strategy } from "../Problem";
const title: string = "Ordered fractions";
const description: string = "\nConsider the fraction, n/d, where n and d are positive integers. If n<d and HCF(n,d)=1, it is called a reduced proper fraction.\nIf we list the set of reduced proper fractions for d \u2264 8 in ascending order of size, we get:\n1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8\nIt can be seen that 2/5 is the fraction immediately to the left of 3/7.\nBy listing the set of reduced proper fractions for d \u2264 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.\n\n";
const index: number = 71;
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

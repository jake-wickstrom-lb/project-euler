import { Problem, Strategy } from "../Problem";
const title: string = "Number Rotations";
const description: string = "\nConsider the number 142857. We can right-rotate this number by moving the last digit (7) to the front of it, giving us 714285.\nIt can be verified that 714285=5\u00D7142857.\nThis demonstrates an unusual property of 142857: it is a divisor of its right-rotation.\nFind the last 5 digits of the sum of all integers n, 10 < n < 10100, that have this property.\n\n";
const index: number = 168;
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

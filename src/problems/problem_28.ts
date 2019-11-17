import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Number spiral diagonals";
const description: string = "\nStarting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:\n21 22 23 24 25\n20 \u00A07 \u00A08 \u00A09 10\n19 \u00A06 \u00A01 \u00A02 11\n18 \u00A05 \u00A04 \u00A03 1217 16 15 14 13\nIt can be verified that the sum of the numbers on the diagonals is 101.\nWhat is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?\n\n";
const index: number = 28;
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

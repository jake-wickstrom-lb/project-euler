import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Spiral primes";
const description: string = "\nStarting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.\n37 36 35 34 33 32 31\n38 17 16 15 14 13 30\n39 18 \u00A05 \u00A04 \u00A03 12 29\n40 19 \u00A06 \u00A01 \u00A02 11 28\n41 20 \u00A07 \u00A08 \u00A09 10 27\n42 21 22 23 24 25 2643 44 45 46 47 48 49\nIt is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 \u2248 62%.\nIf one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?\n\n";
const index: number = 58;
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

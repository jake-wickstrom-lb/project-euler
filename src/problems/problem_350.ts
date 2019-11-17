import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Constraining the least greatest and the greatest least";
const description: string = "\nA list of size n is a sequence of n natural numbers. Examples are (2,4,6), (2,6,4), (10,6,15,6), and (11).\n\nThe greatest common divisor, or gcd, of a list is the largest natural number that divides all entries of the list. Examples: gcd(2,6,4) = 2, gcd(10,6,15,6) = 1 and gcd(11) = 11.\n\nThe least common multiple, or lcm, of a list is the smallest natural number divisible by each entry of the list. Examples: lcm(2,6,4) = 12, lcm(10,6,15,6) = 30 and lcm(11) = 11.\n\nLet f(G, L, N) be the number of lists of size N with gcd \u2265 G and lcm \u2264 L. For example:\n\nf(10, 100, 1) = 91.\nf(10, 100, 2) = 327.\nf(10, 100, 3) = 1135.\nf(10, 100, 1000) mod 1014 = 3286053.\n\nFind f(106, 1012, 1018) mod 1014.\n\n\n";
const index: number = 350;
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

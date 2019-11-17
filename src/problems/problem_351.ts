import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Hexagonal orchards";
const description: string = "\nA hexagonal orchard of order n is a triangular lattice made up of points within a regular hexagon with side n. The following is an example of a hexagonal orchard of order 5:\n\n\n\n\n\n\nHighlighted in green are the points which are hidden from the center by a point closer to it. It can be seen that for a hexagonal orchard of order 5, 30 points are hidden from the center.\n\n\n\nLet H(n) be the number of points hidden from the center in a hexagonal orchard of order n.\n\n\n\nH(5) = 30. H(10) = 138. H(1 000) = 1177848.\n\n\n\nFind H(100 000 000).\n\n";
const index: number = 351;
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

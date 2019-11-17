import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Cutting rope";
const description: string = "\n\nInside a rope of length n, n-1 points are placed with distance 1 from each other and from the endpoints. Among these points, we choose m-1 points at random and cut the rope at these points to create m segments.\n\n\nLet E(n, m) be the expected length of the second-shortest segment.\nFor example, E(3, 2) = 2 and E(8, 3) = 16/7.\nNote that if multiple segments have the same shortest length the length of the second-shortest segment is defined as the same as the shortest length.\n\n\nFind E(107, 100).\nGive your answer rounded to 5 decimal places behind the decimal point.\n\n";
const index: number = 398;
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

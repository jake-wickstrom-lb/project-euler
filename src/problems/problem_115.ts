import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Counting block combinations II";
const description: string = "\nNOTE: This is a more difficult version of Problem 114.\nA row measuring n units in length has red blocks with a minimum length of m units placed on it, such that any two red blocks (which are allowed to be different lengths) are separated by at least one black square.\nLet the fill-count function, F(m, n), represent the number of ways that a row can be filled.\nFor example, F(3, 29) = 673135 and F(3, 30) = 1089155.\nThat is, for m = 3, it can be seen that n = 30 is the smallest value for which the fill-count function first exceeds one million.\nIn the same way, for m = 10, it can be verified that F(10, 56) = 880711 and F(10, 57) = 1148904, so n = 57 is the least value for which the fill-count function first exceeds one million.\nFor m = 50, find the least value of n for which the fill-count function first exceeds one million.\n\n";
const index: number = 115;
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

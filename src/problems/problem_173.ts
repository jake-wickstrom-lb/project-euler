import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Using up to one million tiles how many different \"hollow\" square laminae can be formed?";
const description: string = "\nWe shall define a square lamina to be a square outline with a square \"hole\" so that the shape possesses vertical and horizontal symmetry. For example, using exactly thirty-two square tiles we can form two different square laminae:\n\n\nWith one-hundred tiles, and not necessarily using all of the tiles at one time, it is possible to form forty-one different square laminae.\nUsing up to one million tiles how many different square laminae can be formed?\n";
const index: number = 173;
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

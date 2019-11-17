import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Robot Walks";
const description: string = "\nA robot moves in a series of one-fifth circular arcs (72\u00B0), with a free choice of a clockwise or an anticlockwise arc for each step, but no turning on the spot.\n\nOne of 70932 possible closed paths of 25 arcs starting northward is\n\n\n\nGiven that the robot starts facing North, how many journeys of 70 arcs in length can it take that return it, after the final arc, to its starting position?\n(Any arc may be traversed multiple times.) \n\n\n";
const index: number = 208;
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

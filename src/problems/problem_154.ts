import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Exploring Pascal's pyramid";
const description: string = "\nA triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.\n\nThen, we calculate the number of paths leading from the apex to each position:\nA path starts at the apex and progresses downwards to any of the three spheres directly below the current position.\nConsequently, the number of paths to reach a certain position is the sum of the numbers immediately above it (depending on the position, there are up to three numbers above it).\nThe result is Pascal's pyramid and the numbers at each level n are the coefficients of the trinomial expansion \n(x + y + z)n.\nHow many coefficients in the expansion of (x + y + z)200000 are multiples of 1012?\n";
const index: number = 154;
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

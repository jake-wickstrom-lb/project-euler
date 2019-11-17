import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Scoring probabilities";
const description: string = "\nBarbara is a mathematician and a basketball player. She has found that the probability of scoring a point when shooting from a distance x is exactly (1\u2009-\u00A0x/q), where q is a real constant greater than 50.\n\nDuring each practice run, she takes shots from distances x\u2009=\u20091, x\u2009=\u20092, ..., x\u2009=\u200950 and, according to her records, she has precisely a 2\u2009% chance to score a total of exactly 20 points.\n\nFind q and give your answer rounded to 10 decimal places.\n";
const index: number = 286;
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

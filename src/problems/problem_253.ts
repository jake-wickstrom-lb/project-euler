import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Tidying up";
const description: string = "\nA small child has a \u201Cnumber caterpillar\u201D consisting of forty jigsaw pieces, each with one number on it, which, when connected together in a line, reveal the numbers 1 to 40 in order.\n\nEvery night, the child's father has to pick up the pieces of the caterpillar that have been scattered across the play room. He picks up the pieces at random and places them in the correct order. As the caterpillar is built up in this way, it forms distinct segments that gradually merge together. The number of segments starts at zero (no pieces placed), generally increases up to about eleven or twelve, then tends to drop again before finishing at a single segment (all pieces placed).\n\nFor example:\n\nPiece Placed\nSegments So Far\n121422936434554354\u2026\u2026\n\nLet M be the maximum number of segments encountered during a random tidy-up of the caterpillar.\nFor a caterpillar of ten pieces, the number of possibilities for each M is\n\nM\nPossibilities\n1512\u00A0 \u00A0\u00A0 \u00A02250912\u00A0 \u00A0\u00A0 \u00A031815264\u00A0 \u00A0\u00A0 \u00A041418112\u00A0 \u00A0\u00A0 \u00A05144000\u00A0 \u00A0\u00A0 \u00A0\n\nso the most likely value of M is 3 and the average value is 385643\u2044113400 = 3.400732, rounded to six decimal places.\n\nThe most likely value of M for a forty-piece caterpillar is 11; but what is the average value of M?\nGive your answer rounded to six decimal places.\n\n";
const index: number = 253;
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

import { Problem, Strategy } from "../Problem";
const title: string = "Reachable Numbers";
const description: string = "\nA positive integer will be called reachable if it can result from an arithmetic expression obeying the following rules:\n\nUses the digits 1 through 9, in that order and exactly once each.\nAny successive digits can be concatenated (for example, using the digits 2, 3 and 4 we obtain the number 234).\nOnly the four usual binary arithmetic operations (addition, subtraction, multiplication and division) are allowed.\nEach operation can be used any number of times, or not at all.\nUnary minus is not allowed.\nAny number of (possibly nested) parentheses may be used to define the order of operations.\nFor example, 42 is reachable, since (1/23) * ((4*5)-6) * (78-9) = 42.\n\nWhat is the sum of all positive reachable integers?\n";
const index: number = 259;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);

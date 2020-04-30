import { Problem, Strategy } from "../Problem";
const title: string = "Pandigital prime sets";
const description: string = "\nUsing all of the digits 1 through 9 and concatenating them freely to form decimal integers, different sets can be formed. Interestingly with the set {2,5,47,89,631}, all of the elements belonging to it are prime.\nHow many distinct sets containing each of the digits one through nine exactly once contain only prime elements?\n\n";
const index: number = 118;
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

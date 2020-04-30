import { Problem, Strategy } from "../Problem";
const title: string = "Comfortable distance";
const description: string = "\n\nThere are N seats in a row. N people come after each other to fill the seats according to the following rules:\nIf there is any seat whose adjacent seat(s) are not occupied take such a seat.\nIf there is no such seat and there is any seat for which only one adjacent seat is occupied take such a seat.\nOtherwise take one of the remaining available seats. \n\nLet T(N) be the number of possibilities that N seats are occupied by N people with the given rules. The following figure shows T(4)=8.\n\n\n\n\n\nWe can verify that T(10) = 61632 and T(1 000) mod 100 000 007 = 47255094.\nFind T(1 000 000) mod 100 000 007.\n";
const index: number = 364;
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

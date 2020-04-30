import { Problem, Strategy } from "../Problem";
const title: string = "Goldbach's other conjecture";
const description: string = "\nIt was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.\n9 = 7 + 2\u00D712\n15 = 7 + 2\u00D722\n21 = 3 + 2\u00D732\n25 = 7 + 2\u00D732\n27 = 19 + 2\u00D722\n33 = 31 + 2\u00D712\nIt turns out that the conjecture was false.\nWhat is the smallest odd composite that cannot be written as the sum of a prime and twice a square?\n\n";
const index: number = 46;
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

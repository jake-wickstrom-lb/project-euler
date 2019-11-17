import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Gnomon numbering";
const description: string = "\nFor integers m, n (0\u00A0\u2264\u00A0n\u00A0<\u00A0m), let L(m,\u00A0n) be an m\u00D7m grid with the top-right n\u00D7n grid removed.\n\nFor example, L(5, 3) looks like this:\n\n\n\nWe want to number each cell of L(m,\u00A0n) with consecutive integers 1, 2, 3, ... such that the number in every cell is smaller than the number below it and to the left of it.\n\nFor example, here are two valid numberings of L(5,\u00A03):\n\n\nLet LC(m, n) be the number of valid numberings of L(m, n).\nIt can be verified that LC(3,\u00A00) = 42, LC(5,\u00A03) = 250250, LC(6,\u00A03) = 406029023400 and LC(10,\u00A05) mod 76543217 = 61251715.\n\nFind LC(10000,\u00A05000) mod 76543217.\n";
const index: number = 412;
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

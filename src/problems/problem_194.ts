import { Problem, Strategy } from "../Problem";
const title: string = "Coloured Configurations";
const description: string = "\nConsider graphs built with the units A: \nand B: , where the units are glued along\nthe vertical edges as in the graph .\n\nA configuration of type (a,b,c) is a graph thus built of a units A and b units B, where the graph's vertices are coloured using up to c colours, so that no two adjacent vertices have the same colour.\nThe compound graph above is an example of a configuration of type (2,2,6), in fact of type (2,2,c) for all c \u2265 4.\n\nLet N(a,b,c) be the number of configurations of type (a,b,c).\nFor example, N(1,0,3) = 24, N(0,2,4) = 92928 and N(2,2,3) = 20736.\n\nFind the last 8 digits of N(25,75,1984).\n";
const index: number = 194;
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

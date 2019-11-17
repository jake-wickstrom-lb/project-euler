import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Singular integer right triangles";
const description: string = "\nIt turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.\n12 cm: (3,4,5)24 cm: (6,8,10)30 cm: (5,12,13)36 cm: (9,12,15)40 cm: (8,15,17)48 cm: (12,16,20)\nIn contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.\n120 cm: (30,40,50), (20,48,52), (24,45,51)\nGiven that L is the length of the wire, for how many values of L \u2264 1,500,000 can exactly one integer sided right angle triangle be formed?\n\n";
const index: number = 75;
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

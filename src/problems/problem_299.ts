import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Three similar triangles";
const description: string = "\nFour points with integer coordinates are selected:A(a,\u00A00), B(b,\u00A00), C(0,\u00A0c) and D(0,\u00A0d), \nwith 0\u00A0<\u00A0a\u00A0<\u00A0b and 0\u00A0<\u00A0c\u00A0<\u00A0d.\nPoint P, also with integer coordinates, is chosen on the line AC so that the three triangles ABP, CDP and BDP are all similar.\n\nIt is easy to prove that the three triangles can be similar, only if a=c.\n\nSo, given that a=c, we are looking for triplets (a,b,d) such that at least one point P (with integer coordinates) exists on AC, making the three triangles ABP, CDP and BDP all similar.\n\nFor example, if (a,b,d)=(2,3,4), it can be easily verified that point P(1,1) satisfies the above condition. \nNote that the triplets (2,3,4) and (2,4,3) are considered as distinct, although point P(1,1) is common for both.\n\nIf b+d\u00A0<\u00A0100, there are 92 distinct triplets (a,b,d) such that point P exists.\nIf b+d\u00A0<\u00A0100 000, there are 320471 distinct triplets (a,b,d) such that point P exists.\nIf b+d\u00A0<\u00A0100 000 000, how many distinct triplets (a,b,d) are there such that point P exists?\n";
const index: number = 299;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Exploring Pascal's triangle";
const description: string = "\nWe can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A01\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A01\n\u00A0\n\u00A01\n\u00A0\n\u00A0\n\u00A0\n\u00A0\n\u00A01\n\u00A0\n\u00A02\n\u00A0\n\u00A01\n\u00A0\n\u00A0\n\u00A0\n\u00A01\n\u00A0\n\u00A03\n\u00A0\n\u00A03\n\u00A0\n\u00A01\n\u00A0\n\u00A0\n\u00A01\n\u00A0\n\u00A04\n\u00A0\n\u00A06\n\u00A0\n\u00A04\n\u00A0\n\u00A01\n\u00A0\n\u00A01\n\u00A0\n\u00A05\n\u00A0\n10\n\u00A0\n10\n\u00A0\n\u00A05\n\u00A0\n\u00A01\n1\n\u00A0\n\u00A06\n\u00A0\n15\n\u00A0\n20\n\u00A0\n15\n\u00A0\n\u00A06\n\u00A0\n\u00A01\nHowever, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are not divisible by 7.\n\nFind the number of entries which are not divisible by 7 in the first one billion (109) rows of Pascal's triangle.\n";
const index: number = 148;
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

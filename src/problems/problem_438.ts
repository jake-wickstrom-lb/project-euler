import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Integer part of polynomial equation's solutions";
const description: string = "\n\nFor an n-tuple of integers t = (a1, ..., an), let (x1, ..., xn) be the solutions of the polynomial equation xn + a1xn-1 + a2xn-2 + ... + an-1x + an = 0.\n\n\nConsider the following two conditions:\nx1, ..., xn are all real.\nIf x1, ..., xn are sorted, \u230Axi\u230B = i for 1 \u2264 i \u2264 n. (\u230A\u00B7\u230B: floor function.)\n\nIn the case of n = 4, there are 12 n-tuples of integers which satisfy both conditions.\nWe define S(t) as the sum of the absolute values of the integers in t.\nFor n = 4 we can verify that \u2211\u2009S(t) = 2087 for all n-tuples t which satisfy both conditions.\n\n\nFind \u2211\u2009S(t) for n = 7.\n\n";
const index: number = 438;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Product-sum numbers";
const description: string = "\n\nA natural number, N, that can be written as the sum and product of a given set of at least two natural numbers, {a1, a2, ... , ak} is called a product-sum number: N = a1 + a2 + ... + ak = a1 \u00D7 a2 \u00D7 ... \u00D7 ak.\nFor example, 6 = 1 + 2 + 3 = 1 \u00D7 2 \u00D7 3.\nFor a given set of size, k, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, k = 2, 3, 4, 5, and 6 are as follows.\nk=2: 4 = 2 \u00D7 2 = 2 + 2k=3: 6 = 1 \u00D7 2 \u00D7 3 = 1 + 2 + 3k=4: 8 = 1 \u00D7 1 \u00D7 2 \u00D7 4 = 1 + 1 + 2 + 4k=5: 8 = 1 \u00D7 1 \u00D7 2 \u00D7 2 \u00D7 2  = 1 + 1 + 2 + 2 + 2k=6: 12 = 1 \u00D7 1 \u00D7 1 \u00D7 1 \u00D7 2 \u00D7 6 = 1 + 1 + 1 + 1 + 2 + 6\nHence for 2\u2264k\u22646, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.\nIn fact, as the complete set of minimal product-sum numbers for 2\u2264k\u226412 is {4, 6, 8, 12, 15, 16}, the sum is 61.\nWhat is the sum of all the minimal product-sum numbers for 2\u2264k\u226412000?\n\n";
const index: number = 88;
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
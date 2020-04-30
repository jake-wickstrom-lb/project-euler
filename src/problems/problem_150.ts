import { Problem, Strategy } from "../Problem";
const title: string = "Searching a triangular array for a sub-triangle having minimum-sum";
const description: string = "\nIn a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.\nIn the example below, it can be easily verified that the marked triangle satisfies this condition having a sum of \u221242.\n\n\nWe wish to make such a triangular array with one thousand rows, so we generate 500500 pseudo-random numbers sk in the range \u00B1219, using a type of random number generator (known as a Linear Congruential Generator) as follows:\nt := 0\n\nfor k = 1 up to k = 500500:\n\n\u00A0 \u00A0 t := (615949*t + 797807) modulo 220\n\u00A0 \u00A0 sk := t\u2212219\nThus: s1 = 273519, s2 = \u2212153582, s3 = 450905 etc\nOur triangular array is then formed using the pseudo-random numbers thus:\n\ns1\ns2\u00A0 s3\ns4\u00A0 s5\u00A0 s6\u00A0 \n\ns7\u00A0 s8\u00A0 s9\u00A0 s10\n...\n\nSub-triangles can start at any element of the array and extend down as far as we like (taking-in the two elements directly below it from the next row, the three elements directly below from the row after that, and so on).\n\nThe \"sum of a sub-triangle\" is defined as the sum of all the elements it contains.\n\nFind the smallest possible sub-triangle sum.\n";
const index: number = 150;
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

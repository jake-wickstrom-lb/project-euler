import { Problem, Strategy } from "../Problem";
const title: string = "Special partitions";
const description: string = "\nAll positive integers can be partitioned in such a way that each and every term of the partition can be expressed as 2ix3j, where i,j \u2265 0.\n\nLet's consider only those such partitions where none of the terms can divide any of the other terms.\nFor example, the partition of 17 = 2 + 6 + 9 = (21x30 + 21x31 + 20x32) would not be valid since 2 can divide 6. Neither would the partition 17 = 16 + 1 = (24x30 + 20x30) since 1 can divide 16. The only valid partition of 17 would be 8 + 9 = (23x30 + 20x32).\n\nMany integers have more than one valid partition, the first being 11 having the following two partitions.\n11 = 2 + 9 = (21x30 + 20x32)\n11 = 8 + 3 = (23x30 + 20x31)\n\nLet's define P(n) as the number of valid partitions of n. For example, P(11) = 2.\n\nLet's consider only the prime integers q which would have a single valid partition such as P(17).\n\nThe sum of the primes q <100 such that P(q)=1 equals 233.\n\nFind the sum of the primes q <1000000 such that P(q)=1.\n";
const index: number = 333;
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

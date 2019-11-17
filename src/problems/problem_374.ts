import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Maximum Integer Partition Product";
const description: string = "\nAn integer partition of a number n is a way of writing n as a sum of positive integers.\n\nPartitions that differ only in the order of their summands are considered the same.\nA partition of n into distinct parts is a partition of n in which every part occurs at most once.\n\nThe partitions of 5 into distinct parts are:\n5, 4+1 and 3+2.\n\nLet f(n) be the maximum product of the parts of any such partition of n into distinct parts and let m(n) be the number of elements of any such partition of n with that product.\n\nSo f(5)=6 and m(5)=2.\n\nFor n=10 the partition with the largest product is 10=2+3+5, which gives f(10)=30 and m(10)=3.\nAnd their product, f(10)\u00B7m(10) = 30\u00B73 = 90\n\nIt can be verified that\n\u2211\u2009f(n)\u00B7m(n) for 1 \u2264 n \u2264 100 = 1683550844462.\n\nFind \u2211\u2009f(n)\u00B7m(n) for 1 \u2264 n \u2264 1014.\nGive your answer modulo 982451653, the 50 millionth prime.\n\n";
const index: number = 374;
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

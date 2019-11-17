import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Special subset sums: optimum";
const description: string = "\nLet S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:\nS(B) \u2260 S(C); that is, sums of subsets cannot be equal.\nIf B contains more elements than C then S(B) > S(C).\nIf S(A) is minimised for a given n, we shall call it an optimum special sum set. The first five optimum special sum sets are given below.\nn = 1: {1}n = 2: {1, 2}n = 3: {2, 3, 4}n = 4: {3, 5, 6, 7}n = 5: {6, 9, 11, 12, 13}\nIt seems that for a given optimum set, A = {a1, a2, ... , an}, the next optimum set is of the form B = {b, a1+b, a2+b, ... ,an+b}, where b is the \"middle\" element on the previous row.\nBy applying this \"rule\" we would expect the optimum set for n = 6 to be A = {11, 17, 20, 22, 23, 24}, with S(A) = 117. However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for n = 6 is A = {11, 18, 19, 20, 22, 25}, with S(A) = 115 and corresponding set string: 111819202225.\nGiven that A is an optimum special sum set for n = 7, find its set string.\nNOTE: This problem is related to Problem 105 and Problem 106.\n";
const index: number = 103;
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

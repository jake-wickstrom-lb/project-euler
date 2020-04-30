import { Problem, Strategy } from "../Problem";
const title: string = "Subsets with a unique sum";
const description: string = "\nFor any set A of numbers, let sum(A) be the sum of the elements of A.\nConsider the set B = {1,3,6,8,10,11}. There are 20 subsets of B containing three elements, and their sums are:\n\n\nsum({1,3,6}) = 10,\nsum({1,3,8}) = 12,\nsum({1,3,10}) = 14,\nsum({1,3,11}) = 15,\nsum({1,6,8}) = 15,\nsum({1,6,10}) = 17,\nsum({1,6,11}) = 18,\nsum({1,8,10}) = 19,\nsum({1,8,11}) = 20,\nsum({1,10,11}) = 22,\nsum({3,6,8}) = 17,\nsum({3,6,10}) = 19,\nsum({3,6,11}) = 20,\nsum({3,8,10}) = 21,\nsum({3,8,11}) = 22,\nsum({3,10,11}) = 24,\nsum({6,8,10}) = 24,\nsum({6,8,11}) = 25,\nsum({6,10,11}) = 27,\nsum({8,10,11}) = 29.\n\nSome of these sums occur more than once, others are unique.\nFor a set A, let U(A,k) be the set of unique sums of k-element subsets of A, in our example we find U(B,3) = {10,12,14,18,21,25,27,29} and sum(U(B,3)) = 156.\n\nNow consider the 100-element set S = {12, 22, ... , 1002}.\nS has 100891344545564193334812497256 50-element subsets.\n\nDetermine the sum of all integers which are the sum of exactly one of the 50-element subsets of S, i.e. find sum(U(S,50)).\n";
const index: number = 201;
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

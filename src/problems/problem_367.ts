import { Problem, Strategy } from "../Problem";
const title: string = "Bozo sort";
const description: string = "\n\nBozo sort, not to be confused with the slightly less efficient bogo sort, consists out of checking if the input sequence is sorted and if not swapping randomly two elements. This is repeated until eventually the sequence is sorted.\n\n\nIf we consider all permutations of the first 4 natural numbers as input the expectation value of the number of swaps, averaged over all 4! input sequences is 24.75.\nThe already sorted sequence takes 0 steps. \n\n\nIn this problem we consider the following variant on bozo sort.\nIf the sequence is not in order we pick three elements at random and shuffle these three elements randomly.\nAll 3!=6 permutations of those three elements are equally likely. \nThe already sorted sequence will take 0 steps.\nIf we consider all permutations of the first 4 natural numbers as input the expectation value of the number of shuffles, averaged over all 4! input sequences is 27.5. \nConsider as input sequences the permutations of the first 11 natural numbers.\nAveraged over all 11! input sequences, what is the expected number of shuffles this sorting algorithm will perform?\n\n\nGive your answer rounded to the nearest integer.\n\n";
const index: number = 367;
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

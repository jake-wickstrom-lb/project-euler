import { Problem, Strategy } from "../Problem";
const title: string = "Generalised Hamming Numbers";
const description: string = "\nA Hamming number is a positive number which has no prime factor larger than 5.\nSo the first few Hamming numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15.\nThere are 1105 Hamming numbers not exceeding 108.\n\nWe will call a positive number a generalised Hamming number of type n, if it has no prime factor larger than n.\nHence the Hamming numbers are the generalised Hamming numbers of type 5.\n\nHow many generalised Hamming numbers of type 100 are there which don't exceed 109?\n";
const index: number = 204;
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

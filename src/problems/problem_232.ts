import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "The Race";
const description: string = "\nTwo players share an unbiased coin and take it in turns to play \"The Race\". On Player 1's turn, he tosses the coin once: if it comes up Heads, he scores one point; if it comes up Tails, he scores nothing. On Player 2's turn, she chooses a positive integer T and tosses the coin T times: if it comes up all Heads, she scores 2T-1 points; otherwise, she scores nothing. Player 1 goes first. The winner is the first to 100 or more points.\n\nOn each turn Player 2 selects the number, T, of coin tosses that maximises the probability of her winning.\n\nWhat is the probability that Player 2 wins?\n\nGive your answer rounded to eight decimal places in the form 0.abcdefgh .\n";
const index: number = 232;
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

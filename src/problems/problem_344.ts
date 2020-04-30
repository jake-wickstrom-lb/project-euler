import { Problem, Strategy } from "../Problem";
const title: string = "Silver dollar game";
const description: string = "\nOne variant of N.G. de Bruijn's silver dollar game can be described as follows:\n\nOn a strip of squares a number of coins are placed, at most one coin per square. Only one coin, called the silver dollar, has any value. Two players take turns making moves. At each turn a player must make either a regular or a special move.\n\nA regular move consists of selecting one coin and moving it one or more squares to the left. The coin cannot move out of the strip or jump on or over another coin.\n\nAlternatively, the player can choose to make the special move of pocketing the leftmost coin rather than making a regular move. If no regular moves are possible, the player is forced to pocket the leftmost coin.\n\nThe winner is the player who pockets the silver dollar.\n\n\n\n\n\nA winning configuration is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.\n\nLet W(n,c) be the number of winning configurations for a strip of n squares, c worthless coins and one silver dollar.\n\nYou are given that W(10,2) = 324 and W(100,10) = 1514704946113500.\n\nFind W(1 000 000, 100) modulo the semiprime 1000 036 000 099 (= 1 000 003 \u00B7 1 000 033).\n\n\n";
const index: number = 344;
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

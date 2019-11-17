import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Proportionate Nim";
const description: string = "\nTwo players play a game with two piles of stones.\nOn his or her turn, a player chooses a positive integer $n$ and does one of the following:\n\nremoves $n$ stones from one pile;\nremoves $n$ stones from both piles; or\nremoves $n$ stones from one pile and $2n$ stones from the other pile.\n\nThe player who removes the last stone wins.\n\nWe denote by $(n,m)$ the position in which the piles have $n$ and $m$ stones remaining. Note that $(n,m)$ is considered to be the same position as $(m,n)$.\n\nThen, for example, if the position is $(2,6)$, the next player may reach the following positions:\n$(0,2)$, $(0,4)$, $(0,5)$, $(0,6)$, $(1,2)$, $(1,4)$, $(1,5)$, $(1,6)$, $(2,2)$, $(2,3)$, $(2,4)$, $(2,5)$\n\nA position is a losing position if the player to move next cannot force a win. For example, $(1,3)$, $(2,6)$, $(4,5)$ are the first few losing positions.\n\nLet $f(M)$ be the sum of $n+m$ for all losing positions $(n,m)$ with $n\\le m$ and $n+m \\le M$. For example, $f(10) = 21$, by considering the losing positions $(1,3)$, $(2,6)$, $(4,5)$.\nYou are given that $f(100) = 1164$ and $f(1000) = 117002$.\n\nFind $f(10^7)$.\n";
const index: number = 665;
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

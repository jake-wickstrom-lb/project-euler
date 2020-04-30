import { Problem, Strategy } from "../Problem";
const title: string = "Cross flips";
const description: string = "\nN\u00D7N disks are placed on a square game board. Each disk has a black side and white side.\n\nAt each turn, you may choose a disk and flip all the disks in the same row and the same column as this disk: thus 2\u00D7N-1 disks are flipped. The game ends when all disks show their white side. The following example shows a game on a 5\u00D75 board.\n\n\n\nIt can be proven that 3 is the minimal number of turns to finish this game.\n\nThe bottom left disk on the N\u00D7N board has coordinates (0,0);\nthe bottom right disk has coordinates (N-1,0) and the top left disk has coordinates (0,N-1). \n\nLet CN be the following configuration of a board with N\u00D7N disks:\nA disk at (x,y) satisfying $N - 1 \\le \\sqrt{x^2 + y^2} \\lt N$, shows its black side; otherwise, it shows its white side. C5 is shown above.\n\nLet T(N) be the minimal number of turns to finish a game starting from configuration CN or 0 if configuration CN is unsolvable.\nWe have shown that T(5)=3. You are also given that T(10)=29 and T(1 000)=395253.\n\nFind $\\sum \\limits_{i = 3}^{31} {T(2^i - i)}$.\n\n";
const index: number = 331;
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

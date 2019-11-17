import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Pencils of rays";
const description: string = "\n\nLet $R(M, N)$ be the number of lattice points $(x, y)$ which satisfy $M\\!\\lt\\!x\\!\\le\\!N$, $M\\!\\lt\\!y\\!\\le\\!N$ and $\\large\\left\\lfloor\\!\\frac{y^2}{x^2}\\!\\right\\rfloor$ is odd.\nWe can verify that $R(0, 100) = 3019$ and $R(100, 10000) = 29750422$.\nFind $R(2\\cdot10^6, 10^9)$.\n\n\n\nNote: $\\lfloor x\\rfloor$ represents the floor function.\n\n";
const index: number = 372;
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

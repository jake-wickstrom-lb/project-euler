import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Cuboid layers";
const description: string = "\nThe minimum number of cubes to cover every visible face on a cuboid measuring 3\u00A0x\u00A02\u00A0x\u00A01 is twenty-two.\n\n\nIf we then add a second layer to this solid it would require forty-six cubes to cover every visible face, the third layer would require seventy-eight cubes, and the fourth layer would require one-hundred and eighteen cubes to cover every visible face.\nHowever, the first layer on a cuboid measuring 5\u00A0x\u00A01\u00A0x\u00A01 also requires twenty-two cubes; similarly the first layer on cuboids measuring 5\u00A0x\u00A03\u00A0x\u00A01, 7\u00A0x\u00A02\u00A0x\u00A01, and 11\u00A0x\u00A01\u00A0x\u00A01 all contain forty-six cubes.\nWe shall define C(n) to represent the number of cuboids that contain n cubes in one of its layers. So C(22) = 2, C(46) = 4, C(78) = 5, and C(118) = 8.\nIt turns out that 154 is the least value of n for which C(n) = 10.\nFind the least value of n for which C(n) = 1000.\n\n";
const index: number = 126;
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

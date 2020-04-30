import { Problem, Strategy } from "../Problem";
const title: string = "Convergents of e";
const description: string = "\nThe square root of 2 can be written as an infinite continued fraction.\n$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$\nThe infinite continued fraction can be written, $\\sqrt{2} = [1; (2)]$, $(2)$ indicates that 2 repeats ad infinitum. In a similar way, $\\sqrt{23} = [4; (1, 3, 1, 8)]$.\nIt turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for $\\sqrt{2}$.\n$\n1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\\n1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\\n1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\\n1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}\n$\nHence the sequence of the first ten convergents for $\\sqrt{2}$ are:\n$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$\nWhat is most surprising is that the important mathematical constant,$e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$.\nThe first ten terms in the sequence of convergents for e are:\n$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$\nThe sum of digits in the numerator of the 10th convergent is $1 + 4 + 5 + 7 = 17$.\nFind the sum of digits in the numerator of the 100th convergent of the continued fraction for $e$.\n";
const index: number = 65;
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

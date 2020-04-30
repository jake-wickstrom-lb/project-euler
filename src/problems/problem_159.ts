import { Problem, Strategy } from "../Problem";
const title: string = "Digital root sums of factorisations";
const description: string = "\nA composite number can be factored many different ways.  \nFor instance, not including multiplication by one, 24 can be factored in 7 distinct ways:\n\n24 = 2x2x2x3\n24 = 2x3x4\n24 = 2x2x6\n24 = 4x6\n24 = 3x8\n24 = 2x12\n24 = 24\n\nRecall that the digital root of a number, in base 10, is found by adding together the digits of that number, \nand repeating that process until a number is arrived at that is less than 10.  \nThus the digital root of 467 is 8.\nWe shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number.\n The chart below demonstrates all of the DRS values for 24.\nFactorisationDigital Root Sum2x2x2x3\n92x3x4\n92x2x6\n104x6\n103x8\n112x12\n524\n6The maximum Digital Root Sum  of 24 is 11.\nThe function mdrs(n) gives the maximum Digital Root Sum of n. So  mdrs(24)=11.\nFind \u2211\u2009mdrs(n) for 1 < n < 1,000,000.\n";
const index: number = 159;
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

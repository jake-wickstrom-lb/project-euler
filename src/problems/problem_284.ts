import { Problem, Strategy } from "../Problem";
const title: string = "Steady Squares";
const description: string = "\nThe 3-digit number 376 in the decimal numbering system is an example of numbers with the special property that its square ends with the same digits: 3762 = 141376. Let's call a number with this property a steady square.\n\nSteady squares can also be observed in other numbering systems. In the base 14 numbering system, the 3-digit number c37 is also a steady square: c372 = aa0c37, and the sum of its digits is c+3+7=18 in the same numbering system. The letters a, b, c and d are used for the 10, 11, 12 and 13 digits respectively, in a manner similar to the hexadecimal numbering system.\n\nFor 1 \u2264 n \u2264 9, the sum of the digits of all the n-digit steady squares in the base 14 numbering system is 2d8 (582 decimal). Steady squares with leading 0's are not allowed.\n\nFind the sum of the digits of all the n-digit steady squares in the base 14 numbering system for\n1 \u2264 n \u2264 10000 (decimal) and give your answer in the base 14 system using lower case letters where necessary.\n";
const index: number = 284;
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

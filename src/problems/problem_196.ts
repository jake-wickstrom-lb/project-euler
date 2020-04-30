import { Problem, Strategy } from "../Problem";
const title: string = "Prime triplets";
const description: string = "\nBuild a triangle from all positive integers in the following way:\n\n\u00A01\n\u00A02\u00A0 3\n\u00A04\u00A0\u00A05\u00A0\u00A06\n\u00A07\u00A0\u00A08\u00A0\u00A09 1011 12 13 14 15\n16 17 18 19 20 21\n22 23 24 25 26 27 2829 30 31 32 33 34 35 3637 38 39 40 41 42 43 44 45\n46 47 48 49 50 51 52 53 54 55\n56 57 58 59 60 61 62 63 64 65 66\n. . .\n\nEach positive integer has up to eight neighbours in the triangle.\n\nA set of three primes is called a prime triplet if one of the three primes has the other two as neighbours in the triangle.\n\nFor example, in the second row, the prime numbers 2 and 3 are elements of some prime triplet.\n\nIf row 8 is considered, it contains two primes which are elements of some prime triplet, i.e. 29 and 31.\nIf row 9 is considered, it contains only one prime which is an element of some prime triplet: 37.\n\nDefine S(n) as the sum of the primes in row n which are elements of any prime triplet.\nThen S(8)=60 and S(9)=37.\n\nYou are given that S(10000)=950007619.\n\nFind \u00A0S(5678027) + S(7208785).\n\n";
const index: number = 196;
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

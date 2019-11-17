import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Permutation of 3-smooth numbers";
const description: string = "\n\nA 3-smooth number is an integer which has no prime factor larger than 3. For an integer N, we define S(N) as the set of 3-smooth numbers less than or equal to N . For example, S(20) = { 1, 2, 3, 4, 6, 8, 9, 12, 16, 18 }.\n\n\nWe define F(N) as the number of permutations of S(N) in which each element comes after all of its proper divisors.\n\n\nThis is one of the possible permutations for N = 20.\n- 1, 2, 4, 3, 9, 8, 16, 6, 18, 12.\nThis is not a valid permutation because 12 comes before its divisor 6.\n- 1, 2, 4, 3, 9, 8, 12, 16, 6, 18.\n\n\nWe can verify that F(6) = 5, F(8) = 9, F(20) = 450 and F(1000) \u2248 8.8521816557e21.\nFind F(1018). Give as your answer its scientific notation rounded to ten digits after the decimal point.\nWhen giving your answer, use a lowercase e to separate mantissa and exponent. E.g. if the answer is 112,233,445,566,778,899 then the answer format would be 1.1223344557e17.\n\n";
const index: number = 462;
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

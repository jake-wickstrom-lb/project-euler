import { Problem, Strategy } from "../Problem";
const title: string = "Special subset sums: testing";
const description: string = "\nLet S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:\nS(B) \u2260 S(C); that is, sums of subsets cannot be equal.\nIf B contains more elements than C then S(B) > S(C).\nFor example, {81, 88, 75, 42, 87, 84, 86, 65} is not a special sum set because 65 + 87 + 88 = 75 + 81 + 84, whereas {157, 150, 164, 119, 79, 159, 161, 139, 158} satisfies both rules for all possible subset pair combinations and S(A) = 1286.\nUsing sets.txt (right click and \"Save Link/Target As...\"), a 4K text file with one-hundred sets containing seven to twelve elements (the two examples given above are the first two sets in the file), identify all the special sum sets, A1, A2, ..., Ak, and find the value of S(A1) + S(A2) + ... + S(Ak).\nNOTE: This problem is related to Problem 103 and Problem 106.\n";
const index: number = 105;
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

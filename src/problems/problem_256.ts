import { Problem, Strategy } from "../Problem";
const title: string = "Tatami-Free Rooms";
const description: string = "\n\nTatami are rectangular mats, used to completely cover the floor of a room, without overlap.\n\nAssuming that the only type of available tatami has dimensions 1\u00D72, there are obviously some limitations for the shape and size of the rooms that can be covered.\n\nFor this problem, we consider only rectangular rooms with integer dimensions a, b and even size s = a\u00B7b.\nWe use the term 'size' to denote the floor surface area of the room, and \u2014 without loss of generality \u2014 we add the condition a \u2264 b.\n\nThere is one rule to follow when laying out tatami: there must be no points where corners of four different mats meet.\nFor example, consider the two arrangements below for a 4\u00D74 room:\n\n\n\nThe arrangement on the left is acceptable, whereas the one on the right is not: a red \"X\" in the middle, marks the point where four tatami meet.\n\nBecause of this rule, certain even-sized rooms cannot be covered with tatami: we call them tatami-free rooms.\nFurther, we define T(s) as the number of tatami-free rooms of size s.\n\nThe smallest tatami-free room has size s = 70 and dimensions 7\u00D710.\nAll the other rooms of size s = 70 can be covered with tatami; they are: 1\u00D770, 2\u00D735 and 5\u00D714.\nHence, T(70) = 1.\n\nSimilarly, we can verify that T(1320) = 5 because there are exactly 5 tatami-free rooms of size s = 1320:\n20\u00D766, 22\u00D760, 24\u00D755, 30\u00D744 and 33\u00D740.\nIn fact, s = 1320 is the smallest room-size s for which T(s) = 5.\n\nFind the smallest room-size s for which T(s) = 200.\n\n\n";
const index: number = 256;
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

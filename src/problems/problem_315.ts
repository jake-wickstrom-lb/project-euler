import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Digital root clocks";
const description: string = "\n\n\nSam and Max are asked to transform two digital clocks into two \"digital root\" clocks.\nA digital root clock is a digital clock that calculates digital roots step by step.\n\nWhen a clock is fed a number, it will show it and then it will start the calculation, showing all the intermediate values until it gets to the result.\nFor example, if the clock is fed the number 137, it will show: \"137\" \u2192 \"11\" \u2192 \"2\" and then it will go black, waiting for the next number.\n\nEvery digital number consists of some light segments: three horizontal (top, middle, bottom) and four vertical (top-left, top-right, bottom-left, bottom-right).\nNumber \"1\" is made of vertical top-right and bottom-right, number \"4\" is made by middle horizontal and vertical top-left, top-right and bottom-right. Number \"8\" lights them all.\n\nThe clocks consume energy only when segments are turned on/off.\nTo turn on a \"2\" will cost 5 transitions, while a \"7\" will cost only 4 transitions.\n\nSam and Max built two different clocks.\n\nSam's clock is fed e.g. number 137: the clock shows \"137\", then the panel is turned off, then the next number (\"11\") is turned on, then the panel is turned off again and finally the last number (\"2\") is turned on and, after some time, off.\nFor the example, with number 137, Sam's clock requires:\"137\"\n:\n(2 + 5 + 4) \u00D7 2 = 22 transitions (\"137\" on/off).\n\"11\"\n:\n(2 + 2) \u00D7 2 = 8 transitions (\"11\" on/off).\n\"2\"\n:\n(5) \u00D7 2 = 10 transitions (\"2\" on/off).\n\nFor a grand total of 40 transitions.\n\nMax's clock works differently. Instead of turning off the whole panel, it is smart enough to turn off only those segments that won't be needed for the next number.\nFor number 137, Max's clock requires:\"137\"\n:\n2 + 5 + 4 = 11 transitions (\"137\" on)\n7 transitions (to turn off the segments that are not needed for number \"11\").\n\"11\"\n:\n0 transitions (number \"11\" is already turned on correctly)\n3 transitions (to turn off the first \"1\" and the bottom part of the second \"1\"; \nthe top part is common with number \"2\").\n\"2\"\n:\n4 transitions (to turn on the remaining segments in order to get a \"2\")\n5 transitions (to turn off number \"2\").\n\nFor a grand total of 30 transitions.\n\nOf course, Max's clock consumes less power than Sam's one.\nThe two clocks are fed all the prime numbers between A = 107 and B = 2\u00D7107. \nFind the difference between the total number of transitions needed by Sam's clock and that needed by Max's one.\n\n";
const index: number = 315;
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

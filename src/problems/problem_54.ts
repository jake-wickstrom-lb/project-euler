import { Problem, Strategy } from "../Problem";
const title: string = "Poker hands";
const description: string = "\nIn the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:\nHigh Card: Highest value card.\nOne Pair: Two cards of the same value.\nTwo Pairs: Two different pairs.\nThree of a Kind: Three cards of the same value.\nStraight: All cards are consecutive values.\nFlush: All cards of the same suit.\nFull House: Three of a kind and a pair.\nFour of a Kind: Four cards of the same value.\nStraight Flush: All cards are consecutive values of same suit.\nRoyal Flush: Ten, Jack, Queen, King, Ace, in same suit.\nThe cards are valued in the order:2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.\nIf two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.\nConsider the following five hands dealt to two players:\n\nHand\u00A0Player 1\u00A0Player 2\u00A0Winner\n1\u00A05H 5C 6S 7S KDPair of Fives\u00A02C 3S 8S 8D TDPair of Eights\u00A0Player 2\n2\u00A05D 8C 9S JS ACHighest card Ace\u00A02C 5C 7D 8S QHHighest card Queen\u00A0Player 1\n3\u00A02D 9C AS AH ACThree Aces\u00A03D 6D 7D TD QDFlush  with Diamonds\u00A0Player 2\n4\u00A04D 6S 9H QH QCPair of QueensHighest card Nine\u00A03D 6D 7H QD QSPair of QueensHighest card Seven\u00A0Player 1\n5\u00A02H 2D 4C 4D 4SFull HouseWith Three Fours\u00A03C 3D 3S 9S 9DFull Housewith Three Threes\u00A0Player 1\n\nThe file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.\nHow many hands does Player 1 win?\n";
const index: number = 54;
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

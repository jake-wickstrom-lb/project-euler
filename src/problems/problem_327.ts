import { Problem, Strategy } from "../Problem";
const title: string = "Rooms of Doom";
const description: string = "\nA series of three rooms are connected to each other by automatic doors.\n\n\n\nEach door is operated by a security card. Once you enter a room the door automatically closes and that security card cannot be used again. A machine at the start will dispense an unlimited number of cards, but each room (including the starting room) contains scanners and if they detect that you are holding more than three security cards or if they detect an unattended security card on the floor, then all the doors will become permanently locked. However, each room contains a box where you may safely store any number of security cards for use at a later stage.\n\nIf you simply tried to travel through the rooms one at a time then as you entered room 3 you would have used all three cards and would be trapped in that room forever!\n\nHowever, if you make use of the storage boxes, then escape is possible. For example, you could enter room 1 using your first card, place one card in the storage box, and use your third card to exit the room back to the start. Then after collecting three more cards from the dispensing machine you could use one to enter room 1 and collect the card you placed in the box a moment ago. You now have three cards again and will be able to travel through the remaining three doors. This method allows you to travel through all three rooms using six security cards in total.\n\nIt is possible to travel through six rooms using a total of 123 security cards while carrying a maximum of 3 cards.\n\nLet C be the maximum number of cards which can be carried at any time.\nLet R be the number of rooms to travel through.\nLet M(C,R) be the minimum number of cards required from the dispensing machine to travel through R rooms carrying up to a maximum of C cards at any time.\n\nFor example, M(3,6)=123 and M(4,6)=23.And, \u2211\u2009M(C,6)=146 for 3 \u2264 C \u2264 4.\n\n\nYou are given that \u2211\u2009M(C,10)=10382 for 3 \u2264 C \u2264 10.\n\nFind \u2211\u2009M(C,30) for 3 \u2264 C \u2264 40.\n\n\n";
const index: number = 327;
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

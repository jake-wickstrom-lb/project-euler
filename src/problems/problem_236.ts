import { Problem, Strategy } from "../Problem";
const title: string = "Luxury Hampers";
const description: string = "\nSuppliers 'A' and 'B' provided the following numbers of products for the luxury hamper market:\n\nProduct'A''B'Beluga Caviar5248640Christmas Cake13121888Gammon Joint26243776Vintage Port57603776Champagne Truffles39365664\n\nAlthough the suppliers try very hard to ship their goods in perfect condition, there is inevitably some spoilage - i.e. products gone bad.\n\nThe suppliers compare their performance using two types of statistic:The five per-product spoilage rates for each supplier are equal to the number of products gone bad divided by the number of products supplied, for each of the five products in turn.\n  The overall spoilage rate for each supplier is equal to the total number of products gone bad divided by the total number of products provided by that supplier.To their surprise, the suppliers found that each of the five per-product spoilage rates was worse (higher) for 'B' than for 'A' by the same factor (ratio of spoilage rates), m>1; and yet, paradoxically, the overall spoilage rate was worse for 'A' than for 'B', also by a factor of m.\n\nThere are thirty-five m>1 for which this surprising result could have occurred, the smallest of which is 1476/1475.\n\nWhat's the largest possible value of m?\nGive your answer as a fraction reduced to its lowest terms, in the form u/v.\n";
const index: number = 236;
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

import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Pizza Toppings";
const description: string = "\nYou are given a pizza (perfect circle) that has been cut into m\u00B7n equal pieces and you want to have exactly one topping on each slice.\n\nLet f(m,n) denote the number of ways you can have toppings on the pizza with m different toppings (m\u2009\u2265\u20092), using each topping on exactly n slices (n\u2009\u2265\u20091). Reflections are considered distinct, rotations are not. \n\nThus, for instance, f(2,1)\u2009=\u20091, f(2,2)\u2009=\u2009f(3,1)\u2009=\u20092 and f(3,2)\u2009=\u200916. f(3,2) is shown below:\n\n\n\nFind the sum of all f(m,n) such that f(m,n)\u2009\u2264\u20091015.\n";
const index: number = 281;
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

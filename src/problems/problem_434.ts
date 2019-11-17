import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Rigid graphs";
const description: string = "\nRecall that a graph is a collection of vertices and edges connecting the vertices, and that two vertices connected by an edge are called adjacent.\nGraphs can be embedded in Euclidean space by associating each vertex with a point in the Euclidean space.\nA flexible graph is an embedding of a graph where it is possible to move one or more vertices continuously so that the distance between at least two nonadjacent vertices is altered while the distances between each pair of adjacent vertices is kept constant.\nA rigid graph is an embedding of a graph which is not flexible.\nInformally, a graph is rigid if by replacing the vertices with fully rotating hinges and the edges with rods that are unbending and inelastic, no parts of the graph can be moved independently from the rest of the graph.\n\nThe grid graphs embedded in the Euclidean plane are not rigid, as the following animation demonstrates:\n\nHowever, one can make them rigid by adding diagonal edges to the cells. For example, for the 2x3 grid graph, there are 19 ways to make the graph rigid:\n\nNote that for the purposes of this problem, we do not consider changing the orientation of a diagonal edge or adding both diagonal edges to a cell as a different way of making a grid graph rigid.\n\nLet R(m,n) be the number of ways to make the m \u00D7 n grid graph rigid. \nE.g. R(2,3) = 19 and R(5,5) = 23679901\n\nDefine S(N) as \u2211\u2009R(i,j) for 1 \u2264 i, j \u2264 N.\nE.g. S(5) = 25021721.\nFind S(100), give your answer modulo 1000000033.\n\n";
const index: number = 434;
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

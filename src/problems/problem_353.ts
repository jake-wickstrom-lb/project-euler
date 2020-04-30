import { Problem, Strategy } from "../Problem";
const title: string = "Risky moon";
const description: string = "\n\nA moon could be described by the sphere $C(r)$ with centre $(0,0,0)$ and radius $r$. \n\n\n\nThere are stations on the moon at the points on the surface of $C(r)$ with integer coordinates. The station at $(0,0,r)$ is called North Pole station, the station at $(0,0,-r)$ is called South Pole station.\n\n\n\nAll stations are connected with each other via the shortest road on the great arc through the stations. A journey between two stations is risky. If d is the length of the road between two stations, $\\left(\\frac{d}{\\pi r}\\right)^2$ is a measure for the risk of the journey (let us call it the risk of the road). If the journey includes more than two stations, the risk of the journey is the sum of risks of the used roads.\n\n\n\nA direct journey from  the North Pole station to the South Pole station has the length $\\pi r$ and risk 1. The journey from the North Pole station to the South Pole station via $(0,r,0)$ has the same length, but a smaller risk:\n\\[\n\\left(\\frac{\\frac{1}{2}\\pi r}{\\pi r}\\right)^2+\\left(\\frac{\\frac{1}{2}\\pi r}{\\pi r}\\right)^2=0.5\n\\]\n\n\nThe minimal risk of a journey from the North Pole station to the South Pole station on $C(r)$ is $M(r)$.\n\n\n\nYou are given that $M(7)=0.1784943998$  rounded to 10 digits behind the decimal point. \n\n\n\nFind $\\displaystyle{\\sum_{n=1}^{15}M(2^n-1)}$.\n\n\n\nGive your answer rounded to 10 digits behind the decimal point in the form a.bcdefghijk.\n\n\n\n";
const index: number = 353;
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

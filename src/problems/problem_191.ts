import { Problem, Strategy } from "../Problem";
const title: string = "Prize Strings";
const description: string = "\nA particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.\n\nDuring an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent).\n\nAlthough there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:\n\nOOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA\nOAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO\nAOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL\nAALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA\nLAOO LAOA LAAO\n\nHow many \"prize\" strings exist over a 30-day period?\n";
const index: number = 191;
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

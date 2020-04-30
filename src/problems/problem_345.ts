import { Problem, Strategy } from "../Problem";
const title: string = "Matrix Sum";
const description: string = "\nWe define the Matrix Sum of a matrix as the maximum sum of matrix elements with each element being the only one in his row and column. For example, the Matrix Sum of the matrix below equals 3315 ( = 863 + 383 + 343 + 959 + 767):\n\n\n\u00A0\u00A07 \u00A053 183 439 863\n497 383 563 \u00A079 973\n287 \u00A063 343 169 583\n627 343 773 959 943767 473 103 699 303\n\n\nFind the Matrix Sum of:\n\n\u00A0\u00A07 \u00A053 183 439 863 497 383 563 \u00A079 973 287 \u00A063 343 169 583\n627 343 773 959 943 767 473 103 699 303 957 703 583 639 913\n447 283 463 \u00A029 \u00A023 487 463 993 119 883 327 493 423 159 743\n217 623 \u00A0\u00A03 399 853 407 103 983 \u00A089 463 290 516 212 462 350\n960 376 682 962 300 780 486 502 912 800 250 346 172 812 350\n870 456 192 162 593 473 915 \u00A045 989 873 823 965 425 329 803\n973 965 905 919 133 673 665 235 509 613 673 815 165 992 326\n322 148 972 962 286 255 941 541 265 323 925 281 601 \u00A095 973\n445 721 \u00A011 525 473 \u00A065 511 164 138 672 \u00A018 428 154 448 848\n414 456 310 312 798 104 566 520 302 248 694 976 430 392 198\n184 829 373 181 631 101 969 613 840 740 778 458 284 760 390\n821 461 843 513 \u00A017 901 711 993 293 157 274 \u00A094 192 156 574\n\u00A034 124 \u00A0\u00A04 878 450 476 712 914 838 669 875 299 823 329 699\n815 559 813 459 522 788 168 586 966 232 308 833 251 631 107\n813 883 451 509 615 \u00A077 281 613 459 205 380 274 302 \u00A035 805\n";
const index: number = 345;
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

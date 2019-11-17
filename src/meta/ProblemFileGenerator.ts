import ts from 'typescript'

import { EulerProblem } from "./euler/EulerProblem";

const TEMPLATE_PATH = "./src/meta/template.ts"

/**
 * Writes problem files
 */

export class ProblemFileGenerator {
  public generate(problem: EulerProblem) {

    // create a program instance, which is a collection of source files
    // in this case we only have one source file
    var program = ts.createProgram([TEMPLATE_PATH], {});

    // get our models.ts source file AST
    const source = program.getSourceFile(TEMPLATE_PATH);

    if(!source) {
      throw new Error(`Could not find source file ${TEMPLATE_PATH}`)
    }

    var result = ts.transform(source, [this.transform(problem)])

    const printer = ts.createPrinter();

    return printer.printFile(result.transformed[0])
  }

  private transform<T extends ts.Node>(problem: EulerProblem): ts.TransformerFactory<T> {
    // helper to give us Node string type given kind
    const syntaxToKind = (kind: ts.Node["kind"]) => {
    return ts.SyntaxKind[kind];
    };

    return (context) => {
      const visit: ts.Visitor = (node) => {
        if (ts.isVariableDeclaration(node)) {
          if(node.initializer) {
            switch(syntaxToKind(node.initializer.kind)) {
              case 'StringLiteral':
                var nodeCast = node.name as unknown as {escapedText: string}
                switch(nodeCast.escapedText) {
                  case "title":
                    return ts.createVariableDeclaration(node.name, node.type, ts.createStringLiteral(problem.title))
                  case "description":
                    return ts.createVariableDeclaration(node.name, node.type, ts.createStringLiteral(problem.description))
                }
              case 'PrefixUnaryExpression':
                var nodeCast = node.name as unknown as {escapedText: string}
                switch(nodeCast.escapedText) {
                  case "index":
                    return ts.createVariableDeclaration(node.name, node.type, ts.createNumericLiteral(problem.index.toString()))
                }

            }
          }
        }
        return ts.visitEachChild(node, (child) => visit(child), context);
      };

      return (node) => ts.visitNode(node, visit);
    };
  }
}

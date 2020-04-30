#!/usr/bin/env node

import { program } from "commander"

import ProblemManager from "./ProblemManager"

program
  .version("0.0.1")
  .command("run <index> [args...]")
  .action(function(index, args) {

    let solution = ProblemManager.run(index, ...args)
    console.log(solution)
  })

program.parse(process.argv)

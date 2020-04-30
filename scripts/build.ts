import fs from 'fs'
import path from 'path';


import { EulerSite } from "../src/meta/euler/EulerSite"
import { ProblemFileGenerator } from '../src/meta/ProblemFileGenerator';

/**
 * Crawls Project Euler website and creates files, endpoint links, etc in this project to support
 * solutions
 */

 var generator = new ProblemFileGenerator()

 let site = new EulerSite()

 site.getHighestArchivedProblemNumber().then(maxProblem => {
   for(let i = 1; i <= maxProblem; i++){
     if(!fs.existsSync(path.join(__dirname, `../src/problems/problem_${i}.ts`))) {
       site.getProblem(i).then(problem => {
         fs.writeFile(path.join(__dirname, `../src/problems/problem_${i}.ts`),
         generator.generate(problem),
         function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
          })
       })
     }
   }
 })

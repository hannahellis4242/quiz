import { Command } from "commander";
import openQuiz from "./Quiz/openQuiz";
import pickCatagory from "./Quiz/pickCatagory";

const program = new Command("quiz")
  .description("small command line quiz tool")
  .version("0.0.1")
  .argument("<input>", "Input file for quiz questions")
  .action((input) => {
    openQuiz(input)
      .then((quiz) => {
        console.log("Welcome to Quiz!");
        return pickCatagory(quiz);
      })
      .catch((reason) => console.error(reason));
  });

program.parse();

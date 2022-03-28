import { Command } from "commander";
import openQuiz from "./Quiz/openQuiz";
import pickCatagory from "./Quiz/pickCatagory";
import pickQuestions from "./Quiz/pickQuestions";

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
      .then((catagory) => pickQuestions(catagory))
      .then((quizToRun) => console.log(JSON.stringify(quizToRun)))
      .catch((reason) => console.error(reason));
  });

program.parse();

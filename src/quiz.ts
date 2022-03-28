import { Command } from "commander";
import openQuiz from "./Quiz/openQuiz";
import pickCatagory from "./Quiz/pickCatagory";
import pickQuestions from "./Quiz/pickQuestions";
import runQuiz from "./Quiz/runQuiz";
import Score from "./Quiz/Score";

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
      .then((quizToRun) => runQuiz(quizToRun.name, quizToRun.questions))
      .then((score) => console.log(score.show()))
      .catch((reason) => console.error(reason));
  });

program.parse();

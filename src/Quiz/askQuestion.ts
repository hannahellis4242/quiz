import inquirer from "inquirer";
import { Question } from "./Quiz";
import { QuizResponse } from "./Score";

const askQuestion = async (
  question: Question,
  responses: QuizResponse[]
): Promise<QuizResponse[]> => {
  return inquirer
    .prompt({
      type: "list",
      name: "response",
      message: question.text,
      choices: question.answers.map(({ text }) => text),
    })
    .then(({ response }) => {
      return new Promise((resolve, reject) => {
        const answer = question.answers.find(({ text }) => text === response);
        if (answer) {
          responses.push(new QuizResponse(question, answer));
          resolve(responses);
        } else {
          reject(
            new Error(
              `${response} is not an answer to the question\n${
                question.text
              }\nWith valid ansewers being ${question.answers
                .map(({ text }) => text)
                .join(", ")}`
            )
          );
        }
      });
    });
};

export default askQuestion;

import { Question } from "./Quiz";
import Score, { Response } from "./Score";

const runQuiz = (catagoryName: string, questions: Question[]): Score => {
  const start = new Date();
  const responses: Response[] = []; //TODO figure out how to populate this
  const stop = new Date();
  return new Score(catagoryName, start, stop, responses);
};

export default runQuiz;

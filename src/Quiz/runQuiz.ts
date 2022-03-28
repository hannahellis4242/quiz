import askQuestion from "./askQuestion";
import { Question } from "./Quiz";
import Score, { QuizResponse } from "./Score";

const runQuiz = async (
  catagoryName: string,
  questions: Question[]
): Promise<Score> => {
  const start = new Date();
  const responses = questions.reduce<QuizResponse[]>(async (acc, x) => {
    const res = await askQuestion(x);
    acc.push(res);
    return acc;
  }, []);
  const stop = new Date();
  return new Score(catagoryName, start, stop, responses);
};

export default runQuiz;

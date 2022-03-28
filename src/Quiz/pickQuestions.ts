import { reservoirSample } from "pandemonium";
import { Catagory, Question } from "./Quiz";

const pickQuestions = (
  catagory: Catagory,
  maxNumberToPick: number = 20
): { name: string; questions: Question[] } => {
  if (catagory.questions.length <= maxNumberToPick) {
    return { name: catagory.name, questions: catagory.questions };
  } else {
    return {
      name: catagory.name,
      questions: reservoirSample(maxNumberToPick, catagory.questions),
    };
  }
};

export default pickQuestions;

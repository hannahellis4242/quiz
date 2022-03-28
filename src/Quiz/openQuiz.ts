import Quiz from "./Quiz";
import { PathOrFileDescriptor, readFile } from "fs";
import { promisify } from "util";
import quizSchema from "./quizSchema";
import { Validator } from "jsonschema";

const validate = async (instance: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const result = new Validator().validate(instance, quizSchema);
    if (result.valid) {
      resolve(instance);
    } else {
      reject(result.errors);
    }
  });
};

const openQuiz = async (p: PathOrFileDescriptor): Promise<Quiz> => {
  return promisify(readFile)(p)
    .then((x) => x.toString())
    .then(validate)
    .then((x) => JSON.parse(x));
};

export default openQuiz;

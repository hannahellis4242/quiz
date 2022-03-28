import inquirer from "inquirer";
import Quiz, { Catagory } from "./Quiz";

const getCatagory = async (
  catagories: Catagory[],
  catagoryName: string
): Promise<Catagory> => {
  return new Promise((resolve, reject) => {
    const catagory = catagories.find(({ name }) => name === catagoryName);
    if (catagory) {
      resolve(catagory);
    } else {
      reject(new Error(`catagory ${catagoryName} does not exist!!!`));
    }
  });
};

const pickCatagory = async (quiz: Quiz): Promise<Catagory> => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "catagory",
        message: "Please select a catagory",
        choices: quiz.catagories.map(({ name }) => name),
      },
    ])
    .then((answers) => {
      console.info("selected catagory:", answers.catagory);
      return getCatagory(quiz.catagories, answers.catagory);
    });
};

export default pickCatagory;

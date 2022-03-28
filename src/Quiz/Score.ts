import { Catagory, Question, Answer } from "./Quiz";
export class Response {
  correct: boolean;
  constructor(public question: Question, public selected: Answer) {
    this.correct = selected.correct ? selected.correct : false;
  }
}

class Result {
  constructor(
    public numberOfCorrectAnswers: number,
    public numberOfQuestionsAsked: number
  ) {}
  percentage(): number {
    return (this.numberOfCorrectAnswers * 100) / this.numberOfQuestionsAsked;
  }
}

export default class Score {
  constructor(
    public catagory: Catagory,
    public start: Date,
    public end: Date,
    public givenAnswers: Response[]
  ) {}
  show(): string {
    const result = this.givenAnswers.reduce<Result>((result, response) => {
      if (response.correct) {
        return new Result(
          result.numberOfCorrectAnswers + 1,
          result.numberOfQuestionsAsked + 1
        );
      }
      return new Result(
        result.numberOfCorrectAnswers,
        result.numberOfQuestionsAsked + 1
      );
    }, new Result(0, 0));
    const timeTaken = Math.floor(
      (this.end.getTime() - this.start.getTime()) / 1000
    );
    return `Catagory : ${this.catagory.name}\n${
      result.numberOfQuestionsAsked
    } questions completed in ${timeTaken} seconds\nNumber correct : ${
      result.numberOfCorrectAnswers
    } (${result.percentage()}%)`;
  }
}

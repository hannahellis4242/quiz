import { Catagory, Question, Answer } from "./Quiz";

export class QuizResponse {
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
    if (this.numberOfQuestionsAsked === 0) {
      return 0;
    }
    return (this.numberOfCorrectAnswers * 100) / this.numberOfQuestionsAsked;
  }
}

export default class Score {
  constructor(
    public catagoryName: string,
    public start: Date,
    public end: Date,
    public givenAnswers: QuizResponse[]
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
    return `Catagory : ${this.catagoryName}\n${
      result.numberOfQuestionsAsked
    } questions completed in ${timeTaken} seconds\nNumber correct : ${
      result.numberOfCorrectAnswers
    } (${result.percentage()}%)`;
  }
}

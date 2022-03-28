export interface Answer {
  text: string;
  correct?: boolean;
}

export interface Question {
  text: string;
  answers: Answer[];
}

export interface Catagory {
  name: string;
  questions: Question[];
}

export default interface Quiz {
  catagories: Catagory[];
}

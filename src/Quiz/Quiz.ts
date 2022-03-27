interface Answer {
  text: string;
  correct?: boolean;
}
interface Question {
  text: string;
  answers: Answer[];
}
interface Catagory {
  name: string;
  questions: Question[];
}

export default interface Quiz {
  catagories: Catagory[];
}

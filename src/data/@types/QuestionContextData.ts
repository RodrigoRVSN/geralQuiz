import { Dispatch, SetStateAction } from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";

export type QuestionContextData = {
  numberOfQuestions: Number | undefined;
  setNumberOfQuestions:
    | Dispatch<SetStateAction<number>>
  searchQuestions: (numberOfQuestions: Number) => void;
  searchResume: () => void;
  error: String;
  questions: QuestionShortInterface[];
  setQuestions: Dispatch<SetStateAction<QuestionShortInterface[]>>;
  searchOk: boolean;
  setSearchOk: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  score: any[];
  setScore:
    | Dispatch<SetStateAction<String[]>>
    | Dispatch<SetStateAction<never[]>>;
  selected: any[];
  setSelected:
    | Dispatch<SetStateAction<any[]>>
    | Dispatch<SetStateAction<never[]>>;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  correctAnswers: Number | null;
  setCorrectAnswers:
    | Dispatch<SetStateAction<number>>
  allQuestions: any[];
  setAllQuestions: Dispatch<SetStateAction<never[]>>;
  hasLocalStorage: boolean;
  setHasLocalStorage: Dispatch<SetStateAction<boolean>>;
};

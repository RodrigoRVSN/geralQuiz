import { Dispatch, SetStateAction } from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";

export type QuestionContextData = {
  numberOfQuestions: Number;
  setNumberOfQuestions: Dispatch<SetStateAction<number>>;
  numberValid: boolean;
  searchQuestions: (numberOfQuestions: Number) => void;
  searchResume: () => void;
  error: String;
  questions: QuestionShortInterface[];
  setQuestions: Dispatch<SetStateAction<QuestionShortInterface[]>>;
  searchOk: boolean;
  setSearchOk: Dispatch<SetStateAction<Boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<Boolean>>;
  score: any[];
  setScore: Dispatch<SetStateAction<String[]>>;
  selected: any[];
  setSelected: Dispatch<SetStateAction<any[]>>;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<Boolean>>;
  correctAnswers: Number;
  setCorrectAnswers: Dispatch<SetStateAction<number>>;
  allQuestions: any[];
  setAllQuestions: Dispatch<SetStateAction<any[]>>;
  hasLocalStorage: boolean;
  setHasLocalStorage: Dispatch<SetStateAction<boolean>>;
};

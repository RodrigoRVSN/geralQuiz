import React, {
  useState,
  ReactNode,
  useMemo,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

type QuestionContextData = {
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

export const QuestionContext = createContext({} as QuestionContextData);

type QuestionContextProviderProps = {
  children: ReactNode;
};

export function QuestionContextProvider({
  children,
}: QuestionContextProviderProps) {
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const numberValid = useMemo(() => {
    return ValidationService.numberOfQuestions(numberOfQuestions);
  }, [numberOfQuestions]);
  const [error, setError] = useState("");
  const [searchOk, setSearchOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([] as QuestionShortInterface[]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [score, setScore] = useState([]);
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(null);
  const [hasLocalStorage, setHasLocalStorage] = useState(false);

  async function searchQuestions(numberOfQuestions: Number) {
    setSelected([]);
    setCorrectAnswers(null);
    setScore([]);
    setSearchOk(!searchOk);
    setLoading(!loading);
    setError("");
    try {
      const { data } = await ApiService.get<{
        results: QuestionShortInterface[];
      }>("/api.php?amount=" + numberOfQuestions);
      setQuestions(data.results);
      setSearchOk(!searchOk);
      setLoading(!loading);
    } catch (error) {
      setError("Não encontrado!" + error);
      setLoading(false);
    }
  }

  function searchResume() {
    setQuestions(JSON.parse(localStorage.getItem("questionApi")));
    setSubmitted(!submitted);
    setSearchOk(!searchOk);
  }

  useEffect(() => {
    localStorage.setItem("questionApi", JSON.stringify(questions));
    localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [questions, correctAnswers, score, selected]);

  return (
    <QuestionContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        numberValid,
        searchQuestions,
        searchResume,
        error,
        questions,
        setQuestions,
        searchOk,
        setSearchOk,
        loading,
        setLoading,
        score,
        setScore,
        selected,
        setSelected,
        submitted,
        setSubmitted,
        correctAnswers,
        setCorrectAnswers,
        allQuestions,
        setAllQuestions,
        hasLocalStorage,
        setHasLocalStorage,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
export const useQuestion = () => {
  return useContext(QuestionContext);
};

import React, {
  useState,
  ReactNode,
  useMemo,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

type QuestionContextData = {
  numberOfQuestions: Number;
  setNumberOfQuestions: Dispatch<SetStateAction<number>>;
  numberValid: boolean;
  searchQuestions: (numberOfQuestions: Number) => void;
  error: String;
  questions: QuestionShortInterface[];
  setQuestions: Dispatch<SetStateAction<QuestionShortInterface[]>>;
  searchOk: boolean;
  loading: boolean;
  score: any[];
  setScore: Dispatch<SetStateAction<String[]>>;
  selected: any[];
  setSelected: Dispatch<SetStateAction<any[]>>;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
};

export const QuestionContext = createContext({} as QuestionContextData);

type QuestionContextProviderProps = {
  children: ReactNode;
};

export function QuestionContextProvider({
  children
}: QuestionContextProviderProps) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const numberValid = useMemo(() => {
    return ValidationService.numberOfQuestions(numberOfQuestions);
  }, [numberOfQuestions]);
  const [error, setError] = useState("");
  const [searchOk, setSearchOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([] as QuestionShortInterface[]);
  const [score, setScore] = useState([]);
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  async function searchQuestions(numberOfQuestions: Number) {
    setSearchOk(false);
    setLoading(true);
    setError("");
    try {
      const { data } = await ApiService.get<{
        results: QuestionShortInterface[];
      }>("/api.php?amount=" + numberOfQuestions);
      setQuestions(data.results);
      setSearchOk(true);
      setLoading(false);
    } catch (error) {
      setError("Não encontrado!" + error);
      setLoading(false);
    }
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(questions));
  }, [questions]);

  return (
    <QuestionContext.Provider
      value={{
        numberOfQuestions,
        setNumberOfQuestions,
        numberValid,
        searchQuestions,
        error,
        questions,
        setQuestions,
        searchOk,
        loading,
        score,
        setScore,
        selected,
        setSelected,
        submitted,
        setSubmitted,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

import React, {
  useState,
  ReactNode,
  useMemo,
  useEffect,
  createContext,
  useContext,
} from "react";
import { QuestionShortInterface } from "data/@types/QuestInterface";
import { QuestionContextData } from "data/@types/QuestionContextData";
import { ValidationService } from "data/services/ValidationService";
import { ApiService } from "data/services/ApiService";

export const QuestionContext = createContext({} as QuestionContextData);

/* Props do Provedor */

type QuestionContextProviderProps = {
  children: ReactNode;
};

/* Cria o contexto para comunicação entre os componentes */

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

  /* Requisição da API */

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

  /* Procura resumo */

  function searchResume() {
    setQuestions(JSON.parse(localStorage.getItem("questionApi")));
    setSubmitted(!submitted);
    setSearchOk(!searchOk);
  }

  /* Carrega dados no local storage */

  useEffect(() => {
    localStorage.setItem("questionApi", JSON.stringify(questions));
    localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
    localStorage.setItem("score", JSON.stringify(score));
    localStorage.setItem("selected", JSON.stringify(selected));
  }, [questions, correctAnswers, score, selected]);

  /* Retorna contexto */

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

/* useQuestion para utilizar o contexto */

export const useQuestion = () => {
  return useContext(QuestionContext);
};